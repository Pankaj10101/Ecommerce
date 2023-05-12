import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Store } from "../../store/context";

const ProductPage = () => {
  const { id } = useParams();
  const { items } = useContext(Store);

  const product = items.find((item) => item.id === parseInt(id));

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">{product.title}</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Carousel>
            <Carousel.Item key={id}>
              <img
                className="d-block w-75"
                src={product.imageUrl}
                alt={product.title}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} className="mb-4">
          <h4>{product.price} Rs</h4>
          <Col md={6} className="mb-4">
            <h4>Reviews:</h4>
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                ipsum dolor error nemo repudiandae culpa quibusdam et laboriosam
                aliquam fuga odit labore, aperiam atque excepturi autem ipsa!
                Sit, ullam ipsum.
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
