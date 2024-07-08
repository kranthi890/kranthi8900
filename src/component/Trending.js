import React, { useEffect, useState } from 'react';
import './Trending.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import NavMain from '../components/NavMain';
const Trending = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
        );
        const data = await response.json();
        setCryptocurrencies(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCryptocurrencies();
  }, []);

  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div class="animate__animated animate__zoomIn">
    <div className="styles">
      <h1 class="animate__animated animate__jackInTheBox" style={{color:'#283b63',fontSize:'70px'}}>Trending Cryptocurrencies</h1>
      <div className="coin-cone">
        {cryptocurrencies.map((crypto) => (
          <div className="coin-box" key={crypto.id}>
            <img
              src={crypto.image}
              alt={crypto.name}
              className="coin-image"
            />
            <h2>{crypto.name}</h2>
            <p>{crypto.symbol.toUpperCase()}</p>
            <p>Price: ${crypto.current_price}</p>
            <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
            <p>Volume: ${crypto.total_volume.toLocaleString()}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Trending;
