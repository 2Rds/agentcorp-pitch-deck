import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  {
    tag: 'The Workforce',
    title: '9 specialized agents',
    body: 'Executive Assistant, Finance, Operations, Marketing, Compliance, Legal, HR, Sales, and Investor Relations — each with scoped tools, persistent memory, and validated personas.',
    accent: 'rgba(0,229,255,0.05)', border: 'rgba(0,229,255,0.18)', color: 'var(--cyan)',
  },
  {
    tag: 'The Nervous System',
    title: 'Inter-agent communication',
    body: 'Agents don\'t operate in silos. A peer-to-peer MessageBus lets them delegate tasks, share context, and coordinate — like a real executive team. No competitor has this.',
    accent: 'rgba(232,201,106,0.05)', border: 'rgba(232,201,106,0.18)', color: 'var(--gold)',
  },
  {
    tag: 'The Guardrails',
    title: 'Governance + spend control',
    body: 'Per-agent daily spend limits, C-Suite approval flows, and atomic budget enforcement. Designed for regulated industries where AI can\'t run unsupervised.',
    accent: 'rgba(139,156,247,0.06)', border: 'rgba(139,156,247,0.20)', color: '#8b9cf7',
  },
  {
    tag: 'The Brain',
    title: 'Multi-model orchestration',
    body: 'Claude Opus 4.6, Gemini 3 Flash, and Grok 4.1 Fast — routed through Cloudflare AI Gateway with semantic caching. The right model for every task at the lowest cost.',
    accent: 'rgba(52,211,153,0.05)', border: 'rgba(52,211,153,0.18)', color: '#34d399',
  },
];

export default function SolutionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Solution
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Not 9 chatbots. A{' '}
          <span className="c-cyan">full-stack agentic operating system</span>{' '}
          that runs your company.
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          AgentCorp isn't a collection of AI tools bolted together. It's an integrated corporate
          ecosystem where agents communicate, coordinate, and govern themselves — operating as a
          single unified workforce with shared context and real-time oversight.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {layers.map((l, idx) => (
            <div key={idx} style={{
              padding: '1.1rem 1.25rem',
              background: l.accent,
              border: `1px solid ${l.border}`,
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: l.color, marginBottom: '0.4rem' }}>{l.tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: '0.4rem' }}>{l.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--text-3)' }}>{l.body}</div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}
