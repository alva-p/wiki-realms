'use client'

import { useEffect, useMemo, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { abilities } from '@/data/abilities'
import { holdersSnapshot, type HolderSnapshot } from '@/data/holders-snapshot'

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/

const formatPct = (count: number, total: number) => ((count / total) * 100).toFixed(2)
const normalizeKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')
const normalizeTraitType = (value: string) => {
  const normalized = normalizeKey(value)
  return normalized.endsWith('s') ? normalized.slice(0, -1) : normalized
}

export default function ItemsPage() {
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null)
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const [snapshot, setSnapshot] = useState<HolderSnapshot>(holdersSnapshot)

  useEffect(() => {
    const loadSnapshot = async () => {
      try {
        const response = await fetch('/api/holders')
        if (!response.ok) return
        const data = (await response.json()) as HolderSnapshot
        setSnapshot(data)
      } catch {
        // Keep fallback snapshot on error
      }
    }

    loadSnapshot()
  }, [])

  const holders = snapshot.holders
  const totalHolders = holders.length

  const normalizedQuery = query.trim().toLowerCase()
  const isValidQuery = normalizedQuery ? ADDRESS_REGEX.test(normalizedQuery) : null

  const selectedFromList = useMemo(
    () => holders.find(holder => holder.address.toLowerCase() === (selectedAddress ?? '')) ?? null,
    [holders, selectedAddress]
  )

  const selectedFromSearch = useMemo(() => {
    if (!submittedQuery) return null
    return holders.find(holder => holder.address.toLowerCase() === submittedQuery) ?? null
  }, [holders, submittedQuery])

  const activeHolder = selectedFromList ?? selectedFromSearch

  const abilitiesByTrait = useMemo(() => {
    const map = new Map<string, (typeof abilities)[number]>()
    abilities.forEach(ability => {
      ability.traits?.forEach(trait => {
        const key = `${normalizeTraitType(trait.traitType)}:${normalizeKey(trait.traitValue)}`
        if (!map.has(key)) {
          map.set(key, ability)
        }
      })
    })
    return map
  }, [])

  const tokensForHolder = useMemo(() => {
    if (!activeHolder || !snapshot.tokens) return []
    return snapshot.tokens.filter(token => token.owner === activeHolder.address.toLowerCase())
  }, [activeHolder])

  const resolveAbilities = (attributes?: Record<string, string[]>) => {
    if (!attributes) return []
    const collected = new Map<string, (typeof abilities)[number]>()
    Object.entries(attributes).forEach(([traitType, values]) => {
      values.forEach(value => {
        const key = `${normalizeTraitType(traitType)}:${normalizeKey(value)}`
        const ability = abilitiesByTrait.get(key)
        if (ability && !collected.has(ability.id)) {
          collected.set(ability.id, ability)
        }
      })
    })
    return Array.from(collected.values())
  }

  const emptySearchResult =
    submittedQuery && ADDRESS_REGEX.test(submittedQuery) && !selectedFromSearch

  const handleSearch = () => {
    setSubmittedQuery(normalizedQuery || null)
    setSelectedAddress(null)
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <main className="relative z-10 flex-1 w-full px-4 sm:px-6 lg:px-10 py-12">
        <div className="mb-10 text-center">
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3">Kojin Checker</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore Kojin holders and verify how many NFTs each wallet owns. Snapshot updated on
            {` ${snapshot.asOfUtc}`}.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Source:{' '}
            <a
              className="underline hover:text-white"
              href={snapshot.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ronin Owners
            </a>
          </p>
        </div>

        <section className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold text-white">Search by address</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enter a valid EVM address to view its Kojins.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="0x..."
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              onClick={handleSearch}
              className="rounded-lg bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-white/90"
            >
              Search
            </button>
          </div>
          {isValidQuery === false && (
            <p className="mt-2 text-sm text-red-400">The address is not valid.</p>
          )}
          {emptySearchResult && (
            <p className="mt-2 text-sm text-yellow-300">No Kojins found for that address.</p>
          )}
        </section>

        <section className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Holders ({totalHolders})</h2>
              <span className="text-xs text-muted-foreground">Supply: {snapshot.totalSupply}</span>
            </div>
            <div className="mt-4 max-h-[680px] overflow-y-auto pr-2 space-y-2">
              {holders.map(holder => (
                <button
                  key={holder.address}
                  type="button"
                  onClick={() => {
                    setSelectedAddress(holder.address.toLowerCase())
                    setSubmittedQuery(null)
                  }}
                  className="w-full text-left rounded-xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-white/10 transition"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm text-white break-all">{holder.address}</span>
                    <span className="text-xs text-muted-foreground">
                      {holder.count} NFTs · {formatPct(holder.count, snapshot.totalSupply)}%
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:min-h-[680px]">
            <h2 className="text-lg font-semibold text-white">Wallet details</h2>
            {!activeHolder && (
              <div className="mt-4 rounded-xl border border-dashed border-white/10 p-6 text-sm text-muted-foreground">
                Select an address from the list or search a wallet to see details.
              </div>
            )}
            {activeHolder && (
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Address</p>
                  <p className="text-sm text-white break-all mt-2">{activeHolder.address}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{activeHolder.count} NFTs</span>
                    <span>{formatPct(activeHolder.count, snapshot.totalSupply)}% of supply</span>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kojins</p>
                    <span className="text-xs text-muted-foreground">
                      {tokensForHolder.length} tokens listed
                    </span>
                  </div>
                  {tokensForHolder.length === 0 ? (
                    <p className="text-sm text-muted-foreground mt-2">
                      No tokens listed for this wallet in the snapshot.
                    </p>
                  ) : (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tokensForHolder.map(token => {
                        const tokenAbilities = resolveAbilities(token.attributes)
                        const marketplaceUrl = `https://marketplace.roninchain.com/collections/kojin/${token.tokenId}`
                        return (
                          <div
                            key={token.tokenId}
                            className="rounded-xl border border-white/10 bg-black/30 p-3"
                          >
                            <div className="flex gap-4">
                              <a
                                href={marketplaceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="h-20 w-20 rounded-lg overflow-hidden border border-white/10 bg-black/40 block"
                              >
                                {token.cdnImage || token.image ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={token.cdnImage ?? token.image}
                                    alt={token.name ?? `Kojin #${token.tokenId}`}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <div className="h-full w-full bg-white/5" />
                                )}
                              </a>
                              <div className="flex-1">
                                <a
                                  href={marketplaceUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-sm text-white font-semibold hover:underline"
                                >
                                  {token.name ?? `Kojin #${token.tokenId}`}
                                </a>
                                <p className="text-xs text-muted-foreground">Token #{token.tokenId}</p>
                                <a
                                  href={marketplaceUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-1 inline-flex text-[11px] text-muted-foreground hover:text-white"
                                >
                                  View on marketplace
                                </a>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {tokenAbilities.length === 0 && (
                                    <span className="text-xs text-muted-foreground">
                                      No abilities detected
                                    </span>
                                  )}
                                  {tokenAbilities.map(ability => (
                                    <span
                                      key={ability.id}
                                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white"
                                    >
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={ability.image}
                                        alt={ability.name}
                                        className="h-4 w-4 rounded-full"
                                      />
                                      {ability.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
