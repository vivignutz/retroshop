import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <div className="logo-section">
        <Link to="/">
          <img src="/logo.gif" className="logo-shop" alt="Animated Logo" />
        </Link>
      </div>

      <Navbar.Brand as={NavLink} to="/">
        Home
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>

        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>

        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
