import React from 'react'
// import Coin from '../routes/Coin'
// import Coins from './Coins'

import Coins from './Coins';
// import CoinItem from './CoinItem';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import NavBar1 from './NavBar1';
import Footer from './Footer';
import Nav from './Nav';
const Content = () => {
    const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
    // Example coins data
    // const coinsData = [
    //   { id: 1, name: 'Bitcoin', price: 50000 },
    //   { id: 2, name: 'Ethereum', price: 3000 },
    //   { id: 3, name: 'Litecoin', price: 150 },
    // ];
   
    return (
      <div>
        <Nav/>
       <NavBar1/>
       
    <Coins coins={coins} />
    {/* <CoinItem/> */}
        {/* <Coins coins={coinsData} /> */}
        <Footer/>
      </div>
    );
  };
  
  export default Content;


