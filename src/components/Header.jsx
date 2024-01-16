// Header.jsx
import React from "react";
import NavbarComponent from "./components/Navbar";

const Header = () => {
  return (
    <header>
      <img src="/logo.gif" alt="Animated Logo" />
      <div className="top-section">
        <h1>Old Shop</h1>
      </div>


      <NavbarComponent />
    </header>
  );
};

export default Header;
