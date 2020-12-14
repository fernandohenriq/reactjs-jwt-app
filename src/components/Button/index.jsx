import React from 'react';

import './style.css';

const primary = {
  backgroundColor: "var(--color-primary)",
}

const secondary = {
  backgroundColor: "var(--color-secondary)",
}

const Button = props => {
  return <button id="Button" style={ props.theme === "primary" || !props.theme ? primary : secondary } {...props}>
    {props.children}
  </button>
}

export default Button;
