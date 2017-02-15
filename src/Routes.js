import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage.js';
import About from './components/common/About.js';
import Book from './components/book/BookPage.js';
import App from './components/App.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
  </Route>
)
