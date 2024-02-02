// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductCard from "./pages/ProductCard/ProductCard";
import Cart from "./pages/Cart/Cart";
//import App from "./App";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<ProductCard />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
