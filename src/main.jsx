import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getHistory } from './utils';
import { createReduxStore, router } from './redux';
import AppContainer from './containers/AppContainer';

require('./scss/base/_all.scss');

const store = createReduxStore();

window.reduxStore = store;

getHistory().listen((location) => {
  store.dispatch(router.actions.routeChange(location));
});

ReactDOM.render(
    (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    ),
    document.getElementById('app'),
  );
