import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Store } from "../../store/context";

function ProductCard({ image, name, price, id, prod }) {

  const {addToCart} = useContext(Store)
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={image} style={{ width: '200px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} ₹</Card.Text>
        <Button variant="primary" onClick={()=>{addToCart(prod, id)}} >Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
