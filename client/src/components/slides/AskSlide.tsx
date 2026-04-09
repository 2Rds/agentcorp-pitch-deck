import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>The Ask</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.5rem' }}>
          $1M Pre-Seed.{' '}<span className="c-cyan">$10M post-money cap. SAFE.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--cyan)', marginBottom: '0.75rem' }}>USE OF FUNDS</div>
            {[
              { pct: '40%', use: 'Engineering', detail: 'Head of Engineering + 2 senior devs. Harden platform, scale SDR infrastructure.' },
              { pct: '25%', use: 'Go-to-Market', detail: 'Founder-led sales to first 50 customers. LinkedIn PLG. Channel partnerships.' },
              { pct: '20%', use: 'Operations', detail: 'SOC 2 compliance path. Legal. Delaware C-Corp incorporation.' },
              { pct: '15%', use: 'Runway Buffer', detail: '18-month runway at planned burn. Capital efficiency from AI-augmented development.' },
            ].map((f, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--cyan)', minWidth: 36 }}>{f.pct}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-1)' }}>{f.use}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)', lineHeight: 1.3 }}>{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.75rem' }}>18-MONTH MILESTONES</div>
            {[
              { month: 'Month 3', milestone: '10 paying customers. First overage revenue recognized.' },
              { month: 'Month 6', milestone: '50 customers. NRR tracking above 120%. First Growth tier upgrades.' },
              { month: 'Month 9', milestone: '150 customers. First Scale tier customers. $75K+ MRR.' },
              { month: 'Month 12', milestone: '300 customers. $150K+ MRR. Series A metrics in sight.' },
              { month: 'Month 18', milestone: '700+ customers. NRR above 150%. SOC 2 Type II path complete.' },
            ].map((m, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', minWidth: 60 }}>{m.month}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-2)', lineHeight: 1.35 }}>{m.milestone}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={i} style={{
          padding: '0.85rem 1.5rem', borderRadius: 'var(--radius-lg)',
          background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700 }}>sean@agentcorp.work</span>
            <span style={{ color: 'var(--text-4)', margin: '0 0.75rem' }}>·</span>
            <span style={{ color: 'var(--text-3)' }}>agentcorp.work</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
