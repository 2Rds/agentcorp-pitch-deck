import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const layers = [
  {
    tag: 'Layer 01',
    title: 'The broken file',
    where: 'Decentralized cloud — IPFS & Arweave',
    body: "The bulk of your file — already encrypted on your device before upload — is stored across a decentralized network no single company controls. But it's missing a critical piece. Without it, this data is structurally useless to anyone who finds it.",
    accent: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.09)',
    tag_color: 'var(--text-3)',
  },
  {
    tag: 'Layer 02',
    title: 'The missing piece',
    where: 'Cloudflare R2 — enterprise infrastructure',
    body: "The critical bytes stripped from your file are secured separately on Cloudflare R2, protected by a zero-knowledge proof. Cloudflare can store it but cannot read it. The proof mathematically guarantees that only your identity can ever unlock what's inside.",
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.15)',
    tag_color: 'var(--cyan)',
  },
  {
    tag: 'Layer 03',
    title: 'The only map',
    where: 'Solana blockchain — inside your wallet',
    body: 'Your wallet holds the cryptographic record that ties everything together — where the file lives, where the proof lives, and the commitment that verifies the missing piece is authentic. No wallet, no map. No map, no file.',
    accent: 'rgba(240,165,0,0.05)',
    border: 'rgba(240,165,0,0.18)',
    tag_color: 'var(--gold)',
  },
];

export default function HowItWorksSlide() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '3.5rem 5rem', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-bl" />

      <motion.div variants={c} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 940 }}>

        <motion.span variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '0.75rem' }}>
          How It Works
        </motion.span>

        <motion.h2 variants={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', letterSpacing: '-0.025em', lineHeight: 1.1, color: 'var(--text-1)', marginBottom: '0.75rem' }}>
          Your file lives across three separate systems.{' '}
          <span style={{ color: 'var(--cyan)' }}>None of them can do anything alone.</span>
        </motion.h2>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: 620 }}>
          When you upload to BlockDrive, your file is immediately split across three completely independent infrastructures. Compromising one — or even two — gets an attacker exactly nothing.
        </motion.p>

        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', marginBottom: '1.5rem' }}>
          {layers.map((l) => (
            <div key={l.tag} style={{ padding: '1.25rem 1.4rem', background: l.accent, border: `1px solid ${l.border}`, borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: l.tag_color, marginBottom: '0.5rem' }}>{l.tag}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-1)', marginBottom: '0.3rem', lineHeight: 1.2 }}>{l.title}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-3)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>{l.where}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{l.body}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} style={{ padding: '1rem 1.5rem', background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.12)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{ width: 2, alignSelf: 'stretch', background: 'var(--cyan)', flexShrink: 0, borderRadius: 1 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.65 }}>
            <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>When you delete a file, it's gone for real.</span>{' '}
            The cryptographic record in your wallet is permanently invalidated. The missing piece on Cloudflare becomes mathematically orphaned — verified against nothing, usable by no one. Everything else still sitting in the decentralized cloud is now permanent, irreversible garbage.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
