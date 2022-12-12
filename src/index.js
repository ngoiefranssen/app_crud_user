import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const rootElementRoute = ReactDOM.createRoot(document.getElementById('root'));
rootElementRoute.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
