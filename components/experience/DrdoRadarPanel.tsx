'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

const DRDO_ROWS = [
  {
    label: 'Work area',
    value: 'Radar data processing, target tracking and signal analysis',
  },
  {
    label: 'Methods',
    value: 'Kalman filtering (target state estimation); K-Nearest Neighbors (noise classification)',
  },
  {
    label: 'My part',
    value: 'Supported testing and empirical validation of radar signal processing algorithms',
  },
  {
    label: 'Processing',
    value: 'Real-time stream processing',
  },
];

export default function DrdoRadarPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(panelRef, { margin: '-10% 0px' });
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();

  const shouldAnimate = motionOK && isVisible && inView;

  return (
    <div
      ref={panelRef}
      className="relative bg-[#14130F] p-6 sm:p-8 md:p-10 border border-surface-container-highest/20 my-2"
    >
      {/* Viewfinder corner brackets */}
      <span
        aria-hidden="true"
        className="absolute -top-2 -left-2 text-[#F5F2EC] font-headline-lg select-none leading-none pointer-events-none"
      >
        ⌜
      </span>
      <span
        aria-hidden="true"
        className="absolute -top-2 -right-2 text-[#F5F2EC] font-headline-lg select-none leading-none pointer-events-none"
      >
        ⌝
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-2 -left-2 text-[#F5F2EC] font-headline-lg select-none leading-none pointer-events-none"
      >
        ⌞
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-2 -right-2 text-[#F5F2EC] font-headline-lg select-none leading-none pointer-events-none"
      >
        ⌟
      </span>

      {/* Header inside the panel */}
      <div className="flex flex-col gap-3 pb-6 mb-8 border-b border-surface-container-highest/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A5C]" />
            <span className="font-mono text-[13px] text-[#FF8A5C] uppercase font-semibold">
              ROLE 03 · May 2022 – Jul 2022
            </span>
          </div>
          <span className="font-mono text-[12px] text-[#B5B2A8]">DEFENSE RESEARCH VALIDATION</span>
        </div>

        <h2 className="font-display text-display text-[#F5F2EC] uppercase tracking-tight">
          Technical Support Engineer
        </h2>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px] md:text-sm text-[#B5B2A8]">
          <span className="font-semibold text-[#F5F2EC]">Vedant Tech Solutions Pvt. Ltd. (DRDO project)</span>
          <span>·</span>
          <span className="text-[#FF8A5C] font-medium">May 2022 – Jul 2022</span>
        </div>

        <div className="p-4 bg-surface/5 border border-surface-container-highest/20 mt-1">
          <p className="font-body-md text-[15px] md:text-base text-[#F5F2EC] leading-relaxed">
            <strong className="text-[#FF8A5C] font-mono text-xs uppercase font-semibold mr-2">
              In plain English:
            </strong>
            I worked on radar data processing and target tracking.
          </p>
        </div>
      </div>

      {/* 2-column layout: Radar left (max 280px), Rows right. On mobile: stacked with radar first (max 220px) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Left column: Radar scope graphic */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] max-w-[220px] md:max-w-[280px] rounded-full border border-surface-container-highest/30 flex items-center justify-center overflow-hidden bg-[#0d0c0a] shadow-[inset_0_0_24px_rgba(0,0,0,0.8)] shrink-0">
            {/* Concentric range rings */}
            <div className="absolute w-[75%] h-[75%] rounded-full border border-surface-container-highest/20 pointer-events-none" />
            <div className="absolute w-[50%] h-[50%] rounded-full border border-surface-container-highest/20 pointer-events-none" />
            <div className="absolute w-[25%] h-[25%] rounded-full border border-surface-container-highest/20 pointer-events-none" />

            {/* Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-px bg-surface-container-highest/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-px bg-surface-container-highest/20" />
            </div>

            {/* Rotating sweep or static sweep line */}
            {shouldAnimate ? (
              <m.div
                className="absolute inset-0 origin-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                style={{ willChange: 'transform' }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgba(255, 138, 92, 0.28) 0deg, rgba(255, 138, 92, 0.05) 45deg, transparent 60deg, transparent 360deg)',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[1.5px] bg-[#FF8A5C] origin-left -translate-y-1/2 shadow-[0_0_8px_#FF8A5C]" />
              </m.div>
            ) : (
              <div
                className="absolute inset-0 origin-center pointer-events-none"
                style={{ transform: 'rotate(45deg)' }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgba(255, 138, 92, 0.22) 0deg, rgba(255, 138, 92, 0.04) 45deg, transparent 60deg, transparent 360deg)',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-1/2 h-[1.5px] bg-[#FF8A5C] origin-left -translate-y-1/2 shadow-[0_0_6px_#FF8A5C]" />
              </div>
            )}

            {/* Target blip with label: Tracked object */}
            <div className="absolute top-[26%] right-[24%] flex flex-col items-center pointer-events-none z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A5C] shadow-[0_0_8px_#FF8A5C]" />
              <span className="font-mono text-[11px] text-[#F5F2EC] bg-[#14130F]/90 px-1.5 py-0.5 rounded mt-1 border border-[#FF8A5C]/30 whitespace-nowrap">
                Tracked object
              </span>
            </div>
          </div>

          {/* Caption */}
          <p className="font-mono text-[13px] text-[#B5B2A8] text-center mt-3">Illustration</p>
        </div>

        {/* Right column: Rows & Explanations */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col border-t border-surface-container-highest/20">
            {DRDO_ROWS.map((row) => (
              <div
                key={row.label}
                className="py-3.5 border-b border-surface-container-highest/20 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
              >
                <span className="sm:col-span-3 font-mono text-[13px] md:text-sm text-[#B5B2A8] uppercase tracking-wider font-medium">
                  {row.label}
                </span>
                <span className="sm:col-span-9 font-body-md text-[15px] md:text-base text-[#F5F2EC] leading-relaxed">
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Two short plain explanations under the rows */}
          <div className="pt-4 mt-2 flex flex-col gap-2">
            <p className="font-body-md text-[15px] text-[#B5B2A8] leading-relaxed">
              <strong className="text-[#FF8A5C] font-semibold">Kalman filter:</strong> a method that
              estimates where a moving object is, even when the readings are noisy.
            </p>
            <p className="font-body-md text-[15px] text-[#B5B2A8] leading-relaxed">
              <strong className="text-[#FF8A5C] font-semibold">KNN:</strong> a simple method that
              labels data by comparing it with similar examples.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
