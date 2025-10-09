import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="mb-4 text-2xl font-extrabold text-indigo-400">HERO.IO</div>

      <div className="flex justify-center gap-6 mb-6 text-gray-400 text-lg">
        <FaFacebook className="hover:text-white transition" />
        <FaTwitter className="hover:text-white transition" />
        <FaInstagram className="hover:text-white transition" />
      </div>

      <p className="text-gray-400 text-sm">
        Copyright © 2025 — All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
