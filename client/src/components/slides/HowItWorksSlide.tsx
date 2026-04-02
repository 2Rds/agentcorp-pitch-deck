import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  { name: 'Interface Layer', tech: 'Telegram Bot API · Web Dashboard · Mobile-responsive', color: 'var(--cyan)' },
  { name: 'Agent Orchestration', tech: 'Custom Runtime · Inter-agent messaging · Task delegation · Escalation engine', color: 'var(--gold)' },
  { name: 'Model Layer', tech: 'Claude (reasoning) · Gemini (analysis) · Grok (speed) · ElevenLabs (voice)', color: '#8b9cf7' },
  { name: 'Infrastructure', tech: 'Stripe Billing · NextGenSwitch PBX · Redis State · PostgreSQL · Credit Metering', color: 'var(--text-3)' },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Architecture</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Multi-model. Multi-agent.{' '}<span className="c-cyan">One managed workforce.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
          {layers.map((l, idx) => (
            <div key={idx} style={{ padding: '0.85rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: l.color, minWidth: 160 }}>{l.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>{l.tech}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem', marginBottom: '1rem' }}>
          {[
            { val: '3', label: 'LLM Providers', note: 'No single-vendor risk' },
            { val: '9', label: 'Specialized Agents', note: 'Full C-suite coverage' },
            { val: '∞', label: 'SDR Clones', note: 'Sam scales horizontally' },
          ].map((m, idx) => (
            <div key={idx} style={{ padding: '0.85rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--cyan)' }}>{m.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.15rem' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--text-4)' }}>{m.note}</div>
            </div>
          ))}
        </motion.div>
        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', maxWidth: 700 }}>
          Each agent selects the optimal model per task. Voice synthesis via ElevenLabs enables real phone conversations. The entire stack is model-agnostic by design.
        </motion.p>
      </motion.div>
    </div>
  );
}
