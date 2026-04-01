import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.08 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const useOfFunds = [
  { pct: '40%', label: 'Product & Engineering', desc: 'Head of Eng + second developer + SOC 2 path' },
  { pct: '35%', label: 'Sales & GTM', desc: '2-3 operators + marketing + PLG funnel' },
  { pct: '15%', label: 'Operations', desc: 'C-Corp incorporation + compliance infrastructure' },
  { pct: '10%', label: 'Working Capital', desc: 'Buffer + seed-round negotiating leverage' },
];

const milestones = [
  '20-30 paying customers (5-8 with white-glove)',
  '$300K-$500K ARR (platform + overage)',
  'Seed round at $20-$30M post-money',
  'Net revenue retention >120%',
];

export default function AskSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
          The Ask
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.4rem' }}>
          $1M to launch the go-to-market.{' '}
          <span className="c-cyan">The product is already built.</span>
        </motion.h2>

        <motion.p variants={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-4)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
          PRE-SEED · $1M SAFE · $10M POST-MONEY CAP
        </motion.p>

        {/* Deal stats */}
        <motion.div variants={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {[
            { val: '$1M', label: 'Pre-Seed SAFE', color: 'var(--cyan)' },
            { val: '$10M', label: 'Post-Money Cap', color: 'var(--gold)' },
            { val: '10%', label: 'Investor Ownership', color: 'var(--text-1)' },
          ].map((s, idx) => (
            <div key={idx} style={{
              flex: 1, padding: '0.85rem', textAlign: 'center',
              background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: s.color }}>{s.val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em', color: 'var(--text-4)', marginTop: '0.15rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Use of funds */}
        <motion.div variants={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', marginBottom: '1.25rem' }}>
          {useOfFunds.map((f, idx) => (
            <div key={idx} style={{
              padding: '0.75rem 0.85rem',
              background: 'var(--surface)', border: '1px solid var(--border-hi)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--cyan)', marginBottom: '0.2rem' }}>{f.pct}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.75rem', color: 'var(--text-1)', marginBottom: '0.15rem' }}>{f.label}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--text-4)', lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Path to seed */}
        <motion.div variants={i} style={{
          padding: '0.85rem 1.2rem',
          background: 'rgba(0,229,255,0.04)', border: '1px solid rgba(0,229,255,0.15)', borderRadius: 'var(--radius-lg)',
          marginBottom: '1.25rem',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.5rem' }}>Path to Seed</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-2)' }}>
                <span style={{ color: 'var(--cyan)', marginRight: '0.4rem' }}>→</span>{m}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={14} style={{ color: 'var(--text-4)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)' }}>sean@agentcorp.work</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Globe size={14} style={{ color: 'var(--text-4)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)' }}>agentcorp.work</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)' }}>@AgentCorpBot on Telegram</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
