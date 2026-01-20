import fs from 'fs'
import path from 'path'

const DATA_PATH = path.resolve(process.cwd(), 'data', 'lastsales.json')

export type Trait = { trait_type: string; value: string }

export type Sale = {
  id: string
  collection: string
  tokenId?: string
  price: number
  currency?: string
  date: string
  traits?: Trait[]
}

type Stored = {
  last_timestamps: Record<string, number>
  sales: Sale[]
  last_refresh?: number
}

function ensureDataFile() {
  const dir = path.dirname(DATA_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DATA_PATH)) {
    const initial: Stored = { last_timestamps: {}, sales: [], last_refresh: 0 }
    fs.writeFileSync(DATA_PATH, JSON.stringify(initial, null, 2))
  }
}

export function readStored(): Stored {
  ensureDataFile()
  const raw = fs.readFileSync(DATA_PATH, 'utf-8')
  try {
    const parsed = JSON.parse(raw) as Stored
    if (typeof parsed.last_refresh !== 'number') parsed.last_refresh = 0
    return parsed
  } catch (err) {
    const initial: Stored = { last_timestamps: {}, sales: [], last_refresh: 0 }
    return initial
  }
}

export function writeStored(data: Stored) {
  ensureDataFile()
  if (typeof data.last_refresh !== 'number') data.last_refresh = 0
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2))
}

/**
 * Fetch sales from OpenSea events endpoint and normalize them to Sale[]
 */
export async function fetchOpenSeaSales(contract: string, occurredAfterUnix = 0, apiKey?: string): Promise<Sale[]> {
  if (!contract) return []
  if (!process.env.OPENSEA_API_URL) {
    // default OpenSea events endpoint alternative
    process.env.OPENSEA_API_URL = 'https://api.opensea.io/api/v1/events'
  }
  const base = process.env.OPENSEA_API_URL
  const url = new URL(base)
  // prefer query by collection slug; if contract looks like address, set asset_contract_address
  if (contract && contract.startsWith('0x')) url.searchParams.set('asset_contract_address', contract)
  else url.searchParams.set('collection_slug', contract)
  url.searchParams.set('event_type', 'sale')
  if (occurredAfterUnix) url.searchParams.set('occurred_after', String(occurredAfterUnix))
  url.searchParams.set('limit', '50')

  const headers: Record<string, string> = {}
  if (apiKey) headers['X-API-KEY'] = apiKey

  const res = await fetch(url.toString(), { headers })
  if (!res.ok) throw new Error(`OpenSea fetch failed: ${res.status}`)
  const data = await res.json()

  const events = data?.events || data?.asset_events || []
  const out: Sale[] = events.map((event: any) => {
    const tokenId = event?.nft?.identifier || event?.nft?.token_id || (event?.nft?.tokenId && String(event.nft.tokenId)) || undefined
    const price = event?.payment?.quantity ? Number(event.payment.quantity) / Math.pow(10, 18) : (event?.price ? Number(event.price) : 0)
    const maker = event?.from_account?.address || event?.seller || undefined
    const matcher = event?.to_account?.address || event?.buyer || undefined
    const ts = event?.event_timestamp || event?.created_date || event?.timestamp
    const txHash = event?.transaction_hash || event?.txHash || event?.transaction?.transaction_hash
    const image = event?.nft?.image_url || event?.nft?.image || event?.image

    return {
      id: String(event.id || txHash || `${contract}-${tokenId}-${ts}`),
      collection: event?.collection?.slug || event?.nft?.collection?.slug || contract,
      tokenId: tokenId != null ? String(tokenId) : undefined,
      price: Number.isFinite(price) ? price : 0,
      currency: event?.payment?.token_symbol || event?.payment?.symbol || event?.payment_token?.symbol || 'ETH',
      date: ts || new Date().toISOString(),
      traits: [],
      // extra fields
      // @ts-ignore
      maker,
      // @ts-ignore
      matcher,
      // @ts-ignore
      txHash,
      // @ts-ignore
      image,
    }
  })

  return out
}

/**
 * Fetch recent transfer logs from Ronin RPC as a proxy for sales.
 * This is a best-effort approach: Ronin doesn't expose a unified "sales" REST like OpenSea.
 * We scan recent blocks for ERC-721 Transfer events for the contract and return them as Sale[]
 */
export async function fetchRoninSales(contract: string, occurredAfterUnix = 0, rpcUrl?: string): Promise<Sale[]> {
  if (!contract || !rpcUrl) return []

  // Helper to call JSON-RPC
  async function rpc(method: string, params: any[]) {
    const res = await fetch(rpcUrl!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
    })
    const j = await res.json()
    return j.result
  }

  // get latest block
  const latestHex = await rpc('eth_blockNumber', [])
  const latest = parseInt(latestHex, 16)
  // scan last N blocks (configurable); 20000 ~ ~ a few days depending on chain
  const SCAN_BLOCKS = 20000
  const fromBlock = Math.max(0, latest - SCAN_BLOCKS)

  // eth_getLogs params without topics (some providers restrict topics)
  const paramsNoTopic = [{ address: contract, fromBlock: '0x' + fromBlock.toString(16), toBlock: '0x' + latest.toString(16) }]

  let logs: any[] = []
  try {
    logs = await rpc('eth_getLogs', paramsNoTopic)
  } catch (err) {
    return []
  }

  const results: Sale[] = []
  for (const log of logs) {
    try {
      if (!log.topics || log.topics.length === 0) continue
      if (!log.topics[0].startsWith('0xddf252ad')) continue // Transfer signature prefix

      // tokenId usually in topics[3] or in data
      let tokenIdHex = log.topics[3] || log.data
      if (!tokenIdHex) continue
      tokenIdHex = tokenIdHex.startsWith('0x') ? tokenIdHex.slice(2) : tokenIdHex
      tokenIdHex = tokenIdHex.slice(-64)
      const tokenId = BigInt('0x' + tokenIdHex).toString()

      // get block timestamp
      const block = await rpc('eth_getBlockByNumber', [log.blockNumber, false])
      const ts = block?.timestamp ? parseInt(block.timestamp, 16) : undefined
      if (!ts) continue
      const dateMs = ts * 1000
      if (occurredAfterUnix && ts <= occurredAfterUnix) continue

      results.push({
        id: `${contract}-${log.transactionHash}-${tokenId}`,
        collection: contract,
        tokenId,
        price: 0,
        currency: 'RONIN',
        date: new Date(dateMs).toISOString(),
        traits: [],
      })
    } catch (e) {
      continue
    }
  }

  results.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  return results
}

/**
 * Fetch recent sales from Ronin GraphQL (mavis marketplace) using the provided query.
 * Returns an array of Sale normalized objects.
 */
export async function fetchRoninGraphQLSales(contract: string, apiUrl?: string, apiKey?: string, size = 50, from_ = 0, debug = false): Promise<Sale[]> {
  if (!contract || !apiUrl) return []
  const query = `
    query RecentSales($tokenAddress: String!, $from: Int!, $size: Int!) {
      recentlySolds(from: $from, size: $size, tokenAddress: $tokenAddress) {
        results {
          assets {
            token {
              __typename
              ... on Erc1155 {
                tokenIdNum: tokenId
                name
                image
              }
              ... on Erc721 {
                tokenIdStr: tokenId
                name
                image
              }
            }
            quantity
          }
          maker
          matcher
          realPrice
          timestamp
          txHash
        }
      }
    }
  `

  const variables = { tokenAddress: contract, from: from_, size }
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (apiKey) headers['x-api-key'] = apiKey

  const res = await fetch(apiUrl, { method: 'POST', headers, body: JSON.stringify({ query, variables }) })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GraphQL HTTP ${res.status}: ${body}`)
  }

  const data = await res.json()
  if (debug) {
    try { console.debug('fetchRoninGraphQLSales raw:', JSON.stringify(data).slice(0, 2000)) } catch (e) {}
  }
  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
  }

  const items = (data?.data?.recentlySolds?.results) || []
  const out: Sale[] = []
  for (const it of items) {
    try {
      const asset = it?.assets?.[0]
      const token = asset?.token
      const tokenId = token?.tokenIdNum ?? token?.tokenIdStr ?? token?.tokenId ?? null
      const txHash = it?.txHash || `${contract}-${tokenId}-${it?.timestamp}`
      const price = it?.realPrice ? Number(it.realPrice) / 1e18 : 0
      const ts = it?.timestamp ? Number(it.timestamp) : undefined
      const date = ts ? (ts > 1e12 ? new Date(ts).toISOString() : new Date(ts * 1000).toISOString()) : new Date().toISOString()
      const image = token?.image || asset?.image || null
      const name = token?.name || null
      const maker = it?.maker || null
      const matcher = it?.matcher || null
      const quantity = asset?.quantity ?? null

      out.push({
        id: String(txHash),
        collection: contract,
        tokenId: tokenId != null ? String(tokenId) : undefined,
        price,
        currency: 'RONIN',
        date,
        traits: [],
        // attach rawFields to allow UI access to extra fields
        // @ts-ignore
        txHash,
        // @ts-ignore
        maker,
        // @ts-ignore
        matcher,
        // @ts-ignore
        image,
        // @ts-ignore
        name,
        // @ts-ignore
        quantity
      })
    } catch (e) {
      continue
    }
  }

  return out
}

/**
 * Refresh all configured collections. The COLLECTIONS list should be provided by the caller
 * as an array of { name, contract, market, last_timestamp? }.
 */
export async function refreshCollections(collections: { name?: string; contract?: string; market?: string; last_timestamp?: number }[], apiKey?: string) {
  const stored = readStored()

  for (const col of collections) {
    const key = col.contract || col.name || 'unknown'
    const last = stored.last_timestamps[key] || (col.last_timestamp || 0)

    try {
      const events = await fetchOpenSeaSales(col.contract || '', last, apiKey)
      if (!events.length) continue

      // append new events (avoid duplicates by id)
      const existingIds = new Set(stored.sales.map((s) => s.id))
      const toAdd = events.filter((e) => !existingIds.has(e.id))
      stored.sales = [...toAdd, ...stored.sales].slice(0, 5000) // cap

      // update last timestamp to newest event
      const newest = Math.max(...events.map((e) => Date.parse(e.date) / 1000 || 0))
      stored.last_timestamps[key] = Math.max(stored.last_timestamps[key] || 0, newest)
    } catch (err) {
      // swallow per-collection errors so one failure doesn't stop the whole refresh
      // In production log this properly
      // console.error('refreshCollections error', err)
    }
  }

  stored.last_refresh = Math.floor(Date.now() / 1000)
  writeStored(stored)
  return stored
}

export default {
  readStored,
  writeStored,
  fetchOpenSeaSales,
  refreshCollections,
}