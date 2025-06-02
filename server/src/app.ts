import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import prisma from './lib/prisma.js';

const app = express();

// cors
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Add graceful shutdown
process.on('SIGTERM', async () => {
    await prisma.$disconnect()
    process.exit(0)
})

// Middleware
app.use(express.json());

// Load Routes
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
