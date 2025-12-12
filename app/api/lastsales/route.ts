import { NextResponse } from 'next/server'
import type { Sale } from '@/lib/lastsales'
import { readStored, writeStored, fetchOpenSeaSales, fetchRoninSales, fetchRoninGraphQLSales } from '@/lib/lastsales'
import { COLLECTIONS, OPENSEA_KEY, RONIN_API, RONIN_API_KEY } from '@/lib/lastsales-config'

const DAY_MS = 24 * 60 * 60 * 1000
const RONIN_RPC = process.env.RONIN_RPC_URL

function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout>
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), ms)
    }),
  ]).finally(() => clearTimeout(timer))
}

async function collectAllSales(debugMode = false) {
  const sales: Sale[] = []
  const debug: Record<string, any> = {}

  for (const col of COLLECTIONS) {
    if (!col.contract) continue

    try {
      if (col.market === 'opensea') {
        try {
          const events = await withTimeout(fetchOpenSeaSales(col.contract, 0, OPENSEA_KEY), 7000, 'OpenSea timeout')
          if (Array.isArray(events) && events.length) {
            sales.push(...events)
            if (debugMode) debug[`${col.name}:opensea`] = { count: events.length }
          } else if (debugMode) {
            debug[`${col.name}:opensea`] = { count: 0 }
          }
        } catch (err) {
          if (debugMode) debug[`${col.name}:opensea_error`] = String(err)
        }
      } else if (col.market === 'ronin') {
        let events: Sale[] = []
        try {
          if (RONIN_API) {
            events = await withTimeout(
              fetchRoninGraphQLSales(col.contract, RONIN_API, RONIN_API_KEY, 40, 0, debugMode),
              15000,
              'Ronin GraphQL timeout'
            )
          } else if (debugMode) {
            debug[`${col.name}:ronin_warning`] = 'RONIN_API_URL is not configured'
          }
        } catch (err) {
          if (debugMode) debug[`${col.name}:ronin_error`] = String(err)
        }

        if (!events || events.length === 0) {
          try {
            events = await fetchRoninSales(col.contract, 0, RONIN_RPC)
            if (debugMode && events.length) debug[`${col.name}:ronin_rpc`] = { count: events.length }
          } catch (err) {
            if (debugMode) debug[`${col.name}:ronin_rpc_error`] = String(err)
          }
        }

        if (Array.isArray(events) && events.length) {
          sales.push(...events)
          if (debugMode) debug[`${col.name}:ronin`] = { count: events.length }
        }
      }
    } catch (err) {
      if (debugMode) debug[`${col.name}:error`] = String(err)
    }
  }

  return { sales, debug }
}

function persistSales(newSales: Sale[]) {
  if (!Array.isArray(newSales) || newSales.length === 0) return

  try {
    const stored = readStored()
    const byId = new Map<string, Sale>()

    for (const sale of [...newSales, ...stored.sales]) {
      if (!sale || !sale.id) continue
      if (!byId.has(sale.id)) byId.set(sale.id, sale)
    }

    const merged = Array.from(byId.values())
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, 5000)

    const lastByCollection: Record<string, number> = {}
    for (const sale of merged) {
      const key = sale.collection || 'unknown'
      const parsed = sale.date ? Date.parse(sale.date) : NaN
      const ts = Number.isNaN(parsed) ? 0 : Math.floor(parsed / 1000)
      if (ts <= 0) continue
      if (!lastByCollection[key] || lastByCollection[key] < ts) lastByCollection[key] = ts
    }

    stored.sales = merged
    stored.last_timestamps = lastByCollection
    stored.last_refresh = Math.floor(Date.now() / 1000)
    writeStored(stored)
  } catch (err) {
    // ignore persistence errors to keep the endpoint responsive
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const live = url.searchParams.get('live') === '1' || url.searchParams.get('live') === 'true'
    const debugMode = url.searchParams.get('debug') === '1' || url.searchParams.get('debug') === 'true'
    const persistFlag = url.searchParams.get('persist') === '1' || url.searchParams.get('persist') === 'true'

    if (live) {
      const { sales, debug } = await collectAllSales(debugMode)
      if (persistFlag) persistSales(sales)
      return debugMode ? NextResponse.json({ sales, debug }) : NextResponse.json({ sales })
    }

    let stored = readStored()
    const lastRefresh = (stored.last_refresh || 0) * 1000
    const stale = !stored.sales?.length || Date.now() - lastRefresh > DAY_MS

    if (stale) {
      try {
        const { sales } = await collectAllSales(false)
        if (sales.length) {
          persistSales(sales)
          stored = readStored()
        }
      } catch (err) {
        // ignore refresh errors and fall back to cached data
      }
    }

    return NextResponse.json(stored)
  } catch (err) {
    return NextResponse.json({ error: 'failed to read data' }, { status: 500 })
  }
}

export async function POST() {
  try {
    const { sales } = await collectAllSales(false)
    if (sales.length) persistSales(sales)
    return NextResponse.json({ ok: true, count: sales.length })
  } catch (err) {
    return NextResponse.json({ error: 'refresh failed' }, { status: 500 })
  }
}
