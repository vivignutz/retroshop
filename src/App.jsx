// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import AppRoutes from "./routes";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./pages/ProductList/Products.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx"
import UserContext from "./context/UserContext";

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
          const userRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            headers: { "x-auth-token": token },
          });
          
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
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/products/:product_name" element={<ProductCard />} />
        </Routes>
        <Announcement />
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
