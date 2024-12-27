import React, { useState } from 'react';
import { registerUser } from '../api/api'; // Correct import

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      alert(res.message);
      // Redirect to Login page after successful registration
      window.location.href = '/login';
    } catch (error) {
      alert(error.error);
    }
  };

  return (
    <div style={styles.registerContainer}>
      <h2 style={styles.header}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.registerForm}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.formInput}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.formInput}
        />
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
        <button type="submit" style={styles.registerButton}>Register</button>
      </form>

      <div style={styles.socialLoginContainer}>
        <button style={styles.socialButton}>Login with Google</button>
        <button style={styles.socialButton}>Login with Facebook</button>
        <button style={styles.socialButton}>Login with Apple</button>
      </div>
    </div>
  );
};

const styles = {
  registerContainer: {
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
  registerForm: {
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
  registerButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  socialLoginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  socialButton: {
    backgroundColor: '#4285F4', // Default Google color
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
};

export default Register;