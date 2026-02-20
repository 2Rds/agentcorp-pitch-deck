import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const market = [
  {
    label: 'TAM',
    value: '$25–35B',
    desc: 'Privacy-sensitive segment of the $130B+ cloud storage market',
    color: 'var(--text-3)',
    bg: 'var(--surface)',
    border: 'var(--border)',
  },
  {
    label: 'SAM',
    value: '$4–8B',
    desc: 'US SMB & Mid-Market in target verticals — legal, crypto, financial services',
    color: 'rgba(120,160,255,1)',
    bg: 'rgba(120,160,255,0.04)',
    border: 'rgba(120,160,255,0.16)',
  },
  {
    label: 'SOM',
    value: '$10–25M',
    desc: 'Crypto / Web3 companies + crypto law firms — Year 1 beachhead',
    color: 'var(--cyan)',
    bg: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.2)',
    tag: '25–30% CAGR',
  },
];

const signals = [
  { stat: '<10%', text: 'of enterprises encrypt 80%+ of cloud data', sub: 'Massive unprotected surface' },
  { stat: '20', text: 'US states with active privacy laws', sub: 'Regulatory tailwind accelerating' },
  { stat: '580K', text: 'target businesses in FL/NY/TX/CA', sub: 'Reachable beachhead addresses' },
  { stat: '1%', text: 'capture = $145M addressable SOM', sub: 'Conservative Year 3 target' },
];

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Market Opportunity
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '0.85rem' }}>
          Privacy-Sensitive Cloud Storage
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 580, marginBottom: '1.5rem' }}>
          We're not trying to displace Dropbox on day one. We're going after the slice of the market that has already decided standard cloud storage is a liability — and currently has no real alternative.
        </motion.p>

        {/* TAM/SAM/SOM */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
          {market.map((m) => (
            <div key={m.label} style={{ padding: '0.9rem 1.2rem', background: m.bg, border: `1px solid ${m.border}`, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: m.color, width: 36, flexShrink: 0 }}>{m.label}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-1)', letterSpacing: '-0.02em', width: 100, flexShrink: 0 }}>{m.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)', flex: 1 }}>{m.desc}</p>
              {m.tag && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: m.color, background: m.bg, border: `1px solid ${m.border}`, borderRadius: 4, padding: '0.2rem 0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>{m.tag}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Signals */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.75rem' }}>
          {signals.map((s) => (
            <div key={s.stat} style={{ padding: '0.9rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--cyan)', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>{s.stat}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.775rem', color: 'var(--text-2)', lineHeight: 1.4, marginBottom: '0.25rem' }}>{s.text}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', color: 'var(--text-4)', letterSpacing: '0.03em' }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
