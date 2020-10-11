import React from 'react';
import { useHistory } from "react-router-dom";

const Unauthorized = () => {
  let {location, push} = useHistory();
  console.log(location, push);

  const handleClick = evt => {
    evt.preventDefault()

    if (location.state && location.state.from) {
      push('/login', location.state)
    } else {
      push('/')
    }
  }

  return (
    <div>
      <h1>403</h1>
      <img src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif" alt="Гендальф" />
      <h2>Please Log In</h2>
      <button type="button" onClick={handleClick}>
        LogIn
      </button>
    </div>
  );
}

export default Unauthorized;