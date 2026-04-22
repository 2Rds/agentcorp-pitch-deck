import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function PlatformSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Platform
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Inter-agent communication.{' '}
          <span className="c-cyan">Every interaction makes every agent smarter.</span>
        </motion.h2>

        {/* Dual Runtime Hero */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div style={{
            padding: '1rem 1.25rem', background: 'rgba(0,229,255,0.05)',
            border: '1px solid rgba(0,229,255,0.2)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '0.5rem' }}>CONVERSATIONAL RUNTIME</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.3rem' }}>Active During Outbound</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              Automated outbound engine for pipeline generation. Email sequences, lead research,
              appointment scheduling, CRM updates. Each SDR instance operates independently at full capacity.
            </div>
          </div>
          <div style={{
            padding: '1rem 1.25rem', background: 'rgba(232,201,106,0.04)',
            border: '1px solid rgba(232,201,106,0.15)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>COGNITIVE RUNTIME</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-1)', marginBottom: '0.3rem' }}>Continuous Learning</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              After each touchpoint, agents seamlessly shift to the cognitive runtime — processing outcomes,
              extracting patterns, updating what works. Learning never stops between interactions.
            </div>
          </div>
        </motion.div>

        {/* Shared Knowledge Compound */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.25rem', marginBottom: '0.75rem',
          background: 'rgba(139,156,247,0.04)', border: '1px solid rgba(139,156,247,0.15)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#8b9cf7', marginBottom: '0.4rem' }}>COMPOUNDING KNOWLEDGE BASE</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
            Agents don't just learn individually — they share an aggregated knowledge base that compounds
            with every touchpoint. Clone #47 learns an objection pattern at 2pm → Clone #3 has that knowledge
            at 2:01pm. More agents = faster learning. More touchpoints = smarter agents. The intelligence flywheel
            compounds alongside the revenue flywheel.
          </div>
        </motion.div>

        {/* Feature grid - condensed */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          {[
            { title: 'Multi-Model', desc: 'Claude, Gemini, Grok — optimal model per task' },
            { title: 'Cloud-Native Web App', desc: 'No installs. Instant onboarding. Mobile-responsive.' },
            { title: 'Inter-Agent Mesh', desc: 'Agents delegate, escalate, and hand off tasks.' },
            { title: 'Governance + Metering', desc: 'Audit trails, access controls, per-action billing.' },
          ].map((f, idx) => (
            <div key={idx} style={{
              padding: '0.7rem 0.75rem', background: 'var(--surface)',
              border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{f.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-4)', lineHeight: 1.35 }}>{f.desc}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
