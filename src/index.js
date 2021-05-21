import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
