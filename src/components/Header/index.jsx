import React from 'react';
import { useHistory } from 'react-router-dom';
import { isLogged, logout } from '../../utils/auth';

import './styles.css';

function Header() {
  let history = useHistory();
  
  function handleLogOut (e) {
    e.preventDefault();
    logout();
    history.push('/login');
  }

  return(
    <div>
      <div id="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
              <span>ReactJS JWT App</span>
            </a>
          </div>
          {
            isLogged()
            ?
              <div className="menu">
                <a href="/">Home</a>
                <a href="/login" onClick={ handleLogOut }>Sing out <i className="fa fa-sign-out" aria-hidden="true"></i></a>
              </div>
            :
              <div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
