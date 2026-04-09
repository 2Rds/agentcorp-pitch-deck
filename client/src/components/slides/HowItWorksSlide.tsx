import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  { name: 'Interface Layer', tech: 'Web Dashboard · REST API · Mobile-responsive', color: 'var(--cyan)' },
  { name: 'Agent Engine', tech: '6 specialized agents · Inter-agent mesh · Task routing & delegation', color: 'var(--gold)' },
  { name: 'Model Layer', tech: 'Claude (reasoning) · Gemini (analysis) · Grok (X/Twitter) · Cohere (search & retrieval)', color: '#8b9cf7' },
  { name: 'Infrastructure', tech: 'Stripe Billing · Redis State · PostgreSQL · Credit Metering · Cloudflare Workers', color: 'var(--text-3)' },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>How It Works</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Multi-model. Multi-agent.{' '}<span className="c-cyan">Compounding shared intelligence.</span>
        </motion.h2>

        {/* Stack layers */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
          {layers.map((l, idx) => (
            <div key={idx} style={{ padding: '0.65rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: l.color, minWidth: 130 }}>{l.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)' }}>{l.tech}</div>
            </div>
          ))}
        </motion.div>

        {/* Compounding Knowledge */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.25rem', marginBottom: '0.75rem',
          background: 'rgba(139,156,247,0.04)', border: '1px solid rgba(139,156,247,0.15)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#8b9cf7', marginBottom: '0.4rem' }}>COMPOUNDING KNOWLEDGE BASE</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.55 }}>
            Agents don't just learn individually — they share an aggregated knowledge base that compounds
            with every interaction. Patterns discovered by one agent are immediately available to all others.
            The entire workforce gets smarter with every touchpoint.
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {[
            { val: '4', label: 'LLM Providers', note: 'Best model per task, no lock-in' },
            { val: '6', label: 'Specialized Agents', note: '1 EA + 5 department heads' },
            { val: '0', label: 'Engineering Required', note: 'Fully managed, deploy in minutes' },
          ].map((m, idx) => (
            <div key={idx} style={{ padding: '0.75rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--cyan)' }}>{m.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.1rem' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-4)' }}>{m.note}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
          {[
            { title: 'Multi-Model', desc: 'Claude, Gemini, Grok, Cohere — optimal model per task', icon: '🧠' },
            { title: 'Cloud-Native', desc: 'No installs. Instant onboarding. Mobile-responsive.', icon: '☁️' },
            { title: 'Inter-Agent Mesh', desc: 'Agents delegate, escalate, and hand off tasks.', icon: '🔗' },
            { title: 'Governance + Metering', desc: 'Audit trails, access controls, per-action billing.', icon: '🛡️' },
          ].map((f, idx) => (
            <div key={idx} style={{
              padding: '0.7rem 0.75rem', background: 'var(--surface)',
              border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{f.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{f.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-4)', lineHeight: 1.35 }}>{f.desc}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
