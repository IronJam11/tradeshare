import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Stocks from '../components/stocks/Stocks';
import Trades from '../components/trades/Trade';
import Sidebar from '../components/sidebar/Sidebar';
import LogoutButton from '../components/logout/Logout';

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState('home');

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
        <Sidebar selectedOption={selectedOption} onOptionChange={handleOptionChange} />

        {/* Content area */}
        <div className="flex-1 p-4">
          {/* Render the selected component based on the selectedOption state */}
          {selectedOption === 'home' && <Trades />}
          {selectedOption === 'stocks' && <Stocks />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
