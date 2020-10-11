import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

const Login = ({ loggedIn,handleClick}) => {
  let history = useHistory();
  console.log(history)

  const {state} = useLocation()

  const handleLogIn = () => {
    handleClick();
    if (state && state.from) {
      history.push(state.from.pathname)
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <h2>You are {loggedIn ? "Logged In" : "not logged in"}</h2>
      <button onClick={handleLogIn}>{loggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
}

export default Login;