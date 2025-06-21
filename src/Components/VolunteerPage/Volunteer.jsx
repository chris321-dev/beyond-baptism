import React, { useState } from 'react';
import styles from './Volunteer.module.css';
import jobData from './jobData';
import JobModal from './JobModal';
import folderImg from '../../Assets/folder-icons.png';
import micIcon from '../../Assets/mic-icon.png';
import iconB from "../../Assets/iconBB.png";

const Volunteer = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className={styles.volunteerSection}>
      <div className={styles.header}>
        <p>Become part of the <strong>Family</strong></p>
        <div className={styles.imageWrapper}>
            <img src={folderImg} alt="folders" className={styles.folderImg} />
        </div>
      </div>

      <div className={styles.allPositions}>
        <h3><img src={micIcon} alt="mic" className={styles.micIcon} /> All positions</h3>
        <div className={styles.grid}>
          {jobData.map(job => (
            <div className={styles.card} key={job.id}>
              <div className={styles.cardTop} style={{ backgroundColor: job.bgColor }}>
                <span className={styles.date}>{job.date101}</span>
                <span className={styles.greenDot}></span>
                <p className={styles.org}><img src={iconB} alt="icon" className={styles.imageIcon} /> Beyond Baptism</p>
                <h4>{job.title}</h4>
              </div>
              <div className={styles.cardBottom}>
                <div>
                  <p className={styles.type}>{job.type}</p>
                  <p>{job.location}</p>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.detailsBtn} onClick={() => setSelectedJob(job)}>Details</button>
                  <button className={styles.applyBtn}><a href='https://forms.gle/mZpZRowEWrJeQ2pGA' target='blank'>Apply</a></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </section>
  );
};

export default Volunteer;
