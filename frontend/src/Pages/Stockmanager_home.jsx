import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stockmanager_home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-6">Stock Manager Home</h1>
      <div className="w-full max-w-md bg-gray-800 shadow-2xl rounded-lg p-8 space-y-4">
        <button
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => navigate('/addproduct')}
        >
          Add Product
        </button>
        <button
          className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => navigate('/addstock')}
        >
          Add Stocks
        </button>
        <button
          className="w-full px-6 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
          onClick={() => navigate('/productview')}
        >
          View Products
        </button>
        <button
          className="w-full px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
          onClick={() => navigate('/stocksview')}
        >
          View Stocks
        </button>
      </div>
    </div>
  );
}
