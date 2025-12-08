 'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function AIAgents() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      {/* Imagen de fondo que cubre toda la sección (no interactiva) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-3/4 h-3/4">
          <Image
            src="/not-info.png"
            alt=""
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            className="opacity-40"
            priority
          />
        </div>
      </div>

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-12">
        </div>

      
      </main>

      <Footer />

    </div>
  )
}
