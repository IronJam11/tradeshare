import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import LogoutButton from "../logout/Logout";
import { useState } from "react";

const Navbar = () => {
  const currentUserData = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(currentUserData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
        <div className="flex items-center gap-4 relative">
          {/* Search dropdown */}
          <div>
            <input
              type="text"
              className="bg-black rounded-xl py-2 px-4 pr-10 focus:outline-none focus:border-blue-500"
              placeholder="Search..."
              onClick={toggleDropdown}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {/* Dropdown content */}
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
                <p className="text-white px-4 py-2"> <a href="http://localhost:5173/trader1/">Trader 1 </a></p>
                <p className="text-white px-4 py-2"> <a href="http://localhost:5173/trader2/">Trader 2 </a></p>
                
              </div>
            )}
          </div>
          <FaBell />
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
