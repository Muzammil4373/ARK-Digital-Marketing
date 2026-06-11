import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Industries.module.css';

const industries = [
  { emoji: '🏥', label: 'Healthcare & Medical' },
  { emoji: '🏗️', label: 'Real Estate' },
  { emoji: '🛍️', label: 'E-commerce & Retail' },
  { emoji: '🎓', label: 'Education & E-Learning' },
  { emoji: '🚚', label: 'Logistics & Transportation' },
  { emoji: '🏦', label: 'Finance & Banking' },
  { emoji: '🏭', label: 'Manufacturing' },
  { emoji: '🏨', label: 'Hospitality & Hotels' },
  { emoji: '🚀', label: 'Startups & Small Businesses' },
  { emoji: '🏢', label: 'Corporate Enterprises' },
];

const Industries = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="industries" className={styles.industries} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow center">Sectors We Serve</p>
          <h2 className="section-title center">Industries We Serve</h2>
          <p className="section-body center">
            We build customized digital solutions for businesses across multiple industries, helping
            them improve efficiency, automate operations, and accelerate growth.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <span className={styles.emoji}>{ind.emoji}</span>
              <h3>{ind.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
