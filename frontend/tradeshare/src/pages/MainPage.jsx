import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Stocks from "../components/stocks/Stocks";
import Trades from "../components/trades/Trade";
import Sidebar from "../components/sidebar/Sidebar";
import Traders from "../components/traders/traders";
import Offerings from "../components/offerings/offerings";
import Graph from "../components/stocks/WinGraph";
import ProfitGraph from "../components/stocks/Profitpercentagegraph";
import LineChartComponent from "../components/stocks/LineGraph";
import StocksGraph from "../components/stocks/StocksGraph";

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

        <div className="w-[80%] mx-auto">
          {selectedOption === "home" && <Trades />}
          {selectedOption === "stocks" && <Stocks />}
          {selectedOption === "rankings" && <Traders />}
          {selectedOption === "offerings" && <Offerings />}
        </div>
      </div>
      <StocksGraph/>
    </div>
  );
};

export default MainPage;
