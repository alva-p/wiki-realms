// Datos de habilidades del Kojin
export interface Ability {
  id: string
  name: string
  category: 'attack' | 'defense' | 'vitality' | 'precision' | 'restoration' | 'speed' | 'ferocity' | 'retaliation'| 'leech'| 'haste'
  image: string
  description: string
  stats?: {
    damage?: number
    defense?: number
    health?: number
    accuracy?: number
    healing?: number
    speed?: number
    retaliation?: number
    leech?: number
    haste?: number
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
    id: 'mechlaser',
    name: 'mechlaser',
    category: 'attack',
    image: '/abilities/attack/mechleaser.png',
    description: 'Channel a laser at your target location, dealing damage to enemies standing in and around it',
  },
   {
    id: 'demonslash',
    name: 'demonslash',
    category: 'attack',
    image: '/abilities/attack/demon.png',
    description: 'Summon a demon that strikes your target before vanishing',
  },
   {
    id: 'moltenrage',
    name: 'moltenrage',
    category: 'attack',
    image: '/abilities/attack/moltenrage.png',
    description: 'Become unstoppable and slam your axe three times damaging all enemies around you',
  },
   {
    id: 'firestorm',
    name: 'firestorm',
    category: 'attack',
    image: '/abilities/attack/firestorm.png',
    description: 'Create a firestorm at your target location, dealing damage to enemies inside and burning them for damage over time',
  },
  {
    id: 'knockback',
    name: 'Knockback',
    category: 'attack',
    image: '/abilities/attack/knockback.png',
    description: 'Launch all nearbiy enemies away from you.',
  },

  

  // Defense abilities
  {
    id: 'mechshield',
    name: 'Mech Shield',
    category: 'defense',
    image: '/abilities/defense/mechshield.png',
    description: 'Cast a shield around yourself that reduces incoming damage.',
  },
  {
    id: 'metaljaw',
    name: 'Metal Jaw',
    category: 'defense',
    image: '/abilities/defense/metaljaw.png',
    description: 'Call a forth a massive metal jaw that snaps into place before you.',
  },
  {
    id: 'shield',
    name: 'Shield',
    category: 'defense',
    image: '/abilities/defense/shield.png',
    description: 'Create a shield protecting you from incoming projectiles.',
  },
  {
    id: 'tower',
    name: 'Tower',
    category: 'defense',
    image: '/abilities/defense/tower.png',
    description: 'Deploy a tower at your position that repeatdly blasts enemies in a wide radius.',
  },
  {
    id: 'disengage',
    name: 'Disengage',
    category: 'defense',
    image: '/abilities/defense/disengage.png',
    description: 'Launch yourself in the opposite direction you are facing.',
  },
  {
    id: 'frostnova',
    name: 'FrostNova',
    category: 'defense',
    image: '/abilities/defense/frostnova.png',
    description: 'Inflict damage and freeze all neraby enemies.',
  },



  // Vitality abilities
  {
    id: 'aquaticbarrier',
    name: "Aquatic Barrier",
    category: 'vitality',
    image: '/abilities/vitality/aquaticbarrier.png',
    description: 'Conjure a water barrier that surrounds you, absorbing incoming damage until it shatters.',
    
  },
  {
    id: 'drhinoform',
    name: 'Drhinoform',
    category: 'vitality',
    image: '/abilities/vitality/dhrinoform.png',
    description: 'Transform into a drhino, reducing incominmg damage and allowing you to attack enemies at close range.',
    
  },
  {
    id: 'buttonportal',
    name: 'Button Portal',
    category: 'vitality',
    image: '/abilities/vitality/buttonportal.png',
    description: 'Cast linked portals at your location and your target point, allowing you to blink between the two.',
  },
  {
    id: 'merry',
    name: 'merry',
    category: 'vitality',
    image: '/abilities/vitality/merry.png',
    description: 'Cheerfully sing at the top of your lungs, healing yourself and damaging nearby enemies.',
  },
   {
    id: 'mushroomcanon',
    name: 'Mushroomcanon',
    category: 'vitality',
    image: '/abilities/vitality/mushroomcanon.png',
    description: 'Launch four mushroom grenades. Enemies hit take damage and become "high", causing their attacks to have a chance to miss.',
  },
  {
    id: 'draconicrage',
    name: 'Draconicrage',
    category: 'vitality',
    image: '/abilities/vitality/draconicrage.png',
    description: 'Summon a dragon that mirrors the damage of your next three successful attacks.',
  },
   {
    id: 'galacticecho',
    name: 'GalacticEcho',
    category: 'vitality',
    image: '/abilities/vitality/galacticecho.png',
    description: 'Transform into a wormhole and summon four galaxies that orbit toward you, after a short duration, you explode, dealing extra damage for each galaxy absorbed.',
  },
  {
    id: 'littledragon',
    name: 'Little Dragon',
    category: 'vitality',
    image: '/abilities/vitality/littledragon.png',
    description: 'Summon a little dragon companion that shoots fireballs at your target.',
  },
  {
    id: 'vinewall',
    name: 'VineWall',
    category: 'vitality',
    image: '/abilities/vitality/vinewall.png',
    description: 'Summon a wall of vines at your target location, stopping enemies and projectiles in their tracks.',
  },





  // Precision abilities
  {
    id: 'arrow',
    name: 'Arrow',
    category: 'precision',
    image: '/abilities/precision/arrow.png',
    description: 'Fire an arrow at your targeted location.',
    
  },
  {
    id: 'camopus',
    name: 'Camopus',
    category: 'precision',
    image: '/abilities/precision/camopus.png',
    description: 'Enter camouflage, while camouflaged, your attacks deal increased damage.',
    
  },
  {
    id: 'shadowveil',
    name: 'Shadowveil',
    category: 'precision',
    image: '/abilities/precision/shadowveil.png',
    description: 'Turn completely invisible for a short time.',
  },
  {
    id: 'steampunkhook',
    name: 'Steampunk Hook',
    category: 'precision',
    image: '/abilities/precision/steampunkhook.png',
    description: 'Fire a hook at your target location, on a successful hit, pull yourself to the point of impact.',
  },
  {
    id: 'shadowdash',
    name: 'Shadowdash',
    category: 'precision',
    image: '/abilities/precision/shadowdash.png',
    description: 'Reapper at your target location with your orientation flipped, facing the opposite way you started.',
  },
  {
    id: 'mechrocket',
    name: 'Mech Rocket',
    category: 'precision',
    image: '/abilities/precision/mechrocket.png',
    description: 'Fire a rocket at your target location. If a valid target is detected before launch, the rocket will home in on it.',
  },
  {
    id: 'aoi',
    name: 'Aoi',
    category: 'precision',
    image: '/abilities/precision/aoi.png',
    description: 'Launch a volley of projectiles that automatically home in when a viable target is present.',
  },
  {
    id: 'advancedmultishot',
    name: 'Advanced Multishot',
    category: 'precision',
    image: '/abilities/precision/advancedmultishot.png',
    description: 'Rapidly fire three arrows at your target.',
  },
  {
    id: 'meteor',
    name: 'Meteor',
    category: 'precision',
    image: '/abilities/precision/meteor.png',
    description: 'Conjure a giant meteor at your targeted location.',
  },
  {
    id: 'cloud platform',
    name: 'Cloud Platform',
    category: 'precision',
    image: '/abilities/precision/cloudplatform.png',
    description: 'blast upward into the air, forming a temporary cloud platform to break your fall.',
  },




  

  // Restoration abilities
  {
    id: 'turtleshell',
    name: 'Turtle Shell',
    category: 'restoration',
    image: '/abilities/restoration/turtleshell.png',
    description: 'Summon a shell that absorbs the next incoming attack',
  },
  {
    id: 'okamicleanse',
    name: 'Okamicleanse',
    category: 'restoration',
    image: '/abilities/restoration/okamicleanse.png',
    description: 'Cleanse all debuffs and heal yourself, gaining additional healing for each debuff removed.',
  },
  {
    id: 'truffles',
    name: 'Truffles',
    category: 'restoration',
    image: '/abilities/restoration/truffles.png',
    description: 'Generate truffles in your vicinity that restore you healt and harm enemies upon pickup.',
  },
  {
    id: 'molesalamander',
    name: 'Mole Salamander',
    category: 'restoration',
    image: '/abilities/restoration/molesalamander.png',
    description: 'Turn into a mole salamander moving underground. While underground you are immune to damage.',
  },
   {
    id: 'snakewoodtotem',
    name: 'Snakewood Totem',
    category: 'restoration',
    image: '/abilities/restoration/snakewoodtotem.png',
    description: 'Place a totem at your location that alternates between damaging enemies and healing you within its radius.',
  },
  {
    id: 'forceofnature',
    name: 'Force of Nature',
    category: 'restoration',
    image: '/abilities/restoration/forceofnature.png',
    description: 'Call upon nature to heal yourself while damaging nearby enemies.',
  },



  // Speed abilities
  {
    id: 'ptero',
    name: 'ptero',
    category: 'speed',
    image: '/abilities/speed/ptero.png',
    description: 'Transform into a Pterodactyl, gaining the ability to fly.',
  },
  {
    id: 'speedup',
    name: 'SpeedUp',
    category: 'speed',
    image: '/abilities/speed/speedup.png',
    description: 'Gain a burst of movement speed for a limited time.',
  },
  {
    id: 'timewarpteleport',
    name: 'TimeWarpTeleport',
    category: 'speed',
    image: '/abilities/speed/timewarpteleport.png',
    description: 'Mark your location and return to it after a delay, with your health resetting to a value between your past and present health.',
  },
  {
    id: 'icicle',
    name: 'Icicle',
    category: 'speed',
    image: '/abilities/speed/icicle.png',
    description: 'Shoot a large icicle at your target location, stunning any enemies it hit.',
  },
   {
    id: 'gazelle',
    name: 'Gazelle',
    category: 'speed',
    image: '/abilities/speed/gazelle.png',
    description: 'Gain a brief burst of speed, damaging nearby enemies as you take off.',
  },
  {
    id: 'arrowrain',
    name: 'Arrow Rain',
    category: 'speed',
    image: '/abilities/speed/arrowrain.png',
    description: 'Call down a hail of arrows at your targeted location.',
  },
  {
    id: 'risingsun',
    name: 'Rising Sun',
    category: 'speed',
    image: '/abilities/speed/risingsun.png',
    description: 'summon a roaming sun that follows you, dealing damage and revealing invisible enemies nearby.',
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
    // Retaliation abilities
  {
    id: 'steampunkshield',
    name: 'Steampunkshield',
    category: 'retaliation',
    image: '/abilities/retaliation/steampunkshield.png',
    description: 'Cast a shield around yourself that reflects a portion of incoming damage back to the attacker.',
  },
   {
    id: 'spike',
    name: 'Spike',
    category: 'retaliation',
    image: '/abilities/retaliation/spike.png',
    description: 'Summon a protective spike around you. Countering the next incoming attack.',
  },
   {
    id: 'mechalaunch',
    name: 'Mechalaunch',
    category: 'retaliation',
    image: '/abilities/retaliation/mechalaunch.png',
    description: 'Launch yourself veritcally into the air.',
  },
  {
    id: 'littleskelly',
    name: 'Littleskelly',
    category: 'retaliation',
    image: '/abilities/retaliation/littleskelly.png',
    description: 'Summon a skeleton that chases your target and deals damage on contact.',
  },
  {
    id: 'necro',
    name: 'Necro',
    category: 'retaliation',
    image: '/abilities/retaliation/necro.png',
    description: 'Unleash whispers of doom that latch onto your target, inflicting damage over time. The spell homes in automatically when a valid target is present',
  },
  {
    id: 'spikerings',
    name: 'SpikeRings',
    category: 'retaliation',
    image: '/abilities/retaliation/spikerings.png',
    description: 'Shatter the ground in a burst around you, harming every enemy caught in the rupture.',
  },




      // Haste abilities
  {
    id: 'blink',
    name: 'Blink',
    category: 'haste',
    image: '/abilities/haste/blink.png',
    description: 'Teleport to your targeted location.',
  },


    // Leech abilities
  {
    id: 'centipal',
    name: 'Centipal',
    category: 'leech',
    image: '/abilities/leech/centipal.png',
    description: 'Summon a giant centipal pet with high health that attacks your target. Enemies it hits are posioned.',
  },
  {
    id: 'boneblast',
    name: 'Boneblast',
    category: 'leech',
    image: '/abilities/leech/boneblast.png',
    description: 'Summon a giant skeletal serpent that fires bone projectiles in a moving cone ahead of it.',
  }


]

export const categoryNames = {
  attack: 'Attack',
  defense: 'Defense',
  vitality: 'Vitality',
  precision: 'Precision',
  restoration: 'Restoration',
  speed: 'Speed',
  ferocity: 'Ferocity',
  retaliation: 'Retaliation',
  leech: 'Leech',
  haste: 'Haste'
}

export const categoryDescriptions = {
  attack: 'determines the damage of your attacks',
  defense: 'reduces the damage of incoming attacks',
  vitality: 'Determines your maximum health',
  precision: 'determines the chance for a critical strike',
  restoration: 'determines the amount of your healing abilities',
  speed: 'determines your movement speed',
  ferocity: 'Increases the damage of your critical strikes',
  retaliation: 'Returns a portion of incoming damage back to the atacker',
  leech: 'Heals you for a porcentage of the damage you deal to enemies',
  haste: 'Reduces the cooldown of all abilities, including the global cooldown'
}

export function getAbilitiesByCategory(category: Ability['category']): Ability[] {
  return abilities.filter(ability => ability.category === category)
}
