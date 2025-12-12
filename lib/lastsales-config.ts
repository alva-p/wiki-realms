export const CONTRACT_KOJINS = process.env.CONTRACT_ADDRESS_KOJINS
export const CONTRACT_MOUNTS = process.env.CONTRACT_ADDRESS_MOUNTS
export const OPENSEA_KEY = process.env.OPENSEA_API_KEY
export const RONIN_API = process.env.RONIN_API_URL
export const RONIN_API_KEY = process.env.API_KEY

export const COLLECTIONS = [
  { name: 'Kojins', contract: CONTRACT_KOJINS, market: 'opensea' },
  { name: 'Mounts', contract: CONTRACT_MOUNTS, market: 'opensea' },
  { name: 'Kojins', contract: CONTRACT_KOJINS, market: 'ronin' },
  { name: 'Mounts', contract: CONTRACT_MOUNTS, market: 'ronin' },
]
