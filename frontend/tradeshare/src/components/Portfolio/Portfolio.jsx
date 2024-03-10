import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Stocks from "../stocks/Stocks";
import Trades from "../trades/Trade";
import Traders from "../traders/traders";
import Offerings from "../offerings/offerings";

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedOption, setSelectedOption] = useState("home");
  const currentUserData = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(currentUserData);

  useEffect(() => {
    // Check if currentUser exists and is_client field is true
    if (currentUser && currentUser.is_client === true) {
      setIsClient(true);
    }
  }, [currentUser]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          isClient={isClient}
        />

        <div className="w-[80%] mx-auto">
          {selectedOption === "home" && <Trades />}
          {selectedOption === "stocks" && <Stocks />}
          {selectedOption === "rankings" && <Traders />}
          {selectedOption === "offerings" && <Offerings />}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
