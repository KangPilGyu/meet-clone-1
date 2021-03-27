import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3100';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
