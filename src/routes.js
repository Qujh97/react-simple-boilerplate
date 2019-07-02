import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Todo,
  Filter,
  FaCCTest,
  Weather
} from './containers';

const routes = [
  { path: '/', exact: true, component: Todo },
  { path: '/filter', component: Filter },
  { path: '/facc', component: FaCCTest },
  { path: '/weather', component: Weather }
];

const renderRoutes = () => (
  <Router>
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))
      }
    </Switch>
  </Router>
);

export default renderRoutes;
