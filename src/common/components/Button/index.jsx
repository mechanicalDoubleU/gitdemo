import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

function Component({ onClick, text, className }) {
  return (
    <button className={`button_primary ${className}`} type="button" onClick={onClick}>{text}</button>
  );
}

Component.defaultProps = {
  onClick: () => {},
  text: undefined,
  className: '',
};

Component.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
