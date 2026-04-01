import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const gaps = [
  { role: 'CFO', gap: 'Cash flow, AP/AR, close process', pain: 'Founder does it in spreadsheets at midnight' },
  { role: 'CMO', gap: 'Content, campaigns, brand', pain: 'Posts when they remember. No strategy.' },
  { role: 'Compliance', gap: 'Policy, regulatory audit', pain: 'Discovered at audit time. Always too late.' },
  { role: 'Legal', gap: 'Contracts, IP review', pain: 'Signs whatever the other side sends.' },
  { role: 'HR', gap: 'Hiring, onboarding, org mgmt', pain: '"We don\'t really have an HR process."' },
  { role: 'Sales Ops', gap: 'Pipeline, outbound, follow-up', pain: 'Founder is the entire sales team.' },
];

export default function ProblemSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Problem
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          33 million US small businesses need a full C-Suite.{' '}
          <span className="c-cyan">None of them can afford one.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '1.75rem' }}>
          The founder is the CEO, CFO, CMO, and IT department. They know AI is transformative
          but lack the resources to deploy, configure, and govern specialized AI agents. The result
          is a business running on duct tape and heroics.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
          {gaps.map((g, idx) => (
            <div key={idx} style={{
              padding: '0.9rem 1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.35rem' }}>{g.role}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)', marginBottom: '0.3rem' }}>{g.gap}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-4)', fontStyle: 'italic' }}>{g.pain}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
