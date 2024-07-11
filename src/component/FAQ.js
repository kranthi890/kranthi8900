import React from 'react';
import './FAQ.css';

import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';

const FAQ = () => {
  return (
    <div>
      <NavMain/>
      <Nav/>
      <NavBar1/>
      <div className='faq-container'>
        <h1 className='faq-heading'>Frequently Asked Questions</h1>
        <div className='faq-item'>
        <div className='faq-image'>
            <img style={{height:'15%',width:'10%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj70BbE6qwzrCWIQUJoKey1zqayzpElDFJDg&usqp=CAU' alt='FAQ Image' />
          </div>
          <h2 className='faq-question'>What is cryptocurrency?</h2>
          <p className='faq-answer'>
            Cryptocurrency is a digital or virtual form of currency that uses cryptography for secure financial
            transactions, control the creation of additional units, and verify the transfer of assets.
          </p>
        </div>
        <div className='faq-item'>
        <div className='faq-image'>
            <img style={{height:'15%',width:'10%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQ8lT5GJ_bA61r19VasVFP2pMi_Ouvts7nQ&usqp=CAU' alt='FAQ Image' />
          </div>
          <h2 className='faq-question'>What is blockchain technology?</h2>
          <p className='faq-answer'>
            Blockchain is a decentralized, distributed ledger technology that records transactions across multiple
            computers. It ensures transparency, security, and immutability of the data stored in the blockchain.
          </p>
        </div>
        <div className='faq-item'>
        <div className='faq-image'>
            <img style={{height:'15%',width:'10%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCzmDaPtWej60-vi9WiIem2OZW31z1fWUjQ&usqp=CAU' alt='FAQ Image' />
            <h2 className='faq-question'>Is cryptocurrency secure?</h2>

          </div>
          <p className='faq-answer'>
            Cryptocurrency transactions are secured using cryptographic techniques. However, it's important to follow
            best security practices such as using strong passwords, enabling two-factor authentication, and storing your
            cryptocurrency in secure wallets.
          </p>
        </div>
        <div className='faq-item'>
        <div className='faq-image'>
            <img style={{height:'15%',width:'10%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv6QMvv-ooVi6r8IF31Y0KriGubQ47F7YWw&usqp=CAU' alt='FAQ Image' />
          </div>
          <h2 className='faq-question'>How can I keep track of cryptocurrency prices?</h2>
          <p className='faq-answer'>
            There are various cryptocurrency price tracking websites and mobile apps available that provide real-time
            price data, charts, and portfolio management tools. You can also set up price alerts to stay informed about
            price changes.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;
