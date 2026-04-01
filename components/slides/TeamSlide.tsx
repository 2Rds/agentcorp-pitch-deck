import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as any } } };

const team = [
  {
    name: 'Sean Weiss',
    title: 'Founder & CEO',
    bio: "10 years institutional finance — JPMorgan Private Bank, Merrill Lynch, AXA, Prudential. Series 7, Series 66. Currently consulting for Google and other top-tier AI labs on AI + finance projects. Built the entire AgentCorp platform solo using AI-augmented development.",
    edge: 'A decade of institutional finance relationships are the pipeline. These are not cold leads.',
    bg: 'rgba(0,229,255,0.04)',
    border: 'rgba(0,229,255,0.18)',
    accent: 'var(--cyan)',
  },
  {
    name: 'Roberto Cinque',
    title: 'Head of Engineering (post-raise)',
    bio: "Full-stack engineer with deep cybersecurity and distributed systems experience. Platform architecture, API design, infrastructure hardening. 1.5% equity, 4-year vest, 1-year cliff.",
    edge: 'The architect who hardens the platform for SOC 2 and scales it beyond founder-built.',
    bg: 'rgba(232,201,106,0.04)',
    border: 'rgba(232,201,106,0.18)',
    accent: 'var(--gold)',
  },
];

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Team
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          A finance veteran who ships production software.{' '}
          <span className="c-cyan">That's the thesis in one person.</span>
        </motion.h2>

        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.25rem' }}>
          {team.map((t, idx) => (
            <div key={idx} style={{
              padding: '1.25rem 1.5rem',
              background: t.bg,
              border: `1px solid ${t.border}`,
              borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-1)' }}>{t.name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: t.accent }}>{t.title}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--text-3)', marginBottom: '0.6rem' }}>{t.bio}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)', fontStyle: 'italic' }}>{t.edge}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{
          padding: '1rem 1.3rem',
          background: 'var(--surface)',
          border: '1px solid var(--border-hi)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-1)' }}>Founder edge:</span> A domain expert currently contracted to consult on AI projects for Google — who also ships a production platform with 9 deployed agents solo. That's not a non-technical founder learning to code. That's a domain expert building at the intersection of AI and financial services.
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
