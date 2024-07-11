import React from 'react';
import './Privacy.css';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';


const Privacy = () => {
  return (
    <>
    <NavMain/>
      <Nav />
      <NavBar1 />
      <div className="con">
        <div className="backgrounde">
          <div className="boxes">
            <div className="content1">
              <h1>"Privacy Policy":</h1>
              <br />
              <h3>Safeguarding Your Data</h3>
              <h3>in the Crypto World</h3>
              <p>Protecting Your Personal Information in the Cryptocurrency Sphere</p>
            </div>
            <div className="image-section" style={{height:'100%',width:'100%'}}>
              <img src="https://purple.ai/wp-content/uploads/2020/04/privacy-policy.png" alt="Privacy Policy" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="animate__animated animate__lightSpeedInLeft"> */}
      <div className="privacy-section">
      {/* <div class="animate__animated animate__backInLeft"> */}
        <div className="privacy-item">
          <div className="privacy-content">
            <h3>1. Information We Collect</h3>
            <p>
              Personal Info: We may collect personal information that you voluntarily provide to us, such as your
              name, email address, contact information, and any other information you provide when using the App.
            </p>
            <p>
              Usage Info: We may collect information about how you use the App, including your interactions and
              preferences.
            </p>
            <p>
              Device Info: We may collect information about your device, including the type of device, operating
              system, unique device identifiers, IP address, and mobile network information.
            </p>
          </div>
          </div>
          {/* </div> */}
          {/* </div> */}
          <div class="animate__animated animate__backInRight" >
            <img className='img-chepara' src="https://assets-global.website-files.com/6179ae5eb06c91f1ff33336e/6183f47909a98569839bf867_616499ec00334fd7b58af5f6_Privacy-on-Social-Media_Thumbnail.jpeg" alt="Information We Collect" />
          </div>
          <div class="animate__animated animate__backInLeft">
            <img className='img-chepara' src="https://ecoplastile.com/wp-content/uploads/2022/10/Privacy_header.jpg" alt="How We Use Your Information" />
          </div>
          {/* <div class="animate__animated animate__lightSpeedInRight" > */}
        <div className="privacy-item">
          <div className="privacy-content">
            <h3>2. How We Use Your Information</h3>
            <p>
              Provide and Improve the App: We use your information to provide, maintain, and improve the functionality
              and performance of the App. This includes analyzing usage patterns, troubleshooting issues, and
              personalizing your experience.
            </p>
            <p>
              Communication: We may use your contact information to communicate with you about the App, including
              updates, notifications, and customer support.
            </p>
            <p>
              Security: We use your information to ensure the security of the App, monitor for fraudulent or
              unauthorized activities, and protect our rights and the rights of other users.
            </p>
            <p>
              Legal Compliance: We may use your information to comply with applicable laws, regulations, legal
              processes, or enforceable governmental requests.
            </p>
          </div>
        </div>
        {/* </div> */}
        <div className="privacy-item">
          <div className="privacy-content">
            <h3>3. Data Security</h3>
            <p>
              We take appropriate measures to protect your personal information from unauthorized access, alteration,
              disclosure, or destruction. However, no data transmission or storage system can be guaranteed to be 100%
              secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute
              security.
            </p>
          </div>
          </div>
          <div class="animate__animated animate__backInRight">
            <img className='img-chepara' src="https://img.freepik.com/premium-vector/data-protection-concept-data-security-privacy-internet-security-flat-vector-illustration_199064-1174.jpg?w=2000" alt="Data Security" />
          </div>
          <div class="animate__animated animate__backInLeft">
            <img className='img-chepara' src="https://www.ftc.gov/sites/default/files/styles/wide_standard_sm/public/coppa-featres-212x145_3.png?h=ce3b136b&itok=rjB90Nx-" alt="Children's Privacy" />
          </div>
        <div className="privacy-item">
          <div className="privacy-content">
            <h3>4. Children's Privacy</h3>
            <p>
              The App is not intended for use by individuals under the age of 18. We do not knowingly collect personal
              information from children. If you become aware that a child has provided us with personal information
              without parental consent, please contact us, and we will take steps to remove the information and
              terminate the child's account.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
