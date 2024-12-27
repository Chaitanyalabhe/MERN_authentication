import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ mobileNumber: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', formData);
      alert(res.data.message);

      // Save token to localStorage
      localStorage.setItem('token', res.data.token);

      // Redirect to the landing page
      window.location.href = '/landing';
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.header}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          style={styles.formInput}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.formInput}
        />
        <button type="submit" style={styles.loginButton}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formInput: {
    padding: '12px 15px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  loginButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;