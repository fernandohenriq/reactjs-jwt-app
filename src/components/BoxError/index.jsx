import React from 'react';

import './style.css';

const BoxError = props => {
  return <div id="BoxError" {...props}>
    <div className="close" onClick={props.action}>
      <a href="/">X</a>
    </div>
    <div className="text">
      {props.children}
    </div>
  </div>
}

export default BoxError;
