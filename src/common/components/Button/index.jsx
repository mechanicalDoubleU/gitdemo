import React from 'react';

import './style.scss';

function Component({ onClick, text, className }) {
  return (
    <button className={`button_primary ${className || ''}`} type="button" onClick={onClick}>{text}</button>
  );
}

export default Component;
