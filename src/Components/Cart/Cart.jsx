import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Store } from "../../store/context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cartItems, clearCart} = useContext(Store);
  if(cartItems.length<1) return <div >Cart is Empty</div>
  const totalAmount = cartItems.reduce((acc, item)=> acc+item.price*item.quantity, 0)



  return (
    <Container className="my-5 d-flex flex-column " style={{ height: "100vh" }}>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItem
            key={item.id}
              image={item.imageUrl}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
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
          <Col md={3} >
            <div className=" fs-4">Total Amount : {totalAmount}</div>
            <div className="mt-4">
              <Button className="me-4">Checkout</Button>
              <Button variant="danger" onClick={clearCart} >Clear Cart</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
