// App.jsx

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
//import Login from "./components/Auth/Login";
//import Signup from "./components/Auth/Signup";
import AppRoutes from "./routes";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SliderSection from "./components/Slider/SliderSection";
import Categories from "./components/Categories/Categories";
import UserContext from "./context/UserContext";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3001/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3001/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Announcement />
        <Header />
        <SliderSection />
        <Categories />
        <AppRoutes />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
