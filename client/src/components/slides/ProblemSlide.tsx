import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } } };

export default function ProblemSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Problem
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '2rem' }}>
          For 30 years, we've been trying to keep 100% of hackers out, 100% of the time.
        </motion.h2>

        <motion.div variants={i} className="bar-card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--cyan)', padding: '1.75rem 2rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--cyan)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}>
            97%
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--text-1)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
            of organizations that reported an AI-related security incident lacked proper AI access controls.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', letterSpacing: '0.06em' }}>
            — IBM & PONEMON INSTITUTE, 2024
          </p>
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 640 }}>
          <p className="t-body">
            AI doesn't sleep. It doesn't take weekends. It finds the one gap you missed — at a speed and scale no human security team can match. The strategy of keeping every attacker out{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>wasn't just failing. It's now impossible.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
