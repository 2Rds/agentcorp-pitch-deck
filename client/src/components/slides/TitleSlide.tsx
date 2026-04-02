import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TitleSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6, flexShrink: 0,
            background: 'linear-gradient(135deg, var(--cyan) 0%, #3b82f6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
              <line x1="10" y1="6.5" x2="14" y2="6.5" stroke="white" strokeWidth="1.5" opacity="0.5"/>
              <line x1="6.5" y1="10" x2="6.5" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
              <line x1="17.5" y1="10" x2="17.5" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            </svg>
          </div>
          <span className="eyebrow-muted">AgentCorp</span>
        </motion.div>

        <motion.h2 variants={i} className="c-white" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)", lineHeight: 1.08, letterSpacing: "-0.025em", maxWidth: 860, marginBottom: "1.5rem" }}>
          The AI-powered operating system{' '}
          <span className="c-cyan">for life insurance.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '2rem' }}>
          9 AI agents that turn a solo life insurance agent into a full-scale operation —
          unlimited AI SDR clones for pipeline generation, plus a complete back office
          for compliance, finance, marketing, and client management.
        </motion.p>

        <motion.div variants={i} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginBottom: '2rem' }}>
          {[
            { val: '$1.34T', label: 'US Life Insurance Market' },
            { val: '900K+', label: 'Licensed Agents' },
            { val: '102M', label: 'Uninsured Americans' },
          ].map((m, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.2rem, 2vw, 1.75rem)', color: idx === 0 ? 'var(--cyan)' : idx === 1 ? 'var(--gold)' : 'var(--text-1)' }}>{m.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.25rem' }}>{m.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{
          padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-lg)',
          background: 'var(--surface)', border: '1px solid var(--border-hi)',
          marginBottom: '1.5rem', maxWidth: 720,
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.55, fontStyle: 'italic' }}>
            "I spent a year closing a $500K+ annual premium, four-policy case — single-handedly.
            Won Prudential's Diamond Elephant Award for it. Three months later, I left production to build the platform
            that would have compressed every part of that year except the close."
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--cyan)', marginTop: '0.4rem', letterSpacing: '0.06em' }}>
            — SEAN WEISS, FOUNDER & CEO
          </div>
        </motion.div>

        <motion.div variants={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', letterSpacing: '0.08em' }}>
            $2M SEED SAFE · $12M POST-MONEY CAP · 2026
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
}
