import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import RegisterForm from "./pages/Register";
import MainPage from "./pages/MainPage";
import Trader1 from "./pages/trader1";
import Payment from "./pages/Payment";
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainPage/>}/>
      <Route path="/" element={<Loginpage />} />
      <Route path="register/" element={<RegisterForm/>} />
      <Route path="payment/" element={<Payment />} />
      <Route path="trader1/" element={<Trader1 />} />
    </Routes>
  );
}

export default App;
