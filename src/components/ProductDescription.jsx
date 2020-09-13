import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductDescription = ({product}) => {
  return (
    <Card style={{ borderTop: "none" }}>
      <Card.Body>
  <Card.Title>{product.productTitle}</Card.Title>
        <Card.Text>
        {product.productDescription} With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="outline-info" disabled>
        <span>&#8377;</span> {product.productPrice}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDescription;
