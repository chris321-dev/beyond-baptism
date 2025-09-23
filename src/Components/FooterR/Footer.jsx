import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";
import Alert from '../Alert/Alert';

//imported icons 
// import { BiLogoMediumOld } from 'react-icons/bi';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import imageLogo from '../../Assets/Logo2.png';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='secContainer grid'>

        <div className='logoDiv'>
          <div className='footerLogo'  >
            <NavLink to="/">
            <img  src={imageLogo} alt='logo' className='logo1'/>
            </NavLink>
          </div>        

          {/* <div className='socials flex' >
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div> */}
        </div>  

        <div className='footerLinks'>
          <span className='linkTitle'>Information</span>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>            
            <NavLink to="/aboutus?section=about">About Us</NavLink>           
          </li>
          <li>            
            <NavLink to="/parishbenefits">Parish Benefits</NavLink>           
          </li>
          <li>            
            <NavLink to="/parishbenefits#testimonials">Testimonials</NavLink>          
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>
            Helpful Links
          </span>
          {/* <li>
            <a href='#'>Branch</a>
          </li> */}
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/terms-and-conditions">Terms & Condition</NavLink>
          </li>
          <li>
            <NavLink to="/privacy-statement">Privacy</NavLink>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Contact Details</span>
          {/* <span className='phone info1'>+123 456 7890</span>
          <span className='email info1'>email@gmail.com</span> */}
          <span className="phone info1">
            <a href="tel:+19736101346">+1 (973) 610-1346 </a>
          </span>
          <span className="email info1">
            <a href="mailto:info@beyondbaptism.com">info@beyondbaptism.com</a>
          </span>
          {/* <div className='socials flex info1' >
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div> */}
          
          <div className="socials flex info1">
            <a 
              href="https://www.facebook.com/people/Beyond-Baptism/61566182015276/?_rdr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ImFacebook className="icon" />
            </a>
            <a 
              href="https://www.instagram.com/beyond_baptism?igsh=MTdwc3hwNGh5ZDhibw==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="icon" />
            </a>
          </div>


        </div>

        {/* </div> */}
      </div>
      <div className='footerBottom'>
        <p>Beyond Baptism Charitable Fund, Inc is a nonprofit, section 501(c)(3).  
        Our EIN is 27-4268597.</p>
      </div>
    </div>
  )
}

export default Footer;
