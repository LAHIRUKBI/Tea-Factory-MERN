import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState(''); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/signup', user);
      setMessage(response.data.message || 'Signup successful');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Signup</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={user.fullName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input 
              type="password" 
              name="password" 
              value={user.password} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter a password" 
              required 
            />
          </div>

          {message && (
            <p className={`text-center mt-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}

          <button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
