import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const metrics = [
  { value: '~$5K', label: 'AI workforce / month', color: 'var(--cyan)' },
  { value: '$88K', label: 'Human equivalent / month', color: 'var(--text-4)' },
  { value: '~94%', label: 'Cost reduction', color: 'var(--gold)' },
];

const departments = [
  { name: 'Executive Asst', agent: 'Alex',   status: 'LIVE', desc: 'Scheduling + briefs' },
  { name: 'Finance',        agent: 'Morgan', status: 'LIVE', desc: 'Models + investor ops' },
  { name: 'Operations',     agent: 'Jordan', status: 'LIVE', desc: 'Workforce orchestration' },
  { name: 'Marketing',      agent: 'Taylor', status: 'LIVE', desc: 'Content + brand' },
  { name: 'Legal',          agent: 'Casey',  status: 'LIVE', desc: 'Contracts + IP' },
  { name: 'Compliance',     agent: 'CCO',    status: 'LIVE', desc: 'Regulatory + audit' },
  { name: 'Sales',          agent: 'Sam',    status: 'LIVE', desc: 'Full-stack · dual runtime' },
];

export default function AgentCorpSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.85rem' }}>
          The Operating Model — AgentCorp
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.75rem' }}>
          One human CEO. Seven AI agents. A full-stack AI sales floor.{' '}
          <span className="c-cyan">This is how the company actually runs.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: '100%', marginBottom: '0.75rem' }}>
          BlockDrive doesn't plan to use AI agents someday. It runs on them today — seven agents with persistent memory, namespace isolation, and multi-model intelligence, operating across a four-layer ecosystem with centralized governance enforcing spending limits, decision boundaries, and escalation protocols.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem 2.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.65 }}>
          <p><span className="c-cyan" style={{ fontWeight: 600 }}>corp.blockdrive.co</span> — cloud workspace where agents do analysis, content, compliance, and financial modeling</p>
          <p><span className="c-cyan" style={{ fontWeight: 600 }}>Slack</span> — inter-agent messaging, status updates, and cross-department handoffs — fully autonomous</p>
          <p><span className="c-cyan" style={{ fontWeight: 600 }}>Telegram</span> — CEO executive channel for spending approvals, critical decisions, and escalations</p>
          <p><span className="c-cyan" style={{ fontWeight: 600 }}>sales.blockdrive.co</span> — full sales platform with dual runtime: ElevenLabs voice for live calls, cognitive layer that compounds shared intelligence between them</p>
        </motion.div>

        {/* Metrics */}
        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {metrics.map((m) => (
            <div key={m.label} style={{ textAlign: 'center', padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: m.color, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>{m.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Department cards */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.65rem', marginBottom: '1.25rem' }}>
          {departments.map((d) => (
            <div key={d.name} style={{ padding: '0.75rem 0.7rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--text-1)', marginBottom: '0.25rem' }}>{d.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--cyan)', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                {d.agent} · {d.status}
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-4)', letterSpacing: '0.03em' }}>{d.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom card */}
        <motion.div variants={i} style={{ padding: '1.1rem 1.4rem', background: 'rgba(255,255,255,0.025)', borderLeft: '2px solid var(--cyan)', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
          <p className="t-body" style={{ fontSize: '0.875rem' }}>
            Every capability is proven in production — real financial models, real investor communications, real compliance workflows, real sales outreach. No seed-stage company has seven autonomous agents — spanning executive support, finance, operations, marketing, legal, compliance, and sales — operating simultaneously. We do.{' '}
            <span className="c-cyan" style={{ fontWeight: 600 }}>The result: BlockDrive's $2M goes 3–5× further than any comparable seed-stage company.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
