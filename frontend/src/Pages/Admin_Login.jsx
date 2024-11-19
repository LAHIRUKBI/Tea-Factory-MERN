import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_Login() {
  const [adminName, setAdminName] = useState('');
  const [institutionID, setInstitutionID] = useState('');
  const [nic, setNic] = useState('');
  const [adminError, setAdminError] = useState('');

  const [companyID, setCompanyID] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyError, setCompanyError] = useState('');

  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminName === 'lahiru' && institutionID === '2305423054' && nic === '200008104348') {
      navigate('/adminhome');
    } else {
      setAdminError('Invalid credentials. Please try again.');
    }
  };

  const handleCompanyLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyNumber: companyID, name: companyName }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          navigate('/companyhome');
        } else {
          setCompanyError(data.message || 'Invalid credentials.');
        }
      } else {
        setCompanyError('Server error. Please try again later.');
      }
    } catch (error) {
      setCompanyError('An error occurred. Please try again.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          maxWidth: '900px',
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
          {adminError && <div style={{ color: 'red', marginBottom: '10px' }}>{adminError}</div>}
          <form onSubmit={handleAdminLogin}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="adminName" style={{ display: 'block', marginBottom: '5px' }}>
                Name:
              </label>
              <input
                type="text"
                id="adminName"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
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
                value={institutionID}
                onChange={(e) => setInstitutionID(e.target.value)}
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
                value={nic}
                onChange={(e) => setNic(e.target.value)}
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
              <label htmlFor="companyID" style={{ display: 'block', marginBottom: '5px' }}>
                Company ID:
              </label>
              <input
                type="text"
                id="companyID"
                value={companyID}
                onChange={(e) => setCompanyID(e.target.value)}
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
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
    </div>
  );
}
