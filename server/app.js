// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import appointmentRoutes from './routes/appointmentRoutes.js';
// // import { createServer } from '@vercel/node';

// const app = express();
// // const __dirname = path.resolve();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // Routes
// app.use('/api/appointment', appointmentRoutes);

// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import appointmentRoutes from './routes/appointmentRoutes.js';
import { createLogger, transports, format } from 'winston';
import helmet from 'helmet';

// Initialize Express app
const app = express();
const __dirname = path.resolve();

// Logger setup using Winston
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'server.log' }),
  ],
});

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Static files

// Routes
app.use('/api/appointment', appointmentRoutes);

// Catch-all route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// Export the app for Vercel
export default app;
