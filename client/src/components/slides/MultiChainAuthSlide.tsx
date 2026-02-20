import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const identities = [
  {
    tag: 'EVM Identity',
    handle: 'yourname.blockdrive.eth',
    body: 'A human-readable username issued at signup — your permanent identity across the Ethereum ecosystem. No wallet addresses. No cryptic strings. Just your name.',
    accent: 'rgba(98,126,234,0.08)',
    border: 'rgba(98,126,234,0.22)',
    label_color: '#8b9cf7',
  },
  {
    tag: 'Solana Identity',
    handle: 'yourname.blockdrive.sol',
    body: 'Your corresponding identity on Solana — the chain where your encrypted files, proofs, and storage records actually live. Two chains, one seamless identity.',
    accent: 'rgba(0,229,255,0.05)',
    border: 'rgba(0,229,255,0.18)',
    label_color: 'var(--cyan)',
  },
  {
    tag: 'Access Token',
    handle: 'yourname.blockdrive.sol NFT',
    body: 'A membership token issued to your wallet at subscription that tokengates your account. No valid NFT, no access. It replaces the traditional username-and-password model entirely.',
    accent: 'rgba(240,165,0,0.05)',
    border: 'rgba(240,165,0,0.18)',
    label_color: 'var(--gold)',
  },
];

export default function MultiChainAuthSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Multi-Chain Authentication
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '0.85rem' }}>
          The front door looks familiar.{' '}
          <span className="c-cyan">What's behind it is unlike anything that exists.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 640, marginBottom: '1.5rem' }}>
          Users sign up the same way they would for any modern app — name, email, done. BlockDrive then automatically creates a fully embedded wallet via Dynamic.xyz, issues a dual-chain identity, and mints a membership token, all invisibly and at no cost to the user. The web3 infrastructure does the heavy lifting. The user never knows it's there.
        </motion.p>

        <motion.div variants={i} className="cols-3" style={{ marginBottom: '1.25rem' }}>
          {identities.map((id) => (
            <div key={id.tag} style={{ padding: '1.1rem 1.3rem', background: id.accent, border: `1px solid ${id.border}`, borderRadius: 'var(--radius-lg)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: id.label_color, marginBottom: '0.4rem' }}>{id.tag}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-1)', fontWeight: 500, marginBottom: '0.65rem', letterSpacing: '0.02em' }}>{id.handle}</p>
              <p className="t-body-sm">{id.body}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i} className="bar-card">
          <p className="t-body">
            Together these form BlockDrive's <strong style={{ color: 'var(--text-1)' }}>tokenized IAM system</strong> — a front-end security layer where identity is cryptographic and access is on-chain. Even the wallet itself follows the same philosophy as the files it protects: its encryption key is split across three independent systems so no single point of compromise can ever expose it.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>There is no central identity database to breach, leak, or hand over. Because there isn't one.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
