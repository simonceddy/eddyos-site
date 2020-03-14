import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';
import About from './About';

function Routes() {
  return (
    <Route>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/settings" exact component={Settings} />
        <Route component={Home} />
      </Switch>
    </Route>
  );
}

export default Routes;
