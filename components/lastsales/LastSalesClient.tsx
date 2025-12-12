"use client"

import * as React from 'react'
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from '@/components/ui/chart'
import * as Recharts from 'recharts'

type Trait = { trait_type: string; value: string }

export type Sale = {
  id: string
  collection: string
  tokenId?: string
  price: number // in ETH (or unit agreed)
  currency?: string
  date: string
  traits?: Trait[]
  // extra fields from fetchers
  image?: string
  maker?: string
  matcher?: string
  txHash?: string
  quantity?: number
  name?: string
}

function topN<T>(items: T[], n = 10) {
  return items.slice(0, n)
}

export default function LastSalesClient({
  sales,
}: {
  sales: Sale[]
}) {
  console.log('[LastSalesClient] rendering with', sales.length, 'sales')
  
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { 
    setMounted(true)
    console.log('[LastSalesClient] mounted')
    return () => setMounted(false)
  }, [])
  
  const [selectedCollection, setSelectedCollection] = React.useState<string | null>(null)

  const collections = React.useMemo(() => {
    const map = new Map<string, number>()
    sales.forEach((s) => map.set(s.collection, (map.get(s.collection) || 0) + 1))
    return Array.from(map.entries()).map(([collection, count]) => ({ collection, count })).sort((a,b)=>b.count-a.count)
  }, [sales])

  const filteredSales = React.useMemo(() => {
    return selectedCollection ? sales.filter(s => s.collection === selectedCollection) : sales
  }, [selectedCollection, sales])

  const traitCounts = React.useMemo(() => {
    const map = new Map<string, number>()
    filteredSales.forEach((s) => {
      (s.traits || []).forEach((t) => {
        const key = `${t.trait_type}: ${t.value}`
        map.set(key, (map.get(key) || 0) + 1)
      })
    })
    return Array.from(map.entries()).map(([trait, count]) => ({ trait, count })).sort((a,b)=>b.count-a.count)
  }, [filteredSales])

  const filteredTraitCounts = traitCounts

  console.log('[LastSalesClient] rendering UI with', filteredSales.length, 'filtered sales')
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Últimas ventas ({sales.length})</h2>
        <div>
          <label className="mr-2 text-sm">Colección:</label>
          <select
            className="rounded-md border px-2 py-1"
            value={selectedCollection ?? ''}
            onChange={(e) => setSelectedCollection(e.target.value || null)}
          >
            <option value="">Todas ({sales.length})</option>
            {collections.map((c) => (
              <option key={c.collection} value={c.collection}>
                {c.collection.slice(0,10)} ({c.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-lg border p-4">
            <ChartContainer
              id="traits-top"
              config={{ count: { label: 'Ventas', color: 'var(--color-primary)' } }}
              className="h-64"
            >
              <Recharts.BarChart data={topN(filteredTraitCounts, 10)} layout="vertical" margin={{ left: 16, right: 8 }}>
                <Recharts.CartesianGrid strokeDasharray="3 3" />
                <Recharts.XAxis type="number" />
                <Recharts.YAxis dataKey="trait" type="category" width={200} />
                <Recharts.Tooltip content={<ChartTooltip />} />
                <Recharts.Bar dataKey="count" fill="var(--color-count)" />
              </Recharts.BarChart>
            </ChartContainer>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Ventas recientes ({filteredSales.length})</h3>
            {filteredSales.length === 0 ? (
              <div className="py-4 text-center text-muted-foreground">No hay ventas para mostrar.</div>
            ) : (
              <ul className="divide-y">
                {filteredSales.slice(0, 12).map((s, i) => (
                  <li
                    key={s.id}
                    className="flex items-center justify-between gap-4 py-2"
                    style={{
                      opacity: mounted ? 1 : 1,
                      transform: mounted ? 'translateY(0px)' : 'translateY(8px)',
                      transition: 'opacity 360ms ease, transform 360ms ease',
                      transitionDelay: mounted ? `${i * 50}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={s.image || `https://via.placeholder.com/56?text=NFT`} 
                        alt={s.name || s.tokenId || 'NFT'} 
                        className="h-14 w-14 rounded object-cover bg-gray-200" 
                        crossOrigin="anonymous"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/56?text=NFT';
                        }}
                      />
                    <div>
                      <div className="font-medium">{s.name || s.collection} {s.tokenId ? `#${s.tokenId}` : ''}</div>
                      <div className="text-sm text-muted-foreground">{new Date(s.date).toLocaleString()}</div>
                      <div className="text-sm">{(s.traits||[]).map(t=>`${t.trait_type}: ${t.value}`).join(' • ')}</div>
                    </div>
                  </div>
                    <div className="text-right">
                      <div className="font-mono font-medium">{s.price.toFixed(2)} {s.currency ?? 'ETH'}</div>
                      <div className="text-sm text-muted-foreground">Buyer: {(s.matcher || s.maker || '—').slice(0,10)}</div>
                      <div className="text-sm text-muted-foreground">Seller: {(s.maker || '—').slice(0,10)}</div>
                      {s.quantity ? <div className="text-sm">Qty: {s.quantity}</div> : null}
                      {s.txHash ? (
                        <div className="text-xs text-muted-foreground">
                          <a className="underline" href={s.currency === 'RONIN' ? `https://app.roninchain.com/tx/${s.txHash}` : `https://etherscan.io/tx/${s.txHash}`} target="_blank" rel="noreferrer">Ver tx</a>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Top colecciones</h3>
            <ChartContainer id="collections" className="h-48" config={{ count: { label: 'Ventas', color: 'var(--color-accent)' } }}>
              <Recharts.PieChart>
                <Recharts.Tooltip content={<ChartTooltip />} />
                <Recharts.Pie data={topN(collections, 6)} dataKey="count" nameKey="collection" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label />
              </Recharts.PieChart>
            </ChartContainer>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-medium">Export / Conectar API</h3>
            <p className="text-sm text-muted-foreground">Puedes conectar aquí una API real (OpenSea, Covalent, Moralis) y pasar las ventas como prop a este componente. Mira los comments en `app/lastsales/page.tsx`.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
