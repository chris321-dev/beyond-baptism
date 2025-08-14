import React from 'react';
import './SubIntro.css';
import Alert from '../Alert/Alert';
import img1 from "../../Assets/graceimg1.png";

const SubIntro = () => {
  return (
    <div className='sec1'>
    <div className='section container'>
    <p className="subtitle">WE CAN HELP YOUR PARISH FLOURISH</p>
    <div className="sec">
      <div className="content">
        
        <h1 className="title">
          Where the <span className="highlight">Eucharist</span> is central, discipleship grows
        </h1>
        <p className="description">
          Can your parish grow through a Eucharist-centered approach? Let Beyond Baptism help
          your parish come alive in the presence of Christ.
        </p>
        <button className="learnMoreBtn btn"><Alert><a className='btn11'>Learn More</a></Alert></button>
      </div>
      <div className="imagePlaceholder">
      <img src={img1} alt="Church" className="centeredImage" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default SubIntro;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SubIntro.css';
// import img1 from '../../Assets/graceImg.webp';

// const SubIntro = () => {
//   return (
//     <div className="sec1">
//       <div className="section container">
//         <p className="subtitle">WE HELP YOU GET THINGS DONE</p>
//         <div className="sec">
//           <div className="content">
//             <h1 className="title">
//               Grace, Love and <span className="highlight">Forgiveness</span> for all.
//             </h1>
//             <p className="description">
//               Beyond Baptism is an amazing church where you can form a deeper connection with our Lord Jesus.
//             </p>
//             <Link to="/under-construction">
//               <button className="learnMoreBtn btn">Learn More</button>
//             </Link>
//           </div>
//           <div className="imagePlaceholder">
//             <img src={img1} alt="Church" className="centeredImage" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubIntro;

