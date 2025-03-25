import React from 'react';
import s from './AboutUs.module.css';
import img from '../../Assets/aboutUs.webp'

const AboutUs = () => {
  return (
    <div className='section container' style={{paddingTop: '5px'}}>
    <h2 className={s.title}>ABOUT US</h2>
    <div className={s.sec}>
      <div className={s.content}>        
        <h1 className={s.subtitle}>
        We are Deepening Faith and Transforming Lives through the Eucharist.
        </h1>
        <div className={s.underline}>
            <hr/>
        </div>
        <p className={s.description}>
        The name “Beyond Baptism” highlights the continuous journey of faith and spiritual growth that
        extends beyond the initial sacrament of Baptism. By encountering the transformative power of
        Jesus in the Eucharist, Catholics deepen their relationship with Him, experience profound
        personal transformation, and draw closer to Christ, finding nourishment and strength for their
        ongoing faith journey.      
        </p>
       
      </div>
      <div className={s.imagePlaceholder}>
      <img src={img} alt="Church" className={s.centeredImage} />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
