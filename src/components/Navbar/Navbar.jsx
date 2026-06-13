import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Services', to: 'services' },
  { label: 'Solutions', to: 'solutions' },
  { label: 'Case Studies', to: 'about' },
  { label: 'About Us', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* LOGO */}
        <button className={styles.logo} onClick={() => scrollTo('home')}>
          <div className={styles.logoMark}>
            {/* ARK logo: bold A with upward arrow through K */}
            <svg viewBox="0 0 36 36" fill="none" width="32" height="32">
              <defs>
                <linearGradient id="navLg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA"/>
                  <stop offset="1" stopColor="#1D4ED8"/>
                </linearGradient>
                <linearGradient id="navLg2" x1="22" y1="4" x2="34" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7DD3FC"/>
                  <stop offset="1" stopColor="#38BDF8"/>
                </linearGradient>
              </defs>
              {/* A shape */}
              <path d="M4 30L13 6L22 30" stroke="url(#navLg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 21H19" stroke="url(#navLg)" strokeWidth="3" strokeLinecap="round"/>
              {/* K right leg + arrow */}
              <path d="M24 18L32 8" stroke="url(#navLg2)" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M24 18L32 28" stroke="url(#navLg)" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Arrow head on upper K leg */}
              <path d="M29 6L32 8L30 11" stroke="url(#navLg2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>ARK Digital</span>
            <span className={styles.logoSub}>GROWTH</span>
          </div>
        </button>

        {/* NAV LINKS */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button onClick={() => scrollTo(link.to)} className={styles.navLink}>{link.label}</button>
            </li>
          ))}
        </ul>

        {/* CTA + HAMBURGER */}
        <div className={styles.navRight}>
          <button onClick={() => scrollTo('contact')} className={styles.navCta}>
            Book Strategy Call
          </button>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}>
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => scrollTo(link.to)} className={styles.mobileLink}>
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className={styles.mobileCta}>
              Book Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
