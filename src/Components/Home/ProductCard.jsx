import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard({ image, name, price }) {
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={image} style={{ width: '200px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} ₹</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
