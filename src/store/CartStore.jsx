import React, { useState, createContext } from "react";

// Create Context Object
export const CounterContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  const [cartStorage, setCartStorage] = useState([
    {
      title: "Jal1",
      price: 20,
      total: 5,
      productImage:
        "https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/files/2015/02/090115181753-GANGA-CRUISE1CAROUSEL.jpg&w=500&h=400",
    },

    {
        title: "Jal2",
        price: 40,
        total: 6,
        productImage:
          "https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/files/2015/02/090115181753-GANGA-CRUISE1CAROUSEL.jpg&w=500&h=400",
      },
  ]);

  return (
    <CounterContext.Provider value={[cartStorage, setCartStorage]}>
      {props.children}
    </CounterContext.Provider>
  );
};
