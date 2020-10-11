import React, { useReducer, memo, useCallback } from "react";
import styled from "styled-components";
import { useIterator } from "../components/hooks";
import Menu from "../components/MenuExample";

const Container = styled.div`
  display: block;
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  border: 1px solid gray;
`;

const Button = (props) => {
  const { className, children, handleClick } = props;

  console.log('button props', props);

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

const StyledButton = memo(styled(Button)`
  display: block;
  padding: 0.5rem 1rem;
  background-color: indigo;
  border: 1px solid black;
  font-size: 1.5rem;
  color: ${props => {
    console.log('Styled', props);
    return props.theme.blue
  }};
`);

const Landing = () => {
  const [show, toggle] = useReducer((b) => !b, false);
  const [item, prev, next] = useIterator(['a', 'b', 'c', 'd'], 2);

  const handleClick = useCallback(() => toggle(), []);

  return (
    <Container>
      <div>Landing Page</div>
      <StyledButton color="red" handleClick={handleClick}>Click Me!</StyledButton>
      <Menu show={show}>Hello</Menu>
  <div>{item}</div>
  <button onClick={prev}>PREV</button>
  <button onClick={next}>NEXT</button>
    </Container>
  );
};

export default Landing;
