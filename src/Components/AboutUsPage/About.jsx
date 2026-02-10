// About.jsx
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Play } from '@phosphor-icons/react'
import styles from './About.module.css'
import aboutUsImg from '../../Assets/aboutUs1.webp';

import ContactForm from '../ContactForm/ContactForm';


const slides = [
  {
    title: 'Our Mission',
    body: `Beyond Baptism’s mission is to bring Catholics and other Christians to a deeper personal relationship with Christ and an unwavering commitment to the Catholic Church through a greater appreciation of the Transubstantiation of the Eucharist.`,
  },
  {
    title: 'Our Vision',
    body: `We envision a world revived by Eucharistic devotion, where communities are united in faith, service, and love—living as the hands and feet of Christ in every corner of the globe.`,
  },
  {
    title: 'Our Values',
    body: `We value Communion with Christ, Community in the Church, and Compassion in action—always striving to reflect God’s light to those around us.`,
  },
]

export default function About() {

  const [activeArrow, setActiveArrow] = useState('right'); // right is active by default

  const [idx, setIdx] = useState(0)
  const max = slides.length

  const prev = () => {
    setIdx((i) => (i - 1 + max) % max);
    setActiveArrow('left');
  };

  const next = () => {
    setIdx((i) => (i + 1) % max);
    setActiveArrow('right');
  };

  const { title, body } = slides[idx]


  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>

      <section className={styles.AboutSection}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Be the Light: <br />
              <span className={styles.highlight}>Give Hope, Share Love</span>
            </h2>
            <p className={styles.text}>
              Join us in this important mission as we work together.
            </p>
            <div className={styles.buttons}>
              <button onClick={scrollToContact} className={styles.primaryBtn} >🤍 Get In Touch</button>
              <button className={styles.secondaryBtn}> ▶ Learn More</button>
            </div>
          </div>
  
          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <img src={aboutUsImg} alt="aboutUs Img" className={styles.image} />
          </div>
        </div>
      </section>

      <hr className={styles.line1} /> 

      {/* ====== SLIDER ====== */}
      <section className={styles.slider}>
        <div className={styles.pager}>
          <span className={styles.current}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span className={styles.total}> – {String(max).padStart(2, '0')}</span>
        </div>
        <h2 className={styles.slideTitle}>{title}</h2>
        <p className={styles.slideBody}>{body}</p>
        <div className={styles.controls}>
          <button
            onClick={prev}
            aria-label="Previous"
            className={activeArrow === 'left' ? styles.active : ''}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className={activeArrow === 'right' ? styles.active : ''}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      <hr className={styles.line2} /> 

      <ContactForm />

    </>
  )
}
