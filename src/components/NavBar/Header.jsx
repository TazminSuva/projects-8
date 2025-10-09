import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-3 ml-4">
        <img
          src="/src/assets/assets/logo.png"
          alt="HERO.IO Logo"
          className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-2xl font-bold text-gray-800">HERO.IO</h1>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <Link
          to="/"
          className={`hover:text-indigo-600 ${
            location.pathname === "/" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/apps"
          className={`hover:text-indigo-600 ${
            location.pathname === "/apps" ? "text-indigo-600 font-semibold" : ""
          }`}
        >
          Apps
        </Link>

        <Link
          to="/installedApps"
          className={`hover:text-indigo-600 ${
            location.pathname === "/installedApps"
              ? "text-indigo-600 font-semibold"
              : ""
          }`}
        >
          Installation
        </Link>
      </nav>

      <a
        href="https://github.com/TazminSuva"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-8 px-5 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
      >
        Contribute
      </a>
    </header>
  );
};

export default Header;
