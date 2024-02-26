// routes.jsx

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import About from "./pages/About/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy.jsx";
import FAQ from "./pages/Faq/FAQ.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import ProductList from "./pages/ProductList/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ProductCard from "../src/components/ProductCard/ProductCard.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/return-policy" element={<ReturnPolicy />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:slug" element={<ProductCard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;
