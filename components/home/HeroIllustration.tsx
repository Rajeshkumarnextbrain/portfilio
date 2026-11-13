'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

export function HeroIllustration() {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const shouldPulse = motionOK && isVisible && inView;

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Light Card Container (cream/sunken surface with viewfinder marks) */}
      <div
        ref={ref}
        className="relative w-full aspect-[4/3] bg-paper-sunken border border-line p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-sm"
      >
        {/* 4 Corner Viewfinder Marks */}
        <div className="absolute -top-[2px] -left-[2px] w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-primary pointer-events-none" />
        <div className="absolute -top-[2px] -right-[2px] w-5 h-5 border-t-[2.5px] border-r-[2.5px] border-primary pointer-events-none" />
        <div className="absolute -bottom-[2px] -left-[2px] w-5 h-5 border-b-[2.5px] border-l-[2.5px] border-primary pointer-events-none" />
        <div className="absolute -bottom-[2px] -right-[2px] w-5 h-5 border-b-[2.5px] border-r-[2.5px] border-primary pointer-events-none" />

        {/* Video Monitor Screen Simulation (cream/raised surface) */}
        <div className="relative w-full h-full bg-paper-raised border border-line/60 overflow-hidden flex flex-col justify-between p-3 sm:p-4">
          {/* Simulated CCTV Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none bg-[length:100%_4px]" />

          {/* Top Bar with Live Dot */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-surface/90 px-2 py-0.5 border border-line/60 rounded-sm">
              {/* Tiny live dot (Ambient loop 2) */}
              <span className="relative flex items-center justify-center w-2 h-2">
                {shouldPulse && (
                  <m.span
                    className="absolute inset-0 rounded-full bg-status-success"
                    animate={{
                      scale: [1, 2.2, 2.2],
                      opacity: [0.8, 0, 0],
                    }}
                    transition={{
                      duration: 2.0,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                )}
                <span className="relative w-2 h-2 rounded-full bg-status-success" />
              </span>
              <span className="font-mono text-[11px] font-semibold text-primary">Live camera feed</span>
            </div>
          </div>

          {/* Central SVG Bounding Boxes Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            {/* Box 1: Forklift (Left) */}
            <m.rect
              x="35"
              y="75"
              width="165"
              height="160"
              fill="rgba(253, 89, 30, 0.07)"
              stroke="#FD591E"
              strokeWidth="1.5"
              initial={motionOK ? { pathLength: 0 } : { pathLength: 1 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASING.out }}
            />

            {/* Box 2: Worker Safety Gear (Right) */}
            <m.rect
              x="235"
              y="55"
              width="135"
              height="190"
              fill="rgba(253, 89, 30, 0.07)"
              stroke="#FD591E"
              strokeWidth="1.5"
              initial={motionOK ? { pathLength: 0 } : { pathLength: 1 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASING.out }}
            />
          </svg>

          {/* Labels inside: "Forklift" and "Safety gear: OK" ONLY */}
          <div className="relative z-10 w-full h-full pointer-events-none">
            {/* Label 1: Forklift */}
            <m.div
              className="absolute top-[48px] left-[35px]"
              initial={motionOK ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <span className="px-2 py-0.5 bg-secondary text-white font-mono text-[11px] font-semibold tracking-wide rounded-sm shadow-sm">
                Forklift
              </span>
            </m.div>

            {/* Label 2: Safety gear: OK */}
            <m.div
              className="absolute top-[28px] left-[235px]"
              initial={motionOK ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.95 }}
            >
              <span className="px-2 py-0.5 bg-secondary text-white font-mono text-[11px] font-semibold tracking-wide rounded-sm shadow-sm">
                Safety gear: OK
              </span>
            </m.div>
          </div>

          {/* Single Scan Line Pass (800ms) */}
          {motionOK && (
            <m.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent pointer-events-none z-10 shadow-[0_0_8px_#FD591E]"
              initial={{ top: '-5%' }}
              animate={{ top: '105%' }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: EASING.inOut,
              }}
            />
          )}
        </div>
      </div>

      {/* Caption under illustration in 14px */}
      <p className="text-[14px] text-ink-muted text-center font-body-md">
        Illustration: AI spotting a forklift and checking safety gear on a live camera.
      </p>
    </div>
  );
}
