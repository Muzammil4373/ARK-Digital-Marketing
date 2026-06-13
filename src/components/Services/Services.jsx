import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HiChevronRight } from 'react-icons/hi';
import { FaFacebook, FaGoogle, FaVideo, FaRobot, FaComments, FaSms, FaEnvelope, FaCog, FaCode, FaPlug } from 'react-icons/fa';
import { MdDesktopWindows, MdPhoneIphone, MdWeb } from 'react-icons/md';
import styles from './Services.module.css';

const categories = [
  {
    icon: '📢',
    title: 'Marketing & Growth',
    desc: 'Data-driven marketing that brings you more leads and customers.',
    color: '#3B82F6',
    services: [
      { icon: <FaFacebook />, name: 'Facebook Ads', desc: 'High-converting ads that generate high-quality leads.' },
      { icon: <FaGoogle />,   name: 'Google Ads',   desc: 'Buyer-intent traffic from Google Search & YouTube.' },
      { icon: <FaVideo />,    name: 'Creative Production', desc: 'Ad creatives, videos, and landing page assets.' },
    ],
  },
  {
    icon: '💻',
    title: 'Websites & Apps',
    desc: 'Modern, fast, SEO-optimized business websites that convert.',
    color: '#06B6D4',
    services: [
      { icon: <MdDesktopWindows />, name: 'Business Websites', desc: 'Modern, fast, SEO-optimized business websites.' },
      { icon: <MdWeb />,            name: 'Landing Pages',     desc: 'Conversion-focused landing pages that drive results.' },
      { icon: <MdPhoneIphone />,    name: 'Mobile Apps',       desc: 'iOS & Android apps built for seamless experience.' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    desc: 'Automate conversations, follow-ups, and business processes.',
    color: '#8B5CF6',
    services: [
      { icon: <FaComments />, name: 'AI Chatbots',     desc: '24/7 AI chatbots that qualify and engage leads.' },
      { icon: <FaSms />,      name: 'Automated SMS',   desc: 'Instant SMS follow-up for every new lead.' },
      { icon: <FaEnvelope />, name: 'Automated Email', desc: 'Nurture leads with smart email sequences.' },
    ],
  },
  {
    icon: '☁️',
    title: 'SaaS & Custom Systems',
    desc: 'Custom software and SaaS solutions built for your business.',
    color: '#10B981',
    services: [
      { icon: <FaCog />,  name: 'Custom CRM',      desc: 'Manage leads, sales, and customer relationships.' },
      { icon: <FaCode />, name: 'SaaS Development', desc: 'Build scalable SaaS with recurring revenue.' },
      { icon: <FaPlug />, name: 'API Integrations', desc: 'Connect your tools and automate workflows.' },
    ],
  },
];

const Services = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div className={styles.header}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div className={styles.eyebrow}>— OUR SERVICES —</div>
          <h2 className={styles.title}>Everything You Need to Grow & Scale</h2>
        </motion.div>

        {/* 4-column grid */}
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <motion.div key={i} className={styles.col}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              {/* Column header */}
              <div className={styles.colHead}>
                <span className={styles.colEmoji}>{cat.icon}</span>
                <div>
                  <h3 className={styles.colTitle}>{cat.title}</h3>
                  <p className={styles.colDesc}>{cat.desc}</p>
                </div>
              </div>

              {/* Service rows */}
              <div className={styles.rows}>
                {cat.services.map((svc, j) => (
                  <div key={j} className={styles.row}>
                    <div className={styles.rowIcon} style={{ color: cat.color, background: `${cat.color}18` }}>
                      {svc.icon}
                    </div>
                    <div>
                      <div className={styles.rowName}>{svc.name}</div>
                      <div className={styles.rowDesc}>{svc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All */}
              <button className={styles.viewAll} style={{ color: cat.color }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                View All <HiChevronRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
