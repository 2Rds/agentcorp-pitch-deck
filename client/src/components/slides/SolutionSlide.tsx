import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function SolutionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Solution
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Stop trying to keep attackers out.{' '}
          <span className="c-cyan">Make sure there's nothing for them to find.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          Every security product ever built assumes your files exist somewhere — and the goal is to keep the wrong people away from them. Firewalls, encryption, zero-trust architecture. All of it rests on that assumption. BlockDrive rejects it entirely.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.25rem' }}>
          <div style={{ padding: '1.25rem 1.4rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '0.6rem' }}>Every other storage product</p>
            <p className="t-body-sm">
              Your complete file lives on a server somewhere. Encrypted, yes — but whole and intact. Compromise the server, find the key, or obtain a court order, and the file is accessible.
            </p>
          </div>
          <div style={{ padding: '1.25rem 1.4rem', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.6rem' }}>BlockDrive</p>
            <p className="t-body-sm">
              Your complete file <em>never exists on any single system.</em> It's deliberately broken apart across three separate infrastructures — none of which can reassemble it alone.
            </p>
          </div>
        </motion.div>

        <motion.div variants={i} style={{ borderLeft: '2px solid var(--cyan)', paddingLeft: '1.25rem' }}>
          <p className="t-body">
            We call this <strong style={{ color: 'var(--text-1)' }}>Programmed Incompleteness</strong>. Not a better lock on the door — a building where the valuables don't exist in any one place. The attacker's sophistication is irrelevant because there's no single prize to find.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
