import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FaCoins,FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
    const navigate=useNavigate();

    function handleCookieClick(){
        navigate('/cookie')
    }
    function handleTermClick(){
        navigate('/term')
    }
    function handlePrivacyClick(){
        navigate('/privacy')
    }
    function handleRuleClick(){
        navigate('/rule')
    }
    function handleDisclaimerClick(){
        navigate('/disc')
    }
    function handlefaqClick(){
        navigate('/faq')
    }
    return (
        <div className='footer'>
            <div className='container'>
            <a href="/" style={{ fontSize: '50px', fontFamily: 'EB Garamond serif', color: 'white', marginTop: '75px' }}><FaCoins style={{ color: '#1A237C' }} /> Coin Storm</a>
            {/* <ul>
              <li>
            <p style={{fontSize:'50px',fontFamily:'EB Garamond serif',color:'white'}}>A Price Forecast</p>
            <p style={{ fontSize: '20px', color: '#1A237C' }}>Unleashing the future of cryptocurrency prices</p>  
                </li>
            </ul>
             */}
           
                <div className='col'>
                    <h5 style={{color: 'white',fontSize:'30px',fontFamily:"Lora"}}>Resources</h5>
                    <span className='bar'></span>
                        <a style={{color:'white',fontSize:'20px'}}href='/about'>AboutUs</a>
                        <a style={{color:'white',fontSize:'20px'}}href='/team'> Our Team</a>
                        <a style={{color:'white',fontSize:'20px'}}href='/'>Doodles</a>
                        <a style={{color:'white',fontSize:'20px'}}href='/'>Jobs Board</a>
                        <a style={{color:'white',fontSize:'20px'}}href='/'>SiteMap</a>

                </div>
                <div className='col'>
                    <h5 style={{color: 'white',fontSize:'30px',fontFamily:"Lora"}}>Company</h5>
                    <span className='bar'> </span>
                        <a onClick={handleTermClick} style={{color:'white',fontSize:'20px'}}href='/term'>Terms of use</a>
                        <a onClick={handlePrivacyClick} style={{color:'white',fontSize:'20px'}}href='/privacy'>Privacy Policy</a>
                        <a onClick={handleCookieClick} style={{color:'white',fontSize:'20px'}} href='/cookie'> Cookie Policy</a>
                        <a onClick={handleRuleClick} style={{color:'white',fontSize:'20px'}}href='/rule'>Community Rules</a>
                        <a onClick={handleDisclaimerClick} style={{color:'white',fontSize:'20px'}}href='/disc'>Disclaimer</a>
                   
                </div>
                <div className='col'>
                    <h5 style={{color: 'white',fontSize:'30px',fontFamily:"Lora"}}>Support</h5>
                    <span  className='bar'> </span>
                        <a style={{color:'white',fontSize:'20px'}}href='/Contact'>ContactUs</a>
                        <a onClick={handlefaqClick} style={{color:'white',fontSize:'20px'}}href='/faq'>FAQ</a>               
                        <a style={{color:'white',fontSize:'20px'}}href='/'>Glossary</a>               
                 </div>
                <div className='col'>
                    <h5 style={{color: 'white',fontSize:'30px',fontFamily:"Lora"}}>Socials</h5>
                    <span className='bar'> </span>
                        <a style={{color:'white',fontSize:'20px'}} href='/'><FaFacebook className='icon'/>Facebook</a>
                        <a style={{color:'white',fontSize:'20px'}} href='/'><FaTwitter className='icon'/>Twitter</a>
                        <a style={{color:'white',fontSize:'20px'}} href='/'><FaInstagram className='icon'/>Instagram</a>
                        <a style={{color:'white',fontSize:'20px'}} href='/'><FaLinkedin className='icon'/>Linkedin</a>
                        <a style={{color:'white',fontSize:'20px'}} href='/'><FaGithub className='icon'/>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Footer