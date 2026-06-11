import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import {
  HiAcademicCap, HiStar, HiShieldCheck, HiCode,
  HiChat, HiClock, HiSupport, HiCurrencyDollar,
} from 'react-icons/hi';
import styles from './WhyUs.module.css';

const reasons = [
  { icon: <HiAcademicCap />, title: 'Experienced Development Team', desc: 'Skilled engineers with hands-on expertise across modern frameworks, platforms, and cloud infrastructure.' },
  { icon: <HiStar />, title: 'Customized Business Solutions', desc: 'Every project is designed around your specific goals, workflows, and growth objectives — no templates.' },
  { icon: <HiShieldCheck />, title: 'Scalable & Secure Applications', desc: 'Enterprise-grade security practices and architectures built to scale as your business expands.' },
  { icon: <HiCode />, title: 'Modern Development Practices', desc: 'Agile methodologies, CI/CD pipelines, and cutting-edge technology stacks for faster, better delivery.' },
  { icon: <HiChat />, title: 'Transparent Communication', desc: 'Regular updates, clear reporting, and always-accessible support throughout your project lifecycle.' },
  { icon: <HiClock />, title: 'On-Time Project Delivery', desc: 'Disciplined project management with defined milestones ensuring delivery within agreed timelines.' },
  { icon: <HiSupport />, title: 'Long-Term Technical Support', desc: 'Post-launch support, maintenance, and continuous improvement to keep your systems performing optimally.' },
  { icon: <HiCurrencyDollar />, title: 'Cost-Effective Solutions', desc: 'Competitive pricing without compromising quality — maximum value for your technology investment.' },
];

const WhyUs = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="why" className={styles.why} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow center">Our Strengths</p>
          <h2 className="section-title center">Why Choose ARK Digital?</h2>
          <p className="section-body center">
            We combine technical depth with business understanding to deliver solutions that create
            real, measurable impact.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className={styles.icon}>{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
