import React from 'react';

// import { Route, IndexRoute } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/DashboardComponent/Dashboard';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/blog" component={BlogContainer} />
  </Switch>
  );
