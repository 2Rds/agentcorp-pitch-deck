import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const funds = [
  { category: 'Engineering',      pct: 40, color: 'var(--cyan)' },
  { category: 'Sales & Marketing', pct: 25, color: 'rgba(120,160,255,1)' },
  { category: 'Ops & Buffer',      pct: 20, color: 'var(--text-4)' },
  { category: 'Product',           pct: 15, color: 'var(--gold)' },
];

const milestones = [
  { tag: 'Y1', title: 'Crypto Beachhead',      detail: '$1M ARR — crypto / Web3 companies + crypto law firms',     color: 'var(--cyan)',            bg: 'rgba(0,229,255,0.08)',      border: 'rgba(0,229,255,0.18)'       },
  { tag: 'Y2', title: 'Vertical Expansion',    detail: 'Healthcare, legal, family offices — cross-vertical product-led growth', color: 'rgba(120,160,255,1)', bg: 'rgba(120,160,255,0.06)', border: 'rgba(120,160,255,0.16)'     },
  { tag: 'Y3', title: 'Series A',              detail: 'Enterprise + mid-market — $10M+ ARR target, institutional rounds', color: 'var(--gold)',          bg: 'rgba(232,201,106,0.06)',  border: 'rgba(232,201,106,0.16)'     },
];

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center' }}>
          The Ask
        </motion.span>

        <motion.div variants={i} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 className="t-title c-white" style={{ marginBottom: '0.4rem' }}>
            Raising <span className="c-cyan">$2M</span>
          </h2>
          <p className="t-body">Seed Round · $12M Post-Money SAFE</p>
        </motion.div>

        <motion.div variants={i} className="cols-2" style={{ marginBottom: '1.25rem' }}>

          {/* Use of funds */}
          <div style={{ padding: '1.4rem 1.4rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <p className="eyebrow-muted" style={{ marginBottom: '1rem' }}>Use of Funds</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {funds.map((f) => (
                <div key={f.category}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)' }}>{f.category}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', color: 'var(--text-1)', fontWeight: 700 }}>{f.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${f.pct}%` }}
                      transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                      style={{ height: '100%', background: f.color, borderRadius: 2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', marginTop: '0.75rem', letterSpacing: '0.04em' }}>~24 months runway at planned burn</p>
          </div>

          {/* Milestones */}
          <div style={{ padding: '1.4rem 1.4rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)' }}>
            <p className="eyebrow-muted" style={{ marginBottom: '1rem' }}>Milestones</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {milestones.map((m) => (
                <div key={m.tag} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{
                    padding: '0.2rem 0.5rem',
                    background: m.bg, border: `1px solid ${m.border}`,
                    borderRadius: 4, flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.tag}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: '0.2rem' }}>{m.title}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.775rem', color: 'var(--text-3)', lineHeight: 1.45 }}>{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Closing line */}
        <motion.div variants={i} style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <motion.p
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.2,
            }}
          >
            "Hack us all you want —<br />
            <span style={{ color: 'var(--cyan)' }}>you get nothing."</span>
          </motion.p>
        </motion.div>

        {/* Contact */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-1)' }}>Sean Weiss, CEO</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="mailto:sean@blockdrive.co" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-3)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
              <Mail style={{ width: 13, height: 13 }} />
              sean@blockdrive.co
            </a>
            <a href="https://app.blockdrive.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-3)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
              <Globe style={{ width: 13, height: 13 }} />
              app.blockdrive.co
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
