import React, { useEffect, useState } from "react";
import s from "./Services.module.css";
// import cn from 'classnames';

//  s = style
//  cn = classNames

// <div className={s.serviceCard} style={{height: extraHeight || 385
    // }}>

// function ServiceCard({ imageUrl, quote, reference, title, description, tags}) {
//   return (

function ServiceCard({
    initialImageUrl,
    smallScreenImageUrl,
    quote,
    reference,
    title,
    description,
    tags,
  }) {
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
  
    useEffect(() => {
      const updateImageUrl = () => {
        if (window.innerWidth <= 1024) {
          setImageUrl(smallScreenImageUrl);
        } else {
          setImageUrl(initialImageUrl);
        }
      };
  
      updateImageUrl(); // Set initial image based on screen size
      window.addEventListener("resize", updateImageUrl); // Listen for screen resize
  
      return () => window.removeEventListener("resize", updateImageUrl); // Cleanup on unmount
    }, [initialImageUrl, smallScreenImageUrl]);


    return (

    <div className={s.serviceCard} >
      <div className={s.cardBackground} style={{ backgroundImage: `url(${imageUrl})` }}>
        <p className={s.quote}>{quote}</p>
        <p className={s.reference}>{reference}</p>
      </div>
      <div className={s.cardContent}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
        <div className={s.tags}>
            <div className={s.tag1}>
          {tags.map((tag, index) =>
            tag.type === "tag" ? (
              <span key={index} className={s.tag}>{tag.text}</span>
            ) : (
              <span key={index} className={s.tagNoBg}>{tag.text}</span>
            )
          )}
          </div>
          <span className={s.arrow}>↗</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
