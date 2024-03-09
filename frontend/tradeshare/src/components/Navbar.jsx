// Navbar.js

import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center">
        <div className="mr-4">
          <FaUser className="w-8 h-8" />
        </div>
        <div className="flex flex-col text-right">
          <span className="font-medium">John Doe</span>
          <span className="text-sm">john.doe@example.com</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <FaSearch className="w-6 h-6" />
        </div>
        <div className="relative">
          <FaBell className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
