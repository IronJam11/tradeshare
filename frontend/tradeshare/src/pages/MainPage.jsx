import React from "react";
import Navbar from "../components/Navbar";
import Stocks from "../components/stocks/Stocks";
import Trades from "../components/trades/Trade";
import StocksGraph from "../components/stocks/StocksGraph";
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Stocks />
      <StocksGraph />
      <Trades />
    </div>
  );
};

export default MainPage;
