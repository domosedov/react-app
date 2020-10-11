import React from 'react';
import { useDispatchCounter } from '../components/CounterContext';

const CounterControl = () => {
  const dispatch = useDispatchCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default CounterControl;