import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  path,
  component: Component,
  user,
  redirectTo,
  ...rest
}) => (
  <Route path={path} {...rest} render={props =>
    user ?
      <Component {...props}/>
      :
      <Redirect to={{
        pathname: redirectTo,
        state: { referrer: props.location },
      }}/>
  }/>
);

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  user: PropTypes.object,
  redirectTo: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  redirectTo: '/login',
};

export default connect(state => ({
  user: state.user,
}))(ProtectedRoute);
