import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import styles from './Solutions.module.css';

const solutions = [
  {
    emoji: '🚀',
    title: 'Local Business Growth',
    desc: 'Generate more leads and grow your local business.',
    color: '#3B82F6',
    tag: 'Perfect for local businesses →',
    items: [
      'Website Development',
      'Google Ads Management',
      'Facebook Ads Management',
      'AI Follow-Up & CRM Setup',
    ],
  },
  {
    emoji: '🤖',
    title: 'AI Sales System',
    desc: 'Automate your sales process and close more deals.',
    color: '#8B5CF6',
    tag: 'Perfect for scaling teams →',
    items: [
      'AI Chatbot & Lead Qualification',
      'Automated SMS & Email',
      'Live Agent Routing',
      'CRM & Pipeline Management',
    ],
  },
  {
    emoji: '⚡',
    title: 'Custom SaaS Solution',
    desc: 'Build custom software that scales your business.',
    color: '#10B981',
    tag: 'Perfect for enterprises →',
    items: [
      'Custom SaaS Development',
      'API Integrations',
      'Cloud Deployment',
      'Ongoing Support & Maintenance',
    ],
  },
];

const Solutions = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="solutions" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div className={styles.eyebrow}>— OUR SOLUTIONS —</div>
          <h2 className={styles.title}>Comprehensive Solutions for Every Stage</h2>
        </motion.div>

        <div className={styles.grid}>
          {solutions.map((sol, i) => (
            <motion.div key={i} className={styles.card}
              style={{ '--sc': sol.color }}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}>

              <div className={styles.cardTop}>
                <span className={styles.emoji}>{sol.emoji}</span>
                <h3 className={styles.cardTitle}>{sol.title}</h3>
                <p className={styles.cardDesc}>{sol.desc}</p>
              </div>

              <ul className={styles.list}>
                {sol.items.map((item, j) => (
                  <li key={j}>
                    <HiCheckCircle style={{ color: sol.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className={styles.cta} style={{ color: sol.color }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {sol.tag}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
