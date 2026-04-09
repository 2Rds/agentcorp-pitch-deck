import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function HookSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Asymmetry
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Credits aren't an expense.{' '}
          <span className="c-cyan">They're the highest-ROI investment a business can make.</span>
        </motion.h2>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{
            padding: '1.1rem', background: 'rgba(0,229,255,0.05)',
            border: '1px solid rgba(0,229,255,0.2)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '0.5rem' }}>⚔️ OFFENSE — SAM FILLS THE PIPELINE</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)' }}>$120</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-4)' }}>in credits (10 outbound sequences)</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>→ One closed deal pays for months</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              Recruiting: one $20K placement fee = 167× return. Agency: one $5K/mo retainer = 42×.
              SaaS: one $15K ACV deal = 125×. The math works in every vertical where revenue exceeds credit cost.
            </div>
          </div>
          <div style={{
            padding: '1.1rem', background: 'rgba(232,201,106,0.04)',
            border: '1px solid rgba(232,201,106,0.15)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>🛡️ DEFENSE — THE SYSTEM PROTECTS THE PIPELINE</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)' }}>$48K</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-4)' }}>/yr (Scale + White Glove)</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.35rem' }}>← Saves one critical deal</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              A missed follow-up, dropped compliance thread, or mismanaged document can stall or kill a deal.
              One saved deal pays for the top tier for a year. The system prevents the mistakes that cost revenue.
            </div>
          </div>
        </motion.div>

        {/* Customer journey */}
        <motion.div variants={i} style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: '0.4rem' }}>CUSTOMER JOURNEY — NOT A BELL CURVE, A STEP FUNCTION</div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { month: 'Entry', tier: 'Pro $250', event: 'Testing · First sequences', color: 'var(--text-4)' },
              { month: 'Validation', tier: 'Pro → Overage', event: 'First close · Math hits', color: 'var(--text-3)' },
              { month: 'Scaling', tier: 'Growth $1K', event: 'Expanding outbound volume', color: 'var(--gold)' },
              { month: 'Full Deploy', tier: 'Scale $2.5K', event: 'All agents active', color: 'var(--cyan)' },
              { month: 'Managed', tier: 'Scale+WG $4K', event: '"Help me scale faster"', color: 'var(--cyan)' },
            ].map((s, idx) => (
              <div key={idx} style={{ flex: 1, padding: '0.5rem 0.4rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: s.color, marginBottom: '0.15rem' }}>{s.month}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.62rem', color: 'var(--text-1)', marginBottom: '0.1rem' }}>{s.tier}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', color: 'var(--text-4)' }}>{s.event}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dual flywheel closing */}
        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', maxWidth: 740, lineHeight: 1.55 }}>
          <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Two flywheels compound simultaneously.</span>{' '}
          The revenue flywheel: credits generate pipeline, pipeline generates revenue, so customers scale spend. The intelligence flywheel:
          every touchpoint teaches every agent via a shared knowledge base. More outreach = smarter SDRs = higher close rates =
          more outreach. The ROI per credit <span style={{ fontStyle: 'italic' }}>increases</span> over time.
        </motion.p>

      </motion.div>
    </div>
  );
}
