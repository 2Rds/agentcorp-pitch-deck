import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const security = [
  { label: 'Programmed Incompleteness Engine', desc: '16-byte split — breaches yield nothing' },
  { label: 'AES-256-GCM Encryption', desc: 'Client-side, wallet-derived keys' },
  { label: 'Multi-PDA Sharding', desc: '25,000+ files per user account' },
  { label: 'Hybrid Multi-Cloud', desc: 'IPFS + Cloudflare R2 + Solana' },
];

const ux = [
  { label: 'Web Application', desc: 'Familiar cloud storage UI — feels like Dropbox' },
  { label: 'Gasless Operations', desc: 'No crypto complexity surfaced to users' },
  { label: 'Open Source Recovery SDK', desc: 'Zero vendor lock-in guarantee' },
];

const enterprise = [
  { label: 'Crossmint Embedded Wallets', desc: 'Email or passkey login, no seed phrases' },
  { label: 'Stripe + Crypto Payments', desc: 'Unified subscription billing' },
  { label: 'Provable Deletion', desc: 'On-chain audit trail for compliance' },
];

const col = (title: string, accentColor: string, accentBg: string, items: { label: string; desc: string }[]) => (
  <div style={{ padding: '1.4rem 1.4rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: accentColor, marginBottom: '1.1rem' }}>{title}</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {items.map((item) => (
        <div key={item.label} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: accentColor, marginTop: 6, flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-1)', fontWeight: 500, lineHeight: 1.3 }}>{item.label}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.775rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          What We've Built
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '0.85rem' }}>
          Demo-ready MVP.{' '}
          <span className="c-cyan">Feels like Dropbox. Runs on Web3.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '1.75rem' }}>
          A complete breach-proof cloud storage platform with enterprise-grade UX. The architecture is live. The interface is live. We designed it so that the user never knows they're on a blockchain — and never needs to.
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {col('Core Security', 'var(--cyan)', 'rgba(0,229,255,0.08)', security)}
          {col('User Experience', 'var(--gold)', 'rgba(232,201,106,0.06)', ux)}
          {col('Enterprise Ready', 'rgba(180,140,255,1)', 'rgba(180,140,255,0.06)', enterprise)}
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 720 }}>
          <p className="t-body">
            <span className="c-cyan" style={{ fontWeight: 600 }}>Live demo available.</span>{' '}
            Upload, store, and retrieve files with full breach-proof architecture — visible in the browser, end to end.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
