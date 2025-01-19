import React from 'react';
import './Footer.css';
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
            <a href='#'>
            <img  src={imageLogo} alt='logo' className='logo1'/>
            </a>
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
            <a href='#'>Home</a>
          </li>
          <li>            
            <a>About Us</a>            
          </li>
          <li>            
            <a>Parish Benefits</a>            
          </li>
          <li>            
            <a>Posts</a>            
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
            <a>Support</a>
          </li>
          <li>
            <a>Terms & Condition</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Contact Details</span>
          {/* <span className='phone info1'>+123 456 7890</span>
          <span className='email info1'>email@gmail.com</span> */}
          <span className="phone info1">
            <a href="tel:+12010000000">+1 (201) 000-0000</a>
          </span>
          <span className="email info1">
            <a href="mailto:beyondbaptism123@gmail.com">beyondbaptism123@gmail.com</a>
          </span>
          <div className='socials flex info1' >
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
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
