import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            dictum, metus vel feugiat dignissim, ex quam semper sem, vel luctus
            dolor ante auctor augue. Duis aliquet venenatis enim non accumsan.
            Duis feugiat quam a ex sagittis, vel consectetur arcu vestibulum.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            assumenda magni quia at animi atque unde, consequatur error expedita
            quod voluptate non, aliquam, cupiditate laborum culpa rem
            perferendis est saepe?
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://via.placeholder.com/600x400"
            alt="about us"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
