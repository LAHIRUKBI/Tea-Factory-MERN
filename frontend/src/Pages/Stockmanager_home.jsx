import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stockmanager_home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Stock Manager Home</h1>
      <div className="space-y-4">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => navigate('/addproduct')}
        >
          Add Product
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => navigate('/addstock')}
        >
          Add Stocks
        </button>
      </div>
    </div>
  );
}
