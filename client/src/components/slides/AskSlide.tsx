import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } };

const funds = [
  { label: 'Engineering', pct: 40, color: 'var(--cyan)' },
  { label: 'Sales & Marketing', pct: 25, color: 'var(--gold)' },
  { label: 'Ops & Buffer', pct: 20, color: 'var(--text-3)' },
  { label: 'Product', pct: 15, color: 'rgba(0,229,255,0.4)' },
];

const milestones = [
  { year: 'Y1', title: 'Crypto Beachhead', target: '$1M ARR from crypto companies + law firms', color: 'var(--cyan)' },
  { year: 'Y2', title: 'Vertical Expansion', target: 'Healthcare, Legal, Family Offices', color: 'var(--gold)' },
  { year: 'Y3', title: 'Series A', target: 'Enterprise & mid-market at scale', color: 'var(--cyan)' },
];

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <div className="glow-bl" />
      <motion.div className="slide-inner" style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>The Ask</motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ marginBottom: '0.4rem' }}>
          Raising <span className="c-cyan">$2M</span>
        </motion.h2>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
          Seed Round · $12M Post-Money SAFE
        </motion.p>

        <motion.div variants={i} className="cols-2" style={{ width: '100%', marginBottom: '1.5rem' }}>

          {/* Use of funds */}
          <div style={{ padding: '1.3rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Use of Funds</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {funds.map((f) => (
                <div key={f.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)' }}>{f.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: f.color }}>{f.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: 'var(--border-hi)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: `${f.pct}%` }} transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }} style={{ height: '100%', background: f.color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-4)', marginTop: '0.75rem', letterSpacing: '0.04em' }}>~24 months runway at planned burn</p>
          </div>

          {/* Milestones */}
          <div style={{ padding: '1.3rem', background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Milestones</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: m.color, background: `${m.color}18`, border: `1px solid ${m.color}33`, borderRadius: 4, padding: '0.2rem 0.45rem', flexShrink: 0, marginTop: 2 }}>{m.year}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{m.title}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)', lineHeight: 1.4 }}>{m.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.blockquote
          variants={i}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--text-1)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}
        >
          "Hack us all you want —<br />
          <span className="c-cyan">you get nothing."</span>
        </motion.blockquote>

        {/* Contact */}
        <motion.div variants={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-1)' }}>Sean Weiss, CEO</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="mailto:sean@blockdrive.co" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '0.02em' }}>
              <Mail size={13} /> sean@blockdrive.co
            </a>
            <a href="https://app.blockdrive.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '0.02em' }}>
              <Globe size={13} /> app.blockdrive.co
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
