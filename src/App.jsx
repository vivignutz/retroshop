import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import Categories from "./components/Categories";
import ProductList from './components/ProductList';
import Footer from "./Footer";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">
            <img src="/logo.gif" className="logo shop" alt="Oldshop logo" />
        </Link>
        <NavbarComponent />
        <Header />

        <HeroSection />

        <div>
          {/* render the categories */}
          {[1, 2, 3, 4, 5, 6].map((categoryId) => (
            <Category key={categoryId} name={`Category ${categoryId}`} />
          ))}
        </div>

        <Footer />
      </div>

{/* another routes (if needed)
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>

        <h1>Old Shop</h1>
        <h3>Your shop for old stuffs.</h3>

        <p className="read-the-docs">
          Project under construction. Stay tuned! ;-)
        </p>
      </>
    */}
    </Router>
  );
}


export default App;
