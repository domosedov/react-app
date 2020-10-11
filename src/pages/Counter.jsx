import React from 'react';
import { useStateCounter } from '../components/CounterContext';

const Counter = () => {
  const counter = useStateCounter();

  return (
    <div>{counter}</div>
  );
}

export default Counter;