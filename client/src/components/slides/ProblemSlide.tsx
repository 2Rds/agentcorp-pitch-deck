import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const bottlenecks = [
  { icon: '📞', role: 'Prospecting', gap: '30-50 manual calls/day ceiling', pain: 'Pipeline starves while servicing existing clients' },
  { icon: '📋', role: 'Compliance', gap: 'Regulatory tracking, risk mitigation', pain: 'One missed deadline can cost the entire deal' },
  { icon: '💰', role: 'Finance', gap: 'Revenue tracking, invoicing, cash flow', pain: 'Blind spots until the accountant finds them' },
  { icon: '📢', role: 'Marketing', gap: 'Content, campaigns, outbound sequences', pain: 'Posts when they remember — no system, no cadence' },
  { icon: '📁', role: 'Operations', gap: 'Documents, workflows, project tracking', pain: 'Mismanaged ops can stall revenue for months' },
  { icon: '⚖️', role: 'Legal/HR', gap: 'Contracts, onboarding, team management', pain: '"We don\'t really have a process for that."' },
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
          33 million US small businesses run on heroics.{' '}
          <span className="c-cyan">Every one of them hits the same ceiling.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
          The founder of every small business is simultaneously the CEO, CFO, CMO, and IT department.
          They know AI can help but lack the resources to deploy, configure, and manage it. The constraint
          isn't ambition — it's bandwidth. Revenue stalls while operations run on duct tape and late nights.
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
