import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const stats = [
  { value: '6',          label: 'Active enterprise pipeline conversations',       color: 'var(--cyan)' },
  { value: 'Organic',    label: 'Waitlist growing with zero marketing spend',       color: 'var(--gold)' },
  { value: 'Demo-Ready', label: 'MVP live with full breach-proof architecture',    color: 'var(--text-1)' },
];

const pipeline = ['Holland & Knight', 'Mercury', 'Bitwise', "Sotheby's", 'BlackRock Aladdin', 'Gunster Yoakley'];

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Traction
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.9rem' }}>
          Pre-revenue.{' '}
          <span className="c-cyan">Not pre-pipeline.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          Sean spent a decade earning the trust of institutional investors and business owners at
          JPMorgan, Merrill Lynch, AXA, and Prudential. That network is now BlockDrive's pipeline —
          six active enterprise conversations, a growing organic waitlist, and a demo-ready product
          behind every meeting.
        </motion.p>

        {/* Stats row */}
        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {stats.map((s) => (
            <div key={s.value} style={{ padding: '1.1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: s.color, lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Enterprise pipeline */}
        <motion.div variants={i} style={{ marginBottom: '1.25rem' }}>
          <span className="eyebrow-muted" style={{ display: 'block', marginBottom: '0.5rem' }}>Enterprise Pipeline</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {pipeline.map((name) => (
              <span key={name} className="pill pill-cyan">{name}</span>
            ))}
          </div>
        </motion.div>

        {/* Waitlist + closing */}
        <motion.div variants={i} className="bar-card" style={{ maxWidth: 720 }}>
          <p className="t-body">
            Early waitlist traction from both businesses and individuals —{' '}
            <span className="c-gold" style={{ fontWeight: 600 }}>zero marketing spend</span>.
            Every conversation so far has been inbound or relationship-driven.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>The demand is already here. We're raising to meet it.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
