import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const metrics = [
  { value: '9', label: 'Agents live in production', color: 'var(--cyan)' },
  { value: '3', label: 'Stripe tiers with billing live', color: 'var(--gold)' },
  { value: 'Day 0', label: 'Dogfooding — AgentCorp runs on AgentCorp', color: '#8b9cf7' },
];

const shipped = [
  { item: 'Full billing stack', detail: 'Stripe integration — 3 tiers, credit metering, overage tracking, webhooks' },
  { item: 'Telegram Mini App', detail: '@AgentCorpBot — full agent workspace, live on Telegram' },
  { item: 'Voice sales engine', detail: 'ElevenLabs + Telnyx telephony — real calls, real pipeline' },
  { item: 'Inter-agent comms', detail: 'MessageBus — agents delegate, coordinate, and share context' },
  { item: 'Governance engine', detail: 'Per-agent spend limits, approval flows, budget enforcement' },
  { item: 'Web dashboard', detail: 'React 18 admin interface with full agent management' },
];

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Traction
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
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

        {/* What's shipped */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
          {shipped.map((t, idx) => (
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

        <motion.div variants={i} style={{
          padding: '0.85rem 1.2rem',
          background: 'rgba(232,201,106,0.04)',
          border: '1px solid rgba(232,201,106,0.15)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)' }}>
            <span style={{ fontWeight: 600, color: 'var(--gold)' }}>GTM launch:</span> All 3 tiers + white-glove + 5,000 free credits available from day 1 post-raise. Founder-led sales into insurance and financial services — selling into the exact industry he spent a decade in.
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
