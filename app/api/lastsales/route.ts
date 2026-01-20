import { NextResponse } from 'next/server'
import { fetchRoninGraphQLSales } from '@/lib/lastsales'

const CONTRACT_KOJINS = process.env.CONTRACT_ADDRESS_KOJINS || ''
const CONTRACT_MOUNTS = process.env.CONTRACT_ADDRESS_MOUNTS || ''
const RONIN_API_URL = process.env.RONIN_API_URL || ''
const RONIN_API_KEY = process.env.API_KEY || ''

export async function GET() {
  try {
    // Fetch 10 sales from each collection in parallel
    const [kojinSales, mountSales] = await Promise.all([
      fetchRoninGraphQLSales(CONTRACT_KOJINS, RONIN_API_URL, RONIN_API_KEY, 10, 0),
      fetchRoninGraphQLSales(CONTRACT_MOUNTS, RONIN_API_URL, RONIN_API_KEY, 10, 0),
    ])

    // Tag each sale with its collection name for easier filtering in the UI
    const taggedKojins = kojinSales.map(s => ({ ...s, collectionName: 'kojin' }))
    const taggedMounts = mountSales.map(s => ({ ...s, collectionName: 'mount' }))

    return NextResponse.json({
      sales: [...taggedKojins, ...taggedMounts],
      kojinCount: kojinSales.length,
      mountCount: mountSales.length,
    })
  } catch (err: any) {
    console.error('LastSales API error:', err)
    return NextResponse.json({ error: err.message || 'failed to fetch sales' }, { status: 500 })
  }
}
