import React from 'react';
import styles from './JobModal.module.css';

const JobModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>×</button>
        <h2>{job.title}</h2>
        <p className={styles.org}>📍 Beyond Baptism – {job.location}</p>

        <div className={styles.tags}>
          <span>{job.details.timeType}</span>
          <span>{job.details.workType}</span>
          <span>{job.details.experience}</span>
        </div>

        <button className={styles.apply}><a href='https://forms.gle/mZpZRowEWrJeQ2pGA' target='blank'>Apply Now</a></button>

        <div className={styles.section}>
          <h4>About this role</h4>
          <p>{job.details.about}</p>
        </div>

        <div className={styles.section}>
          <details>
            <summary>Qualifications</summary>
            <ul>
              {job.details.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </details>

          <details>
            <summary>Responsibilities</summary>
            <ul>
              {job.details.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </details>
        </div>

        <div className={styles.section}>
          <h4>Salary & Work Hours</h4>
          {/* <p><strong>Salary:</strong> {job.details.salary}</p> */}
          <p><strong>Work Hours:</strong> {job.details.workHours}</p>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
