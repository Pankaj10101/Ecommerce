import React from 'react';
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Store } from '../../store/context';
import ProductCard from './ProductCard';

const Home = () => {
  const {items} = useContext(Store);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Our Products</h1>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard
              image={item.imageUrl}
              name={item.title}
              price={item.price}
              id={item.id}
              prod={item}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
