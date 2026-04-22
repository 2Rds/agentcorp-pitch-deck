import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TitleSlide from '@/components/slides/TitleSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import HookSlide from '@/components/slides/HookSlide';
import HowItWorksSlide from '@/components/slides/HowItWorksSlide';
import BusinessModelSlide from '@/components/slides/BusinessModelSlide';
import MarketSlide from '@/components/slides/MarketSlide';
import GTMSlide from '@/components/slides/GTMSlide';
import CapitalEfficiencySlide from '@/components/slides/CapitalEfficiencySlide';
import TractionSlide from '@/components/slides/TractionSlide';
import CompetitionSlide from '@/components/slides/CompetitionSlide';
import TeamSlide from '@/components/slides/TeamSlide';
import ThesisSlide from '@/components/slides/ThesisSlide';
import AskSlide from '@/components/slides/AskSlide';

const TOTAL_SLIDES = 14;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
};

// Slide order optimized for pre-seed: founder + timing front-loaded so the
// investor is bought into the person and the moment before they see the
// product/economics. GTM slides between Market and Competition to surface
// capital efficiency ($183/mo all-in) — a pre-seed story investors look for.
// Order: Title → Problem → Why Now → Founder-Market Fit → Solution →
// How It Works → Asymmetry → Business Model → Market → GTM → Competition →
// Traction → Ask.
const slides = [
  { component: <TitleSlide key="title" />,             label: 'AgentCorp' },
  { component: <ProblemSlide key="problem" />,          label: 'Problem' },
  { component: <ThesisSlide key="thesis" />,            label: 'Why Now' },
  { component: <TeamSlide key="team" />,                label: 'Founder-Market Fit' },
  { component: <SolutionSlide key="solution" />,        label: 'Solution' },
  { component: <HowItWorksSlide key="how" />,           label: 'How It Works' },
  { component: <HookSlide key="hook" />,                label: 'The Asymmetry' },
  { component: <BusinessModelSlide key="model" />,      label: 'Business Model' },
  { component: <MarketSlide key="market" />,            label: 'Market' },
  { component: <GTMSlide key="gtm" />,                  label: 'Go-to-Market' },
  { component: <CapitalEfficiencySlide key="capital" />, label: 'Capital Efficiency' },
  { component: <CompetitionSlide key="competition" />,  label: 'Competition' },
  { component: <TractionSlide key="traction" />,        label: 'Traction' },
  { component: <AskSlide key="ask" />,                  label: 'The Ask' },
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
