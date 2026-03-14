import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const metrics = [
  { value: '~$10K', label: 'AI workforce / month', color: 'var(--cyan)' },
  { value: '$263K', label: 'Human equivalent / month', color: 'var(--text-4)' },
  { value: '~96%', label: 'Cost reduction', color: 'var(--gold)' },
];

const departments = [
  { name: 'Finance',    agent: 'Morgan', status: 'LIVE', desc: 'Models + investor ops' },
  { name: 'Executive',  agent: 'Alex',   status: 'LIVE', desc: 'Scheduling + briefs' },
  { name: 'Operations', agent: 'Jordan', status: 'LIVE', desc: 'Workforce mgmt' },
  { name: 'Marketing',  agent: 'Taylor', status: 'LIVE', desc: 'Content + brand' },
  { name: 'Legal',      agent: 'Casey',  status: 'LIVE', desc: 'Contracts + IP' },
  { name: 'Sales',      agent: 'Sam',    status: 'LIVE', desc: '10 voice reps' },
];

export default function AgentCorpSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Operating Model — AgentCorp
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.6rem' }}>
          One human CEO. 34 AI employees.{' '}
          <span className="c-cyan">This is how the company actually runs.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 780, marginBottom: '1rem' }}>
          BlockDrive doesn't plan to use AI agents someday. It runs on them today. We built a full cognitive workforce — finance, operations, marketing, legal, sales, and compliance — on a proprietary orchestration platform with persistent memory, namespace isolation, and multi-model intelligence. The result is organizational capabilities that are structurally unavailable to any other company at this stage.
        </motion.p>

        {/* Metrics */}
        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1rem' }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ textAlign: 'center', padding: '0.75rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: m.color, lineHeight: 1, marginBottom: '0.25rem' }}>{m.value}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.04em' }}>{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Department cards */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
          {departments.map((d) => (
            <div key={d.name} style={{ padding: '0.6rem 0.7rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.7rem', color: 'var(--text-1)', marginBottom: '0.2rem' }}>{d.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--cyan)', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                {d.agent} · {d.status}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)', letterSpacing: '0.03em' }}>{d.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom card */}
        <motion.div variants={i} style={{ padding: '0.9rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderLeft: '3px solid var(--cyan)', borderRadius: 'var(--radius-lg)' }}>
          <p className="t-body" style={{ fontSize: '0.72rem' }}>
            BlockDrive is AgentCorp's first customer. Every capability is proven in production — real financial models, real investor communications, real compliance workflows. No seed-stage company has a CFO, CMO, General Counsel, Head of Sales, and Chief Compliance Officer operating simultaneously. We do. When the storage product is proven,{' '}
            <span className="c-cyan" style={{ fontWeight: 600 }}>the workforce platform becomes the second product.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
