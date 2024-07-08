import React from 'react';
import './Portfolio.css';
import Footer from './Footer';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ShieldIcon from '@mui/icons-material/Shield';
import { ClickAwayListener } from '@mui/material';
import Nav from './Nav';
import NavBar1 from './NavBar1';

const Portfolio = () => {
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
            <h1 style={{ textAlign: 'left', fontSize: '60px', fontFamily: 'Space Groteskv sans-serif' }}>Crypto Portfolio Tracker</h1>
            <p style={{ fontSize: '20px' }}>"Track and Manage Your Crypto Portfolio with Ease".</p>
            <button onClick={handleSignupClick} type='button' className="btn btn-outline-#1A237E" href='/Signup'>Create My Portfolio</button>
            <br />
            <a onClick={handleLoginClick} style={{ fontSize: '20px' }}>Login</a>
          </div>
          <div className='watchlist-image'>
            <img style={{height:'100%',width:'100%'}} class="animate__animated animate__backInRight" src={'https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074563.jpg?w=996&t=st=1688315848~exp=1688316448~hmac=64ccb1b90abaed2caaf5165954e643bda9a9c21352b65194234916a0d779aa5d'} alt='Watchlist' />
          </div>
          </div>
          <div className='additional-boxes'>
          <div class="animate__animated animate__fadeInLeft">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}><TripOriginIcon style={{color:'white',fontSize:'50px'}}/> Real Time Price Data</h3>
              <p style={{color:'white'}}>Stay Updated with Real-Time Crypto Prices in Your Portfolio</p>
              </div>
            </div>
            <div class="animate__animated animate__fadeInRight">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <MonetizationOnIcon style={{color:'white',fontSize:'50px'}}/> Free to Use</h3>
              <p style={{color:'white'}}>Unlock the Benefits of Portfolio Tracking, at No Cost</p>
            </div>
            </div>
            <div class="animate__animated animate__fadeInLeft">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <StackedBarChartIcon style={{color:'white',fontSize:'50px'}}/> Track your current portfolio balance and profit / loss</h3>
              <p style={{color:'white'}}>Monitor Your Portfolio Performance:Thousands of coins and tokens available.</p>
            </div>
            </div>
            <div class="animate__animated animate__fadeInRight">
            <div className='box'>
              <h3 style={{color:'white',fontSize:'30px'}}> <ShieldIcon style={{color:'white',fontSize:'40px'}}/> Your data is safe and secure</h3>
              <p style={{color:'white'}}>Data Security is Our Top Priority: Your Information is Safe and Secure</p>
            </div>
            </div>
          </div>
          </div>
      
      <Footer />
    </>
  );
}

export default Portfolio;

