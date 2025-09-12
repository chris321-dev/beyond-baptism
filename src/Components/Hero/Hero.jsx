import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import leftArrow from '../../Assets/arrow-left.svg';
import rightArrow from '../../Assets/arrow-right.svg';

import heroBanner1 from '../../Assets/heroBanner.webp';
import heroBanner2 from '../../Assets/heroBanner2.webp';
import heroBanner2S from '../../Assets/heroBanner2S.webp'; // small-screen version


const slides = [
  {
    sub: 'DISCOVER',
    title: 'A Ministry for the Catholic Laity',
    text: 'Changing Lives Through Eucharistic Encounters with Jesus Christ',
    img: heroBanner1,
  },
   {
    sub: 'DISCOVER',
    title: 'A Ministry for the Catholic Laity',
    text: 'Changing Lives Through Eucharistic Encounters with Jesus Christ',
    img: heroBanner2,
    imgMobile: heroBanner2S,
  },
  // Add more slides here
];


const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];




  return (
    // <section
    //   className={styles.hero}
    // >
    //   <div className={styles.overlay} />
    //   <img src={leftArrow} className={styles.navArrow + ' ' + styles.prev} onClick={prev} alt="Prev" />
    //   <div className={styles.content}>
    //     <span className={styles.sub}>{slide.sub}</span>
    //     <h1 className={styles.title}>{slide.title}</h1>
    //     <p className={styles.text}>{slide.text}</p>
    //   </div>
    //   <img src={rightArrow} className={styles.navArrow + ' ' + styles.next} onClick={next} alt="Next" />
    // </section>



    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${isMobile && slide.imgMobile ? slide.imgMobile : slide.img})`
      }}

    >
      <div className={styles.timerBar} key={current} />
      <img src={leftArrow} className={styles.navArrow + ' ' + styles.prev} onClick={prev} alt="Prev" />
      <div className={styles.content}>
        <span className={styles.sub}>{slide.sub}</span>
        <h1 className={styles.title}>{slide.title}</h1>
        <p className={styles.text}>{slide.text}</p>
      </div>
      <img src={rightArrow} className={styles.navArrow + ' ' + styles.next} onClick={next} alt="Next" />
    </section>

  );
};

export default Hero;
