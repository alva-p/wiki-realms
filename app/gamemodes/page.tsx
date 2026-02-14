'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapSlider } from '@/components/map-slider'

const gamemodes = [
  {
    title: 'Extraction',
    images: ['/extraction.png'],
    description:
      'Intense player vs player competition in a high-stakes extraction scenario where strategy and skill determine the winner.',
  },
  {
    title: 'Mines of Hiroba',
    images: ['/mines.png'],
    description:
      'Strategic player vs environment exploration in the mysterious and challenging mines of Hiroba.',
  },
  {
    title: '1v1 Arena',
    images: ['/1v1.jpg', '/1v1arena.jpg'],
    description:
      'Intense one-on-one battles where players test their skills and strategies against each other.',
  },
  {
    title: 'Dungeon Ascension',
    images: ['/PVETeam.jpeg'],
    description:
      'A 3 player co-op dungeon mode where teams race against the clock to clear increasingly difficult dungeon tiers.',
  },
]

export default function GameModes() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Game Modes</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the different game modes where the Kojins fight and cooperate
          </p>
        </div>

        {/* Gamemodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gamemodes.map((mode) => (
            <MapSlider
              key={mode.title}
              title={mode.title}
              images={mode.images}
              description={mode.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
