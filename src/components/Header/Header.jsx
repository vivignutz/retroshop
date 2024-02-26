// Header.jsx

import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.css";


const Header = () => {
  return (
    <Navbar className={`${styles.Header} sticky-top`} expand="lg">
      <Navbar.Brand as={Link} to="/" className={`${styles.navbarBrand}`}>
        <div className="d-flex align-items-center brand-container">
          <img src="/logo.gif" className={styles.logoShop} alt="Animated Logo" />
          <div className={`brand-text ml-2 ${styles.brandText}`}>
            <span className="brand">Oldshop</span>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" className={`navbar-toggler ${styles.customNavbarToggler}`} />
      <Navbar.Collapse id="navbarNav" className={`${styles.navbarToggler}`}>
        <Nav className={`${styles.navbarNav}`}>
          <Nav.Link as={Link} to="/" className={styles.customLink}>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/about" className={styles.customLink}>
            About
          </Nav.Link>

          <Nav.Link as={Link} to="/products" className={styles.customLink}>
            Products
          </Nav.Link>

          <Nav.Link as={Link} to="/contact" className={styles.customLink}>
            Contact
          </Nav.Link>
        </Nav>

        <Nav className={`${styles.navbarAuth}`}>
          {/** Login, signup and cart buttons */}
          <Nav className={styles.authLinks}>
            <Nav.Link as={Link} to="/login" className={styles.customAuthLink}>
              <FontAwesomeIcon icon={faUser} className={styles.link} />
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/signup" className={styles.customAuthLink}>
              <FontAwesomeIcon icon={faSignInAlt} className={styles.link} />
              Signup
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className={styles.customAuthLink}>
              <FontAwesomeIcon icon={faShoppingCart} className={styles.link} />
              Cart
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
