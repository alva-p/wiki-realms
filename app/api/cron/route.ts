import { NextRequest, NextResponse } from 'next/server'
import { refreshCollections } from '@/lib/lastsales'
import { COLLECTIONS, OPENSEA_KEY } from '@/lib/lastsales-config'

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET
  const authHeader = request.headers.get('authorization')

  if (secret && authHeader !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const result = await refreshCollections(COLLECTIONS, OPENSEA_KEY)
    return NextResponse.json({ ok: true, result })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'refresh failed' }, { status: 500 })
  }
}
