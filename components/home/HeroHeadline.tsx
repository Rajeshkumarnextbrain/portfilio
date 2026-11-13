'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function HeroHeadline() {
  const motionOK = useMotionOK();

  return (
    <h1
      className="font-headline-lg font-semibold tracking-[-0.04em] leading-[1.0] text-[#1c1c18] select-none"
      style={{ fontSize: 'clamp(2.75rem, 6vw, 5.25rem)' }}
    >
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

      {/* Line 3 with inline sweep highlight */}
      <span className="block overflow-hidden pt-1">
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
              style={{
                display: 'inline',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
                padding: '0 0.12em',
                backgroundImage: 'linear-gradient(to right, #FFE6DA, #FFE6DA)',
                backgroundRepeat: 'no-repeat',
                borderBottom: '2px solid #AE3200',
                color: '#AE3200',
              }}
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: '100% 100%' }}
              transition={{
                duration: TIMING.reveal,
                delay: TIMING.reveal,
                ease: EASING.out,
              }}
            >
              see, reason and scale.
            </m.span>
          </m.span>
        ) : (
          <span className="block">
            <span
              style={{
                display: 'inline',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
                padding: '0 0.12em',
                background: '#FFE6DA',
                borderBottom: '2px solid #AE3200',
                color: '#AE3200',
              }}
            >
              see, reason and scale.
            </span>
          </span>
        )}
      </span>
    </h1>
  );
}
