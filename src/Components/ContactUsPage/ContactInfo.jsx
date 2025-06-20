import React from 'react';
import styles from './ContactInfo.module.css';
import locationIcon from '../../Assets/location-icon.png';
import phoneIcon from '../../Assets/phone-icon.png';
import emailIcon from '../../Assets/email-icon.png';

const ContactInfo = () => {
  const info = [
    {
      icon: locationIcon,
      title: 'Our Location',
      content: (
        <>
          169 Holmes Street,<br />
          Belleville, NJ 07109, US
        </>
      ),
      link: null
    },
    {
      icon: phoneIcon,
      title: 'Phone Number',
      content: '+1 (973) 610-1346',
      link: 'tel:+19736101346'
    },
    {
      icon: emailIcon,
      title: 'Email Address',
      content: 'info@beyondbaptism.com',
      link: 'mailto:info@beyondbaptism.com'
    }
  ];

  return (
    <section className={styles.container}>
      {info.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.iconCircle}>
            <img src={item.icon} alt={item.title} className={styles.iconImg} />
          </div>
          <h4>{item.title}</h4>
          {item.link ? (
            <a href={item.link} className={styles.linkText}>
              {item.content}
            </a>
          ) : (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default ContactInfo;
