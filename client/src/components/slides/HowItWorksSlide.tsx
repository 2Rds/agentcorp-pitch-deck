import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

// Three-step narrative: the owner's journey from "sign up" to "a workforce
// that learns my business." Replaces the previous 4-layer tech stack
// (Interface / Agent / Model / Infrastructure) which read as architecture
// documentation to investors — Redis, Postgres, Cloudflare Workers are
// implementation details, not thesis material.
const steps = [
  {
    n: '01',
    label: 'Connect',
    title: 'Your tools. Not new ones.',
    body: 'Plug in the tools you already use — Gmail, calendar, CRM, Stripe, accounting. The agents work inside your stack. Nothing to migrate, nothing to rebuild.',
  },
  {
    n: '02',
    label: 'Converse',
    title: 'Tell Alex what you need.',
    body: 'Plain English. Alex routes the work to the right agent — sales to Sam, finance to Riley, ops to Jordan. No dashboards to learn, no workflows to configure.',
  },
  {
    n: '03',
    label: 'Compound',
    title: 'Your workforce learns your business.',
    body: 'Agents execute, hand off tasks, and log every outcome. A pattern one agent discovers at 2pm is available to every other agent at 2:01pm. The system gets smarter with every touchpoint.',
  },
];

// Investor-benefit framing, not technology namechecking. Previous tile
// labels leaned "4 LLM Providers / 6 Specialized Agents / 0 Engineering
// Required" — fine, but the names (Claude, Gemini, Grok, Redis, CF Workers)
// belonged inside. Here we surface capability, not vendor.
const credibility = [
  { val: 'Best-Fit',    label: 'Model Per Task',     note: 'No vendor lock-in. Lower inference cost than single-model systems.' },
  { val: 'Zero',        label: 'Engineering Lift',   note: 'Cloud-native web app. Deploy in minutes. Mobile-responsive.' },
  { val: 'Every',       label: 'Action Audited',     note: 'Full trail of what ran, when, why, and what it cost.' },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.65rem' }}>How It Works</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 880, marginBottom: '0.85rem' }}>
          One mind. Six specialists.{' '}<span className="c-cyan">Every interaction makes all of them smarter.</span>
        </motion.h2>

        {/* Three-step journey */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '0.75rem' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ padding: '1rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--cyan)' }}>{step.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-4)' }}>{step.label.toUpperCase()}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', lineHeight: 1.25, marginBottom: '0.45rem' }}>{step.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{step.body}</div>
            </div>
          ))}
        </motion.div>

        {/* The moat — reframed compounding-knowledge story as defensibility thesis */}
        <motion.div variants={i} style={{
          padding: '0.95rem 1.25rem', marginBottom: '0.75rem',
          background: 'rgba(0,229,255,0.04)', borderLeft: '2px solid var(--cyan)',
          borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--cyan)', marginBottom: '0.4rem' }}>WHY IT'S DEFENSIBLE</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-1)', lineHeight: 1.55 }}>
            Every agent's outcomes feed a shared knowledge base. The pattern Sam finds at 2pm is live for Riley at 2:01pm — <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>not 1+1+1+1+1+1, but 6×6×6</span>. Over 2 months, the system knows your operation better than a new hire would after 2 years. <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>That's the moat — and why customers don't leave.</span>
          </div>
        </motion.div>

        {/* Credibility strip — capability, not vendor namechecking */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
          {credibility.map((c, idx) => (
            <div key={idx} style={{ padding: '0.7rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--cyan)' }}>{c.val}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)' }}>{c.label.toUpperCase()}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--text-4)', lineHeight: 1.4 }}>{c.note}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
