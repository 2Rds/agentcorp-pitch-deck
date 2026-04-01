import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

export default function HookSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Hook — What Sells the Platform
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          An AI sales team that makes phone calls.{' '}
          <span className="c-cyan">That's what gets them in the door.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
          Every customer gets all 9 agents from day one. But the capability that sells the platform
          is Sam — a voice-native AI sales force that orchestrates SDR workers with ElevenLabs
          voice synthesis and real telephony through NextGenSwitch PBX.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '1.25rem 1.4rem', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.18)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.6rem' }}>What the customer sees</div>
            <div className="t-body-sm">
              An AI sales team that books meetings, qualifies leads, and manages pipeline — with
              measurable ROI from week one. Live at sales.agentcorp.work.
            </div>
          </div>
          <div style={{ padding: '1.25rem 1.4rem', background: 'rgba(232,201,106,0.05)', border: '1px solid rgba(232,201,106,0.18)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>What they discover inside</div>
            <div className="t-body-sm">
              8 more agents already running compliance, marketing, legal, HR, finance, and operations.
              That's not an upsell — it's already included.
            </div>
          </div>
        </motion.div>

        <motion.div variants={i} style={{
          padding: '1rem 1.3rem',
          background: 'var(--surface)',
          border: '1px solid var(--border-hi)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex', gap: '2rem', alignItems: 'center',
        }}>
          {[
            { label: 'Voice Engine', val: 'ElevenLabs TTS/STT', color: 'var(--cyan)' },
            { label: 'Telephony', val: 'Telnyx + NextGenSwitch PBX', color: 'var(--gold)' },
            { label: 'SDR Workers', val: 'Autonomous outbound agents', color: '#8b9cf7' },
          ].map((t, idx) => (
            <div key={idx}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: t.color, marginBottom: '0.2rem' }}>{t.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)' }}>{t.val}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-3)', marginTop: '1rem', fontStyle: 'italic' }}>
          No competitor in the managed agent space offers voice-native sales capability.
        </motion.p>

      </motion.div>
    </div>
  );
}
