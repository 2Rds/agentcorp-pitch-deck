import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const competitors = [
  { name: 'AI SDR Specialists', examples: '11x.ai ($50M+), Apollo AI', coverage: ['✓','✗','✗','✗','✗'], note: 'Outbound only. No back-office.' },
  { name: 'Build-Your-Own AI', examples: 'Lindy.ai, Relevance AI ($18M)', coverage: ['△','△','△','✓','✗'], note: 'Toolkit, not a workforce. User assembles.' },
  { name: 'Workflow Automation', examples: 'Bardeen ($15M), Make + AI', coverage: ['△','✗','✗','△','✗'], note: 'Task automation. Agents don\'t think.' },
  { name: 'DIY Agent Frameworks', examples: 'CrewAI, AutoGen, LangGraph', coverage: ['✗','✗','✗','△','✗'], note: 'Developer toolkit. Requires engineering team.' },
  { name: 'Enterprise AI Workforce', examples: 'Ema ($75M), Athena', coverage: ['✓','△','✓','✓','✗'], note: 'Enterprise-only. Six-figure contracts. No SMB tier.' },
  { name: 'AgentCorp', examples: '', coverage: ['✓','✓','✓','✓','✓'], note: 'Full surface. $250–$2,500/mo today (+$1.5K Phase 2 WG).' },
];
const cols = ['AI SDR', 'BI/Analytics', 'Finance/Ops', 'Multi-Agent', 'White-Glove'];

export default function CompetitionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Competition</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Everyone does one thing.{' '}<span className="c-cyan">Nobody does everything.</span>
        </motion.h2>
        <motion.div variants={i} style={{ marginBottom: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead><tr>
              <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', borderBottom: '1px solid var(--border-hi)' }}></th>
              {cols.map((col, idx) => (<th key={idx} style={{ textAlign: 'center', padding: '0.5rem 0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.06em', color: 'var(--text-4)', borderBottom: '1px solid var(--border-hi)' }}>{col}</th>))}
              <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--text-4)', borderBottom: '1px solid var(--border-hi)' }}>Gap</th>
            </tr></thead>
            <tbody>
              {competitors.map((comp, idx) => {
                const isUs = idx === competitors.length - 1;
                return (
                  <tr key={idx} style={{ background: isUs ? 'rgba(0,229,255,0.06)' : 'transparent' }}>
                    <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border-hi)' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: isUs ? 800 : 600, fontSize: '0.78rem', color: isUs ? 'var(--cyan)' : 'var(--text-1)' }}>{comp.name}</div>
                      {comp.examples && <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--text-4)' }}>{comp.examples}</div>}
                    </td>
                    {comp.coverage.map((v, cidx) => (
                      <td key={cidx} style={{ textAlign: 'center', padding: '0.6rem 0.4rem', borderBottom: '1px solid var(--border-hi)', fontSize: '0.85rem', color: v === '✓' ? (isUs ? 'var(--cyan)' : '#4ade80') : v === '✗' ? '#ef4444' : 'var(--gold)' }}>{v}</td>
                    ))}
                    <td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border-hi)', fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: isUs ? 'var(--cyan)' : 'var(--text-4)', fontStyle: isUs ? 'normal' : 'italic' }}>{comp.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div style={{ padding: '0.75rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>WHERE WE SIT</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.4 }}>The only full-surface AI workforce built for SMB owner-operators — sales, BI, finance, ops, marketing pre-built and coordinated. Live tiers $250–$2,500/mo; Phase 2 White-Glove adds +$1.5K/mo bundled operator. Ema is the enterprise cousin — different segment, different GTM.</div>
          </div>
          <div style={{ padding: '0.75rem 1rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.3rem' }}>DEFENSIBILITY</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-3)', lineHeight: 1.4 }}>A competitor must replicate 6 specialized agents, credit metering, automated SDR, multi-model runtime, dual-runtime learning architecture, AND white-glove managed services. That's a full product, not a feature.</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
