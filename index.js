import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Route
app.use('/api', router);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
