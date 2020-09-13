import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CheckOutContext } from "../store/CartStore";

const Checkout = (props) => {
  const history = useHistory();
  const [checkOutDetails, setCheckOutDetails] = React.useContext(
    CheckOutContext
  );
  const placeOrder = () => {
    history.push("/payment");
  };

  React.useEffect(() => {
    const cartTotal = props.cartTotal || 0;
    setCheckOutDetails(cartTotal);
  }, [props.cartTotal]);

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
        <div className="col-lg-12">
          <Button
            onClick={placeOrder}
            style={{
              backgroundColor: "darkturquoise",
              width: "100%",
              border: "none",
            }}
          >
            Place Order
          </Button>
        </div>

        <div
          className="col-lg-4"
          style={{ border: "1px Solid aliceblue", borderRight: "none" }}
        >
          Card Total
        </div>
        <div
          className="col-lg-4"
          style={{
            border: "1px Solid aliceblue",
            borderRight: "none",
            borderLeft: "none",
          }}
        ></div>
        <div
          className="col-lg-4 d-flex justify-content-end"
          style={{ border: "1px Solid aliceblue", borderLeft: "none" }}
        >
          <span>&#8377;</span>
          {checkOutDetails}
        </div>
      </div>
    </>
  );
};

export default Checkout;
