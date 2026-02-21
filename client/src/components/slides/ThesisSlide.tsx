import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } } };

export default function ThesisSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Shift
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '1.5rem' }}>
          What if we've been asking the wrong question?
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 600, marginBottom: '2rem' }}>
          The entire security industry has spent three decades asking:{' '}
          <span style={{ color: 'var(--text-4)', textDecoration: 'line-through' }}>"How do we keep them out?"</span>
          <br />
          We asked something different.
        </motion.p>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 620, textAlign: 'center', padding: '2.5rem 2rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            color: 'var(--text-1)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            "What if it didn't matter
            <br />
            <span style={{ color: 'var(--cyan)' }}>that they got in?"</span>
          </p>
        </motion.div>

        <motion.p variants={i} className="t-body-sm" style={{ marginTop: '1.5rem', color: 'var(--text-4)', textAlign: 'center' }}>
          That single question changes the architecture of everything.
        </motion.p>

      </motion.div>
    </div>
  );
}
