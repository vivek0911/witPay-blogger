import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Dashboard from './components/DashboardComponent/Dashboard';
import HomeContainer from './containers/HomeContainer';
import BlogContainer from './containers/BlogContainer';

export default () => (<Route path="/" component={App} >
  <IndexRoute component={Dashboard} />
  <Route path="home" component={HomeContainer} />
  <Route path="blog" component={BlogContainer} />
</Route>);
