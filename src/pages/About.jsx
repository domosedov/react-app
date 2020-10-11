import React from 'react';
import { CounterProvider } from '../components/CounterContext';
import Counter from './Counter';
import CounterControl from './CounterControl';

const About = () => {
  return (
    <CounterProvider>
      <div>About Page</div>
      <Counter/>
      <CounterControl/>
    </CounterProvider>
  );
}

export default About;