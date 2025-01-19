import React from 'react';
import s from './Section1.module.css';
import cn from 'classnames';
import img from "../../Assets/playIcon.png";
import Alert from '../Alert/Alert';


//  s = style
//  cn = classNames

const cardsData = [
  {
    icon: "gift", // Use an icon library or replace with a component/image
    title: "Our Events",
    description: "We host events every weekend. Join in on the excitement!",
    tags: ["Catholicism", "Eucharist", "4 min read"],
    link: "#",
  },
  {
    icon: "bell",
    title: "Our Ministries",
    description:
      "Our ministries provide a sensible solution for the people. We are committed to helping others.",
    tags: ["Catholicism", "Eucharist", "3 min read"],
    link: "#",
  },
  {
    icon: "volume-up",
    title: "Our Sermons",
    description:
      "We preach inspirational sermons on a wide range of themes and topics on the Holy Spirit, Eucharist, Jesus Christ, etc.",
    tags: ["Catholicism", "Eucharist", "6 min read"],
    link: "#",
  },
];

function Card({ icon, title, description, tags, link }) {
  return (
    <div className={s.card}>
      {/* <div className={`icon ${icon}`}></div> */}
      <div className={cn(s.icon, s[icon])}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Alert>
      {/* <a href={link} className={s.readMore}> */}
      <a className={s.readMore}>
        READ MORE
      </a>
      </Alert>
      <div className={s.tags}>
        <div className={s.tag1}>
        {tags.map((tag, index) => (
          <span
            key={index}
            // className={cn(s.tag, { [s.noBg]: tag === "6 min read" })}
            className={cn(s.tag, { [s.noBg]: ["6 min read", "3 min read", "4 min read"].includes(tag) })}

          >
            {tag}
          </span>
        ))}
        </div>
        <span className={s.arrow}>↗</span>
      </div>
    </div>
  );
}


const Section1 = () => {
  return (
    <div className={s.sec1}>
    <div className='section container'>
    <p className={s.subtitle}>JOIN A PARISH GROUP</p>
    <div className={s.sec}>
      <div className={s.content}>
        
        <h1 className={s.title}>
        Welcome to Beyond Baptism Church! We’d love to connect and share more about our community!
        </h1>
        <p className={s.description}>
        Connect with other members through our <span className={s.highlight}>newsletter</span>
        </p>
      </div>
      <div className={s.imagePlaceholder}>
      <img src={img} alt="Church" className={s.centeredImage} />
      </div>
    </div>

    <div className={s.cards}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>

    </div>
    </div>
  );
};

export default Section1;
