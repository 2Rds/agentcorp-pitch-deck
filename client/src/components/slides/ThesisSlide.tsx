import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const signals = [
  { stat: '3,332', label: 'Record U.S. data compromises in 2025 — up 79% in five years', sub: '— Identity Theft Resource Center, 2026', color: 'var(--text-3)' },
  { stat: '$10.2M', label: 'Average U.S. breach cost hit an all-time high in 2025', sub: '— IBM Cost of a Data Breach Report, 2025', color: 'var(--gold)' },
  { stat: '97%', label: 'Of AI-related breaches lacked proper AI access controls', sub: '— IBM & Ponemon Institute, 2025', color: 'var(--cyan)' },
];

export default function ThesisSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Why Now
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.9rem' }}>
          The old model was already losing.{' '}
          <span className="c-cyan">AI just made it impossible to defend.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.4rem' }}>
          Security teams had accepted a certain level of breach as the cost of doing business. Human attackers have limits — they sleep, they make mistakes, they can only probe so many gaps at once. AI has none of those constraints. The threat environment didn't gradually worsen. It structurally changed. And with the GENIUS and CLARITY Acts, Congress is building the first federal framework for digital assets — legitimizing the very infrastructure our architecture runs on.
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {signals.map((s) => (
            <div key={s.stat} style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: s.color, lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{s.stat}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.825rem', color: 'var(--text-1)', lineHeight: 1.4, marginBottom: '0.35rem' }}>{s.label}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.04em' }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 720 }}>
          <p className="t-body">
            This is the moment when "we have encryption" stops being a sufficient answer in a board meeting — and enterprises start asking a different question entirely.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>BlockDrive is built to be that answer.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
