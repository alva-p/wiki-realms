'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AbilityCard } from '@/components/ability-card'

export default function AbilitiesPage() {
  const abilities = [
    {
      title: "Inferno Burst",
      trait: "Fire Mage",
      description: "Release a devastating wave of flames dealing massive damage to all enemies in a cone",
      videoThumbnail: "https://images.unsplash.com/photo-1614613535308-eb5fbd8952e7?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Frost Nova",
      trait: "Ice Sorcerer",
      description: "Freeze enemies in place with a sphere of crystalline ice, preventing all movement",
      videoThumbnail: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop",
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Shadow Strike",
      trait: "Dark Rogue",
      description: "Teleport behind enemies and deliver critical strikes with shadow energy",
      videoThumbnail: "https://images.unsplash.com/photo-1614613534236-bac34fb006d?w=400&h=300&fit=crop",
      color: "from-purple-600 to-gray-700"
    },
    {
      title: "Lightning Chain",
      trait: "Storm Knight",
      description: "Call down lightning bolts that chain between multiple enemies, stunning them",
      videoThumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
      color: "from-yellow-400 to-blue-500"
    },
    {
      title: "Void Pulse",
      trait: "Void Warlock",
      description: "Create a pulse of void energy that damages and disorients all nearby enemies",
      videoThumbnail: "https://images.unsplash.com/photo-1533356122544-f006fcf7e4d7?w=400&h=300&fit=crop",
      color: "from-indigo-600 to-purple-900"
    },
    {
      title: "Holy Radiance",
      trait: "Light Paladin",
      description: "Emit a wave of divine light that heals allies and burns enemies",
      videoThumbnail: "https://images.unsplash.com/photo-1559027615-cd0628902d4a?w=400&h=300&fit=crop",
      color: "from-yellow-300 to-white"
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Abilities</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4">Master devastating powers and unlock unique traits tied to your NFTs. Each ability is linked to a specific trait that grants special bonuses and powers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((ability) => (
            <AbilityCard key={ability.title} {...ability} />
          ))}
        </div>
      </main>

    </div>
  )
}
