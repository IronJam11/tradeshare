import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dummyData = [
  { date: '2024-03-01', price: 100, highest: 105 },
  { date: '2024-03-02', price: 105, highest: 90 },
  { date: '2024-03-03', price: 105, highest: 135 },
  { date: '2024-03-04', price: 69, highest: 80 },
  { date: '2024-03-05', price: 120, highest: 125 },
  { date: '2024-03-06', price: 75, highest: 90 },
  { date: '2024-03-07', price: 83, highest: 95 },
  { date: '2024-03-08', price: 105, highest: 120 },
  { date: '2024-03-09', price: 140, highest: 145 },
  { date: '2024-03-10', price: 145, highest: 130 },
];

const LineChartComponent = ({highestPrice, currentPrice}) => {
  return (
    <LineChart width={400} height={300} data={dummyData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <Line type="monotone" dataKey="highest" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartComponent;
