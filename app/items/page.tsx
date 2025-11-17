'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ItemCard } from '@/components/card-components'

export default function ItemsPage() {
  const weapons = [
    {
      name: "Excalibur",
      rarity: "Legendary",
      type: "Sword",
      stats: "ATK +50 | CRT +25%",
      rarityColor: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Dragonslayer Bow",
      rarity: "Epic",
      type: "Bow",
      stats: "ATK +35 | AGI +15",
      rarityColor: "from-purple-500 to-pink-600"
    },
    {
      name: "Staff of Infinite Magic",
      rarity: "Epic",
      type: "Staff",
      stats: "MAG +40 | MP +20%",
      rarityColor: "from-purple-500 to-pink-600"
    }
  ]

  const armor = [
    {
      name: "Dragon Scale Armor",
      rarity: "Legendary",
      type: "Chestpiece",
      stats: "DEF +45 | HP +30%",
      rarityColor: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Shadow Cloak",
      rarity: "Epic",
      type: "Chestpiece",
      stats: "DEF +30 | EVA +20%",
      rarityColor: "from-purple-500 to-pink-600"
    },
    {
      name: "Mystic Helm",
      rarity: "Rare",
      type: "Helmet",
      stats: "DEF +18 | INT +10",
      rarityColor: "from-blue-400 to-cyan-500"
    }
  ]

  const potions = [
    {
      name: "Elixir of Vitality",
      rarity: "Rare",
      type: "Potion",
      stats: "Restores 100% HP | +50 HP Regen",
      rarityColor: "from-blue-400 to-cyan-500"
    },
    {
      name: "Mana Crystal",
      rarity: "Epic",
      type: "Potion",
      stats: "Restores 100% MP | +30 MP Regen",
      rarityColor: "from-purple-500 to-pink-600"
    },
    {
      name: "Phoenix Feather",
      rarity: "Legendary",
      type: "Potion",
      stats: "Revives fallen ally | Full HP/MP",
      rarityColor: "from-yellow-400 to-yellow-600"
    }
  ]

  const resources = [
    {
      name: "Adamantite Ore",
      rarity: "Rare",
      type: "Metal",
      stats: "Used for Legendary equipment | +5 ATK when forged",
      rarityColor: "from-blue-400 to-cyan-500"
    },
    {
      name: "Moonpetal Herb",
      rarity: "Epic",
      type: "Herb",
      stats: "Rare crafting ingredient | +20% potion potency",
      rarityColor: "from-purple-500 to-pink-600"
    },
    {
      name: "Dragon Scale",
      rarity: "Legendary",
      type: "Scale",
      stats: "Ancient dragon remains | Used in epic armor",
      rarityColor: "from-yellow-400 to-yellow-600"
    }
  ]

  const craftingProfessions = [
    "All",
    "Alchemy",
    "Blacksmithing",
    "Leatherworking",
    "Tailoring",
    "Engineering",
    "Enchanting"
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col relative" style={{ backgroundImage: "url('/items.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <Navigation />

      <main className="relative z-10 flex-1 w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl font-bold mb-2 text-white text-center">Items</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-white/80 mt-4 text-center">Discover powerful equipment and magical artifacts to enhance your adventure</p>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Weapons */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Weapons</h2>
            <div className="space-y-3">
              {weapons.map((weapon) => (
                <ItemCard key={weapon.name} {...weapon} />
              ))}
            </div>
          </div>

          {/* Armor */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Armor</h2>
            <div className="space-y-3">
              {armor.map((armorp) => (
                <ItemCard key={armorp.name} {...armorp} />
              ))}
            </div>
          </div>

          {/* Potions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Potions</h2>
            <div className="space-y-3">
              {potions.map((potion) => (
                <ItemCard key={potion.name} {...potion} />
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Resources</h2>
            <div className="space-y-3">
              {resources.map((resource) => (
                <ItemCard key={resource.name} {...resource} />
              ))}
            </div>
          </div>
        </div>

        {/* Crafting Section - Full Width */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Crafting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {craftingProfessions.map((profession) => (
              <div key={profession} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{profession}</h3>
                <div className="space-y-2">
                  {/* Placeholder for future items - can be populated later */}
                  <div className="text-white/60 text-sm text-center italic">
                    Items coming soon...
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </main>

      <div className="relative z-20">
        <Footer />
      </div>

    </div>
  )
}
