import React from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';

import { RepositorySearch, AuthorProfile, Notfound } from './components';

import 'the-new-css-reset/css/reset.css';
import './style.scss';

const routingStates = [
  {
    name: 'search',
    url: '/?q&p',
    component: RepositorySearch,
    dynamic: true,
  },
  {
    name: 'profile',
    url: '/profile/:name',
    component: AuthorProfile,
    dynamic: true,
  },
  {
    name: 'notfound',
    url: '**',
    component: Notfound,
  },
];

const plugins = [pushStateLocationPlugin];

function Component() {
  return (
    <UIRouter plugins={plugins} states={routingStates}>
      <main className="main">
        <UIView />
      </main>
    </UIRouter>
  );
}

export default Component;
