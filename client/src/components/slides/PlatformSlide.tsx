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
          <span className="c-cyan">Governance controls. One interface.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 700, marginBottom: '1.25rem' }}>
          Agents don't operate in silos — they communicate, delegate, and escalate across a shared
          runtime. Sam books a meeting → Jordan schedules it → Parker flags compliance requirements →
          Riley models the premium. All through Telegram or web.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem', marginBottom: '1rem' }}>
          {[
            { title: 'Multi-Model Runtime', desc: 'Claude, Gemini, and Grok — each agent uses the optimal model for its task. No vendor lock-in.', icon: '🧠' },
            { title: 'Telegram-Native + Web', desc: 'Deployed where agents already work. No app downloads. Instant onboarding. Mobile-first.', icon: '💬' },
            { title: 'Inter-Agent Mesh', desc: 'Agents communicate, hand off tasks, and escalate — mimicking how a real corporate team operates.', icon: '🔗' },
            { title: 'Voice Sales Engine', desc: 'Sam makes real phone calls via NextGenSwitch PBX with AI voice synthesis. Not chatbot scripts — real conversations.', icon: '📞' },
            { title: 'Governance Layer', desc: 'Role-based access, audit trails, escalation policies. Enterprise-grade controls from day one.', icon: '🛡️' },
            { title: 'Credit Metering', desc: 'Every action is metered, tracked, and billed. Full visibility into consumption and ROI per agent.', icon: '📊' },
          ].map((f, idx) => (
            <div key={idx} style={{
              padding: '0.9rem 1rem', background: 'var(--surface)',
              border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{f.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-1)', marginBottom: '0.25rem' }}>{f.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-3)', maxWidth: 700 }}>
          Stripe billing infrastructure live. Three tiers with credit-based metering.
          5,000 free credits at signup (card required) for immediate time-to-value.
        </motion.p>

      </motion.div>
    </div>
  );
}
