import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../views/containers/screens/login/login';

const PageNotFound = () => (
  <h1>
    Page Not Found
  </h1>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes;