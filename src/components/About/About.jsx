import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiLightningBolt, HiShieldCheck, HiClock } from 'react-icons/hi';
import styles from './About.module.css';

const statsData = [
  { num: '50K+', label: 'Leads Generated' },
  { num: '$5M+', label: 'Revenue Influenced' },
  { num: '98%', label: 'Retention Rate' },
  { num: '24/7', label: 'AI Automation' },
];

const features = [
  { icon: <HiLightningBolt />, title: 'AI-Powered Systems', desc: 'Every solution is built with automation and AI at its core' },
  { icon: <HiShieldCheck />, title: 'Proven Results', desc: 'We measure success by your revenue, not vanity metrics' },
  { icon: <HiClock />, title: 'Chicago-Based Team', desc: 'Local expertise with a global digital reach' },
];

const About = () => {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>
        <motion.div className={styles.visual}
          initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}>
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

        <motion.div className={styles.text}
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}>
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">About ARK Digital Growth</h2>
          <p className="section-body">
            ARK Digital Growth is a Chicago-based digital growth agency helping businesses generate more leads, automate their sales process, and scale using Facebook Ads, Google Ads, AI automation, custom websites, and SaaS solutions.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            We partner with local businesses, scaling teams, and enterprises to build AI-powered growth systems that turn traffic into revenue — on autopilot.
          </p>
          <p className="section-body" style={{ marginTop: '16px' }}>
            From strategy to execution, we manage your entire digital growth engine and deliver measurable results that matter to your bottom line.
          </p>
          <div className={styles.ctaRow}>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              Book a Strategy Call
            </button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
