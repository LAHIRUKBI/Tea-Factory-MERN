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
      if (response.data.success) {
        navigate('/'); // Adjust navigation based on your routes
      }
    } catch (err) {
      setCompanyError('Invalid company credentials. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Admin Login Form */}
      <div
        style={{
          width: '400px',
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <form onSubmit={handleAdminLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="adminName" style={{ display: 'block', marginBottom: '5px' }}>
              Name:
            </label>
            <input
              type="text"
              id="adminName"
              value={adminCredentials.name}
              onChange={(e) => setAdminCredentials({ ...adminCredentials, name: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="institutionID" style={{ display: 'block', marginBottom: '5px' }}>
              Institution ID:
            </label>
            <input
              type="text"
              id="institutionID"
              value={adminCredentials.institutionID}
              onChange={(e) => setAdminCredentials({ ...adminCredentials, institutionID: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nic" style={{ display: 'block', marginBottom: '5px' }}>
              NIC Number:
            </label>
            <input
              type="text"
              id="nic"
              value={adminCredentials.nic}
              onChange={(e) => setAdminCredentials({ ...adminCredentials, nic: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Admin Login
          </button>
        </form>
      </div>

      {/* Company Login Form */}
      <div
        style={{
          width: '400px',
          padding: '20px',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Company Login</h2>
        {companyError && <div style={{ color: 'red', marginBottom: '10px' }}>{companyError}</div>}
        <form onSubmit={handleCompanyLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="companyNumber" style={{ display: 'block', marginBottom: '5px' }}>
              Company Number:
            </label>
            <input
              type="text"
              id="companyNumber"
              value={companyCredentials.companyNumber}
              onChange={(e) =>
                setCompanyCredentials({ ...companyCredentials, companyNumber: e.target.value })
              }
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="companyName" style={{ display: 'block', marginBottom: '5px' }}>
              Name:
            </label>
            <input
              type="text"
              id="companyName"
              value={companyCredentials.name}
              onChange={(e) =>
                setCompanyCredentials({ ...companyCredentials, name: e.target.value })
              }
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Company Login
          </button>
        </form>
      </div>
    </div>
  );
}
