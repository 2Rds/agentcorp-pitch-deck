import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TitleSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6, flexShrink: 0,
            background: 'linear-gradient(135deg, var(--cyan) 0%, #3b82f6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M16 4V28M4 10L28 22M28 10L4 22" stroke="white" strokeWidth="1.5" opacity="0.35"/>
            </svg>
          </div>
          <span className="eyebrow-muted">BlockDrive</span>
        </motion.div>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '2rem' }}>
          The first cloud storage system where someone finding a way in{' '}
          <span className="c-cyan">does not break the system.</span>
        </motion.h2>

        <motion.div variants={i} style={{ width: 360, height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

        <motion.div variants={i} style={{
          display: 'inline-flex', flexDirection: 'column', gap: '0.3rem',
          padding: '1rem 1.4rem',
          background: 'var(--surface)',
          border: '1px solid var(--border-hi)',
          borderRadius: 'var(--radius-md)',
        }}>
          <span className="eyebrow-muted">Seed Round</span>
          <span className="t-stat" style={{ fontSize: '2rem' }}>$2M</span>
          <span className="t-data">$12M Post-Money SAFE</span>
        </motion.div>

        <motion.p variants={i} className="eyebrow-muted" style={{ marginTop: '2.5rem' }}>
          Confidential Investment Materials
        </motion.p>

      </motion.div>
    </div>
  );
}
