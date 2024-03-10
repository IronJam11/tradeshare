import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraders } from "../../features/tradersSlice";

// Dummy data for traders
const dummyTraders = [
  { id: 1, name: "Trader 1", winrate: 75, total_gain: 15000, average_return: 10, trades: 100 },
  { id: 2, name: "Trader 2", winrate: 80, total_gain: 20000, average_return: 12, trades: 120 },
  { id: 3, name: "Trader 3", winrate: 70, total_gain: 18000, average_return: 8, trades: 90 },
  { id: 4, name: "Trader 4", winrate: 85, total_gain: 22000, average_return: 15, trades: 150 },
  { id: 5, name: "Trader 5", winrate: 78, total_gain: 19000, average_return: 11, trades: 110 },
  { id: 6, name: "Trader 6", winrate: 72, total_gain: 16000, average_return: 9, trades: 80 },
  { id: 7, name: "Trader 7", winrate: 88, total_gain: 24000, average_return: 18, trades: 180 },
  { id: 8, name: "Trader 8", winrate: 82, total_gain: 21000, average_return: 13, trades: 130 },
  { id: 9, name: "Trader 9", winrate: 77, total_gain: 18500, average_return: 10.5, trades: 105 },
  { id: 10, name: "Trader 10", winrate: 73, total_gain: 17000, average_return: 9.5, trades: 85 },
];

const Traders = () => {
//   const dispatch = useDispatch();
//   const traders = useSelector((state) => state.traders.traders);

//   useEffect(() => {
//     // Assuming fetchTraders action fetches data from an API
//     // For dummy data, we'll just dispatch an action to store the dummyTraders
//     dispatch({ type: "SET_TRADERS", payload: dummyTraders });
//   }, [dispatch]);

  return (
    <div className="container mx-auto overflow-y-scroll h-[80vh]">
      <h1 className="text-3xl font-bold my-4">Traders</h1>
      <div className="grid grid-cols-3 gap-4">
        {dummyTraders.map((trader, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{trader.name}</h2>
            <p>Winrate: {trader.winrate}%</p>
            <p>Total Gain: ${trader.total_gain}</p>
            <p>Average Return: {trader.average_return}%</p>
            <p>Trades: {trader.trades}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traders;
