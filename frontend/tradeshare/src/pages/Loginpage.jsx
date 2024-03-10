import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isClient, setIsClient] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const endpoint = formData.isClient ? "/client/login/" : "/trader/login/";
      const response = await axios.post(
        "http://localhost:8000" + endpoint,
        formData
      );
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));

      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-red-400 py-4 px-8 mb-8 rounded-md">
        <h1 className="text-xl font-semibold text-white">
          Login to Trade Share
        </h1>
      </div>
      <div className="mb-4">
        <button
          className={`font-bold py-2 px-4 rounded ${
            isClient ? "bg-black text-white" : ""
          }`}
          onClick={() => setIsClient(true)}
        >
          Client
        </button>
        <button
          className={` font-bold py-2 px-4 rounded ${
            !isClient ? "bg-black text-white" : ""
          }`}
          onClick={() => setIsClient(false)}
        >
          Trader
        </button>
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
