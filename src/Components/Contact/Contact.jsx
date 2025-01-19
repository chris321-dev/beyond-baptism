import React from 'react';
import s from './Contact.module.css';
import img from '../../Assets/contactChurch.webp'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={s.contact}>
    <div className='section container'>
   

    <div className={s.sec}>

        <div className={s.imagePlaceholder}>
        <img src={img} alt="Church" className={s.centeredImage} />
        </div>

      <div className={s.content}> 
      <h2 className={s.title}>GET IN TOUCH</h2>       
        <h1 className={s.subtitle}>
        Feel Free to Contact Us
        </h1>
        <div className={s.lineContainer}>
          <span className={s.shortLine}></span>
          <span className={s.longLine}></span>
        </div>
        <p className={s.description}>
        If you have any questions, please feel free to contact us using any of the methods below.        
        </p>

        <div className={s.contactDetails}>
          <div className={s.contactItem}>
            <div className={s.iconCircle}>
              <FaMapMarkerAlt className={s.icon} />
            </div>
            <div>
              <h4>Our Location</h4>
              <p>169 Holmes Street, Belleville, NJ 07109, US</p>
            </div>
          </div>
          <div className={s.contactItem}>
            <div className={s.iconCircle}>
              <FaPhoneAlt className={s.icon} />
            </div>
            <div>
            <div>
              <h4>Phone Number</h4>
              <p><a href="tel:2010000000">(201) 000-0000</a></p>
            </div>
            </div>
          </div>
          <div className={s.contactItem} style={{paddingBottom: '0'}}>
            <div className={s.iconCircle}>
              <FaEnvelope className={s.icon} />
            </div>
            <div>
              <h4>Email Address</h4>
              <p><a href="mailto:beyondbaptism123@gmail.com">beyondbaptism123@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={s.imagePlaceholder}>
      <img src={img} alt="Church" className={s.centeredImage} />
      </div> */}
    </div>
    </div>
    </div>
  );
};

export default Contact;
