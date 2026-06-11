import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Industries', to: 'industries' },
  { label: 'Process', to: 'process' },
];

const Logo = () => (
  <a href="#home" className={styles.logo}>
    <div className={styles.logoMark}>
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M4 22L13 4L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 15.5H18.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 13L19 22" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="21" cy="6" r="2.5" fill="#3B82F6"/>
      </svg>
    </div>
    <div className={styles.logoText}>
      <span className={styles.logoName}>ARK Digital</span>
      <span className={styles.logoSub}>Solutions</span>
    </div>
  </a>
);

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
        <Logo />

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <button onClick={() => scrollTo(link.to)} className={styles.navLink}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => scrollTo('contact')} className={`btn-primary ${styles.navCta}`}>
          Get in Touch
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <button key={link.to} onClick={() => scrollTo(link.to)} className={styles.mobileLink}>
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className={`btn-primary ${styles.mobileCta}`}>
              Get Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
