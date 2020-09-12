import React from "react";
import { Button } from "reactstrap";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../css/productLeft.css";

const ProductLeftComp = (props) => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={props.brandIcon} alt="Kodak Brownie Flash B Camera" />
      </div>
      <div className="row">
        <span>
          <Button>
            Add To Cart{" "}
            <IconContext.Provider
              value={{
                style: {
                  fontSize: "35px",
                  color: "rgb(0, 123, 255)",
                  padding: "5px",
                },
              }}
            >
              <FaShoppingCart />
            </IconContext.Provider>
          </Button>
        </span>
        <span>
          <Button>
            Buy Now{" "}
            <IconContext.Provider
              value={{
                style: {
                  fontSize: "35px",
                  color: "rgb(0, 123, 255)",
                  padding: "5px",
                },
              }}
            >
              <FaDollarSign />
            </IconContext.Provider>
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ProductLeftComp;
