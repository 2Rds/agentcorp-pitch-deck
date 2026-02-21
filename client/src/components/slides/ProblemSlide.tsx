import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

export default function ProblemSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Problem
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '1.25rem' }}>
          For 30 years, every security strategy rested on one assumption: keep every bad actor out, 100% of the time.
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 560, marginBottom: '1.75rem' }}>
          Breaches kept happening anyway. The industry sold better locks. Enterprises kept buying them. Then AI arrived and made the assumption obsolete entirely.
        </motion.p>

        <motion.div variants={i} style={{
          display: 'flex', gap: '1.75rem', padding: '1.25rem 1.5rem',
          background: 'var(--surface)', border: '1px solid var(--border-hi)',
          borderRadius: 'var(--radius-lg)', alignItems: 'center',
          maxWidth: 620, marginBottom: '1.5rem',
        }}>
          <span className="t-stat" style={{ flexShrink: 0 }}>97%</span>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-1)', lineHeight: 1.35, marginBottom: '0.35rem' }}>
              of organizations reporting an AI-related breach lacked proper AI access controls.
            </p>
            <span className="t-data">— IBM & Ponemon Institute, 2024</span>
          </div>
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 560 }}>
          <p className="t-body">
            AI doesn't sleep. It doesn't take weekends. It finds the one gap you missed at a speed no human security team can match. Keeping every attacker out{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>wasn't just failing — it's now impossible.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
