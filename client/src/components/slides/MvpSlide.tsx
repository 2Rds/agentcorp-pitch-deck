import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } } };

const cards = [
  { label: 'For your team',   value: 'Drag. Drop. Done.' },
  { label: 'For your IT dept', value: 'Nothing to learn.' },
  { label: 'For attackers',   value: 'Nothing to steal.' },
];

export default function MvpSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Product
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '1.5rem' }}>
          BlockDrive feels far more like Dropbox than Filebase.{' '}
          <span style={{ color: 'var(--cyan)' }}>That's by design.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 600, marginBottom: '2rem' }}>
          No blockchain jargon. No wallets to configure. No behavior change for your team. The architecture underneath is unlike anything that has ever existed in cloud storage — and nobody needs to know that except you.
        </motion.p>

        <motion.div variants={i} className="cols-3">
          {cards.map((card) => (
            <div key={card.label} style={{
              padding: '1.5rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '0.75rem' }}>
                {card.label}
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-1)' }}>
                {card.value}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
