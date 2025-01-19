import React from 'react';
import './SubIntro.css';
import Alert from '../Alert/Alert';
import img1 from "../../Assets/graceImg.webp";

const SubIntro = () => {
  return (
    <div className='sec1'>
    <div className='section container'>
    <p className="subtitle">WE HELP YOU GET THINGS DONE</p>
    <div className="sec">
      <div className="content">
        
        <h1 className="title">
          Grace, Love and <span className="highlight">Forgiveness</span> for all.
        </h1>
        <p className="description">
          Beyond Baptism is an amazing church where you can form a deeper connection with our Lord Jesus.
        </p>
        <button className="learnMoreBtn btn"><Alert><a className='btn11'>Learn More</a></Alert></button>
      </div>
      <div className="imagePlaceholder">
      <img src={img1} alt="Church" className="centeredImage" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default SubIntro;
