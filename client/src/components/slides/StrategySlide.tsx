import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const parallel = [
  {
    era: '1984 — 2001',
    figure: 'Steve Jobs',
    tech: 'The personal computer and the internet',
    problem: 'Transformative technology existed but was inaccessible — owned by engineers and early adopters, too complex and too foreign for the mass market.',
    move: 'Stripped away every layer of complexity. Built interfaces so intuitive that the technology underneath became invisible. The Mac, the iPod, the iPhone — each one brought an entire generation of non-technical users onto infrastructure they would never understand, and never needed to.',
    outcome: 'Captured the mass market by making the technology disappear.',
    accent: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.09)',
    label_color: 'var(--text-3)',
  },
  {
    era: '2025 — present',
    figure: 'BlockDrive',
    tech: 'Web3 infrastructure',
    problem: 'Transformative technology exists but is inaccessible — owned by crypto natives and developers, too complex and too foreign for the mass market.',
    move: 'Strip away every layer of complexity. Build an interface so familiar that the blockchain underneath is invisible. Embedded wallets, sponsored gas, familiar login flows — the security, the ownership, the decentralization, all working silently in the background without asking the user to understand any of it.',
    outcome: 'Capture the mass market by making the technology disappear.',
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.2)',
    label_color: 'var(--cyan)',
  },
];

export default function StrategySlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Strategy
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 780, marginBottom: '0.85rem' }}>
          This has happened before.{' '}
          <span className="c-cyan">We know exactly how it ends.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 640, marginBottom: '1.75rem' }}>
          Web3 today is where the personal computer was in 1984 and the internet was in 1995 — real, powerful, and completely out of reach for anyone who isn't already a native. The technology works. The barrier isn't technical. It's experiential. The company that closes that gap doesn't just win the crypto market. It wins everyone.
        </motion.p>

        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.5rem' }}>
          {parallel.map((p) => (
            <div key={p.figure} style={{ padding: '1.4rem 1.6rem', background: p.accent, border: `1px solid ${p.border}`, borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-1)' }}>{p.figure}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: p.label_color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.era}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: p.label_color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{p.tech}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>The gap</p>
                  <p className="t-body-sm">{p.problem}</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>The move</p>
                  <p className="t-body-sm">{p.move}</p>
                </div>
                <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: p.label_color === 'var(--cyan)' ? 'var(--cyan)' : 'var(--text-2)' }}>{p.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card">
          <p className="t-body">
            This is not a coincidence in the product decisions. It is the deliberate architecture of the company.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>BlockDrive is the bridge from web2 to web3 — and the user never has to know they crossed it.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
