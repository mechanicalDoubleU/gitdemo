import React from 'react';

import './style.scss';

function Component({ onClick, text }) {
  return (
    <button className="button_primary" type="button" onClick={onClick}>{text}</button>

  );
}

export default Component;
