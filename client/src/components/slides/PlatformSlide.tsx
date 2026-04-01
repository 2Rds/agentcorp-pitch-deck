import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const agents = [
  { name: 'Alex', title: 'Executive Assistant', desc: 'Scheduling, comms, cross-dept coordination', color: 'var(--cyan)' },
  { name: 'Morgan', title: 'Investor Relations', desc: 'Cap table, data rooms, fundraising', color: 'var(--cyan)' },
  { name: 'Riley', title: 'Chief Financial Agent', desc: 'Budgeting, AP/AR, cash flow, close process', color: 'var(--gold)' },
  { name: 'Jordan', title: 'Chief Operating Agent', desc: 'Workforce mgmt, billing host', color: 'var(--gold)' },
  { name: 'Taylor', title: 'Chief Marketing Agent', desc: 'Content, campaigns, brand strategy', color: '#8b9cf7' },
  { name: 'Parker', title: 'Chief Compliance Agent', desc: 'Risk, policy, regulatory audit', color: '#8b9cf7' },
  { name: 'Casey', title: 'Legal Counsel', desc: 'Contracts, IP portfolio, legal review', color: '#34d399' },
  { name: 'Avery', title: 'Head of HR', desc: 'Hiring, onboarding, org chart', color: '#34d399' },
  { name: 'Sam', title: 'Sales Manager', desc: 'Pipeline, deal governance, SDR orchestration', color: 'var(--cyan)' },
];

export default function PlatformSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Platform
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '0.5rem' }}>
          9 department heads.{' '}
          <span className="c-cyan">All live. All deployed.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '1.25rem' }}>
          Every agent runs on @waas/runtime with scoped tools, persistent memory, and namespace isolation. All 9 communicate through a shared MessageBus.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.55rem' }}>
          {agents.map((a, idx) => (
            <div key={idx} style={{
              padding: '0.75rem 0.9rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                background: `${a.color}15`,
                border: `1px solid ${a.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', color: a.color,
              }}>{a.name[0]}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-1)', marginBottom: '0.1rem' }}>{a.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: a.color, marginBottom: '0.2rem' }}>{a.title}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-4)', lineHeight: 1.4 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
