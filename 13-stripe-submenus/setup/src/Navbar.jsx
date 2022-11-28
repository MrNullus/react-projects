import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context';

const Navbar = () => {

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img 
            className="nav-logo"
            src={logo} 
            alt="Stripe" 
          />

          <button 
            className="btn toggle-btn" 
            onClick={openSidebar}
          >
            <FaBars />            
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn">
              Products
            </button>
          </li>             
          <li>
            <button className="link-btn">
              Developers
            </button>
          </li>
          <li>
            <button className="link-btn">
              Company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar
