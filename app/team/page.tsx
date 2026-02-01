'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TeamPage() {
  const teamMembers = [
    { name: 'AYUUKII', photo: '/ayuukii.png', twitter: 'https://x.com/AyuukiixD' },
    { name: 'GUTTS', photo: '/guttsman.jpg', twitter: 'https://x.com/GuttsmannGASA' },
    { name: 'BERLIN', photo: '/berlin.jpg', twitter: 'https://x.com/Berlin_AoG' },
    { name: 'SUSHINOBI', photo: '/sushinobi.jpg', twitter: 'https://x.com/Sushinobi_nft' },
    { name: 'NOMEC', photo: '/nomec.jpg', twitter: 'https://x.com/nomec_' },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col relative" style={{ backgroundImage: "url('/team.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <Navigation />

      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Team</h1>
          <div className="w-28 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-white/80 mt-4">The core contributors behind Kojin</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {teamMembers.map((m) => (
            <a key={m.name} href={m.twitter} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="mx-auto w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 bg-white/5 flex items-center justify-center mb-4">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wider">{m.name}</h3>
            </a>
          ))}
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  )
}
