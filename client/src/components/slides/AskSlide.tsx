import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>The Ask</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.5rem' }}>
          $1M Pre-Seed.{' '}<span className="c-cyan">$10M post-money cap. SAFE.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--cyan)', marginBottom: '0.75rem' }}>USE OF FUNDS</div>
            {[
              { pct: '40%', use: 'Engineering / Payroll', detail: 'Roberto Cinque (Head of Eng, Naples, $6K/mo) + 1 sr dev sourced via Roberto\'s network ($6K/mo) + founder draw ($8K/mo) + remote EA ($1K/mo) + self-hosted AgentCorp ops ($750/mo). Offshore-weighted; run-rate ~$22K/mo.' },
              { pct: '25%', use: 'Go-to-Market', detail: 'Operation Six Hats from Day 1 — founder-led + content + LinkedIn + X + Instantly cold, orchestrated by Taylor (AgentCorp\'s marketing agent) on Lightfield AI CRM. We run GTM the way we sell it. 50 customers by mo 6. PLG self-serve + paid acquisition layered for 50→300 (mo 6-12). First sales hire mo 12+ post-CAC validation.' },
              { pct: '20%', use: 'Operations', detail: 'SOC 2 Type II prep. Legal/contracts. Finance + billing infrastructure.' },
              { pct: '15%', use: 'Runway Buffer', detail: '18-month runway at planned burn. Capital efficiency from AI-augmented development.' },
            ].map((f, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--cyan)', minWidth: 36 }}>{f.pct}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-1)' }}>{f.use}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)', lineHeight: 1.3 }}>{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.75rem' }}>24-MONTH MILESTONES</div>
            {[
              { month: 'Month 3',  milestone: '25 paying customers. First overage revenue recognized.' },
              { month: 'Month 6',  milestone: '75 customers. First Growth tier upgrades. NRR tracking toward 120%+.' },
              { month: 'Month 9',  milestone: '150 customers. First Scale tier customers. $75K+ MRR.' },
              { month: 'Month 12', milestone: '300 customers. $157K+ MRR ($1.9M ARR). Series A metrics in sight.' },
              { month: 'Month 18', milestone: '600 customers. $380K+ MRR ($4.55M ARR). Series A closed. SOC 2 Type II path complete.' },
              { month: 'Month 24', milestone: '1,000+ customers. $640K+ MRR ($7.7M ARR). Series B-ready.' },
            ].map((m, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', minWidth: 60 }}>{m.month}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-2)', lineHeight: 1.35 }}>{m.milestone}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={i} style={{
          padding: '0.85rem 1.5rem', borderRadius: 'var(--radius-lg)',
          background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700 }}>sean@agentcorp.work</span>
            <span style={{ color: 'var(--text-4)', margin: '0 0.75rem' }}>·</span>
            <span style={{ color: 'var(--text-3)' }}>agentcorp.work</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
