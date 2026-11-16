'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { EASING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';
import Icon from '@/components/Icon';
import {
  HERO_SCENES,
  HERO_SCENE_CAPTION,
  WatchSceneData,
  AskSceneData,
  LearnSceneData,
} from '@/content/heroScenes';

const SCENE_DURATION_MS = 7000;

// Indices in the 130-tile grid (13 cols x 10 rows) that highlight
const HIGHLIGHT_TILES = [28, 54, 82, 108];

export function HeroLiveDemo() {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const [inView, setInView] = useState<boolean>(true);

  // Allow URL query param to select a specific scene for preview/testing (?scene=watch|ask|learn)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const sceneParam = params.get('scene');
    if (sceneParam === 'watch') {
      setActiveTab(0);
      setUserInteracted(true);
    } else if (sceneParam === 'ask') {
      setActiveTab(1);
      setUserInteracted(true);
    } else if (sceneParam === 'learn') {
      setActiveTab(2);
      setUserInteracted(true);
    }
  }, []);

  // IntersectionObserver to detect when component is in viewport
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Permanent stop on interaction
  const handleSelectTab = useCallback((index: number) => {
    setUserInteracted(true);
    setActiveTab(index);
  }, []);

  const handleContainerFocus = useCallback(() => {
    setUserInteracted(true);
  }, []);

  // Keyboard navigation for tablist (WAI-ARIA)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % HERO_SCENES.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + HERO_SCENES.length) % HERO_SCENES.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = HERO_SCENES.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    handleSelectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  // Main 7-second Auto-Play Timer: single timeout per scene
  useEffect(() => {
    // If reduced motion or user interacted, stay on current scene
    if (!motionOK || userInteracted) return;

    // Pause when off-screen or tab hidden
    if (!isVisible || !inView) return;

    const timer = setTimeout(() => {
      setActiveTab((cur) => (cur + 1) % HERO_SCENES.length);
    }, SCENE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [activeTab, motionOK, userInteracted, isVisible, inView]);

  const currentScene = HERO_SCENES[activeTab];
  const isReducedMotion = !motionOK || userInteracted;
  const isPaused = !isVisible || !inView;

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* 4 Outer Viewfinder Corner Markers (matching existing design) */}
      <div className="absolute -top-3 -left-3 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-l-2 border-primary pointer-events-none z-20" />
      <div className="absolute -top-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-r-2 border-primary pointer-events-none z-20" />
      <div className="absolute -bottom-8 -left-3 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-l-2 border-primary pointer-events-none z-20" />
      <div className="absolute -bottom-8 -right-3 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-r-2 border-primary pointer-events-none z-20" />

      {/* Screen Reader Only Descriptions of the 3 scenes */}
      <div className="sr-only">
        <p>{HERO_SCENES[0].srDescription}</p>
        <p>{HERO_SCENES[1].srDescription}</p>
        <p>{HERO_SCENES[2].srDescription}</p>
      </div>

      {/* Main Structural Card Container (Fixed min-height 420px desktop, 380px mobile for CLS 0) */}
      <div
        ref={containerRef}
        onFocus={handleContainerFocus}
        className="relative w-full min-h-[380px] sm:min-h-[420px] bg-paper-sunken border border-line p-2.5 sm:p-4 flex flex-col justify-between overflow-hidden shadow-sm"
      >
        {/* =========================================================================
            TOP ROW: Tabs (role="tablist") + LIVE EXAMPLE Badge
            ========================================================================= */}
        <div className="flex items-center justify-between gap-2 border-b border-line pb-2 mb-2 sm:mb-3">
          {/* Tabs Container */}
          <div
            role="tablist"
            aria-label="Interactive Hero Demonstrations"
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none"
          >
            {HERO_SCENES.map((scene, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={scene.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`hero-tab-${scene.id}`}
                  aria-selected={isActive}
                  aria-controls={`hero-panel-${scene.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleSelectTab(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`relative px-2.5 sm:px-3 py-1.5 text-left font-mono text-[13px] sm:text-sm font-semibold rounded-sm transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary ${
                    isActive
                      ? 'text-primary bg-paper-raised'
                      : 'text-ink-muted hover:text-primary hover:bg-paper-raised/60'
                  }`}
                >
                  <span>{scene.tabTitle}</span>

                  {/* Thin orange progress bar under the active tab */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary/30 overflow-hidden">
                      <span
                        key={activeTab}
                        className="block h-full w-full bg-secondary origin-left"
                        style={{
                          transform: isReducedMotion ? 'scaleX(1)' : undefined,
                          animation: !isReducedMotion && !isPaused
                            ? `heroProgress ${SCENE_DURATION_MS}ms linear forwards`
                            : undefined,
                          animationPlayState: isPaused ? 'paused' : 'running',
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Small Pulsing Live Dot + LIVE EXAMPLE Label */}
          <div className="flex items-center gap-1.5 shrink-0 pl-1.5">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-status-success animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-status-success" />
            </span>
            <span className="hidden xs:inline font-mono text-[11px] sm:text-[13px] font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
              LIVE EXAMPLE
            </span>
          </div>
        </div>

        {/* =========================================================================
            CENTER: Active Scene Display Panel
            ========================================================================= */}
        <div
          role="tabpanel"
          id={`hero-panel-${currentScene.id}`}
          aria-labelledby={`hero-tab-${currentScene.id}`}
          className="relative w-full flex-1 flex flex-col justify-between bg-paper-raised border border-line/70 p-3 sm:p-4 overflow-hidden rounded-sm min-h-[280px] sm:min-h-[310px]"
        >
          {/* Simulated CCTV Background Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none bg-[length:100%_4px]" />

          <AnimatePresence mode="wait">
            {currentScene.id === 'watch' && (
              <WatchScene
                key="watch"
                data={currentScene as WatchSceneData}
                isReducedMotion={isReducedMotion}
                isPaused={isPaused}
              />
            )}
            {currentScene.id === 'ask' && (
              <AskScene
                key="ask"
                data={currentScene as AskSceneData}
                isReducedMotion={isReducedMotion}
                isPaused={isPaused}
              />
            )}
            {currentScene.id === 'learn' && (
              <LearnScene
                key="learn"
                data={currentScene as LearnSceneData}
                isReducedMotion={isReducedMotion}
                isPaused={isPaused}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM ROW: Caption
          ========================================================================= */}
      <p className="mt-2 text-[13px] text-ink-muted text-center font-mono">
        {HERO_SCENE_CAPTION}
      </p>
    </div>
  );
}

// =============================================================================
// SCENE 1: Watch (VisionFacts.ai)
// 13x10 grid of 130 camera tiles + alert feed + final status line
// =============================================================================
function WatchScene({
  data,
  isReducedMotion,
  isPaused,
}: {
  data: WatchSceneData;
  isReducedMotion: boolean;
  isPaused: boolean;
}) {
  const [step, setStep] = useState<number>(isReducedMotion ? 6 : 0);
  const [flickerIndex, setFlickerIndex] = useState<number>(-1);

  useEffect(() => {
    if (isReducedMotion) {
      setStep(6);
      return;
    }
    if (isPaused) return;

    const t1 = setTimeout(() => setStep((s) => Math.max(s, 1)), 400);
    const t2 = setTimeout(() => setStep((s) => Math.max(s, 2)), 1600);
    const t3 = setTimeout(() => setStep((s) => Math.max(s, 3)), 2800);
    const t4 = setTimeout(() => setStep((s) => Math.max(s, 4)), 4000);
    const t5 = setTimeout(() => setStep((s) => Math.max(s, 5)), 5200);
    const t6 = setTimeout(() => setStep((s) => Math.max(s, 6)), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [isReducedMotion, isPaused]);

  useEffect(() => {
    if (isReducedMotion || isPaused) return;
    const interval = setInterval(() => {
      setFlickerIndex(Math.floor(Math.random() * 130));
    }, 250);
    return () => clearInterval(interval);
  }, [isReducedMotion, isPaused]);

  // Timed progression of alerts (~1.2s apart)
  const showTile1 = isReducedMotion || step >= 1;
  const showTile2 = isReducedMotion || step >= 2;
  const showAlert1 = isReducedMotion || step >= 2;
  const showTile3 = isReducedMotion || step >= 3;
  const showAlert2 = isReducedMotion || step >= 3;
  const showTile4 = isReducedMotion || step >= 4;
  const showAlert3 = isReducedMotion || step >= 4;
  const showAlert4 = isReducedMotion || step >= 5;
  const showFinal = isReducedMotion || step >= 6;

  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASING.out }}
      className="relative z-10 w-full h-full flex flex-col justify-between gap-3"
    >
      {/* Big Label at Top */}
      <div className="flex items-center justify-between border-b border-line/60 pb-2">
        <h3 className="font-headline-sm sm:font-headline-md font-bold text-primary tracking-tight text-sm sm:text-base">
          {data.bigLabel}
        </h3>
      </div>

      {/* Main Content: Split 13x10 Grid + Alert Feed */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center flex-1">
        {/* Left: 13 x 10 Grid (130 camera tiles) */}
        <div className="sm:col-span-6 bg-paper-sunken border border-line/80 p-2 rounded-sm shadow-xs">
          <div
            className="grid gap-[2px] w-full"
            style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}
          >
            {Array.from({ length: 130 }).map((_, idx) => {
              const isH1 = idx === HIGHLIGHT_TILES[0] && showTile1;
              const isH2 = idx === HIGHLIGHT_TILES[1] && showTile2;
              const isH3 = idx === HIGHLIGHT_TILES[2] && showTile3;
              const isH4 = idx === HIGHLIGHT_TILES[3] && showTile4;
              const isHighlighted = isH1 || isH2 || isH3 || isH4;
              const isFlickering = idx === flickerIndex && !isHighlighted;

              return (
                <div
                  key={idx}
                  className={`aspect-[4/3] rounded-[1px] transition-colors duration-200 ${
                    isHighlighted
                      ? 'border border-secondary bg-secondary/40 shadow-[0_0_4px_rgba(253,89,30,0.6)]'
                      : isFlickering
                      ? 'bg-primary/25'
                      : 'bg-primary/10'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Alert Feed sliding in */}
        <div className="sm:col-span-6 flex flex-col gap-1.5 font-mono text-[11px] sm:text-xs">
          {showAlert1 && (
            <m.div
              initial={isReducedMotion ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 px-2 py-1 bg-signal-orange-tint/50 border border-secondary/40 text-primary rounded-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 animate-pulse" />
              <span>{data.alerts[0]}</span>
            </m.div>
          )}

          {showAlert2 && (
            <m.div
              initial={isReducedMotion ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 px-2 py-1 bg-signal-orange-tint/50 border border-secondary/40 text-primary rounded-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 animate-pulse" />
              <span>{data.alerts[1]}</span>
            </m.div>
          )}

          {showAlert3 && (
            <m.div
              initial={isReducedMotion ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 px-2 py-1 bg-signal-orange-tint/50 border border-secondary/40 text-primary rounded-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 animate-pulse" />
              <span>{data.alerts[2]}</span>
            </m.div>
          )}

          {showAlert4 && (
            <m.div
              initial={isReducedMotion ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 px-2 py-1 bg-signal-orange-tint/50 border border-secondary/40 text-primary rounded-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 animate-pulse" />
              <span>{data.alerts[3]}</span>
            </m.div>
          )}
        </div>
      </div>

      {/* Bottom: Final line with check icon */}
      <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs font-mono">
        {showFinal ? (
          <m.div
            initial={isReducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-status-success font-semibold"
          >
            <Icon name="check_circle" className="text-[16px]" />
            <span>{data.finalStatus}</span>
          </m.div>
        ) : (
          <div className="text-ink-muted text-[11px]">Monitoring 130 live feeds…</div>
        )}
      </div>
    </m.div>
  );
}

// =============================================================================
// SCENE 2: Ask (Analytics Agent)
// Typewriter query + steps with spinner/check + skeleton answer card with chip
// =============================================================================
function AskScene({
  data,
  isReducedMotion,
  isPaused,
}: {
  data: AskSceneData;
  isReducedMotion: boolean;
  isPaused: boolean;
}) {
  const [charCount, setCharCount] = useState<number>(isReducedMotion ? data.query.length : 0);
  const [step, setStep] = useState<number>(isReducedMotion ? 4 : 0);

  // Typewriter: ticks only until full length reached, then stops
  useEffect(() => {
    if (isReducedMotion) {
      setCharCount(data.query.length);
      return;
    }
    if (isPaused) return;

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= data.query.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [data.query.length, isReducedMotion, isPaused]);

  useEffect(() => {
    if (isReducedMotion) {
      setStep(4);
      return;
    }
    if (isPaused) return;

    const t1 = setTimeout(() => setStep((s) => Math.max(s, 1)), 2000);
    const t2 = setTimeout(() => setStep((s) => Math.max(s, 2)), 3100);
    const t3 = setTimeout(() => setStep((s) => Math.max(s, 3)), 4200);
    const t4 = setTimeout(() => setStep((s) => Math.max(s, 4)), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isReducedMotion, isPaused]);

  const queryText = data.query.slice(0, charCount);
  const typingFinished = charCount >= data.query.length;

  // Step timing
  const showStep1 = isReducedMotion || step >= 1;
  const checkStep1 = isReducedMotion || step >= 2;
  const showStep2 = isReducedMotion || step >= 2;
  const checkStep2 = isReducedMotion || step >= 3;
  const showStep3 = isReducedMotion || step >= 3;
  const checkStep3 = isReducedMotion || step >= 4;
  const showAnswerCard = isReducedMotion || step >= 4;

  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASING.out }}
      className="relative z-10 w-full h-full flex flex-col justify-between gap-2.5 sm:gap-3"
    >
      {/* Big Label at Top */}
      <div className="border-b border-line/60 pb-2">
        <h3 className="font-headline-sm sm:font-headline-md font-bold text-primary tracking-tight text-sm sm:text-base">
          {data.bigLabel}
        </h3>
      </div>

      {/* Query Chat Bubble with Typewriter effect */}
      <div className="bg-paper-sunken border border-line p-2.5 rounded-sm font-mono text-[11px] sm:text-xs text-primary leading-relaxed shadow-xs">
        <span className="font-bold text-secondary mr-1.5">Q:</span>
        <span>{queryText}</span>
        {!typingFinished && !isReducedMotion && (
          <span className="inline-block w-1.5 h-3 bg-secondary ml-0.5 animate-pulse" />
        )}
      </div>

      {/* Steps Execution Lines with spinner -> check */}
      <div className="flex flex-col gap-1.5 font-mono text-[11px] sm:text-xs">
        {showStep1 && (
          <div className="flex items-center gap-2">
            {checkStep1 ? (
              <Icon name="check" className="text-[15px] text-status-success font-bold" />
            ) : (
              <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <span className={checkStep1 ? 'text-primary' : 'text-ink-muted'}>
              {data.steps[0]}
            </span>
          </div>
        )}

        {showStep2 && (
          <div className="flex items-center gap-2">
            {checkStep2 ? (
              <Icon name="check" className="text-[15px] text-status-success font-bold" />
            ) : (
              <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <span className={checkStep2 ? 'text-primary' : 'text-ink-muted'}>
              {data.steps[1]}
            </span>
          </div>
        )}

        {showStep3 && (
          <div className="flex items-center gap-2">
            {checkStep3 ? (
              <Icon name="check" className="text-[15px] text-status-success font-bold" />
            ) : (
              <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <span className={checkStep3 ? 'text-primary' : 'text-ink-muted'}>
              {data.steps[2]}
            </span>
          </div>
        )}
      </div>

      {/* Answer Card with grey skeleton rows + placeholder + chip */}
      {showAnswerCard && (
        <m.div
          initial={isReducedMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-paper-sunken border border-line p-2.5 rounded-sm flex items-center justify-between gap-3 shadow-xs"
        >
          {/* Skeleton Rows (no fake data) */}
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full w-4/5" />
            <div className="h-2 bg-neutral-300/70 dark:bg-neutral-600/70 rounded-full w-full" />
            <div className="h-2 bg-neutral-300/50 dark:bg-neutral-600/50 rounded-full w-2/3" />
          </div>

          {/* Small Snapshot Thumbnail Placeholder */}
          <div className="w-10 h-10 bg-line/80 border border-line rounded-sm flex items-center justify-center shrink-0">
            <Icon name="monitoring" className="text-[18px] text-ink-muted" />
          </div>

          {/* Status Chip */}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-signal-orange-tint border border-secondary/40 text-secondary font-mono text-[10px] font-bold rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>{data.chip}</span>
          </div>
        </m.div>
      )}
    </m.div>
  );
}

// =============================================================================
// SCENE 3: Learn (Edubotix)
// Typewriter query + step lines + highlighted calculation + verified textbook source
// =============================================================================
function LearnScene({
  data,
  isReducedMotion,
  isPaused,
}: {
  data: LearnSceneData;
  isReducedMotion: boolean;
  isPaused: boolean;
}) {
  const [charCount, setCharCount] = useState<number>(isReducedMotion ? data.query.length : 0);
  const [step, setStep] = useState<number>(isReducedMotion ? 5 : 0);

  // Typewriter timing (approx 25ms per char, stops when done)
  useEffect(() => {
    if (isReducedMotion) {
      setCharCount(data.query.length);
      return;
    }
    if (isPaused) return;

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= data.query.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [data.query.length, isReducedMotion, isPaused]);

  useEffect(() => {
    if (isReducedMotion) {
      setStep(5);
      return;
    }
    if (isPaused) return;

    const t1 = setTimeout(() => setStep((s) => Math.max(s, 1)), 1400);
    const t2 = setTimeout(() => setStep((s) => Math.max(s, 2)), 2600);
    const t3 = setTimeout(() => setStep((s) => Math.max(s, 3)), 3800);
    const t4 = setTimeout(() => setStep((s) => Math.max(s, 4)), 4400);
    const t5 = setTimeout(() => setStep((s) => Math.max(s, 5)), 5400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [isReducedMotion, isPaused]);

  const queryText = data.query.slice(0, charCount);
  const typingFinished = charCount >= data.query.length;

  // Step timing
  const showStep1 = isReducedMotion || step >= 1;
  const checkStep1 = isReducedMotion || step >= 2;
  const showStep2 = isReducedMotion || step >= 2;
  const checkStep2 = isReducedMotion || step >= 3;
  const showCalc = isReducedMotion || step >= 4;
  const showSource = isReducedMotion || step >= 5;

  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASING.out }}
      className="relative z-10 w-full h-full flex flex-col justify-between gap-2.5 sm:gap-3"
    >
      {/* Big Label at Top */}
      <div className="border-b border-line/60 pb-2">
        <h3 className="font-headline-sm sm:font-headline-md font-bold text-primary tracking-tight text-sm sm:text-base">
          {data.bigLabel}
        </h3>
      </div>

      {/* Physics Query Chat Bubble */}
      <div className="bg-paper-sunken border border-line p-2.5 rounded-sm font-mono text-[11px] sm:text-xs text-primary leading-relaxed shadow-xs">
        <span className="font-bold text-secondary mr-1.5">Q:</span>
        <span>{queryText}</span>
        {!typingFinished && !isReducedMotion && (
          <span className="inline-block w-1.5 h-3 bg-secondary ml-0.5 animate-pulse" />
        )}
      </div>

      {/* Step Lines with spinner -> check */}
      <div className="flex flex-col gap-1.5 font-mono text-[11px] sm:text-xs">
        {showStep1 && (
          <div className="flex items-center gap-2">
            {checkStep1 ? (
              <Icon name="check" className="text-[15px] text-status-success font-bold" />
            ) : (
              <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <span className={checkStep1 ? 'text-primary' : 'text-ink-muted'}>
              {data.steps[0]}
            </span>
          </div>
        )}

        {showStep2 && (
          <div className="flex items-center gap-2">
            {checkStep2 ? (
              <Icon name="check" className="text-[15px] text-status-success font-bold" />
            ) : (
              <span className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <span className={checkStep2 ? 'text-primary' : 'text-ink-muted'}>
              {data.steps[1]}
            </span>
          </div>
        )}
      </div>

      {/* Highlighted Verified Calculation Box */}
      {showCalc && (
        <m.div
          initial={isReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="p-2 sm:p-2.5 bg-signal-orange-tint/70 border border-secondary rounded-sm flex items-center justify-between"
        >
          <span className="font-mono text-xs sm:text-sm font-bold text-secondary">
            {data.calcResult}
          </span>
          <Icon name="calculate" className="text-[18px] text-secondary" />
        </m.div>
      )}

      {/* Textbook Source Line */}
      <div className="pt-2 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-ink-muted">
        {showSource ? (
          <m.div
            initial={isReducedMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 text-primary font-medium"
          >
            <Icon name="menu_book" className="text-[15px] text-secondary" />
            <span>{data.source}</span>
          </m.div>
        ) : (
          <div>Verifying curriculum…</div>
        )}
      </div>
    </m.div>
  );
}
