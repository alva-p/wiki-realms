 'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { abilities, categoryNames, categoryDescriptions, getAbilitiesByCategory, type Ability } from '@/data/abilities'

export default function AbilitiesPage() {
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Ability['category']>('attack')
  const descriptionRef = useRef<HTMLDivElement>(null)

  // Scroll to description when ability is selected
  useEffect(() => {
    if (selectedAbility && descriptionRef.current) {
      setTimeout(() => {
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [selectedAbility])

  const categories: Ability['category'][] = ['attack', 'defense', 'vitality', 'precision', 'restoration', 'speed', 'ferocity', 'retaliation', 'leech', 'haste']

  // Category color mapping for selected ability display
  const categoryColors: Record<Ability['category'], { text: string; bg: string; border: string }> = {
    attack: { text: 'text-amber-600', bg: 'bg-amber-600/20', border: 'border-amber-600/30' },
    defense: { text: 'text-blue-500', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
    vitality: { text: 'text-red-500', bg: 'bg-red-500/20', border: 'border-red-500/30' },
    precision: { text: 'text-yellow-400', bg: 'bg-yellow-400/20', border: 'border-yellow-400/30' },
    restoration: { text: 'text-green-500', bg: 'bg-green-500/20', border: 'border-green-500/30' },
    speed: { text: 'text-cyan-400', bg: 'bg-cyan-400/20', border: 'border-cyan-400/30' },
    ferocity: { text: 'text-violet-500', bg: 'bg-violet-500/20', border: 'border-violet-500/30' },
    retaliation: { text: 'text-orange-200', bg: 'bg-orange-200/20', border: 'border-orange-200/30' },
    leech: { text: 'text-rose-800', bg: 'bg-rose-800/20', border: 'border-rose-800/30' },
    haste: { text: 'text-pink-600', bg: 'bg-pink-600/20', border: 'border-pink-600/30' },
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Navigation />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg">Kojin Builder</h1>
          <p className="text-gray-300 text-lg">Design your perfect Kojin by selecting abilities from each category</p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setSelectedAbility(null)
              }}
              className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/50 scale-105'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {categoryNames[category]}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-8 text-center">
          <p className="text-gray-400 text-sm italic">{categoryDescriptions[selectedCategory]}</p>
        </div>

        {/* Abilities Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {getAbilitiesByCategory(selectedCategory).map((ability) => (
              <button
                key={ability.id}
                onClick={() => setSelectedAbility(ability)}
                className={`relative group bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border-2 transition-all duration-200 hover:scale-105 ${
                  selectedAbility?.id === ability.id
                    ? 'border-amber-500 shadow-lg shadow-amber-500/30'
                    : 'border-gray-700 hover:border-amber-400/50'
                }`}
              >
                {/* Ability Image */}
                <div className="relative w-[124px] h-[124px] mx-auto mb-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden">
                  {ability.image ? (
                    <Image 
                      src={ability.image} 
                      alt={ability.name} 
                      width={124}
                      height={124}
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-4xl opacity-50">🔥</div>
                    </div>
                  )}
                </div>

                {/* Ability Name */}
                <h3 className="text-white font-semibold text-center text-sm group-hover:text-amber-400 transition-colors">
                  {ability.name}
                </h3>

                {/* Stats Badge */}
                {ability.stats && (
                  <div className="mt-2 flex justify-center">
                    <div className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded">
                      {Object.entries(ability.stats)[0]?.[1]}
                      {ability.stats.damage && ' DMG'}
                      {ability.stats.defense && ' DEF'}
                      {ability.stats.health && '% HP'}
                      {ability.stats.accuracy && '% ACC'}
                      {ability.stats.healing && ' HP'}
                      {ability.stats.speed && '% SPD'}
                      {ability.stats.retaliation && '% RET'}
                      {ability.stats.leech && '% LEECH'}
                      {ability.stats.haste && '% HASTE'}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Ability Description */}
        {selectedAbility && (
          <div 
            ref={descriptionRef}
            className={`bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl p-8 border ${categoryColors[selectedAbility.category].border} shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300`}
          >            <div className="flex flex-col md:flex-row gap-6">
              {/* Large Ability Preview */}
              <div className="flex-shrink-0">
                <div className={`relative w-[124px] h-[124px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden border-2 ${categoryColors[selectedAbility.category].border.replace('/30', '')}`}>
                  {selectedAbility.image ? (
                    <Image 
                      src={selectedAbility.image} 
                      alt={selectedAbility.name} 
                      width={124}
                      height={124}
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">🔥</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Ability Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className={`text-3xl font-bold ${categoryColors[selectedAbility.category].text}`}>{selectedAbility.name}</h2>
                  <span className={`px-3 py-1 ${categoryColors[selectedAbility.category].bg} ${categoryColors[selectedAbility.category].text} rounded-full text-xs font-semibold uppercase`}>
                    {categoryNames[selectedAbility.category]}
                  </span>
                </div>

                <p className={`${categoryColors[selectedAbility.category].text} text-lg leading-relaxed mb-4 opacity-80`}>
                  {selectedAbility.description}
                </p>

                {/* Stats Display */}
                {selectedAbility.stats && (
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(selectedAbility.stats).map(([stat, value]) => (
                      <div key={stat} className={`${categoryColors[selectedAbility.category].bg} px-4 py-2 rounded-lg`}>
                        <span className="text-gray-400 text-sm capitalize">{stat}: </span>
                        <span className={`${categoryColors[selectedAbility.category].text} font-bold`}>{value}{stat === 'health' || stat === 'accuracy' || stat === 'speed' ? '%' : ''}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedAbility && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Select an ability to view its details</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
