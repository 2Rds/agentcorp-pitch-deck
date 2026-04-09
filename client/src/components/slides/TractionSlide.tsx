import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Traction</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Pre-revenue. Pre-launch.{' '}<span className="c-cyan">Not pre-product.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {[
            { val: '6', label: 'AI Agents Deployed', desc: 'Full operational workforce on cloud-native web app. Inter-agent communication live.' },
            { val: '3', label: 'Stripe Tiers Live', desc: 'Pro, Growth, Scale — credit-based billing infrastructure with overage metering built and tested.' },
            { val: 'Day 0', label: 'Built by the Customer', desc: 'Founded by a Prudential Diamond Elephant Award winner who built the tool every small business needs.' },
          ].map((m, idx) => (
            <div key={idx} style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--cyan)', marginBottom: '0.25rem' }}>{m.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginBottom: '0.4rem' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{m.desc}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.5rem' }}>BUILT SINGLE-HANDEDLY</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              6-agent platform, multi-model runtime, Stripe billing, automated SDR engine —
              built by a non-technical founder using AI-augmented development. Head of Engineering committed
              to return post-raise.
            </div>
          </div>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.5rem' }}>IMMEDIATE POST-RAISE MILESTONES</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              First 10 paying customers within 60 days of launch. Founder-led sales via LinkedIn and
              existing network. Target: 50 paying customers by month 6, NRR tracking above 120%.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
