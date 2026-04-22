import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

// Bottom-up TAM → SAM → SOM model. Every cell traced to either our own
// ICP-doc cohort migration data (tier distributions, blended ACVs) or
// US government primary sources (SBA 2024, Census NES 2022). No top-down
// market-research puffery. Audited Apr 2026.

const segmentBreakdown = [
  { name: 'Solo operators',              note: 'nonemployer, 1+ signal', firms: '17.0M', acv: '$5,160',  value: '$88B', mix: 'Pro 80 / Growth 18 / Scale 2' },
  { name: 'Small employer',              note: '1–10 FTE',               firms: '4.05M', acv: '$9,750',  value: '$39B', mix: 'Pro 45 / Growth 45 / Scale 10' },
  { name: 'Growing employer',            note: '11–50 FTE',              firms: '2.22M', acv: '$17,400', value: '$39B', mix: 'Pro 20 / Growth 50 / Scale 20 / WG 10' },
];

export default function MarketSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Market</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 940, marginBottom: '0.35rem' }}>
          23.3M businesses.{' '}<span className="c-cyan">$166B TAM.</span>{' '}Bottom-up.
        </motion.h2>
        <motion.p variants={i} style={{ maxWidth: 900, fontFamily: 'var(--font-body)', fontSize: '0.76rem', color: 'var(--text-3)', marginBottom: '0.85rem', lineHeight: 1.45 }}>
          Every tier derived from US primary sources (SBA 2024, Census NES 2022) and our own ICP-doc cohort migration model. No top-down puffery.
        </motion.p>

        {/* ───── FUNNEL ───── */}

        {/* Universe anchor */}
        <motion.div variants={i} style={{
          padding: '0.55rem 1rem', marginBottom: '0.3rem',
          background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.1em', color: 'var(--text-4)' }}>UNIVERSE</div>
          <div style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-3)' }}>
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>34.75M US small businesses</span> — 6.27M employer + 28.48M nonemployer
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)' }}>SBA 2024</div>
        </motion.div>

        {/* Arrow + Filter annotation */}
        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', gap: '0.6rem' }}>
          <span style={{ color: 'var(--cyan)', fontSize: '0.85rem', opacity: 0.7 }}>↓</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.06em', color: 'var(--cyan)', padding: '0.15rem 0.55rem', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 4 }}>
            FILTER: any reported revenue + ≥1 operator signal
          </span>
        </motion.div>

        {/* TAM */}
        <motion.div variants={i} style={{
          padding: '0.75rem 1rem', marginBottom: '0.3rem',
          background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto auto', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--cyan)', fontWeight: 700 }}>TAM</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-1)', lineHeight: 1 }}>
              23.3M <span style={{ fontSize: '0.65rem', fontWeight: 400, color: 'var(--text-4)' }}>firms</span>
              <span style={{ margin: '0 0.6rem', color: 'var(--text-4)' }}>·</span>
              <span style={{ color: 'var(--text-3)', fontSize: '0.85rem' }}>$7,130 blended ACV</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--cyan)', lineHeight: 1 }}>$166B</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)', textAlign: 'right' }}>SBA 2024<br/>Census NES</div>
          </div>
          {/* Segment breakdown table */}
          <div style={{ borderTop: '1px dashed rgba(0,229,255,0.15)', paddingTop: '0.45rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.7fr 0.8fr 0.6fr 1.6fr', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.08em', color: 'var(--text-4)' }}>SEGMENT</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--text-4)', textAlign: 'right' }}>FIRMS</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--text-4)', textAlign: 'right' }}>× ACV</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--cyan)', textAlign: 'right' }}>= $</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', color: 'var(--text-4)' }}>TIER MIX (%)</div>
            </div>
            {segmentBreakdown.map((s, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.7fr 0.8fr 0.6fr 1.6fr', gap: '0.5rem', padding: '0.12rem 0', alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-1)', fontWeight: 600 }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', color: 'var(--text-4)' }}> · {s.note}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-2)', textAlign: 'right' }}>{s.firms}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-3)', textAlign: 'right' }}>{s.acv}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)', fontWeight: 700, textAlign: 'right' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--text-4)' }}>{s.mix}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Arrow + Filter annotation */}
        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', gap: '0.6rem' }}>
          <span style={{ color: 'var(--gold)', fontSize: '0.85rem', opacity: 0.7 }}>↓</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.06em', color: 'var(--gold)', padding: '0.15rem 0.55rem', background: 'rgba(232,201,106,0.05)', border: '1px solid rgba(232,201,106,0.18)', borderRadius: 4 }}>
            FILTERS: knowledge-work NAICS (51%) × 3+ SaaS tools (72%) × outbound-driven motion (70%)
          </span>
        </motion.div>

        {/* SAM */}
        <motion.div variants={i} style={{
          padding: '0.7rem 1rem', marginBottom: '0.3rem',
          background: 'rgba(232,201,106,0.04)', border: '1px solid rgba(232,201,106,0.22)', borderRadius: 'var(--radius-lg)',
          display: 'grid', gridTemplateColumns: '90px 1fr auto auto', gap: '0.75rem', alignItems: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--gold)', fontWeight: 700 }}>SAM</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)', lineHeight: 1 }}>
            6.0M <span style={{ fontSize: '0.65rem', fontWeight: 400, color: 'var(--text-4)' }}>firms</span>
            <span style={{ margin: '0 0.6rem', color: 'var(--text-4)' }}>·</span>
            <span style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>$7,667 blended ACV</span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--gold)', lineHeight: 1 }}>$46B</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)', textAlign: 'right' }}>Census NAICS<br/>Productiv 2024</div>
        </motion.div>

        {/* Arrow + Filter annotation */}
        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', gap: '0.6rem' }}>
          <span style={{ color: '#8b9cf7', fontSize: '0.85rem', opacity: 0.7 }}>↓</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.06em', color: '#8b9cf7', padding: '0.15rem 0.55rem', background: 'rgba(139,156,247,0.05)', border: '1px solid rgba(139,156,247,0.22)', borderRadius: 4 }}>
            CAPTURE: 1% of SAM × mature-portfolio ACV (ICP-doc tier mix)
          </span>
        </motion.div>

        {/* SOM */}
        <motion.div variants={i} style={{
          padding: '0.7rem 1rem', marginBottom: '0.5rem',
          background: 'rgba(139,156,247,0.05)', border: '1px solid rgba(139,156,247,0.28)', borderRadius: 'var(--radius-lg)',
          display: 'grid', gridTemplateColumns: '90px 1fr auto auto', gap: '0.75rem', alignItems: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#8b9cf7', fontWeight: 700 }}>SOM Y5</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)', lineHeight: 1 }}>
            60K <span style={{ fontSize: '0.65rem', fontWeight: 400, color: 'var(--text-4)' }}>customers</span>
            <span style={{ margin: '0 0.6rem', color: 'var(--text-4)' }}>·</span>
            <span style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>$12,000 mature ACV</span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: '#8b9cf7', lineHeight: 1 }}>$720M ARR</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)', textAlign: 'right' }}>ICP doc<br/>mature mix</div>
        </motion.div>

        {/* Footnote — ACV derivation + trajectory defense */}
        <motion.div variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--text-4)', lineHeight: 1.45, paddingLeft: '0.25rem' }}>
          <span style={{ color: 'var(--text-3)' }}>Mature portfolio mix (ICP doc, Y3–5 steady state):</span> Pro 50% × $3K + Growth 30% × $12K + Scale 15% × $30K + Scale+WG 5% × $48K = $12K blended ACV.
          <span style={{ color: 'var(--text-3)', marginLeft: '0.4rem' }}>Y5 trajectory:</span> Mo 24 = 1K customers → Y5 = 60K requires ~1,640 adds/mo avg Mo 25–60. Harvey AI hit ~$100M ARR in Y3 (~AI-native tailwind precedent).
        </motion.div>

      </motion.div>
    </div>
  );
}
