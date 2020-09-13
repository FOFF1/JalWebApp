import React from "react";
import { FaPlus, FaMinus, FaWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CounterContext } from "../store/CartStore";

const CartItem = (props) => {
  const [cartStorage, setCartStorage] = React.useContext(CounterContext);

  const onRemoveItem = (productTitle) => {
    if (!cartStorage) return;
    let index = cartStorage.findIndex((ele) => ele.title === productTitle);
    if (index >= 0) {
      let duplicateStore = [...cartStorage];
      duplicateStore.splice(index, 1);
      setCartStorage(duplicateStore);
    }
  };

  const onIncraeseQty = (productTitle) => {
    let index = cartStorage.findIndex((ele) => ele.title === productTitle);
    if (index >= 0) {
      let duplicateStore = [...cartStorage];
      let selectedItem = duplicateStore[index];
      duplicateStore[index] = {
        title: selectedItem.title,
        total: selectedItem.total + 1,
        price: selectedItem.price,
        productImage: selectedItem.productImage,
      };
      setCartStorage(duplicateStore);
    }
  };

  const onDecreaseQty = (productTitle) => {
    let index = cartStorage.findIndex((ele) => ele.title === productTitle);
    if (index >= 0) {
      let duplicateStore = [...cartStorage];
      let selectedItem = duplicateStore[index];
      if (selectedItem.total === 0) return;
      duplicateStore[index] = {
        title: selectedItem.title,
        total: selectedItem.total - 1,
        price: selectedItem.price,
        productImage: selectedItem.productImage,
      };
      setCartStorage(duplicateStore);
    }
  };

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
              <img
                src={cartSubItem.productImage}
                style={{ height: "150px" }}
                alt="product"
              />
            </center>
          </div>
          <div className="col-lg-6">
            <h4>{cartSubItem.title}</h4>
            <p style={{ fontSize: "15px", color: "#03225C" }}>
              <span>&#8377;</span>
              {cartSubItem.price} |
              <button
                onClick={() => onDecreaseQty(cartSubItem.title)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  height: "fit-content",
                  outlineStyle: "none",
                }}
              >
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
              </button>
              Qty {cartSubItem.total}{" "}
              <button
                onClick={() => onIncraeseQty(cartSubItem.title)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  height: "fit-content",
                  outlineStyle: "none",
                }}
              >
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
              </button>
            </p>
            <div style={{ marginTop: "60px" }}>
              <hr style={{ width: "150px", marginLeft: "0px" }} />
              Total:<span>&#8377;</span>
              {cartSubItem.total * cartSubItem.price}
            </div>
          </div>
          <div className="col-lg-2 d-flex justify-content-end">
            {" "}
            <button
              onClick={() => onRemoveItem(cartSubItem.title)}
              style={{
                border: "none",
                backgroundColor: "white",
                height: "fit-content",
                outlineStyle: "none",
              }}
            >
              <IconContext.Provider
                value={{
                  style: {
                    fontSize: "25px",
                    color: "rgb(0, 123, 255)",
                    padding: "5px",
                  },
                }}
              >
                <FaWindowClose />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CartItem;
