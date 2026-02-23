import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import ThesisSlide from '@/components/slides/ThesisSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import MvpSlide from '@/components/slides/MvpSlide';
import StrategySlide from '@/components/slides/StrategySlide';
import MultiChainAuthSlide from '@/components/slides/MultiChainAuthSlide';
import PositioningSlide from '@/components/slides/PositioningSlide';
import CompetitionSlide from '@/components/slides/CompetitionSlide';
import MarketSlide from '@/components/slides/MarketSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import AskSlide from '@/components/slides/AskSlide';

const TOTAL_SLIDES = 13;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
};

const slides = [
  { component: <TitleSlide key="title" />,         label: 'BlockDrive' },
  { component: <ProblemSlide key="problem" />,     label: 'Problem' },
  { component: <SolutionSlide key="solution" />,   label: 'The Solution' },
  { component: <ThesisSlide key="thesis" />,       label: 'The Shift' },
  { component: <HowItWorksSlide key="how" />,      label: 'The Second Lock' },
  { component: <MvpSlide key="mvp" />,             label: 'Product' },
  { component: <StrategySlide key="strategy" />,   label: 'Strategy' },
  { component: <MultiChainAuthSlide key="auth" />, label: 'Authentication' },
  { component: <PositioningSlide key="pos" />,     label: 'Why We Win' },
  { component: <CompetitionSlide key="comp" />,    label: 'Competition' },
  { component: <MarketSlide key="market" />,       label: 'Market' },
  { component: <TeamSlide key="team" />,           label: 'Team' },
  { component: <AskSlide key="ask" />,             label: 'The Ask' },
];

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) { setDirection(1); setCurrentSlide(p => p + 1); }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) { setDirection(-1); setCurrentSlide(p => p - 1); }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartX = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => { window.removeEventListener('touchstart', handleTouchStart); window.removeEventListener('touchend', handleTouchEnd); };
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#08080f]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="w-full h-full"
        >
          {slides[currentSlide].component}
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            style={{
              height: 6, borderRadius: 999,
              width: idx === currentSlide ? 28 : 6,
              background: idx === currentSlide ? 'var(--cyan)' : 'rgba(255,255,255,0.15)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          padding: 12, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'transparent', color: 'rgba(255,255,255,0.3)',
          opacity: currentSlide === 0 ? 0 : 1, transition: 'opacity 0.2s',
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          padding: 12, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'transparent', color: 'rgba(255,255,255,0.3)',
          opacity: currentSlide === TOTAL_SLIDES - 1 ? 0 : 1, transition: 'opacity 0.2s',
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide counter */}
      <div style={{
        position: 'absolute', bottom: 24, right: 24,
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em',
      }}>
        {currentSlide + 1} / {TOTAL_SLIDES}
      </div>
    </div>
  );
}
