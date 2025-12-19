 'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { abilities, categoryNames, categoryDescriptions, getAbilitiesByCategory, type Ability } from '@/data/abilities'

export default function AbilitiesPage() {
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Ability['category']>('attack')

  const categories: Ability['category'][] = ['attack', 'defense', 'vitality', 'precision', 'restoration', 'speed', 'ferocity']

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
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Ability Description */}
        {selectedAbility && (
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-xl p-8 border border-amber-500/30 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Large Ability Preview */}
              <div className="flex-shrink-0">
                <div className="relative w-[124px] h-[124px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden border-2 border-amber-500">
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
                  <h2 className="text-3xl font-bold text-amber-400">{selectedAbility.name}</h2>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold uppercase">
                    {categoryNames[selectedAbility.category]}
                  </span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {selectedAbility.description}
                </p>

                {/* Stats Display */}
                {selectedAbility.stats && (
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(selectedAbility.stats).map(([stat, value]) => (
                      <div key={stat} className="bg-gray-700/50 px-4 py-2 rounded-lg">
                        <span className="text-gray-400 text-sm capitalize">{stat}: </span>
                        <span className="text-amber-400 font-bold">{value}{stat === 'health' || stat === 'accuracy' || stat === 'speed' ? '%' : ''}</span>
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
