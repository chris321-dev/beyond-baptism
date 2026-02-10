import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './ContactForm.module.css';
import '../../App.css';

const ContactForm = () => {
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

    // Manual validation for phone
    if (!form.phone || form.phone.replace(/\D/g, '').length < 7) {
      alert('Please enter a valid phone number.');
      return;
    }

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
    <div id="contact" className={styles.contactSection}>
      <div className={styles.formSide}>
        <h2>GET IN TOUCH</h2>
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
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.sendButton} disabled={sending}>
            {sending ? 'Sending...' : 'SUMBIT'}
          </button>
        </form>
      </div>

      <div className={styles.imageSide}></div>
    </div>
  );
};

export default ContactForm;
