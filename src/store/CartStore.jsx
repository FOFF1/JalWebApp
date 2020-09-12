import React, { useState, createContext } from "react";

// Create Context Object
export const CounterContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  const [cartStorage, setCartStorage] = useState([]);

  return (
    <CounterContext.Provider value={[cartStorage, setCartStorage]}>
      {props.children}
    </CounterContext.Provider>
  );
};
