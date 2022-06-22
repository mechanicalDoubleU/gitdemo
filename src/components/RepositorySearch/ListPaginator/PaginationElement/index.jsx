import React from 'react';

import { useSref } from '@uirouter/react';

import './style.scss';

function Component({ data, params }) {
  const sref = useSref('search', {
    q: params.q,
    p: data.page,
  });

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

    return null;
  }

  return (
    <a {...(data.page !== undefined ? sref : {href: "#"})} className={`paginationElement ${data.current ? 'current' : ''}`}>
      {characterSelect(data)}
    </a>
  );
}

export default Component;
