'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

const ROTATING_WORDS = ['SEE.', 'REASON.', 'SCALE.'];

export function HeroHeadline() {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headingRef, { margin: '0px' });
  const [slotIndex, setSlotIndex] = useState(0);

  useEffect(() => {
    if (!motionOK || !isVisible || !inView) return;

    const timer = setInterval(() => {
      setSlotIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [motionOK, isVisible, inView]);

  return (
    <h1
      ref={headingRef}
      aria-label="I build production AI systems that see, reason and scale."
      className="font-mega-display text-[32px] xs:text-[44px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight select-none"
    >
      {/* Transform-only reveal on initial mount, text stays 100% visible */}
      <m.span
        data-motion="hero-headline"
        aria-hidden="true"
        className="block"
        initial={motionOK ? { y: 20 } : { y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: TIMING.reveal, ease: EASING.out }}
      >
        I build production AI systems that
      </m.span>

      {/* Rotating Verb Slot: SEE. -> REASON. -> SCALE. */}
      <span aria-hidden="true" className="block relative h-[1.18em] overflow-hidden text-secondary mt-1.5 sm:mt-2">
        <span
          className={`flex flex-col items-start ${
            motionOK ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''
          }`}
          style={{
            transform: `translateY(-${slotIndex * 33.3333}%)`,
          }}
        >
          {ROTATING_WORDS.map((word) => (
            <span key={word} className="h-[1.18em] flex items-center justify-start text-left">
              <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                {word}
              </span>
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
