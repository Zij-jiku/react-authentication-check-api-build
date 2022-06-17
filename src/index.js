import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './common/Header';
import reportWebVitals from './reportWebVitals';

// Default Base Setup
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

reportWebVitals();
