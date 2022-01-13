import React from 'react';

import Header from './components/header/Header';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';


import './App.scss';


function App() {
  return (
    <div className="App">
      <Header title='Manage Employees'/>
      <section>
        <Table className='table-striped table-bordered'/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
