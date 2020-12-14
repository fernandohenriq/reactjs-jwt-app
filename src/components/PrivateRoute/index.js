import React from 'react';

import { Route} from 'react-router';
import { Redirect } from 'react-router-dom';
import { isLogged } from '../../utils/auth';

const PrivateRoute = props => {
  return isLogged() ? <Route {...props}/> : <Redirect to="/login" />
}

export default PrivateRoute;
