import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiArrowRight } from 'react-icons/hi';
import styles from './CTA.module.css';

const CTA = () => {
  const [ref, inView] = useInView(0.2);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="cta" className={styles.cta} ref={ref}>
      <motion.div className={styles.bar}
        initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <div className={styles.left}>
          <div className={styles.icon}>📞</div>
          <div>
            <h2 className={styles.title}>Ready to Scale Your Business?</h2>
            <p className={styles.desc}>
              Let's build a strategy that brings you more leads, automates your processes,
              and helps you scale with confidence.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <button onClick={() => scrollTo('contact')} className={styles.btn}>
            Book Your Strategy Call <HiArrowRight />
          </button>
          <p className={styles.note}>✓ Free consultation &nbsp;·&nbsp; No commitments</p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
