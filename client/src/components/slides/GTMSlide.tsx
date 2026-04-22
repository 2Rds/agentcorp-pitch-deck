import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

// Four-stage funnel: enrichment → decision-maker contacts → demos → customers.
// Numbers match the live pipeline state: Wave 1 South FL is 232 companies /
// 34 contacts; Operation Six Hats targets 50 demos → 10 customers by Day 60
// at a data-driven 20% demo-to-close.
const funnel = [
  { val: '232 → 1,500+', label: 'Companies Enriched', note: 'Wave 1 South FL · scaling nationally' },
  { val: '34',           label: 'Decision-Maker Contacts', note: 'Named, enriched, ready for outbound' },
  { val: '50',           label: 'Demos by Day 60',         note: 'Founder-led, no SDR hire' },
  { val: '10',           label: 'Customers by Day 60',     note: '20% demo-to-close (data-driven)' },
];

// Channel stack — named tools, not generic categories. Each line on startup
// credit or free tier; total all-in $183/mo. Lightfield flagged as the
// strategic centerpiece — AI-native CRM that AgentCorp agents work inside
// natively (vs legacy HubSpot/Salesforce which are pre-AI).
const stack = [
  { layer: 'Prospecting', tool: 'LinkedIn Sales Nav + Apollo' },
  { layer: 'Outbound',    tool: 'Instantly (cold email)' },
  { layer: 'CRM',         tool: 'Lightfield AI', sub: 'AI-native — our agents read + write records natively', highlight: true },
  { layer: 'Lifecycle',   tool: 'Customer.io (post-signup)' },
];

export default function GTMSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.65rem' }}>Go-to-Market</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 880, marginBottom: '0.4rem' }}>
          Ten customers. Sixty days.{' '}<span className="c-cyan">$183 a month.</span>
        </motion.h2>
        <motion.p variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-4)', letterSpacing: '0.08em', marginBottom: '1rem' }}>
          OPERATION SIX HATS — CAPITAL EFFICIENCY AS A FEATURE, NOT A CONSTRAINT
        </motion.p>

        {/* Funnel */}
        <motion.div variants={i} style={{ display: 'flex', alignItems: 'stretch', gap: '0.35rem', marginBottom: '0.85rem' }}>
          {funnel.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ flex: 1, padding: '0.85rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--cyan)', marginBottom: '0.2rem', lineHeight: 1.1 }}>{step.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: '0.3rem' }}>{step.label.toUpperCase()}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{step.note}</div>
              </div>
              {idx < funnel.length - 1 && <span style={{ color: 'var(--cyan)', fontSize: '0.85rem', opacity: 0.6, padding: '0 0.1rem' }}>→</span>}
            </div>
          ))}
        </motion.div>

        {/* Spend + Stack side by side */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '0.6rem', marginBottom: '0.75rem' }}>

          {/* Spend */}
          <div style={{ padding: '1rem 1.2rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '0.5rem' }}>GTM SPEND</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.45rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-1)', lineHeight: 1 }}>$183</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)' }}>/ mo, all-in</div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Supported by <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>~$83K in offset infrastructure</span> across 17 active startup programs (full list on Traction slide).
            </div>
          </div>

          {/* Stack */}
          <div style={{ padding: '1rem 1.2rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>CHANNEL STACK</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.55rem 0.75rem' }}>
              {stack.map((s, idx) => (
                <div key={idx} style={s.highlight ? {
                  padding: '0.4rem 0.55rem',
                  margin: '-0.4rem -0.55rem',
                  background: 'rgba(0,229,255,0.06)',
                  border: '1px solid rgba(0,229,255,0.25)',
                  borderRadius: 6,
                } : undefined}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '0.1rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.06em', color: s.highlight ? 'var(--cyan)' : 'var(--text-4)' }}>{s.layer.toUpperCase()}</div>
                    {s.highlight && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45rem', letterSpacing: '0.08em', color: 'var(--cyan)', padding: '0.05rem 0.3rem', background: 'rgba(0,229,255,0.12)', borderRadius: 3 }}>STRATEGIC</div>}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-1)', fontWeight: s.highlight ? 600 : 400 }}>{s.tool}</div>
                  {s.sub && <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-3)', marginTop: '0.15rem', lineHeight: 1.35 }}>{s.sub}</div>}
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Measurement stack — PostHog $50K credit + full-funnel instrumentation */}
        <motion.div variants={i} style={{ padding: '0.85rem 1.2rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.4rem', gap: '0.75rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--cyan)' }}>ENTERPRISE OBSERVABILITY — DAY 0</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)' }}>
              <span style={{ color: 'var(--text-1)', fontWeight: 700 }}>$50K</span> POSTHOG CREDIT · LIVE
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
            The <span style={{ color: 'var(--text-1)' }}>$10K+/mo analytics + observability stack</span> scaled companies pay for once they hit millions of events — funded by PostHog's $50K startup credit. Full-funnel instrumentation (ad → click → signup → activation → retention → expansion), session replay, LLM observability (<span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--cyan)' }}>$ai_generation</span> per model call with shared trace IDs), feature flags, and experiments — all live before the first paid customer. Every GTM decision is empirical from user zero.
          </div>
        </motion.div>

        {/* Capital-efficiency closer */}
        <motion.div variants={i} style={{ padding: '0.85rem 1.25rem', background: 'rgba(232,201,106,0.04)', borderLeft: '2px solid var(--gold)', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-1)', lineHeight: 1.55 }}>
            Most pre-seed startups burn $10K+/mo on GTM before hitting traction. We close our first ten at <span style={{ color: 'var(--gold)', fontWeight: 600 }}>less than 2% of that spend</span>. The same AI-augmented discipline that built the product runs the pipeline.
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
