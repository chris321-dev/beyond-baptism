import React from 'react';
import styles from './AwakenSection.module.css';
import veilImage from '../../Assets/veilRemovedPoster1.webp';
import bgImage from '../../Assets/bgImage22.webp'; // Background image used in section
import { CaretDown } from '@phosphor-icons/react';

const AwakenSection = () => {
  return (
    <section className={styles.awakenSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2><span>Awaken Your Heart</span></h2>
          <p className={styles.description}>
            Discover the profound mystery of the Eucharist in this inspiring video <br />
            <strong>"The Veil Removed"</strong>.
          </p>

          <div className={styles.meta}>
            <span className={styles.label}>Heaven Meets Earth at Mass</span>
            <span className={styles.date}>7-Dec-19</span>
            <a href="https://www.youtube.com/watch?v=OOLZDaTgIaM" target="_blank" rel="noreferrer" className={styles.watchBtn}>
              Watch Now
            </a>
            {/* <a className={styles.watchBtn}>
              Watch Now
            </a> */}
          </div>

          <p className={styles.credits}>
            Special thanks to the{" "}
            <a href="http://theveilremoved.com/" target="_blank" rel="noopener noreferrer">
              creators
            </a>{" "}
            of this impactful film for illuminating the true presence of Christ in the Eucharist.
          </p>
        </div>

        <div className={styles.imageBox}>
          <img src={veilImage} alt="The Veil Removed Poster" />
        </div>
      </div>

      <div className={styles.diamondBtn}>
        <ArrowDown className={styles.icon1} size={30} color="#ECAE48" />
      </div>
    </section>
  );
};

export default AwakenSection;
