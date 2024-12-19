import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// import { VercelRequest, VercelResponse } from '@vercel/node';
import appointmentRoutes from './routes/appointmentRoutes.js';

const app = express();

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5500',
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/appointment', appointmentRoutes);

// Export the serverless function
export default (req, res) => {
  app(req, res); // Forward requests to Express
};
