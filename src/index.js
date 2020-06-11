import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import "../node_modules/jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";

require('./Ably');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

