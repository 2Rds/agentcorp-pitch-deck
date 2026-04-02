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
          <span className="c-cyan">They're the highest-ROI sales investment an agent can make.</span>
        </motion.h2>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{
            padding: '1.1rem', background: 'rgba(0,229,255,0.05)',
            border: '1px solid rgba(0,229,255,0.2)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '0.5rem' }}>⚔️ OFFENSE — SAM FILLS THE PIPELINE</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)' }}>$120</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-4)' }}>in credits (10 SDR calls)</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>→ $800 commission</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              75-95% first-year commission on life insurance. One term life close from a 10-call campaign
              returns 6-7× the credit spend. Every credit is inventory with positive expected value.
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
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.35rem' }}>← Saves one $80K case</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              A missed compliance filing or mismanaged documents can stall a case for 6+ months — or kill it.
              One saved mid-size case pays for the top tier for a year.
            </div>
          </div>
        </motion.div>

        {/* Customer journey */}
        <motion.div variants={i} style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: '0.4rem' }}>CUSTOMER JOURNEY — NOT A BELL CURVE, A STEP FUNCTION</div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { month: 'Month 1', tier: 'Pro $250', event: 'Testing · 20 SDR calls', color: 'var(--text-4)' },
              { month: 'Month 2', tier: 'Pro → Overage', event: 'First close · Math hits', color: 'var(--text-3)' },
              { month: 'Month 3', tier: 'Growth $1K', event: 'Scaling · 200+ calls/mo', color: 'var(--gold)' },
              { month: 'Month 5', tier: 'Scale $2.5K', event: 'SDR fleet deployed', color: 'var(--cyan)' },
              { month: 'Month 7', tier: 'Scale+WG $4K', event: '"Help me scale faster"', color: 'var(--cyan)' },
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
          The revenue flywheel: credits generate commissions, so customers scale spend. The intelligence flywheel:
          every call teaches every agent via a shared knowledge base. More calls = smarter SDRs = higher close rates =
          more calls. The ROI per credit <span style={{ fontStyle: 'italic' }}>increases</span> over time.
        </motion.p>

      </motion.div>
    </div>
  );
}
