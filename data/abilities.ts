// Datos de habilidades del Kojin

// Tipos de traits de NFT que otorgan habilidades
export type TraitType = 'background' | 'emblem' | 'eyes' | 'horns' | 'snout' | 'tails'

// Trait de NFT que otorga una habilidad
export interface AbilityTrait {
  traitType: TraitType
  traitValue: string
  image: string
  marketplaceUrl: string
}

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
  traits?: AbilityTrait[]
}

export const abilities: Ability[] = [
  // Attack abilities
  {
    id: 'shadowstab',
    name: 'shadowstab',
    category: 'attack',
    image: '/abilities/attack/shadowstab.png',
    description: 'stab the enemy in front of you poisoning them on a successful hit ',
    traits: [
  {
    traitType: 'emblem',        
    traitValue: 'Sapphire Sosen',       
    image: '/traits/emblem/sapphireSosen.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Sosen'    
  },
  {
    traitType: 'emblem',        
    traitValue: 'Ruby Sosen',       
    image: '/traits/emblem/rubySosen.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Sosen'    
  },
  {
    traitType: 'emblem',        
    traitValue: 'Esmerald Sosen',       
    image: '/traits/emblem/esmeraldSosen.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Sosen'    
  },
  {
    traitType: 'emblem',        
    traitValue: 'Topaz Sosen',       
    image: '/traits/emblem/topazSosen.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Sosen'    
  },
]

  },
  {
    id: 'slash',
    name: 'slash',
    category: 'attack',
    image: '/abilities/attack/slash.png',
    description: 'strike your katana and inflict damage to all impacted enemies',
    traits: [
  {
    traitType: 'emblem',        
    traitValue: 'Ruby Kuwagata',       
    image: '/traits/emblem/rubyKuwagata.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Kuwagata'    
  },
   {
    traitType: 'emblem',        
    traitValue: 'Esmerald Kuwagata',       
    image: '/traits/emblem/esmeraldKuwagata.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Kuwagata'    
  },
   {
    traitType: 'emblem',        
    traitValue: 'Sapphire Kuwagata',       
    image: '/traits/emblem/sapphireKuwagata.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Kuwagata'    
  },
   {
    traitType: 'emblem',        
    traitValue: 'Topaz Kuwagata',       
    image: '/traits/emblem/topazKuwagata.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Kuwagata'    
  },
]
  },

  {
    id: 'moonfire',
    name: 'Moonfire',
    category: 'attack',
    image: '/abilities/attack/moonfire.png',
    description: 'instantly fire a moonbeam at your target',
    traits: [
      {
    traitType: 'emblem',        
    traitValue: 'Topaz Tsuki',       
    image: '/traits/emblem/topazTsuki.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Tsuki'    
  },
  {
    traitType: 'emblem',        
    traitValue: 'Sapphire Mikadzuki',       
    image: '/traits/emblem/sapphireMikadzuki.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Mikadzuki'    
  },
  {
    traitType: 'emblem',        
    traitValue: 'Ruby Tsuki',       
    image: '/traits/emblem/rubyTsuki.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Tsuki'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Esmerald Tsuki',       
    image: '/traits/emblem/esmeraldTsuki.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Tsuki'    
  },
  
    ]
  },
  {
    id: 'leech',
    name: 'Leech',
    category: 'attack',
    image: '/abilities/attack/leech.png',
    description: 'fire an orb at your target. if it hits an enemy, theree healing orbs return to you, each restoring a portion of the damage dealt.',
    traits: [
      {
    traitType: 'emblem',        
    traitValue: 'Ruby Shinzo',       
    image: '/traits/emblem/rubyShinzo.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Shinzo'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Sapphire Shinzo',       
    image: '/traits/emblem/sapphireShinzo.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Shinzo'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Topaz Shinzo',       
    image: '/traits/emblem/topazShinzo.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Shinzo'    
  },
    ]
  },
  {
    id: 'wand',
    name: 'Wand',
    category: 'attack',
    image: '/abilities/attack/wand.png',
    description: 'shoot a small ice bolt at your targeted location',
    traits: [
      {
    
    traitType: 'emblem',        
    traitValue: 'Esmerald Shiryoku',       
    image: '/traits/emblem/esmeraldShiryoku.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Shiryoku'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Topaz Shiryoku',       
    image: '/traits/emblem/topazShiryoku.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Shiryoku'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Ruby Shiryoku',       
    image: '/traits/emblem/rubyShiryoku.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Shiryoku'    
  },
    ]
   
  },
  {
    id: 'leap',
    name: 'Leap',
    category: 'attack',
    image: '/abilities/attack/leap.png',
    description: 'leap forward and smash the ground',
    traits: [
      {
    traitType: 'eyes',        
    traitValue: 'Scar',       
    image: '/traits/eyes/scar.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Scar'    
  },
    ]
  },
  {
    id: 'trap',
    name: 'Trap',
    category: 'attack',
    image: '/abilities/attack/trap.png',
    description: 'launch a trap at your targeted location. when triggered, stun the enemy and inflict damage',
    traits: [
      {
    traitType: 'snout',        
    traitValue: 'Axe',       
    image: '/traits/snout/axe.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Axe'    
  },
  {
    traitType: 'snout',
    traitValue: 'Dragon Trainer',
    image: '/traits/snout/dragonTrainer.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Dragon%20Trainer'
  },
    ]
  },
  {
    id: 'arcanebolt',
    name: 'Arcanebolt',
    category: 'attack',
    image: '/abilities/attack/arcanebolt.png',
    description: 'fire a chargeable arcane orb at your target. damage increases the longer you charge it',
    traits: [
      {
    traitType: 'emblem',        
    traitValue: 'Topaz Sai',       
    image: '/traits/emblem/topazSai.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Sai'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Esmerald Sai',       
    image: '/traits/emblem/esmeraldSai.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Sai'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Ruby Sai',       
    image: '/traits/emblem/rubySai.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Sai'    
  },
  {
    
    traitType: 'emblem',        
    traitValue: 'Sapphire Sai',       
    image: '/traits/emblem/sapphireSai.png',            
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Sai'    
  },
    ]
  },
  {
    id: 'steampunkgun',
    name: 'Steampunkgun',
    category: 'attack',
    image: '/abilities/attack/steampunkgun.png',
    description: 'use a steampunk gun to fire a burst of bullets at your target location',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Steampunk Horns',
    image: '/traits/horns/steampunkhorns.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Steampunk%20Horns'
  },
    ]
  },
  {
    id: 'yellowram',
    name: 'yellowram',
    category: 'attack',
    image: '/abilities/attack/yellowram.png',
    description: 'release a yellow ram that chases your target and deals damage on impact. it can pursus targets trhough walls',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Yellow Ram',
    image: '/traits/horns/yellowram.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Yellow%20Ram'
  },
    ]
  },
  {
    id: 'kotaroblades',
    name: 'Kotaroblades',
    category: 'attack',
    image: '/abilities/attack/kotaroblades.png',
    description: 'summon three sets of rotating blades around you, damagig each enemy they hit',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Kotaro',
    image: '/traits/horns/kotaro.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Kotaro'
  },
    ]
  },
  {
    id: 'demon',
    name: 'demon',
    category: 'attack',
    image: '/abilities/attack/demon.png',
    description: 'summon a demon that strikes your target before vanishing',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Demon',
    image: '/traits/horns/demon.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Demon'
  },
    ]
  },
   {
    id: 'mechlaser',
    name: 'mechlaser',
    category: 'attack',
    image: '/abilities/attack/mechleaser.png',
    description: 'Channel a laser at your target location, dealing damage to enemies standing in and around it',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Mech Tail',
    image: '/traits/tails/mechtail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Mech%20Tail'
  },
    ]
  },
   {
    id: 'moltenrage',
    name: 'moltenrage',
    category: 'attack',
    image: '/abilities/attack/moltenrage.png',
    description: 'Become unstoppable and slam your axe three times damaging all enemies around you',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Molten Axe',
    image: '/traits/tails/moltenaxe.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Molten%20Axe'
  },
    ]
  },
   {
    id: 'firestorm',
    name: 'firestorm',
    category: 'attack',
    image: '/abilities/attack/firestorm.png',
    description: 'Create a firestorm at your target location, dealing damage to enemies inside and burning them for damage over time',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Enryu Tail',
    image: '/traits/tails/enryutail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Enryu%20Tail'
  },
    ]
  },
  {
    id: 'knockback',
    name: 'Knockback',
    category: 'attack',
    image: '/abilities/attack/knockback.png',
    description: 'Launch all nearbiy enemies away from you.',
    traits: [
      {
    traitType: 'background',
    traitValue: 'Green Nami',
    image: '/traits/background/greennami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Green%20Nami'
  },
  {
    traitType: 'background',
    traitValue: 'Red Nami',
    image: '/traits/background/rednami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Red%20Nami'
  },
  {
    traitType: 'background',
    traitValue: 'Pink Nami',
    image: '/traits/background/pinknami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Pink%20Nami'
  },
  {
    traitType: 'background',
    traitValue: 'Purple Nami',
    image: '/traits/background/purplenami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Purple%20Nami'
  },
  {
    traitType: 'background',
    traitValue: 'Blue Nami',
    image: '/traits/background/bluenami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Blue%20Nami'
  },
    ]
  },

  

  // Defense abilities
  {
    id: 'mechshield',
    name: 'Mech Shield',
    category: 'defense',
    image: '/abilities/defense/mechshield.png',
    description: 'Cast a shield around yourself that reduces incoming damage.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Mech Snout',
    image: '/traits/snout/mechsnout.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Mech%20Snout'
  },
    ]
  },
  {
    id: 'metaljaw',
    name: 'Metal Jaw',
    category: 'defense',
    image: '/abilities/defense/metaljaw.png',
    description: 'Call a forth a massive metal jaw that snaps into place before you.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Metal Jaw',
    image: '/traits/snout/metaljaw.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Metal%20Jaw'
  },
    ]
  },
  {
    id: 'shield',
    name: 'Shield',
    category: 'defense',
    image: '/abilities/defense/shield.png',
    description: 'Create a shield protecting you from incoming projectiles.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Kojin Snout',
    image: '/traits/snout/kojinsnout.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Kojin%20Snout'
  },
    ]
  },
  {
    id: 'tower',
    name: 'Tower',
    category: 'defense',
    image: '/abilities/defense/tower.png',
    description: 'Deploy a tower at your position that repeatdly blasts enemies in a wide radius.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Steampunk Tail',
    image: '/traits/tails/steampunktail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Steampunk%20Tail'
  },
    ]
  },
  {
    id: 'disengage',
    name: 'Disengage',
    category: 'defense',
    image: '/abilities/defense/disengage.png',
    description: 'Launch yourself in the opposite direction you are facing.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Kojin Eyes',
    image: '/traits/eyes/kojineyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Kojin%20Eyes'
  },
    ]
  },
  {
    id: 'frostnova',
    name: 'FrostNova',
    category: 'defense',
    image: '/abilities/defense/frostnova.png',
    description: 'Inflict damage and freeze all neraby enemies.',
    traits: [
      {
    traitType: 'background',
    traitValue: 'Red Kotta',
    image: '/traits/background/redkotta.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Red%20Kotta'
  },
  {
    traitType: 'background',
    traitValue: 'Green Kotta',
    image: '/traits/background/greenkotta.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Green%20Kotta'
  },
  {
    traitType: 'background',
    traitValue: 'Pink Kotta',
    image: '/traits/background/pinkkotta.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Pink%20Kotta'
  },
  {
    traitType: 'background',
    traitValue: 'Blue Kotta',
    image: '/traits/background/bluekotta.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Blue%20Kotta'
  },
  {
    traitType: 'background',
    traitValue: 'Purple Kotta',
    image: '/traits/background/purplekotta.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Purple%20Kotta'
  },
    ]
  },



  // Vitality abilities
  {
    id: 'aquaticbarrier',
    name: "Aquatic Barrier",
    category: 'vitality',
    image: '/abilities/vitality/aquaticbarrier.png',
    description: 'Conjure a water barrier that surrounds you, absorbing incoming damage until it shatters.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Croc',
    image: '/traits/snout/croc.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Croc'
  },
    ]
    
  },
  {
    id: 'drhinoform',
    name: 'Drhinoform',
    category: 'vitality',
    image: '/abilities/vitality/dhrinoform.png',
    description: 'Transform into a drhino, reducing incominmg damage and allowing you to attack enemies at close range.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Rhino',
    image: '/traits/snout/rhino.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Rhino'
  },
    ]
    
  },
  {
    id: 'buttonportal',
    name: 'Pimppi Portal',
    category: 'vitality',
    image: '/abilities/vitality/buttonportal.png',
    description: 'Cast linked portals at your location and your target point, allowing you to blink between the two.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Anryu Eyes',
    image: '/traits/eyes/anryueyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Anryu%20Eyes'
  },
    ]
  },
  {
    id: 'merry',
    name: 'merry',
    category: 'vitality',
    image: '/abilities/vitality/merry.png',
    description: 'Cheerfully sing at the top of your lungs, healing yourself and damaging nearby enemies.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Merry',
    image: '/traits/horns/merry.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Merry'
  },
    ]
  },
   {
    id: 'mushroomcanon',
    name: 'Mushroomcanon',
    category: 'vitality',
    image: '/abilities/vitality/mushroomcanon.png',
    description: 'Launch four mushroom grenades. Enemies hit take damage and become "high", causing their attacks to have a chance to miss.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Mushroom',
    image: '/traits/horns/mushroom.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Mushroom'
  },
    ]
  },
  {
    id: 'draconicrage',
    name: 'Draconicrage',
    category: 'vitality',
    image: '/abilities/vitality/draconicrage.png',
    description: 'Summon a dragon that mirrors the damage of your next three successful attacks.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Shenron',
    image: '/traits/horns/shenron.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Shenron'
  },
    ]
  },
   {
    id: 'galacticecho',
    name: 'GalacticEcho',
    category: 'vitality',
    image: '/abilities/vitality/galacticecho.png',
    description: 'Transform into a wormhole and summon four galaxies that orbit toward you, after a short duration, you explode, dealing extra damage for each galaxy absorbed.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Galaxy',
    image: '/traits/horns/galaxy.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Galaxy'
  },
    ]
  },
  {
    id: 'littledragon',
    name: 'Little Dragon',
    category: 'vitality',
    image: '/abilities/vitality/littledragon.png',
    description: 'Summon a little dragon companion that shoots fireballs at your target.',
    traits: 
    [
      {
    traitType: 'tails',
    traitValue: 'Dragon Trainer',
    image: '/traits/tails/dragontrainer.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Dragon%20Trainer'
  },
    ]
  },
  {
    id: 'vinewall',
    name: 'VineWall',
    category: 'vitality',
    image: '/abilities/vitality/vinewall.png',
    description: 'Summon a wall of vines at your target location, stopping enemies and projectiles in their tracks.',
    traits: [
      {
    traitType: 'background',
    traitValue: 'Purple Kabuki',
    image: '/traits/background/purplekabuki.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Purple%20Kabuki'
  },
  {
    traitType: 'background',
    traitValue: 'Blue Kabuki',
    image: '/traits/background/bluekabuki.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Blue%20Kabuki'
  },
  {
    traitType: 'background',
    traitValue: 'Red Kabuki',
    image: '/traits/background/redkabuki.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Red%20Kabuki'
  },
   {
    traitType: 'background',
    traitValue: 'Pink Kabuki',
    image: '/traits/background/pinkkabuki.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Pink%20Kabuki'
  },
   {
    traitType: 'background',
    traitValue: 'Green Kabuki',
    image: '/traits/background/greenkabuki.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Green%20Kabuki'
  },
    ]
  },





  // Precision abilities
  {
    id: 'arrow',
    name: 'Arrow',
    category: 'precision',
    image: '/abilities/precision/arrow.png',
    description: 'Fire an arrow at your targeted location.',
    traits: [
      {
    traitType: 'emblem',
    traitValue: 'Ruby Tsubasa',
    image: '/traits/emblem/rubyTsubasa.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Ruby%20Tsubasa'
  },
  {
    traitType: 'emblem',
    traitValue: 'Topaz Tsubasa',
    image: '/traits/emblem/topazTsubasa.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Topaz%20Tsubasa'
  },
  {
    traitType: 'emblem',
    traitValue: 'Sapphire Tsubasa',
    image: '/traits/emblem/sapphireTsubasa.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Sapphire%20Tsubasa'
  },
  {
    traitType: 'emblem',
    traitValue: 'Esmerald Tsubasa',
    image: '/traits/emblem/esmeraldTsubasa.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Emblem=Esmerald%20Tsubasa'
  },

    ]
  },
  {
    id: 'camopus',
    name: 'Camopus',
    category: 'precision',
    image: '/abilities/precision/camopus.png',
    description: 'Enter camouflage, while camouflaged, your attacks deal increased damage.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Octo',
    image: '/traits/snout/octo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Octo'
  },
    ]
    
  },
  {
    id: 'shadowveil',
    name: 'Shadowveil',
    category: 'precision',
    image: '/abilities/precision/shadowveil.png',
    description: 'Turn completely invisible for a short time.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Arachno Snout',
    image: '/traits/snout/arachnoSnout.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Arachno%20Snout'
  },
    ]
  },
  {
    id: 'steampunkhook',
    name: 'Steampunk Hook',
    category: 'precision',
    image: '/abilities/precision/steampunkhook.png',
    description: 'Fire a hook at your target location, on a successful hit, pull yourself to the point of impact.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Steampunk Eyes',
    image: '/traits/eyes/steampunkEyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Steampunk%20Eyes'
  },
    ]
  },
  {
    id: 'shadowdash',
    name: 'Shadowdash',
    category: 'precision',
    image: '/abilities/precision/shadowdash.png',
    description: 'Reapper at your target location with your orientation flipped, facing the opposite way you started.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Arachno Eyes',
    image: '/traits/eyes/arachnoEyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Arachno%20Eyes'
  },
    ]
  },
  {
    id: 'mechrocket',
    name: 'Mech Rocket',
    category: 'precision',
    image: '/abilities/precision/mechrocket.png',
    description: 'Fire a rocket at your target location. If a valid target is detected before launch, the rocket will home in on it.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'mechhorns',
    image: '/traits/horns/mechhorns.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Mechhorns'
  },
    ]
  },
  {
    id: 'aoi',
    name: 'Aoi',
    category: 'precision',
    image: '/abilities/precision/aoi.png',
    description: 'Launch a volley of projectiles that automatically home in when a viable target is present.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Aoi Hono',
    image: '/traits/horns/aoiHono.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Aoi%20Hono'
  },
    ]
  },
  {
    id: 'advancedmultishot',
    name: 'Advanced Multishot',
    category: 'precision',
    image: '/abilities/precision/advancedmultishot.png',
    description: 'Rapidly fire three arrows at your target.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Kojin Horns',
    image: '/traits/horns/kojinHorns.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Kojin%20Horns'
  },
    ]
  },
  {
    id: 'meteor',
    name: 'Meteor',
    category: 'precision',
    image: '/abilities/precision/meteor.png',
    description: 'Conjure a giant meteor at your targeted location.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Hiryu Tail',
    image: '/traits/tails/hiryutail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Hiryu%20Tail'
  },
    ]
  },
  {
    id: 'cloud platform',
    name: 'Cloud Platform',
    category: 'precision',
    image: '/abilities/precision/cloudplatform.png',
    description: 'blast upward into the air, forming a temporary cloud platform to break your fall.',
    traits: [
      {
    traitType: 'background',
    traitValue: 'Pink Kiri',
    image: '/traits/background/pinkkiri.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Pink%20Kiri'
  },
  {
    traitType: 'background',
    traitValue: 'Blue Kiri',
    image: '/traits/background/bluekiri.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Blue%20Kiri'
  },
  {
    traitType: 'background',
    traitValue: 'Red Kiri',
    image: '/traits/background/redkiri.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Red%20Kiri'
  },
  {
    traitType: 'background',
    traitValue: 'Green Kiri',
    image: '/traits/background/greenkiri.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Green%20Kiri'
  },
  {
    traitType: 'background',
    traitValue: 'Purple Kiri',
    image: '/traits/background/purplekiri.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Purple%20Kiri'
  },
    ]
  },




  

  // Restoration abilities
  {
    id: 'turtleshell',
    name: 'Turtle Shell',
    category: 'restoration',
    image: '/abilities/restoration/turtleshell.png',
    description: 'Summon a shell that absorbs the next incoming attack',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Turtle',
    image: '/traits/snout/turtle.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Turtle'
  },
    ]
  },
  {
    id: 'okamicleanse',
    name: 'Okamicleanse',
    category: 'restoration',
    image: '/abilities/restoration/okamicleanse.png',
    description: 'Cleanse all debuffs and heal yourself, gaining additional healing for each debuff removed.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Okami',
    image: '/traits/snout/okami.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Okami'
  },
    ]
  },
  {
    id: 'truffles',
    name: 'Truffles',
    category: 'restoration',
    image: '/abilities/restoration/truffles.png',
    description: 'Generate truffles in your vicinity that restore you healt and harm enemies upon pickup.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Boar',
    image: '/traits/snout/boar.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Boar'
  },
    ]
  },
  {
    id: 'molesalamander',
    name: 'Mole Salamander',
    category: 'restoration',
    image: '/abilities/restoration/molesalamander.png',
    description: 'Turn into a mole salamander moving underground. While underground you are immune to damage.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Amphibian',
    image: '/traits/eyes/amphibian.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Amphibian'
  },
    ]
  },
   {
    id: 'snakewoodtotem',
    name: 'Snakewood Totem',
    category: 'restoration',
    image: '/abilities/restoration/snakewoodtotem.png',
    description: 'Place a totem at your location that alternates between damaging enemies and healing you within its radius.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Snakewood',
    image: '/traits/horns/snakewood.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Snakewood'
  },
    ]
  },
  {
    id: 'forceofnature',
    name: 'Force of Nature',
    category: 'restoration',
    image: '/abilities/restoration/forceofnature.png',
    description: 'Call upon nature to heal yourself while damaging nearby enemies.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Midoryu Tail',
    image: '/traits/tails/midoryutail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Midoryu%20Tail'
  },
    ]
  },



  // Speed abilities
  {
    id: 'ptero',
    name: 'ptero',
    category: 'speed',
    image: '/abilities/speed/ptero.png',
    description: 'Transform into a Pterodactyl, gaining the ability to fly.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Ptero',
    image: '/traits/snout/ptero.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Ptero'
  },
    ]
  },
  {
    id: 'speedup',
    name: 'SpeedUp',
    category: 'speed',
    image: '/abilities/speed/speedup.png',
    description: 'Gain a burst of movement speed for a limited time.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Hiryu Eyes',
    image: '/traits/eyes/hiryuEyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Hiryu%20Eyes'
  },
    ]
  },
  {
    id: 'timewarpteleport',
    name: 'TimeWarpTeleport',
    category: 'speed',
    image: '/abilities/speed/timewarpteleport.png',
    description: 'Mark your location and return to it after a delay, with your health resetting to a value between your past and present health.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Enryu Eyes',
    image: '/traits/eyes/enryuEyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Enryu%20Eyes'
  },
    ]
  },
  {
    id: 'icicle',
    name: 'Icicle',
    category: 'speed',
    image: '/abilities/speed/icicle.png',
    description: 'Shoot a large icicle at your target location, stunning any enemies it hit.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Winter Branch',
    image: '/traits/horns/winterbranch.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Winter%20Branch'
  },
    ]
  },
   {
    id: 'gazelle',
    name: 'Gazelle',
    category: 'speed',
    image: '/abilities/speed/gazelle.png',
    description: 'Gain a brief burst of speed, damaging nearby enemies as you take off.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Gazelle',
    image: '/traits/horns/gazelle.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Gazelle'
  },
    ]
  },
  {
    id: 'arrowrain',
    name: 'Arrow Rain',
    category: 'speed',
    image: '/abilities/speed/arrowrain.png',
    description: 'Call down a hail of arrows at your targeted location.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Momoryu Tail',
    image: '/traits/tails/momoryutail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Momoryu%20Tail'
  },
    ]
  },
  {
    id: 'risingsun',
    name: 'Rising Sun',
    category: 'speed',
    image: '/abilities/speed/risingsun.png',
    description: 'summon a roaming sun that follows you, dealing damage and revealing invisible enemies nearby.',
    traits: [
      {
    traitType: 'background',
    traitValue: 'Pink Taiyo',
    image: '/traits/background/pinktaiyo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Pink%20Taiyo'
  },
  {
    traitType: 'background',
    traitValue: 'Purple Taiyo',
    image: '/traits/background/purpletaiyo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Purple%20Taiyo'
  },
  {
    traitType: 'background',
    traitValue: 'Red Taiyo',
    image: '/traits/background/redtaiyo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Red%20Taiyo'
  },
  {
    traitType: 'background',
    traitValue: 'Blue Taiyo',
    image: '/traits/background/bluetaiyo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Blue%20Taiyo'
  },
  {
    traitType: 'background',
    traitValue: 'Green Taiyo',
    image: '/traits/background/greentaiyo.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Background=Green%20Taiyo'
  },
    ]
  },


  // Ferocity abilities
  {
    id: 'fireball',
    name: 'fireball',
    category: 'ferocity',
    image: '/abilities/ferocity/fireball.png',
    description: 'launch a fireball at your target. it will home in on the last enemy you succesfully damaged',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Majin',
    image: '/traits/horns/majin.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Majin'
  },
    ]
  },
  {
    id: 'concussion',
    name: 'concussion',
    category: 'ferocity',
    image: '/abilities/ferocity/concussion.png',
    description: 'shoot a projectile at your targeted location. on impact, inflict damage and stun nearby enemies',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Wyvern',
    image: '/traits/horns/wyvern.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Wyvern'
  },
    ]
  },
   {
    id: 'dragonform',
    name: 'dragonform',
    category: 'ferocity',
    image: '/abilities/ferocity/dragonform.png',
    description: 'transform into a flying dragon, breathing fire projectiles at your target',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Kaido',
    image: '/traits/horns/kaido.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Kaido'
  },
    ]
  },
   {
    id: 'roar',
    name: 'roar',
    category: 'ferocity',
    image: '/abilities/ferocity/roar.png',
    description: 'a poweful shout that stuns and surrouding enemies',
    traits:[
      {
    traitType: 'tails',
    traitValue: 'Kojin Tail',
    image: '/traits/tails/kojintail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Kojin%20Tail'
  },
    ]
  },
  {
    id: 'getoutofmyway',
    name: 'getoutofmyway',
    category: 'ferocity',
    image: '/abilities/ferocity/getoutofmyway.png',
    description: 'steadly increase your movement speed, damaging and knocking back everything in front of you',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Black Ram',
    image: '/traits/horns/blackram.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Black%20Ram'
  },
    ]
  },

   {
    id: 'lightningstrike',
    name: 'lightningstrike',
    category: 'ferocity',
    image: '/abilities/ferocity/lighthingstrike.png',
    description: 'call down a tundercloud over you targeted area, unleashing multiple lighthing strikes that damage any enemies caugh within',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Hammer',
    image: '/traits/tails/hammer.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Hammer'
  },
    ]
  },
   {
    id: 'whirlwind',
    name: 'whirlwind',
    category: 'ferocity',
    image: '/abilities/ferocity/whirlwind.png',
    description: 'for a period of time, spin and inflict damage to all enemies in your path',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Morningstar',
    image: '/traits/tails/morningstar.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Morningstar'
  },
    ]
  },

    // Retaliation abilities
  {
    id: 'steampunkshield',
    name: 'Steampunkshield',
    category: 'retaliation',
    image: '/abilities/retaliation/steampunkshield.png',
    description: 'Cast a shield around yourself that reflects a portion of incoming damage back to the attacker.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Steampunk Snout',
    image: '/traits/snout/steampunksnout.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Steampunk%20Snout'
  },
    ]
  },
   {
    id: 'spike',
    name: 'Spike',
    category: 'retaliation',
    image: '/abilities/retaliation/spike.png',
    description: 'Summon a protective spike around you. Countering the next incoming attack.',
    traits: [
      {
    traitType: 'snout',
    traitValue: 'Spiked Snout',
    image: '/traits/snout/spikedsnout.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Snout=Spiked%20Snout'
  },
    ]
  },
   {
    id: 'mechlaunch',
    name: 'Mechlaunch',
    category: 'retaliation',
    image: '/abilities/retaliation/mechalaunch.png',
    description: 'Launch yourself veritcally into the air.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Mech Eyes',
    image: '/traits/eyes/mecheyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Mech%20Eyes'
  },
    ]
  },
  {
    id: 'littleskelly',
    name: 'Littleskelly',
    category: 'retaliation',
    image: '/abilities/retaliation/littleskelly.png',
    description: 'Summon a skeleton that chases your target and deals damage on contact.',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Undying Horns',
    image: '/traits/horns/undyinghorns.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Undying%20Horns'
  },
    ]
  },
  {
    id: 'necro',
    name: 'Necro',
    category: 'retaliation',
    image: '/abilities/retaliation/necro.png',
    description: 'Unleash whispers of doom that latch onto your target, inflicting damage over time. The spell homes in automatically when a valid target is present',
    traits: [
      {
    traitType: 'horns',
    traitValue: 'Necro Horns',
    image: '/traits/horns/necrohorns.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Horns=Necro%20Horns'
  },
    ]
  },
  {
    id: 'spikerings',
    name: 'SpikeRings',
    category: 'retaliation',
    image: '/abilities/retaliation/spikerings.png',
    description: 'Shatter the ground in a burst around you, harming every enemy caught in the rupture.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Spiked Tail',
    image: '/traits/tails/spikedtail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Spiked%20Tail'
  },
    ]
  },




      // Haste abilities
  {
    id: 'blink',
    name: 'Blink',
    category: 'haste',
    image: '/abilities/haste/blink.png',
    description: 'Teleport to your targeted location.',
    traits: [
      {
    traitType: 'eyes',
    traitValue: 'Midoryu Eyes',
    image: '/traits/eyes/midoryueyes.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Eyes=Midoryu%20Eyes'
  },
    ]
  },


    // Leech abilities
  {
    id: 'centipal',
    name: 'Centipal',
    category: 'leech',
    image: '/abilities/leech/centipal.png',
    description: 'Summon a giant centipal pet with high health that attacks your target. Enemies it hits are posioned.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Anryu Tail',
    image: '/traits/tails/anryutail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Anryu%20Tail'
  },
    ]
  },
  {
    id: 'boneblast',
    name: 'Boneblast',
    category: 'leech',
    image: '/abilities/leech/boneblast.png',
    description: 'Summon a giant skeletal serpent that fires bone projectiles in a moving cone ahead of it.',
    traits: [
      {
    traitType: 'tails',
    traitValue: 'Undying Tail',
    image: '/traits/tails/undyingtail.png',
    marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Tails=Undying%20Tail'
  },
    ]
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
