import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import CryptoTable from '../components/CryptoTable';
import "../styles/globals.css";

const HomePage: React.FC = () => (
  <Provider store={store}>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  </Provider>
);

export default HomePage;