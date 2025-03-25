import React from 'react';
import './SubIntro.css';
import Alert from '../Alert/Alert';
import img1 from "../../Assets/graceImg.webp";

const SubIntro = () => {
  return (
    <div className='sec1'>
    <div className='section container'>
    <p className="subtitle">WE CAN HELP YOUR PARISH FLOURISH</p>
    <div className="sec">
      <div className="content">
        
        <h1 className="title">
          Change, Growth, and <span className="highlight">Eucharist</span> for all.
        </h1>
        <p className="description">
        Beyond Baptism transforms lives and revitalizes parishes by fostering encounters with Jesus in the Eucharist, empowering discipleship, and providing pastors with a unique, Eucharist-centered
        framework for parish growth.
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
