// src/components/Trades.js
import React from 'react';

const dummyTrades = [
  { id: 1, symbol: 'AAPL', type: 'Buy', quantity: 10, price: 150, date: '2024-03-15T10:00:00', status: 'Executed', fee: 10 },
  { id: 2, symbol: 'GOOGL', type: 'Sell', quantity: 5, price: 250, date: '2024-03-16T11:00:00', status: 'Pending', fee: 5 },
  // Add more dummy data as needed
];

const Trades = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Trades</h2>
      <div className="grid grid-cols-2 gap-4">
        {dummyTrades.map(trade => (
          <div key={trade.id} className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">{trade.symbol}</h3>
            <p className="text-gray-600">{trade.type} - {trade.quantity} shares</p>
            <p className="text-gray-600">Price: ${trade.price}</p>
            <p className="text-gray-600">Date: {new Date(trade.date).toLocaleString()}</p>
            <p className="text-gray-600">Status: {trade.status}</p>
            <p className="text-gray-600">Fee: ${trade.fee}</p>
            {/* Calculate total trade value */}
            <p className="text-gray-600">Total Value: ${trade.quantity * trade.price}</p>
            {/* Display trade outcome */}
            {/* Display trade performance metrics */}
            {/* Provide trade actions */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trades;
