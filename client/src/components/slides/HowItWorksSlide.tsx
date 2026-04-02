import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  { name: 'Interface Layer', tech: 'Telegram Bot API · Web Dashboard · Mobile-responsive', color: 'var(--cyan)' },
  { name: 'Dual-Runtime Engine', tech: 'Conversational runtime (live calls) ↔ Cognitive runtime (learning & strategy)', color: 'var(--gold)' },
  { name: 'Model Layer', tech: 'Claude (reasoning) · Gemini (analysis) · Grok (speed) · ElevenLabs (voice)', color: '#8b9cf7' },
  { name: 'Infrastructure', tech: 'Stripe Billing · NextGenSwitch PBX · Redis State · PostgreSQL · Credit Metering', color: 'var(--text-3)' },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">
        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Architecture</motion.span>
        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '1rem' }}>
          Dual-runtime sales engine.{' '}<span className="c-cyan">Compounding shared intelligence.</span>
        </motion.h2>

        {/* Stack layers */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
          {layers.map((l, idx) => (
            <div key={idx} style={{ padding: '0.7rem 1.25rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: l.color, minWidth: 150 }}>{l.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)' }}>{l.tech}</div>
            </div>
          ))}
        </motion.div>

        {/* Dual runtime detail */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '0.75rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--cyan)', marginBottom: '0.4rem' }}>🎙️ CONVERSATIONAL RUNTIME</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-1)', marginBottom: '0.25rem' }}>During the call</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-3)', lineHeight: 1.45 }}>
              Real-time dialogue engine optimized for natural sales conversations. Voice synthesis, objection handling,
              pitch delivery, appointment setting — all flowing seamlessly through NextGenSwitch PBX.
            </div>
          </div>
