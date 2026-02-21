import { motion } from 'framer-motion';

export default function TitleSlide() {
  return (
    <div className="slide-shell" style={{ justifyContent: 'center' }}>
      <div className="glow-tr" />
      <div className="glow-bl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 760 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'linear-gradient(135deg, var(--cyan) 0%, rgba(0,229,255,0.4) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(0,229,255,0.3)',
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M16 4V28M4 10L28 22M28 10L4 22" stroke="white" strokeWidth="1.5" opacity="0.4"/>
            </svg>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="eyebrow"
          style={{ display: 'block', marginBottom: '1.5rem' }}
        >
          BlockDrive
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--text-1)',
            marginBottom: '1.25rem',
          }}
        >
          The first cloud storage system where someone finding a way in{' '}
          <span style={{ color: 'var(--cyan)' }}>does not break the system.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'inline-block', marginTop: '1.5rem' }}
        >
          <div className="bar-card" style={{ textAlign: 'center', padding: '1.25rem 2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Seed Round
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--text-1)', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
              $2M
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-3)' }}>
              $12M Post-Money SAFE
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-4)', letterSpacing: '0.08em', marginTop: '2rem' }}
        >
          CONFIDENTIAL INVESTMENT MATERIALS
        </motion.p>
      </motion.div>
    </div>
  );
}
