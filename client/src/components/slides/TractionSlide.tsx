import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const personas = [
  { tag: 'SOLAR', desc: 'GM, top-producing office nationally — largest privately-owned US solar corp' },
  { tag: 'REAL ESTATE', desc: "Top-producing global advisor, Sotheby's — $500K+ annual production" },
  { tag: 'SOFTWARE', desc: 'Sole-practitioner developer' },
  { tag: 'HOLDING CO', desc: 'Owner, multi-national holding — 4 subsidiaries, hundreds of employees' },
  { tag: 'SMB', desc: 'Small business owner / operator' },
];

export default function TractionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Traction</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 940, marginBottom: '0.5rem' }}>
          Five inbound users. Five verticals.{' '}<span className="c-cyan">Zero marketing spend.</span>
        </motion.h2>
        <motion.p variants={i} style={{ maxWidth: 820, fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-3)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          Product pulls organic demand across horizontal industries — before GTM opened.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
          {personas.map((p, idx) => (
            <div key={idx} style={{ padding: '0.85rem 0.9rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--cyan)', marginBottom: '0.45rem' }}>{p.tag}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-2)', lineHeight: 1.4 }}>{p.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.5rem' }}>PRODUCT SURFACE</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              6 agents in production. Multi-model runtime. Credit-metered billing. Multi-tenant isolation.
              Governance + compliance spine. White-glove operator layer planned for Phase 2 post-initial traction.
            </div>
          </div>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: '0.5rem' }}>ORGANIC DISTRIBUTION</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
              All five arrived pre-GTM through inbound network. Founder's seven years in wealth management — Prudential Diamond Elephant top producer — compound into a warm distribution surface that paid acquisition can't replicate at this stage. GTM accelerates volume, not interest.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
