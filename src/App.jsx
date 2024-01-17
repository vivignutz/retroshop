// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomNavbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer/Footer";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <CustomNavbar />

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
