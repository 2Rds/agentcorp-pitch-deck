import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const tiers = [
  { name: 'Pro', price: '$250', credits: '5,000', highlight: false, note: 'Entry point · Prove ROI' },
  { name: 'Growth', price: '$1,000', credits: '20,000', highlight: true, note: 'Post-first-close · Scaling' },
  { name: 'Scale', price: '$2,500', credits: '50,000', highlight: false, note: 'Full deployment · SDR fleet' },
];

export default function BusinessModelSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Business Model</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Credit-based pricing.{' '}<span className="c-cyan">All 9 agents at every tier.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {tiers.map((t, idx) => (
            <div key={idx} style={{ padding: '1.1rem', textAlign: 'center', background: t.highlight ? 'rgba(0,229,255,0.06)' : 'var(--surface)', border: `1px solid ${t.highlight ? 'rgba(0,229,255,0.25)' : 'var(--border-hi)'}`, borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: t.highlight ? 'var(--cyan)' : 'var(--text-4)', marginBottom: '0.4rem' }}>{t.name}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)', marginBottom: '0.1rem' }}>{t.price}<span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-4)' }}>/mo</span></div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-3)' }}>{t.credits} credits</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)', marginTop: '0.25rem' }}>{t.note}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { label: 'Subscription', value: '70%', note: 'Gross margin, all tiers', color: 'var(--cyan)' },
            { label: 'Overage', value: '85%', note: '$0.10/credit — 2× effective rate', color: 'var(--gold)' },
            { label: 'White-Glove', value: '67%', note: '+$1,500/mo on Scale tier', color: '#8b9cf7' },
          ].map((m, idx) => (
            <div key={idx} style={{ padding: '0.85rem 1rem', textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: m.color }}>{m.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.15rem' }}>{m.label} Gross Margin</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)' }}>{m.note}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={i} style={{ padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-lg)', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--cyan)', marginBottom: '0.4rem' }}>THE CONSUMPTION FLYWHEEL</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
            Customers enter at Pro and naturally migrate upward as they prove ROI. We don't upsell — the unit
            economics upsell for us. Every $0.10 credit generates revenue for the customer at 6-8× return.
            Rational behavior is maximum deployment, not conservation.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
