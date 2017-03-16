import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {smoothAnchorate} from 'smooth-anchorate';

import routes from './core/routes';
import configureStore from './core/configureStore';

import 'semantic-ui-css/semantic.css';
import './styles/main.scss';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import './styles/img/favicon.ico';

const store = configureStore();

function onRouterUpdate(){
  smoothAnchorate();
}

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={onRouterUpdate} />
  </Provider>,
  document.getElementById('app')
);
