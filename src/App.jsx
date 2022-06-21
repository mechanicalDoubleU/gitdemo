import React from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';

import { RepositorySearch, AuthorProfile, Header } from './components';

import './reset.scss';
import './style.scss';

const routingStates = [
  {
    name: 'search',
    url: '/?q&p',
    component: RepositorySearch,
  },
  {
    name: 'profile',
    url: '/profile/:name',
    component: AuthorProfile,
  },
];

const plugins = [pushStateLocationPlugin];

function Component() {
  return (
    <UIRouter plugins={plugins} states={routingStates}>
      <main className="main">
        <Header />
        <UIView />
      </main>
    </UIRouter>
  );
}

export default Component;
