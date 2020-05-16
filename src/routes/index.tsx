import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Repository from '../screens/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
    {/* + significa que td que vier depois do /, pretence a essa rota */}
  </Switch>
);

export default Routes;
