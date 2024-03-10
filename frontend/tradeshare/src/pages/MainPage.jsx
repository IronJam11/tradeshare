import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Stocks from "../components/stocks/Stocks";
import Trades from "../components/trades/Trade";
import Sidebar from "../components/sidebar/Sidebar";
import Traders from "../components/traders/traders";
import Offerings from "../components/offerings/offerings";

const MainPage = () => {
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

        <div className="flex-1 p-4">
          {selectedOption === "home" && <Trades />}
          {selectedOption === "stocks" && <Stocks />}
          {selectedOption === "rankings" && <Traders />}
          {selectedOption === "offerings" && <Offerings />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
