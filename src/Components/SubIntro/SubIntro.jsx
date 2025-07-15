import React from 'react';
import './SubIntro.css';
import Alert from '../Alert/Alert';
import img1 from "../../Assets/graceimg1.png";

const SubIntro = () => {
  return (
    <div className='sec1'>
    <div className='section container'>
    <p className="subtitle">WE CAN HELP YOUR PARISH FLOURISH</p>
    <div className="sec">
      <div className="content">
        
        <h1 className="title">
          Where the <span className="highlight">Eucharist</span> is central, discipleship grows
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
