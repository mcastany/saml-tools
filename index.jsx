import Index from './views/index.jsx'
import Encoder from './views/encoder.jsx'
import Deflator from './views/deflator.jsx';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configureStore from './store/configureStore';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);
const container = document.getElementById('container');

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}>
        <Route path="encoder" component={Encoder}/>
        <Route path="deflator" component={Deflator}/>
      </Route>
    </Router>
  </Provider>,
  container );