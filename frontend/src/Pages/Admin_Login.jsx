import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Admin_Login() {
  const [adminCredentials, setAdminCredentials] = useState({
    name: '',
    institutionID: '',
    nic: '',
  });
  const [error, setError] = useState('');
  const [companyCredentials, setCompanyCredentials] = useState({
    companyNumber: '',
    name: '',
    section: '',
  });
  const [companyError, setCompanyError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const { name, institutionID, nic } = adminCredentials;
    if (name === 'lahiru' && institutionID === '2305423054' && nic === '200008104348') {
      navigate('/adminhome');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  const handleCompanyLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/employees/login', companyCredentials);
      console.log('Response from company login:', response.data); // Add this for debugging
  
      if (response.data.success) {
        // If login is successful, navigate to the home page or another page
        navigate('/'); // Adjust navigation based on your routes
      } else {
        setCompanyError(response.data.message); // Use the message returned from the backend
      }
    } catch (err) {
      console.error('Error during login:', err);
      setCompanyError('Invalid company credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Login Container */}
      <div className="flex space-x-8 w-full max-w-6xl justify-center">
        {/* Admin Login Form */}
        <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl text-center font-semibold mb-6 text-blue-600">Administrator Login</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleAdminLogin}>
            <div className="mb-4">
              <label htmlFor="adminName" className="block text-sm font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="adminName"
                value={adminCredentials.name}
                onChange={(e) => setAdminCredentials({ ...adminCredentials, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="institutionID" className="block text-sm font-medium mb-2">
                Institution ID:
              </label>
              <input
                type="text"
                id="institutionID"
                value={adminCredentials.institutionID}
                onChange={(e) => setAdminCredentials({ ...adminCredentials, institutionID: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nic" className="block text-sm font-medium mb-2">
                NIC Number:
              </label>
              <input
                type="text"
                id="nic"
                value={adminCredentials.nic}
                onChange={(e) => setAdminCredentials({ ...adminCredentials, nic: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Admin Login
            </button>
          </form>
        </div>
  
        {/* Company Login Form */}
        <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl text-center font-semibold mb-6 text-green-600">Staff Login</h2>
          {companyError && <div className="text-red-500 mb-4">{companyError}</div>}
          <form onSubmit={handleCompanyLogin}>
            <div className="mb-4">
              <label htmlFor="companyNumber" className="block text-sm font-medium mb-2">
                Company Number:
              </label>
              <input
                type="text"
                id="companyNumber"
                value={companyCredentials.companyNumber}
                onChange={(e) => setCompanyCredentials({ ...companyCredentials, companyNumber: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="companyName"
                value={companyCredentials.name}
                onChange={(e) => setCompanyCredentials({ ...companyCredentials, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="section" className="block text-sm font-medium mb-2">
                Section:
              </label>
              <select
                id="section"
                value={companyCredentials.section || ''}
                onChange={(e) => setCompanyCredentials({ ...companyCredentials, section: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Section</option>
                <option value="Employee">Employee</option>
                <option value="Staff Manager">Staff Manager</option>
                <option value="Stock Manager">Stock Manager</option>
                <option value="Vehicle Manager">Vehicle Manager</option>
                <option value="Delivery Manager">Delivery Manager</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
            >
              Company Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
}
