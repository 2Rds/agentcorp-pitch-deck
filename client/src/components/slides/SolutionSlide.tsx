import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } } };

export default function SolutionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Insight
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '2rem' }}>
          A file that's never complete in any one place{' '}
          <span style={{ color: 'var(--cyan)' }}>can never be stolen.</span>
        </motion.h2>

        <motion.div variants={i} style={{ marginBottom: '1.5rem', maxWidth: 640 }}>
          <p className="t-body" style={{ marginBottom: '1rem' }}>
            BlockDrive splits every file on upload. A cryptographically separated piece is never stored alongside your data. What an attacker finds isn't encrypted. It isn't scrambled.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-1)' }}>
            It's simply not there.
          </p>
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 640, borderLeft: '3px solid var(--cyan)' }}>
          <p className="t-body">
            No amount of computing power reconstructs something that doesn't exist — not today, not with quantum. This is the only model where the sophistication of the attacker is{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>completely irrelevant.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
