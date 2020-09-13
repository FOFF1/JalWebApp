import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";

const EmptyCart = () => {
  return (
    <div className="d-flex justify-content-center" style={{marginTop:'400px'}}>
      <div style={{fontSize:'35px', fontFamily:'cursive'}}>Oops....Looks like your cart is empty</div>
      <br/>
      <br/>
      <div>
        <IconContext.Provider
          value={{
            style: {
              fontSize: "90px",
              color: "rgb(0, 123, 255)",
              padding: "5px",
            },
          }}
        >
          <FaShoppingCart />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default EmptyCart;
