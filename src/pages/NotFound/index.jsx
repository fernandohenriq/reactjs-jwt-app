import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

function NotFount() {

  return(
    <div>
      <Header />
        <div id="notFound">
          <div className="container">
            <p>404</p>
            <p>Oops! Something is wrong :(</p>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default NotFount;
