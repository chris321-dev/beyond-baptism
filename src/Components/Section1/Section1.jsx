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
    title: "Discover Our Mission",
    description: "Inspiring a deeper love for Christ and the Eucharist through lay-led evangelization.",
    ctn: "READ MORE",
    tags: ["Catholicism", "Eucharist", "4 min read"],
    link: "/aboutus?section=about",
  },
  {
    icon: "bell",
    title: "Meet Our Team",
    description: "Passionate Volunteers and Leaders Spreading Eucharistic Renewal",
    ctn: "EXPLORE",
    tags: ["Catholicism", "Eucharist", "3 min read"],
    link: "/ourteam?section=team",
  },
  {
    icon: "volume-up",
    title: "Join Our Journey",
    description: "Join us and experience Eucharistic Miracles in Italy.",
    ctn: "VIEW MORE",
    tags: ["Catholicism", "Eucharist", "6 min read"],
    link: "https://selectinternationaltours.com/product/eucharistic-miracles-and-jubilee-year-pilgrimage-to-italy-with-msgr-paul-bochicchio-and-fr-ernie-rush/",
  },
];


const Card = ({ icon, title, description, tags, link, ctn }) => {
  
  const isInternal = link && (link.startsWith("/") || link.startsWith("?"));
  const isExternal = link && link.startsWith("http");

  let LinkElement;
  if (isInternal) {
    LinkElement = (
      <NavLink to={link} className={s.readMore}>
        {ctn}
      </NavLink>
    );
  } else if (isExternal) {
    LinkElement = (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={s.readMore}
      >
        {ctn}
      </a>
    );
  } else {
    LinkElement = (
      <a href={link || "#"} className={s.readMore}>
        {ctn}
      </a>
    );
  }
  
  return (
    <div className={s.card}>
      {/* <div className={`icon ${icon}`}></div> */}
      <div className={cn(s.icon, s[icon])}></div>
      <h3>{title}</h3>
      <p>{description}</p>

      {LinkElement}
      
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
    {/* <p className={s.subtitle}>TRANSFORM YOUR PARISH</p>
    <div className={s.sec}>
      <div className={s.content}>
        
        <h1 className={s.title}>
        Discover the profound mystery of the Eucharist in this inspiring video, “The Veil Removed”.
        </h1>
        <p className={s.description}>
        Special thanks to the <span className={s.highlight}>creators</span> of this impactful film for illuminating the true presence of Christ in the Eucharist.
        </p>
      </div>
      <div className={s.imagePlaceholder}>
      <img src={img} alt="Church" className={s.centeredImage} />
      </div>
    </div> */}

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

