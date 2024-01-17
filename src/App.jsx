// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent  from "@navbar";
//import HeroSection from "../HeroSection";
//import Categories from "../Categories";
//import ProductList from "./ProductList";
import Footer from "@footer";
import './App.css';


function App() {
  return (
    <Router>
      <div>

        <NavbarComponent />
{/*     <HeroSection />
        <Categories />
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>   
  */}
        <Footer />

      </div>

    </Router>
  );
}

export default App;
