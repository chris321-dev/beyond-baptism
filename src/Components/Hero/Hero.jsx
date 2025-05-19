import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import leftArrow from '../../Assets/arrow-left.svg';
import rightArrow from '../../Assets/arrow-right.svg';

const slides = [
  {
    sub: 'DISCOVER',
    title: 'A National Ministry of Catholic Laity',
    text: 'Changing Lives Through Eucharistic Encounters with Jesus Christ',
  },
  // Add more slides here
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

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
    <section
      className={styles.hero}
    >
      <div className={styles.overlay} />
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
