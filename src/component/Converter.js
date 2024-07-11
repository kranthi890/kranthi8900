import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Converter.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NavBar1 from "../components/NavBar1";

const CryptoConverter = () => {
  const [coins, setCoins] = useState([]);
  const [baseCoin, setBaseCoin] = useState("");
  const [targetCoin, setTargetCoin] = useState("");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetchCoinData();
  }, []);

  const fetchCoinData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(response.data);
      setBaseCoin(response.data[0].id);
      setTargetCoin(response.data[1].id);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  const handleAmountClick = () => {
    handleConversion();
  };

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
  };

  const handleBaseCoinChange = (e) => {
    setBaseCoin(e.target.value);
  };

  const handleTargetCoinChange = (e) => {
    setTargetCoin(e.target.value);
  };

  const handleConversion = () => {
    const baseCoinPrice = coins.find((coin) => coin.id === baseCoin).current_price;
    const targetCoinPrice = coins.find((coin) => coin.id === targetCoin).current_price;
    const convertedValue = (amount / baseCoinPrice) * targetCoinPrice;
    setConvertedAmount(convertedValue);
  };

  const popularConversions = [
    { base: "bitcoin", target: "usd", icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', content: "Bitcoin to USD conversion" },
    { base: "ethereum", target: "usd", icon: 'https://logowik.com/content/uploads/images/ethereum3649.jpg', content: "Ethereum to USD conversion" },
    { base: "litecoin", target: "usd", icon: 'https://cdn-icons-png.flaticon.com/512/1490/1490823.png', content: "Litecoin to USD conversion" },
    { base: "ripple", target: "usd", icon: 'https://w7.pngwing.com/pngs/503/703/png-transparent-golden-cryptocurrency-coin-ripple-xrp.png', content: "Ripple to USD conversion" },
    { base: "cardano", target: "usd", icon: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png', content: "Cardano to USD conversion" },
  ];

  return (
    <>
      <Nav />
      <NavBar1 />
      <div className="crypto-converter">
        <h2 className="animate__animated animate__backInLeft" style={{ color: '#1a237e', textAlign: 'center', fontSize: '50px', marginTop: '20px' }}>Cryptocurrency Converter</h2>
        <div className="crypto-converter">
          <div className="converter-inputs">
            <div className="amount-input">
              <label>Amount:</label>
              <input type="number" value={amount} onChange={handleAmountChange} onClick={handleAmountClick} />
            </div>
            <div className="coin-select">
              <label>Base Coin:</label>
              <select value={baseCoin} onChange={handleBaseCoinChange}>
                {coins.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="coin-select">
              <label>Target Coin:</label>
              <select value={targetCoin} onChange={handleTargetCoinChange}>
                {coins.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="conversion-result">
            <h3>Converted Amount:</h3>
            <div className="result-container">
              <span className="amount">{convertedAmount}</span>
              <span className="coin">{targetCoin.toUpperCase()}</span>
            </div>
          </div>
          <h3>Popular Conversions:</h3>
          <div className="popular-conversions">
            {popularConversions.map((conversion, index) => (
              <div className="popular-conversion" key={index}>
                <img src={conversion.icon} alt={conversion.base} className="crypto-icon" />
                <div className="popular-conversion-content">
                  <div className="popular-conversion-title">{conversion.base.toUpperCase()}</div>
                  <div>{conversion.content}</div>
                </div>
                <span className="conversion-arrow">➡</span>
                <span className="conversion-coin">{conversion.target.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CryptoConverter;
