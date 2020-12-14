import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from "../../service/api";
import { isLogged, login } from "../../utils/auth";

import Button from "../../components/Button";
import BoxError from "../../components/BoxError";

import './styles.css';

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  async function handleAccess (e) {
    e.preventDefault();
    
    await api.post("/auth/login", {
      user: user,
      password: password
    }).then((res) => {
      login(res.data.token);
      history.push('/');
    }).catch((err) => {
      setError(String(err));
    });
  }

  const closeError = (e) => {
    e.preventDefault();
    setError("");
  }

  function handleAccessTest (e) {
    const tokenTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    login(tokenTest);
    history.push('/');
  }

  return(
    <>
      <Header />
        <div id="login">
          <div className="container">
            <div className="login">
              <form>
                <div className="input-group">
                  <label htmlFor="input-user">User</label>
                  <input type="text" name="input-user" id="input-user" value={user} onChange={(e) => { setUser(e.target.value) }} />
                </div>
                <div className="input-group">
                  <label htmlFor="input-password">Password</label>
                  <input type="password" name="input-password" id="input-password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="input-group">
                  <Button onClick={handleAccess}>Access</Button>
                </div>
                {
                  error ?
                    <BoxError action={closeError} >
                      {error}.
                      <p style={{fontSize: "0.75rem"}}>To enter test mode <a href="/" onClick={handleAccessTest}>click here</a></p>
                    </BoxError>
                  :
                    ""
                }
              </form>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default Login;
