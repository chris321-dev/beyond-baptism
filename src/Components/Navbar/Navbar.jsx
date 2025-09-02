// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MagnifyingGlass,
  Newspaper,
  UserCircle,
  Heart,
  List,
  X,
  House,
  Users,
  ChartBar,
  HandPalm,
  Envelope,
  CaretDown,
  SignOut
} from '@phosphor-icons/react';
import styles from './Navbar.module.css';
import logo from '../../Assets/Beyond-Baptism-Logo-white-1.png';
import icon1 from '../../Assets/USIcon.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const [aboutDropdownOpen1, setAboutDropdownOpen1] = useState(false);

  


  // On home page, fix navbar once you scroll past 100px
  // useEffect(() => {
  //   if (!isHome) return;
  //   const onScroll = () => setScrolled(window.scrollY > 100);
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [isHome]);

  // Listen for scroll on all pages, threshold 100px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reset scrolled when location changes
  useEffect(() => {
    setScrolled(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // figure out which tab is active
  // let active = 'home';
  // if (location.pathname === '/under-construction') {
  //   const params = new URLSearchParams(location.search);
  //   active = params.get('section') || 'home';
  // }

  let active = 'home';

  const params = new URLSearchParams(location.search);
const section = params.get('section');

const pathKey = location.pathname + (location.hash || '');

// Use section if present, otherwise pathKey
if (
  location.pathname === '/under-construction' ||
  location.pathname === '/donate' ||
  location.pathname === '/volunteer' ||
  location.pathname === '/contactus' ||
  location.pathname === '/aboutus' ||
  location.pathname === '/ourteam' ||
  location.pathname === '/parishbenefits'
) {
  active = section || pathKey || 'home';
}

  // const params = new URLSearchParams(location.search);
  // const section = params.get('section');

  // if (location.pathname === '/under-construction' || location.pathname === '/donate' || location.pathname === '/volunteer' || location.pathname === '/contactus' || location.pathname === '/aboutus' || location.pathname === '/ourteam' || location.pathname === '/parishbenefits' || location.pathname === '/parishbenefits#testimonials') {
  //   active = section || 'home';
  // }

  //  if (location.pathname === '/under-construction' || location.pathname === '/donate' || location.pathname === '/volunteer' || location.pathname === '/contactus' || location.pathname === '/aboutus' || location.pathname === '/ourteam' || (location.pathname === '/parishbenefits' && location.hash === '#testimonials')) {
  //   active = section || 'home';
  // }


  const headerClasses = `${styles.header} ${!isHome ? styles.headerBg : ''}`;
  const navClasses    = `${styles.mainNav} ${scrolled ? styles.fixed : ''}`;
  const closeMenu     = () => setMenuOpen(false);

  const handleNavLinkClick = () => {
    setAboutDropdownOpen(false); // Close About Us dropdown
    closeMenu(); // Close the sidebar
  };

    // this will capture both pathname + hash/query
  const currentPath = location.pathname + location.hash;


  return (
    <header className={headerClasses}>
      {/* Sub‑nav (stays visible on all sizes) */}
      <div className={styles.subNav}>
        <ul className={styles.subList}>
          <li><Link to="/"><MagnifyingGlass size={17} />&nbsp;<span className={styles.showIcon}>Search</span></Link></li>
          <li><Link to="/under-construction">|&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.showIcon}><Newspaper size={17} /></span>&nbsp;Blog</Link></li>
          <li><Link to="/under-construction">|&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.showIcon}><UserCircle size={17} /></span>&nbsp;Virtual Museum</Link></li>
          <li className={styles.lang}><img src={icon1} alt="EN" />EN</li>
        </ul>
      </div>

      {/* Main nav */}
      <div className={navClasses}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Beyond Baptism" />
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link to="/" className={active==='home'?styles.active:''}>
              Home
            </Link>
          </li>

          
          <li className={styles.dropdown}>
            <button
              className={`${styles.navLinkBtn} ${(active === 'about' || active === 'team') ? styles.active : ''}`}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              About Us <CaretDown size={15} weight="bold" />
            </button>
            <ul className={`${styles.dropdownMenu} ${aboutDropdownOpen ? styles.show : ''}`}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}>
              <li>
                <Link to="/aboutus?section=about" onClick={() => setAboutDropdownOpen(false)} className={active==='about'?styles.active:''}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ourteam?section=team" onClick={() => setAboutDropdownOpen(false)} className={active==='team'?styles.active:''}>
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </li>


          <li className={styles.dropdown}>
            <button
              className={`${styles.navLinkBtn} ${
                currentPath.includes("/parishbenefits") ? styles.active : ""
              }`}
              onClick={() => setAboutDropdownOpen1(!aboutDropdownOpen1)}
              onMouseEnter={() => setAboutDropdownOpen1(true)}
              onMouseLeave={() => setAboutDropdownOpen1(false)}
            >
              Parish Benefits <CaretDown size={15} weight="bold" />
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                aboutDropdownOpen1 ? styles.show : ""
              }`}
              onMouseEnter={() => setAboutDropdownOpen1(true)}
              onMouseLeave={() => setAboutDropdownOpen1(false)}
            >
              <li>
                <Link
                  to="/parishbenefits"
                  onClick={() => setAboutDropdownOpen1(false)}
                  className={currentPath === "/parishbenefits" ? styles.active : ""}
                >
                  Parish Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/parishbenefits#testimonials"
                  onClick={() => setAboutDropdownOpen1(false)}
                  className={
                    currentPath === "/parishbenefits#testimonials"
                      ? styles.active
                      : ""
                  }
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </li>
          
          
          <li>
            <Link
              to="/volunteer?section=volunteer"
              className={active==='volunteer'?styles.active:''}
            >
              Volunteer
            </Link>
          </li>
          
          <li>
            <Link
              to="/contactus?section=contactus"
              className={active==='contactus'?styles.active:''}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        

        {/* group Give + Hamburger so they sit together on the far right */}
        <div className={styles.actions}>
          <Link
            to="/donate?section=donate"
            className={`${styles.giveBtn} ${active === 'donate' ? styles.active1 : ''}`} onClick={handleNavLinkClick}
          >
            <Heart size={18} weight="bold" /> Give
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <List size={28} weight="bold" />
          </button>
        </div>
      </div>

      <div className={styles.underline}></div>

      {/* Mobile slide‑out menu */}
      {menuOpen && (
        <>
          <div className={styles.overlay} onClick={closeMenu} />
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <button
                onClick={closeMenu}
                className={styles.closeBtn}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className={styles.sidebarLang}>
                <img src={icon1} alt="EN" />EN
              </div>
            </div>

            <div className={styles.sidebarSearch}>
              <input type="text" placeholder="Search" />
            </div>

            <ul className={styles.sidebarList}>
              <li>
                <Link to="/" onClick={handleNavLinkClick} className={active==='home'?styles.active:''}>
                  <House size={20} /> Home
                </Link>
              </li>
              

              <li className={styles.sidebarDropdown}>
                <button
                  className={`${styles.sidebarDropdownToggle} ${(active === 'about' || active === 'team') ? styles.active : ''}`}
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} 
                >
                  <Users size={20} /> About Us <CaretDown size={15} />
                </button>
                {aboutDropdownOpen && (
                  <ul className={styles.sidebarSubmenu}>
                    <li>
                      <Link to="/aboutus?section=about" onClick={closeMenu} className={active==='about'?styles.active:''}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/ourteam?section=team" onClick={closeMenu} className={active==='team'?styles.active:''}>
                        Meet The Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              
              <li className={styles.sidebarDropdown}>
                <button
                  className={`${styles.sidebarDropdownToggle} ${
                    currentPath.includes("/parishbenefits") ? styles.active : ""
                  }`}
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} 
                >
                  <ChartBar size={20} /> Parish Benefits <CaretDown size={15} />
                </button>
                {aboutDropdownOpen && (
                  <ul className={styles.sidebarSubmenu}>
                    <li>
                      <Link
                        to="/parishbenefits"
                        onClick={closeMenu}
                        className={currentPath === "/parishbenefits" ? styles.active : ""}
                      >
                        Parish Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/parishbenefits#testimonials"
                        onClick={closeMenu}
                        className={
                          currentPath === "/parishbenefits#testimonials"
                            ? styles.active
                            : ""
                        }
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              

              <li>
                <Link
                  to="/volunteer?section=volunteer"
                  onClick={handleNavLinkClick} className={active==='volunteer'?styles.active:''}
                >
                  <HandPalm size={20} /> Volunteer
                </Link>
              </li>
              
              <li>
                <Link to="/contactus?section=contactus" onClick={handleNavLinkClick} className={active==='contactus'?styles.active:''}>
                  <Envelope size={20} /> Contact Us
                </Link>
              </li>
            </ul>

            <div className={styles.sidebarFooter}>
              {/* <Link to="/logout" onClick={closeMenu}>
                <SignOut size={20} /> Logout
              </Link> */}
            </div>
          </aside>
        </>
      )}
    </header>
  );
};

export default Navbar;
