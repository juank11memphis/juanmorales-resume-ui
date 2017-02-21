import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './core/routes';
import {Provider} from 'react-redux';

import 'semantic-ui-css/semantic.css';
import './styles/main.css';

import configureStore from './core/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
