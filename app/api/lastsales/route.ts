import { NextResponse } from 'next/server'
import { readStored, writeStored, refreshCollections, fetchOpenSeaSales, fetchRoninSales, fetchRoninGraphQLSales } from '@/lib/lastsales'
import { COLLECTIONS, OPENSEA_KEY, RONIN_API, RONIN_API_KEY } from '@/lib/lastsales-config'

export async function GET(request: Request) {
  try {
    // helper: fetch with timeout using AbortController
    const fetchWithTimeout = async (input: RequestInfo, init: RequestInit = {}, ms = 15000) => {
      const controller = new AbortController()
      const id = setTimeout(() => controller.abort(), ms)
      try {
        const res = await fetch(input, { ...init, signal: controller.signal })
        return res
      } finally {
        clearTimeout(id)
      }
    }

    const url = new URL(request.url)
    const live = url.searchParams.get('live') === '1' || url.searchParams.get('live') === 'true'
    const debugMode = url.searchParams.get('debug') === '1' || url.searchParams.get('debug') === 'true'

    // If client requested live data, fetch directly from OpenSea and return recent sales
    if (live) {
      const all: any[] = []
      const debug: Record<string, any> = {}
      for (const col of COLLECTIONS) {
        try {
        if (!col.contract) continue
        if (col.market === 'opensea') {
          if (debugMode) {
            try {
              const base = process.env.OPENSEA_API_URL || 'https://api.opensea.io/api/v1/events'
              const u = new URL(base)
              if (col.contract && col.contract.startsWith('0x')) u.searchParams.set('asset_contract_address', col.contract)
              else u.searchParams.set('collection_slug', col.contract)
              u.searchParams.set('event_type', 'sale')
              u.searchParams.set('limit', '10')
              const headers: Record<string,string> = {}
              if (OPENSEA_KEY) headers['X-API-KEY'] = OPENSEA_KEY
              const r = await fetchWithTimeout(u.toString(), { headers }, 5000)
              const text = await r.text()
              debug[col.name + ':opensea_raw'] = { status: r.status, body: text.slice(0, 4000) }
            } catch (e) {
              debug[col.name + ':opensea_raw'] = { error: String(e) }
            }
          }
          // Try OpenSea but fail fast (don't block the route for long)
          try {
            const evPromise = fetchOpenSeaSales(col.contract, 0, OPENSEA_KEY)
            const evTimeout = new Promise<any>((_, rej) => setTimeout(() => rej(new Error('OpenSea timeout')), 5000))
            const events = await Promise.race([evPromise, evTimeout])
            if (debugMode) debug[col.name + ':opensea'] = { count: events.length, sample: events[0] || null }
            all.push(...(events || []))
          } catch (e) {
            if (debugMode) debug[col.name + ':error'] = String(e)
          }
        } else if (col.market === 'ronin') {
          // prefer GraphQL API for Ronin: do a direct POST with timeout and parse results
          let events: any[] = []
          try {
            const q = `{"query":"query RecentSales($tokenAddress: String!, $from: Int!, $size: Int!) { recentlySolds(from: $from, size: $size, tokenAddress: $tokenAddress) { results { assets { token { __typename ... on Erc721 { tokenIdStr: tokenId name image } ... on Erc1155 { tokenIdNum: tokenId name image } } quantity } maker matcher realPrice timestamp txHash } } }","variables":${JSON.stringify({ tokenAddress: col.contract, from: 0, size: 10 })}}`
            const headers: Record<string,string> = { 'Content-Type': 'application/json' }
            if (RONIN_API_KEY) headers['x-api-key'] = RONIN_API_KEY
            const r2 = await fetchWithTimeout(RONIN_API || '', { method: 'POST', headers, body: q }, 20000)
            const text2 = await r2.text()
            if (debugMode) debug[col.name + ':ronin_raw'] = { status: r2.status, body: text2.slice(0, 4000) }
            if (r2.ok) {
              try {
                const parsed = JSON.parse(text2)
                const items = parsed?.data?.recentlySolds?.results || []
                const mapped = items.map((it: any) => {
                  const asset = it?.assets?.[0]
                  const token = asset?.token || {}
                  const tokenId = token?.tokenIdStr ?? token?.tokenIdNum ?? token?.tokenId ?? null
                  const txHash = it?.txHash || `${col.contract}-${tokenId}-${it?.timestamp}`
                  const price = it?.realPrice ? Number(it.realPrice) / 1e18 : 0
                  const ts = it?.timestamp ? Number(it.timestamp) : undefined
                  const date = ts ? (ts > 1e12 ? new Date(ts).toISOString() : new Date(ts * 1000).toISOString()) : new Date().toISOString()
                  const image = token?.image || asset?.image || null
                  return {
                    id: String(txHash),
                    collection: col.contract,
                    tokenId: tokenId != null ? String(tokenId) : undefined,
                    price,
                    currency: 'RONIN',
                    date,
                    traits: [],
                    maker: it?.maker || null,
                    matcher: it?.matcher || null,
                    txHash,
                    image,
                    name: token?.name || null,
                    quantity: asset?.quantity ?? null,
                  }
                })
                if (mapped && mapped.length) events = mapped
              } catch (e) {
                // ignore parse errors
              }
            }
          } catch (e) {
            if (debugMode) debug[col.name + ':ronin_raw'] = { error: String(e) }
          }
          // fallback to RPC-based scanning if GraphQL returned nothing
          if (!events || events.length === 0) {
            try {
              events = await fetchRoninSales(col.contract, 0, process.env.RONIN_RPC_URL)
            } catch (e) {
              events = []
            }
          }
          if (debugMode) debug[col.name + ':ronin'] = { count: events.length, sample: events[0] || null }
          all.push(...events)
        }
        } catch (e) {
          // continue on per-collection errors
          if (debugMode) debug[col.name + ':error'] = String(e)
        }
      }

      // persist option: ?persist=1 will save results to data/lastsales.json
      const url = new URL(request.url)
      const persist = url.searchParams.get('persist') === '1' || url.searchParams.get('persist') === 'true'
      if (persist) {
        try {
          const stored = readStored()
          const existingIds = new Set(stored.sales.map((s:any)=>s.id))
          const toAdd = all.filter((s:any)=>!existingIds.has(s.id))
          stored.sales = [...toAdd, ...stored.sales].slice(0,5000)
          // update last_timestamps per contract
          for (const s of toAdd) {
            const key = s.collection || 'unknown'
            const ts = s.date ? Math.floor(Date.parse(s.date)/1000) : 0
            stored.last_timestamps[key] = Math.max(stored.last_timestamps[key]||0, ts)
          }
          writeStored(stored)
        } catch (e) {
          // ignore persist errors
        }
      }

      if (debugMode) {
        try { console.debug('lastsales debug:', debug) } catch (e) {}
        return NextResponse.json({ sales: all, debug })
      }
      return NextResponse.json({ sales: all })
    }

    const data = readStored()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'failed to read data' }, { status: 500 })
  }
}

export async function POST() {
  // Trigger a refresh of the configured collections
  try {
    const result = await refreshCollections(COLLECTIONS, OPENSEA_KEY)
    return NextResponse.json({ ok: true, result })
  } catch (err) {
    return NextResponse.json({ error: 'refresh failed' }, { status: 500 })
  }
}
