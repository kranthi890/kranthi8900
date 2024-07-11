import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecentlyAdded.css';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';

const RecentlyAdded = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchRecentlyAddedCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'gecko_desc',
              per_page: 500,
              page: 9,
              sparkline: false
            }
          }
        );

        setCoins(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentlyAddedCoins();
  }, []);

  const formatLastUpdatedDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <>
    <NavMain/>
      <Nav />
      <NavBar1 />
      <div className="recently-added-container">
        <h1 style={{ color: '#283b63', fontSize: '30px' }} className="recently-added-title animate__animated animate__backInUp">
          Recently Added Crypto Coins
        </h1>
        <div className="coin-card-container">
          {coins.map((coin) => (
            <div key={coin.id} className="coin-card">
              <div className="coin-details">
                <div className="coin-logo">
                  <img src={coin.image} alt={coin.name} />
                  <h3 className="coin-name">{coin.name}</h3>
                </div>
              </div>
              <p className="coin-symbol">Symbol: {coin.symbol}</p>
              <p className="coin-price">Current Price: ${coin.current_price}</p>
              <p className="coin-market-cap">Market Cap: ${coin.market_cap}</p>
              <p className={`coin-price-change ${coin.price_change_percentage_24h < 0 ? 'negative' : ''}`}>
                Price Change (24h): {coin.price_change_percentage_24h}%
              </p>
              <p className="coin-added-date">Added Date: {formatLastUpdatedDate(coin.last_updated)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecentlyAdded;
