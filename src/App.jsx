// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import AppRoutes from "./routes";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
          "http://localhost:3000/tokenIsValid",
          null,
          { headers: { "x-auth-token": token } }
        );

        if (tokenResponse.data) {
          const userRes = await axios.get("http://localhost:3000/user", {
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
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Announcement />
        <Header />
        <AppRoutes />
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
