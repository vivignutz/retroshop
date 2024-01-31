// Header.jsx
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import axios from "axios";

import styles from './Header.module.css';


const Header = () => {
  return (
    <Navbar
      className={styles.Header}>
        <Navbar.Brand as={Link} to="/" className={`${styles.navbarBrand}`}>
          <div className="d-flex align-items-center brand-container">
            <img src="/logo.gif" className={styles.logoShop} alt="Animated Logo" />
            <div className={`brand-text ml-2 ${styles.brandText}`}>
            <span className="brand">Old Shop</span>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <button
          className={`navbar-toggler ${styles.customNavbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-toggler">
          <Nav className={`ml-auto ${styles.navbarNav}`}>
            <Nav.Link as={Link} to="/" className={styles.customLink}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about-us" className={styles.customLink}>
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/products" className={styles.customLink}>
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className={styles.customLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
