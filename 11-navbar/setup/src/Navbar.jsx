import React, { useState, useRef, useEffect } from 'react';

import { FaBars, FaTwitter } from 'react-icons/fa';
import logo from './logo.svg';

import { links, social } from './data';


const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    const height = `${showLinks ? linksHeight : '0'}px`;

    linksContainerRef.current.style.height = height;

    console.log('linksHeight' + linksHeight);
    console.log('linksHeight' + linksContainerRef.current.getBoundingClientRect());
  }, [showLinks]);


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo" />

          <button 
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {
          showLinks && (
            <div 
              ref={linksContainerRef}
              className={`${showLinks ?? 'show-container'} links-container`}
            >
              <ul 
                className="links"
                ref={linksRef}
              >
                {
                  links.map(({ id, url, text }) => (
                    <li key={ id }>
                      <a href={ url }>
                        { text }
                      </a>
                    </li>
                  ));
                }
              </ul>
            </div>  
          )
        }
        

        <ul className="social-icons">
          {
            social.map(({ id, url, icon }) => (
              <li key={ id }>
                <a href={ url }>
                  { icon }
                </a>
              </li>
            ));
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
