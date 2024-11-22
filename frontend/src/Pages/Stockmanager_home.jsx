import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stockmanager_home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Stock Manager Home</h1>
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 space-y-4">
        <button
          className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => navigate('/addproduct')}
        >
          Add Product
        </button>
        <button
          className="w-full px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => navigate('/addstock')}
        >
          Add Stocks
        </button>
        <button
          className="w-full px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
          onClick={() => navigate('/productview')}
        >
          View Products
        </button>
        <button
          className="w-full px-6 py-3 bg-purple-500 text-white font-medium rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
          onClick={() => navigate('/stocksview')}
        >
          View Stocks
        </button>
      </div>
    </div>
  );
}
