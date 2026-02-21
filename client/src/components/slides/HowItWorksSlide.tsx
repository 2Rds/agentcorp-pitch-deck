import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } } };

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Second Lock
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '1.5rem' }}>
          Even with the key, they'd need your fingerprint.{' '}
          <span style={{ color: 'var(--cyan)' }}>And they'd need to be in the room.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 620, marginBottom: '2rem' }}>
          Your decryption key is locked behind biometric authentication. Passwords get phished. Tokens get intercepted. Credentials get sold on the dark web. A remote attacker cannot replicate your fingerprint from across the internet.
        </motion.p>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 560, textAlign: 'center', padding: '1.75rem 2rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--text-1)',
            lineHeight: 1.4,
          }}>
            Incomplete data + biometric key =<br />
            <span style={{ color: 'var(--cyan)' }}>a new category of protection entirely.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
