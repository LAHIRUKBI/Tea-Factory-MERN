import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
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
      const response = await axios.post('http://localhost:3000/api/signup', user);
      setMessage(response.data.message || 'Signup successful');
    } catch (error) {
      console.error("Signup error:", error); // Log error for debugging
      setMessage(error.response?.data?.message || 'Signup failed. Please check your details and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white">

      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md transform transition-all hover:shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-700">Create Your Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2 font-medium">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              value={user.fullName} 
              onChange={handleChange} 
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter your full name" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={user.email} 
              onChange={handleChange} 
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">Password</label>
            <input 
              type="password" 
              name="password" 
              value={user.password} 
              onChange={handleChange} 
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
              placeholder="Enter a password" 
              required 
            />
          </div>

          {message && (
            <p className={`text-center mt-6 ${message.includes('successfully') ? 'text-green-600' : 'text-red-500'} font-semibold`}>
              {message}
            </p>
          )}

          <button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Signup
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already registered?{' '}
            <span
              onClick={() => navigate('/signin')}
              className="text-green-600 font-semibold cursor-pointer hover:text-green-700 transition duration-200"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
