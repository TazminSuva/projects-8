import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/NavBar/Header";
import Footer from "./components/NavBar/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Img from "./assets/assets/logo.png"; 

const App = () => {
  const location = useLocation(); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 sec
    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />

      <main className="flex-grow p-4 md:p-8 relative">
        {isLoading ? (
          <LoadingScreen logoSrc={Img} isLoading={isLoading} />
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
