// CustomNavbar.jsx
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
//import axios from "axios";

const CustomNavbar = () => {
  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      fixed="top"
      style={{ zIndex: 9000 }}
      >

      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="logo-section">
            <Link to="/">
              <img src="/logo.gif" className="logo-shop"
              alt="Animated Logo" 
              />
            </Link>
          </div>

          <div className="brand-text ml-2">
            <span>Old Shop</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-left">
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
