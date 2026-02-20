import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

export default function TitleSlide() {
  return (
    <div className="slide-shell" style={{ justifyContent: 'center' }}>
      <div className="glow-tr" />
      <div className="glow-bl" />

      <motion.div variants={c} initial="hidden" animate="visible"
        style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 720 }}
      >
        <motion.div variants={i} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 18,
            background: 'linear-gradient(135deg, var(--cyan) 0%, rgba(0,229,255,0.4) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(0,229,255,0.3)',
          }}>
            <Shield style={{ width: 36, height: 36, color: '#08080f' }} />
          </div>
        </motion.div>

        <motion.h1 variants={i} style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 7vw, 5.5rem)', letterSpacing: '-0.03em',
          color: 'var(--text-1)', marginBottom: '1rem', lineHeight: 1.05,
        }}>
          BlockDrive
        </motion.h1>

        <motion.p variants={i} style={{
          fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: 'var(--text-2)', marginBottom: '0.75rem', fontWeight: 400,
        }}>
          Cloud Storage for the New Internet
        </motion.p>

        <motion.p variants={i} style={{
          fontFamily: 'var(--font-body)', fontSize: '1rem',
          color: 'var(--text-3)', maxWidth: 520, margin: '0 auto 2.5rem',
        }}>
          The first storage platform where breaches are architecturally pointless.
        </motion.p>

        <motion.div variants={i} style={{ display: 'inline-block' }}>
          <div style={{
            padding: '1.5rem 2.5rem',
            background: 'rgba(0,229,255,0.06)',
            border: '1px solid rgba(0,229,255,0.25)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 0 30px rgba(0,229,255,0.1)',
          }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--cyan)', marginBottom: '0.5rem' }}>
              Seed Round
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-1)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.4rem' }}>
              $2M
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-2)' }}>
              $12M Post-Money SAFE
            </p>
          </div>
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2.5rem' }}>
          Confidential Investment Materials
        </motion.p>
      </motion.div>
    </div>
  );
}
