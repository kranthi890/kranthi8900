import React from 'react';
import './Disclaimer.css';
import NavMain from '../components/NavMain';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
const Disclaimer = () => {
  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div className='back'style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1196531726/photo/blue-azure-turquoise-abstract-watercolor-background-for-textures-backgrounds-and-web-banners.webp?b=1&s=170667a&w=0&k=20&c=jLBLw9Ke0uKXx6ZWXmKmi8Lz1YZDBnN9m2Y60nGbCPE=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      <h1 style={{fontSize:'30px',color:'#283b63'}} className="title1">Disclaimer</h1>
    <div className="disclaimer">
      <div className="disclaimer-section">
        <h2 className="disclaimer-heading">1. No Financial Advice</h2>
        <p className="disclaimer-description">
          The information provided on this website is for informational purposes only and should not be considered as
          financial advice. Investing in cryptocurrencies carries risks, and you should do thorough research and consult
          with a professional advisor before making any investment decisions.
        </p>
      </div>
      <div className="disclaimer-section">
        <h2 className="disclaimer-heading">2. Risk Disclosure</h2>
        <p className="disclaimer-description">
          Trading or investing in cryptocurrencies involves a high level of risk. Prices can be volatile, and there is a
          risk of losing your investment. You should carefully consider your risk tolerance and only invest funds that
          you can afford to lose.
        </p>
      </div>
      <div className="disclaimer-section">
        <h2 className="disclaimer-heading">3. Accuracy of Information</h2>
        <p className="disclaimer-description">
          While we strive to provide accurate and up-to-date information, we cannot guarantee the completeness,
          accuracy, or reliability of the content on this website. Cryptocurrency markets are dynamic, and prices and
          information may change rapidly.
        </p>
      </div>
      <div className="disclaimer-section">
        <h2 className="disclaimer-heading">4. Third-Party Links</h2>
        <p className="disclaimer-description">
          This website may contain links to third-party websites or resources. We are not responsible for the content,
          accuracy, or reliability of any third-party websites. Use caution and perform your own due diligence when
          interacting with external links.
        </p>
      </div>
      <div className="disclaimer-section">
        <h2 className="disclaimer-heading">5. Personal Responsibility</h2>
        <p className="disclaimer-description">
          Any actions you take based on the information provided on this website are at your own risk. You are solely
          responsible for your decisions and should exercise caution and judgment when dealing with cryptocurrencies.
        </p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Disclaimer;
