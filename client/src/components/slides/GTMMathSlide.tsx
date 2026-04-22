import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

// Bottom-up conversion model — 4 channels, primary-source-validated rates
// (audited Apr 2026; sources cited per row). Blended math reconciles to the
// 10-customer Day 60 commitment.
const channels = [
  {
    name: 'Cold Email',
    tool: 'Instantly · 6 mailboxes',
    leads: 1182,
    leadDemo: '1.0%',
    demos: 12,
    demoClose: '15%',
    customers: 1.8,
    cycle: '30–50d',
    source: 'Instantly cold-email benchmark 2026 · founder-led top quartile',
  },
  {
    name: 'LinkedIn Outbound',
    tool: 'Sales Nav + targeted DMs',
    leads: 200,
    leadDemo: '3.0%',
    demos: 6,
    demoClose: '25%',
    customers: 1.5,
    cycle: '21–30d',
    source: 'Expandi LinkedIn 2025 · HubSpot known-contact close 25%+',
  },
  {
    name: 'Content Inbound',
    tool: 'Reddit + HN + ProductHunt + IndieHackers + X + LinkedIn + Blog',
    leads: 80,
    leadDemo: '15%',
    demos: 12,
    demoClose: '35%',
    customers: 4.2,
    cycle: '14–45d',
    source: 'RevenueHero 2025 · Default.com inbound-demo subset 25–35%',
  },
  {
    name: 'Network + Referrals',
    tool: 'Founder rolodex + 5 organic-user intros',
    leads: 38,
    leadDemo: '50%',
    demos: 19,
    demoClose: '40%',
    customers: 7.6,
    cycle: '3–14d',
    source: 'Launch Leads warm-intro 2026 · founder-led top quartile',
  },
];

const total = {
  leads: 1500,
  blendedLeadDemo: '~3.3%',
  demos: 49,
  blendedClose: '~31%',
  customers: 15,
};

// Audited tier migration model (primary-source validated, Apr 2026)
// Drives the Y1 blended ACV and Mo 12-24 MRR projections.
const tierMix = [
  { timeOn: '0–2 mo',  pro: '85%', growth: '12%', scale: '3%',  wg: '0%', mrr: '$407' },
  { timeOn: '3–5 mo',  pro: '75%', growth: '18%', scale: '5%',  wg: '2%', mrr: '$542' },
  { timeOn: '6–8 mo',  pro: '65%', growth: '22%', scale: '8%',  wg: '3%', mrr: '$682' },
  { timeOn: '9–12 mo', pro: '58%', growth: '25%', scale: '12%', wg: '5%', mrr: '$840' },
];

export default function GTMMathSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.65rem' }}>GTM Math</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 940, marginBottom: '0.4rem' }}>
          1,500 leads.{' '}<span className="c-cyan">15 customers.</span>{' '}Sixty days.
        </motion.h2>
        <motion.p variants={i} style={{ maxWidth: 880, fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: '1rem', lineHeight: 1.5 }}>
          Top-quartile conversion rates across four channels — every cell sourced from public 2025–2026 benchmarks. Founder is a top-tier closer (7 yrs wealth management). The math holds.
        </motion.p>

        {/* Conversion table */}
        <motion.div variants={i} style={{ background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '0.85rem' }}>

          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.7fr 0.7fr 0.7fr 0.6fr 0.7fr 0.7fr 0.7fr',
            gap: '0.5rem',
            padding: '0.55rem 0.85rem',
            borderBottom: '1px solid var(--border-hi)',
            background: 'rgba(0,0,0,0.2)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)' }}>CHANNEL</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', textAlign: 'right' }}>LEADS (60D)</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', textAlign: 'right' }}>→ DEMO %</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', textAlign: 'right' }}>DEMOS</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', textAlign: 'right' }}>→ CLOSE %</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--cyan)', textAlign: 'right' }}>CUSTOMERS</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', textAlign: 'right' }}>CYCLE</div>
          </div>

          {/* Data rows */}
          {channels.map((ch, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '1.7fr 0.7fr 0.7fr 0.6fr 0.7fr 0.7fr 0.7fr',
              gap: '0.5rem',
              padding: '0.55rem 0.85rem',
              borderBottom: idx < channels.length - 1 ? '1px solid var(--border-hi)' : 'none',
              alignItems: 'baseline',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.74rem', color: 'var(--text-1)' }}>{ch.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--text-4)', marginTop: '0.1rem' }}>{ch.tool}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', color: 'var(--text-4)', fontStyle: 'italic', marginTop: '0.1rem' }}>{ch.source}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-2)', textAlign: 'right' }}>{ch.leads.toLocaleString()}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', textAlign: 'right' }}>{ch.leadDemo}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-2)', textAlign: 'right' }}>{ch.demos}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', textAlign: 'right' }}>{ch.demoClose}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: 700, textAlign: 'right' }}>{ch.customers}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-4)', textAlign: 'right' }}>{ch.cycle}</div>
            </div>
          ))}

          {/* Total row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.7fr 0.7fr 0.7fr 0.6fr 0.7fr 0.7fr 0.7fr',
            gap: '0.5rem',
            padding: '0.65rem 0.85rem',
            borderTop: '1px solid rgba(0,229,255,0.2)',
            background: 'rgba(0,229,255,0.05)',
            alignItems: 'baseline',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.78rem', color: 'var(--cyan)' }}>BLENDED TOTAL</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-1)', fontWeight: 700, textAlign: 'right' }}>{total.leads.toLocaleString()}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', textAlign: 'right' }}>{total.blendedLeadDemo}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-1)', fontWeight: 700, textAlign: 'right' }}>{total.demos}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', textAlign: 'right' }}>{total.blendedClose}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--cyan)', fontWeight: 800, textAlign: 'right' }}>~{total.customers}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-4)', textAlign: 'right' }}>—</div>
          </div>

        </motion.div>

        {/* Closer — confidence + cycle-time framing */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
          <div style={{ padding: '0.75rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.4rem' }}>WHY 60 DAYS, NOT 30</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              Cold-sourced cycle time is 30–50 days end-to-end. Compressing to 30 days requires warm channels to carry &gt;80% of close volume — a stretch goal we run internally, not a deck commitment.
            </div>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--cyan)' }}>TIER MIGRATION · $407 → $840/MO</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)' }}>PER-CUSTOMER ARPU RAMP</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 0.5fr 0.6fr 0.5fr 0.45fr 0.65fr', gap: '0.35rem', marginBottom: '0.2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', letterSpacing: '0.06em', color: 'var(--text-4)' }}>TIME ON</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: 'var(--text-4)', textAlign: 'right' }}>PRO</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: 'var(--text-4)', textAlign: 'right' }}>GROWTH</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: 'var(--text-4)', textAlign: 'right' }}>SCALE</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: 'var(--text-4)', textAlign: 'right' }}>WG</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.48rem', color: 'var(--cyan)', textAlign: 'right' }}>$/MO</div>
            </div>
            {tierMix.map((t, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '0.9fr 0.5fr 0.6fr 0.5fr 0.45fr 0.65fr', gap: '0.35rem', padding: '0.12rem 0', borderTop: idx > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-2)' }}>{t.timeOn}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', textAlign: 'right' }}>{t.pro}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', textAlign: 'right' }}>{t.growth}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', textAlign: 'right' }}>{t.scale}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', textAlign: 'right' }}>{t.wg}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', fontWeight: 700, textAlign: 'right' }}>{t.mrr}</div>
              </div>
            ))}
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', color: 'var(--text-4)', fontStyle: 'italic', marginTop: '0.35rem', lineHeight: 1.4 }}>
              Drives Mo 24 MRR to ~$640K ($7.7M ARR). Audited against HubSpot / Atlassian / Snowflake / MongoDB public benchmarks.
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
