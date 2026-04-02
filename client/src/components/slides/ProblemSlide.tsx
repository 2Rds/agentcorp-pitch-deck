import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const bottlenecks = [
  { icon: '📞', role: 'Prospecting', gap: '30-50 manual calls/day ceiling', pain: 'Pipeline starves while servicing existing book' },
  { icon: '📋', role: 'Compliance', gap: 'Filings, carrier requirements, E&O risk', pain: 'One missed filing can delay a case by months' },
  { icon: '💰', role: 'Finance', gap: 'Multi-carrier commission tracking', pain: 'Cash flow blind spots, quarterly CPA surprises' },
  { icon: '📢', role: 'Marketing', gap: 'Content, campaigns, seminar invites', pain: 'Posts when they remember — no system, no cadence' },
  { icon: '📁', role: 'Case Mgmt', gap: 'Documents, signatures, underwriting', pain: 'Mismanaged docs can stall a case for 6+ months' },
  { icon: '⚖️', role: 'Legal/HR', gap: 'Contracts, onboarding, licensing', pain: '"We don\'t really have a process for that."' },
];

export default function ProblemSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Problem
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          900,000 life insurance agents serve a $1.3 trillion market.{' '}
          <span className="c-cyan">Every one of them hits the same ceiling.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
          102 million Americans are uninsured or underinsured and know they need coverage. The constraint
          isn't demand — it's agent bandwidth. A solo producer is simultaneously the sales team, compliance
          department, finance office, and marketing agency. Complex cases take 6-12 months to close while
          the rest of the business runs on heroics.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
          {bottlenecks.map((g, idx) => (
            <div key={idx} style={{
              padding: '0.9rem 1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.35rem' }}>{g.icon} {g.role}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: '0.3rem' }}>{g.gap}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-4)', fontStyle: 'italic' }}>{g.pain}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
