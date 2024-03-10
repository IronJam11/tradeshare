import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Stocks = () => {
  const [timeSeriesData, setTimeSeriesData] = useState(null);
  const API_KEY = 'NLC71RZQZV62Q4RQ';
  const symbol = 'AAPL'; 
  const endpoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

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

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Stocks</h2>
      {timeSeriesData ? (
        <LineChart
          width={800}
          height={400}
          data={Object.entries(timeSeriesData).map(([date, values]) => ({ date, ...values }))}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="1. open" stroke="#8884d8" />
          <Line type="monotone" dataKey="2. high" stroke="#82ca9d" />
          <Line type="monotone" dataKey="3. low" stroke="#ffc658" />
          <Line type="monotone" dataKey="4. close" stroke="#ff7300" />
        </LineChart>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stocks;
