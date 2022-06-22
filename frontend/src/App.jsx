import React from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';

import { RepositorySearch, AuthorProfile, Notfound } from './components';

import 'the-new-css-reset/css/reset.css';
import './style.scss';

const routingStates = [
  {
    name: 'home',
    url: '/?query&page',
    component: RepositorySearch,
    dynamic: true,
  },
  {
    name: 'search',
    url: '/search?query&page',
    component: RepositorySearch,
    dynamic: true,
  },
  {
    name: 'author',
    url: '/author?authorName',
    component: AuthorProfile,
    dynamic: true,
  },
  {
    name: 'notfound',
    url: '/**',
    component: Notfound,
  },
];

const plugins = [pushStateLocationPlugin];

function Component() {
  return (
    <UIRouter
      plugins={plugins}
      states={routingStates}
    >
      <main className="main">
        <UIView />
      </main>
    </UIRouter>
  );
}

export default Component;
