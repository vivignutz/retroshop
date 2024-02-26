// Header.jsx

import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.css";


const Header = () => {

  // State to control whether the navbar is expanded
  const [expanded, setExpanded] = useState(false);

  // Close the expanded navbar after an item is clicked
  const handleItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar className={`${styles.Header} sticky-top`} expand="lg" expanded={expanded}>
      <Navbar.Brand as={Link} to="/" className={`${styles.navbarBrand}`}>
        <div className="d-flex align-items-center brand-container">
          <img src="/logo.gif" className={styles.logoShop} alt="Animated Logo" />
          <div className={`brand-text ml-2 ${styles.brandText}`}>
            <span className="brand">Oldshop</span>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="navbarNav"
        className={`navbar-toggler ${styles.customNavbarToggler}`}
        onClick={() => setExpanded(!expanded)}
      />

      <Navbar.Collapse
        id="navbarNav"
        className={`${styles.navbarToggler}`}>
                  
        <Nav className={`${styles.navbarNav}`}>
          <Nav.Link
              as={Link}
              to="/"
              className={styles.customLink}
              onClick={handleItemClick}
            >
              Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/about"
            className={styles.customLink}
            onClick={handleItemClick}
          >
            About
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/products"
            className={styles.customLink}
            onClick={handleItemClick}
          >
            Products
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/contact"
            className={styles.customLink}
            onClick={handleItemClick}
          >
            Contact
          </Nav.Link>
        </Nav>

        {/** Login, signup and cart buttons */}
        <Nav className={`${styles.navbarAuth}`}>
          <Nav className={styles.authLinks}>
            <Nav.Link
              as={Link}
              to="/login"
              className={styles.customAuthLink}
              onClick={handleItemClick}
            >
              <FontAwesomeIcon icon={faUser} className={styles.link} />
              Login
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/signup"
              className={styles.customAuthLink}
              onClick={handleItemClick}
            >
              <FontAwesomeIcon icon={faSignInAlt} className={styles.link} />
              Signup
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className={styles.customAuthLink}
              onClick={handleItemClick}
            >
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
