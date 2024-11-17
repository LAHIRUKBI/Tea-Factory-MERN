import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Home</h1>
        <div className="space-y-4">
          <button
            className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
            onClick={() => navigate('/employeeregister')}
          >
            Register Employee
          </button>
          <button
            className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
            onClick={() => navigate('/staffregister')}
          >
            Register Staff
          </button>
          <button
            className="w-full px-6 py-3 bg-yellow-500 text-white font-medium rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition duration-300"
            onClick={() => navigate('/stockmanagerregister')}
          >
            Register Stock Manager
          </button>
          <button
            className="w-full px-6 py-3 bg-red-500 text-white font-medium rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300"
            onClick={() => navigate('/vehiclesregister')}
          >
            Register Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}
