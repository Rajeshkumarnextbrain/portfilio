'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';
import { TIMELINE_SCRUBBER_CLIPS } from '@/content/facts';

export function ExperienceScrubber() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className="flex flex-col gap-3 pt-space-lg">
      {/* Filmstrip Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-label-sm text-xs sm:text-label-sm text-ink-muted uppercase">
        <span className="flex items-center gap-2 truncate">
          <span className="material-symbols-outlined text-[14px] text-secondary shrink-0" aria-hidden="true">
            movie
          </span>
          <span className="truncate">TIMELINE SCRUBBER // MAY 2022 — PRESENT</span>
        </span>
        <span className="font-label-timecode text-label-timecode text-secondary font-medium shrink-0">
          PLAYHEAD: 00:04:18:22
        </span>
      </div>

      {/* Scrubber Track & Ticks */}
      <div className="relative w-full bg-paper-sunken p-2 sm:p-3 select-none border border-line">
        {/* Filmstrip Sprocket Holes (Top) */}
        <div className="flex justify-between pb-2 border-b border-line opacity-60">
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
          <span className="w-2 h-1.5 bg-line"></span>
        </div>

        {/* Playhead Sweep Animation (moves once from start to end) */}
        {motionOK && inView && (
          <m.div
            className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-30 border-r-2 border-secondary bg-secondary/5"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: EASING.out }}
          />
        )}

        {/* Segments */}
        <div className="grid grid-cols-12 gap-1 sm:gap-1.5 my-2 sm:my-3 h-14 relative">
          {TIMELINE_SCRUBBER_CLIPS.map((clip) => {
            if (clip.isCurrent) {
              return (
                <a
                  key={clip.id}
                  href={`#${clip.id}`}
                  onClick={(e) => handleScrollTo(e, clip.id)}
                  className={`${clip.colSpan} bg-secondary text-on-secondary flex items-center justify-between px-2 sm:px-4 relative overflow-hidden group shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                >
                  <div className="flex flex-col z-10 min-w-0 pr-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-surface-bright animate-ping shrink-0"></span>
                      <span className="font-label-sm text-[8px] sm:text-label-sm tracking-wider uppercase truncate font-medium">
                        ACTIVE {clip.clipNumber} · TEAM LEAD
                      </span>
                    </div>
                    <span className="font-headline-md text-[11px] sm:text-body-md lg:text-headline-md font-bold tracking-tight truncate">
                      VISIONFACTS.AI // NEXTBRAIN
                    </span>
                  </div>
                  <div className="hidden lg:flex flex-col items-end z-10 font-label-timecode text-label-timecode">
                    <span>REC // LIVE STREAM</span>
                    <span className="text-signal-orange-tint">150+ STREAMS</span>
                  </div>

                  {/* Playhead Needle */}
                  <div className="absolute right-4 sm:right-12 top-0 bottom-0 w-0.5 bg-surface-bright shadow-[0_0_8px_#ffffff] z-20 flex flex-col items-center">
                    <span className="w-2 h-2 -top-1 absolute rotate-45 bg-surface-bright"></span>
                  </div>
                </a>
              );
            }

            return (
              <a
                key={clip.id}
                href={`#${clip.id}`}
                onClick={(e) => handleScrollTo(e, clip.id)}
                className={`${clip.colSpan} bg-surface-container-high hover:bg-primary-fixed text-on-surface flex flex-col justify-between p-1.5 sm:p-2 transition-colors group overflow-hidden border border-line/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary`}
              >
                <span className="font-label-sm text-[8px] sm:text-[10px] text-ink-muted group-hover:text-primary leading-tight">
                  {clip.clipNumber}
                </span>
                <span className="font-headline-md text-[10px] sm:text-body-sm font-semibold truncate">
                  {clip.title}
                </span>
              </a>
            );
          })}
        </div>

        {/* Axis Ticks (Responsive frequency: 5 on mobile, 9 on desktop) */}
        <div className="flex justify-between pt-2 border-t border-line font-label-timecode text-[9px] sm:text-[10px] text-ink-faint">
          <span>Q2&apos;22</span>
          <span className="hidden sm:inline">Q4&apos;22</span>
          <span>Q2&apos;23</span>
          <span className="hidden sm:inline">Q4&apos;23</span>
          <span>Q2&apos;24</span>
          <span className="hidden sm:inline">Q4&apos;24</span>
          <span>Q2&apos;25</span>
          <span className="hidden sm:inline">Q4&apos;25</span>
          <span className="font-bold text-secondary">Q1&apos;26 [NOW]</span>
        </div>
      </div>
    </div>
  );
}
