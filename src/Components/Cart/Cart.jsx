import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Store } from "../../store/context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const productsArr = useContext(Store);
  return (
    <Container className="my-5 d-flex flex-column " style={{ height: "100vh" }}>
      <div>
        {productsArr.map((item) => {
          return (
            <CartItem
              image={item.imageUrl}
              name={item.title}
              price={item.price}
              quantity={2}
            />
          );
        })}
      </div>
      <div>
        <Row className="d-flex justify-content-between mt-5">
          <Col md={3}>
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Back to Shopping
            </Link>
          </Col>
          <Col md={2}>
            <div>Total Amount : 100</div>
            <div className="mt-4">
              <Button>Checkout</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
