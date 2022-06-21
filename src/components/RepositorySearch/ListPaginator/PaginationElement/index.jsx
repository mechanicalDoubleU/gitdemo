import React from 'react';

import { useSrefActive } from '@uirouter/react';

import './style.scss';

function Component({ data, params }) {
  const sref = useSrefActive('search', {
    q: params.q,
    p: data.page,
  },null, 'active');

  function characterSelect(_data) {
    if (_data.elipsis) {
      return '...';
    }
    if (_data.sequential) {
      return `${_data.sequential}`;
    }
    if (_data.page) {
      return `${_data.page}`;
    }
  }

  return (
    <a {...(data.page !== undefined ? sref : {})} className="paginationElement">
      {characterSelect(data)}
    </a>
  );
}

export default Component;
