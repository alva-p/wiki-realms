'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapCard } from '@/components/card-components'

export default function MapsPage() {
  const maps = [
    {
      name: "Obsidian Peaks",
      description: "Treacherous mountain ranges where legendary dragons dwell",
      difficulty: "Hard",
      level: "50+",
      color: "from-gray-600 to-slate-700"
    },
    {
      name: "Enchanted Forest",
      description: "Mystical woods filled with ancient magic and hidden secrets",
      difficulty: "Medium",
      level: "30-40",
      color: "from-green-600 to-emerald-700"
    },
    {
      name: "Crystal Caverns",
      description: "Underground labyrinths glowing with ethereal crystals",
      difficulty: "Hard",
      level: "45+",
      color: "from-cyan-400 to-blue-600"
    },
    {
      name: "Scorched Wastelands",
      description: "Desolate desert lands haunted by ancient spirits",
      difficulty: "Medium",
      level: "35-45",
      color: "from-amber-600 to-orange-700"
    },
    {
      name: "Frozen Abyss",
      description: "Arctic depths where the cold itself is a deadly enemy",
      difficulty: "Very Hard",
      level: "55+",
      color: "from-blue-300 to-cyan-500"
    },
    {
      name: "Twilight Sanctuary",
      description: "A realm between worlds, accessible only to the worthy",
      difficulty: "Legendary",
      level: "60+",
      color: "from-purple-600 to-pink-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Maps</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4">Explore vast landscapes filled with mysteries, treasures, and dangerous creatures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {maps.map((map) => (
            <MapCard key={map.name} {...map} />
          ))}
        </div>
      </main>

    </div>
  )
}
