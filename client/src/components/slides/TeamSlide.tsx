import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const career = [
  { firm: 'AXA',            role: 'Financial Consultant' },
  { firm: 'Prudential',     role: 'Financial Advisor' },
  { firm: 'JPMorgan',       role: 'Private Client Advisor' },
  { firm: 'Merrill Lynch',  role: 'Sr. Wealth Manager / VP' },
];

const stats = [
  { val: '7 yrs',  label: 'Wealth Management' },
  { val: '$25M',   label: 'AUM Book Built' },
  { val: '$500K+', label: 'Single-Case Annual Premium' },
];

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.65rem' }}>Founder-Market Fit</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.85rem' }}>
          I was the ICP.{' '}<span className="c-cyan">I built the workforce that eliminates the ceiling.</span>
        </motion.h2>

        {/* Founder card — name + award + career arc + stats + story */}
        <motion.div variants={i} style={{ padding: '1rem 1.25rem', marginBottom: '0.65rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)' }}>Sean Weiss — Founder & CEO</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', padding: '0.25rem 0.6rem', background: 'rgba(232,201,106,0.1)', borderRadius: 6, whiteSpace: 'nowrap' }}>
              TOP-PRODUCER · AXA · PRUDENTIAL · MERRILL LYNCH
            </div>
          </div>

          {/* Career arc */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
            {career.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ padding: '0.35rem 0.6rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 5, minWidth: 132 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--text-1)' }}>{step.firm}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.04em', color: 'var(--text-4)', marginTop: '0.1rem' }}>{step.role}</div>
                </div>
                {idx < career.length - 1 && <span style={{ color: 'var(--cyan)', fontSize: '0.7rem', opacity: 0.6 }}>→</span>}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.85rem' }}>
            {stats.map((s, idx) => (
              <div key={idx} style={{ padding: '0.55rem 0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--cyan)' }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.06em', color: 'var(--text-4)', marginTop: '0.1rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.55, marginBottom: '0.55rem' }}>
            I ran an outbound-driven practice wearing every hat — CEO, sales, finance, ops, admin —
            simultaneously. Closed a <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>$500K+ annual premium, four-policy case</span> single-handedly.
            It should have taken 4 months. It took 12 — because of missed compliance filings, stale documents, and
            operational chaos that three AI agents would have prevented.
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-1)', lineHeight: 1.55, fontWeight: 500 }}>
            Those failures aren't unique to financial services. I won national awards despite the ceiling. Then I built the workforce that eliminates it.
          </div>
        </motion.div>

        {/* The pivot — AI consulting + product as proof */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.55rem' }}>
          <div style={{ padding: '0.8rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>LAST 12 MONTHS — AI CONSULTING</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-2)', lineHeight: 1.45 }}>
              Validated AI workflows and agent architecture across <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Mercor, Micro1, and Uber AI Solutions</span>. From ICP to operator.
            </div>
          </div>
          <div style={{ padding: '0.8rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>THE PRODUCT IS THE PROOF</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-2)', lineHeight: 1.45 }}>
              6 agents, multi-model runtime, Stripe billing, automated SDR — all operational. Built single-handedly with AI-augmented development.
            </div>
          </div>
        </motion.div>

        {/* Licenses */}
        <motion.div variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)' }}>
          Licenses: Series 7 · Series 66 · 2-15
        </motion.div>
      </motion.div>
    </div>
  );
}
