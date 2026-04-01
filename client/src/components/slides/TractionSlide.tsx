import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const metrics = [
  { value: '9', label: 'Agents deployed on DigitalOcean', color: 'var(--cyan)' },
  { value: '264', label: 'Test cases + CI/CD pipeline', color: 'var(--gold)' },
  { value: '162', label: 'Knowledge plugins loaded', color: '#8b9cf7' },
];

const traction = [
  { item: 'Stripe billing', detail: '3 tiers live — Pro $250, Growth $1K, Scale $2.5K + credit metering + webhooks' },
  { item: 'Telegram Mini App', detail: '@AgentCorpBot — full agent workspace inside Telegram' },
  { item: 'Voice sales engine', detail: 'sales.agentcorp.work — ElevenLabs + Telnyx + NextGenSwitch PBX' },
  { item: 'Inter-agent comms', detail: 'MessageBus with Redis Streams, namespace isolation, peer-to-peer delegation' },
  { item: 'Governance engine', detail: 'Per-agent spend limits, approval flows, atomic budget enforcement' },
  { item: 'Customer zero', detail: 'AgentCorp runs on AgentCorp — proving the thesis daily' },
];

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Traction
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Pre-revenue.{' '}
          <span className="c-cyan">Not pre-product.</span>
        </motion.h2>

        {/* Stat cards */}
        <motion.div variants={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
          {metrics.map((m, idx) => (
            <div key={idx} style={{
              flex: 1, padding: '1rem', textAlign: 'center',
              background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', color: m.color }}>{m.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', marginTop: '0.2rem' }}>{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Traction list */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {traction.map((t, idx) => (
            <div key={idx} style={{
              display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', alignItems: 'center',
              padding: '0.6rem 1rem',
              background: idx % 2 === 0 ? 'var(--surface)' : 'transparent',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--cyan)', fontWeight: 500 }}>✓ {t.item}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-3)' }}>{t.detail}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
