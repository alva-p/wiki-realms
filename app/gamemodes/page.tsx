'use client'

import { Navigation } from '@/components/navigation'

export default function GameModes() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Igual que NFTs: FULLSCREEN GRID */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">

        {/* PVP Extraction Mode */}
        <section 
          className="flex-1 flex items-center justify-center text-center p-8 relative"
        >
          {/* Video de fondo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/extractionMode.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          <div className="absolute inset-0 bg-black/50 z-10" />
          
          <div className="relative z-20 max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-white">Extraction</h2>
            <p className="text-white text-lg">(PVP)</p>
            <p className="text-white/90 mt-4 max-w-sm mx-auto">
              Intense player vs player competition in a high-stakes extraction scenario where 
              strategy and skill determine the winner.
            </p>
          </div>
        </section>

        {/* PVE Mines Hiroba */}
        <section 
          className="flex-1 flex items-center justify-center text-center p-8 relative"
          style={{
            backgroundImage: 'url(/mines.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="relative z-20 max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-white">Mines of Hiroba</h2>
            <p className="text-white text-lg">(PVE)</p>
            <p className="text-white/90 mt-4 max-w-sm mx-auto">
              Strategic player vs environment exploration in the mysterious and 
              challenging mines of Hiroba.
            </p>
          </div>
        </section>

      </main>
    </div>
  )
}
