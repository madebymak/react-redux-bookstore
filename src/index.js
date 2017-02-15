import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Route routes={routes} history={browserHistory} />
  document.getElementById('app')
);
