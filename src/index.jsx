import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const version = '1.0';
const oldVersion = localStorage.getItem('version');

if (version !== oldVersion) {
  localStorage.clear();
  localStorage.setItem('version', version);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
