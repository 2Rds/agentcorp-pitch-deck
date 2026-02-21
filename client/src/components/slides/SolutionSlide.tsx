import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function SolutionSlide() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '3.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-tr" />

      <motion.div variants={c} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 860 }}>

        <motion.span variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '0.75rem' }}>
          The Insight
        </motion.span>

        <motion.h2 variants={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.4rem', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-1)', marginBottom: '1rem' }}>
          Stop trying to keep attackers out.{' '}
          <span style={{ color: 'var(--cyan)' }}>Make sure there's nothing for them to find.</span>
        </motion.h2>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 660 }}>
          Every security product ever built assumes your files exist somewhere — and the goal is to keep the wrong people away from them. Firewalls, encryption, zero-trust architecture. All of it rests on that assumption. BlockDrive rejects it entirely.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: '0.75rem' }}>Every other storage product</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
              Your complete file lives on a server somewhere. Encrypted, yes — but whole and intact. Compromise the server, find the key, or obtain a court order, and the file is accessible.
            </p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.75rem' }}>BlockDrive</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
              Your complete file <em>never exists on any single system.</em> It's deliberately broken apart across three separate infrastructures — none of which can reassemble it alone.
            </p>
          </div>
        </motion.div>

        <motion.div variants={i} style={{ borderLeft: '2px solid var(--cyan)', paddingLeft: '1.25rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-1)', lineHeight: 1.65 }}>
            We call this <strong>Programmed Incompleteness</strong>. Not a better lock on the door — a building where the valuables don't exist in any one place. The attacker's sophistication is irrelevant because there's no single prize to find.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
