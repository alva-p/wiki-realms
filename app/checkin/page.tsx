"use client"

import * as React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

type Entry = {
  rank: number
  user_id: string
  username: string
  total_points: number
}

const MEDAL: Record<number, { icon: string; color: string; bg: string }> = {
  1: { icon: '🥇', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30' },
  2: { icon: '🥈', color: 'text-slate-300', bg: 'bg-slate-300/10 border-slate-300/30' },
  3: { icon: '🥉', color: 'text-amber-600', bg: 'bg-amber-600/10 border-amber-600/30' },
}

export default function CheckinPage() {
  const [data, setData] = React.useState<Entry[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('/api/checkin-top')
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error)
        setData(json)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const top3 = data.slice(0, 3)
  const rest = data.slice(3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto py-12 flex-1 max-w-2xl px-4">

        <div className="text-center mb-12">
          <div className="text-5xl mb-3">🏆</div>
          <h1 className="text-4xl font-bold tracking-tight">Top Daily Check In</h1>
          <p className="text-muted-foreground mt-2">Most active members on the server</p>
        </div>

        {loading && (
          <div className="text-center text-muted-foreground text-lg py-20">Cargando...</div>
        )}

        {error && (
          <div className="rounded-xl border-2 border-red-500 bg-red-50 p-6 text-red-700 text-center">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-3">
            {/* Top 3 destacados */}
            {top3.map((entry) => {
              const medal = MEDAL[entry.rank]
              return (
                <div
                  key={entry.user_id}
                  className={`flex items-center gap-4 rounded-xl border px-6 py-5 ${medal.bg} transition-all`}
                >
                  <span className="text-4xl w-10 text-center">{medal.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xl font-bold truncate ${medal.color}`}>
                      {entry.username}
                    </div>
                    <div className="text-xs text-muted-foreground">Rank #{entry.rank}</div>
                  </div>
                  <div className={`text-2xl font-black tabular-nums ${medal.color}`}>
                    {entry.total_points.toLocaleString()}
                    <span className="text-sm font-normal ml-1 opacity-70">pts</span>
                  </div>
                </div>
              )
            })}

            {/* Resto */}
            {rest.length > 0 && (
              <div className="rounded-xl border overflow-hidden mt-2">
                {rest.map((entry) => (
                  <div
                    key={entry.user_id}
                    className="flex items-center gap-4 px-6 py-4 border-b last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <span className="text-lg font-bold text-muted-foreground w-8 text-center">
                      {entry.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base truncate">{entry.username}</div>
                    </div>
                    <div className="font-bold text-lg tabular-nums">
                      {entry.total_points.toLocaleString()}
                      <span className="text-sm font-normal ml-1 text-muted-foreground">pts</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
