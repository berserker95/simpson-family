import React from 'react';

import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './fontawesome';

import './App.scss';



function App() {
  return (
  <div className='wrapper-container'>
    <React.Fragment>
      <Navbar id='navbarId' navbarClass='wrapper-navbar'/>
      <Main id='mainId' mainClass='wrapper-main'/>
      <Footer id='footerId' footerClass='wrapper-footer'/>
    </React.Fragment>
  </div>
         
  );
}

export default App;
