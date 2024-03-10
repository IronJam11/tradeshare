import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StocksGraph = () => {
  const [timeSeriesData, setTimeSeriesData] = useState(null);
  const API_KEY = 'NLC71RZQZV62Q4RQ';
  const symbol = 'AAPL'; 
  const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTimeSeriesData(data['Time Series (Daily)']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const formattedData = timeSeriesData
    ? Object.entries(timeSeriesData).map(([date, values]) => ({
        date,
        highestPrice: parseFloat(values['2. high']),
        currentPrice: parseFloat(values['4. close']),
      }))
    : null;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Stocks</h2>
      {formattedData ? (
        <LineChart
          width={800}
          height={400}
          data={formattedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="highestPrice" stroke="#8884d8" name="Highest Price" />
          <Line type="monotone" dataKey="currentPrice" stroke="#82ca9d" name="Current Price" />
        </LineChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StocksGraph;
