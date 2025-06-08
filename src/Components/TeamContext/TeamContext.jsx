import React from "react";
import styles from "./TeamContext.module.css";

const TeamContext = () => {
  return (
    <>
    <hr className='line1'></hr>    
    <section className={styles.aboutSection}>
      <p>
        At <strong>Beyond Baptism</strong>, our mission thrives on the faith,
        passion, and dedication of an extraordinary group of leaders. With
        nearly 100 volunteers, we are blessed with a growing community united by
        a shared commitment to fostering deeper connections with{" "}
        <strong>Christ and the Eucharist</strong>.
      </p>

      <p>
        Our <strong>Executive Team and Advisory Board</strong> bring a wealth of
        experience in ministry, evangelization, and Catholic education. These
        devoted stewards work tirelessly to shape our vision, create impactful
        programs, and empower lay ministers across the nation. Their leadership
        embodies the heart of our mission, ensuring that{" "}
        <strong>Christ’s message and the glory of the Eucharist</strong> inspire
        lives everywhere.
      </p>

      <p>
        We are always looking for <strong>additional volunteers</strong> to join
        us—both at the <strong>executive</strong> and <strong>parish levels</strong>.
        If you feel called to serve and share in this mission, we invite you to
        explore our current opportunities on our <strong>volunteer pages</strong>.
      </p>
    </section>
    </>
  );
};

export default TeamContext;
