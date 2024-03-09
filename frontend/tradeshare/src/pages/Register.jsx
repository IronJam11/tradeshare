import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    pan_card: '',
    isClient: true, // Default to client registration
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const endpoint = formData.isClient ? '/client/register/' : '/trader/register/';
      const response = await axios.post('http://localhost:8000' + endpoint, formData);
      console.log(response.data);
      // Redirect to dashboard upon successful registration
      if (response.status === 201) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10 p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <button
          className={` font-bold py-2 px-4 rounded ${
            formData.isClient ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''
          }`}
          onClick={() => setFormData({ ...formData, isClient: true })}
        >
          Client
        </button>
        <button
          className={`font-bold py-2 px-4 rounded ${
            !formData.isClient ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''
          }`}
          onClick={() => setFormData({ ...formData, isClient: false })}
        >
          Trader
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age:
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required={!formData.isClient} // Age is required only for trader registration
            disabled={formData.isClient} // Disable age field for client registration
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pan_card">
            PAN Card:
          </label>
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="text"
            id="pan_card"
            name="pan_card"
            value={formData.pan_card}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
