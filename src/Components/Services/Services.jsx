import React from "react";
import ServiceCard from "./ServiceCard";
import s from "./Services.module.css";

import img1 from '../../Assets/img222.png';
import img2 from '../../Assets/image-4.webp';
import img3 from '../../Assets/img111.png';
import img4 from '../../Assets/image-3.webp';
import img5 from '../../Assets/image-5.webp';

// import cn from 'classnames';

//  s = style
//  cn = classNames

function Services() {
  return (
    <div className='section services'>
    <div className={s.services}>
      <h2 className={s.mainHeading}>Our Services</h2>
      <h3 className={s.subHeading}>What We Do</h3>
      <div className={s.servicesCards}>
        <ServiceCard
          // imageUrl={img1}
          initialImageUrl={img1}
          smallScreenImageUrl={img4}
          quote="“I am the living bread which came down from heaven...”"
          reference="— John 6:51-52"
          title="Connect with us"
          description="Join our free membership program & learn about the Eucharist"
          tags={[
            { type: "tag", text: "Catholicism" },
            { type: "tag", text: "Eucharist" },
            { type: "tagNoBg", text: "3 min read" }
          ]}
        />

        <ServiceCard
          initialImageUrl={img2}
          smallScreenImageUrl={img2}
          quote="“Be the apostle of the divine Eucharist...”"
          reference="— St. Peter Julian Eymard"
          title="Become a Volunteer"
          description="Join us in our journey to help us grow as a parish"
          tags={[
            { type: "tag", text: "Catholicism" },
            { type: "tag", text: "Eucharist" },
            { type: "tagNoBg", text: "4 min read" }
          ]}
        />

        <ServiceCard
          // imageUrl={img3}
          initialImageUrl={img3}
          smallScreenImageUrl={img5}
          quote="“Then he took the bread, said the blessing, broke it...”"
          reference="— Luke 22:16-20"
          title="Donate Today"
          description="Your support means everything to us"
          tags={[
            { type: "tag", text: "Catholicism" },
            { type: "tag", text: "Eucharist" },
            { type: "tagNoBg", text: "3 min read" }
          ]}
        />
      </div>
      </div>
    </div>
  );
}

export default Services;
