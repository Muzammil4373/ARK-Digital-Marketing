import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import {
  HiDesktopComputer, HiDeviceMobile, HiCollection, HiDocumentText,
  HiUsers, HiShoppingCart, HiCode, HiCloud, HiSupport,
  HiDatabase, HiCog, HiLightningBolt, HiSpeakerphone,
} from 'react-icons/hi';
import styles from './Services.module.css';

const services = [
  {
    icon: <HiDesktopComputer />,
    title: 'Custom Website Development',
    desc: 'High-performance, SEO-optimised websites designed to convert visitors into clients.',
    list: ['Corporate & business websites', 'Portfolio & landing pages', 'Custom web applications'],
  },
  {
    icon: <HiDeviceMobile />,
    title: 'Mobile Application Development',
    desc: 'Native and cross-platform apps that deliver seamless experiences on any device.',
    list: ['Android & iOS applications', 'Cross-platform mobile apps', 'App maintenance & support'],
  },
  {
    icon: <HiCollection />,
    title: 'ERP System Development',
    desc: 'Integrated enterprise resource planning systems to streamline your business operations.',
    list: ['HR & payroll management', 'Inventory management', 'Business workflow automation'],
  },
  {
    icon: <HiDocumentText />,
    title: 'Billing & Inventory Systems',
    desc: 'Accurate, automated billing and inventory solutions with real-time analytics.',
    list: ['Invoice generation', 'Inventory tracking', 'Sales reporting & analytics'],
  },
  {
    icon: <HiUsers />,
    title: 'CRM Solutions',
    desc: 'Customer relationship management platforms that grow your pipeline and retention.',
    list: ['Customer & lead management', 'Sales pipeline management', 'Customer engagement systems'],
  },
  {
    icon: <HiShoppingCart />,
    title: 'E-commerce Development',
    desc: 'Robust online stores with complete product, order, and payment infrastructure.',
    list: ['Online store development', 'Order & product management', 'Payment gateway integration'],
  },
  {
    icon: <HiCode />,
    title: 'API Development & Integration',
    desc: 'Custom APIs and seamless third-party integrations that connect your digital ecosystem.',
    list: ['Custom API development', 'Third-party integrations', 'Payment & automation integrations'],
  },
  {
    icon: <HiCloud />,
    title: 'Cloud Hosting & Server Management',
    desc: 'Reliable cloud infrastructure with 24/7 monitoring, maintenance, and backup services.',
    list: ['Cloud deployment & setup', 'Monitoring & maintenance', 'Backup management'],
  },
  {
    icon: <HiSupport />,
    title: 'Website Maintenance & Support',
    desc: 'Ongoing technical support, security patches, and performance optimization services.',
    list: ['Security updates & bug fixes', 'Performance optimization', 'Ongoing technical support'],
  },
  {
    icon: <HiDatabase />,
    title: 'Database Design & Management',
    desc: 'Optimized database architectures ensuring data integrity, speed, and scalability.',
    list: ['Database architecture & optimization', 'Data migration', 'Data management solutions'],
  },
  {
    icon: <HiCog />,
    title: 'Custom Software Development',
    desc: 'Tailor-made software built precisely around your unique business requirements.',
    list: ['Business & enterprise applications', 'Internal management systems', 'Bespoke software solutions'],
  },
  {
    icon: <HiLightningBolt />,
    title: 'Business Process Automation',
    desc: 'Intelligent workflow automation that eliminates manual processes and drives efficiency.',
    list: ['Workflow & process optimization', 'Data & reporting automation', 'System integrations'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

const Services = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">What We Build</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-body">
            Comprehensive digital solutions engineered for business growth, operational efficiency,
            and competitive advantage.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={styles.card}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className={styles.list}>
                {s.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
