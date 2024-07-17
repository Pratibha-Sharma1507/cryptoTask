import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fetchCryptoData from './services/cryptoService';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Polling data every few seconds
  setInterval(fetchCryptoData, 5000);
});
