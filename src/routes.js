import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={ Home } />
        <PublicRoute path="/login" exact component={ Login } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
