import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Hello,
  NotFound,
} from './containers';

const routes = [
  { path: '/', exact: true, component: Hello },
  { component: NotFound }
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
