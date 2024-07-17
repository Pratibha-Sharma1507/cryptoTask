import axios from 'axios';
import CryptoPrice from '../models/CryptoPrice';

const fetchCryptoData = async () => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'your api key' },
  };

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options);
    const data = response.data.slice(0, 20); // Limit to 5 cryptos

    for (const crypto of data) {
      const existingCrypto = await CryptoPrice.findOne({ id: crypto.id });

      if (existingCrypto) {
        await CryptoPrice.updateOne({ id: crypto.id }, crypto);
      } else {
        await CryptoPrice.create(crypto);
      }
    }
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
};

export default fetchCryptoData;
