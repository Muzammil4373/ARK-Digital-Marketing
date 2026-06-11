import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Industries', id: 'industries' },
  { label: 'Our Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

const serviceLinks = [
  'Website Development', 'Mobile Applications',
  'ERP Systems', 'CRM Solutions',
  'E-commerce', 'Cloud Hosting',
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.grid}>
      {/* Brand */}
      <div className={styles.brand}>
        <button onClick={() => scrollTo('home')} className={styles.logoBtn}>
          <div className={styles.logoMark}>
            <svg viewBox="0 0 26 26" fill="none" width="24" height="24">
              <path d="M4 22L13 4L22 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 15.5H18.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M14 13L19 22" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="21" cy="6" r="2.5" fill="#3B82F6"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span>ARK Digital</span>
            <span>Marketing</span>
          </div>
        </button>
        <p>Building Digital Solutions That Drive Business Growth. We partner with businesses to create scalable, secure, and high-performance technology that transforms operations.</p>
        <div className={styles.socials}>
         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn"><FaLinkedinIn /></a>
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook"><FaFacebookF /></a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram"><FaInstagram /></a>
<a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className={styles.colTitle}>Quick Links</h4>
        <ul className={styles.links}>
          {quickLinks.map((l) => (
            <li key={l.id}>
              <button onClick={() => scrollTo(l.id)} className={styles.linkBtn}>{l.label}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className={styles.colTitle}>Services</h4>
        <ul className={styles.links}>
          {serviceLinks.map((s) => (
            <li key={s}>
              <button onClick={() => scrollTo('services')} className={styles.linkBtn}>{s}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className={styles.bottom}>
      <span>© 2026 ARK Digital Marketing. All Rights Reserved.</span>
      <span>Building Digital Solutions That Drive Business Growth</span>
    </div>
  </footer>
);

export default Footer;
