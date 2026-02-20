import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const features = [
  { name: 'Paradigm',              blockdrive: 'Breach-pointless', dropbox: 'Prevention',  filecoin: 'Prevention',  tresorit: 'Prevention'  },
  { name: 'Complete Files Stored', blockdrive: 'Never',            dropbox: 'Yes',          filecoin: 'Yes',          tresorit: 'Yes'          },
  { name: 'Breach = Data Loss',    blockdrive: false,               dropbox: true,           filecoin: true,           tresorit: true           },
  { name: 'True Zero-Knowledge',   blockdrive: true,                dropbox: false,          filecoin: false,          tresorit: 'partial'      },
  { name: 'Provable Deletion',     blockdrive: true,                dropbox: false,          filecoin: false,          tresorit: false          },
  { name: 'Provider Immunity',     blockdrive: true,                dropbox: false,          filecoin: false,          tresorit: false          },
];

const renderVal = (val: boolean | string, bd = false) => {
  if (val === true)      return <Check style={{ width: 16, height: 16, color: bd ? 'var(--cyan)' : 'rgba(100,200,100,0.7)' }} />;
  if (val === false)     return <X     style={{ width: 16, height: 16, color: 'rgba(255,80,80,0.45)' }} />;
  if (val === 'partial') return <Minus style={{ width: 16, height: 16, color: 'rgba(232,201,106,0.5)' }} />;
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: bd ? 'var(--cyan)' : 'var(--text-3)', fontWeight: bd ? 600 : 400 }}>{val}</span>;
};

export default function CompetitionSlide() {
  return (
    <div className="slide-shell">
      <div className="glow-tr" />
      <motion.div className="slide-inner" variants={c} initial="hidden" animate="visible">

        <motion.span variants={i} className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Competitive Landscape
        </motion.span>

        <motion.h2 variants={i} className="t-title c-white" style={{ maxWidth: 680, marginBottom: '0.85rem' }}>
          They're Playing the Old Game
        </motion.h2>

        <motion.p variants={i} className="t-body" style={{ maxWidth: 580, marginBottom: '1.5rem' }}>
          Every competitor is still trying to keep attackers out. We made breaches irrelevant. That's not a feature difference — it's a paradigm difference.
        </motion.p>

        <motion.div variants={i} style={{ marginBottom: '1.5rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: 580, borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0.6rem 0.9rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-4)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>
                  Feature
                </th>
                {['BlockDrive', 'Dropbox / Box', 'Filecoin / StorJ', 'Tresorit'].map((h, idx) => (
                  <th key={h} style={{
                    textAlign: 'center', padding: '0.6rem 0.9rem',
                    fontFamily: idx === 0 ? 'var(--font-display)' : 'var(--font-mono)',
                    fontSize: idx === 0 ? '0.85rem' : '0.6rem',
                    fontWeight: idx === 0 ? 700 : 500,
                    color: idx === 0 ? 'var(--cyan)' : 'var(--text-4)',
                    textTransform: idx === 0 ? 'none' : 'uppercase',
                    letterSpacing: idx === 0 ? 0 : '0.06em',
                    background: idx === 0 ? 'rgba(0,229,255,0.06)' : 'transparent',
                    borderRadius: idx === 0 ? '6px 6px 0 0' : 0,
                    borderBottom: '1px solid var(--border)',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, ridx) => (
                <tr key={row.name} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.65rem 0.9rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-2)', fontWeight: 500 }}>
                    {row.name}
                  </td>
                  {[
                    { val: row.blockdrive, bd: true },
                    { val: row.dropbox, bd: false },
                    { val: row.filecoin, bd: false },
                    { val: row.tresorit, bd: false },
                  ].map((cell, cidx) => (
                    <td key={cidx} style={{
                      padding: '0.65rem 0.9rem', textAlign: 'center',
                      background: cidx === 0 ? 'rgba(0,229,255,0.04)' : 'transparent',
                      opacity: cidx === 0 ? 1 : 0.65,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {renderVal(cell.val, cell.bd)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={i} className="bar-card" style={{ maxWidth: 680 }}>
          <p className="t-body">
            Every competitor stores complete files somewhere. When they get breached, data is exposed.{' '}
            <span className="c-white" style={{ fontWeight: 600 }}>We don't store complete files. When we get breached, attackers get cryptographic garbage.</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
