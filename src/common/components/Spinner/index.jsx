import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Component({ className, mode }) {
  return (
    <div className={`spinner ${className} ${mode}`}>
      <div className="spinner_icon" />
    </div>
  );
}

const SPINNER_MODE = {
  DEFAULT: 'default',
  ABSOLUTE: 'absolute',
};

Component.defaultProps = {
  className: '',
  mode: SPINNER_MODE.DEFAULT,
};

Component.propTypes = {
  className: PropTypes.string,
  mode: PropTypes.oneOf(Object.values(SPINNER_MODE)),
};

export { SPINNER_MODE };
export default Component;
