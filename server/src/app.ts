import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

// cors
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Load Routes
app.use('/api', router);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
