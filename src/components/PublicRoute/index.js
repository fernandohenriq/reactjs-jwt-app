import React from 'react';

import { Route} from 'react-router';
import { Redirect } from 'react-router-dom';
import { isLogged } from '../../utils/auth';

const PublicRoute = props => {
  return isLogged() ? <Redirect to="/" /> : <Route {...props}/>;
}

export default PublicRoute;
