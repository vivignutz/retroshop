import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <NavbarComponent />

        <h1>Old Shop</h1> 
        <HeroSection />

        <Categories />

        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>   

        <Footer />

      </div>

    </Router>
  );
}

export default App;
