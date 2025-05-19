// NotFound.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.subText}>Sorry, the page you're looking for doesn't exist. <br /> <em>You'll be redirected to the homepage shortly...</em></p>
    </div>
  );
};

  // Inline styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: "5px 20px",
  },
  heading: {
    fontSize: "2rem",
    color: "#2D3748",
    marginBottom: "1rem",
  },
  subText: {
    fontSize: "1.2rem",
    color: "#555",
  },

};

export default NotFound;
