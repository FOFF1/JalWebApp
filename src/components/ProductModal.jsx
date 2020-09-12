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
import { useHistory } from "react-router-dom";

const ProductModal = (props) => {
  const history = useHistory();
  const [cartStorage, setCartStorage] = React.useContext(CounterContext);
  const [showAlert, setAlert] = React.useState(false);
  const addToCartStore = () => {
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
    setAlert((prev) => !prev);
    setTimeout(() => {
      setAlert((prev) => !prev);
    }, 2000);
  };

  const goToMyCart = () => history.push("/myCart");
  const [countCartItem, setCountCartItem] = React.useState(0);

  if (props.show && props.product !== undefined) {
    const alertElement = (
      <Alert variant="success">Successfully added to cart!</Alert>
    );
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="show-grid">
          {showAlert && alertElement}
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
                        onClick={() => setCountCartItem(countCartItem + 1)}
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
                  <Tab eventKey="details" title="Product Details"></Tab>
                  <Tab eventKey="review" title="Reviews">
                    You
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
