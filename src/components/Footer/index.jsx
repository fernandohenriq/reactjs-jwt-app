import React from 'react';

import './styles.css'

function Footer() {
  return(
    <>
      <div id="footer">
        <div className="container">
          <p>Created by Fernando Henrique </p>
          
          <a href="https://github.com/fernandohenriq">
            <i className="fa fa-github-alt" aria-hidden="true"></i>
          </a>
          <a href="https://gitlab.com/fernandohenriq">
            <i class="fa fa-gitlab" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/fernando-henrique-silva-ba81a1b1/">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;