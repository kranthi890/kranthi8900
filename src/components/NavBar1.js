import React from 'react'
// import "./Nav.css"
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { FaCoins } from 'react-icons/fa';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
// import { Gradient } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
function NavBar1(){
    const navigate=useNavigate();
    
      function handleWishClick(){
       navigate("/list")
    }
      function handleTrendingClick(){
       navigate("/trend")
    }
      function handleChartClick(){
       navigate("/chart")
    }
      function handleBarClick(){
       navigate("/bar")
    }
      function handleNutClick(){
       navigate("/nut")
    }
      function handleAddedClick(){
       navigate("/radd")
    }
      function handleExchangeClick(){
       navigate("/exchange")
    }
      function handlePortfolioClick(){
       navigate("/portfolio")
    }
    
    return (
    <>
    <nav style={{fontSize:'20px'}} className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <a href="/content" style={{ fontSize:'30px', fontFamily: 'EB Garamond serif', color: '#283b63' }}><FaCoins style={{ color: '#1A237C' }} /> Coin Storm</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a onClick={handleTrendingClick} className="nav-link active" aria-current="page" href="#">Trending</a>
        <a onClick={handleAddedClick} className="nav-link active" aria-current="page" href="#">RecentlyAdded</a>
        <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="chartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Chart</a>
            <ul className="dropdown-menu" aria-labelledby="chartDropdown">
              <li>
                <a onMouseEnter={handleChartClick} className="dropdown-item" href="#"> Line Chart </a>
              </li>
              <li>
                <a onMouseEnter={handleBarClick} className="dropdown-item" href="#">Bar Chart</a>
              </li>
                <li>
                  <a onMouseEnter={handleNutClick} className="dropdown-item" href="#">Doughnut Chart</a>
                  </li>
                </ul>
              </div>
        {/* <a onClick={handleChartClick} className="nav-link active" aria-current="page" href="#">Chart</a>
        <a onClick={handleBarClick}className="nav-link active" aria-current="page" href="#">BarChart</a>
        <a onClick={handleNutClick}className="nav-link active" aria-current="page" href="#">DoughnutChart</a> */}
        <a onClick={handleExchangeClick} className="nav-link active" aria-current="page" href="#">CryptoConverter</a>
        {/* <a className="nav-link active" aria-current="page" href="#">Products</a> */}
        {/* <a className="nav-link active" aria-current="page" href="#">Learn</a> */}
      </div>
    </div>
  </div>
  {/* <form className="d-flex" role="search">
    <Link className='text-info' to='/login'>Login</Link>
    <button className="btn btn-outline-success"style={{display:"-ms-inline-flexbox"}} type="submit">SignUp</button>
      </form> */}
  <StarBorderRoundedIcon style={{color:'#1A237C'}}/>
  <span  className="navbar-text">
  <a onClick={handleWishClick} className="nav-link" href="#"  style={{color:'#283b63',fontSize:'20px'}}>
    Watchlist
   </a>  
  </span>
  <PieChartRoundedIcon style={{color:'#1A237C'}}/>
  <span className="navbar-text">
    <a onClick={handlePortfolioClick} className="nav-link" style={{color:'#283b63',fontSize:'20px'}} >Portfolio</a>   
  </span>

  <form className="d-flex">
        <input className="form-control me-2" type="search" style={{flexDirection:"column-reverse"}} placeholder="Search"aria-label="Search"/>
        <button className="btn btn-outline-success"style={{display:"-ms-inline-flexbox"}} type="submit">Search</button>
    </form>
  </nav>
</>
  )
}

export default NavBar1
