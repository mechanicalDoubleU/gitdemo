/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useSrefActive } from '@uirouter/react';
import SearchBar from './SearchBar';
import './style.scss';

function Component() {
  const repositorySearchSref = useSrefActive('search', null, 'active');

  return (
    <div className="header">
      <nav className="header_nav">
        <a {...repositorySearchSref}>Home</a>
      </nav>
      <SearchBar />
    </div>
  );
}

export default Component;
