import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const i = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } } };

const features = [
  { name: 'Paradigm',             blockdrive: 'Breach-pointless', dropbox: 'Prevention',  filecoin: 'Prevention', tresorit: 'Prevention' },
  { name: 'Complete Files Stored', blockdrive: 'Never',           dropbox: 'Yes',         filecoin: 'Yes',        tresorit: 'Yes' },
  { name: 'Breach = Data Loss',    blockdrive: false,              dropbox: true,          filecoin: true,         tresorit: true },
  { name: 'True Zero-Knowledge',   blockdrive: true,               dropbox: false,         filecoin: false,        tresorit: 'partial' },
  { name: 'Provable Deletion',     blockdrive: true,               dropbox: false,         filecoin: false,        tresorit: false },
  { name: 'Provider Immunity',     blockdrive: true,               dropbox: false,         filecoin: 'partial',    tresorit: false },
];

const renderValue = (value: boolean | string, isBD = false) => {
  if (typeof value === 'boolean') {
    return value
      ? <Check style={{ width: 18, height: 18, color: isBD ? 'var(--cyan)' : '#4ade80' }} />
      : <X style={{ width: 18, height: 18, color: 'rgba(239,68,68,0.5)' }} />;
  }
  if (value === 'partial') return <Minus style={{ width: 18, height: 18, color: 'rgba(250,204,21,0.5)' }} />;
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: isBD ? 'var(--cyan)' : 'var(--text-3)', fontWeight: isBD ? 600 : 400 }}>{value}</span>;
};

export default function CompetitionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-bl" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Competitive Landscape
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 860, marginBottom: '0.75rem' }}>
          They're playing the old game.
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 680, marginBottom: '1.75rem' }}>
          Every competitor stores complete files. When they get breached, data is exposed. We don't store complete files. When we get breached, attackers get{' '}
          <span className="c-cyan">cryptographic garbage.</span>
        </motion.p>

        <motion.div variants={i} style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: 560, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-hi)' }}>
                <th style={{ textAlign: 'left', padding: '0.6rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', textTransform: 'uppercase' }}>Feature</th>
                <th style={{ textAlign: 'center', padding: '0.6rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--cyan)', textTransform: 'uppercase', background: 'rgba(0,229,255,0.05)', borderRadius: '8px 8px 0 0' }}>BlockDrive</th>
                <th style={{ textAlign: 'center', padding: '0.6rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', textTransform: 'uppercase' }}>Dropbox / Box</th>
                <th style={{ textAlign: 'center', padding: '0.6rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', textTransform: 'uppercase' }}>Filecoin / StorJ</th>
                <th style={{ textAlign: 'center', padding: '0.6rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--text-4)', textTransform: 'uppercase' }}>Tresorit</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.65rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)' }}>{f.name}</td>
                  <td style={{ padding: '0.65rem 1rem', textAlign: 'center', background: 'rgba(0,229,255,0.03)' }}>{renderValue(f.blockdrive, true)}</td>
                  <td style={{ padding: '0.65rem 1rem', textAlign: 'center', opacity: 0.6 }}>{renderValue(f.dropbox)}</td>
                  <td style={{ padding: '0.65rem 1rem', textAlign: 'center', opacity: 0.6 }}>{renderValue(f.filecoin)}</td>
                  <td style={{ padding: '0.65rem 1rem', textAlign: 'center', opacity: 0.6 }}>{renderValue(f.tresorit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </motion.div>
    </div>
  );
}
