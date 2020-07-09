import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push('/login');
  };

  return (
    <Security issuer='https://dev-662389.okta.com/oauth2/default'
              clientId='0oajubnxuR5vx3lZs4x6'
              redirectUri={window.location.origin + '/implicit/callback'}
              onAuthRequired={onAuthRequired}
              pkce={true} >
      <Route path='/' exact={true} component={Home} />
      <SecureRoute path='/protected' component={Protected} />
      <Route path='/login' render={() => <Login issuer='https://dev-662389.okta.com/oauth2/default' />} />
      <Route path='/implicit/callback' component={LoginCallback} />
    </Security>
  );
};
export default AppWithRouterAccess;