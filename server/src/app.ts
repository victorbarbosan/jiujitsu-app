import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('GET request received');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
