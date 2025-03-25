import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

// (No need to import CSS in your component since it's loaded from the CDN that's in index.html)

import styles from "./OurStories.module.css";
import Img from "../../Assets/images1.jpeg";

// Sample JSON data for the cards
const latestPostsData = [
  {
    id: 1,
    title: "The Eucharist & How it Affects You",
    image: Img,
  },
  {
    id: 2,
    title: "The Power of the Eucharist in Daily Life",
    image: Img,
  },
  {
    id: 3,
    title: "Discovering the Catholic Faith",
    image: Img,
  },
  {
    id: 4,
    title: "Baptism, Confirmation & Beyond",
    image: Img,
  },
  {
    id: 5,
    title: "Extra Resources",
    image: Img,
  },
];

const OurStories = () => {
  return (
    <section className={styles.storiesSection}>
      <div className={styles.storiesContainer}>
        {/* Left Text Area */}
        <div className={styles.textArea}>
          <p className={styles.overline}>OUR STORIES</p>
          <h2 className={styles.sectionTitle}>Latest Posts</h2>
          <p className={styles.sectionDescription}>
            Explore our collection of movies, books, and other resources about Catholicism.
          </p>
          <div className={styles.lineContainer}>
            <span className={styles.shortLine}></span>
            <span className={styles.longLine}></span>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}            
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              720: {
                slidesPerView: 3,
              },
            }}
            style={{ marginTop: "20px", paddingBottom: "35px", paddingLeft: "30px", paddingRight: "30px", }}
          >
            {latestPostsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <p className={styles.cardTitle}>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurStories;
