import React from 'react';

import AppProvider from './contexts/context';

import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import Home from './components/Home';


function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}


export default App;
