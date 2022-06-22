import PropTypes from 'prop-types';

const RepositoryType = PropTypes.shape({
  full_name: PropTypes.string,
  language: PropTypes.string,
  stargazers_count: PropTypes.number,
  owner: PropTypes.shape({
    login: PropTypes.string,
  }),
});

const RepositoryDefault = {
  full_name: 'Not available',
  owner: {
    login: 'Not available',
  },
  language: 'Not detected',
  stargazers_count: 0,
};

const PaginationElementType = PropTypes.shape({
  page: PropTypes.number,
  key: PropTypes.string.isRequired,
  sequential: PropTypes.string,
  ellipsis: PropTypes.bool.isRequired,
  current: PropTypes.bool.isRequired,
});

const PaginationElementDefault = {
  page: undefined,
  sequential: undefined,
};

const RepositorySearchQueryType = PropTypes.shape({
  q: PropTypes.string,
  p: PropTypes.string,
});

const RepositorySearchQueryDefaults = {
  q: undefined,
  p: undefined,
};

export {
  RepositoryType,
  RepositoryDefault,
  PaginationElementType,
  PaginationElementDefault,
  RepositorySearchQueryType,
  RepositorySearchQueryDefaults,
};
