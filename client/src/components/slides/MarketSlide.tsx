import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const states = [
  { name: 'Florida',    tag: 'Home Market',           count: '~8,000',  sub: 'Crypto, Legal, Wealth Mgmt',       accent: 'rgba(0,229,255,0.05)',    border: 'rgba(0,229,255,0.18)',    label: 'var(--cyan)' },
  { name: 'New York',   tag: 'Institutional Capital', count: '~10,000', sub: 'Hedge Funds, Law Firms, BFSI',     accent: 'rgba(139,156,247,0.06)',  border: 'rgba(139,156,247,0.20)',  label: '#8b9cf7' },
  { name: 'Texas',      tag: 'Industrial Scale',      count: '~7,000',  sub: 'Energy, Crypto Mining, Legal',     accent: 'rgba(240,165,0,0.05)',    border: 'rgba(240,165,0,0.18)',    label: 'var(--gold)' },
  { name: 'California', tag: 'Tech & Wealth',         count: '~10,000', sub: 'Web3, VC, Family Offices',         accent: 'rgba(52,211,153,0.05)',   border: 'rgba(52,211,153,0.18)',   label: '#34d399' },
];

const funnel = [
  { value: '$15B',      tag: 'TAM',         sub: 'Global Secure File Storage & Sharing',                          growth: '\u2192 $40B by 2030', color: 'var(--text-1)' },
  { value: '$3B',       tag: 'SAM',         sub: 'Encrypted Storage \u00b7 Security-Conscious Orgs \u00b7 N. America', growth: '\u2192 $8B by 2030',  color: 'var(--cyan)' },
  { value: '$15\u201325M', tag: 'YEAR 5 ARR', sub: '~1,000 B2B Accounts + Self-Serve',                            growth: 'Bottom-Up Model',     color: 'var(--gold)' },
];

export default function MarketSlide() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '3.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-bl" />

      <motion.div variants={c} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 960 }}>

        {/* Eyebrow */}
        <motion.span variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '0.75rem' }}>
          The Market
        </motion.span>

        {/* Headline */}
        <motion.h2 variants={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.1rem', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-1)', marginBottom: '0.6rem' }}>
          Start where the pain is acute and education cost is zero.{' '}
          <span style={{ color: 'var(--cyan)' }}>Then ride the wave.</span>
        </motion.h2>

        {/* Body */}
        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: 720 }}>
          The $15B secure file storage market is growing 22% annually &mdash; driven by AI data production,
          regulatory tightening, and record data breaches. We target the $3B encrypted segment in North America
          where compliance isn&rsquo;t optional. South Florida is the beachhead: 32 years of relationships
          in crypto, legal, and financial services.
        </motion.p>

        {/* TAM â SAM â Year 5 ARR funnel */}
        <motion.div variants={i} style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          padding: '1.1rem 1.2rem',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          {funnel.map((f, idx) => (
            <div key={f.tag} style={{ display: 'contents' }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: idx === 2 ? '1.3rem' : '1.55rem', color: f.color, lineHeight: 1 }}>{f.value}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginTop: '0.3rem' }}>{f.tag}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-4)', marginTop: '0.15rem', lineHeight: 1.3 }}>{f.sub}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: f.color === 'var(--gold)' ? 'var(--gold)' : 'var(--text-3)', marginTop: '0.2rem', letterSpacing: '0.04em' }}>{f.growth}</p>
              </div>
              {idx < funnel.length - 1 && (
                <span style={{ color: 'var(--border-hi)', fontSize: '1.3rem', textAlign: 'center' }}>{'\u2192'}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Beachhead state cards */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
          {states.map((s) => (
            <div key={s.name} style={{
              padding: '0.85rem 1rem',
              background: s.accent,
              border: `1px solid ${s.border}`,
              borderRadius: 'var(--radius-md)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: s.label, marginBottom: 2 }}>{s.name}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{s.tag}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-1)', lineHeight: 1 }}>{s.count}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-3)', marginTop: '0.25rem', lineHeight: 1.3 }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Capture rate + tailwinds bar */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.5rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              <span style={{ color: 'var(--text-1)', fontWeight: 700 }}>~35,000</span>{' '}
              Qualified Targets &nbsp;{'\u00b7'}&nbsp; <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>3% Capture</span>{' '}Year 5
            </span>
            <span style={{ color: 'var(--border)', fontSize: '0.5rem' }}>{'\u2502'}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>22% CAGR</span>{' '}EFSS Growth
            </span>
            <span style={{ color: 'var(--border)', fontSize: '0.5rem' }}>{'\u2502'}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 700 }}>AI Tailwind</span>{' '}3{'\u2013'}5{'\u00d7'} Storage/Seat by 2030
            </span>
            <span style={{ color: 'var(--border)', fontSize: '0.5rem' }}>{'\u2502'}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              <span style={{ color: '#34d399', fontWeight: 700 }}>$4.88M</span>{' '}Avg Breach Cost
            </span>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
