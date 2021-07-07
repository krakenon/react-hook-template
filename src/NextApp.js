import '@kongd/assets/vendors/style';
import '@kongd/styles/styles.less';

import App from '@kongd/containers/App';
import configureStore, { history } from '@kongd/redux/store';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const store = configureStore();

const NextApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default NextApp;
