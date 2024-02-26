// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./pages/ProductList/Products.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import UserContext from "./context/UserContext";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import About from "./pages/About/About.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy.jsx";
import FAQ from "./pages/Faq/FAQ.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ProductList from "./pages/ProductList/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const App = () => {
  // State and useEffect to verify user login
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (!token) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      try {
        const tokenResponse = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/tokenIsValid`,
          null,
          { headers: { "x-auth-token": token } }
        );

        if (tokenResponse.data) {
          const userRes = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/user`,
            {
              headers: { "x-auth-token": token },
            }
          );

          setUserData({
            token,
            user: userRes.data,
          });
        }
      } catch (err) {
        console.error("Error checking logged in status:", err.message);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Announcement />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:slug" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/products" component={<ProductsList />} />
          <Route exact path="/products/:productName" component={<ProductCard />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
