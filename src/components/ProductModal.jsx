import React from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Alert,
} from "react-bootstrap";
import { FaCartPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CounterContext } from "../store/CartStore";
import { useHistory, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProductDescription from "./ProductDescription";
import FormComponent from "./Rating";

const ProductModal = (props) => {
  const history = useHistory();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [cartStorage, setCartStorage] = React.useContext(CounterContext);
  const [showAddAlert, setAddAlert] = React.useState(false);
  const [showEmptyAlert, setEmptyAlert] = React.useState(false);
  const [showLoginAlert, setLoginAlert] = React.useState(false);
  const checkIfAuthenticatedAddToCart = () => {
    if (!isAuthenticated) {
      setLoginAlert(true);
      return;
    }
    setCountCartItem((count) => count + 1);
  };
  const addToCartStore = () => {
    if (countCartItem <= 0) {
      setEmptyAlert(true);
      setTimeout(() => {
        setEmptyAlert((prev) => !prev);
      }, 2000);
      return;
    }

    let index = cartStorage.findIndex(
      (ele) => ele.title === props.product.productTitle
    );
    if (index >= 0) {
      let duplicateStore = [...cartStorage];
      duplicateStore[index] = {
        title: props.product.productTitle,
        total: countCartItem,
        price: props.product.productPrice,
        productImage: props.product.productImage,
      };
      setCartStorage(duplicateStore);
    } else {
      let newEntry = {
        title: props.product.productTitle,
        total: countCartItem,
        price: props.product.productPrice,
        productImage: props.product.productImage,
      };
      setCartStorage([...cartStorage, newEntry]);
    }
    setAddAlert((prev) => !prev);
    setTimeout(() => {
      setAddAlert((prev) => !prev);
    }, 2000);
  };

  const goToMyCart = () => history.push("/myCart");
  const [countCartItem, setCountCartItem] = React.useState(0);

  let options = { redirectUri: "http://localhost:3000/products" };
  if (props.show && props.product !== undefined) {
    const alertElement = (
      <Alert variant="success">Successfully added to cart!</Alert>
    );

    const emptyAlertElement = (
      <Alert variant="warning">Please add items to cart!</Alert>
    );

    const loginAlertElement = (
      <Alert variant="danger">
        Please <Link onClick={() => loginWithRedirect(options)}>login</Link>{" "}
        before adding items to cart!
      </Alert>
    );
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="show-grid">
          {showEmptyAlert && emptyAlertElement}
          {showAddAlert && alertElement}
          {showLoginAlert && loginAlertElement}
          <Container>
            <Row>
              <Col lg={6}>
                <Row>
                  <img
                    src={props.product.productImage}
                    alt="Kodak Brownie Flash B Camera"
                    className="image-responsive"
                    style={{ maxWidth: "100%" }}
                  />
                </Row>
                <br />
                <Row>
                  <Col lg={12}>
                    <center>
                      {" "}
                      <button
                        onClick={() =>
                          countCartItem > 0 &&
                          setCountCartItem(countCartItem - 1)
                        }
                        style={{
                          border: "none",
                          background: "none",
                          ouline: "none",
                          outlineStyle: "none",
                        }}
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
                      </button>
                      <Button onClick={addToCartStore}>
                        Add To Cart: ({countCartItem}) items
                      </Button>
                      <button
                        onClick={checkIfAuthenticatedAddToCart}
                        style={{
                          border: "none",
                          background: "none",
                          outline: "none",
                          outlineStyle: "none",
                        }}
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
                          <FaCartPlus />
                        </IconContext.Provider>
                      </button>
                    </center>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                  <Tab eventKey="details" title="Product Details">
                    <ProductDescription product={props.product} />
                  </Tab>
                  <Tab eventKey="review" title="Reviews">
                    <FormComponent />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={goToMyCart}>
            Go to Cart{" "}
            <IconContext.Provider
              value={{
                style: {
                  fontSize: "30px",
                  color: "yellow",
                  padding: "5px",
                },
              }}
            >
              <FaShoppingCart />
            </IconContext.Provider>
          </Button>
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "red", border: "none" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default ProductModal;
