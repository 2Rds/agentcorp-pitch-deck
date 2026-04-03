import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Market</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          442,000 agencies. <span className="c-cyan">$1.34 trillion market.</span> Distribution hasn't changed in 50 years.
        </motion.h2>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { size: '$9B', label: 'TAM', desc: '442K US insurance agencies × ~$20K avg annual software spend (AMS, CRM, compliance, marketing, dialer tools AgentCorp replaces).', color: 'var(--text-1)' },
            { size: '$5.5B', label: 'SAM', desc: '~250K independent agencies (excl. captive agents at large carriers with internal systems) × $22K blended ACV.', color: 'var(--gold)' },
            { size: '$110M', label: 'SOM', desc: '~5,000 agencies × $22K blended ACV in 3-5 years. 1.1% penetration of total US agencies.', color: 'var(--cyan)' },
          ].map((m, idx) => (
            <div key={idx} style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: m.color, marginBottom: '0.15rem' }}>{m.size}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: m.color, marginBottom: '0.5rem' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{m.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            { val: '900K+', label: 'Licensed Life & Health Agents' },
            { val: '442K', label: 'Insurance Agencies (IBISWorld 2025)' },
            { val: '102M', label: 'Uninsured Americans Who Know They Need It' },
            { val: '52%', label: 'Of Americans Have Life Insurance' },
          ].map((s, idx) => (
            <div key={idx} style={{ padding: '0.65rem 0.5rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--cyan)' }}>{s.val}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--text-4)', marginTop: '0.15rem', lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', maxWidth: 720 }}>
          Our customers serve a $1.34T life insurance market (Statista 2025). All sizing is bottom-up:
          agency count × software spend for TAM, independent agencies × our ACV for SAM, realistic 3-5yr
          capture at 1.1% penetration for SOM. Blended ACV of $22K includes subscription + asymmetric
          overage driven by 75-95% first-year commissions.
        </motion.p>
      </motion.div>
    </div>
  );
}
