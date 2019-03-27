import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';

import Page404 from '../PageNotFound';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Messages from '../Messages';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      {/* <switch> */}
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.POSTS} component={Messages} />
        
        {/* <Route component={Page404} /> */}
      {/* </switch> */}
     
    </div>
  </Router>
);

export default withAuthentication(App);