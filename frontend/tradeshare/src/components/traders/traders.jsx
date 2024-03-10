import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTraders } from "../../features/tradersSlice";

const Traders = () => {
  const dispatch = useDispatch();
  const traders = useSelector((state) => state.traders.traders);
  console.log(traders);

  useEffect(() => {
    dispatch(fetchTraders());
  }, [dispatch, fetchTraders]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Traders</h1>
      <div className="grid grid-cols-3 gap-4">
        {traders.map((trader) => (
          <div key={trader.id} className="bg-gray-200 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{trader.username}</h2>
            <p>Email: {trader.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traders;
