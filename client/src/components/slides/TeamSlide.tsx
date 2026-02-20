import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const pipeline = ['Holland & Knight', 'Mercury', 'Bitwise', "Sotheby's", 'BlackRock Aladdin', 'Gunster Yoakley'];

const team = [
  {
    photo: '/images/sean-weiss.jpg',
    name: 'Sean Weiss',
    title: 'Co-Founder & CEO',
    highlights: ['JPMorgan Private Bank', 'Merrill Lynch VP (fastest promotion)', 'AXA Rookie of the Year', '2024 Diamond Elephant Award'],
    bio: "Sean spent the first decade of his career earning the trust of sophisticated high-net-worth investors and business owners on the most sensitive subjects possible relating to their financial lives. That network is now the pipeline. These aren't cold leads — they're relationships built over a career of earning trust with people who don't give it easily.",
    // muted white treatment — matches Jobs card on slide 8
    bg:     'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.09)',
    accent: 'rgba(255,255,255,0.5)',
  },
  {
    photo: '/images/roberto-cinque.jpg',
    name: 'Roberto Cinque',
    title: 'Head of Engineering',
    highlights: ['Programmed Incompleteness architect', 'Full-stack blockchain engineer', 'DeFi & NFT production systems', 'Solidity · Solana · Web3 infra'],
    bio: "Roberto is the architect of Programmed Incompleteness — the core technology that makes BlockDrive breach-proof by design. He has shipped exchange platforms, DeFi protocols, and NFT systems across multiple production environments, with deep expertise in Web3 infrastructure, cybersecurity, and smart contract systems.",
    // muted cyan treatment — matches BlockDrive card on slide 8
    bg:     'rgba(0,229,255,0.04)',
    border: 'rgba(0,229,255,0.18)',
    accent: 'var(--cyan)',
  },
];

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          The Team
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 700, marginBottom: '0.85rem' }}>
          The operator who built the network.{' '}
          The engineer who built the product.{' '}
          <span className="c-cyan">Both all-in.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 600, marginBottom: '1.75rem' }}>
          Two roles, zero redundancy. Sean converts institutional relationships into closed deals. Roberto ships the technology those deals are built on.
        </motion.p>

        {/* Team cards */}
        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.5rem' }}>
          {team.map((m) => (
            <div
              key={m.name}
              style={{
                padding: '1.6rem',
                background: m.bg,
                border: `1px solid ${m.border}`,
                borderRadius: 'var(--radius-lg)',
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 8,
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    border: `1px solid ${m.border}`,
                    flexShrink: 0,
                  }}
                />
                {/* Fallback avatar */}
                <div
                  style={{
                    display: 'none',
                    width: 52,
                    height: 52,
                    borderRadius: 8,
                    background: m.bg,
                    border: `1px solid ${m.border}`,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: m.accent === 'var(--cyan)' ? 'var(--cyan)' : 'var(--text-2)' }}>
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-1)', lineHeight: 1.2 }}>
                    {m.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: m.accent, letterSpacing: '0.08em', marginTop: 3 }}>
                    {m.title}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: m.border, marginBottom: '0.9rem' }} />

              {/* Highlights */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.9rem' }}>
                {m.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.04em',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 999,
                      background: m.bg,
                      border: `1px solid ${m.border}`,
                      color: m.accent === 'var(--cyan)' ? 'var(--cyan)' : 'var(--text-3)',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="t-body-sm">{m.bio}</p>
            </div>
          ))}
        </motion.div>

        {/* Pipeline */}
        <motion.div variants={i}>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.9rem' }} />
          <span className="eyebrow-muted" style={{ display: 'block', marginBottom: '0.6rem' }}>
            Active Conversations
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
            {pipeline.map((name) => (
              <span key={name} className="pill pill-cyan">{name}</span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-2)' }}>
            Sean Weiss, CEO
          </p>
          <a
            href="mailto:sean@blockdrive.co"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}
          >
            <Mail size={12} />
            sean@blockdrive.co
          </a>
          <a
            href="https://app.blockdrive.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}
          >
            <Globe size={12} />
            app.blockdrive.co
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}
