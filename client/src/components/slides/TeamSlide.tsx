import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const pipeline = ['Holland & Knight', 'Mercury', 'Bitwise', "Sotheby's", 'BlackRock Aladdin', 'Gunster Yoakley'];

const team = [
  {
    photo: '/images/sean-weiss.jpg',
    name: 'Sean Weiss',
    title: 'Co-Founder & CEO',
    bio: "Sean spent the first decade of his career earning the trust of sophisticated high net worth investors and business owners on the most sensitive subjects possible relating to their financial lives — at JPMorgan, Merrill Lynch, AXA, and Prudential. That network is now our pipeline. These aren't cold leads. They're relationships built over a career of earning trust with people who don't give it easily.",
    bg: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.09)',
    accent: 'rgba(255,255,255,0.5)',
    accentVar: 'var(--text-2)',
  },
  {
    photo: '/images/roberto-cinque.jpg',
    name: 'Roberto Cinque',
    title: 'Head of Engineering',
    bio: "Roberto is the architect of Programmed Incompleteness — the core technology that makes BlockDrive breach-proof by design. A full-stack blockchain engineer with deep expertise in Web3 infrastructure, Solidity, DeFi systems, and cybersecurity, he has shipped exchange platforms, DeFi protocols, and NFT systems across multiple production environments.",
    bg: 'rgba(0,229,255,0.04)',
    border: 'rgba(0,229,255,0.18)',
    accent: 'var(--cyan)',
    accentVar: 'var(--cyan)',
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
          The operator who built the network. The engineer who built the product.{' '}
          <span style={{ color: 'var(--cyan)' }}>Both all-in.</span>
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 600, marginBottom: '1.75rem' }}>
          Two roles, zero redundancy. Sean converts institutional relationships into closed deals. Roberto ships the technology those deals are built on.
        </motion.p>

        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.5rem' }}>
          {team.map((m) => (
            <div key={m.name} style={{ padding: '1.6rem', background: m.bg, border: `1px solid ${m.border}`, borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const fb = el.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = 'flex';
                  }}
                  style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'cover', objectPosition: 'top center', border: `1px solid ${m.border}`, flexShrink: 0 }}
                />
                <div style={{ display: 'none', width: 52, height: 52, borderRadius: 8, background: m.bg, border: `1px solid ${m.border}`, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: m.accentVar }}>
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-1)', lineHeight: 1.2 }}>{m.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: m.accentVar, letterSpacing: '0.08em', marginTop: 3 }}>{m.title}</p>
                </div>
              </div>
              <div style={{ height: 1, background: m.border, marginBottom: '0.9rem' }} />
              <p className="t-body-sm">{m.bio}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i}>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.9rem' }} />
          <span className="eyebrow-muted" style={{ display: 'block', marginBottom: '0.6rem' }}>Active Conversations</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
            {pipeline.map((name) => (
              <span key={name} className="pill pill-cyan">{name}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-2)' }}>Sean Weiss, CEO</p>
          <a href="mailto:sean@blockdrive.co" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}>
            <Mail size={12} />sean@blockdrive.co
          </a>
          <a href="https://app.blockdrive.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.04em', textDecoration: 'none' }}>
            <Globe size={12} />app.blockdrive.co
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
}
