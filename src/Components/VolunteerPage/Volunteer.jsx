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
      

      <div className={styles.container11}>
        <h2 className={styles.heading11}>
          Become a Volunteer – Be the Spark That Rekindles Faith
        </h2>
        <p>
          Are you ready to make a lasting impact in the Church and in the hearts of countless souls?
          Join <em>Beyond Baptism</em>—a bold and Spirit-led movement dedicated to reigniting the faith
          of lapsed and lukewarm Catholics, and welcoming home other disengaged Christians.
        </p>
        <p>
          We believe that God is calling the laity to rise up and walk alongside our parish priests—
          serving as joyful witnesses to the power of the Holy Spirit and the splendor of the Blessed Eucharist.
          Whether you are a seasoned professional, a passionate parishioner, or someone simply yearning to make a
          difference, your gifts are needed now more than ever.
        </p>

        <p>As a volunteer, you’ll play a vital role in inspiring others:</p>
        <ul className={styles.bulletList11}>
          <li><strong>Lead or assist</strong> in outreach, training, or support</li>
          <li><strong>Share your testimony</strong> to awaken hearts</li>
          <li><strong>Use your talents</strong> to strengthen the Body of Christ</li>
        </ul>

        <p>
          We provide you with everything you need—comprehensive training, easy-to-use materials, and a
          supportive community—to succeed in your mission. With as little as 30 minutes to 2 hours per week,
          you can help bring fellow Christians back to the table of fellowship, and back to the Real Presence.
        </p>

        <p>
          This is more than volunteering—it’s answering the call to be a light in the darkness.
          Will you say yes?
        </p>

        <p className={styles.cta11}><strong>Join Beyond Baptism today. Help lead others home.</strong></p>
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
                  <p>{job.location101}</p>
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

      {/* <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} /> */}

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};

export default Volunteer;
