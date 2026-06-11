import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Requirement Analysis' },
  { num: '02', title: 'Planning & Strategy' },
  { num: '03', title: 'UI/UX Design' },
  { num: '04', title: 'Development' },
  { num: '05', title: 'Testing & QA' },
  { num: '06', title: 'Deployment' },
  { num: '07', title: 'Maintenance & Support' },
];

const Process = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="process" className={styles.process} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow center">How We Work</p>
          <h2 className="section-title center">Our Development Process</h2>
          <p className="section-body center">
            A structured, transparent approach from discovery through launch and beyond — ensuring
            quality at every stage.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className={styles.circle}>
                <span className={styles.num}>{s.num}</span>
              </div>
              <p className={styles.title}>{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
