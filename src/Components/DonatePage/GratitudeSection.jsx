import React from 'react';
import styles from './GratitudeSection.module.css';

const tiers = [
  {
    title: 'Donations Over $75',
    description:
      'As a token of our appreciation, you’ll receive a Beyond Baptism Coffee Mug, proudly displaying your commitment to the mission of faith, education, and evangelization.',
    imgAlt: 'Coffee Mug',
  },
  {
    title: 'Donations Over $500',
    description:
      'Along with the Beyond Baptism coffee mug you’ll also receive a beautiful handmade rosary to enjoy your favorite drink while reflecting on the mission of Christ in your life.',
    imgAlt: 'Handmade Rosary',
  },
  {
    title: 'Donations Over $1,000',
    description:
      'In addition to the coffee mug and handmade rosary, we’ll send you a beautiful Eucharistic Icon—a special piece to help inspire and deepen your devotion to the Eucharist.',
    imgAlt: 'Eucharistic Icon',
  },
];

export default function GratitudeSection() {
  return (
    <section className={styles.gratitudeSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Your Generosity, Our Gratitude</h2>
        <p className={styles.intro}>
          At Beyond Baptism, we deeply appreciate your support in helping us spread the message of Christ and the transformative power of the Eucharist. To show our gratitude for your generous contributions, we’re excited to offer special gifts at varying donation levels.
        </p>

        <div className={styles.grid}>
          {tiers.map(({ title, description, imgAlt }, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.imagePlaceholder} aria-label={imgAlt}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
