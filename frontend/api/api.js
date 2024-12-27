import axios from 'axios';

// Example login function
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Example register function
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};