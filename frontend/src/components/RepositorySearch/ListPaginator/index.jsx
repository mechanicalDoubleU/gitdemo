import React from 'react';
import PropTypes from 'prop-types';

import PaginationElement from './PaginationElement';

import {
  RepositorySearchQueryType,
  RepositorySearchQueryDefaults,
  PaginationElementType,
} from '../types';

import './style.scss';

function Component({ pagination, params }) {
  return (
    <nav className="paginator">
      {pagination.map(
        (item) => (
          <PaginationElement
            key={item.key}
            data={item}
            params={params}
          />
        ),
      )}
    </nav>
  );
}

Component.defaultProps = {
  params: RepositorySearchQueryDefaults,
};

Component.propTypes = {
  pagination: PropTypes.arrayOf(
    PaginationElementType,
  ).isRequired,
  params: RepositorySearchQueryType,
};

export default Component;
