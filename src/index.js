import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/Main';
import Home from './components/HomeComponent';
import Shop from './components/ShopComponent';
import Settings from './components/SettingsComponent';


var app = document.getElementById('app');

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="shop" component={Shop}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>
, app);
