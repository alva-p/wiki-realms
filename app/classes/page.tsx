'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Classes() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Classes
        </h1>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Choose your character class in REALMS. Each class offers unique playstyles, abilities, and progression paths.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder content - you can customize this */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Warrior</h2>
            <p className="text-muted-foreground">Masters of melee combat with unmatched strength and durability.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Mage</h2>
            <p className="text-muted-foreground">Wielders of arcane power who command the elements.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Rogue</h2>
            <p className="text-muted-foreground">Stealthy assassins who strike from the shadows.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Paladin</h2>
            <p className="text-muted-foreground">Holy warriors who protect allies and smite enemies.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}