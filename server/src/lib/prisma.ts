import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: process.env.NODE_ENV !== 'production'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
})

async function connectToDatabase() {
    try {
        await prisma.$connect()
        console.log('✅ Database successfully connected')
    } catch (e: any) {
        console.error('❌ Failed to connect to the database:', e.message)
    }
}

connectToDatabase()
export default prisma