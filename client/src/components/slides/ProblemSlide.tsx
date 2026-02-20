import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const stats = [
  { value: '$10.2M', label: 'Avg US Breach Cost', source: 'IBM 2024', color: 'var(--text-3)' },
  { value: '54', label: 'Records Compromised / Second', source: 'Global', color: 'var(--text-3)' },
  { value: '83%', label: 'Enterprises Breached in 2 Years', source: 'Industry', color: 'var(--gold)' },
  { value: '277', label: 'Days to Identify a Breach', source: 'IBM 2024', color: 'var(--text-3)' },
];

const oldPlaybook = [
  { text: 'Firewalls', result: 'they get through' },
  { text: 'Encryption', result: 'keys get compromised' },
  { text: 'Access control', result: 'credentials get stolen' },
  { text: 'Zero-trust', result: 'still assumes prevention' },
];

export default function ProblemSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Problem
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 660, marginBottom: '0.85rem' }}>
          "Keep Them Out" Is Failing
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 580, marginBottom: '1.5rem' }}>
          The entire security industry spent 30 years on one strategy: prevent access. Every tool, every framework, every compliance regime is built on that assumption. It's not working — and it was never going to.
        </motion.p>

        {/* Stats */}
        <motion.div variants={i} className="cols-4" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.85rem' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: '1.1rem 1.2rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: s.color, lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.35, marginBottom: '0.3rem' }}>{s.label}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.04em' }}>{s.source}</p>
            </div>
          ))}
        </motion.div>

        {/* Old playbook */}
        <motion.div variants={i} style={{ marginBottom: '1.25rem' }}>
          <p className="eyebrow-muted" style={{ marginBottom: '0.75rem' }}>The Old Playbook</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.6rem' }}>
            {oldPlaybook.map((item) => (
              <div key={item.text} style={{ padding: '0.7rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-3)', textDecoration: 'line-through', marginBottom: '0.25rem' }}>{item.text}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(255,80,80,0.6)', letterSpacing: '0.02em' }}>→ {item.result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI callout */}
        <motion.div variants={i} className="bar-card" style={{ borderLeftColor: 'var(--gold)', background: 'rgba(232,201,106,0.04)', maxWidth: 680 }}>
          <p className="t-body">
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>And AI just made it structurally irreparable.</span>{' '}
            AI-powered attacks operate 24/7 with no fatigue. LLMs write sophisticated malware faster than defenders can patch. Zero-day windows shrink from months to hours. The "keep them out" model was already losing — in the AI era, it becomes fantasy.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
