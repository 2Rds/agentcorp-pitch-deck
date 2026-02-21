import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  {
    tag: 'Layer 01',
    title: 'The broken file',
    where: 'IPFS & Arweave',
    body: "The bulk of your file — encrypted on device before upload — is stored across a decentralized network no single company controls. But it's missing a critical piece. Without it, this data is structurally useless.",
    accent: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.09)',
    tag_color: 'var(--text-3)',
  },
  {
    tag: 'Layer 02',
    title: 'The missing piece',
    where: 'Cloudflare R2',
    body: "The critical bytes stripped from your file are secured separately on Cloudflare R2, protected by a zero-knowledge proof. Cloudflare can store it but cannot read it. Only your identity can ever unlock what's inside.",
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.15)',
    tag_color: 'var(--cyan)',
  },
  {
    tag: 'Layer 03',
    title: 'The only map',
    where: 'Solana — your wallet',
    body: 'Your wallet holds the cryptographic record that ties everything together — where the file lives, where the proof lives, and the commitment that verifies the missing piece is authentic. No wallet, no map. No map, no file.',
    accent: 'rgba(240,165,0,0.05)',
    border: 'rgba(240,165,0,0.18)',
    tag_color: 'var(--gold)',
  },
];

export default function HowItWorksSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          How It Works
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.85rem' }}>
          Your file lives across three separate systems.{' '}
          <span className="c-cyan">None of them can do anything alone.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 720, marginBottom: '1.25rem' }}>
          When you upload to BlockDrive, your file is immediately split across three completely independent infrastructures. Compromising one — or even two — gets an attacker exactly nothing.
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1rem' }}>
          {layers.map((l) => (
            <div key={l.tag} style={{ padding: '1.1rem 1.25rem', background: l.accent, border: `1px solid ${l.border}`, borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: l.tag_color, marginBottom: '0.4rem' }}>{l.tag}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-1)', marginBottom: '0.2rem', lineHeight: 1.2 }}>{l.title}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-3)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>{l.where}</p>
              <p className="t-body-sm">{l.body}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{ padding: '0.9rem 1.25rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 2, alignSelf: 'stretch', background: 'var(--cyan)', flexShrink: 0, borderRadius: 1 }} />
          <p className="t-body-sm">
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>When you delete a file, it's gone for real.</span>{' '}
            The wallet record is permanently invalidated. The missing piece on Cloudflare becomes mathematically orphaned — verified against nothing, usable by no one. Everything else in the decentralized cloud is now permanent, irreversible garbage.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
