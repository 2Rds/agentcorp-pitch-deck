import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const tiers = [
  { name: 'Pro', price: '$250', credits: '5,000', highlight: false },
  { name: 'Growth', price: '$1,000', credits: '20,000', highlight: true },
  { name: 'Scale', price: '$2,500', credits: '50,000', highlight: false },
];

const margins = [
  { label: 'Subscription', value: '70%', note: 'Flat across all tiers', color: 'var(--cyan)' },
  { label: 'Overage', value: '85%', note: '$0.10/credit flat', color: 'var(--gold)' },
  { label: 'Wgite-Glove', value: '67%', note: '+$1,500/mo on Scale', color: '#8b9cf7' },
];

export default function BusinessModelSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Business Model
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Credit-based pricing.{' '}
          <span className="c-cyan">All 9 agents at every tier.</span>
        </motion.h2>

        {/* Tier cards */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {tiers.map((t, idx) => (
            <div key={idx} style={{
              padding: '1.25rem',
              background: t.highlight ? 'rgba(0,229,255,0.06)' : 'var(--surface)',
              border: `1px solid ${t.highlight ? 'rgba(0,229,255,0.25)' : 'var(--border-hi)'}`,
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: t.highlight ? 'var(--cyan)' : 'var(--text-4)', marginBottom: '0.5rem' }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{t.price}<span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-4)' }}>/mo</span></div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-3)' }}>{t.credits} credits</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-4)', marginTop: '0.25rem' }}>All 9 agents · Unlimited seats</div>
            </div>
          ))}
        </motion.div>

        {/* Margin boxes */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {margins.map((m, idx) => (
            <div key={idx} style={{
              padding: '0.85rem 1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: m.color }}>{m.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.15rem' }}>{m.label} Gross Margin</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-4)' }}>{m.note}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-3)', maxWidth: 700 }}>
          $0.05/credit effective rate across all tiers. Overage at $0.10/credit creates natural upgrade triggers.
          Blended margin improves as customers exceed included credits — a Scale customer with 20K overage reaches 77%.
          5,000 free credits at signup (card required).
        </motion.p>

      </motion.div>
    </div>
  );
}
