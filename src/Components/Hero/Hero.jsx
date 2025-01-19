import React, { useState, useEffect } from 'react';
import './Hero.css';
import guestHero from '../../Assets/guestHero.webp';
import guestHero1 from '../../Assets/guesHero1.webp';


const slides = [
  {
    image: guestHero,
    title: 'A National Ministry of Catholic Laity',
    subtitle: 'Changing Lives Through Eucharistic Encounters with Jesus Christ',
  },
  {
    image: guestHero1,
    title: 'A National Ministry of Catholic Laity',
    subtitle: 'Changing Lives Through Eucharistic Encounters with Jesus Christ',
    // title: 'Another Slide Title',
    // subtitle: 'Another slide subtitle text here.',
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Interval to change slides every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <div className="svg-arrow">
            {/* <svg width="24" height="54" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v16M6 14l6 6 6-6" />
            </svg> */}
            <svg width="61" height="95" viewBox="0 0 61 105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0.5V104.5M32 104.5C33 95.6667 40.2 78 61 78M32 104.5C30.5 94.5 20.9 78 0.5 78" stroke="#E6E6E6" stroke-width="1.5"/>
              </svg>
          </div>
          <button className="join-btn">Join With Us</button>
        </div>

        {/* Segmented Animated Progress Bar */}
        <div className="progress-bar">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`progress-segment ${index === currentSlide ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="navigation">
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Hero;
