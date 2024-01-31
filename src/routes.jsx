// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import ProductCard from "./pages/ProductCard/ProductCard";
//import App from "./App";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<ProductCard />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
