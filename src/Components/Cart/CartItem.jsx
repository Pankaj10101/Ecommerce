import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';

function CartItem({ image, name, price, quantity }) {
  return (
    <Row className="align-items-center py-2 border-top">
      <Col xs={3}>
        <Image src={image} fluid style={{width:100, borderRadius: 5}} />
      </Col>
      <Col xs={3}>{name}</Col>
      <Col xs={2}>{price}</Col>
      <Col xs={2}>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="outline-secondary" className="px-2">
            -
          </Button>
          <span className="mx-2">{quantity}</span>
          <Button variant="outline-secondary" className="px-2">
            +
          </Button>
        </div>
      </Col>
      <Col xs={2}>
        <Button variant="danger" className="px-3">
          Remove
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
