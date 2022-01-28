import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/header/Header';

import './fontawesome';

import './App.scss';

AOS.init(
  { duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  }
);

function App() {
  return (
  <div className='wrapper-container'>
    <React.Fragment>
      <Header id='headerId' headerClass='wrapper-header'/>
    </React.Fragment>
  </div>
         
  );
}

export default App;
