import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import 'animate.css';

import './Coin.css'
import NavMain from '../components/NavMain';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';

const Coin = () => {
    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <NavMain/>
        <Nav/>
        <NavBar1/>
        <div class="animate__animated animate__zoomIn" >
            <div className='coin-container'>
                <div className='hdng'>
                <div className='coin-images'>
                  {coin.image ? <img src={coin.image.large} alt='coim image' /> : null}
                  <h1 class="animate__animated animate__bounceInLeft">{coin.name}</h1>
                   </div>
                </div>
                <div className='rnk'>
                    <div style={{textAlign:'center',fontSize:'30px',color:'#283b63'}} className='rank' class="animate__animated animate__flash">
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div style={{textAlign:'end',fontSize:'30px',color:'#283b63'}} className='coin-heading'>
                            {/* {coin.image ? <img src={coin.image.small} alt='' /> : null} */}
                            <p >{coin.symbol ? coin.symbol.toUpperCase() : null}</p>
                        </div>
                        <div  style={{paddingRight:'800px',fontSize:'40px'}} className='coin-price'>
                            {coin.market_data?.current_price ? <h1 style={{fontSize:'30px'}}>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className='content' style={{ color: "white" }} >
                    <table class="animate__animated animate__flash">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
    <tr>
        <td>{coin.market_data?.price_change_percentage_1h_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_24h_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_7d_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_14d_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_30d_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
        <td>{coin.market_data?.price_change_percentage_1y_in_currency?.usd ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
    </tr>
</tbody>

                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4 class="animate__animated animate__flash">24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4 class="animate__animated animate__flash">24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                            </div>
                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4 class="animate__animated animate__flash">Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4 class="animate__animated animate__flash">Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='about'>
                        <h3 style={{textAlign:'center',fontSize:'30px'}} class="animate__animated animate__lightSpeedInLeft">About</h3>
                        <p dangerouslySetInnerHTML={{
    __html: coin.description && coin.description.en ? DOMPurify.sanitize(coin.description.en) : '',
}}>
</p>

                    </div>
                </div>
            </div>
         </div>
         <Footer/>
         </>
    )
}

export default Coin
