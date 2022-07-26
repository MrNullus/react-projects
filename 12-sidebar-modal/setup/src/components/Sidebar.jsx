import React from 'react';

import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';

import { social, links } from './data';


const Sidebar = () => {

  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <aside 
      className={`sidebar ${isModalOpen ?? 'show-modal'}`}
    >
      <div className="sidebar-container">
        <img 
          className="logo" 
          src={logo} 
          alt="codding addict" 
        />

        <button 
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="link">
        {
          links.maps(({ id, url, text, icon }) => (
            <li key={ id }>
              <a href={ url }>
                { icon }
                { text }
              </a>
            </li>
          ));
        }
      </ul>

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
    </aside>
  );
};


export default Sidebar;
