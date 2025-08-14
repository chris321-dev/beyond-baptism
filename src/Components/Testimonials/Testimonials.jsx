import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import testimonialsData from "./testimonialsData";
import { FaQuoteRight, FaThumbsUp } from "react-icons/fa";


const Testimonials = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isLg = vw >= 1100;
  const isSm = vw < 830;
  const isMd = !isLg && !isSm;

  const total = testimonialsData.length;

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % total);
  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + total) % total);

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // Compute style for each card depending on viewport & index
  const getCardStyle = (i) => {
    // Defaults: hidden off-canvas
    let style = {
      transform: "translateX(200%) scale(0.85)",
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };

    if (isLg) {
      if (i === currentIndex) {
        style = {
          transform: "translateX(-50%) scale(1)",
          opacity: 1,
          zIndex: 3,
          pointerEvents: "auto",
        };
      } else if (i === prevIndex) {
        // Left, slightly overlapped
        style = {
          transform: "translateX(-142%) scale(0.92)",
          opacity: 1,
          zIndex: 2,
          pointerEvents: "auto",
        };
      } else if (i === nextIndex) {
        // Right, slightly overlapped
        style = {
          transform: "translateX(38%) scale(0.92)",
          opacity: 1,
          zIndex: 2,
          pointerEvents: "auto",
        };
      }
    } else if (isMd) {
      // Show two: current (left-ish) and next (right-ish)
      //i later used 3 instead
       if (i === currentIndex) {
        style = {
          transform: "translateX(-50%) scale(1)",
          opacity: 1,
          zIndex: 3,
          pointerEvents: "auto",
        };
      } else if (i === prevIndex) {
        // Left, slightly overlapped
        style = {
          transform: "translateX(-120%) scale(0.92)",
          opacity: 1,
          zIndex: 2,
          pointerEvents: "auto",
        };
      } else if (i === nextIndex) {
        // Right, slightly overlapped
        style = {
          transform: "translateX(20%) scale(0.92)",
          opacity: 1,
          zIndex: 2,
          pointerEvents: "auto",
        };
      }
    } else {
      // Small: show only current
      if (i === currentIndex) {
        style = {
          transform: "translateX(-50%) scale(1)",
          opacity: 1,
          zIndex: 2,
          pointerEvents: "auto",
        };
      }
    }

    return style;
  };

  return (
    <section id={id} className={styles.top1}>
    <p className={styles.heading}>Don’t take our word for it! <br></br>
Hear what followers of Christ are saying.</p>

    <div className={styles.wrapper}>

      <div className={styles.carouselContainer}>
        {/* Keep your arrow styles */}
        <button className={styles.arrow} onClick={prevSlide}>
          &#10094;
        </button>

        <div className={styles.carousel}>
          {testimonialsData.map((t, i) => (
            <div key={t.id} className={styles.card} style={getCardStyle(i)}>
              <FaQuoteRight className={styles.quoteIcon} />
              <div className={styles.textBox}>
                <p>{t.text}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardFooter11}>
                  <h4>{t.name}</h4>
                  <span>{t.position}</span><br></br>
                  <span>{t.location}</span>
                </div>
                <div className={styles.iconRight}>
                  <FaThumbsUp className={styles.thumbsIcon} />
                  <span>Testimonial</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Keep your dots */}
      <div className={styles.dots}>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
