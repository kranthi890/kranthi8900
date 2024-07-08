import React from 'react';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';

const Cookie = () => {
  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <section className="vh-100" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/cryptocurrency-mining-isometric_107791-249.jpg?size=626&ext=jpg&ga=GA1.1.1723921732.1688133809&semt=ais")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
    <h1 style={{color:'white',fontSize:'30px'}}>Our Cookie Policy</h1>
    <div style={{ margin: '0 auto', maxWidth: '70%',fontSize:'17px' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 233, 0.7)', color: 'black', padding: '20px'}}>
          <h2>1. What are Cookies?</h2>
          <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit the App. They are widely used to make websites and applications work more efficiently, as well as to provide information to the website owners.</p>
          <h2>2. How We Use Cookies</h2>
          <p>. Essential Cookies: These cookies are necessary for the functioning of the App and cannot be switched off in our systems. They are usually set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the App may not work properly.</p>
          <p>. Analytical/Performance Cookies: These cookies allow us to count visits and traffic sources, measure and improve the performance of the App. They help us understand how our users interact with the App, which pages are the most and least popular, and see how visitors move around the App. All information collected by these cookies is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited the App.</p>
          <p>. Functionality Cookies: These cookies enable the App to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.</p>
          <h2>3. Third-Party Cookies</h2>
          <p>We may also allow certain third-party partners to place cookies on your device for advertising, analytics, and other purposes. These third parties may collect information about your online activities over time and across different websites or online services. They may use this information to provide you with interest-based advertising or other targeted content. We do not have control over these third-party cookies, and their use is subject to the respective third parties' privacy policies.</p>
          <h2>4. Managing Cookies</h2>
          <p>You can manage cookies preferences through your browser settings. Most web browsers allow you to control cookies through their settings preferences. However, please note that disabling or blocking certain cookies may impact the functionality and performance of the App.</p>
          <h2>5. Changes to this Cookie Policy</h2>
          <p>We reserve the right to update or change this Cookie Policy at any time. Any changes will be effective immediately upon posting the revised policy on the App. We encourage you to periodically review this page for the latest information on our cookie practices.</p>
        </div>
      </div>
    </div>
    </section>
    <Footer/>
    </>
  );
};

export default Cookie;
