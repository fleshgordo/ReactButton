import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import Layout from './Layout';
import Home from '../Views/Home';

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
