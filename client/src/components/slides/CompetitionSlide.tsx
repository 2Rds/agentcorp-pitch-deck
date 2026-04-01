import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const features = [
  { name: 'Pre-built workforce',    ac: true,  ema: true,  motion: true,  beam: true,  oss: 'Varies' },
  { name: 'Peer-to-peer agent comms', ac: true, ema: false, motion: false, beam: false, oss: false },
  { name: 'Voice-native sales',     ac: true,  ema: false, motion: false, beam: false, oss: false },
  { name: 'White-glove service',    ac: true,  ema: false, motion: false, beam: false, oss: false },
  { name: 'Telegram distribution',  ac: true,  ema: false, motion: false, beam: false, oss: false },
  { name: 'Governance + spend ctrl', ac: true, ema: true,  motion: 'Basic', beam: true, oss: false },
  { name: 'Funded & scaled',        ac: 'Pre-seed', ema: '$61M', motion: '$75M', beam: '$1.4M', oss: 'N/A' },
  { name: 'Paying customers',       ac: 'Pre-rev', ema: '10K+', motion: '10K+', beam: 'Early', oss: 'N/A' },
];

const renderVal = (v: boolean | string, isAC = false) => {
  if (v === true) return <Check style={{ width: 16, height: 16, color: isAC ? 'var(--cyan)' : '#4ade80' }} />;
  if (v === false) return <X style={{ width: 16, height: 16, color: 'rgba(239,68,68,0.4)' }} />;
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: isAC ? 'var(--cyan)' : 'var(--text-3)' }}>{v}</span>;
};

export default function CompetitionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Competitive Landscape
        </motion.span>

        <motion.h2 variants={i} className="t-title c-wgite" style={{ maxWidth: 860, marginBottom: '1.25rem' }}>
          Enterprises get Ema. Developers get frameworks.{' '}
          <span className="c-cyan">SMBs get nothing.</span>
        </motion.h2>

        <motion.div variants={i} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-hi)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.04)', padding: '0.6rem 0.9rem' }}>
            {['', 'AgentCorp', 'Ema ($61M)', 'Motion ($550M)', 'Beam AI', 'Open-Source'].map((h, idx) => (
              <div key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: idx === 1 ? 'var(--cyan)' : 'var(--text-4)', fontWeight: idx === 1 ? 600 : 400, textAlign: idx === 0 ? 'left' : 'center' }}>{h}</div>
            ))}
          </div>
          {/* Rows */}
          {features.map((f, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr 1fr', padding: '0.55rem 0.9rem', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)' }}>{f.name}</div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{renderVal(f.ac, true)}</div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{renderVal(f.ema)}</div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{renderVal(f.motion)}</div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{renderVal(f.beam)}</div>
              <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>{renderVal(f.oss)}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-3)', marginTop: '1rem', maxWidth: 700 }}>
          350,000+ GitHub stars prove demand. Nobody has built the managed workforce with governance,
          billing, and a wgite-glove service model for SMBs.
        </motion.p>

      </motion.div>
    </div>
  );
}
