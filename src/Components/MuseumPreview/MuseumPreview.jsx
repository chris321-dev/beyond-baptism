import React, { useRef } from 'react';
import styles from './MuseumPreview.module.css';
import { ArrowLeft, ArrowRight, Play } from 'phosphor-react';

// Import images
import video1 from '../../Assets/vidImg1.png';
import video2 from '../../Assets/vidImg2.png';
import video3 from '../../Assets/vidImg3.png';

const videoData = [
  {
    id: 1,
    title: 'Eucharist with Chris Stefanick',
    description: 'Join Chris as he explains John 6 and his connection to Jesus’s sacrifice.',
    duration: '3 minutes',
    link: 'https://www.youtube.com/',
    image: video1,
  },
  {
    id: 2,
    title: '3 Scientifically Proven Eucharistic Miracles',
    description: 'In this video we’re going to go over three Eucharistic miracles that have been examined by top scientists around the world.',
    duration: '6 minutes',
    link: 'https://www.youtube.com/',
    image: video2,
  },
  {
    id: 3,
    title: 'Who was Carlo Acutis?',
    description: 'Discover the joyful and faith-filled life of Blessed Carlo Acutis — a teenager who loved Jesus in the Eucharist.',
    duration: '5 minutes',
    link: 'https://www.youtube.com/',
    image: video3,
  },
];

const MuseumPreview = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.museum}>
      <div className={styles.header}>
        <ArrowRight size={28} color="#fcbf49" />
        <h2>Eucharistic Museum Preview</h2>
      </div>

      <div className={styles.galleryWrapper}>
        <button className={styles.navBtn} onClick={() => scroll('left')}><ArrowLeft size={22} color="#ffffff" /></button>

        <div className={styles.gallery} ref={scrollRef}>
          {videoData.map((video) => (
            <div key={video.id} className={styles.card}>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                <img src={video.image} alt={video.title} />
                <div className={styles.playOverlay}>
                  <Play size={32} weight="fill" />
                </div>
              </a>
              <div className={styles.info}>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles.duration}>
                  {video.duration}
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navBtn} onClick={() => scroll('right')}><ArrowRight size={22} color="#ffffff" /></button>
      </div>
    </section>
  );
};

export default MuseumPreview;
