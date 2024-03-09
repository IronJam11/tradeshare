import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import RegisterForm from "./pages/Register";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainPage/>}/>
      <Route path="/" element={<Loginpage />} />
      <Route path="register/" element={<RegisterForm/>} />
    </Routes>
  );
}

export default App;
