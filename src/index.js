import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes.js';
import configureStore from './store/configureStore';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />,
  </Provider>,
  document.getElementById('app')
);
