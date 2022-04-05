

import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Route,Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();