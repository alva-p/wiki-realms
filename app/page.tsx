'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://pub-a5f32ec94ec44107a740c08a0430ca32.r2.dev/Hiroba360Low.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* NAV */}
      <Navigation />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col z-10">
        
        {/* HERO */}
        <section className="relative pt-32 pb-4 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4 animate-fade-in group cursor-pointer">
              <span className="text-white drop-shadow-2xl animate-glow transition-colors duration-200 group-hover:text-gray-400">KOJIN</span>
              <span className="text-white drop-shadow-2xl animate-glow transition-colors duration-200 group-hover:text-gray-400">Wiki</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in-delay">
              Discover the universe of KOJIN, a Web3 MMORPG
            </p>
          </div>
        </section>

        {/* EXPLORE SECTIONS */}
        <section className="relative pt-2 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in-delay-2">
              Explore the universe of Kojin
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">

              {[
                { title: 'Lore', href: '/lore' },
                { title: 'NFTs', href: '/nfts' },
                { title: 'Houses', href: '/houses' },
                { title: 'Items & Crafting', href: '/items' },
                { title: 'Abilities', href: '/abilities' },
                { title: 'AI Agents', href: '/aiagents' },
                { title: 'Maps', href: '/maps' },
                { title: 'Missions', href: '/missions' },
                { title: 'Game Modes', href: '/gamemodes' },
                { title: 'Team', href: '/team' },
                {title: 'Last Sales', href: '/lastsales' },
                { title: 'Unreal Wednesday', href: '/unrealwednesday' },
                { title: 'Social Media', href: '/socialmedia' },
              ].map((section, index) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="
                    group block p-2 transition-all duration-300 
                    hover:text-primary
                    opacity-0 animate-fade-in-up
                    [animation-delay:calc(200ms+120ms*var(--i))]
                  "
                  style={{ ["--i" as any]: index }}
                >
                  <h3
                    className="
                      text-center font-bold text-card-foreground text-lg
                      transition-colors duration-300
                      group-hover:text-primary
                    "
                  >
                    {section.title}
                  </h3>
                </Link>
              ))}

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER — ahora sí abajo del todo */}
      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  )
}
