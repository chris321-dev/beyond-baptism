import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Imported Icons
import { Heart, XCircle, List } from "phosphor-react";

import imageLogo from '../../Assets/Beyond-Baptism-Logo-01.webp';
import icon1 from '../../Assets/USIcon.png';

const Navbar = () => {
  const location = useLocation();
  
  // Determine active section based on URL:
  let activeSection = 'home';
  if (location.pathname === '/under-construction') {
    const params = new URLSearchParams(location.search);
    activeSection = params.get('section') || 'home';
  } else if (location.pathname === '/') {
    activeSection = 'home';
  }
  
  // Local state for the navbar menu open/close
  const [navBar, setNavBar] = useState("menu");

  // Function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };

  // Function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <Link to="/" onClick={removeNavBar}>
          <img src={imageLogo} alt="logo" className="logo1" />
        </Link>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">
            <Link
              to="/"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={removeNavBar}
            >
              Home
            </Link>
          </li>
          <li className="navList">
            <Link
              to="/under-construction?section=about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={removeNavBar}
            >
              About Us
            </Link>
          </li>
          <li className="navList">
            <Link
              to="/under-construction?section=benefits"
              className={activeSection === 'benefits' ? 'active' : ''}
              onClick={removeNavBar}
            >
              Parish Benefits
            </Link>
          </li>
          <li className="navList">
            <Link
              to="/under-construction?section=volunteer"
              className={activeSection === 'volunteer' ? 'active' : ''}
              onClick={removeNavBar}
            >
              Volunteer
            </Link>
          </li>
        </ul>
        <XCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <div>
        <button className="signUpBtn btn">
          <Link
            to="/under-construction?section=volunteer"
            className="btn11"
            onClick={removeNavBar}
          >
            <Heart size={18} weight="bold" className="Heart" />
            <span>Give</span>
          </Link>
        </button>

        <button style={{ backgroundColor: '#073955' }} className="signUpBtn btn lang">
          <a href="#" className="btn11 lang">
            <img src={icon1} alt="icon" className="icon1" />
            <span> EN </span>
          </a>
        </button>
      </div>

      <List className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;

