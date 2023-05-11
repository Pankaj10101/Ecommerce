import React, { useContext } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Store } from "../../../store/context";
function CustomNavbar() {

  const {cartItems} =  useContext(Store) 
  const totalQuantity = cartItems.reduce((acc, item)=> acc+item.quantity, 0)

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand><Link to='/' style={{ textDecoration: "none", color: "blue" }}>Ecommerce Website</Link></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-2" >
            <Link style={{textDecoration :"none", color: 'grey'}} to="/">Home</Link>
            <Link style={{textDecoration :"none", color: 'grey'}} to="/about">About</Link>
            <Link style={{textDecoration :"none", color: 'grey'}} to="/categories">Categories</Link>
          </Nav>
          <Nav>
            <Link to="/cart">
            <BiCart size={24} color="blue" />
              <span className="ms-1 ">{totalQuantity}</span>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
