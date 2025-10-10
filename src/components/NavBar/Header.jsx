import React from "react";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import heroLogo from "../../assets/assets/logo.png"; 

const Header = () => {
  return (
    <header className="bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2">
        <img
          src={heroLogo} 
          alt="HERO.IO Logo"
          className="w-14 h-14 object-contain"
        />
        <h1 className="text-xl font-bold text-gray-800">HERO.IO</h1>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <Link to="/" className="text-indigo-600   pb-1">Home</Link>
        <Link to="/apps" className="text-indigo-600   pb-1">Apps</Link>
        <Link to="/installedApps" className="text-indigo-600   pb-1">Installation</Link>
      </nav>

  <a
  href="https://github.com/TazminSuva"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center gap-2"
>
  <FaGithub className="w-4 h-4" />
  Contribute
</a>
    </header>
  );
};

export default Header;
