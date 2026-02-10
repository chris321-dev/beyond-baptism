import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Services.module.css";
import { Heart
} from '@phosphor-icons/react';
import img2 from '../../Assets/image-4.webp';
// import img3 from '../../Assets/heartIcon.png';
import img4 from '../../Assets/image-3.webp';
import img5 from '../../Assets/image-5.webp';

// import cn from 'classnames';

//  s = style
//  cn = classNames

function Services() {
  return (
    <div className='services'>
  <div className={s.services}>
    <h2 className={s.mainHeading}>Join the Mission</h2>
    <p className={s.subHeading}>Share, Serve and Support Beyond Baptism.</p>

    <div className={s.servicesCards}>
      {/* Card 1 */}
      <div className={s.card}>
        <div className={s.cardImageWrapper}>
          <img
            src={img4}
            alt="Transform Your Parish"
            className={s.cardImage}
          />
          <div className={s.heartIcon}>
            {/* <img src={img3} alt="Heart Icon" /> */}
            <Heart size={26} color="#e63946" alt="Heart Icon" />
          </div>
        </div>
        <h4 className={s.cardTitle}>Transform Your Parish</h4>
        <p className={s.cardText}>
          Discover how we transform your parish through Eucharistic encounters,
          discipleship, and support for pastors, fostering vocations and a
          vibrant community.
        </p>
        <NavLink to="/parishbenefits">
          <button className={s.cardBtn}>
            <span className={s.btnText}> Discover </span>
            <span className={s.arrowIcon}>↗</span>
          </button>
        </NavLink>
      </div>

      {/* Card 2 */}
      <div className={s.card}>
        <div className={s.cardImageWrapper}>
          <img
            src={img2}
            alt="Become a Volunteer"
            className={s.cardImage}
          />
          <div className={s.heartIcon}>
            {/* <img src={img3} alt="Heart Icon" /> */}
            <Heart size={26} color="#e63946" alt="Heart Icon" />
          </div>
        </div>
        <h4 className={s.cardTitle}>Become a Volunteer</h4>
        <p className={s.cardText}>
          Join us in our journey to help your parish flourish.
        </p>
        <NavLink to="/volunteer?section=volunteer">
          <button className={s.cardBtn}>
          <span className={s.btnText}> Volunteer </span>
            <span className={s.arrowIcon}>↗</span>
          </button>
        </NavLink>
      </div>

      {/* Card 3 */}
      <div className={s.card}>
        <div className={s.cardImageWrapper}>
          <img
            src={img5}
            alt="Donate Today"
            className={s.cardImage}
          />
          <div className={s.heartIcon}>
            {/* <img src={img3} alt="Heart Icon" /> */}
            <Heart size={26} color="#e63946" alt="Heart Icon" />
          </div>
        </div>
        <h4 className={s.cardTitle}>Donate Today</h4>
        <p className={s.cardText}>
          We provide our services FREE to all parishes. Your support means
          everything to us.
        </p>
        <NavLink to="/donate?section=donate">
          <button className={s.cardBtn}>
            <span className={s.btnText}> Donate </span>
            <span className={s.arrowIcon}>↗</span>
          </button>
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
}

export default Services;
