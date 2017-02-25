import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App';
import { HomePage } from '../components/home';
import { ProjectsPage } from '../components/projects';
import { ContactPage } from '../components/contact';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="projects" component={ProjectsPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);
