import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const funnel = [
  { value: '$50.3B', tag: 'TAM', sub: 'Global AI Agent Market by 2030', growth: '45.8% CAGR — Grand View Research', color: 'var(--text-1)' },
  { value: '$7.6B', tag: 'SAM', sub: 'AI Workforce Automation — SMB Segment', growth: 'Multi-agent platforms for non-technical buyers', color: 'var(--cyan)' },
  { value: '$440M', tag: 'SOM', sub: '~88K Qualified US Agencies × $5K Blended ACV', growth: 'Beachhead: insurance + financial services (440K+ total, ~20% digitally ready)', color: 'var(--gold)' },
];

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Market
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.9rem' }}>
          A $50 billion market.{' '}
          <span className="c-cyan">And nobody is building for SMBs.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          Grand View Research and MarketsandMarkets independently project the AI agent market at $50B+ by 2030.
          The entire ecosystem is building for developers and enterprises. 33 million US small businesses are unserved.
        </motion.p>

        {/* TAM → SAM → SOM funnel */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {funnel.map((f, idx) => (
            <div key={idx} style={{
              display: 'grid', gridTemplateColumns: '120px 70px 1fr', gap: '1rem', alignItems: 'center',
              padding: '1rem 1.3rem',
              background: idx === 0 ? 'var(--surface)' : idx === 1 ? 'rgba(0,229,255,0.04)' : 'rgba(232,201,106,0.04)',
              border: `1px solid ${idx === 0 ? 'var(--border-hi)' : idx === 1 ? 'rgba(0,229,255,0.15)' : 'rgba(232,201,106,0.15)'}`,
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: f.color }}>{f.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: f.color, fontWeight: 600 }}>{f.tag}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)', marginBottom: '0.1rem' }}>{f.sub}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', letterSpacing: '0.06em' }}>{f.growth}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{
          padding: '0.9rem 1.2rem',
          background: 'rgba(0,229,255,0.04)',
          border: '1px solid rgba(0,229,255,0.15)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)' }}>
            <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Beachhead:</span> Insurance agencies and financial services firms.
            440,000+ insurance agencies in the US (IBISWorld, 2025). $5K blended ACV assumes a Pro-weighted mix
            ($3K-$12K/yr range). Founder spent 10 years in institutional finance — selling into the exact industry he knows best.
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
