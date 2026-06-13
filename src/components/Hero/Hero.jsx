import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Hero.module.css';

const stats = [
  { icon: '👥', num: '50,000+', label: 'Leads Generated' },
  { icon: '📈', num: '$5M+', label: 'Revenue Influenced' },
  { icon: '⚡', num: '24/7', label: 'AI Automation' },
  { icon: '🏆', num: '98%', label: 'Client Retention' },
];

/* Orbit nodes - exactly matching template positions */
const orbitNodes = [
  { label: 'Marketing\n& Ads', icon: '📢', angle: -60, r: 145 },
  { label: 'Websites\n& Apps', icon: '💻', angle: 30, r: 145 },
  { label: 'AI\nAutomation', icon: '🤖', angle: 160, r: 130 },
  { label: 'SaaS\nSolutions', icon: '☁️', angle: 110, r: 145 },
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
      nodes = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n, i) => {
        nodes.slice(i + 1).forEach((m) => {
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96,165,250,0.45)';
        ctx.fill();
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="home">
      {/* BG layers */}
      <div className={styles.grid} />
      <div className={styles.glowBlue} />
      <div className={styles.glowPurple} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.wrap}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <motion.h1 className={styles.title}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}>
            AI-Powered<br />
            <span className={styles.accent}>Growth Systems</span><br />
            <span className={styles.sub}>For Modern Businesses</span>
          </motion.h1>

          <motion.p className={styles.desc}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            We help businesses generate leads, automate follow-up,
            and scale using Facebook Ads, Google Ads, websites,
            AI automation, and SaaS solutions.
          </motion.p>

          <motion.div className={styles.btnRow}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}>
            <button onClick={() => scrollTo('contact')} className={styles.btnPrimary}>
              📅 Book Strategy Call
            </button>
            <button onClick={() => scrollTo('services')} className={styles.btnGhost}>
              View Services <HiArrowRight />
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT — orbit diagram ── */}
        <motion.div className={styles.right}
          initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}>
          <div className={styles.orbitArea}>
            {/* outer glow ring */}
            <div className={styles.outerRing} />
            <div className={styles.midRing} />

            {/* Center glowing A circle */}
            <div className={styles.centerCircle}>
              <div className={styles.centerGlow} />
              <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
                <defs>
                  <linearGradient id="cg1" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#93C5FD"/>
                    <stop offset="1" stopColor="#2563EB"/>
                  </linearGradient>
                  <linearGradient id="cg2" x1="34" y1="6" x2="50" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BAE6FD"/>
                    <stop offset="1" stopColor="#38BDF8"/>
                  </linearGradient>
                </defs>
                {/* A */}
                <path d="M8 46L22 10L36 46" stroke="url(#cg1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 33H31" stroke="url(#cg1)" strokeWidth="4" strokeLinecap="round"/>
                {/* K diagonals */}
                <path d="M38 26L47 14" stroke="url(#cg2)" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M38 26L47 40" stroke="url(#cg1)" strokeWidth="3.5" strokeLinecap="round"/>
                {/* Arrow tip */}
                <path d="M44 12L47 14L45 18" stroke="url(#cg2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Orbit nodes */}
            {orbitNodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const cx = 50 + (node.r / 3.2) * Math.cos(rad);
              const cy = 50 + (node.r / 3.2) * Math.sin(rad);
              return (
                <div key={i} className={styles.orbitNode}
                  style={{ left: `${cx}%`, top: `${cy}%` }}>
                  <span className={styles.nodeIcon}>{node.icon}</span>
                  {node.label.split('\n').map((line, j) => (
                    <span key={j} className={styles.nodeLabel}>{line}</span>
                  ))}
                </div>
              );
            })}

            {/* Connecting dot lines */}
            <svg className={styles.orbitSvg} viewBox="0 0 300 300" fill="none">
              {orbitNodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const cx = 150 + (node.r / 3.2) * (300 / 100) * 16 * Math.cos(rad);
                const cy = 150 + (node.r / 3.2) * (300 / 100) * 16 * Math.sin(rad);
                return (
                  <line key={i} x1="150" y1="150" x2={cx} y2={cy}
                    stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div className={styles.statsBar}
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statBox}>
            <span className={styles.statIcon}>{s.icon}</span>
            <div>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
