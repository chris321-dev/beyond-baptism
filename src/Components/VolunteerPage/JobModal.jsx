import React, { useEffect, useState } from 'react';
import styles from './JobModal.module.css';
import { CaretRight } from 'phosphor-react';

const JobModal = ({ job, onClose }) => {
  const [openSection, setOpenSection] = useState(null);
  const [show, setShow] = useState(false);

  // Scroll lock and fade-in effect
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => setShow(true), 10);
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  if (!job) return null;

  return (
    <div className={`${styles.overlay} ${show ? styles.show : ''}`}>
      <div className={`${styles.modal} ${show ? styles.show : ''}`}>
        <button onClick={onClose} className={styles.closeBtn}>×</button>
        <h2>{job.title}</h2>
        <p className={styles.org}>📍 Beyond Baptism – {job.location}</p>

        <div className={styles.tags}>
          <span>{job.details.timeType}</span>
          <span>{job.details.workType}</span>
          <span>{job.details.experience}</span>
        </div>

        <button className={styles.apply}>
          <a href="https://forms.gle/mZpZRowEWrJeQ2pGA" target="_blank" rel="noreferrer">Apply Now</a>
        </button>

        <div className={styles.section}>
          <h4>About this role</h4>
          <p style={{ whiteSpace: 'pre-line' }}>{job.details.about}</p>
        </div>

        {/* Controlled dropdowns */}
        <div className={styles.section}>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection('qualifications')}
          >
            <CaretRight
              size={16}
              weight='bold'
              className={`${styles.arrowIcon} ${openSection === 'qualifications' ? styles.rotate : ''}`}
            />
            <span>Qualifications</span>
          </div>
          {openSection === 'qualifications' && (
            <ul className={styles.dropdownList}>
              {job.details.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          )}

          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection('responsibilities')}
          >
            <CaretRight
              size={16}
              weight='bold'
              className={`${styles.arrowIcon} ${openSection === 'responsibilities' ? styles.rotate : ''}`}
            />
            <span>Responsibilities</span>
          </div>
          {openSection === 'responsibilities' && (
            <ul className={styles.dropdownList}>
              {job.details.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}

          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection('timeCommitment')}
          >
            <CaretRight
              size={16}
              weight='bold'
              className={`${styles.arrowIcon} ${openSection === 'timeCommitment' ? styles.rotate : ''}`}
            />
            <span>Time Commitment</span>
          </div>
          {openSection === 'timeCommitment' && (
            <ul className={styles.dropdownList}>
              {job.details.timeCommitment.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          )}
        </div>

{/*         <div className={styles.section}>
          <h4>Salary & Work Hours</h4>
          <p><strong>Salary:</strong> {job.details.salary}</p>
          <p><strong>Work Hours:</strong> {job.details.workHours}</p>
        </div> */}

        <div className={styles.section}>
          {/* <h4>{job.type === 'Paid' ? 'Salary & Work Hours' : 'Work Hours'}</h4> */}

          {job.type === 'Paid' && (
            <h4>Salary & Work Hours</h4>
          )}

          {job.type === 'Paid' && (
            <p><strong>Salary:</strong> {job.details.salary}</p>
          )}

          <p><strong>Work Hours:</strong> {job.details.workHours}</p>
        </div>
        
      </div>
    </div>
  );
};

export default JobModal;
