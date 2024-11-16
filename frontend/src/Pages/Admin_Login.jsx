import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_Login() {
  const [name, setName] = useState('');
  const [institutionID, setInstitutionID] = useState('');
  const [nic, setNic] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === 'lahiru' && institutionID === '2305423054' && nic === '200008104348') {
      navigate('/adminhome');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ width: '400px', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="institutionID" style={{ display: 'block', marginBottom: '5px' }}>Institution ID:</label>
            <input
              type="text"
              id="institutionID"
              value={institutionID}
              onChange={(e) => setInstitutionID(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nic" style={{ display: 'block', marginBottom: '5px' }}>NIC Number:</label>
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
    </div>
  );
}
