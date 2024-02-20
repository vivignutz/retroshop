// App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import AppRoutes from "./routes";
import Announcement from "./components/Announcement/Announcement";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [backendData, setBackendData] = useState(null);

  // // Accessing environment variable directly:
  // const apiProxy = import.meta.env.VITE_API_PROXY;

  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_PROXY}/backend-route`);
        setBackendData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBackendData();
  }, []);

  return (
      <div>
        <Announcement />
        <Header />
        <AppRoutes />
        <Footer />
      </div>
  );
}

export default App;
