// import React from 'react';
// import './Term.css';
// const Terms = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Terms of Use</h1>
//       <p className="description">These Terms of Use ("Terms") govern your access to and use of the crypto application. By accessing or using the App, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use the App.</p>
      // <br />
      // <br />
      // <h2 className="section-title">1. Account Creation</h2>
      // <p className="section-description">1.1 Registration: In order to use certain features of the App, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for any activities or actions taken under your account.</p>
      // <br />
      // <p className="section-description">1.2 Eligibility: By using the App, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms. If you are accessing or using the App on behalf of a company or organization, you represent and warrant that you have the authority to bind such entity to these Terms.</p>
      // <br />
      // <br />
      // <h2 className="section-title">2. App Usage</h2>
      // <p className="section-description">2.1 License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the App for personal, non-commercial purposes.</p>
      // <br />
      // <p className="section-description">2.2 Prohibited Conduct: You agree not to engage in any of the following prohibited conduct:</p>
      // <ul className="prohibited-list">
      //   <li>Violating any applicable laws, regulations, or third-party rights.</li>
      //   <li>Interfering with or disrupting the App or its servers.</li>
      //   <li>Attempting to gain unauthorized access to the App or any user accounts.</li>
      //   <li>Engaging in any fraudulent, deceptive, or misleading activities.</li>
      //   <li>Using the App for any illegal, harmful, or malicious purposes.</li>
      //   <li>Uploading or transmitting any viruses, malware, or other harmful code.</li>
      //   <li>Collecting or harvesting any personally identifiable information from other users.</li>
      //   <li>Violating the security or integrity of the App or its systems.</li>
      // </ul>
      // <br />
      // <p className="section-description">2.3 User Content: By using the App, you may have the ability to post, upload, or submit content. You retain ownership of any intellectual property rights that you hold in such content. However, by posting, uploading, or submitting content, you grant us a worldwide, royalty-free, perpetual, irrevocable, and non-exclusive license to use, reproduce, modify, adapt, publish, distribute, and display such content for the purpose of providing and improving the App.</p>
      // <br />
      // <br />
      // <h2 className="section-title">3. Intellectual Property</h2>
      // <p className="section-description">3.1 Ownership: The App and its content, including but not limited to text, graphics, images, logos, trademarks, and software, are owned or licensed by us and are protected by intellectual property laws. You may not reproduce, modify, distribute, or create derivative works based on the App or its content without our prior written consent.</p>
      // <br />
      // <p className="section-description">3.2 Feedback: We welcome any feedback, comments, or suggestions regarding the App. You agree that we may use and incorporate any such feedback without any obligation to you.</p>
      // <br />
      // <br />
      // <h2 className="section-title">4. Limitation of Liability</h2>
      // <p className="section-description">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      // <br />
      // <br />
      // <h2 className="section-title">5. Termination</h2>
      // <p className="section-description">We may suspend or terminate your access to the App at any time and for any reason, without prior notice or liability. Upon termination, these Terms will cease to apply, and the provisions that by their nature are intended to survive termination shall survive.</p>
      // <br />
      // <br />
      // <h2 className="section-title">6. Changes to these Terms</h2>
      // <p className="section-description">We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting the revised Terms on the App. Your continued use of the App after the posting of any changes constitutes your acceptance of the modified Terms.</p>
//     </div>
//   );
// };

// export default Terms;




import React from 'react';
import './Term.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NavBar1 from '../components/NavBar1';
import NavMain from '../components/NavMain';
const Terms = () => {
  return (
    <>
    <NavMain/>
    <Nav/>
    <NavBar1/>
    <div className="container">
      <div className="boxe">
        <div className="terms-content">
          <h2 style={{textAlign:'center',fontSize:'30px'}}className="sec-title">Terms & Conditions</h2>
      <h2 className="sec-title">1. Account Creation</h2>
      <p className="section-description">1.1 Registration: In order to use certain features of the App, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for any activities or actions taken under your account.</p>
      <p className="section-description">1.2 Eligibility: By using the App, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms. If you are accessing or using the App on behalf of a company or organization, you represent and warrant that you have the authority to bind such entity to these Terms.</p>
      <h2 className="sec-title">2. App Usage</h2>
      <p className="section-description">2.1 License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the App for personal, non-commercial purposes.</p>
      <p className="section-description">2.2 Prohibited Conduct: You agree not to engage in any of the following prohibited conduct:</p>
      <ul className="prohibited-list">
        <li>Violating any applicable laws, regulations, or third-party rights.</li>
        <li>Interfering with or disrupting the App or its servers.</li>
        <li>Engaging in any fraudulent, deceptive, or misleading activities.</li>
        <li>Using the App for any illegal, harmful, or malicious purposes.</li>
      </ul>
      <h2 className="sec-title">3. Intellectual Property</h2>
      <p className="section-description">3.1 Ownership: The App and its content, including but not limited to text, graphics, images, logos, trademarks, and software, are owned or licensed by us and are protected by intellectual property laws. You may not reproduce, modify, distribute, or create derivative works based on the App or its content without our prior written consent.</p>
      <p className="section-description">3.2 Feedback: We welcome any feedback, comments, or suggestions regarding the App. You agree that we may use and incorporate any such feedback without any obligation to you.</p>
        </div>
        <div className="image-section">
          <img src="https://img.freepik.com/premium-vector/terms-conditions-concept-illustration_108061-451.jpg?w=2000" alt="Terms & Conditions" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Terms;
