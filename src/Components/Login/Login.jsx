import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Store } from "../../store/context";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { setToken, setLoggedIn} = useContext(Store)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDC7d3qLUkkIlrKFfWsQrqn1Xl-9uxeQFc",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(response.ok){
          const data = await response.json();
          setToken(data.idToken)
          localStorage.setItem('loginId', data.idToken)
          setLoggedIn(true)
          navigate('/')
      }else{
        alert('Login Failed')
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row
        className="justify-content-center align-items-center "
        style={{ height: "80vh" }}
      >
        <Col sm={6}>
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" > Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
