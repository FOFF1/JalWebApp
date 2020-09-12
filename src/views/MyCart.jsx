import React from "react";
import { CounterContext } from "../store/CartStore";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const MyCart = (props) => {
  const [cartStorage] = React.useContext(CounterContext);

  const myCartProducts = cartStorage.map((element, i) => {
    return <CartItem key={i} cartSubItem={element} />;
  });

  let cartTotal = 0;
  cartStorage.forEach((element) => {
    cartTotal = cartTotal + element.price * element.total;
  });
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">{myCartProducts}</div>
        <div className="col-lg-4">
          <Checkout cartTotal={cartTotal} />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
