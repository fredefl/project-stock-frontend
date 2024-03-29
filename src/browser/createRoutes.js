import React from 'react';
import App from './app/App.react';
import Auth from './auth/Page.react';
import Home from './home/Page.react';
import Projects from './projects/Page.react';
import Project from './project/Page.react';
import Advisors from './advisors/Page.react';
import Profile from './profile/Page.react';
import CreateProject from './project/Create.react';
import LoginEmail from './auth/LoginEmail.react';
import Sections from './sections/Page.react';
import Section from './section/Page.react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Projects} path="/projects" />
      <Route component={Advisors} path="/advisors" />
      <Route component={Profile} path="/profile/:id" />
      <Route component={CreateProject} path="/project/create" />
      <Route component={CreateProject} path="/project/edit/:id" />
      <Route component={Sections} path="/sections" />
      <Route component={Section} path="/section/:id" />
      <Route component={Project} path="/project/:id" />
      <Route component={LoginEmail} path="/login/email" />
      <Route component={Home} path="/home" />
    </Route>
  );
}
