import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/header/Header';

import './fontawesome';

import './App.scss';


function App() {
  return (
    <Router>
      <Header headerClass='header'/>
      <div className='body-container w-100 h-100'>
        <Routes>
          <Route path='/' element={() => { }} />
          <Route path='/about' element={() => { }} />
          <Route path='/curriculum' element={() => { }} />
          <Route path='/contact' element={() => { }} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
