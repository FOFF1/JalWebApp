import React from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Card,
} from "react-bootstrap";
import brandIcon from "../images/brand-icon.jpg";
import { FaCartPlus, FaMinus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CounterContext } from "../store/CartStore";

const ProductModal = (props) => {
  const [cartStorage, setCartStorage] = React.useContext(CounterContext);
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
      };
      setCartStorage(duplicateStore);
    } else {
      let newEntry = {
        title: props.product.productTitle,
        total: countCartItem,
        price: props.product.productPrice,
      };
      setCartStorage([...cartStorage, newEntry]);
    }
  };
  const [countCartItem, setCountCartItem] = React.useState(0);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col lg={6}>
              <Row>
                <img
                  src={brandIcon}
                  alt="Kodak Brownie Flash B Camera"
                  className="image-responsive"
                />
              </Row>
              <br />
              <Row>
                <Col lg={12}>
                  <center>
                    {" "}
                    <button
                      onClick={() =>
                        countCartItem > 0 && setCountCartItem(countCartItem - 1)
                      }
                      style={{ border: "none", background: "none" }}
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
                      style={{ border: "none", background: "none" }}
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
