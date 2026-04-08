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
          33 million US small businesses. <span className="c-cyan">None of them have an AI workforce.</span>
        </motion.h2>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { size: '$50.3B', label: 'TAM', desc: 'Global AI Agent market by 2030 (Grand View Research). The managed AI workforce segment is forming now.', color: 'var(--text-1)' },
            { size: '$12B', label: 'SAM', desc: 'US SMBs spending on outsourced operations, virtual assistants, and SaaS tools AgentCorp replaces.', color: 'var(--gold)' },
            { size: '$220M', label: 'SOM', desc: '~10,000 businesses × ~$22K blended ACV (subscription + overage) within 3-5 years.', color: 'var(--cyan)' },
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
            { val: '33M', label: 'US Small Businesses' },
            { val: '99.9%', label: 'Of US Businesses Are SMBs' },
            { val: '47%', label: 'Have <5 Employees' },
            { val: '$50.3B', label: 'AI Agent Market 2030 (GVR)' },
          ].map((s, idx) => (
            <div key={idx} style={{ padding: '0.65rem 0.5rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--cyan)' }}>{s.val}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--text-4)', marginTop: '0.15rem', lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', maxWidth: 720 }}>
          Every SMB needs sales, compliance, finance, marketing, legal, HR, and IT — but can't afford
          to hire for any of them. AgentCorp gives them all nine for less than the cost of one part-time employee.
          The initial wedge is commission-based professional services, with expansion into every vertical where
          founders are wearing every hat.
        </motion.p>
      </motion.div>
    </div>
  );
}
