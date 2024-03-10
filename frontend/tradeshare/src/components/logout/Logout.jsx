// src/components/LogoutButton.js
import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
