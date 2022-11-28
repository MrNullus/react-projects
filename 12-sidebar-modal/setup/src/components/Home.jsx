import React, { useContext } from 'react';
import { AppContext, useGlobalContext } from './contexts/context';

import { FaBars } from 'react-icons/fa';


const Home = () => {

  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button 
        className="sidebar-toggle" 
        onClick={openSidebar}
      >
        <FaBars />  
      </button>

      <button 
        className="btn"
        onClick={openModal}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
