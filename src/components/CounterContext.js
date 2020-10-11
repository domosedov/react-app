import React, {useReducer, useContext, createContext, Fragment} from 'react';

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

export const CounterProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <Fragment>
      <CounterDispatchContext.Provider value={dispatch}>
        <CounterStateContext.Provider value={state}>
          {children}
        </CounterStateContext.Provider>
      </CounterDispatchContext.Provider>
    </Fragment>
  )
}

export const useDispatchCounter = () => useContext(CounterDispatchContext)
export const useStateCounter = () => useContext(CounterStateContext);