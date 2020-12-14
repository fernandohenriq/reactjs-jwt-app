import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getToken } from '../../utils/auth';

import './styles.css';

function Home() {
  const [user, setUser] = useState();

  useEffect (() => {
    const userDecoded = jwt_decode(getToken());
    setUser(userDecoded);
  }, []);

  return(
    <div>
      <Header />
        <div id="home">
          <div className="container">
            Hi <strong>{user ? user.name : ""}</strong>, welcome!
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
