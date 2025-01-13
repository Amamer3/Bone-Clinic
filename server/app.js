import 'dotenv/config';
import express from 'express';
import cors from 'cors';
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

// Listener for Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
