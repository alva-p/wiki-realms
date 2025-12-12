import { PrismaClient } from '@prisma/client'

declare global {
  // allow global prisma during dev to avoid multiple clients
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

const prisma = global.__prisma || new PrismaClient()
if (process.env.NODE_ENV === 'development') global.__prisma = prisma

export default prisma
