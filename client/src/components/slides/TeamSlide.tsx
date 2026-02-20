import { motion } from 'framer-motion';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const pipeline = ['Holland & Knight', 'Mercury', 'Bitwise', "Sotheby's", 'BlackRock Aladdin', 'Gunster Yoakley'];

const team = [
  {
    photo: '/images/sean-weiss.jpg',
    name: 'Sean Weiss',
    title: 'Co-Founder & CEO',
    bio: "Sean spent the first decade of his career earning the trust of sophisticated high net worth investors and business owners on the most sensitive subjects possible relating to their financial lives — at JPMorgan, Merrill Lynch, AXA, and Prudential. That network is now our pipeline. These aren't cold leads. They're relationships built over a career of earning trust with people who don't give it easily.",
  },
  {
    photo: '/images/roberto-cinque.jpg',
    name: 'Roberto Cinque',
    title: 'Head of Engineering',
    bio: "Roberto is the architect of Programmed Incompleteness — the core technology that makes BlockDrive breach-proof by design. A full-stack blockchain engineer with deep expertise in Web3 infrastructure, Solidity, DeFi systems, and cybersecurity, he has shipped exchange platforms, DeFi protocols, and NFT systems across multiple production environments.",
  },
];

export default function TeamSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />

      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.div variants={i}>
          <span className="eyebrow mb-5" style={{ display: 'block' }}>The Team</span>
        </motion.div>

        <motion.h2 className="t-title c-white mb-10" variants={i}>
          The operator who built the network.<br />
          The engineer who built the product.{' '}
          <span className="c-cyan">Both all-in.</span>
        </motion.h2>

        <motion.div className="cols-2 mb-10" variants={i}>
          {team.map((m) => (
            <div key={m.name} style={{
              padding: '1.75rem',
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div className="row mb-5">
                <img
                  src={m.photo}
                  alt={m.name}
                  style={{
                    width: 56, height: 56, borderRadius: 10,
                    objectFit: 'cover', objectPosition: 'top',
                    border: '1px solid var(--border-hi)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-1)', lineHeight: 1.2 }}>{m.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '0.08em', marginTop: 4 }}>{m.title}</p>
                </div>
              </div>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
              <p className="t-body-sm">{m.bio}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={i}>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: '1rem' }} />
          <span className="eyebrow-muted mb-4" style={{ display: 'block' }}>Active Conversations with Major Enterprise Names</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {pipeline.map((name) => (
              <span key={name} className="pill pill-cyan">{name}</span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
