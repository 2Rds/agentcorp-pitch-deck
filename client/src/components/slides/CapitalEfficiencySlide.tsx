import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const stats = [
  { val: '17',        label: 'Active Programs',     note: 'Approved & integrated today' },
  { val: '~$83K',     label: 'Year 1 Offsets',      note: 'Hard credits + sub offsets' },
  { val: '~$817/mo',  label: 'Burn Reduction',      note: 'Year 1, weighted average' },
  { val: '~$2,250+',  label: 'Y2–3 Compounding',    note: 'Multi-year tiered programs' },
];

const hardCredits = [
  { provider: 'PostHog',       value: '$50,000',  note: 'PostHog for Startups (via Stripe Atlas)' },
  { provider: 'Notion',        value: '$12,000',  note: 'Unlimited AI Plan, program value' },
  { provider: 'DigitalOcean',  value: '$5,000',   note: '+ 15mo premium support (via Mercury)' },
  { provider: 'Stripe Atlas',  value: '$2,500',   note: 'Stripe processing fee credits' },
  { provider: 'Google Cloud',  value: '$2,000',   note: 'Google for Startups (Start tier)' },
  { provider: 'OpenRouter',    value: '$1,000',   note: '+ 0% processing fees (via Mercury)' },
];

const subOffsets = [
  { provider: 'Intercom',      benefit: '100% off Y1 (3-yr tiered)' },
  { provider: 'Lightfield AI', benefit: '6 months free CRM' },
  { provider: 'DocSend',       benefit: '90% off Advanced, 1 yr' },
  { provider: 'Customer.io',   benefit: '1 year free Essentials' },
  { provider: 'Linear',        benefit: '6 months free Pro' },
  { provider: 'Supabase',      benefit: '1 year free Pro' },
  { provider: 'Xero',          benefit: '6 months free' },
  { provider: 'Granola',       benefit: '12 months free' },
  { provider: 'Clerk',         benefit: '50% off Pro, 6 mo' },
];

export default function CapitalEfficiencySlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.65rem' }}>Capital Efficiency</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 940, marginBottom: '0.4rem' }}>
          Every $1 raised,{' '}<span className="c-cyan">amplified.</span>
        </motion.h2>
        <motion.p variants={i} style={{ maxWidth: 880, fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: '1rem', lineHeight: 1.5 }}>
          17 active startup programs convert the raise into materially larger operational firepower — every line item below is approved, integrated, and in daily use today.
        </motion.p>

        {/* Stats row */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '0.85rem' }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{ padding: '0.85rem 0.95rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--cyan)', marginBottom: '0.2rem', lineHeight: 1.1 }}>{s.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: '0.3rem' }}>{s.label.toUpperCase()}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{s.note}</div>
            </div>
          ))}
        </motion.div>

        {/* Two-column program detail */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.75rem' }}>

          {/* Hard-Dollar Credits */}
          <div style={{ padding: '0.85rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)' }}>HARD-DOLLAR CREDITS</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-4)' }}>~$72.5K · LIVE</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.35rem' }}>
              {hardCredits.map((h, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', alignItems: 'baseline' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-1)', fontWeight: 600 }}>{h.provider}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-4)' }}> · {h.note}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--cyan)', fontWeight: 700 }}>{h.value}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', color: 'var(--text-4)', fontStyle: 'italic', marginTop: '0.5rem', lineHeight: 1.4 }}>
              Notion's $12K is provider-stated program value (~$720 direct Y1 sub offset; remainder is AI-feature credit consumption). PostHog credit retains beyond Y1 as event volume scales.
            </div>
          </div>

          {/* Subscription Offsets */}
          <div style={{ padding: '0.85rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)' }}>SUBSCRIPTION OFFSETS — Y1</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-4)' }}>~$9.8K · ACTIVE</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem 0.6rem' }}>
              {subOffsets.map((s, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-1)', fontWeight: 600 }}>{s.provider}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-4)', lineHeight: 1.3 }}>{s.benefit}</div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Foundational + closer strip */}
        <motion.div variants={i} style={{ padding: '0.7rem 1.2rem', background: 'rgba(232,201,106,0.04)', borderLeft: '2px solid var(--gold)', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.74rem', color: 'var(--text-1)', lineHeight: 1.55 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginRight: '0.6rem' }}>FOUNDATIONAL</span>
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Stripe Atlas</span> (Delaware C-Corp, equity, compliance) and <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Mercury</span> (banking + treasury) source 12 of the 17 programs above. Infrastructure is funded — every dollar of the raise redirects to engineering and customer acquisition.
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
