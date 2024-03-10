import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraders } from "../../features/tradersSlice";

const Traders = () => {
  const dispatch = useDispatch();
  const traders = useSelector((state) => state.traders.traders);

  useEffect(() => {
    dispatch(fetchTraders());
  }, [dispatch]);

  const updateTrader = async (id, newData) => {
    console.log(id, newData);
    try {
      const response = await fetch(`http://localhost:8000/traders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error("Failed to update trader");
      }
      dispatch(fetchTraders());
    } catch (error) {
      console.error("Error updating trader:", error);
    }
  };

  return (
    <div className="container mx-auto overflow-y-scroll h-[80vh]">
      <h1 className="text-3xl font-bold my-4">Traders</h1>
      <div className="grid grid-cols-3 gap-4">
        {traders.map((trader, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{trader.username}</h2>
            <h2 className="text-xl font-semibold">{trader.id}</h2>
            <p>Winrate: {trader.winrate}%</p>
            <p>Total Gain: ${trader.total_gain}</p>
            <p>Average Return: {trader.average_return}%</p>
            <p>Trades: {trader.total_trades}</p>
            <button
              onClick={() =>
                updateTrader(trader.id, {
                  winrate: 75,
                  total_gain: 1500,
                  average_return: 7,
                  trades: 30,
                })
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Trader
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traders;
