import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const funnel = [
  { value: '$15B',   tag: 'TAM', sub: 'Enterprise File Storage & Sharing (EFSS)',                     growth: '\u2192 $53B by 2030 \u00b7 ~29% CAGR', color: 'var(--text-1)' },
  { value: '$3B',    tag: 'SAM', sub: 'Encrypted Storage \u00b7 Security-Conscious Orgs \u00b7 N. America', growth: '\u2192 $8B by 2030',              color: 'var(--cyan)' },
  { value: '$350M',  tag: 'SOM', sub: '35,000+ Qualified Targets \u00b7 4 Beachhead States',            growth: 'Bottom-Up \u00b7 ~$10K Blended ACV',  color: 'var(--gold)' },
];

const states = [
  { name: 'Florida',    tag: 'Home Market',           count: '8,000+',  sub: 'Crypto, Legal, Wealth Mgmt',   accent: 'rgba(0,229,255,0.05)',   border: 'rgba(0,229,255,0.18)',   label: 'var(--cyan)' },
  { name: 'New York',   tag: 'Institutional Capital', count: '10,000+', sub: 'Hedge Funds, Law Firms, BFSI', accent: 'rgba(139,156,247,0.06)', border: 'rgba(139,156,247,0.20)', label: '#8b9cf7' },
  { name: 'Texas',      tag: 'Industrial Scale',      count: '7,000+',  sub: 'Energy, Crypto Mining, Legal', accent: 'rgba(240,165,0,0.05)',   border: 'rgba(240,165,0,0.18)',   label: 'var(--gold)' },
  { name: 'California', tag: 'Tech & Wealth',         count: '10,000+', sub: 'Web3, VC, Family Offices',     accent: 'rgba(52,211,153,0.05)',  border: 'rgba(52,211,153,0.18)',  label: '#34d399' },
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
          Start where the pain is acute and education cost is zero.{' '}
          <span className="c-cyan">Then ride the wave.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          The $15B enterprise file storage and sharing market is growing ~29% CAGR &mdash; a segment
          of the broader $55&ndash;75B North American cloud storage market. We target the $3B encrypted
          storage segment where compliance isn&rsquo;t optional. 35,000+ qualified targets mapped
          across four beachhead states represent ~$350M in obtainable revenue.
        </motion.p>

        {/* TAM → SAM → Year 5 ARR */}
        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {funnel.map((f) => (
            <div key={f.tag} style={{ padding: '1.1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: f.color, lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{f.value}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.3rem' }}>{f.tag}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4, marginBottom: '0.25rem' }}>{f.sub}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: f.color === 'var(--gold)' ? 'var(--gold)' : 'var(--text-4)', letterSpacing: '0.04em' }}>{f.growth}</p>
            </div>
          ))}
        </motion.div>

        {/* Beachhead states */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {states.map((s) => (
            <div key={s.name} style={{ padding: '0.9rem 1.1rem', background: s.accent, border: `1px solid ${s.border}`, borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: s.label, marginBottom: '0.15rem' }}>{s.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{s.tag}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--text-1)', lineHeight: 1 }}>{s.count}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--text-3)', marginTop: '0.3rem', lineHeight: 1.3 }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
