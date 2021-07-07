import asyncComponent from '@kongd/components/AsyncComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = ({ match }) => (
  <div className="kd-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}`}
        component={asyncComponent(() => import('@kongd/pages/Home'))}
      />
    </Switch>
  </div>
);

export default App;
