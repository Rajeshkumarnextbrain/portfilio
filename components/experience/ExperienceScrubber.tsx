'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

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
    <div ref={ref} className="flex flex-col gap-3 pt-space-md">
      <div className="flex flex-wrap items-center justify-between gap-2 font-label-sm text-xs text-ink-muted uppercase">
        <span className="flex items-center gap-2 font-semibold">
          <span className="material-symbols-outlined text-[16px] text-secondary">timeline</span>
          CAREER TIMELINE · MAY 2022 — PRESENT
        </span>
        <span className="font-label-timecode text-secondary font-medium">BANGALORE, INDIA</span>
      </div>

      {/* Scrubber Container */}
      <div className="relative p-2 bg-paper-sunken border border-line overflow-hidden">
        {/* Playhead Sweep Animation (moves once from start to end) */}
        {motionOK && inView && (
          <m.div
            className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none z-20 border-r-2 border-secondary bg-secondary/5"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: EASING.out }}
          />
        )}

        {/* 3 Segments */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 relative z-10">
          {/* Role 3 */}
          <a
            href="#chapter-3"
            onClick={(e) => handleScrollTo(e, 'chapter-3')}
            className="md:col-span-3 p-3 bg-paper-raised hover:bg-surface-container-high border border-line transition-all duration-150 flex flex-col justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary group active:scale-[0.98]"
          >
            <div className="flex items-center justify-between text-[11px] font-label-timecode text-ink-muted group-hover:text-primary">
              <span>MAY 2022 – JUL 2022</span>
              <span className="font-mono">03</span>
            </div>
            <div>
              <div className="font-headline-md text-body-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
                Vedant Tech (DRDO)
              </div>
              <div className="text-[12px] text-ink-muted truncate">Technical Support Engineer</div>
            </div>
          </a>

          {/* Role 2 */}
          <a
            href="#chapter-2"
            onClick={(e) => handleScrollTo(e, 'chapter-2')}
            className="md:col-span-4 p-3 bg-paper-raised hover:bg-surface-container-high border border-line transition-all duration-150 flex flex-col justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary group active:scale-[0.98]"
          >
            <div className="flex items-center justify-between text-[11px] font-label-timecode text-ink-muted group-hover:text-primary">
              <span>JUL 2022 – JUL 2023</span>
              <span className="font-mono">02</span>
            </div>
            <div>
              <div className="font-headline-md text-body-sm font-bold text-on-surface group-hover:text-secondary transition-colors">
                SS Automation Solutions
              </div>
              <div className="text-[12px] text-ink-muted truncate">Junior Vision Engineer</div>
            </div>
          </a>

          {/* Role 1 */}
          <a
            href="#chapter-1"
            onClick={(e) => handleScrollTo(e, 'chapter-1')}
            className="md:col-span-5 p-3 bg-secondary text-on-secondary transition-all duration-150 hover:bg-signal-orange-hover flex flex-col justify-between gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.98] group"
          >
            <div className="flex items-center justify-between text-[11px] font-label-timecode text-on-secondary/80">
              <span className="flex items-center gap-1.5 font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                AUG 2023 – PRESENT · CURRENT
              </span>
              <span className="font-mono">01</span>
            </div>
            <div>
              <div className="font-headline-md text-body-sm font-bold text-white">Nextbrain Technologies</div>
              <div className="text-[12px] text-white/90 font-medium">Team Lead – AI &amp; Computer Vision</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
