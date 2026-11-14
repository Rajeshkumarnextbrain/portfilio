'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

export function HeroIllustration() {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const shouldPulse = motionOK && isVisible && inView;

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* 4 Outer Viewfinder Corner Markers (matching screenshot) */}
      <div className="absolute -top-3 -left-3 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-l-2 border-primary pointer-events-none z-20" />
      <div className="absolute -top-3 -right-3 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-r-2 border-primary pointer-events-none z-20" />
      <div className="absolute -bottom-8 -left-3 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-l-2 border-primary pointer-events-none z-20" />
      <div className="absolute -bottom-8 -right-3 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-r-2 border-primary pointer-events-none z-20" />

      {/* Main Illustration Card Container */}
      <div
        ref={ref}
        className="relative w-full bg-paper-sunken border border-line p-2 sm:p-3 flex flex-col justify-between overflow-hidden shadow-sm"
      >
        {/* Inner Video Monitor Screen */}
        <div className="relative w-full aspect-[4/3] bg-paper-raised border border-line/60 overflow-hidden flex flex-col justify-between p-2.5 sm:p-3">
          {/* Simulated CCTV Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none bg-[length:100%_4px]" />

          {/* Top HUD Bar */}
          <div className="relative z-10 flex items-center justify-between text-ink-muted font-mono">
            {/* Left Camera Identifier */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-paper-raised/95 border border-line/60 px-2 py-0.5 rounded-sm shadow-xs">
              <span className="relative flex items-center justify-center w-2 h-2">
                {shouldPulse && (
                  <m.span
                    className="absolute inset-0 rounded-full bg-secondary-container"
                    animate={{ scale: [1, 2.2, 2.2], opacity: [0.8, 0, 0] }}
                    transition={{ duration: 2.0, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                <span className="relative w-2 h-2 rounded-full bg-secondary-container" />
              </span>
              <span className="font-bold text-[11px] sm:text-xs text-primary tracking-tight">
                CAM_08 :: DOCK_SOUTH
              </span>
            </div>

            {/* Right Hardware Decoder Badge */}
            <div className="bg-paper-raised/95 border border-line/60 px-2 py-0.5 rounded-sm font-mono text-[10px] text-ink-muted">
              NVIDIA L4 · NVDEC 1080p60
            </div>
          </div>

          {/* Central Bounding Box Overlays */}
          <div className="relative w-full h-full my-2">
            {/* Bounding Box 1: FORKLIFT with coordinates & telemetry tag */}
            <m.div
              className="absolute top-4 left-2 sm:left-4 w-[54%] h-[62%] border-2 border-secondary bg-secondary/[0.06] flex items-center justify-center"
              initial={motionOK ? { opacity: 0, scale: 0.96 } : { opacity: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Tag Label on top */}
              <div className="absolute -top-5 left-[-2px] bg-secondary text-white px-1.5 py-0.5 font-mono text-[9.5px] sm:text-[10px] whitespace-nowrap flex items-center gap-1 font-bold rounded-t-sm shadow-sm tracking-wider">
                <span>FORKLIFT 99%</span>
                <span className="opacity-70">·</span>
                <span>#4602</span>
                <span className="opacity-70">·</span>
                <span>4.2 m/s</span>
              </div>
              {/* Crosshair inside box */}
              <div className="pointer-events-none text-secondary text-xs opacity-50 font-mono">+</div>
            </m.div>

            {/* Bounding Box 2: PPE / SAFETY GEAR */}
            <m.div
              className="absolute bottom-2 right-2 sm:right-4 w-[40%] h-[72%] border border-secondary/70 bg-secondary/[0.04]"
              initial={motionOK ? { opacity: 0, scale: 0.96 } : { opacity: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="absolute -top-5 left-[-1px] bg-secondary text-white px-1.5 py-0.5 font-mono text-[9px] sm:text-[9.5px] whitespace-nowrap flex items-center gap-1 font-bold rounded-t-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>SAFETY GEAR: OK</span>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-secondary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary" />
            </m.div>
          </div>

          {/* Scan Line Pass */}
          {motionOK && (
            <m.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent pointer-events-none z-10 shadow-[0_0_8px_#FD591E]"
              initial={{ top: '-5%' }}
              animate={{ top: '105%' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASING.inOut }}
            />
          )}

          {/* Bottom HUD Inside Monitor: Dark Strip */}
          <div className="relative z-10 flex items-center justify-between bg-primary text-on-primary px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] rounded-xs">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#ffdbd0] font-semibold">RTSP H.265</span>
              <span>92 FPS</span>
              <span className="hidden xs:inline">p95 8.4 ms</span>
              <span className="hidden sm:inline">3.8 GB VRAM</span>
            </div>
            <div className="flex items-center gap-1 text-secondary-container font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-[9.5px] sm:text-[10px] tracking-wider uppercase">SINGLE-STREAM LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Micro-specs (Below Monitor Card) */}
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-ink-muted px-1">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-primary">FRAME_SPEC:</span>
          <span>1920x1080</span>
          <span className="text-ink-faint">ZERO_COPY_SHM =</span>
          <span className="text-primary font-semibold">YUV420 → RGB ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
