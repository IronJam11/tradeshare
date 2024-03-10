import React, { useState, useEffect } from 'react';
import { VictoryPie, VictoryAnimation } from 'victory';

const ProfitGraph = ({ profitPercentage }) => {
  const [animationData, setAnimationData] = useState({ profitPercentage: 0 });

  useEffect(() => {
    setAnimationData({ profitPercentage });
  }, [profitPercentage]);

  return (
    <VictoryAnimation duration={1000} data={animationData}>
      {(newProps) => (
        <VictoryPie
          data={[{ x: 'Profit', y: newProps.profitPercentage }, { x: 'Loss', y: 100 - newProps.profitPercentage }]}
          colorScale={['#00FF00', '#FF0000']}
          innerRadius={80}
          labelRadius={100}
          labels={({ datum }) => `${datum.x}: ${datum.y}%`}
          style={{ labels: { fill: 'white', fontSize: 12, fontWeight: 'bold' } }}
          padding={20}
        />
      )}
    </VictoryAnimation>
  );
};

export default ProfitGraph;
