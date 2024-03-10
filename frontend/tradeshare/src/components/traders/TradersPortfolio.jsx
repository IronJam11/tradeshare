import React from "react";

const TraderPortfolio = ({ trader }) => {
  return (
    <Layout>
      <div className="bg-gray-200 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">{trader.username}'s Portfolio</h2>
      </div>
    </Layout>
  );
};

export default TraderPortfolio;
