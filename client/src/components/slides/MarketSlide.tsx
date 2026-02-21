import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const states = [
  { name: 'Florida',    tag: 'Home Market',          targets: '150,000', hex: 'var(--cyan)',    color: 'var(--cyan)' },
  { name: 'New York',   tag: 'Institutional Capital', targets: '140,000', hex: '#c084fc',       color: '#c084fc' },
  { name: 'Texas',      tag: 'Industrial Scale',      targets: '130,000', hex: '#fbbf24',       color: '#fbbf24' },
  { name: 'California', tag: 'Tech & Wealth',         targets: '160,000', hex: '#34d399',       color: '#34d399' },
];

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Market
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '1rem' }}>
          Start where pain is most acute and education cost is zero.{' '}
          <span style={{ color: 'var(--cyan)' }}>Then ride the wave.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 640, marginBottom: '1rem' }}>
          South Florida is the beachhead — it's where the network lives. 32 years building relationships in the exact industries that need this most: crypto, legal, financial services. From there, the four states leading crypto adoption are already in play. Once we've found PMF, we expand into traditional regulated industries the same CEO has spent his entire career building relationships in.
        </motion.p>

        <motion.div variants={i} className="cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {states.map((s) => (
            <div key={s.name} style={{
              padding: '1rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderTop: `2px solid ${s.hex}`,
              borderRadius: 'var(--radius-lg)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: s.color, marginBottom: '0.25rem' }}>{s.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{s.tag}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-1)', lineHeight: 1 }}>{s.targets}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-4)', marginTop: '0.2rem' }}>qualified targets</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-1)' }}>580,000</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Qualified Targets</p>
            </div>
            <div style={{ color: 'var(--border-hi)', fontSize: '1.5rem' }}>→</div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--cyan)' }}>1% Capture</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Conservative Goal</p>
            </div>
            <div style={{ color: 'var(--border-hi)', fontSize: '1.5rem' }}>→</div>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--gold)' }}>$145M</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>SOM</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
