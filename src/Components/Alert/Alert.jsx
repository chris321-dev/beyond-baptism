// Alert.jsx
import React, { useState } from "react";

const Alert = ({ message, children }) => {
  const [showAlert, setShowAlert] = useState(false);

  // Show the alert and auto-hide after 5 seconds
  const handleShowAlert = (e) => {
    e.stopPropagation(); // Prevent event propagation to parent elements
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 6000);
  };

  // Manually hide the alert
  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <div onClick={handleShowAlert} style={{ display: "inline-block", cursor: "pointer" }}>
        {children}
      </div>
      {showAlert && (
        <div style={styles.overlay}>
          <div style={styles.alertBox}>
            <p style={{fontSize: "16px", height: "auto", width: "auto", color: "#DC8419"}}>{message || "More inspiring content coming soon --stay tuned and blessed!"}</p>
            <button onClick={handleHideAlert} style={styles.button}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the alert
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  alertBox: {
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    
    textAlign: "center",
  },
  
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#DC8419",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default Alert;
