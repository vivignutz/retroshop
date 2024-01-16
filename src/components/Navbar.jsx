// Navbar.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/cart"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
