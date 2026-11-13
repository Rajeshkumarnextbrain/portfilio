'use client';

import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

const ROTATING_WORDS = ['[see]', '[reason]', '[scale]'];

export function HeroHeadline() {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const [slotIndex, setSlotIndex] = useState(0);

  useEffect(() => {
    if (!motionOK || !isVisible) return;

    const timer = setInterval(() => {
      setSlotIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [motionOK, isVisible]);

  return (
    <h1
      className="font-headline-lg font-semibold tracking-[-0.04em] leading-[0.95] text-[#1c1c18] select-none"
      style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}
    >
      {/* Transform-only reveal on initial mount, text stays 100% visible */}
      <m.span
        data-motion="hero-headline"
        className="inline"
        initial={motionOK ? { y: 20 } : { y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: TIMING.reveal, ease: EASING.out }}
      >
        I build production AI systems that{' '}
      </m.span>

      {/* Rotating Verb Slot: see -> reason -> scale */}
      <span className="block sm:inline-block relative overflow-hidden align-middle h-[1.18em] text-secondary mt-1 sm:mt-0 sm:ml-2">
        <span
          className={`flex flex-col ${
            motionOK ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]' : ''
          }`}
          style={{
            transform: `translateY(-${slotIndex * 33.3333}%)`,
          }}
        >
          {ROTATING_WORDS.map((word) => (
            <span key={word} className="h-[1.18em] flex items-center justify-start sm:justify-center">
              <span className="bg-signal-orange-tint px-2 sm:px-2.5 py-0.5 text-secondary border-b-2 border-secondary leading-none rounded-sm">
                {word}
              </span>
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
