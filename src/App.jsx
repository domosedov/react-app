import React, { Fragment, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { GlobalStyles } from "./components/theme/GlobalStyles";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SecretPage from './pages/SecretPage'
import Unauthorized from "./pages/Unauthorized";

function App() {
  const [loggedIn, toggle] = useReducer(t => !t, false);

  const logIn = () => toggle()

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login handleClick={logIn} loggedIn={loggedIn} />
        </Route>
        <ProtectedRoute exact path="/secret" loggedIn={loggedIn}>
          <SecretPage foo="bar" />
        </ProtectedRoute>
        <Route exact path="/unauthorized">
          <Unauthorized/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
  
}

export default App;
