import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Founder-Market Fit</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          I was the ICP.{' '}<span className="c-cyan">I built the workforce that eliminates the ceiling.</span>
        </motion.h2>

        {/* The Diamond Elephant Story */}
        <motion.div variants={i} style={{ padding: '1.25rem', marginBottom: '0.75rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)' }}>Sean Weiss — Founder & CEO</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--gold)', padding: '0.25rem 0.6rem', background: 'rgba(232,201,106,0.1)', borderRadius: 6 }}>PRUDENTIAL DIAMOND ELEPHANT AWARD</div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.55, marginBottom: '0.6rem' }}>
            I ran an outbound-driven practice wearing every hat — CEO, sales, finance, ops, admin —
            simultaneously. Closed a $500K+ annual premium, four-policy case single-handedly. It should
            have taken 4 months. It took 12 — because of missed compliance filings, stale documents, and
            operational chaos that three AI agents would have prevented.
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.55, marginBottom: '0.6rem', fontStyle: 'italic' }}>
            Those failures aren't unique to financial services. Every business that runs on a founder wearing every hat faces the same breakdowns.
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-1)', lineHeight: 1.55, fontWeight: 500 }}>
            I won a national award despite that ceiling. Then I built the workforce that eliminates it.
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div variants={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {['AXA Advisors', 'Prudential', 'JPMorgan Private Bank', 'Merrill Lynch (fastest VP promotion in firm history)', 'Series 7 · Series 66 · 2-15'].map((tag, idx) => (
            <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.06em', color: 'var(--text-4)', padding: '0.2rem 0.5rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 4 }}>{tag}</span>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
          <div style={{ padding: '0.85rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.1rem' }}>Roberto Cinque</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>HEAD OF ENGINEERING · POST-RAISE</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
              Validated across Mercor, Micro1, and Uber AI Solutions. 2% equity, 4-year vest, 1-year cliff.
            </div>
          </div>
          <div style={{ padding: '0.85rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.1rem' }}>AI-Augmented Development</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>THE PRODUCT IS THE PROOF</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
              Entire platform built by a non-technical founder using AI-augmented development.
              6 agents, multi-model runtime, Stripe billing, automated SDR — all operational.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
