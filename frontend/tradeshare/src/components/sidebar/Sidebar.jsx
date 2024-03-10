import React from "react";

const Sidebar = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="bg-gray-200 w-1/3 p-4">
      <h3 className="text-lg font-bold mb-4">Sidebar</h3>
      <ul>
        <li
          className={selectedOption === "home" ? "selected" : ""}
          onClick={() => onOptionChange("home")}
        >
          Home
        </li>
        <li
          className={selectedOption === "stocks" ? "selected" : ""}
          onClick={() => onOptionChange("stocks")}
        >
          Stocks
        </li>
        <li
          className={selectedOption === "ranikngs" ? "selected" : ""}
          onClick={() => onOptionChange("rankings")}
        >
          Rankings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
