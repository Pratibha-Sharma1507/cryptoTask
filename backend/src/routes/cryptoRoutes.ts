import { Router } from 'express';
import CryptoPrice from '../models/CryptoPrice';

const router = Router();

router.get('/cryptos', async (req, res) => {
  try {
    const data = await CryptoPrice.find().sort({ last_updated: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto data' });
  }
});

export default router;
