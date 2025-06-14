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
  SignOut
} from 'phosphor-react';
import styles from './Navbar.module.css';
import logo from '../../Assets/Beyond-Baptism-Logo-white-1.png';
import icon1 from '../../Assets/USIcon.png';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  let active = 'home';

  const params = new URLSearchParams(location.search);
  const section = params.get('section');

  if (location.pathname === '/under-construction' || location.pathname === '/donate' || location.pathname === '/aboutus') {
    active = section || 'home';
  }


  const headerClasses = `${styles.header} ${!isHome ? styles.headerBg : ''}`;
  const navClasses    = `${styles.mainNav} ${scrolled ? styles.fixed : ''}`;
  const closeMenu     = () => setMenuOpen(false);

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
          <li>
            <Link
              to="/under-construction?section=about"
              className={active==='about'?styles.active:''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/under-construction?section=benefits"
              className={active==='benefits'?styles.active:''}
            >
              Parish Benefits
            </Link>
          </li>
          <li>
            <Link
              to="/under-construction?section=volunteer"
              className={active==='volunteer'?styles.active:''}
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              to="/under-construction?section=contact"
              className={active==='contact'?styles.active:''}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        

        {/* group Give + Hamburger so they sit together on the far right */}
        <div className={styles.actions}>
          <Link
            to="/donate?section=donate"
            className={`${styles.giveBtn} ${active === 'donate' ? styles.active1 : ''}`}
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
                <Link to="/" onClick={closeMenu}>
                  <House size={20} /> Home
                </Link>
              </li>
              <li>
                <Link to="/under-construction?section=about" onClick={closeMenu}>
                  <Users size={20} /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/under-construction?section=benefits"
                  onClick={closeMenu}
                >
                  <ChartBar size={20} /> Parish Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/under-construction?section=volunteer"
                  onClick={closeMenu}
                >
                  <HandPalm size={20} /> Get Involved
                </Link>
              </li>
              <li>
                <Link to="/under-construction?section=contact" onClick={closeMenu}>
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
