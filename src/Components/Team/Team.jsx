import React, { useState } from 'react';
import styles from './Team.module.css';
import TeamContext from '../TeamContext/TeamContext';
import img1 from "../../Assets/teamImg/img1.png";
import img2 from "../../Assets/teamImg/img2.png";
import img3 from "../../Assets/teamImg/img3.png";
import img4 from "../../Assets/teamImg/img4.png";
import img5 from "../../Assets/teamImg/img5.png";
import img6 from "../../Assets/teamImg/img6.png";
import img7 from "../../Assets/teamImg/img7.png";
import img8 from "../../Assets/teamImg/img8.png";
import icon1 from "../../Assets/teamImg/icon1.png";

const teamData = [
  { id: 1, name: 'Debbie Mastroeni', role: 'Co-Founder', category: 'co-founder', img: img1 },
  { id: 2, name: 'Richard Doran', role: 'Co-Founder', category: 'co-founder', img: img2 },
  { id: 3, name: 'Monsignor Paul Bochicchio', role: 'Advisory Council', category: 'advisory-council', img: img3 },
  { id: 4, name: 'Father Ernie Rush', role: 'Advisory Council', category: 'advisory-council', img: img4 },
  { id: 5, name: 'Father John Gordan', role: 'Advisory Council', category: 'advisory-council', img: img5 },
  { id: 6, name: 'Russell Petrocelli', role: 'Advisory Council', category: 'advisory-council', img: img6 },
  { id: 7, name: 'Rich Mikelinich', role: 'Director of Technology', category: 'technology-director', img: img7 },
  { id: 8, name: 'Shannon Coyle', role: 'Content Manager', category: 'content-manager', img: img8 },
];

const categories = [
  { name: 'Co-Founder', key: 'co-founder' },
  { name: 'Advisory Council', key: 'advisory-council' },
  { name: 'Technology Director', key: 'technology-director' },
  { name: 'Content Manager', key: 'content-manager' },
  { name: 'All', key: 'all' },
];

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = selectedCategory === 'all'
    ? teamData
    : teamData.filter(member => member.category === selectedCategory);

  return (
    <>
    <div className={styles.teamSection}>
      <h2 className={styles.heading}>Meet The <b>Visionaries </b>Behind Beyond Baptism.</h2>
      <div className={styles.categoryList}>
        {categories.map(category => (
          <button
            key={category.key}
            className={`${styles.categoryButton} ${
              selectedCategory === category.key ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className={styles.teamGrid}>
        {filteredData.map(member => (
          <div key={member.id} className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <img src={member.img} alt={member.name} className={styles.profileImage} />
              {/* <div className={styles.icon}></div> */}
              <img src={icon1} alt="icon" className={styles.icon} />
            </div>
            <p className={styles.name}>{member.name}</p>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>      
      
    </div>

    <TeamContext />

    </>
  );
};

export default Team;
