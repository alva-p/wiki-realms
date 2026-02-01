 'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function LorePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      {/* Imagen de fondo decorativa para Unreal Wednesday */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="relative w-full h-full">
          <Image
            src="/unrealwed.png"
            alt="Unreal Wednesday Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-30"
            priority
          />
        </div>
      </div>


      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unreal Wednesday
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unreal Wednesday are weekly developer talks for the Kojin community. In these sessions, the devs share progress, showcase new features, and answer questions from players interested in the evolution of the game. Join to see live demos, get insights, and connect with the team!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1dSggzohB7qGg9MBJOHDPIGVcH2cnJhDM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-500 hover:bg-amber-500/30 hover:text-amber-400 transition-all text-base font-medium"
            >
              View Unreal Wednesday Recordings
            </a>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}
