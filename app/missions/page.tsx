'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MissionCard } from '@/components/card-components'

export default function MissionsPage() {
  const missions = [
    {
      title: "Slay the Shadow Dragon",
      description: "An ancient dragon has awakened in the Obsidian Peaks. The realm trembles at its cry. Defeat this legendary beast and restore peace.",
      rewards: "50,000 XP • Legendary Weapon",
      difficulty: "Legendary",
      progress: 65
    },
    {
      title: "Restore the Crystal Tower",
      description: "The magical Crystal Tower has been corrupted by dark forces. Purify its chambers and restore its light to the world.",
      rewards: "35,000 XP • Rare Armor Set",
      difficulty: "Hard",
      progress: 40
    },
    {
      title: "Gather Sacred Herbs",
      description: "The village needs rare medicinal herbs from the Enchanted Forest to cure a mysterious illness. Be careful of the forest guardians.",
      rewards: "15,000 XP • Healing Potion (x5)",
      difficulty: "Medium",
      progress: 20
    },
    {
      title: "Explore the Underground City",
      description: "An ancient underground civilization has been discovered. Map the area and retrieve historical artifacts from the Frozen Abyss.",
      rewards: "40,000 XP • Ancient Knowledge",
      difficulty: "Hard",
      progress: 0
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Missions</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-muted-foreground mt-4">Epic quests await those brave enough to accept the challenge</p>
        </div>

        <div className="space-y-4">
          {missions.map((mission) => (
            <MissionCard key={mission.title} {...mission} />
          ))}
        </div>
      </main>

    </div>
  )
}
