import React from 'react';
import './About.css';
import 'animate.css';
import Footer from './Footer';
import NavMain from './NavMain';
import Nav from './Nav';
import NavBar1 from './NavBar1';



const About = () => {
  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
      <div className="about-container">
        <div className="image-container">
          <img class="animate__animated animate__fadeInLeft"
            style={{ height: '100%', width: '100%' }}
            src="https://img.freepik.com/free-vector/crypto-coin-crypto-currency-illustration_614304-10.jpg?w=740&t=st=1688222055~exp=1688222655~hmac=4acd4e453bca48fd24cee6944796146d13129b36360f98689d01d3c7bcb03a42"
            alt="crypto"
          />
        </div>
        <div className="content">
            <h1 className="title" class="animate__animated animate__bounceInDown" style={{color:'#1A237C'}}>
              About Coin Storm
            </h1>
          <h2>Welcome to our Crypto App!</h2>
          <p>
            At Crypto App, we are dedicated to providing a comprehensive and user-friendly platform for cryptocurrency enthusiasts. Our mission is to simplify the process of accessing, managing, and trading cryptocurrencies for both beginners and experienced users.
          </p>
          <p>
            Coin Storm is a price-tracing website for cryptocurrencies in the rapidly growing cryptocurrency space. It provides accurate information about various cryptocurrencies.
          </p>
          <p>
            With our cutting-edge technology and intuitive interface, you can stay up-to-date with the latest market trends, monitor your portfolio, and make informed investment decisions. We strive to empower individuals to take control of their financial future by harnessing the potential of cryptocurrencies.
          </p>
          <p>
            Our team of cryptocurrency experts is passionate about blockchain technology and its transformative impact on various industries. We are committed to ensuring the security, reliability, and transparency of our platform to provide you with a seamless and trustworthy experience.
          </p>
          <p>
            Whether you are a seasoned investor or just getting started with cryptocurrencies, Crypto App is here to support you on your crypto journey. Join us today and explore the exciting world of digital currencies!
          </p>
          <p>
            Coin Storm has quickly grown to become the most trusted source for users to compare thousands of cryptocurrencies.
          </p>
        </div>
      </div>
     <Footer/>
    </>
  );
}

export default About;
