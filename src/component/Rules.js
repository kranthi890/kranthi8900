import React from 'react';
import './Rules.css';
import NavMain from '../components/NavMain';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';

const Rules = () => {
  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div className="community">
      <h1 className="title">Community Rules</h1>
      <div className="rule-sections">
        <div className="rule-section">
          <h2 className="rule-heading">1. Be Respectful</h2>
          <p className="rule-description">
            Treat fellow community members with respect and courtesy. Avoid any form of harassment, hate speech, or
            discriminatory language. Encourage a positive and inclusive environment.
          </p>
        </div>
        <div className="rule-section">
          <h2 className="rule-heading">2. Stay on Topic</h2>
          <p className="rule-description">
            Keep discussions focused on the crypto-related topics relevant to the community. Avoid spamming or posting
            unrelated content.
          </p>
        </div>
        <div className="rule-section">
          <h2 className="rule-heading">3. No Promotion or Solicitation</h2>
          <p className="rule-description">
            Do not promote or solicit any products, services, or external links without prior authorization. Stay
            compliant with the community guidelines.
          </p>
        </div>
        <div className="rule-section">
          <h2 className="rule-heading">4. Respect Privacy</h2>
          <p className="rule-description">
            Do not share personal or sensitive information of yourself or others without consent. Respect privacy and
            confidentiality.
          </p>
        </div>
        <div className="rule-section">
          <h2 className="rule-heading">5. Report Violations</h2>
          <p className="rule-description">
            If you come across any violations of the community rules, report them to the moderators or administrators for
            appropriate action.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Rules;
