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
        We are taking small steps to teach the importance of the Eucharist
        </h1>
        <div className={s.underline}>
            <hr/>
        </div>
        <p className={s.description}>
            The name "Beyond Baptism" emphasizes the ongoing journey of faith and spiritual growth beyond the initial sacrament of Baptism. Through the transformative power of encountering Jesus in the Eucharist, Christians deepen their relationship with Jesus. We experience profound changes in our lives, becoming more closely united with Christ and nourished on our journey of faith.        
        </p>
        <div className={s.offerings}>
          <p>We offer:</p>
          <ul className={s.offerList}>                      
            <li>Spiritual Retreats</li>            
            <li>Adoration Sessions</li>
          </ul>
          <ul className={s.offerList}>          
            <li>Faith Workshops</li>
            <li>Prayer Gatherings</li>
          </ul>
        </div>
      </div>
      <div className={s.imagePlaceholder}>
      <img src={img} alt="Church" className={s.centeredImage} />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
