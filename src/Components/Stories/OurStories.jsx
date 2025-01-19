import React from "react";
import s from "./OurStories.module.css";
import Img from "../../Assets/images1.jpeg"
import Alert from '../Alert/Alert';


const stories = [
  {
    title: "The Eucharist & How it Affects You",
    description: "Learn how one of the most impactful events in the Bible plays a pivotal role in your life.",
    readTime: "6 min read",
    categories: ["Catholicism", "Eucharist"],
    imageUrl: Img,
    link: "#",
    altImg: "Story Image"
  },
  {
    title: "The Eucharist & How it Affects You",
    description: "Learn how one of the most impactful events in the Bible plays a pivotal role in your life.",
    readTime: "6 min read",
    categories: ["Catholicism", "Eucharist"],
    imageUrl: Img,
    link: "#",
    altImg: "Story Image"
  },
  {
    title: "The Eucharist & How it Affects You",
    description: "Learn how one of the most impactful events in the Bible plays a pivotal role in your life.",
    readTime: "6 min read",
    categories: ["Catholicism", "Eucharist"],
    imageUrl: Img,
    link: "#",
    altImg: "Story Image"
  },
  {
    title: "The Eucharist & How it Affects You",
    description: "Learn how one of the most impactful events in the Bible plays a pivotal role in your life.",
    readTime: "6 min read",
    categories: ["Catholicism", "Eucharist"],
    imageUrl: Img,
    link: "#",
    altImg: "Story Image"
  },
  // Add more stories as needed
];



const OurStories = () => {
  return (
    <div className='section'>
    <div className={s.services}>
      <h2 className={s.mainHeading}>Our Stories</h2>
      <h3 className={s.subHeading}>Latest Posts</h3>
      <div className={s.lineContainer}>
        <span className={s.shortLine}></span>
        <span className={s.longLine}></span>
      </div>
    <div className={s.storyGrid}>
      {stories.map((story, index) => (
        <div className={s.storyCard} key={index}>
          <div className={s.imageContainer}>
            <img src={story.imageUrl} alt={story.altImg} />
          </div>
          <div className={s.content}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            {/* <a href={story.link} className={s.readMore}> */}
            <Alert>
            <a className={s.readMore}>
              Read More ↗
            </a>
            </Alert>
            <div className={s.tags}>
            <div className={s.tag1}>
              {story.categories.map((category, idx) => (
                <span key={idx} className={s.tag}>
                  {category}
                </span>
              ))}
              <span className={s.readTime}>{story.readTime}</span>
            </div>
            </div>
          </div>
         
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default OurStories;
