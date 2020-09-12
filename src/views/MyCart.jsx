import React from "react";
import { CounterContext } from "../store/CartStore";

const MyCart = (props) => {
  const [count] = React.useContext(CounterContext);

  const myCartProducts = count.map((element, i) => {
    return (
      <div>
        ProductName: {element.title}
        <br />
        Total Items: {element.total}
        <br />
        Total Price: {element.total * element.price}
        <br />
      </div>
    );
  });
  return (
    <div>
      Hello MyCart:
      {myCartProducts}
    </div>
  );
};

export default MyCart;
