import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrades } from "../../features/tradeSlice";

const Trades = () => {
  const dispatch = useDispatch();
  const trades = useSelector((state) => state.trades.trades);
  console.log(user)
  const loading = useSelector((state) => state.trades.loading);
  const error = useSelector((state) => state.trades.error);
  const currentUserData = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(currentUserData);


  useEffect(() => {
    dispatch(fetchTrades());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter trades based on currentUser.id
//   const userTrades = trades.filter(
//     (trade) => trade.user === currentUserData.id
//   );

  return (
    <div className="container mx-auto overflow-y-scroll h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Trades</h2>
      <div className="grid grid-cols-2 gap-4">
        {trades.map((trade) => (
          <div key={trade.id} className="bg-white p-4 shadow rounded">
            <p>{trade.user}</p>
            <h3 className="text-lg font-semibold">{trade.symbol}</h3>
            <p className="text-gray-600">
              {trade.type} - {trade.quantity} shares
            </p>
            <p className="text-gray-600">Price: {trade.price}</p>
            <p className="text-gray-600">
              Date: {new Date(trade.date).toLocaleString()}
            </p>
            <p className="text-gray-600">Status: {trade.status}</p>
            <p className="text-gray-600">
              Total Value: ${trade.quantity * trade.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trades;
