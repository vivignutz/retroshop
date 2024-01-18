// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//components
import NavbarComponent from "@navbar";
import Categories from "@categories";
import Footer from "@footer"
import ProductList from "@products"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        {/* <HeroSection /> */}
        <Categories />
        <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about-us" element={<AboutUs />} />*/}
        <Route path="/products" element={<ProductList />} />
        {/*<Route path="/contact" element={<ContactForm />} />*/}
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
