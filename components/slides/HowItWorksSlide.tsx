import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const stack = [
  { layer: 'Distribution', items: ['Telegram Mini App (1B+ MAU)', 'Web Dashboard (React 18)', 'Slack Integration'], color: 'var(--cyan)' },
  { layer: 'Agent Layer', items: ['9 Agents × Custom Runtime', 'Scoped Tools + Memory', '160+ Tools & Plugins'], color: 'var(--gold)' },
  { layer: 'Communication', items: ['MessageBus (Redis Streams)', 'Namespace Isolation', 'Peer-to-Peer Delegation'], color: '#8b9cf7' },
  { layer: 'Intelligence', items: ['Cloudflare AI Gateway', 'Semantic Cache (Cohere)', 'Multi-Model Routing'], color: '#34d399' },
  { layer: 'Governance', items: ['Per-Agent Spend Limits', 'C-Suite Approval Flows', 'Atomic Budget Enforcement'], color: '#f472b6' },
  { layer: 'Infrastructure', items: ['DigitalOcean App Platform', 'Supabase + Redis', 'Stripe Billing + Webhooks'], color: 'var(--text-2)' },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Architecture
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.5rem' }}>
          Six layers. All live.{' '}
          <span className="c-cyan">Nothing here is roadmap.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '1.25rem' }}>
          Every layer is deployed and operational. This is not a prototype.
        </motion.p>

        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {stack.map((s, idx) => (
            <div key={idx} style={{
              display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1rem', alignItems: 'center',
              padding: '0.7rem 1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: s.color, fontWeight: 500 }}>{s.layer}</div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {s.items.map((item, j) => (
                  <div key={j} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)' }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
