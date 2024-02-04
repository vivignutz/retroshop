// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductList from "./components/ProductList/ProductList";
//import ProductCard from "./pages/ProductCard/ProductCard";
import Cart from "./pages/Cart/Cart";


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
