import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import ThesisSlide from '@/components/slides/ThesisSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import MvpSlide from '@/components/slides/MvpSlide';
import MultiChainAuthSlide from '@/components/slides/MultiChainAuthSlide';
import PositioningSlide from '@/components/slides/PositioningSlide';
import CompetitionSlide from '@/components/slides/CompetitionSlide';
import MarketSlide from '@/components/slides/MarketSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import AskSlide from '@/components/slides/AskSlide';

const SLIDES = [
  { component: <TitleSlide key="title" />,         label: 'BlockDrive' },
  { component: <ProblemSlide key="problem" />,     label: 'Problem' },
  { component: <ThesisSlide key="whynow" />,       label: 'Why Now' },
  { component: <SolutionSlide key="solution" />,   label: 'Solution' },
  { component: <HowItWorksSlide key="how" />,      label: 'How It Works' },
  { component: <MvpSlide key="mvp" />,             label: 'Product' },
  { component: <MultiChainAuthSlide key="auth" />, label: 'Authentication' },
  { component: <PositioningSlide key="pos" />,     label: 'Positioning' },
  { component: <CompetitionSlide key="comp" />,    label: 'Competition' },
  { component: <MarketSlide key="market" />,       label: 'Market' },
  { component: <TeamSlide key="team" />,           label: 'Team' },
  { component: <AskSlide key="ask" />,             label: 'The Ask' },
];

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (d: number) => ({ x: d < 0 ? 80 : -80, opacity: 0 }),
};

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = SLIDES.length;

  const go = useCallback((index: number) => {
    if (index < 0 || index >= total) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current, total]);

  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    let sx = 0;
    const ts = (e: TouchEvent) => { sx = e.changedTouches[0].screenX; };
    const te = (e: TouchEvent) => {
      const d = sx - e.changedTouches[0].screenX;
      if (Math.abs(d) > 50) d > 0 ? next() : prev();
    };
    window.addEventListener('touchstart', ts);
    window.addEventListener('touchend', te);
    return () => { window.removeEventListener('touchstart', ts); window.removeEventListener('touchend', te); };
  }, [next, prev]);

  const progress = ((current + 1) / total) * 100;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'var(--bg)', position: 'relative' }}>
      <div className="dot-grid" />
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
          style={{ width: '100%', height: '100%', overflowY: 'auto' }}
        >
          {SLIDES[current].component}
        </motion.div>
      </AnimatePresence>

      <button className={`nav-arrow nav-arrow-left ${current === 0 ? 'disabled' : ''}`} onClick={prev}>
        <ChevronLeft size={16} />
      </button>
      <button className={`nav-arrow nav-arrow-right ${current === total - 1 ? 'disabled' : ''}`} onClick={next}>
        <ChevronRight size={16} />
      </button>

      <div className="dot-nav">
        {SLIDES.map((_, i) => (
          <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => go(i)} />
        ))}
      </div>

      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
}
