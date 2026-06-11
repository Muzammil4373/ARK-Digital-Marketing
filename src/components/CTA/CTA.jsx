import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiCalendar, HiArrowRight } from 'react-icons/hi';
import styles from './CTA.module.css';

const CTA = () => {
  const [ref, inView] = useInView(0.2);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="cta" className={styles.cta} ref={ref}>
      <div className={styles.glow} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-eyebrow center">Start Today</p>
        <h2 className="section-title center">Ready to Start Your Next Project?</h2>
        <p className="section-body center">
          Let's build innovative digital solutions that help your business grow, automate
          operations, and improve customer experience.
        </p>
        <div className={styles.buttons}>
          <button onClick={() => scrollTo('contact')} className="btn-primary">
            <HiCalendar /> Schedule a Consultation
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-secondary">
            Contact Us Today <HiArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
