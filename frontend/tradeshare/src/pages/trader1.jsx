import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Image1 from '../assets/images/design-trader.png';

import Image3 from '../assets/images/stocks.png';
import { useState } from 'react';

const Trader1 = () => {
    const [status, setStatus] = useState("Subscribe");
    function toggle()
    {
        if(status==="Subscribe")
        {
            setStatus("Unsubscribe")
 
        }
        else{
            setStatus("Subscribe")
        }
    }
    
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <div className="flex">
          <Sidebar />
          <div className="flex-grow ml-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div>
                <h2 className="text-black text-lg font-semibold">John Doe</h2>
                <p className="text-gray-500 text-sm">Beginner</p>
              </div>
              <button onClick={toggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">{status}</button>
            </div>
            <div className="grid grid-cols-2 3/4 1/4 gap-4 mt-4">
              <img src={Image1} alt="Image 1" className="rounded-lg" />
              
              <img src={Image3} alt="Image 3" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trader1;
