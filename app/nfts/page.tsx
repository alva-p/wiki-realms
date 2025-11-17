'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { NFTCategory } from '@/components/card-components'

export default function NFTsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3">
        {/* Kojins Section */}
        <section 
          className="flex-1 flex items-center justify-center text-center p-8 relative"
          style={{ backgroundImage: 'url(/kojins.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              <a 
                href="https://marketplace.roninchain.com/collections/kojin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                Kojins
              </a>
            </h2>
            <p className="text-white text-lg max-w-md mx-auto">Legendary warrior creatures with unique combat abilities and special traits</p>
          </div>
        </section>

        {/* Mounts Section */}
        <section 
          className="flex-1 flex items-center justify-center text-center p-8 relative"
          style={{ backgroundImage: 'url(/mount.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              <a 
                href="https://marketplace.roninchain.com/collections/realmsmounts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                Mounts
              </a>
            </h2>
            <p className="text-white text-lg max-w-md mx-auto">Mythical beasts for epic traversal and battle support</p>
          </div>
        </section>

        {/* Waifus Section */}
        <section 
          className="flex-1 flex items-center justify-center text-center p-8 relative"
          style={{ backgroundImage: 'url(/waifus.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">Waifus</h2>
            <p className="text-white text-lg max-w-md mx-auto">Companion characters with special abilities and bonuses</p>
          </div>
        </section>
      </main>

    </div>
  )
}
