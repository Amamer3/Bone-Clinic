import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import appointmentRoutes from './routes/appointmentRoutes.js';
import { createServer } from '@vercel/node';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/appointment', appointmentRoutes);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
