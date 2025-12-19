// Datos de habilidades del Kojin
export interface Ability {
  id: string
  name: string
  category: 'attack' | 'defense' | 'vitality' | 'precision' | 'restoration' | 'speed' | 'ferocity'
  image: string
  description: string
  stats?: {
    damage?: number
    defense?: number
    health?: number
    accuracy?: number
    healing?: number
    speed?: number
  }
}

export const abilities: Ability[] = [
  // Attack abilities
  {
    id: 'shadowstab',
    name: 'shadowstab',
    category: 'attack',
    image: '/abilities/attack/shadowstab.png',
    description: 'stab the enemy in front of you poisoning them on a successful hit ',
  },
  {
    id: 'slash',
    name: 'slash',
    category: 'attack',
    image: '/abilities/attack/slash.png',
    description: 'strike your katana and inflict damage to all impacted enemies',
    
  },
  {
    id: 'moonfire',
    name: 'Moonfire',
    category: 'attack',
    image: '/abilities/attack/moonfire.png',
    description: 'instantly fire a moonbeam at your target',
  },
  {
    id: 'leech',
    name: 'Leech',
    category: 'attack',
    image: '/abilities/attack/leech.png',
    description: 'fire an orb at your target. if it hits an enemy, theree healing orbs return to you, each restoring a portion of the damage dealt.',
  },
  {
    id: 'wand',
    name: 'Wand',
    category: 'attack',
    image: '/abilities/attack/wand.png',
    description: 'shoot a small ice bolt at your targeted location',
  },

  {
    id: 'leap',
    name: 'Leap',
    category: 'attack',
    image: '/abilities/attack/leap.png',
    description: 'leap forward and smash the ground',
  },
  {
    id: 'trap',
    name: 'Trap',
    category: 'attack',
    image: '/abilities/attack/trap.png',
    description: 'launch a trap at your targeted location. when triggered, stun the enemy and inflict damage',
  },
  {
    id: 'arcanebolt',
    name: 'Arcanebolt',
    category: 'attack',
    image: '/abilities/attack/arcanebolt.png',
    description: 'fire a chargeable arcane orb at your target. damage increases the longer you charge it',
  },
  {
    id: 'steampunkgun',
    name: 'Steampunkgun',
    category: 'attack',
    image: '/abilities/attack/steampunkgun.png',
    description: 'use a steampunk gun to fire a burst of bullets at your target location',
  },
  {
    id: 'yellowram',
    name: 'yellowram',
    category: 'attack',
    image: '/abilities/attack/yellowram.png',
    description: 'release a yellow ram that chases your target and deals damage on impact. it can pursus targets trhough walls',
  },
  {
    id: 'kotaroblades',
    name: 'Kotaroblades',
    category: 'attack',
    image: '/abilities/attack/kotaroblades.png',
    description: 'summon three sets of rotating blades around you, damagig each enemy they hit',
  },
  {
    id: 'demon',
    name: 'demon',
    category: 'attack',
    image: '/abilities/attack/demon.png',
    description: 'summon a demon that strikes your target before vanishing',
  },
   {
    id: 'mechleaser',
    name: 'mechleaser',
    category: 'attack',
    image: '/abilities/attack/mechleaser.png',
    description: 'channel a laser at your target location, dealing damage to enemies standing in and around it',
  },
   {
    id: 'demonslash',
    name: 'demonslash',
    category: 'attack',
    image: '/abilities/attack/demon.png',
    description: 'summon a demon that strikes your target before vanishing',
  },
   {
    id: 'moltenrage',
    name: 'moltenrage',
    category: 'attack',
    image: '/abilities/attack/moltenrage.png',
    description: 'become unstoppable and slam your axe three times damaging all enemies around you',
  },
   {
    id: 'firestorm',
    name: 'firestorm',
    category: 'attack',
    image: '/abilities/attack/firestorm.png',
    description: 'create a firestorm at your target location, dealing damage to enemies inside and burning them for damage over time',
  },

  

  // Defense abilities
  {
    id: 'scale-armor',
    name: 'Scale Armor',
    category: 'defense',
    image: '/abilities/scale-armor.png',
    description: 'Hardens scales to reduce incoming damage by 40% for 8 seconds.',
  },
  {
    id: 'iron-hide',
    name: 'Iron Hide',
    category: 'defense',
    image: '/abilities/iron-hide.png',
    description: 'Temporarily grants immunity to status effects and increases armor by 50.',
  },
  {
    id: 'guardian-stance',
    name: 'Guardian Stance',
    category: 'defense',
    image: '/abilities/guardian-stance.png',
    description: 'Takes a defensive posture that reflects 20% of damage back to attackers.',
  },
  {
    id: 'shield-wall',
    name: 'Shield Wall',
    category: 'defense',
    image: '/abilities/shield-wall.png',
    description: 'Creates a barrier that absorbs up to 500 damage before breaking.',
    stats: { defense: 500 }
  },

  // Vitality abilities
  {
    id: 'dragons-heart',
    name: "Dragon's Heart",
    category: 'vitality',
    image: '/abilities/dragons-heart.png',
    description: 'Increases maximum health by 25% and grants slow health regeneration over time.',
    stats: { health: 25 }
  },
  {
    id: 'endurance',
    name: 'Endurance',
    category: 'vitality',
    image: '/abilities/endurance.png',
    description: 'Passive ability that increases stamina and reduces fatigue effects.',
    stats: { health: 15 }
  },
  {
    id: 'second-wind',
    name: 'Second Wind',
    category: 'vitality',
    image: '/abilities/second-wind.png',
    description: 'When health drops below 30%, automatically heal for 20% of max health. Once per battle.',
    stats: { health: 20 }
  },
  {
    id: 'fortitude',
    name: 'Fortitude',
    category: 'vitality',
    image: '/abilities/fortitude.png',
    description: 'Increases resistance to damage over time effects and poison.',
    stats: { health: 18 }
  },

  // Precision abilities
  {
    id: 'hawk-eye',
    name: 'Hawk Eye',
    category: 'precision',
    image: '/abilities/hawk-eye.png',
    description: 'Increases critical hit chance by 30% and accuracy by 25% for 10 seconds.',
    stats: { accuracy: 25 }
  },
  {
    id: 'focused-strike',
    name: 'Focused Strike',
    category: 'precision',
    image: '/abilities/focused-strike.png',
    description: 'A carefully aimed attack that never misses and has 100% critical chance.',
    stats: { accuracy: 100 }
  },
  {
    id: 'weak-point',
    name: 'Weak Point',
    category: 'precision',
    image: '/abilities/weak-point.png',
    description: 'Identifies enemy weak points, increasing damage to vulnerable areas by 40%.',
    stats: { accuracy: 40 }
  },
  {
    id: 'sniper-shot',
    name: 'Sniper Shot',
    category: 'precision',
    image: '/abilities/sniper-shot.png',
    description: 'Long-range precision attack with extended range and guaranteed hit.',
    stats: { accuracy: 35 }
  },

  // Restoration abilities
  {
    id: 'healing-flame',
    name: 'Healing Flame',
    category: 'restoration',
    image: '/abilities/healing-flame.png',
    description: 'A mystical flame that heals allies for 200 health in a small area.',
    stats: { healing: 200 }
  },
  {
    id: 'regeneration',
    name: 'Regeneration',
    category: 'restoration',
    image: '/abilities/regeneration.png',
    description: 'Grants rapid health regeneration, restoring 5% max health per second for 6 seconds.',
    stats: { healing: 30 }
  },
  {
    id: 'life-link',
    name: 'Life Link',
    category: 'restoration',
    image: '/abilities/life-link.png',
    description: 'Links health with an ally, sharing healing effects between both targets.',
    stats: { healing: 150 }
  },
  {
    id: 'rejuvenation',
    name: 'Rejuvenation',
    category: 'restoration',
    image: '/abilities/rejuvenation.png',
    description: 'Removes all negative effects and heals for 100 health instantly.',
    stats: { healing: 100 }
  },

  // Speed abilities
  {
    id: 'wind-dash',
    name: 'Wind Dash',
    category: 'speed',
    image: '/abilities/wind-dash.png',
    description: 'Dash forward at incredible speed, becoming untargetable for 1 second.',
    stats: { speed: 50 }
  },
  {
    id: 'swift-strike',
    name: 'Swift Strike',
    category: 'speed',
    image: '/abilities/swift-strike.png',
    description: 'Increases attack speed by 40% for 5 seconds, allowing rapid combo attacks.',
    stats: { speed: 40 }
  },
  {
    id: 'flight',
    name: 'Flight',
    category: 'speed',
    image: '/abilities/flight.png',
    description: 'Take to the skies, increasing movement speed by 60% and avoiding ground effects.',
    stats: { speed: 60 }
  },
  {
    id: 'lightning-reflexes',
    name: 'Lightning Reflexes',
    category: 'speed',
    image: '/abilities/lightning-reflexes.png',
    description: 'Permanently increases dodge chance by 20% and movement speed by 15%.',
  },

  // Ferocity abilities
  {
    id: 'fireball',
    name: 'fireball',
    category: 'ferocity',
    image: '/abilities/ferocity/fireball.png',
    description: 'launch a fireball at your target. it will home in on the last enemy you succesfully damaged',
  },
  {
    id: 'concussion',
    name: 'concussion',
    category: 'ferocity',
    image: '/abilities/ferocity/concussion.png',
    description: 'shoot a projectile at your targeted location. on impact, inflict damage and stun nearby enemies',
  },
   {
    id: 'dragonform',
    name: 'dragonform',
    category: 'ferocity',
    image: '/abilities/ferocity/dragonform.png',
    description: 'transform into a flying dragon, breathing fire projectiles at your target',
  },
   {
    id: 'roar',
    name: 'roar',
    category: 'ferocity',
    image: '/abilities/ferocity/roar.png',
    description: 'a poweful shout that stuns and surrouding enemies',
  },
  {
    id: 'getoutofmyway',
    name: 'getoutofmyway',
    category: 'ferocity',
    image: '/abilities/ferocity/getoutofmyway.png',
    description: 'steadly increase your movement speed, damaging and knocking back everything in front of you',
  },

   {
    id: 'lightningstrike',
    name: 'lightningstrike',
    category: 'ferocity',
    image: '/abilities/ferocity/lighthingstrike.png',
    description: 'call down a tundercloud over you targeted area, unleashing multiple lighthing strikes that damage any enemies caugh within',
  },
   {
    id: 'whirlwind',
    name: 'whirlwind',
    category: 'ferocity',
    image: '/abilities/ferocity/whirlwind.png',
    description: 'for a period of time, spin and inflict damage to all enemies in your path',
  },
   {
    id: 'thunderstorm',
    name: 'thunderstorm',
    category: 'ferocity',
    image: '/abilities/ferocity/lighthingstrike.png',
    description: 'call down a tundercloud over you targeted area, unleashing multiple lighthing strikes that damage any enemies caugh within',
  },
]

export const categoryNames = {
  attack: 'Attack',
  defense: 'Defense',
  vitality: 'Vitality',
  precision: 'Precision',
  restoration: 'Restoration',
  speed: 'Speed',
  ferocity: 'Ferocity'
}

export const categoryDescriptions = {
  attack: 'determines the damage of your attacks',
  defense: 'reduces the damage of incoming attacks',
  vitality: 'Determines your maximum health',
  precision: 'determines the chance for a critical strike',
  restoration: 'determines the amount of your healing abilities',
  speed: 'determines your movement speed',
  ferocity: 'Increases the damage of your critical strikes',
}

export function getAbilitiesByCategory(category: Ability['category']): Ability[] {
  return abilities.filter(ability => ability.category === category)
}
