import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandIcon from "../images/brand-icon.jpg";
import { Button } from "reactstrap";
import {
  FaCartPlus,
  FaMinus,
  FaArrowCircleLeft,
  FaComment,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Progress } from "reactstrap";
import ProductLeftComp from "./ProductLeftComp";

const ProductDetail = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [countCartItem, setCountCartItem] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(props.prodDetails.length);
    setProductItems(props.prodDetails);
    setIsLoaded(true);
  }, []);

  //setProductItems((prevItem) => [...prevItem, ...props.prodDetails]);

  if (isLoaded) {
    console.log("ProductPage " + props.match);
    console.log(props.match);
    const productPicked = productItems.find((p) => p.productTitle === "Jal1");
    console.log(productPicked + " here");
    return (
      <div>
        <Link to="/products" onClick={props.showProducts}>
          <IconContext.Provider
            value={{
              style: {
                fontSize: "35px",
                color: "rgb(0, 123, 255)",
                padding: "5px",
              },
            }}
          >
            <FaArrowCircleLeft />
          </IconContext.Provider>
          Back to Products
        </Link>

        <div className="container" id="product-section">
          <div className="row">
            <div className="col-md-6">
              <img
                src={brandIcon}
                alt="Kodak Brownie Flash B Camera"
                className="image-responsive"
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h1>{productPicked.productTitle}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 bottom-rule">
                  <h2 className="product-price">
                    <span>&#8377;</span>
                    {productPicked.productPrice}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 bottom-rule">
                  <h4 className="description">
                    {productPicked.productDescription}
                  </h4>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 bottom-rule">
                  <span
                    onClick={() =>
                      countCartItem > 0 && setCountCartItem(countCartItem - 1)
                    }
                  >
                    <IconContext.Provider
                      value={{
                        style: {
                          fontSize: "35px",
                          color: "rgb(0, 123, 255)",
                          padding: "5px",
                        },
                      }}
                    >
                      <FaMinus />
                    </IconContext.Provider>
                  </span>
                  <Button>Add To Cart: ({countCartItem}) items</Button>
                  <span onClick={() => setCountCartItem(countCartItem + 1)}>
                    <IconContext.Provider
                      value={{
                        style: {
                          fontSize: "35px",
                          color: "rgb(0, 123, 255)",
                          padding: "5px",
                        },
                      }}
                    >
                      <FaCartPlus />
                    </IconContext.Provider>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row" style={{ marginLeft: "20px" }}>
          <div className="col-md-6">
            <h3>Rating</h3>
          </div>
        </div>
        <div className="row" style={{ marginLeft: "20px" }}>
          <div className="col-md-6">
            <Progress multi>
              <Progress bar value="15">
                Meh
              </Progress>
              <Progress bar color="success" value="35">
                Wow!
              </Progress>
              <Progress bar color="warning" value="25">
                25%
              </Progress>
              <Progress bar color="danger" value="25">
                LOOK OUT!!
              </Progress>
            </Progress>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row" style={{ marginLeft: "20px" }}>
          <div className="col-md-6">
            <h3>Leave Review</h3>
          </div>
        </div>

        <div className="row" style={{ marginLeft: "20px" }}>
          <div className="col-md-10">
            <span>
              <textarea style={{ width: "90%" }} />
              <IconContext.Provider
                value={{
                  style: {
                    fontSize: "35px",
                    color: "rgb(0, 123, 255)",
                    padding: "5px",
                    verticalAlign: "unset",
                  },
                }}
              >
                <FaComment />
              </IconContext.Provider>
            </span>
          </div>
        </div>

        <div className="conatiner">
          <div className="row">
            <div className="col-md-6">
              <ProductLeftComp brandIcon={brandIcon} />
            </div>
            <div className="col-md-6">
              <ProductLeftComp brandIcon={brandIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default ProductDetail;
