import React, { useRef } from 'react';
import styles from './MuseumPreview.module.css';
import { ArrowLeft, ArrowRight, Play } from 'phosphor-react';

// Import images
import video1 from '../../Assets/vidsThumbnails/vidImg1.png';
import video2 from '../../Assets/vidsThumbnails/vidImg2.png';
import video3 from '../../Assets/vidsThumbnails/vidImg3.png';
import video4 from '../../Assets/vidsThumbnails/vidImg4.png';
import video5 from '../../Assets/vidsThumbnails/vidImg5.png';
import video6 from '../../Assets/vidsThumbnails/vidImg6.png';
import video7 from '../../Assets/vidsThumbnails/vidImg7.png';
import video8 from '../../Assets/vidsThumbnails/vidImg8.png';

const videoData = [
  {
    id: 1,
    title: 'Eucharist with Chris Stefanick',
    description: 'Join Chris as he explains John 6 and his connection to Jesus’s sacrifice.',
    duration: '3 minutes',
    link: 'https://www.youtube.com/watch?v=G1jffhaPDUk&list=PLOXD5KGWEWCFSxVcCilA7XSam4BNJX-7t&index=136',
    image: video1,
  },
  {
    id: 2,
    title: '3 Scientifically Proven Eucharistic Miracles',
    description: 'In this video we’re going to go over three Eucharistic miracles that have been examined by top scientists around the world.',
    duration: '6 minutes',
    link: 'https://www.youtube.com/watch?v=93cqR-nwI8s&list=PLOXD5KGWEWCFSxVcCilA7XSam4BNJX-7t&index=72',
    image: video2,
  },
  {
    id: 3,
    title: 'Who was Carlo Acutis?',
    description: 'Discover the joyful and faith-filled life of Blessed Carlo Acutis — a teenager who loved Jesus in the Eucharist.',
    duration: '5 minutes',
    link: 'https://www.youtube.com/watch?v=FjrX7ZZooY4&list=PLOXD5KGWEWCEMqgIV4GoYO4zuDP5VYz1G',
    image: video3,
  },
  {
    id: 4,
    title: 'Mother Miriam’s First Euchrsitic Experience',
    description: 'On the day Mother Miriam was accepted into the Catholic Church, she recalls how that sense of expectation was fulfilled in the Eucharist.',
    duration: '4 minutes',
    link: 'https://www.youtube.com/watch?v=Mt8dGMxtObY&list=PLOXD5KGWEWCFSxVcCilA7XSam4BNJX-7t&index=2',
    image: video4,
  },
  {
    id: 5,
    title: 'My favorite thing about being Catholic w/ Jonathan Roumie',
    description: 'Matt Fradd\'s kids submit questions for Jonathan Roumie, including, "What\'s your favorite thing about being Catholic?"',
    duration: '4 minutes',
    link: 'https://www.youtube.com/watch?v=lzwWPc8NApY&list=PLOXD5KGWEWCFSxVcCilA7XSam4BNJX-7t&index=8',
    image: video5,
  },
  {
    id: 6,
    title: 'Eucharist - "The End and the Beginning" (Matt Maher)',
    description: 'A music video for the song, "The End and The Beginning," sung by Matt Maher.',
    duration: '4 minutes',
    link: 'https://www.youtube.com/watch?v=1krRUD_mO7I&list=PLOXD5KGWEWCFSxVcCilA7XSam4BNJX-7t&index=4',
    image: video6,
  },
  {
    id: 7,
    title: 'A Priest Saw JESUS in the Eucharist',
    description: '12 Years Later, The Vatican CONFIRMS this miracle!',
    duration: '1 minutes',
    link: 'https://www.youtube.com/shorts/8eEGxowtIBQ',
    image: video7,
  },
  {
    id: 8,
    title: 'A Child Sees What Many Deny… The Real Presence!',
    description: 'A Child Sees What Many Deny… The Real Presence!',
    duration: '1 minutes',
    link: 'https://www.youtube.com/shorts/69JnqfXxtxg',
    image: video8,
  },
];

const MuseumPreview = () => {
  const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -350 : 350,
  //       behavior: 'smooth',
  //     });
  //   }

  const scroll = (direction) => {
  if (scrollRef.current) {
    const container = scrollRef.current;
    const card = container.querySelector(`.${styles.card}`);
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const containerWidth = container.offsetWidth;

    let scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });

    // Center the card on small screens (<= 400px)
    if (window.innerWidth <= 400) {
      const centerOffset = (containerWidth - cardWidth) / 2;
      const scrollTo = container.scrollLeft + scrollAmount - centerOffset;

      setTimeout(() => {
        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth',
        });
      }, 300);
    }
  }
};



  return (
    <section className={styles.museum}>
      <div className={styles.header}>
        <ArrowRight size={28} color="#fcbf49" />
        <h2 className={styles.gradientText}>Eucharistic Museum Preview</h2>
      </div>

      <div className={styles.galleryWrapper}>
        <button className={styles.navBtn} onClick={() => scroll('left')}><ArrowLeft size={22} color="#ffffff" /></button>

        <div className={styles.gallery} ref={scrollRef}>
          {videoData.map((video) => (
            <div key={video.id} className={styles.card}>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                <img src={video.image} alt={video.title} />
                <div className={styles.playOverlay}>
                  <Play size={32} weight="fill"/>
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
