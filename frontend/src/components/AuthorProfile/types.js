import PropTypes from 'prop-types';

const AuthorProfileType = PropTypes.shape({
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
  bio: PropTypes.bio,
  data: PropTypes.html_url,
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
