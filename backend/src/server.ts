import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fetchCryptoData from './services/cryptoService';
import cryptoRoutes from './routes/cryptoRoutes';

dotenv.config();

const app = express();

const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api', cryptoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Polling data every few seconds
  setInterval(fetchCryptoData, 5000);
});
