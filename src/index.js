import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loading from './Components/Loading/Loading';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Loading/>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
