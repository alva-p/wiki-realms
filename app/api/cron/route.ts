import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

const SNAPSHOT_KEY = 'kojin:holders-snapshot'
const DEFAULT_ENDPOINT =
  'https://api-gateway.skymavis.com/graphql/mavis-marketplace'
const DEFAULT_TOKEN_ADDRESS = '0x7766f63c9e921ea97f1b688af27348f2139724a7'
const DEFAULT_TOTAL_SUPPLY = 999
const PAGE_SIZE = 200

const endpoint = process.env.RONIN_GRAPHQL_ENDPOINT || DEFAULT_ENDPOINT
const apiKey = process.env.RONIN_GRAPHQL_API_KEY
const tokenAddress = process.env.KOJIN_TOKEN_ADDRESS || DEFAULT_TOKEN_ADDRESS
const totalSupply = Number.parseInt(
  process.env.KOJIN_TOTAL_SUPPLY || `${DEFAULT_TOTAL_SUPPLY}`,
  10
)

const query = `
  query KojinTokens($tokenAddress: String!, $first: Int!, $after: String) {
    erc721Tokens(tokenAddress: $tokenAddress, first: $first, after: $after) {
      edges {
        node {
          tokenId
          name
          attributes
          image
          cdnImage
          owner
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

const fetchPage = async (cursor: string | null) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(apiKey ? { 'x-api-key': apiKey } : {}),
    },
    body: JSON.stringify({
      query,
      variables: {
        tokenAddress,
        first: PAGE_SIZE,
        after: cursor,
      },
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  const payload = await response.json()
  if (payload.errors?.length) {
    throw new Error(payload.errors[0].message)
  }

  return payload.data.erc721Tokens
}

const extractOwner = (ownerValue: unknown) => {
  if (typeof ownerValue === 'string') return ownerValue
  if (!ownerValue || typeof ownerValue !== 'object') return null
  const owner = ownerValue as { addresses?: { ronin?: string }; address?: string }
  return owner.addresses?.ronin || owner.address || null
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const holdersMap = new Map<string, { address: string; count: number; tokenIds: number[] }>()
  const tokens: Array<{
    tokenId: number
    owner: string
    name?: string
    image?: string
    cdnImage?: string
    attributes?: Record<string, string[]>
  }> = []

  let cursor: string | null = null
  let hasNextPage = true

  while (hasNextPage) {
    const page = await fetchPage(cursor)

    page.edges.forEach((edge: { node: { tokenId: string; owner: unknown; name?: string; image?: string; cdnImage?: string; attributes?: Record<string, string[]> } }) => {
      const tokenId = Number(edge.node.tokenId)
      const owner = extractOwner(edge.node.owner)
      if (!owner || Number.isNaN(tokenId)) return

      const normalizedOwner = owner.toLowerCase()
      const entry = holdersMap.get(normalizedOwner) || {
        address: normalizedOwner,
        count: 0,
        tokenIds: [],
      }

      entry.count += 1
      entry.tokenIds.push(tokenId)
      holdersMap.set(normalizedOwner, entry)

      tokens.push({
        tokenId,
        owner: normalizedOwner,
        name: edge.node.name ?? undefined,
        image: edge.node.image ?? undefined,
        cdnImage: edge.node.cdnImage ?? undefined,
        attributes: edge.node.attributes ?? undefined,
      })
    })

    cursor = page.pageInfo.endCursor
    hasNextPage = page.pageInfo.hasNextPage
  }

  const holders = Array.from(holdersMap.values()).sort((a, b) => b.count - a.count)
  holders.forEach(holder => holder.tokenIds.sort((a, b) => a - b))
  tokens.sort((a, b) => a.tokenId - b.tokenId)

  const asOfUnix = Math.floor(Date.now() / 1000)
  const asOfUtc = new Date(asOfUnix * 1000).toISOString().replace('T', ' ').replace('.000Z', 'Z')

  const snapshot = {
    totalSupply,
    asOfUnix,
    asOfUtc,
    sourceUrl:
      'https://app.roninchain.com/token/0x7766f63c9e921ea97f1b688af27348f2139724a7?t=owners&p=1&ps=100',
    holders,
    tokens,
  }

  await kv.set(SNAPSHOT_KEY, snapshot)

  return NextResponse.json({ ok: true, holders: holders.length, tokens: tokens.length })
}
