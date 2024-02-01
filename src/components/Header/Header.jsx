// Header.jsx
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import axios from "axios";

import styles from './Header.module.css';


const Header = () => {
  return (
    <Navbar className={styles.Header} expand="lg">
      <Navbar.Brand as={Link} to="/" className={`${styles.navbarBrand}`}>
        <div className="d-flex align-items-center brand-container">
          <img src="/logo.gif" className={styles.logoShop} alt="Animated Logo" />
          <div className={`brand-text ml-2 ${styles.brandText}`}>
            <span className="brand">Old Shop</span>
          </div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" className={`navbar-toggler ${styles.customNavbarToggler}`} />
      <Navbar.Collapse id="navbarNav" className={`${styles.navbarToggler}`}>
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
