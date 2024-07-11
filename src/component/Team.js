import React, { useEffect } from 'react';
import './Team.css';
import Nav from '../components/Nav';
import NavMain from '../components/NavMain';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import Kranthi from './kranthi.jpg'
import sneha from './sneha.jpg'
import chandrika from './chandrika.jpg'
import Kameswari from './kameshwari.jpg'
import Sasi from './sasikiran.jpg'

const Team = () => {
  useEffect(() => {
    const rhombusElements = document.querySelectorAll('.rhombus');

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector('.member-image');
          const imageUrl = image.getAttribute('data-src');
          image.setAttribute('src', imageUrl);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    rhombusElements.forEach((rhombus) => {
      observer.observe(rhombus);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <NavMain />
      <Nav />
      <NavBar1 />
      <div className="crypto">
        <div className="hero-section">
          <h1 className="animate__animated animate__fadeInUpBig">
            About Our Team
          </h1>
          <p className="caption">
            One team, many talents, extraordinary outcomes
          </p>
        </div>
        <div className="members-container">
          <div className="row">
            <div className="member">
              <div className="rhombus">
                <img data-src={sneha} alt="Member 1" className="member-image" />
              </div>
              <h3 className="member-name">Sneha Kota</h3>
              <p className="member-role">Project Manager</p>
            </div>
            <div className="member">
              <div className="rhombus">
                <img data-src={chandrika} alt="Member 2" className="member-image" />
              </div>
              <h3 className="member-name">Lakshmi Chandrika</h3>
              <p className="member-role">Backend Developer</p>
            </div>
            <div className="member">
              <div className="rhombus">
                <img data-src={Kameswari} alt="Member 3" className="member-image" />
              </div>
              <h3 className="member-name">Kameswari</h3>
              <p className="member-role">UI/UX Designer</p>
            </div>
          </div>
          <div className="row">
            <div className="member">
              <div className="rhombus">
                <img data-src={Sasi} alt="Member 4" className="member-image" />
              </div>
              <h3 className="member-name">Sasi Kiran</h3>
              <p className="member-role">Frontend Developer</p>
            </div>
            <div className="member">
              <div className="rhombus">
                <img data-src={Kranthi} alt="Member 5" className="member-image" />
              </div>
              <h3 className="member-name">Kranthi Kumar</h3>
              <p className="member-role">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
