import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebvitals from './reportWebzVitals';
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery';
import Popper from 'popper.js';

  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  reportWebVitals();
