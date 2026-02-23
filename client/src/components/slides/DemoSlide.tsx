import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as any } } };

export default function DemoSlide() {
  return (
    <div className="slide-shell" style={{ padding: 0, alignItems: 'stretch' }}>
      <motion.div variants={c} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>

        <motion.div variants={i} style={{ padding: '1.5rem 2.5rem 0.75rem', flexShrink: 0 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.4rem' }}>
            Live Demo
          </span>
          <p className="t-body" style={{ maxWidth: 600 }}>
            Walk through the full BlockDrive experience — <span className="c-cyan" style={{ fontWeight: 600 }}>connect, upload, encrypt, and share</span> — right here.
          </p>
        </motion.div>

        <motion.div variants={i} style={{ flex: 1, padding: '0 2.5rem 1.5rem', minHeight: 0 }}>
          <iframe
            src="https://waitlist.blockdrive.co/demo?embedded"
            title="BlockDrive Live Demo"
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
              background: '#0a0a0f',
            }}
            allow="clipboard-write"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}
