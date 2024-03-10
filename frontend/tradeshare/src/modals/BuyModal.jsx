import React from "react";

const BuyModal = ({ show, onClose, onSubmit, stock }) => {
  const [quantity, setQuantity] = React.useState("");
  const [totalPrice, setTotalPrice] = React.useState("");

  const handleBuySubmit = () => {
    onSubmit({
      quantity: quantity,
      price: totalPrice,
      stock_symbol: stock.symbol,
    });
    setQuantity("");
    setTotalPrice("");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-1/2 rounded-lg shadow-lg p-8">
        <span
          className="absolute top-0 right-0 cursor-pointer text-gray-700"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">Buy {stock.name}</h2>
        <p>Stock Symbol: {stock.symbol}</p>
        <div className="mt-4">
          <label className="block mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
              setTotalPrice(e.target.value * stock.c);
            }}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Quantity"
          />
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Total Price: ${totalPrice}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleBuySubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Buy
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyModal;
