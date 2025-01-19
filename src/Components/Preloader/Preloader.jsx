import React from 'react';
import img from '../../Assets/Beyond-Baptism-Logo-white-1.png';

const Preloader = () => {
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#818385',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999999,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '150px', // Adjust the size of your image here
    height: '70px',
    animation: 'crossMove 4s linear infinite',
  };

  return (
    <div style={preloaderStyle}>
      <img 
        src={img} 
        alt="Loading..." 
        style={imageStyle}
      />
    </div>
  );
};

export default Preloader;
