import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { holdersSnapshot, type HolderSnapshot } from '@/data/holders-snapshot'

const SNAPSHOT_KEY = 'kojin:holders-snapshot'

const isKvConfigured = Boolean(
  process.env.KV_REST_API_URL ||
    process.env.KV_REST_API_TOKEN ||
    process.env.VERCEL_KV_REST_API_URL ||
    process.env.VERCEL_KV_REST_API_TOKEN
)

export async function GET() {
  if (isKvConfigured) {
    const snapshot = await kv.get<HolderSnapshot>(SNAPSHOT_KEY)
    if (snapshot) {
      return NextResponse.json(snapshot)
    }
  }

  return NextResponse.json(holdersSnapshot)
}
