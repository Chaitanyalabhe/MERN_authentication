import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if not authenticated
      return;
    }

    const user = JSON.parse(localStorage.getItem('user')); // Assuming user details are stored in localStorage
    if (user) {
      setUserName(`${user.firstName} ${user.lastName}`);
      setGreeting(getGreeting());
    }
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div style={styles.landingContainer}>
      <h1 style={styles.greeting}>
        {greeting}, {userName}!
      </h1>
    </div>
  );
};

const styles = {
  landingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  greeting: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Landing;