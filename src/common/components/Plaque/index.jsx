import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Component({ className, text }) {
  return (<div className={`plaque ${className}`}>{text}</div>);
}

Component.defaultProps = {
  className: '',
  text: '',
};

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Component;
