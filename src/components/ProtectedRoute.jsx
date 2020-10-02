import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => {
      return loggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/unauthorized",
            state: { from: props.location, foo: "bar" },
          }}
        />
      );
    }}
  />
  }; 

export default ProtectedRoute;