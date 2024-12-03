import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import appointmentRoutes from './routes/appointmentRoutes.js';
// import { createServer } from '@vercel/node';

const app = express();
// const __dirname = path.resolve();

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

//depolying to Hosting 

// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import appointmentRoutes from './routes/appointmentRoutes.js';

// const app = express();

// // Enable CORS for your domain
// const corsOptions = {
//   origin: process.env.CLIENT_URL || 'http://localhost:5500', // Replace with your frontend URL
// };
// app.use(cors(corsOptions));

// app.use(express.json());
// app.use(express.static('public'));

// // Routes
// app.use('/api/appointment', appointmentRoutes);

// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


