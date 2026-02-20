import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const dontClaim = [
  'IPFS can\'t be breached',
  'R2 can\'t be breached',
  'We\'re unhackable',
];

const doClaim = [
  'Breaches yield nothing usable',
  'Complete files never exist in one place',
  'Hacking us is architecturally pointless',
];

export default function SolutionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Solution
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '0.85rem' }}>
          Programmed Incompleteness
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 600, marginBottom: '1.75rem' }}>
          We don't just encrypt data. We architect it so that a complete, usable file never exists in a single location. The first 16 bytes — the cryptographic seed that makes reconstruction possible — are stripped before upload, stored separately with a zero-knowledge proof, and reunited only on the client at retrieval. Without those bytes, whatever an attacker takes is mathematically irreversible garbage.
        </motion.p>

        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.5rem' }}>

          {/* Don't claim */}
          <div style={{ padding: '1.4rem 1.6rem', background: 'rgba(255,80,80,0.03)', border: '1px solid rgba(255,80,80,0.12)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,80,80,0.6)', marginBottom: '1rem' }}>We don't claim</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {dontClaim.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(255,80,80,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'rgba(255,80,80,0.7)', fontSize: '0.6rem', fontWeight: 700 }}>✕</span>
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-3)', textDecoration: 'line-through' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Do claim */}
          <div style={{ padding: '1.4rem 1.6rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '1rem' }}>We do claim</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {doClaim.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(0,229,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'var(--cyan)', fontSize: '0.6rem', fontWeight: 700 }}>✓</span>
                  </span>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-1)', fontWeight: 500 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 640 }}>
          <p className="t-body">
            <span className="c-white" style={{ fontWeight: 600 }}>Without the 16 bytes, the file is cryptographic garbage</span>{' '}
            — impossible to reconstruct even with unlimited compute. This is the architecture. This is the moat.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
