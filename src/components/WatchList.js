import React from 'react';
import './Watchlist.css';
import Footer from './Footer';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ShareIcon from '@mui/icons-material/Share';
import { ClickAwayListener } from '@mui/material';
import NavBar1 from './NavBar1';
import Nav from './Nav';

const WatchList = () => {
  const navigate=useNavigate()
  function handleLoginClick(){
    navigate('/login');
  
  }
  function handleSignupClick(){
    navigate('/Signup')
  }
  return (
    <>
    <Nav/>
    <NavBar1/>
      <div className='watchlist-container'>
        <div className='watchlist-content'>
          <div className='watchlist-text'>
            <h1 style={{ textAlign: 'left', color: '#1a237e', fontSize: '40px', fontFamily: 'Libre Baskerville serif' }}>Sign up today and </h1>
            <h1 style={{ textAlign: 'left', fontSize: '60px', fontFamily: 'Space Groteskv sans-serif' }}>Create Your Own Watchlist</h1>
            <p style={{ fontSize: '20px' }}>Track your favorite cryptocurrencies and stay updated with their prices and changes.</p>
            <button onClick={handleSignupClick} type='button' className="btn btn-outline-#1A237E" href='/Signup'>Create My Watchlist</button>
            <br />
            <a onClick={handleLoginClick} style={{ fontSize: '20px' }}>Login</a>
          </div>
          <div className='watchlist-image'>
            <img class="animate__animated animate__backInRight" src={'https://cdn.pixabay.com/photo/2018/09/05/18/21/bitcoin-3656764_1280.jpg'} alt='Watchlist' />
          </div>
          </div>
          <div className='additional-boxes'>
          <div class="animate__animated animate__fadeInLeft">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}><NotificationsIcon style={{color:'white',fontSize:'50px'}}/> Instant Price Alerts</h3>
              <p style={{color:'white'}}>Get notified about price changes of your selected cryptocurrencies instantly.</p>
              </div>
            </div>
            <div class="animate__animated animate__fadeInRight">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <MonetizationOnIcon style={{color:'white',fontSize:'50px'}}/> Free to Use</h3>
              <p style={{color:'white'}}>Our Watchlist feature is completely free to use for all users.</p>
            </div>
            </div>
            <div class="animate__animated animate__fadeInLeft">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <FileCopyIcon style={{color:'white',fontSize:'50px'}}/> Organize Lists Your Way</h3>
              <p style={{color:'white'}}>Create and customize your own lists of cryptocurrencies for easy tracking.</p>
            </div>
            </div>
            <div class="animate__animated animate__fadeInRight">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <ShareIcon style={{color:'white',fontSize:'40px'}}/> Sharing is Caring</h3>
              <p style={{color:'white'}}>Share your Watchlist with others and collaborate in tracking cryptocurrencies.</p>
            </div>
            </div>
          </div>
          </div>
      
      <Footer />
    </>
  );
}

export default WatchList;
