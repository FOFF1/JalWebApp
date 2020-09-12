import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import brandIcon from "../images/brand-icon.jpg";
import ProductModal from "./ProductModal";

const ProductItem = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const prodDetail = props.prodDetail;

  return (
    <>
      <Card
        style={{
          width: "18rem",
          padding: "20px",
          display: "inline-grid",
          border: "none",
        }}
        onClick={() => setModalShow(true)}
      >
        <CardImg top width="100%" src={brandIcon} alt="Card image cap" />
        <CardBody>
          <CardTitle>{prodDetail.productTitle}</CardTitle>
          <CardSubtitle>{prodDetail.productSubTitle}</CardSubtitle>
          <CardText>
            {prodDetail.productDescription} is a wider card with supporting text
            below as a natural lead-in to additional content. This content is a
            little bit longer.
          </CardText>
          <br />
          <div>
            <Button>
              Price: <span>&#8377;</span>
              {prodDetail.productPrice}
            </Button>
          </div>
        </CardBody>
      </Card>
      <ProductModal
        product={prodDetail}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProductItem;
