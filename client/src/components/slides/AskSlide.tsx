import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const useOfFunds = [
  { pct: '50%', label: 'Product & Engineering', desc: 'GA by Q2 2026' },
  { pct: '30%', label: 'Sales & GTM',           desc: 'Founder-led Year 1' },
  { pct: '20%', label: 'Operations',             desc: '24-month runway' },
];

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Ask
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.4rem' }}>
          $2M to prove the beachhead.{' '}
          <span className="c-cyan">Then we ride a wave that hits every industry.</span>
        </motion.h2>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-4)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
          SEED ROUND · $15M POST-MONEY SAFE
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.1rem' }}>
          {useOfFunds.map((item) => (
            <div key={item.label} style={{ padding: '1rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--cyan)', lineHeight: 1, marginBottom: '0.35rem' }}>{item.pct}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-1)', marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', letterSpacing: '0.04em' }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ marginBottom: '1.25rem' }}>
          <p className="t-body">
            The crypto/Web3 beachhead is Year 1. It's not the ceiling — it's the proof of concept. The company that solves breach-proof storage for the most security-conscious early adopters on earth will have no trouble selling it to healthcare, legal, and financial services.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>That is the company we are building.</span>
          </p>
        </motion.div>

        <motion.div variants={i} style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.4rem, 2.8vw, 2.25rem)',
            color: 'var(--text-1)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            "Hack us all you want—
            <br />
            <span className="c-cyan">you get nothing."</span>
          </p>
        </motion.div>

        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.825rem', color: 'var(--text-2)' }}>Sean Weiss, CEO</p>
          <a href="mailto:sean@blockdrive.co" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}>
            <Mail size={11} />sean@blockdrive.co
          </a>
          <a href="https://app.blockdrive.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}>
            <Globe size={11} />app.blockdrive.co
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}
