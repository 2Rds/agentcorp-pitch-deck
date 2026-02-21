import { motion } from 'framer-motion';

const c = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const i = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
};

const states = [
  {
    name: 'Florida',
    tag: 'Home Market',
    targets: '150,000',
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.18)',
    label: 'var(--cyan)',
  },
  {
    name: 'New York',
    tag: 'Institutional Capital',
    targets: '140,000',
    accent: 'rgba(139,156,247,0.06)',
    border: 'rgba(139,156,247,0.20)',
    label: '#8b9cf7',
  },
  {
    name: 'Texas',
    tag: 'Industrial Scale',
    targets: '130,000',
    accent: 'rgba(240,165,0,0.05)',
    border: 'rgba(240,165,0,0.18)',
    label: 'var(--gold)',
  },
  {
    name: 'California',
    tag: 'Tech & Wealth',
    targets: '160,000',
    accent: 'rgba(52,211,153,0.05)',
    border: 'rgba(52,211,153,0.18)',
    label: '#34d399',
  },
];

const funnel = [
  {
    value: '$15B',
    label: 'TAM',
    sub: 'Global Secure File Storage & Sharing',
    growth: '→ $40B by 2030',
    color: 'var(--text-1)',
  },
  {
    value: '$3B',
    label: 'SAM',
    sub: 'Encrypted Storage — Security-Conscious Orgs, N. America',
    growth: '→ $8B by 2030',
    color: 'var(--cyan)',
  },
  {
    value: '$15–25M',
    label: 'YEAR 5 ARR',
    sub: '~1,000 B2B Accounts + Self-Serve',
    growth: 'AI data growth accelerating',
    color: 'var(--gold)',
  },
];

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Market
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.85rem' }}>
          Start where pain is most acute and education cost is zero.{' '}
          <span style={{ color: 'var(--cyan)' }}>Then ride the wave.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.25rem' }}>
          Enterprise file storage is a $15B market growing 22–25% annually — accelerated by AI-driven
          data production. BlockDrive targets the $3B segment where zero-knowledge encryption
          isn’t optional: crypto, legal, and financial services firms that need sovereign data
          infrastructure. South Florida is the beachhead.
        </motion.p>

        {/* TAM > SAM > Year 5 funnel */}
        <motion.div
          variants={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr auto 1fr',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem',
            padding: '1rem 1.2rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          {funnel.map((f, idx) => (
            <>
              <div key={f.label} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.55rem',
                  color: f.color,
                  lineHeight: 1,
                }}>{f.value}</p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cyan)',
                  marginTop: '0.3rem',
                }}>{f.label}</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  color: 'var(--text-4)',
                  marginTop: '0.15rem',
                  lineHeight: 1.3,
                }}>{f.sub}</p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.52rem',
                  color: 'var(--text-3)',
                  marginTop: '0.2rem',
                  fontStyle: 'italic',
                }}>{f.growth}</p>
              </div>
              {idx < funnel.length - 1 && (
                <div key={`arrow-${idx}`} style={{ color: 'var(--border-hi)', fontSize: '1.3rem' }}>→</div>
              )}
            </>
          ))}
        </motion.div>

        {/* Beachhead state cards */}
        <motion.div variants={i} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.75rem',
          marginBottom: '1.25rem',
        }}>
          {states.map((s) => (
            <div
              key={s.name}
              style={{
                padding: '1rem',
                background: s.accent,
                border: `1px solid ${s.border}`,
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: s.label,
                marginBottom: '0.25rem',
              }}>{s.name}</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                letterSpacing: '0.08em',
                color: 'var(--text-4)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>{s.tag}</p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: 'var(--text-1)',
                lineHeight: 1,
              }}>{s.targets}</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--text-4)',
                marginTop: '0.2rem',
              }}>qualified targets</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom validation bar */}
        <motion.div variants={i} className="bar-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: 'var(--text-1)',
              }}>22–25%</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--text-4)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}>Market CAGR</p>
            </div>
            <div style={{ width: 1, height: 28, background: 'var(--border)' }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: 'var(--cyan)',
              }}>580K+</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--text-4)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}>Targets in 4 States</p>
            </div>
            <div style={{ width: 1, height: 28, background: 'var(--border)' }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: 'var(--gold)',
              }}>$49</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--text-4)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}>Avg Enterprise Seat / Mo</p>
            </div>
            <div style={{ width: 1, height: 28, background: 'var(--border)' }} />
            <div style={{ textAlign: 'center', flex: 1 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.3rem',
                color: 'var(--text-1)',
              }}>130%+</p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--text-4)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}>Target NRR</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
