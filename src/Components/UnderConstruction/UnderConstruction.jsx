import React from "react";

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Exciting changes are on the way!</h1>
      <p style={styles.subText}>Site updates in progress!</p>
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
    color: "#DC8419",
    marginBottom: "1rem",
  },
  subText: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default UnderConstruction;
