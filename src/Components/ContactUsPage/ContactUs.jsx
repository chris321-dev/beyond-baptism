import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './ContactUs.module.css';
import ContactInfo from './ContactInfo';
import '../../App.css';
import imgContact from '../../Assets/contactChurch.webp';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+1',
    message: '',
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_23civgk',
      'template_d0mt5t6',
      form,
      'XPO5tovWYNNjLFajt'
    ).then(() => {
      alert('Message sent!');
      // clear form inputs
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '+1', 
        message: '',
      });
      setSending(false);
    }).catch((err) => {
      console.error('Failed to send message:', err);
      alert('Something went wrong. Please try again.');
      setSending(false);
    });
  };


  return (
    <div id="contact" className={styles.contactUsSection}>
      
      {/* <div className={styles.imageleft}>
        <h2>We’d love to hear from you</h2>
        <div className={styles.imageWrapper}>
          <img src={imgContact} alt="imgContact" className={styles.imageSide} />
        </div>
      </div> */}

      <div className={styles.imageSide}></div>

      <div className={styles.formSide}>
        <h2>Contact Us</h2>
        <p>We’re here to serve — reach out to us anytime</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First name<span>*</span></label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Email address<span>*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone number</label>
              <PhoneInput
                country={'us'}
                value={form.phone}
                onChange={handlePhoneChange}
                inputClass={styles.phoneInput}
                containerClass={styles.phoneContainer}
                placeholder='Enter your phone number'
                required
              />
            </div>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>Message<span>*</span></label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.sendButton} disabled={sending}>
            {sending ? 'Sending...' : 'SEND MESSAGE'}
          </button>
        </form>
        <ContactInfo />
      </div>

    </div>
  );
};

export default ContactUs;
