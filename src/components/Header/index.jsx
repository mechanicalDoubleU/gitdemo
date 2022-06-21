/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useSrefActive } from '@uirouter/react';
import SearchBar from './SearchBar';
import './style.scss';

function Component() {
  const repositorySearchSref = useSrefActive('search', null, 'active');

  return (
    <nav className="header">
      <a {...repositorySearchSref}>Home</a>
      <SearchBar />
    </nav>
  );
}

export default Component;
