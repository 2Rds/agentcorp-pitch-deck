import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Team</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.5rem' }}>
          Built by the industry.{' '}<span className="c-cyan">Not for the industry.</span>
        </motion.h2>
        <motion.div variants={i} style={{ padding: '1.25rem', marginBottom: '0.75rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)' }}>Sean Weiss</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--cyan)' }}>FOUNDER & CEO</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--gold)', padding: '0.25rem 0.6rem', background: 'rgba(232,201,106,0.1)', borderRadius: 6 }}>PRUDENTIAL DIAMOND ELEPHANT AWARD</div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Nationally award-winning life insurance top producer. Closed a $500K+ annual premium, four-policy
            case single-handedly — buy-sell agreements, NQDB executive benefit plans, triple-tax-exempt investment
            vehicles for a $30M ARR business. The case took a year. Three months after the award, left production
            to build the platform that would have compressed every part of that year except the close.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['AXA Advisors', 'Prudential', 'JPMorgan Private Bank', 'Merrill Lynch (fastest VP promotion in firm history)', 'Series 7 · Series 66 · 2-15'].map((tag, idx) => (
              <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.06em', color: 'var(--text-4)', padding: '0.2rem 0.5rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 4 }}>{tag}</span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>Roberto Cinque</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.4rem' }}>HEAD OF ENGINEERING · COMMITTED POST-RAISE</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
              Independently validated across three platforms: Mercor, Micro1, and Uber AI Solutions —
              each vetting engineering talent through rigorous technical screening. 2% equity, 4-year vest, 1-year cliff.
            </div>
          </div>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>AI-Augmented Development</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.4rem' }}>THE PRODUCT IS THE PROOF</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>
              Entire platform built by a non-technical founder using Claude Code and AI-augmented development.
              9 agents, multi-model runtime, Stripe billing, voice SDR — all operational. The company is its own best demo.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
