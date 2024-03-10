import React from "react";
import { FaHome, FaChartLine, FaEye } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";

const Sidebar = ({ selectedOption, onOptionChange, isClient }) => {
  return (
    <div className="bg-[#202020] w-[250px]  h-[86vh]">
      <ul className="text-center text-lg text-white w-[200px ] flex flex-col gap-4 mt-4 ">
        <li
          className={`cursor-pointer mx-auto w-[150px] py-2 rounded-full bg-black  ${
            selectedOption === "home" ? "selected" : "bg-[#202020]"
          }`}
          onClick={() => onOptionChange("home")}
        >
          <div className="flex justify-evenly items-center">
            <FaHome />
            <h3>Home</h3>
          </div>
        </li>
        <li
          className={`cursor-pointer mx-auto w-[150px] py-2 rounded-full bg-black  ${
            selectedOption === "stocks" ? "selected" : "bg-[#202020]"
          }`}
          onClick={() => onOptionChange("stocks")}
        >
          <div className="flex gap-4 justify-evenly items-center">
            <FaChartLine />
            <h3>Market</h3>
          </div>
        </li>

        {/* Conditionally render the "Rankings" option based on whether the user is a client */}
        {isClient ? (
          <li
            className={`cursor-pointer mx-auto w-[150px] py-2 rounded-full bg-black  ${
              selectedOption === "rankings" ? "selected" : "bg-[#202020]"
            }`}
            onClick={() => onOptionChange("rankings")}
          >
            <div className="flex gap-4 justify-evenly items-center">
              <FaRankingStar />
              <h3>Rankings</h3>
            </div>
          </li>
        ) : (
          <li
            className={`cursor-pointer mx-auto w-[150px] py-2 rounded-full bg-black  ${
              selectedOption === "offerings" ? "selected" : "bg-[#202020]"
            }`}
            onClick={() => onOptionChange("offerings")}
          >
            <div className="flex gap-4 justify-evenly items-center">
              <FaRankingStar />
              <h3>Offerings</h3>
            </div>
          </li>
        )}

        <li
          className={`cursor-pointer mx-auto w-[150px] py-2 rounded-full bg-black  ${
            selectedOption === "wishlists" ? "selected" : "bg-[#202020]"
          }`}
          onClick={() => onOptionChange("wishlists")}
        >
          <div className="flex gap-4 justify-evenly items-center">
            <FaEye />
            <h3>Wishlists</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
