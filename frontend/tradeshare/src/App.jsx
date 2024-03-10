import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import RegisterForm from "./pages/Register";
import MainPage from "./pages/MainPage";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainPage />} />
      <Route path="/" element={<Loginpage />} />
      <Route path="register/" element={<RegisterForm />} />
      <Route path="/tdash" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
