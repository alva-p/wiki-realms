const DEFAULT_ENDPOINT =
  'https://developers.roninchain.com/console/applications/a9d76922-7ceb-4a45-a33d-a83476cdfd59/graphql/'
const DEFAULT_TOKEN_ADDRESS = '0x7766f63c9e921ea97f1b688af27348f2139724a7'
const DEFAULT_SUPPLY = 999
const DEFAULT_CONCURRENCY = 4
const DEFAULT_BATCH_DELAY_MS = 400
const SOURCE_URL =
  'https://app.roninchain.com/token/0x7766f63c9e921ea97f1b688af27348f2139724a7?t=owners&p=1&ps=100'

const endpoint = process.env.RONIN_GRAPHQL_ENDPOINT || DEFAULT_ENDPOINT
const apiKey = process.env.RONIN_GRAPHQL_API_KEY
const tokenAddress = process.env.KOJIN_TOKEN_ADDRESS || DEFAULT_TOKEN_ADDRESS
const totalSupply = Number.parseInt(process.env.KOJIN_TOTAL_SUPPLY || `${DEFAULT_SUPPLY}`, 10)
const concurrency = Number.parseInt(process.env.CONCURRENCY || `${DEFAULT_CONCURRENCY}`, 10)
const batchDelayMs = Number.parseInt(
  process.env.BATCH_DELAY_MS || `${DEFAULT_BATCH_DELAY_MS}`,
  10
)
const startToken = Number.parseInt(process.env.START_TOKEN || '1', 10)

const query = `
  query KojinToken($tokenAddress: String!, $tokenId: String!) {
    erc721Token(tokenAddress: $tokenAddress, tokenId: $tokenId) {
      tokenId
      name
      attributes
      image
      cdnImage
      owner
    }
  }
`

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const fetchToken = async (tokenId, attempt = 1) => {
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
        tokenId: String(tokenId),
      },
    }),
  })

  if (!response.ok) {
    if (attempt < 6) {
      const retryAfter = response.headers.get('retry-after')
      const waitMs = retryAfter ? Number.parseInt(retryAfter, 10) * 1000 : 1000 * attempt
      await delay(waitMs)
      return fetchToken(tokenId, attempt + 1)
    }
    throw new Error(`HTTP ${response.status} for token ${tokenId}`)
  }

  const payload = await response.json()

  if (payload.errors?.length) {
    if (attempt < 6) {
      await delay(800 * attempt)
      return fetchToken(tokenId, attempt + 1)
    }
    throw new Error(`GraphQL error for token ${tokenId}: ${payload.errors[0].message}`)
  }

  return payload.data?.erc721Token ?? null
}

const buildSnapshot = async () => {
  const holdersMap = new Map()
  const tokens = []

  const tokenIds = Array.from({ length: totalSupply }, (_, index) => index + 1).filter(
    tokenId => tokenId >= startToken
  )

  for (let index = 0; index < tokenIds.length; index += concurrency) {
    const batch = tokenIds.slice(index, index + concurrency)
    const results = await Promise.all(batch.map(tokenId => fetchToken(tokenId)))

    results.forEach(token => {
      if (!token || !token.owner) return
      const owner = token.owner.toLowerCase()
      const entry = holdersMap.get(owner) || { address: owner, count: 0, tokenIds: [] }
      entry.count += 1
      entry.tokenIds.push(Number(token.tokenId))
      holdersMap.set(owner, entry)

      tokens.push({
        tokenId: Number(token.tokenId),
        owner,
        name: token.name ?? undefined,
        image: token.image ?? undefined,
        cdnImage: token.cdnImage ?? undefined,
        attributes: token.attributes ?? undefined,
      })
    })

    process.stdout.write(`Processed ${Math.min(index + concurrency, tokenIds.length)} / ${tokenIds.length}\n`)
    if (batchDelayMs > 0) {
      await delay(batchDelayMs)
    }
  }

  const holders = Array.from(holdersMap.values()).sort((a, b) => b.count - a.count)
  holders.forEach(holder => holder.tokenIds.sort((a, b) => a - b))

  const asOfUnix = Math.floor(Date.now() / 1000)
  const asOfUtc = new Date(asOfUnix * 1000).toISOString().replace('T', ' ').replace('.000Z', 'Z')

  const snapshot = {
    totalSupply,
    asOfUnix,
    asOfUtc,
    sourceUrl: SOURCE_URL,
    holders,
    tokens: tokens.sort((a, b) => a.tokenId - b.tokenId),
  }

  return snapshot
}

const writeSnapshot = async snapshot => {
  const { writeFile } = await import('node:fs/promises')
  const filePath = new URL('../data/holders-snapshot.ts', import.meta.url)

  const contents = `export interface HolderEntry {\n  address: string\n  count: number\n  tokenIds?: number[]\n}\n\nexport interface TokenEntry {\n  tokenId: number\n  owner: string\n  name?: string\n  image?: string\n  cdnImage?: string\n  attributes?: Record<string, string[]>\n}\n\nexport interface HolderSnapshot {\n  totalSupply: number\n  asOfUnix: number\n  asOfUtc: string\n  sourceUrl: string\n  holders: HolderEntry[]\n  tokens?: TokenEntry[]\n}\n\nexport const holdersSnapshot: HolderSnapshot = ${JSON.stringify(snapshot, null, 2)}\n`

  await writeFile(filePath, contents, 'utf8')
}

buildSnapshot()
  .then(writeSnapshot)
  .then(() => {
    process.stdout.write('Snapshot actualizado en data/holders-snapshot.ts\n')
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
