import { motion } from 'framer-motion';
import { Lock, Cloud, Wallet } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const steps = [
  {
    num: '01',
    title: 'Encrypt & Split',
    Icon: Lock,
    body: 'Your file is encrypted client-side with AES-256-GCM using a wallet-derived key. 16 critical bytes are extracted and stored separately — the main file becomes mathematically incomplete.',
    tech: ['AES-256-GCM', 'Client-side keys', '16-byte extraction'],
    accent: 'var(--cyan)',
    accentBg: 'rgba(0,229,255,0.08)',
    accentBorder: 'rgba(0,229,255,0.2)',
  },
  {
    num: '02',
    title: 'Distributed Storage',
    Icon: Cloud,
    body: 'Encrypted data goes to enterprise-grade IPFS/Arweave. The 16 bytes are wrapped in zero-knowledge proofs and stored on Cloudflare R2. A commitment hash is recorded on Solana.',
    tech: ['IPFS / Arweave', 'Cloudflare R2', 'Solana PDA'],
    accent: 'rgba(120,160,255,1)',
    accentBg: 'rgba(120,160,255,0.06)',
    accentBorder: 'rgba(120,160,255,0.18)',
  },
  {
    num: '03',
    title: 'Secure Retrieval',
    Icon: Wallet,
    body: 'When you need your files, both pieces are fetched and recombined client-side. Only your wallet can decrypt — not your ISP, not a subpoena, not BlockDrive itself.',
    tech: ['Wallet-gated', 'ZK verification', 'Client-only assembly'],
    accent: 'var(--gold)',
    accentBg: 'rgba(232,201,106,0.06)',
    accentBorder: 'rgba(232,201,106,0.18)',
  },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          How It Works
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 640, marginBottom: '0.85rem' }}>
          Three layers. None of them complete without the others.
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 580, marginBottom: '1.75rem' }}>
          The architecture is designed so that any one layer can be fully compromised and the attacker still has nothing. Security by separation, not by strength.
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.5rem' }}>
          {steps.map((step) => (
            <div key={step.num} style={{
              padding: '1.4rem 1.4rem',
              background: step.accentBg,
              border: `1px solid ${step.accentBorder}`,
              borderRadius: 'var(--radius-lg)',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: step.accentBg,
                  border: `1px solid ${step.accentBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <step.Icon style={{ width: 16, height: 16, color: step.accent }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: step.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{step.num}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-1)', lineHeight: 1.2 }}>{step.title}</p>
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.835rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{step.body}</p>

              {/* Tech pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                {step.tech.map((t) => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                    color: step.accent, background: step.accentBg,
                    border: `1px solid ${step.accentBorder}`,
                    borderRadius: 4, padding: '0.2rem 0.5rem',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 660 }}>
          <p className="t-body">
            Compromise IPFS — you get encrypted fragments. Compromise R2 — you get a ZK proof with no corresponding file. Compromise Solana — you get metadata with nothing to reconstruct.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>You need all three simultaneously. That's not a real attack surface.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
