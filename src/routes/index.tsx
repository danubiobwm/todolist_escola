import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Posts from '../pages/Posts';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/post/:user.id+" component={Posts} />
    </Switch>
  );
};

export default Routes;
