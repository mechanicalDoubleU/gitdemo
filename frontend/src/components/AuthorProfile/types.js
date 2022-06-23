import PropTypes from 'prop-types';

const AuthorProfileType = PropTypes.shape({
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
  bio: PropTypes.string,
  html_url: PropTypes.string,
});

const AuthorProfileDefaults = {
  avatar_url: undefined,
  name: '-',
  login: '-',
  bio: undefined,
  html_url: undefined,
};

export {
  AuthorProfileType,
  AuthorProfileDefaults,
};
