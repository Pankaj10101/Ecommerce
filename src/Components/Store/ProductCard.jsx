import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Store } from "../../store/context";
import { Link } from "react-router-dom";

function ProductCard({ image, name, price, id, prod }) {
  const { addToCart } = useContext(Store);
  return (
    <Card style={{ width: "200px" }}>
      <Link to={`/store/${id}`}>
        <Card.Img variant="top" src={image} style={{ width: "200px" }} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/store/${id}`}>{name}</Link>
        </Card.Title>
        <Card.Text>{price} ₹</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            addToCart(prod, id);
          }}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
