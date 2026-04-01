import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

const signals = [
  { stat: '350,000+', label: 'GitHub stars across multi-agent projects', sub: 'CrewAI, OpenClaw, AutoGen, LangGraph — the ecosystem is validating multi-agent', color: 'var(--cyan)' },
  { stat: '$50.3B', label: 'AI agent market projected by 2030 — 45.8% CAGR', sub: '— Grand View Research, May 2025', color: 'var(--gold)' },
  { stat: '1B+', label: 'Telegram monthly active users — native distribution channel', sub: 'Mini Apps enable full workspaces with no app store friction', color: 'var(--text-1)' },
];

export default function ThesisSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Why Now
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.9rem' }}>
          Three things converged in the last 12 months.{' '}
          <span className="c-cyan">This window won't stay open.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.4rem' }}>
          Multi-model orchestration became viable. The developer ecosystem validated multi-agent
          as the next infrastructure layer. And Telegram opened a native distribution channel to
          1 billion+ users via Mini Apps. None of this was possible two years ago.
        </motion.p>

        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {signals.map((s, idx) => (
            <div key={idx} style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem',
              padding: '1rem 1.3rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', color: s.color, flexShrink: 0, minWidth: 120, textAlign: 'right' }}>{s.stat}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '0.15rem' }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', letterSpacing: '0.06em' }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
