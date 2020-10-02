import React, { useState, useEffect } from 'react';

const WpJwt = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState("");
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault()
    setQuery(`
      mutation LoginUser {
        login( input: {
          clientMutationId: "uniqueId",
          username: "${login}",
          password: "${password}"
        } ) {
          authToken
          refreshToken
          user {
            id
            name
          }
        }
      }
    `);
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        Login:<input
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        Password:<input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default WpJwt;