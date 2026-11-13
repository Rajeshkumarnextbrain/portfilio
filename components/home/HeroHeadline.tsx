'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function HeroHeadline() {
  const motionOK = useMotionOK();

  return (
    <h1 className="font-mega-display text-[44px] xs:text-[60px] sm:text-[76px] md:text-[88px] lg:text-[104px] leading-[0.92] text-primary tracking-tighter uppercase select-none">
      {/* Line 1 */}
      <span className="block overflow-hidden">
        {motionOK ? (
          <m.span
            data-motion="hero-line"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: TIMING.reveal, ease: EASING.out }}
            className="block"
          >
            I build production
          </m.span>
        ) : (
          <span className="block">I build production</span>
        )}
      </span>

      {/* Line 2 */}
      <span className="block overflow-hidden">
        {motionOK ? (
          <m.span
            data-motion="hero-line"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{
              duration: TIMING.reveal,
              delay: TIMING.stagger,
              ease: EASING.out,
            }}
            className="block"
          >
            AI systems that
          </m.span>
        ) : (
          <span className="block">AI systems that</span>
        )}
      </span>

      {/* Line 3 with left-to-right sweep highlight */}
      <span className="block overflow-hidden">
        {motionOK ? (
          <m.span
            data-motion="hero-line"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{
              duration: TIMING.reveal,
              delay: TIMING.stagger * 2,
              ease: EASING.out,
            }}
            className="block"
          >
            <m.span
              className="relative inline-block px-2 sm:px-3 py-0.5 text-secondary -rotate-1 rounded-sm bg-no-repeat"
              style={{
                backgroundImage: 'linear-gradient(to right, #FFE6DA, #FFE6DA)',
                backgroundSize: '100% 100%',
              }}
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: '100% 100%' }}
              transition={{
                duration: TIMING.reveal,
                delay: TIMING.reveal,
                ease: EASING.out,
              }}
            >
              see, reason &amp; scale.
            </m.span>
          </m.span>
        ) : (
          <span className="block">
            <span className="relative inline-block bg-signal-orange-tint px-2 sm:px-3 py-0.5 text-secondary -rotate-1 rounded-sm">
              see, reason &amp; scale.
            </span>
          </span>
        )}
      </span>
    </h1>
  );
}
