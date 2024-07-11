import React from 'react';
import './Nav.css';
import { FaCoins } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <nav  className="navbar custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          Crypto:25,417
        </a>
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          Exchanges:636
        </a>
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          MarketCap:$1,133,762,984,677
        </a>
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          24thVol:$26,419,460,503
        </a>
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          Dominance:BTC:45.8%:ETH:19.8%
        </a>
        <a className="navbar-brand" href="#" style={{ marginLeft: 'left',color: '#1A237C' }}>
          ETHGas:22 Gwei
        </a>
        <div class="dropdown" style={{ marginRight: '100px' }}>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                हिन्दी
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Italiano
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Spanish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
