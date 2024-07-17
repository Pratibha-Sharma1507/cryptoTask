import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchCryptoData } from '../store/slices/cryptoSlice';

const CryptoTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoData = useSelector((state: RootState) => state.crypto.data);

  useEffect(() => {
    console.log(cryptoData);
    dispatch(fetchCryptoData());
    const interval = setInterval(() => {
      dispatch(fetchCryptoData());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      {/* <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.slice(0, 20).map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.current_price}</td>
              <td>{crypto.market_cap}</td>
              <td>{crypto.price_change_percentage_24h}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

<table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Symbol
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Current Price
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Market Cap
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        24h Change
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {cryptoData.slice(0, 20).map((crypto) => (
      <tr key={crypto.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{crypto.name}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{crypto.symbol}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{crypto.current_price}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{crypto.market_cap}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${crypto.price_change_percentage_24h >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {crypto.price_change_percentage_24h}%
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default CryptoTable;
