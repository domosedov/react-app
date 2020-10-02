import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
  color: violet;
  font-size: 3rem;
  text-align: center;
  background-color: blanchedalmond;
  padding: 0.5rem 1rem;
`;

const Header = ({size}) => {
  return <StyledHeader>Styled Header</StyledHeader>;
};

export default Header;