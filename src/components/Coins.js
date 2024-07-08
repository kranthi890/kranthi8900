import React from 'react'
import Coin from '../routes/Coin'
import CoinItem from './CoinItem'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Coins.css'

const Coins = (props) => {
    return (
        <>
    <Link to='/'>
    <div className='navbar' style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
    <FaCoins className='icon' style={{fontSize:'2rem',color:'#1A237C'}}/>
    <h1 style={{fontFamily:'EB Garamond serif',color:'#283b63',fontSize:'50px'}}>Search<span className='purple' style={{color:'#283b63',fontFamily:'EB Garamond serif',fontSize:'50px'}}>Coins</span></h1> 
    </div>
  </Link>
        <div class="animate__animated animate__flash">
        <div className='container'>
            <div>
                <div className='heading' style={{ color: '#1A237C' }}>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {props.coins.sort((a, b) => a.symbol.localeCompare(b.symbol)).map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}
            </div>
        </div>
     </div>
     </>
    )
}

export default Coins