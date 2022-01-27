import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './sass/_global.scss'
import 'bootstrap/dist/css/bootstrap.css';

import './fontawesome';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
