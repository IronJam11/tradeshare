import React from 'react';
import { VictoryPie } from 'victory';

const Graph = ({ winPercentage }) => {
  // Dummy data for demonstration
  const data = [
    { x: 'Win', y: winPercentage },
    { x: 'Loss', y: 100 - winPercentage },
  ];

  return (
    <VictoryPie
      data={data}
      colorScale={['#00FF00', '#FF0000']} 
      innerRadius={80} 
      labelRadius={100} 
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      style={{ labels: { fill: 'white', fontSize: 12, fontWeight: 'bold' } }} 
      padding={20}  
    />
  );
};

export default Graph;
