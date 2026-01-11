// Datos de traits que otorgan estadísticas (Wings y Auras)
// A diferencia de las abilities, estos traits solo otorgan stats pasivos

export type StatType = 'attack' | 'defense' | 'vitality' | 'precision' | 'restoration' | 'speed' | 'ferocity' | 'retaliation' | 'leech' | 'haste'

export interface StatTrait {
  id: string
  name: string
  traitType: 'wings' | 'aura'
  image: string
  stat: StatType
  statValue: number  // porcentaje (ej: 15 = +15%)
  marketplaceUrl?: string
}

export const statTraits: StatTrait[] = [
  // === WINGS ===
   {
     id: 'hyonimaru',
     name: 'Hyonimaru',
     traitType: 'wings',
     image: '/traits/wings/hyonimaru.png',
     stat: 'defense',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Hyonimaru'
   },
   {
     id: 'hiryu-wings',
     name: 'Hiryu Wings',
     traitType: 'wings',
     image: '/traits/wings/hiryuwings.png',
     stat: 'defense',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Hiryu%20Wings'
   },
   {
     id: 'steampunk-wings',
     name: 'Steampunk Wings',
     traitType: 'wings',
     image: '/traits/wings/steampunkwings.png',
     stat: 'defense',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Steampunk%20Wings'
   },
   {
     id: 'rune',
     name: 'Rune',
     traitType: 'wings',
     image: '/traits/wings/rune.png',
     stat: 'haste',
     statValue: 4.25,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Rune'
   },
   {
     id: 'galaxy',
     name: 'Galaxy ',
     traitType: 'wings',
     image: '/traits/wings/galaxy.png',
     stat: 'haste',
     statValue: 4.25,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Galaxy'
   },
   {
     id: 'momoryu-wings',
     name: 'Momoryu Wings',
     traitType: 'wings',
     image: '/traits/wings/momoryuwings.png',
     stat: 'haste',
     statValue: 4.25,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Momoryu%20Wings'
   },
   {
     id: 'ryujin',
     name: 'Ryujin',
     traitType: 'wings',
     image: '/traits/wings/ryujin.png',
     stat: 'haste',
     statValue: 4.25,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Ryujin%20Wings'
   },
    {
     id: 'bishamon',
     name: 'Bishamon',
     traitType: 'wings',
     image: '/traits/wings/bishamon.png',
     stat: 'precision',
     statValue: 2.55,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Bishamon%20Wings'
   },
    {
     id: 'mech-wings',
     name: 'Mech Wings',
     traitType: 'wings',
     image: '/traits/wings/mechwings.png',
     stat: 'precision',
     statValue: 2.55,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Mech%20Wings'
   },
   {
     id: 'dark-angel',
     name: 'Dark Angel',
     traitType: 'wings',
     image: '/traits/wings/darkangel.png',
     stat: 'ferocity',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Dark%20Angel'
   },
   {
     id: 'anryu-wings',
     name: 'Anryu Wings',
     traitType: 'wings',
     image: '/traits/wings/anryuwings.png',
     stat: 'ferocity',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Anryu%20Wings'
   },
   {
     id: 'enryu-wings',
     name: 'Enryu Wings',
     traitType: 'wings',
     image: '/traits/wings/enryuwings.png',
     stat: 'speed',
     statValue: 6.375,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Enryu%20Wings'
   },
   {
     id: 'raijin',
     name: 'Raijin',
     traitType: 'wings',
     image: '/traits/wings/raijin.png',
     stat: 'speed',
     statValue: 6.375,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Raijin'
   },
    {
     id: 'triwings',
     name: 'Tri wings',
     traitType: 'wings',
     image: '/traits/wings/triwings.png',
     stat: 'attack',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Tri%20Wings'
   },
   {
     id: 'midoryu wings',
     name: 'Midoryu Wings',
     traitType: 'wings',
     image: '/traits/wings/midoryuwings.png',
     stat: 'restoration',
     statValue: 8.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Midoryu%20Wings'
   },
   {
     id: 'necro wings',
     name: 'Necro Wings',
     traitType: 'wings',
     image: '/traits/wings/necrowings.png',
     stat: 'leech',
     statValue: 4.25,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Wings=Necro%20Wings'
   },

  // === AURAS ===
   {
     id: 'enmu',
     name: 'Enmu',
     traitType: 'aura',
     image: '/traits/aura/enmu.png',
     stat: 'haste',
     statValue: 5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Aura=Enmu'
   },
   {
     id: 'yami',
     name: 'Yami',
     traitType: 'aura',
     image: '/traits/aura/yami.png',
     stat: 'ferocity',
     statValue: 10,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Aura=Yami'
   },
   {
     id: 'kumori',
     name: 'Kumori',
     traitType: 'aura',
     image: '/traits/aura/kumori.png',
     stat: 'speed',
     statValue: 7.5,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Aura=Kumori'
   },
   {
     id: 'kasai',
     name: 'Kasai',
     traitType: 'aura',
     image: '/traits/aura/kasai.png',
     stat: 'precision',
     statValue: 3,
     marketplaceUrl: 'https://marketplace.roninchain.com/collections/kojin?Aura=Kasai'
   },

]

// Nombres para mostrar en UI
export const statNames: Record<StatType, string> = {
  attack: 'Attack',
  defense: 'Defense',
  vitality: 'Vitality',
  precision: 'Precision',
  restoration: 'Restoration',
  speed: 'Speed',
  ferocity: 'Ferocity',
  retaliation: 'Retaliation',
  leech: 'Leech',
  haste: 'Haste',
}

// Obtener wings por categoría de stat
export function getWingsByStat(stat: StatType): StatTrait[] {
  return statTraits.filter(t => t.stat === stat && t.traitType === 'wings')
}

// Obtener auras por categoría de stat
export function getAurasByStat(stat: StatType): StatTrait[] {
  return statTraits.filter(t => t.stat === stat && t.traitType === 'aura')
}

// Obtener todos los stat traits por categoría
export function getStatTraitsByCategory(stat: StatType, type: 'wings' | 'aura'): StatTrait[] {
  return statTraits.filter(t => t.stat === stat && t.traitType === type)
}
