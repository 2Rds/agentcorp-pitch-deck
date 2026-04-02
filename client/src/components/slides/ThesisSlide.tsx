import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function ThesisSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Why Now</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Three things just became possible{' '}<span className="c-cyan">at the same time.</span>
        </motion.h2>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            { title: 'Voice AI Crossed the Threshold', desc: 'ElevenLabs and other voice synthesis platforms reached quality where AI phone calls are indistinguishable from human calls. This wasn\'t possible 18 months ago. Sam\'s SDR capability is a direct result.', icon: '🎙️', color: 'var(--cyan)' },
            { title: 'Multi-Model Convergence', desc: 'Claude, Gemini, and Grok each excel at different tasks. For the first time, a platform can assign the optimal model to each agent — reasoning, speed, analysis — without vendor lock-in. Model costs are falling 10× per year.', icon: '🧠', color: 'var(--gold)' },
            { title: '102M Americans Are Waiting', desc: 'Half of Americans are uninsured or underinsured and know it. The constraint was never demand — it was distribution bandwidth. AI SDR clones remove the constraint for the first time in the history of life insurance sales.', icon: '📊', color: '#8b9cf7' },
          ].map((t, idx) => (
            <div key={idx} style={{ padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: t.color, marginBottom: '0.4rem' }}>{t.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.5 }}>{t.desc}</div>
            </div>
          ))}
        </motion.div>
        <motion.div variants={i} style={{ padding: '1rem 1.5rem', borderRadius: 'var(--radius-lg)', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-1)', lineHeight: 1.6, fontWeight: 500 }}>
            Life insurance distribution hasn't changed in 50 years. An agent picks up the phone, dials, pitches,
            follows up, tracks paperwork, manages compliance — all manually. AgentCorp is the first platform that
            replaces the entire operational layer while amplifying the one thing that can't be automated: the close.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
