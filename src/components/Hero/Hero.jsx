import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPhone } from 'react-icons/hi';
import styles from './Hero.module.css';

const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '12+', label: 'Industries Served' },
  { num: '100%', label: 'Client Satisfaction' },
];

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let nodes = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.3 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59,130,246,0.6)';
        ctx.fill();
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="home">
      {/* Background */}
      <div className={styles.grid} />
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            Full-Spectrum IT Solutions
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transforming Business Ideas into{' '}
            <span className={styles.accent}>Powerful Digital</span> Solutions
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help businesses build websites, mobile applications, ERP systems, CRM platforms,
            and custom software solutions that are secure, scalable, and growth-focused.
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button onClick={() => scrollTo('contact')} className="btn-primary">
              Get Free Consultation <HiArrowRight />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              <HiPhone /> Contact Us
            </button>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – SVG diagram */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.diagram}>
            <defs>
              <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="240" cy="240" r="200" fill="url(#cg)" />
            <circle cx="240" cy="240" r="200" stroke="#2563EB" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="240" cy="240" r="150" stroke="#2563EB" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="8 6" />
            <circle cx="240" cy="240" r="100" stroke="#2563EB" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="240" cy="240" r="36" fill="#1B3A6B" stroke="#2563EB" strokeWidth="2" />
            <circle cx="240" cy="240" r="24" fill="#2563EB" opacity="0.3" />
            <text x="240" y="244" textAnchor="middle" fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="14" fill="#93C5FD">ARK</text>
            <g style={{ animation: 'spin 30s linear infinite', transformOrigin: '240px 240px' }}>
              <circle cx="240" cy="70" r="20" fill="#0D1B35" stroke="#2563EB" strokeWidth="1.5" />
              <text x="240" y="74" textAnchor="middle" fontSize="10" fill="#93C5FD" fontFamily="Inter,sans-serif">Web</text>
              <line x1="240" y1="90" x2="240" y2="204" stroke="url(#lg)" strokeWidth="1" />
              <circle cx="389" cy="169" r="20" fill="#0D1B35" stroke="#2563EB" strokeWidth="1.5" />
              <text x="389" y="173" textAnchor="middle" fontSize="10" fill="#93C5FD" fontFamily="Inter,sans-serif">App</text>
              <line x1="372" y1="181" x2="274" y2="227" stroke="url(#lg)" strokeWidth="1" />
              <circle cx="349" cy="341" r="20" fill="#0D1B35" stroke="#2563EB" strokeWidth="1.5" />
              <text x="349" y="345" textAnchor="middle" fontSize="9" fill="#93C5FD" fontFamily="Inter,sans-serif">ERP</text>
              <line x1="334" y1="328" x2="265" y2="263" stroke="url(#lg)" strokeWidth="1" />
              <circle cx="131" cy="341" r="20" fill="#0D1B35" stroke="#2563EB" strokeWidth="1.5" />
              <text x="131" y="345" textAnchor="middle" fontSize="9" fill="#93C5FD" fontFamily="Inter,sans-serif">CRM</text>
              <line x1="146" y1="328" x2="215" y2="263" stroke="url(#lg)" strokeWidth="1" />
              <circle cx="91" cy="169" r="20" fill="#0D1B35" stroke="#2563EB" strokeWidth="1.5" />
              <text x="91" y="173" textAnchor="middle" fontSize="9" fill="#93C5FD" fontFamily="Inter,sans-serif">API</text>
              <line x1="108" y1="181" x2="206" y2="227" stroke="url(#lg)" strokeWidth="1" />
            </g>
          </svg>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;
