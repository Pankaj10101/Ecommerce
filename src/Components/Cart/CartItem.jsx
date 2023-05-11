import React, { useContext } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Store } from '../../store/context';

function CartItem({ image, name, price, quantity, id }) {
const {increaseQty, decreaseQty, removeFromCart} = useContext(Store)


  return (
    <Row className="align-items-center py-2 border-top">
      <Col xs={3}>
        <Image src={image} fluid style={{width:100, borderRadius: 5}} />
      </Col>
      <Col xs={3}>{name}</Col>
      <Col xs={2}>{price}</Col>
      <Col xs={2}>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="outline-secondary" className="px-2" onClick={()=>decreaseQty(id)}>
            -
          </Button>
          <span className="mx-2">{quantity}</span>
          <Button variant="outline-secondary" className="px-2" onClick={()=>increaseQty(id)} >
            +
          </Button>
        </div>
      </Col>
      <Col xs={2}>
        <Button variant="danger" className="px-3" onClick={()=> removeFromCart(id)}>
          Remove
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
