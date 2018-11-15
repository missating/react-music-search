// react libraries
import React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import LoginPage from '../components/LoginPage';
import SearchPage from '../components/SearchPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/search" component={SearchPage} />
  </Switch>
);

export default Routes;
