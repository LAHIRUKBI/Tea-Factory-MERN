import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Buttons positioned vertically at the top-right */}
      <div className="absolute top-4 right-4 flex flex-col space-y-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300"
          onClick={() => navigate('/employeeregister')}
        >
          Register Employee
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
          onClick={() => navigate('/employeeview')}
        >
          View Employees
        </button>
      </div>
    </div>
  );
}
