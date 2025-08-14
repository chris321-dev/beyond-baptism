import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ParishBenefits.module.css";
import benefitsData from "./benefitsData";
import Testimonials from "../Testimonials/Testimonials";
import {
  Plus,
  Minus
} from "@phosphor-icons/react";
import parishImg from "../../Assets/eucharistBg.webp"; 


const ParishBenefits = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };



  const location = useLocation();

  //   useEffect(() => {
  //   if (location.hash) {
  //     const el = document.getElementById(location.hash.substring(1));
  //     if (el) {
  //       el.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);


   useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const navbarHeight = 100; // change to your actual navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);



  return (
    <>
    <section className={styles.parishSection} id="parishbenefits">
      <div className={styles.container1}>
      {/* Left section */}
      <div className={styles.left}>
        <h1>
          Allow Beyond Baptism to Create a{" "}
          <span className={styles.highlight}>Eucharistic Centered Parish</span>
        </h1>
        <h4>Christ-Centered Renewal</h4>
        <p>
          Through fostering profound encounters with Jesus in the Eucharist, Beyond Baptism cultivates a deeper discipleship among parishioners. This transformation leads to enriched spiritual growth, a renewed sense of mission, and a vibrant parish life. 
        </p>
        <p>
          Our Eucharist-centered approach distinguishes us from other ministries and offers practical relief to pastors by providing a structured, spiritually enriching framework for parish growth—with minimal time required from clergy.  
        </p>
        <img src={parishImg} alt="Parish" className={styles.image} />
      </div>

      {/* Right section */}
      <div className={styles.right}>
        <h2 className={styles.subHeading}>What we offer:</h2>
        <div className={styles.accordion}>
          {benefitsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.titleWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <button
                  className={styles.toggleBtn}
                  onClick={() => toggleItem(item.id)}
                >
                  {activeId === item.id ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>
              </div>

              {activeId === item.id && (
                <div className={styles.cardContent}>
                  <p>{item.description}</p>
                  {item.list.length > 0 && (
                    <ul>
                      {item.list.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
    
    <Testimonials id="testimonials" />
    </>
  );
};

export default ParishBenefits;
