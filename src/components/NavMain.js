import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';

const NavMain = () => {
  const navigate = useNavigate();

  function handleTeamClick() {
    navigate('/team');
  }

  function handleAboutClick() {
    navigate('/About');
  }

  function handleLoginClick() {
    navigate('/login');
  }

  function handleSignupClick() {
    navigate('/Signup');
  }

  function handleContactClick() {
    navigate('/Contact');
  }

  return (
    <nav style={{fontFamily: 'Alegreya serif'}} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a style={{fontSize:'35px',color:'#283b63'}} class="navbar-brand" href="#"><FaCoins style={{ color: '#283b63', paddingRight: '3px',fontSize:'30px'}}/>Coin Storm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        </li>
        <li class="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
            <button
              onClick={handleTeamClick}
              type="button"
              className="btn btn-outline-#283b63"
              style={{
                color: 'black',
                fontSize: '28px',
              }}
            >
              OurTeam
            </button>
            <button
              onClick={handleAboutClick}
              type="button"
              className="btn btn-outline-#283b63"
              style={{
                color: 'black',
                fontSize: '28px',
              }}
            >
              AboutUs
            </button>
            <button
              onClick={handleContactClick}
              type="button"
              className="btn btn-outline-#283b63"
              style={{
                color: 'black',
                fontSize: '28px',
              }}
            >
              ContactUs
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="btn btn-outline-#283b63"
              style={{
                color: 'black',
                fontSize: '28px',
              }}
            >
              SignIn
            </button>
            <button
              onClick={handleSignupClick}
              className="btn btn-outline-'#283b63'"
              style={{
                color: 'black',
                fontSize: '28px',
              }}
              type="submit"
            >
              SignUp
            </button>
          </form>
    </div>
  </div>
</nav>
    // <div>
    //   <div
    //     className="navbar-container"
    //     style={{
    //       position: 'absolute',

    //       width: '100%',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       backgroundColor: 'white',
    //       fontFamily: 'Rowdies cursive',
    //     }}
    //   >
    //     <h2
    //       className="navbar-brand"
    //       style={{
    //         fontFamily: 'EB Garamond serif',
    //         color: '#283b63',
    //         fontSize: '40px', 
    //         textAlign: 'right',
    //         paddingRight: '50%',
    //       }}
    //     >
    //       <FaCoins style={{ color: '#1A237C', paddingRight: '3px' }} />
    //       Coin Storm
    //     </h2>
    //     <nav className="navbar navbar-expand-lg" style={{ color: 'white' }}>
    //       <div className="container">
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#navbar1"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbar1">
              // <ul className="navbar-nav">
              //   <li className="nav-item">
              //     <a
              //       onClick={handleAboutClick}
              //       href="#"
              //       style={{ color: '#283b63', fontSize: '30px' }}
              //     >
              //       AboutUs
              //     </a>
              //   </li>
              // </ul>
              // <ul className="navbar-nav ml-auto">
              //   <li className="nav-item active">
              //     <a
              //       onClick={handleContactClick}
              //       href="#"
              //       style={{ color: '#283b63', fontSize: '30px'}}
              //     >
              //       ContactUs
              //     </a>
              //   </li>
              // </ul>
    //         </div>
    //       </div>
          // <form className="d-flex" role="search">
          //   <button
          //     onClick={handleLoginClick}
          //     type="button"
          //     className="btn btn-outline-#FFD700"
          //     style={{
          //       color: '#283b63',
          //       fontSize: '30px',
          //     }}
          //   >
          //     SignIn
          //   </button>
          //   <button
          //     onClick={handleSignupClick}
          //     className="btn btn-outline-'#FFD700'"
          //     style={{
          //       color: '#283b63',
          //       fontSize: '30px',
          //     }}
          //     type="submit"
          //   >
          //     SignUp
          //   </button>
          // </form>
    //     </nav>
    //   </div>
    // </div>
  );
};

export default NavMain;
