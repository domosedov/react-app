import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
  color: violet;
  font-size: 3rem;
  text-align: center;
  background-color: blanchedalmond;
  padding: 0.5rem 1rem;
`;

const Header = () => {
  console.log('render')
  return <StyledHeader>Styled Header</StyledHeader>;
};

export default React.memo(Header);