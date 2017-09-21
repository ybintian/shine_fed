import React, { PropTypes } from 'react';
import {
  Route,
} from 'react-router-dom';

import { App } from 'containers';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <App history={props.history}>
        <Component {...props}/>
      </App>
    )}/>
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func,
  history: PropTypes.object,
};

export default PrivateRoute;
