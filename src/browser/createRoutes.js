import React from 'react';
import App from './app/App.react';
import Auth from './auth/Page.react';
import Home from './home/Page.react';
import Projects from './projects/Page.react';
import Advisors from './advisors/Page.react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Projects} path="projects" />
      <Route component={Advisors} path="advisors" />
      <Route component={Auth} path="login" />
    </Route>
  );
}
