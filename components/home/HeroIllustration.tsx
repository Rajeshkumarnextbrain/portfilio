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
    <div
      ref={ref}
      className="relative w-full aspect-video bg-neutral-900 border border-line p-4 flex flex-col justify-between overflow-hidden shadow-sm"
    >
      {/* Viewfinder Corner Marks ⌜ ⌝ ⌞ ⌟ */}
      <span className="absolute top-2 left-2 text-white font-mono text-sm leading-none select-none">⌜</span>
      <span className="absolute top-2 right-2 text-white font-mono text-sm leading-none select-none">⌝</span>
      <span className="absolute bottom-2 left-2 text-white font-mono text-sm leading-none select-none">⌞</span>
      <span className="absolute bottom-2 right-2 text-white font-mono text-sm leading-none select-none">⌟</span>

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-white/80 z-10">
        <div className="flex items-center gap-2">
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
          <span className="font-bold tracking-wider">CAM_08 · FACILITY_DOCK</span>
        </div>
        <span className="text-white/60">1080p · RTSP LIVE</span>
      </div>

      {/* Central SVG Bounding Boxes Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 225"
        preserveAspectRatio="none"
      >
        {/* Box 1: Forklift (Left) */}
        <m.rect
          x="30"
          y="65"
          width="150"
          height="120"
          fill="rgba(253, 89, 30, 0.08)"
          stroke="#FD591E"
          strokeWidth="1.5"
          initial={motionOK ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASING.out }}
        />

        {/* Box 2: Worker PPE (Right) */}
        <m.rect
          x="230"
          y="45"
          width="110"
          height="145"
          fill="rgba(253, 89, 30, 0.08)"
          stroke="#FD591E"
          strokeWidth="1.5"
          initial={motionOK ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASING.out }}
        />
      </svg>

      {/* Bounding Box Labels */}
      <div className="relative z-10 flex justify-between px-4 sm:px-6">
        {/* Label 1 */}
        <m.div
          className="self-start"
          initial={motionOK ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <span className="px-1.5 py-0.5 bg-secondary text-white font-mono text-[9px] uppercase font-bold tracking-wider">
            FORKLIFT 0.96
          </span>
        </m.div>

        {/* Label 2 */}
        <m.div
          className="self-start pr-6 sm:pr-12"
          initial={motionOK ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.95 }}
        >
          <span className="px-1.5 py-0.5 bg-secondary text-white font-mono text-[9px] uppercase font-bold tracking-wider">
            PPE: VEST OK · HELMET
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

      {/* Bottom Telemetry Footer */}
      <div className="flex items-center justify-between text-[10px] font-mono text-white/60 z-10 pt-2 border-t border-white/10">
        <span>INFERENCE: 14.2 ms</span>
        <span>ZERO-COPY IPC · TRITON SERVER</span>
      </div>
    </div>
  );
}
