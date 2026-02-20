import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

export default function PositioningSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Why We Win
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 740, marginBottom: '1rem' }}>
          Every decentralized storage company markets itself as a Web3 company.{' '}
          <span className="c-cyan">We don't.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 640, marginBottom: '1.75rem' }}>
          Filecoin. StorJ. Pinata. They wear the Web3 badge as their identity. That badge is a ceiling — limiting them to a fraction of the market, requiring customers to change how they think, how they operate, and what they already believe. We built the enterprise cloud storage of the new internet on decentralized infrastructure that no one sees and no one has to understand.
        </motion.p>

        <motion.div variants={i} style={{ padding: '1.4rem 1.6rem', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)', marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>The Distinction</p>
          <p className="t-body">
            The blockchain is the <strong style={{ color: 'var(--text-1)' }}>infrastructure</strong>, not the identity. We deliberately embed the web3 technology in the background — leveraging its superior security and ownership properties while preserving the familiar app experience users already know. The user signs up, uploads, accesses. The technology does the rest, invisibly.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>That is not an accident. It is the entire strategy.</span>
          </p>
        </motion.div>

        <motion.div variants={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
          {['Filecoin', 'StorJ', 'Pinata'].map((name) => (
            <span key={name} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', padding: '0.5rem 1.1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-4)', textDecoration: 'line-through' }}>{name}</span>
          ))}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', margin: '0 0.4rem' }}>vs</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', padding: '0.5rem 1.25rem', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.25)', borderRadius: 'var(--radius-md)', color: 'var(--cyan)' }}>BlockDrive — no ceiling</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
