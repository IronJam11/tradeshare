import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Stocks from '../components/stocks/Stocks';
import Trades from '../components/trades/Trade';
import Sidebar from '../components/sidebar/Sidebar';
import LogoutButton from '../components/logout/Logout';

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState('trades');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar selectedOption={selectedOption} onOptionChange={handleOptionChange} />

        {/* Content area */}
        <div className="flex-1 p-4">
          {/* Render the selected component based on the selectedOption state */}
          {selectedOption === 'trades' && <Trades />}
          {selectedOption === 'stocks' && <Stocks />}
        </div>
      </div>

      {/* Logout button */}
      <LogoutButton />
    </div>
  );
};

export default MainPage;
