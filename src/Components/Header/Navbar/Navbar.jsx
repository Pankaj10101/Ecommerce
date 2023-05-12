import React, { useContext } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Store } from "../../../store/context";
function CustomNavbar() {

  const {cartItems} =  useContext(Store) 
  const totalQuantity = cartItems.reduce((acc, item)=> acc+item.quantity, 0)

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand><NavLink to='/' style={{ textDecoration: "none", color: "blue" }}>Ecommerce Website</NavLink></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-2" >
            <NavLink style={{textDecoration :"none", color: 'grey'}} to="/">Home</NavLink>
            <NavLink style={{textDecoration :"none", color: 'grey'}} to="/about">About</NavLink>
            <NavLink style={{textDecoration :"none", color: 'grey'}} to="/contact-us">Contact Us</NavLink>
            <NavLink style={{textDecoration :"none", color: 'grey'}} to="/Store">Store</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/cart">
            <BiCart size={24} color="blue" />
              <span className="ms-1 ">{totalQuantity}</span>
            </NavLink>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
