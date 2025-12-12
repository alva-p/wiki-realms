import prisma from './prisma'
import { fetchOpenSeaSales } from './lastsales'

export async function readSalesFromDb() {
  const rows = await prisma.sale.findMany({ orderBy: { date: 'desc' }, take: 5000 })
  return rows.map((r) => ({
    id: r.id,
    collection: r.collection,
    tokenId: r.tokenId || undefined,
    price: r.price,
    currency: r.currency || undefined,
    date: r.date.toISOString(),
    traits: r.traits ? JSON.parse(r.traits as unknown as string) : undefined,
  }))
}

export async function upsertCollectionState(contract: string, name?: string, market?: string, lastTimestamp = 0) {
  return prisma.collectionState.upsert({
    where: { contract },
    update: { name, market, lastTimestamp },
    create: { contract, name, market, lastTimestamp },
  })
}

export async function getCollectionState(contract: string) {
  return prisma.collectionState.findUnique({ where: { contract } })
}

export async function writeSalesToDb(sales: any[]) {
  // insert many (skip existing by id)
  for (const s of sales) {
    await prisma.sale.upsert({
      where: { id: s.id },
      update: { price: s.price, updatedAt: new Date() },
      create: {
        id: s.id,
        collection: s.collection || 'unknown',
        tokenId: s.tokenId || null,
        price: s.price || 0,
        currency: s.currency || null,
        date: new Date(s.date),
        traits: s.traits ? JSON.stringify(s.traits) : null,
      },
    })
  }
}

export async function refreshCollectionsDb(collections: { name?: string; contract?: string; market?: string; last_timestamp?: number }[], apiKey?: string) {
  for (const col of collections) {
    const state = await getCollectionState(col.contract || '')
    const last = state?.lastTimestamp || (col.last_timestamp || 0)
    const events = await fetchOpenSeaSales(col.contract || '', last, apiKey)
    if (!events.length) continue
    await writeSalesToDb(events)
    const newest = Math.max(...events.map((e) => Date.parse(e.date) / 1000 || 0))
    await upsertCollectionState(col.contract || '', col.name, col.market, Math.max(last, newest))
  }
}

export default {
  readSalesFromDb,
  writeSalesToDb,
  refreshCollectionsDb,
  upsertCollectionState,
  getCollectionState,
}
