import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

async function resolveDiscordUsername(userId: string): Promise<string> {
  try {
    const res = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: { Authorization: `Bot ${process.env.DISCORD_TOKEN}` },
    })
    if (!res.ok) return userId
    const user = await res.json()
    return user.global_name ?? user.username ?? userId
  } catch {
    return userId
  }
}

export async function GET() {
  try {
    const top = await prisma.users.findMany({
      orderBy: { total_points: 'desc' },
      take: 10,
      select: { user_id: true, total_points: true },
    })

    const data = await Promise.all(
      top.map(async (u, i) => ({
        rank: i + 1,
        user_id: u.user_id.toString(),
        username: await resolveDiscordUsername(u.user_id.toString()),
        total_points: Number(u.total_points ?? 0),
      }))
    )

    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
