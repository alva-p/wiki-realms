 'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapSlider } from '@/components/map-slider'

const maps = [
  {
    title: 'Mines of Hiroba',
    images: ['/caves.jpeg', '/caves2.jpeg'],
  },
  {
    title: 'Hiroba',
    images: ['/hiroba.jpg', '/hiroba2.jpeg'],
  },
  {
    title: 'Extraction',
    images: ['/extraction.png'],
  },
  {
    title: '1v1 Arena',
    images: ['/1v1.jpg', '/1v1arena.jpg'],
  },
]

export default function MapsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Maps
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the different battlefields where the Kojins venture and fight for their glory
          </p>
        </div>

        {/* Maps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {maps.map((map) => (
            <MapSlider key={map.title} title={map.title} images={map.images} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
