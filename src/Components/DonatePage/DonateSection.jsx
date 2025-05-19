import React from 'react';
import styles from './DonateSection.module.css';
import donateImage from '../../Assets/donateImage.webp';

import PricingToggle from '../DonationPricingToggle/PricingToggle';
import GratitudeSection from './GratitudeSection';

import bulbIcon from '../../Assets/crossIcon.png';
import giftIcon from '../../Assets/cupIcon.png';

import { Quotes } from 'phosphor-react';

const DonateSection = () => {

   const scrollToDonate = () => {
    const element = document.getElementById("donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <section className={styles.donateSection}>
      <div className={styles.grid}>
        {/* Left Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Fuel the Mission: <br />
            Empower Faith, <span className={styles.highlight}>Transform Lives</span>
          </h2>
          <p className={styles.text}>
            Your support helps us expand our ministry, create impactful programs, and train lay ministers across the nation.
          </p>
          <div className={styles.buttons}>
            <button onClick={scrollToDonate} className={styles.primaryBtn} >🤍 Donate Now</button>
            <button className={styles.secondaryBtn}> ▶ Learn More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <img src={donateImage} alt="Hands holding heart" className={styles.image} />
        </div>
      </div>
    </section>


    <section className={styles.donateInfo}>
      <img src={bulbIcon} className={styles.iconTopLeft} alt="Icon" />
      <img src={giftIcon} className={styles.iconTopRight} alt="Icon" />
      <img src={bulbIcon} className={styles.iconBottomLeft} alt="Icon" />
      <img src={giftIcon} className={styles.iconBottomRight} alt="Icon" />

      <h2 className={styles.infoTitle}>
        Donate Today – <span className={styles.highlight}>Make a Difference!</span>
      </h2>
      <p className={styles.infoText}>
        We provide our services to parishes free of charge. Hence, your contributions play
        a vital role in the success of this initiative. We are convinced that by eliminating
        financial obstacles, we can more effectively fulfill our mission of fostering a deeper
        understanding and reverence for the Eucharist among Catholics and other Christians.
      </p>

      <div className={styles.wrapper}>
        <Quotes size={24} weight="fill" className={styles.quoteIconLeft} />
        <p className={styles.text}>
          <span className={styles.bold}>
            Give, and it will be given to you.
          </span>{" "}
          A good measure, pressed down, shaken together, and running over,
          will be poured into your lap. For the measure you give will be the
          measure you get back.
        </p>
        <Quotes size={24} weight="fill" className={styles.quoteIconRight} />
        <p className={styles.ref}>—Luke 6:38</p>
      </div>
    </section>

    <PricingToggle />

    <GratitudeSection />

    </>
  );
};

export default DonateSection;
