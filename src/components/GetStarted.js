import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavMain from './NavMain';
import './GetStarted.css';
import Footer from './Footer';

const GetStarted = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/content');
  }

  return (
    <div>
      <NavMain />
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://img.freepik.com/free-vector/bitcoin-blockchain-digital-coin-crypto-currency-concept-background_1017-30307.jpg?w=1380&t=st=1688787933~exp=1688788533~hmac=1de3613f6f56cc299287e87b2ca0cd290fae2e83c9c5bba592f30224866ad146"
            style={{ width: '100%', height: '100%' }}
            alt="Crypto"
          />
          <div className="overlay">
            <h1
              className="animate__animated animate__fadeInUpBig"
              style={{ fontFamily: 'Cinzel serif', fontSize: '80px', color: 'white' }}
            >
              CryptoCurrency
            </h1>
            <h1
              className="animate__animated animate__fadeInUpBig"
              style={{ fontFamily: 'Cinzel serif', fontSize: '80px', color: 'white' }}
            >
              price Forecast
            </h1>
            <p style={{ fontFamily: 'Rowdies cursive', fontSize: '40px' }}>
              "Explore the World of Cryptocurrency: Unlock the Potential of Digital Assets. Stay Ahead with Real-Time
              Price Forecasts and Expert Insights. Join the Crypto Revolution Today!"
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary #FFD700"
              style={{ fontSize: '35px' }}
            >
              Search Coins
            </button>
          </div>
        </div>
      </div>
      <div className="crypto-page">
      <h1 style={{ fontSize: '50px', color: 'white',fontFamily: 'Chakra Petch sans-serif'}}>Secure And Easy Way To Forecast Prices</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://media.istockphoto.com/id/1348075153/photo/businessman-who-protects-his-personal-data-from-cyber-attacks-cyber-security-network-and-data.webp?b=1&s=170667a&w=0&k=20&c=-fpSXtYBmaZXCcjdcssbC7wubtLwVgQJXQIuizh_drE="
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 style={{ textAlign: 'center' }} className="card-title">
                Safe And Secure
              </h5>
              <p className="card-text">
                We implement state-of-the-art security measures to protect your sensitive information and crypto assets.
                Our platform is built with advanced encryption protocols, ensuring that your data remains secure and
                inaccessible to unauthorized individuals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              style={{ height: '50%', width: '100%' }}
              src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Variety Of Currencies</h5>
              <p className="card-text">
                We provide access to a vast selection of cryptocurrencies, including popular options like Bitcoin (BTC),
                Ethereum (ETH), Litecoin (LTC), and many more. With a diverse range of coins available, you can explore
                different currencies here.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              style={{ height: '50%', width: '100%' }}
              src="https://media.istockphoto.com/id/1425118067/photo/arrow-hit-the-center-of-target-dollar-coin-cash-and-stock-chart-growth.webp?b=1&s=170667a&w=0&k=20&c=NadfzE16JQoLl6dMaFJuCguk3fwVJe9JPKKegY8CZ-8="
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title">Real-time Updates</h5>
              <p className="card-text">
                Access real-time market data for a wide range of cryptocurrencies. Stay updated on the latest prices,
                trading volumes, market capitalization, and other essential metrics. Our platform ensures you have access
               to accurate and up-to-date information to make informed trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="chart-container">
      <h1 style={{ fontSize: '50px', color: 'white', marginTop: '10px',fontFamily: 'Acme sans-serif' }}>Real-Time Chart Updates</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            style={{ width: '100%', height: '100%' }}
            alt="chart"
          />
        </div>
        <div className="col-md-6">
        <img
            style={{ height: '15%', width: '10%',borderRadius: '50%'  }}
            src="https://plus.unsplash.com/premium_photo-1682430545432-382f31ab45f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpbmUlMjBjaGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Line Chart"
          />
          <h1>1.Line Chart</h1>
          <h5>
            It displays the real-time price update of 50 coins at a time, and you can also select the coins and access
            the price of that coin in a line chart.
          </h5>
          <img
            style={{ height: '15%', width: '10%',borderRadius: '50%'  }}
            src="https://plus.unsplash.com/premium_photo-1682430969514-c3136343092d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyJTIwY2hhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Bar Chart"
          />
          <h1>2.Bar Chart</h1>
          <h5>
            It displays the real-time price update of the top 50 coins in a bar chart. You can select any coin randomly
            and view its price variation over the last 24 hours.
          </h5>
          <img
            style={{ height: '15%', width: '10%',borderRadius: '50%'  }}
            src="https://media.istockphoto.com/id/1403474586/photo/colorful-donut-chart-with-future-year-labels-and-a-digital-infographic-overlay-top-view.webp?b=1&s=170667a&w=0&k=20&c=gcMwdwUzOfIcNLjSCNa9EnwfjEqIfn76ANyNEr06rIg="
            alt="Doughnut Chart"
          />
          <h1>3.Doughnut Chart</h1>
          <h5>
            It displays the real-time market cap of the top 20 cheapest coins under $100. You can find the top 20
            cheapest coins with different colors.
          </h5>
        </div>
      </div>
      <h1 style={{ fontSize: '50px', color: 'white', marginTop: '50px',fontFamily: 'Acme sans-serif' }}>Crypto Converter</h1>
       <p style={{fontSize:'25px'}}>Crypto converters support a wide range of cryptocurrencies, allowing users to convert between different coins or tokens. They also offer conversion to traditional fiat currencies like USD, EUR, or GBP, providing users with flexibility in their conversion needs.</p>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
