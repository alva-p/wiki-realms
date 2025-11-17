'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function LorePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Lore</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4">Uncover the rich history and mythology of the REALMS universe</p>
        </div>

        {/* Story Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold">The Beginning of Realms</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the dawn of time, when the void was still, ancient beings crafted the REALMS from pure energy and imagination. The dragon Kyrus, first among all creatures, breathed life into the world, creating mountains, oceans, and countless civilizations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As ages passed, the balance shifted. Dark forces arose seeking to consume the light, leading to the Great War that would reshape destiny itself.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-border glow-pulse order-1 md:order-2">
            <svg className="w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c946ef" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#skyGrad)" />
              <circle cx="200" cy="100" r="40" fill="#fbbf24" opacity="0.6" />
              <path d="M 100 200 L 150 150 L 200 180 L 250 120 L 300 200" stroke="#c946ef" strokeWidth="3" fill="none" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Story Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-border glow-pulse">
            <svg className="w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#oceanGrad)" />
              <path d="M 0 250 Q 100 200 200 250 T 400 250 L 400 400 L 0 400 Z" fill="#0ea5e9" opacity="0.2" />
            </svg>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">The Age of Empires</h2>
            <p className="text-muted-foreground leading-relaxed">
              Civilizations rose and fell, each leaving their mark on the REALMS. The great empires - Shadow, Light, and Harmony - built magnificent cities and discovered the secrets of magic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But prosperity breeds conflict. Jealousy and ambition led to wars that nearly destroyed everything. In the end, a fragile peace was established through ancient accords.
            </p>
          </div>
        </div>

        {/* Story Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-3xl font-bold">The Present Era</h2>
            <p className="text-muted-foreground leading-relaxed">
              Today, REALMS stands at a crossroads. The ancient seals are weakening, and something stirs in the darkness. Heroes rise from all corners of the world, preparing for the trials ahead.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are one of these heroes. Your choices will shape the future of REALMS. Will you be a beacon of hope or a harbinger of destruction?
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-border glow-pulse order-1 md:order-2">
            <svg className="w-full h-full bg-gradient-to-br from-orange-900/20 to-red-900/20" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="url(#fireGrad)" />
              <circle cx="200" cy="200" r="80" fill="none" stroke="#ea580c" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
        </div>
      </main>

    </div>
  )
}
