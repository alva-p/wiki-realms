 'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function MissionsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      {/* Imagen de fondo decorativa para Social Media */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="relative w-full h-full">
          <Image
            src="/socialmedia.jpg"
            alt="Social Media Background"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center', maxWidth: '60vw', maxHeight: '40vh', left: '50%', top: '60%', transform: 'translate(-50%, -50%)' }}
            className="opacity-40"
            priority
          />
        </div>
      </div>

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Social Media
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Follow Realms on your favorite platforms and join our community!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-12">
            {/* X (Twitter) */}
            <a href="https://x.com/RealmsDotGame" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/60 border border-white/10 group-hover:border-amber-500/50 transition-all">
                <svg width="36" height="36" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1187.6 0H885.7L600.2 410.6L314.3 0H0L462.7 668.2L0 1227H301.6L600.2 814.2L898.4 1227H1200L737.5 558.8L1187.6 0ZM301.6 111.2L600.2 523.6L898.4 111.2H301.6ZM301.6 1115.8L600.2 703.4L898.4 1115.8H301.6Z" fill="#fff" className="group-hover:fill-amber-500 transition-all"/>
                </svg>
              </span>
              <span className="text-white group-hover:text-amber-500 transition-all font-medium">X (Twitter)</span>
            </a>
            {/* Discord */}
            <a href="https://discord.gg/n4zVPeAFwk" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/60 border border-white/10 group-hover:border-amber-500/50 transition-all">
                <svg width="36" height="36" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.104 4.552A58.201 58.201 0 0 0 46.852.8a.112.112 0 0 0-.118.056c-2.05 3.652-4.34 8.41-5.953 12.19-7.13-1.07-14.1-1.07-21.13 0-1.62-3.78-3.92-8.538-5.95-12.19A.115.115 0 0 0 13.58.8a58.06 58.06 0 0 0-13.25 3.75.104.104 0 0 0-.048.041C-1.58 18.73-2.93 32.66-.9 46.46a.112.112 0 0 0 .04.073c5.56 4.08 10.97 6.56 16.32 8.2a.112.112 0 0 0 .123-.03c1.26-1.73 2.38-3.56 3.34-5.48a.112.112 0 0 0-.06-.154c-1.78-.68-3.48-1.5-5.13-2.42a.112.112 0 0 1-.011-.186c.345-.26.69-.53 1.02-.8a.112.112 0 0 1 .114-.013c10.8 4.94 22.47 4.94 33.22 0a.112.112 0 0 1 .115.012c.33.27.675.54 1.02.8a.112.112 0 0 1-.01.186c-1.65.93-3.35 1.75-5.13 2.43a.112.112 0 0 0-.06.153c.96 1.92 2.08 3.75 3.34 5.48a.112.112 0 0 0 .123.03c5.36-1.64 10.77-4.12 16.32-8.2a.112.112 0 0 0 .04-.073c2.14-15.13-1.18-29-7.92-41.87a.09.09 0 0 0-.05-.04ZM23.725 37.02c-3.18 0-5.78-2.92-5.78-6.5 0-3.58 2.58-6.5 5.78-6.5 3.22 0 5.8 2.94 5.78 6.5 0 3.58-2.58 6.5-5.78 6.5Zm23.55 0c-3.18 0-5.78-2.92-5.78-6.5 0-3.58 2.58-6.5 5.78-6.5 3.22 0 5.8 2.94 5.78 6.5 0 3.58-2.58 6.5-5.78 6.5Z" fill="#fff" className="group-hover:fill-amber-500 transition-all"/>
                </svg>
              </span>
              <span className="text-white group-hover:text-amber-500 transition-all font-medium">Discord</span>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@RealmsDotGame" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/60 border border-white/10 group-hover:border-amber-500/50 transition-all">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="24" fill="#fff" fillOpacity="0"/>
                  <path d="M39.5 15.5c-.5-1.9-2-3.4-3.9-3.9C32.1 11 24 11 24 11s-8.1 0-11.6.6c-1.9.5-3.4 2-3.9 3.9C7 19 7 24 7 24s0 5 1.5 8.5c.5 1.9 2 3.4 3.9 3.9C15.9 37 24 37 24 37s8.1 0 11.6-.6c1.9-.5 3.4-2 3.9-3.9C41 29 41 24 41 24s0-5-1.5-8.5ZM21 29.5v-11l9.5 5.5-9.5 5.5Z" fill="#fff" className="group-hover:fill-amber-500 transition-all"/>
                </svg>
              </span>
              <span className="text-white group-hover:text-amber-500 transition-all font-medium">YouTube</span>
            </a>
            {/* Epic Games */}
            <a href="https://store.epicgames.com/en-US/p/realms-42b0fb" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/60 border border-white/10 group-hover:border-amber-500/50 transition-all">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="#fff" fillOpacity="0"/>
                  <path d="M8 4a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm0 2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm3 3v18h14V7H11Zm2 2h10v14H13V9Z" fill="#fff" className="group-hover:fill-amber-500 transition-all"/>
                </svg>
              </span>
              <span className="text-white group-hover:text-amber-500 transition-all font-medium">Epic Games</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}
