"use client"

// LastSalesFetcher: client-side component that fetches sales from /api/lastsales?live=1&debug=1
// Supports both array and { sales: [...] } payload shapes.
// Logs payload to console for debugging and displays friendly loading/error states.

import * as React from 'react'
import LastSalesClient, { Sale } from './LastSalesClient'

export default function LastSalesFetcher() {
  const [sales, setSales] = React.useState<Sale[]>([]) 
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [debug, setDebug] = React.useState<string | null>(null)

  React.useEffect(() => {
    let mounted = true
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const controller = new AbortController()
        const timeoutMs = 90000 // 90s - keep client responsive but allow slower upstream
        const timeout = setTimeout(() => controller.abort(), timeoutMs)
        let res: Response
        try {
          res = await fetch('/api/lastsales?live=1&debug=1', { signal: controller.signal })
        } catch (err: any) {
          // rethrow to outer catch so we handle cleanup below
          throw err
        } finally {
          clearTimeout(timeout)
        }
        const txt = await res.text()
        // try parse JSON if possible for debugging
        let data: any = null
        try { data = JSON.parse(txt) } catch (e) { data = txt }
        console.log('[LastSalesFetcher] fetched payload:', data)
        // attach debug info and also log full payload to console for inspection
        if (mounted) setDebug(`status=${res.status} body=${typeof data === 'string' ? data : JSON.stringify(data).slice(0,2000)}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${typeof data === 'string' ? data : JSON.stringify(data)}`)
        // Support either direct array response or { sales: [...] }
        const salesPayload = Array.isArray(data) ? data : (data?.sales ?? [])
        console.log('[LastSalesFetcher] salesPayload length:', salesPayload.length, 'first 3:', salesPayload.slice(0,3))
        if (mounted) {
          setSales(salesPayload)
          console.log('[LastSalesFetcher] state updated with', salesPayload.length, 'sales')
        }
      } catch (e: any) {
        console.error('[LastSalesFetcher] error:', e)
        // Handle aborts with a friendly message and keep debug info for retries
        const isAbort = e?.name === 'AbortError' || (e && String(e).toLowerCase().includes('aborted'))
        if (mounted) {
          if (isAbort) setError(`Request timed out after ${90000/1000}s`) 
          else setError(e?.message || String(e))
        }
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-xl">Cargando últimas ventas...</div>
          <div className="text-sm text-muted-foreground">Esto puede tomar unos segundos</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded border border-red-400 bg-red-50 p-4">
        <div className="mb-2 font-semibold text-red-800">Error al cargar ventas</div>
        <div className="mb-4 text-sm text-red-700">{error}</div>
        <button className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700" onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    )
  }

  if (!sales || sales.length === 0) {
    return (
      <div className="rounded border border-yellow-400 bg-yellow-50 p-4">
        <div className="mb-2 font-semibold text-yellow-800">No se encontraron ventas recientes</div>
        {debug ? <pre className="mt-2 text-xs text-yellow-700 whitespace-pre-wrap">{debug}</pre> : null}
        <div className="mt-4">
          <button className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    )
  }

  console.log('[LastSalesFetcher] rendering LastSalesClient with', sales.length, 'sales')
  return <LastSalesClient sales={sales} />
}
