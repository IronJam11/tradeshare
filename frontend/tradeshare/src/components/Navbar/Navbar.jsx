import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const currentUserData = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(currentUserData);

  return (
    <nav className="flex justify-between gap-8 text-white">
      {/* left nav */}
      <div className="w-[250px] flex gap-4 items-center px-6 py-4">
        <div>
          <FaUser />
        </div>
        <div className="flex-col">
          <div>
            <h3 className="text-lg text-[#5190D8]">{currentUser.username}</h3>
          </div>
          <div>
            <p className="text-sm text-[#666666]">{currentUser.email}</p>
          </div>
        </div>
      </div>
      {/* right nav */}
      <div className="bg-[#202020] w-full px-6 py-4 flex justify-between items-center">
        <div>
          <h3>Dashboard</h3>
        </div>
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              className="bg-black rounded-xl py-2 px-4 pr-10 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaBell />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
