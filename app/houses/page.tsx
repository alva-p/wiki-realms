'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function HousesPage() {
  const houses = [
    {
      name: "Flame House",
      img: "/flame.png",
      text: "In fiery crucible, our mettle forms true; with strikes so bold, our strength breaks through."

    },
    {
      name: "Void House",
      img: "/void.jpg",
      text: "Under darkness’ guise, none escape the Void's eyes."

    },
    {
      name: "Sage House",
      img: "/sage.jpg",
      text: "Nomadic by nature our potions we mix.  Beneath ancient trees, our knowledge we gift."

    },
    {
      name: "Frost House",
      img: "/frost.jpg",
      text: "Those that endure, triumph in the chill, masters of frost and silent will."

    },
    {
      name: "Lotus House",
      img: "/lotus.png",
      text: "In gems we find our radiant glow, where beauty sparkles, and spirits grow."

    },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col relative">

      {/* overlay (transparent because background is pure black) */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <Navigation />

      <main className="relative z-10 flex-1 p-4">
        {/* Grid: izquierda = casas, derecha = imagen de damage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* LEFT: casas (logos + descriptions) */}
          <div className="w-full">
            {/* Top row: first 3 houses */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              {houses.slice(0, 3).map((house, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  <img
                    src={house.img}
                    alt={house.name}
                    className="w-64 h-64 drop-shadow-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="opacity-100">
                    <h2 className="text-2xl font-bold text-white mb-1">{house.name}</h2>
                    <p className="text-white text-sm leading-relaxed">{house.text}</p>
                  </div>
                </div>
              ))}

              {/* Bottom row placeholder will be a full-span container on sm+ and center its children */}
              <div className="sm:col-span-3" aria-hidden />
            </div>

            {/* Centered bottom row: remaining houses */}
            <div className="flex justify-center gap-8">
              {houses.slice(3).map((house, i) => (
                <div key={i + 3} className="flex flex-col items-center text-center cursor-pointer group">
                  <img
                    src={house.img}
                    alt={house.name}
                    className="w-64 h-64 drop-shadow-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="opacity-100">
                    <h2 className="text-2xl font-bold text-white mb-1">{house.name}</h2>
                    <p className="text-white text-sm leading-relaxed">{house.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: imagen houses-damage */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-full max-w-[700px] h-[60vh] md:h-[70vh] rounded overflow-hidden">
              <Image
                src="/houses-damage.png"
                alt="houses damage"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  )
}
