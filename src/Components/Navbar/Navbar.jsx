// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { PiDotsNineBold } from 'react-icons/pi';
// import imageLogo from '../../Assets/chrisDev-logo.png';

// const Navbar = () => {
//   const [navBar, setNavBar] = useState("menu");
//   const [activeSection, setActiveSection] = useState('');

//   // Function to show navbar
//   const showNavBar = () => {
//     setNavBar("menu showNavbar");
//   };

//   // Function to remove navbar
//   const removeNavBar = () => {
//     setNavBar("menu");
//   };

//   // Track the current scroll position to update active link
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       let currentSection = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100; // Adjust for navbar height
//         if (window.scrollY >= sectionTop) {
//           currentSection = section.getAttribute('id');
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Function to handle click and smooth scroll
//   const handleClick = (e, section) => {
//     e.preventDefault();
//     document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//     setActiveSection(section);
//   };

//   return (
//     <div className='navBar'>
//       <div className='logoDiv'>
//         <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank'>
//           <img src={imageLogo} alt='logo' className='logo1' />
//         </a>
//         <span>Chris-Tour</span>
//       </div>

//       <div className={navBar}>
//         <ul>
//           <li className={`navList ${activeSection === 'destinations' ? 'active' : ''}`}>
//             <a href="#destinations" className='link11' onClick={(e) => handleClick(e, 'destinations')}>
//               Destinations
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'portfolio' ? 'active' : ''}`}>
//             <a href="#portfolio" className='link11' onClick={(e) => handleClick(e, 'portfolio')}>
//               About Us
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'questions' ? 'active' : ''}`}>
//             <a href="#questions" className='link11' onClick={(e) => handleClick(e, 'questions')}>
//               FAQ
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'footer' ? 'active' : ''}`}>
//             <a href="#footer" className='link11' onClick={(e) => handleClick(e, 'footer')}>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
//       </div>

//       <button className='signUpBtn btn'>
//         <a href="#subscribe" className='btn11' onClick={(e) => handleClick(e, 'subscribe')}>
//           Book Now
//         </a>
//       </button>

//       <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Ensure you import CSS correctly
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { PiDotsNineBold } from 'react-icons/pi';
// import imageLogo from '../../Assets/chrisDev-logo.png';

// const Navbar = () => {
//   const [navBar, setNavBar] = useState("menu");
//   const [activeSection, setActiveSection] = useState('');

//   const showNavBar = () => {
//     setNavBar("menu showNavbar");
//   };

//   const removeNavBar = () => {
//     setNavBar("menu");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       let currentSection = '';

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 80; // Adjust for navbar height
//         if (window.scrollY >= sectionTop) {
//           currentSection = section.getAttribute('id');
//         }
//       });

//       console.log('Current Section:', currentSection); // Debugging
//       setActiveSection(currentSection);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = (e, section) => {
//     e.preventDefault();
//     console.log('Navigating to section:', section); // Debugging
//     document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
//     setActiveSection(section);
//     if (window.innerWidth <= 767) {
//       removeNavBar(); // Close navbar on mobile after click
//     }
//   };

//   return (
//     <div className='navBar'>
//       <div className='logoDiv'>
//         <a href='https://chris321-dev.github.io/Chris.Dev-Portfolio/' target='_blank'>
//           <img src={imageLogo} alt='logo' className='logo1' />
//         </a>
//         <span>Chris-Tour</span>
//       </div>

//       <div className={navBar}>
//         <ul>
//           <li className={`navList ${activeSection === 'destinations' ? 'active' : ''}`}>
//             <a href="#destinations" className='link11' onClick={(e) => handleClick(e, 'destinations')}>
//               Destinations
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'portfolio' ? 'active' : ''}`}>
//             <a href="#portfolio" className='link11' onClick={(e) => handleClick(e, 'portfolio')}>
//               About Us
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'questions' ? 'active' : ''}`}>
//             <a href="#questions" className='link11' onClick={(e) => handleClick(e, 'questions')}>
//               FAQ
//             </a>
//           </li>
//           <li className={`navList ${activeSection === 'footer' ? 'active' : ''}`}>
//             <a href="#footer" className='link11' onClick={(e) => handleClick(e, 'footer')}>
//               Contact
//             </a>
//           </li>
//         </ul>
//         <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
//       </div>

//       <button className='signUpBtn btn'>
//         <a href="#subscribe" className='btn11' onClick={(e) => handleClick(e, 'subscribe')}>
//           Book Now
//         </a>
//       </button>

//       <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure you're importing the correct file

// Imported Icons
import { Heart, XCircle, List } from "phosphor-react";

import imageLogo from '../../Assets/Beyond-Baptism-Logo-01.webp';
import icon1 from '../../Assets/USIcon.png';

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");
  const [activeSection, setActiveSection] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // Function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  // Function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  // Function to handle alert
  const handleAlert = (message, section) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    setAlertMessage(message);
    setShowAlert(true);

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage('');
      removeNavBar(); // Close navbar after showing alert
    }, 6500);

    setActiveSection(section);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  // Handle scrolling to update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveSection(section.getAttribute("id"));
      }
    });

    if (scrollPosition + window.innerHeight >= document.body.scrollHeight) {
      setActiveSection('footer');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navBar">
      <div className="logoDiv">
        <a href="#">
          <img src={imageLogo} alt="logo" className="logo1" />
        </a>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">
            <a
              href="#"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={removeNavBar}
            >
              Home
            </a>
          </li>
          <li className="navList">
            <a
              href="#"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleAlert("Learn more about us!", "about")}
            >
              About Us
            </a>
          </li>
          <li className="navList">
            <a
              href="#"
              className={activeSection === 'benefits' ? 'active' : ''}
              onClick={handleAlert("Discover our Parish Benefits!", "benefits")}
            >
              Parish Benefits
            </a>
          </li>
          <li className="navList">
            <a
              href="#"
              className={activeSection === 'volunteer' ? 'active' : ''}
              onClick={handleAlert("Join as a volunteer today!", "volunteer")}
            >
              Volunteer
            </a>
          </li>
        </ul>
        <XCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <div>
        <button className="signUpBtn btn">
          <a href="#" className="btn11" onClick={handleAlert("Join as a volunteer today!", "volunteer")}>
            <Heart size={18} weight="bold" className="Heart" />
            <span>Give</span>
          </a>
        </button>

        <button style={{ backgroundColor: '#073955' }} className="signUpBtn btn lang">
          <a href="#" className="btn11 lang">
            <img src={icon1} alt="icon" className="icon1" />
            <span> EN </span>
          </a>
        </button>
      </div>

      <List className="icon menuIcon" onClick={showNavBar} />

      {showAlert && (
        <div className="alertOverlay">
          <div className="alertBox">
            {/* <p>{alertMessage}</p> */}
            <p>More inspiring content coming soon --stay tuned and blessed!</p>
            <button onClick={handleHideAlert} className="alertButton">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
