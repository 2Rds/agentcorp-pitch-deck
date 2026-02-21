import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const parallel = [
  {
    era: '1984 — 2001',
    figure: 'Steve Jobs',
    tech: 'The personal computer and the internet',
    move: 'Stripped away every layer of complexity. Built interfaces so intuitive that the technology underneath became invisible. Each product brought an entire generation of non-technical users onto infrastructure they would never understand — and never needed to.',
    outcome: 'Captured the mass market by making the technology disappear.',
    accent: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.09)',
    label_color: 'var(--text-3)',
  },
  {
    era: '2025 — present',
    figure: 'BlockDrive',
    tech: 'Web3 infrastructure',
    move: 'Embed the blockchain entirely in the background — leveraging its superior security and ownership properties while preserving the familiar app experience users already know. Embedded wallets, sponsored gas, familiar login flows. The technology does the work. The user never knows it\'s there.',
    outcome: 'Capture the mass market by making the technology disappear.',
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.2)',
    label_color: 'var(--cyan)',
  },
];

export default function PositioningSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Why We Win
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 780, marginBottom: '1rem' }}>
          Every Web3 company wears the badge.{' '}
          <span style={{ color: 'var(--cyan)' }}>We hide it on purpose.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 660, marginBottom: '1.75rem' }}>
          Filecoin, StorJ, Pinata — they built for the crypto-native minority and called it a market. That badge is a ceiling. We're not playing that game. Web3 today is exactly where the personal computer was in 1984 — real, powerful, and completely inaccessible to anyone who isn't already a native. Steve Jobs didn't sell computers to engineers. He made the technology disappear and sold to everyone. That is the precise playbook we are running.
        </motion.p>

        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.5rem' }}>
          {parallel.map((p) => (
            <div key={p.figure} style={{ padding: '1.4rem 1.6rem', background: p.accent, border: `1px solid ${p.border}`, borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-1)' }}>{p.figure}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: p.label_color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.era}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: p.label_color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{p.tech}</p>
              <p className="t-body-sm" style={{ marginBottom: '0.75rem' }}>{p.move}</p>
              <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: p.label_color === 'var(--cyan)' ? 'var(--cyan)' : 'var(--text-2)' }}>{p.outcome}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card">
          <p className="t-body">
            BlockDrive is the bridge from web2 to web3.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>The user never has to know they crossed it.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
