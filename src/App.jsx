// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//components
import NavbarComponent from "./components/NavbarComponent/Navbar.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductList from "./components/ProductList.jsx"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        {/* <HeroSection /> */}
        <Categories />
        <Routes>
        {/*<Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />*/}
        <Route path="/products" element={<ProductList />} />
        {/*<Route path="/contact" element={<ContactForm />} />*/}
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
