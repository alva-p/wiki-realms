"use client"

import * as React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

type Sale = {
  id: string
  collection: string
  tokenId?: string
  price: number
  currency?: string
  date: string
  image?: string
  maker?: string
  matcher?: string
  txHash?: string
  quantity?: number | string
  name?: string
}

export default function Page() {
  const [sales, setSales] = React.useState<Sale[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    console.log('[LastSales Page] useEffect triggered')
    let mounted = true
    
    async function fetchSales() {
      try {
        console.log('[LastSales Page] Starting fetch...')
        setLoading(true)
        setError(null)
        
        const res = await fetch('/api/lastsales?live=1&debug=1')
        console.log('[LastSales Page] Fetch response:', res.status, res.ok)
        
        const text = await res.text()
        console.log('[LastSales Page] Response text length:', text.length)
        
        const data = JSON.parse(text)
        console.log('[LastSales Page] Parsed data:', data)
        
        const salesData = Array.isArray(data) ? data : (data?.sales ?? [])
        console.log('[LastSales Page] Sales count:', salesData.length)
        
        if (mounted) {
          setSales(salesData)
          console.log('[LastSales Page] State updated with', salesData.length, 'sales')
        }
      } catch (e: any) {
        console.error('[LastSales Page] Error:', e)
        if (mounted) {
          setError(e.message || String(e))
        }
      } finally {
        if (mounted) {
          setLoading(false)
          console.log('[LastSales Page] Loading complete')
        }
      }
    }
    
    fetchSales()
    return () => {
      mounted = false
      console.log('[LastSales Page] Cleanup')
    }
  }, [])

  console.log('[LastSales Page] Rendering - loading:', loading, 'error:', error, 'sales:', sales.length)

  // Separar ventas por colección
  const kojinSales = React.useMemo(() => 
    sales.filter(s => s.name?.toLowerCase().includes('kojin') || s.collection.includes('7766f63c')),
    [sales]
  )
  
  const mountSales = React.useMemo(() => 
    sales.filter(s => s.name?.toLowerCase().includes('mount') || s.collection.includes('6302a5d5')),
    [sales]
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto py-8 flex-1">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Last Sales</h1>
          
          {loading && (
            <div className="rounded-lg border p-8 text-center">
              <div className="text-xl mb-2">🔄 Loading sales...</div>
              <div className="text-sm text-muted-foreground">This may take a few seconds</div>
            </div>
          )}
          
          {error && (
            <div className="rounded-lg border-2 border-red-500 bg-red-50 p-6">
              <div className="text-xl font-bold text-red-800 mb-2">❌ Error</div>
              <div className="text-red-700">{error}</div>
              <button 
                className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                onClick={() => window.location.reload()}
              >
                Reintentar
              </button>
            </div>
          )}
          
          {!loading && !error && sales.length === 0 && (
            <div className="rounded-lg border-2 border-yellow-500 bg-yellow-50 p-6">
              <div className="text-xl font-bold text-yellow-800">⚠️ No sales</div>
              <div className="text-yellow-700 mt-2">No recent sales found</div>
            </div>
          )}
          
          {!loading && !error && sales.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Columna KOJIN */}
              <div className="space-y-4">
                <div className="rounded-lg p-4 text-center">
                  <h2 className="text-2xl font-bold text-white">KOJIN</h2>
                  <p className="text-sm text-white opacity-80">{kojinSales.length} recent sales</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {kojinSales.slice(0, 10).map((sale, idx) => (
                    <div 
                      key={`kojin-${sale.id}-${idx}`} 
                      className="rounded-lg border-2 border-purple-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col gap-2">
                        <img 
                          src={sale.image || 'https://via.placeholder.com/80?text=NFT'} 
                          alt={`#${sale.tokenId}`}
                          className="w-full aspect-square rounded-lg object-cover bg-gray-200"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement
                            img.src = 'https://via.placeholder.com/80?text=NFT'
                          }}
                        />
                        
                        <div className="space-y-1">
                          <div className="font-bold text-base text-purple-900 text-center">
                            #{sale.tokenId}
                          </div>
                          <div className="text-[10px] text-gray-500 text-center">
                            {new Date(sale.date).toLocaleDateString()}
                          </div>
                          
                          <div className="space-y-0.5 text-[10px] pt-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Seller:</span>
                              <span className="font-mono text-gray-800">{(sale.maker || '').slice(0, 6)}...</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Buyer:</span>
                              <span className="font-mono text-gray-800">{(sale.matcher || '').slice(0, 6)}...</span>
                            </div>
                            <div className="flex justify-between items-center pt-1 border-t">
                              <span className="font-semibold text-purple-700">Precio:</span>
                              <span className="font-bold text-sm text-purple-900">{sale.price.toFixed(1)} RON</span>
                            </div>
                          </div>
                          
                          {sale.txHash && (
                            <a 
                              href={`https://app.roninchain.com/tx/${sale.txHash}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-blue-600 hover:underline block text-center"
                            >
                              Ver tx →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna MOUNTS */}
              <div className="space-y-4">
                <div className="rounded-lg p-4 text-center">
                  <h2 className="text-2xl font-bold text-white">MOUNTS</h2>
                  <p className="text-sm text-white opacity-80">{mountSales.length} recent sales</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {mountSales.slice(0, 10).map((sale, idx) => (
                    <div 
                      key={`mount-${sale.id}-${idx}`} 
                      className="rounded-lg border-2 border-green-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col gap-2">
                        <img 
                          src={sale.image || 'https://via.placeholder.com/80?text=NFT'} 
                          alt={`#${sale.tokenId}`}
                          className="w-full aspect-square rounded-lg object-cover bg-gray-200"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement
                            img.src = 'https://via.placeholder.com/80?text=NFT'
                          }}
                        />
                        
                        <div className="space-y-1">
                          <div className="font-bold text-base text-green-900 text-center">
                            #{sale.tokenId}
                          </div>
                          <div className="text-[10px] text-gray-500 text-center">
                            {new Date(sale.date).toLocaleDateString()}
                          </div>
                          
                          <div className="space-y-0.5 text-[10px] pt-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Seller:</span>
                              <span className="font-mono text-gray-800">{(sale.maker || '').slice(0, 6)}...</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Buyer:</span>
                              <span className="font-mono text-gray-800">{(sale.matcher || '').slice(0, 6)}...</span>
                            </div>
                            <div className="flex justify-between items-center pt-1 border-t">
                              <span className="font-semibold text-green-700">Precio:</span>
                              <span className="font-bold text-sm text-green-900">{sale.price.toFixed(1)} RON</span>
                            </div>
                          </div>
                          
                          {sale.txHash && (
                            <a 
                              href={`https://app.roninchain.com/tx/${sale.txHash}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-blue-600 hover:underline block text-center"
                            >
                              Ver tx →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

