import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function SolutionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Solution
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Any business walks in.{' '}
          <span className="c-cyan">A full-scale operation walks out.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
          6 AI agents that function as a managed corporate workforce — deployed as a cloud-native web app.
          Sam fills the pipeline. The other five make sure you never lose what's in it.
        </motion.p>

        {/* Sam - the spearhead */}
        <motion.div variants={i} style={{
          padding: '1rem 1.25rem', marginBottom: '0.75rem',
          background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.25)',
          borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--cyan)', minWidth: 60 }}>Sam</div>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>AI SDR + Scalable Sales Workforce</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>Real phone calls via voice synthesis · Unlimited SDR clones · Pipeline generation at scale · NextGenSwitch PBX telephony</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--cyan)', whiteSpace: 'nowrap', padding: '0.25rem 0.6rem', background: 'rgba(0,229,255,0.1)', borderRadius: 6 }}>REVENUE ENGINE</div>
        </motion.div>

        {/* Back-office agents grid */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            { name: 'Alex', role: 'Exec Assistant', desc: 'Scheduling, comms, cross-department coordination' },
            { name: 'Jordan', role: 'Operations & Team', desc: 'Workflows, project tracking, team management' },
            { name: 'Taylor', role: 'CMO', desc: 'Content, campaigns, outbound sequences' },
            { name: 'Riley', role: 'CFO', desc: 'Revenue tracking, budgeting, AP/AR, cash flow' },
            { name: 'Morgan', role: 'Business Intelligence', desc: 'Pipeline analytics, conversion metrics, reporting' },
          ].map((a, idx) => (
            <div key={idx} style={{
              padding: '0.7rem 0.75rem', background: 'var(--surface)',
              border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{a.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.2rem' }}>{a.role}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)', lineHeight: 1.3 }}>{a.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', maxWidth: 700 }}>
          Sam is why they buy — immediate, measurable ROI from day one. The other five are why they stay —
          operational dependency that drives net retention above 120%.
        </motion.p>

      </motion.div>
    </div>
  );
}
