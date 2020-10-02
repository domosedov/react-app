import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarItem = styled.li`
  list-style-type: none;
  background-color: blueviolet;
  margin: 0 0.25rem;

  a {
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    border: 2px solid transparent;
  }

  a.active {
    border-color: red;
  }
`;

const Navbar = () => {
  return (
    <nav>
      <StyledNavbar>
        <NavbarItem>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/secret" exact activeClassName="active">
            Secret
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/login" exact activeClassName="active">
            Login
          </NavLink>
        </NavbarItem>
      </StyledNavbar>
    </nav>
  );
}

export default Navbar;