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
          1 AI executive assistant and 5 department-head agents — deployed as a cloud-native web app.
          Alex coordinates. Sam fills the pipeline. The other four run your operations.
        </motion.p>

        {/* Alex - the executive assistant layer */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.25rem', marginBottom: '0.5rem',
          background: 'rgba(139,156,247,0.06)', border: '1px solid rgba(139,156,247,0.25)',
          borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#8b9cf7', minWidth: 60 }}>Alex</div>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>Executive Assistant — Your Point of Contact</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>Scheduling, comms, cross-department coordination · Routes tasks to the right agent · Your interface to the workforce</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#8b9cf7', whiteSpace: 'nowrap', padding: '0.25rem 0.6rem', background: 'rgba(139,156,247,0.1)', borderRadius: 6 }}>COORDINATOR</div>
        </motion.div>

        {/* Sam - the spearhead */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.25rem', marginBottom: '0.75rem',
          background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.25)',
          borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--cyan)', minWidth: 60 }}>Sam</div>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>Sales Manager + SDR Workforce</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>Automated outbound sequences · Lead research · Appointment scheduling · Pipeline generation at scale</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--cyan)', whiteSpace: 'nowrap', padding: '0.25rem 0.6rem', background: 'rgba(0,229,255,0.1)', borderRadius: 6 }}>REVENUE ENGINE</div>
        </motion.div>

        {/* Department head agents grid */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            { name: 'Jordan', role: 'Operations & Team', desc: 'Workflows, project tracking, team management' },
            { name: 'Taylor', role: 'Marketing', desc: 'Content, campaigns, outbound sequences' },
            { name: 'Riley', role: 'Finance', desc: 'Revenue tracking, budgeting, AP/AR, cash flow' },
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
          Sam is why they buy — immediate, measurable ROI from day one. The department heads are why they stay —
          operational dependency designed to drive a <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>targeted NRR of 120%+</span>, in line with usage-based SaaS peers (Snowflake 126%, Datadog ~120%) and above top-quartile SMB SaaS (111%, SaaS Capital 2025).
        </motion.p>

      </motion.div>
    </div>
  );
}
