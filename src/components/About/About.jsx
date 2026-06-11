import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiLightningBolt, HiShieldCheck, HiClock } from 'react-icons/hi';
import styles from './About.module.css';

const statsData = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '12+', label: 'Industries Served' },
  { num: '100%', label: 'Satisfaction Rate' },
  { num: '24/7', label: 'Technical Support' },
];

const features = [
  { icon: <HiLightningBolt />, title: 'End-to-End Project Lifecycle', desc: 'From planning and design to deployment and ongoing support' },
  { icon: <HiShieldCheck />, title: 'Secure & Scalable Architecture', desc: 'Built for growth with enterprise-grade security standards' },
  { icon: <HiClock />, title: 'On-Time Delivery', desc: 'Disciplined project management with transparent timelines' },
];

const About = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        {/* Visual box */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.box}>
            <div className={styles.statsGrid}>
              {statsData.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.features}>
              {features.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">About ARK Digital Solutions</h2>
          <p className="section-body">
            ARK Digital Solutions is a technology solutions company specializing in custom software
            development, website development, mobile applications, enterprise solutions, cloud
            services, and business automation.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            We partner with startups, small businesses, and enterprises to build scalable, secure,
            and high-performance digital products that help organizations streamline operations and
            achieve business growth.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            From planning and design to deployment and ongoing support, we manage the complete
            project lifecycle and deliver reliable technology solutions tailored to each client's
            needs.
          </p>
          <div className={styles.ctaRow}>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Explore Services
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Talk to Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
