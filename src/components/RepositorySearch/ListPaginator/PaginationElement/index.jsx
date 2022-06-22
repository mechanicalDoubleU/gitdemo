/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useSref } from '@uirouter/react';

import {
  PaginationElementType,
  PaginationElementDefault,
  RepositorySearchQueryDefaults,
  RepositorySearchQueryType,
} from '../../types';

import './style.scss';

function Component({ data, params }) {
  const sref = useSref('search', {
    q: params.q,
    p: data.page,
  });

  function characterSelect(_data) {
    if (_data.ellipsis) {
      return '...';
    }
    if (_data.sequential) {
      return `${_data.sequential}`;
    }
    if (_data.page) {
      return `${_data.page}`;
    }

    return null;
  }

  return (
    <a {...(data.page !== undefined ? sref : { href: '#' })} className={`paginationElement ${data.current ? 'current' : ''}`}>
      {characterSelect(data)}
    </a>
  );
}

Component.defaultProps = {
  data: PaginationElementDefault,
  params: RepositorySearchQueryDefaults,
};

Component.propTypes = {
  data: PaginationElementType,
  params: RepositorySearchQueryType,
};

export default Component;
