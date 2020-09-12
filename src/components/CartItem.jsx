import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IconContext } from "react-icons";
const CartItem = (props) => {
  const cartSubItem = props.cartSubItem;
  if (cartSubItem) {
    return (
      <>
        <div
          className="row"
          style={{
            background: "white",
            height: "180px",
            padding: "10px",
            marginLeft: "10px",
            border: "3px solid aliceblue",
            borderBottom: "1.5px solid aliceblue",
          }}
        >
          <div className="col-lg-4" style={{ padding: "10px" }}>
            <center>
              {" "}
              <img src={cartSubItem.productImage} style={{ height: "150px" }} alt='product'/>
            </center>
          </div>
          <div className="col-lg-8">
            <h4>{cartSubItem.title}</h4>
            <p style={{ fontSize: "15px", color: "#03225C" }}>
              <span>&#8377;</span>
              {cartSubItem.price} |
              <IconContext.Provider
                value={{
                  style: {
                    fontSize: "20px",
                    color: "rgb(0, 123, 255)",
                    padding: "5px",
                  },
                }}
              >
                <FaMinus />
              </IconContext.Provider>
              Qty {cartSubItem.total}{" "}
              <IconContext.Provider
                value={{
                  style: {
                    fontSize: "20px",
                    color: "rgb(0, 123, 255)",
                    padding: "5px",
                  },
                }}
              >
                <FaPlus />
              </IconContext.Provider>
            </p>
            <div style={{ marginTop: "60px" }}>
              <hr style={{ width: "150px", marginLeft: "0px" }} />
              Total:<span>&#8377;</span>{cartSubItem.total * cartSubItem.price}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CartItem;
