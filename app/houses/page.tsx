'use client'

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
        <div className="grid grid-cols-3 gap-8 h-1/2 mb-8">
          {houses.slice(0, 3).map((house, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Logo visible SIEMPRE */}
              <img
                src={house.img}
                alt={house.name}
                className="
                  w-80 h-80 drop-shadow-xl mb-4
                  transition-transform duration-300 group-hover:scale-105
                "
              />

              {/* Contenedor animado (invisible hasta hover) */}
              <div
                className="
                  opacity-0 max-h-0 overflow-hidden
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:max-h-[500px]
                "
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  {house.name}
                </h2>

                <p className="text-white text-lg leading-relaxed">
                  {house.text}
                </p>
              </div>
            </div>
            
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-8 h-1/2 place-items-center">
          {houses.slice(3, 5).map((house, i) => (
            <div
              key={i + 3}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Logo visible SIEMPRE */}
              <img
                src={house.img}
                alt={house.name}
                className="
                  w-80 h-80 drop-shadow-xl mb-4
                  transition-transform duration-300 group-hover:scale-105
                "
              />

              {/* Contenedor animado (invisible hasta hover) */}
              <div
                className="
                  opacity-0 max-h-0 overflow-hidden
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:max-h-[500px]
                "
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  {house.name}
                </h2>

                <p className="text-white text-lg leading-relaxed">
                  {house.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  )
}
