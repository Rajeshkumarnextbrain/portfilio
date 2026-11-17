'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';
import {
  TIMELINE_SCRUBBER_CLIPS, TIMELINE_START, TIMELINE_NOW, VERIFIED_NUMBERS,
} from '@/content/facts';
import Icon from '@/components/Icon';

const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const mi = (s: string) => { const [y, mo] = s.split('-').map(Number); return y * 12 + (mo - 1); };
const T0 = mi(TIMELINE_START);
const TOTAL = mi(TIMELINE_NOW) - T0;
const pct = (s: string) => ((mi(s) - T0) / TOTAL) * 100;
const fmt = (y: number, mo: number) => `${MONTHS[mo - 1]} ’${String(y).slice(2)}`;

// ticks every January and July between start and now
const TICKS = [2022, 2023, 2024, 2025, 2026].flatMap((y) =>
  [1, 7].map((mo) => ({
    label: fmt(y, mo), left: pct(`${y}-${String(mo).padStart(2, '0')}`), major: mo === 1,
  }))
).filter((t) => t.left > 2 && t.left < 94);

const [NY, NM] = TIMELINE_NOW.split('-').map(Number);

export function ExperienceScrubber() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  };

  return (
    <div ref={ref} className="flex flex-col gap-3 pt-space-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-label-sm text-xs sm:text-label-sm text-ink-muted uppercase">
        <span className="flex items-center gap-2 truncate">
          <Icon name="movie" className="text-[14px] text-secondary shrink-0" />
          <span className="truncate">TIMELINE SCRUBBER // MAY 2022 — PRESENT</span>
        </span>
        <span className="font-label-timecode text-label-timecode text-secondary font-medium shrink-0">
          PLAYHEAD: 00:04:18:22
        </span>
      </div>

      <div className="relative w-full bg-paper-sunken p-2 sm:p-3 select-none border border-line">
        {/* sprocket holes */}
        <div className="flex justify-between pb-2 border-b border-line opacity-60" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <span key={i} className="w-2 h-1.5 bg-line" />)}
        </div>

        {/* one-time playhead sweep */}
        {motionOK && inView && (
          <m.div
            className="absolute inset-0 pointer-events-none z-30 border-r-2 border-secondary bg-secondary/5"
            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: EASING.out }}
          />
        )}

        {/* clips, positioned by date */}
        <div className="relative my-2 sm:my-3 h-14">
          {TIMELINE_SCRUBBER_CLIPS.map((clip) => {
            const left = pct(clip.start);
            const width = pct(clip.end ?? TIMELINE_NOW) - left;
            const style = { left: `${left}%`, width: `calc(${width}% - 4px)` };
            const label = `${clip.title}, ${clip.period}`;

            if (clip.isCurrent) {
              return (
                <a key={clip.id} href={`#${clip.id}`} onClick={(e) => jump(e, clip.id)}
                   style={style} title={label} aria-label={label}
                   className="absolute inset-y-0 bg-secondary text-on-secondary flex items-center justify-between px-2 sm:px-4 overflow-hidden shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <div className="flex flex-col z-10 min-w-0 pr-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-surface-bright animate-ping shrink-0" />
                      <span className="font-label-sm text-[10px] tracking-wider uppercase truncate font-medium">
                        ACTIVE {clip.clipNumber} · TEAM LEAD
                      </span>
                    </div>
                    <span className="font-headline-md text-[11px] sm:text-body-md lg:text-headline-md font-bold tracking-tight truncate">
                      VISIONFACTS.AI // NEXTBRAIN
                    </span>
                  </div>
                  <div className="hidden lg:flex flex-col items-end z-10 font-label-timecode text-label-timecode whitespace-nowrap pr-12">
                    <span>REC // LIVE STREAM</span>
                    <span className="text-signal-orange-tint">{VERIFIED_NUMBERS.camerasCount} STREAMS</span>
                  </div>
                  <div className="absolute right-4 sm:right-12 top-0 bottom-0 w-0.5 bg-surface-bright shadow-[0_0_8px_#ffffff] z-20">
                    <span className="w-2 h-2 -top-1 -left-[3px] absolute rotate-45 bg-surface-bright" />
                  </div>
                </a>
              );
            }

            return (
              <a key={clip.id} href={`#${clip.id}`} onClick={(e) => jump(e, clip.id)}
                 style={style} title={label} aria-label={label}
                 className="absolute inset-y-0 bg-surface-container-high hover:bg-primary-fixed text-on-surface flex flex-col justify-between p-1.5 sm:p-2 transition-colors group overflow-hidden border border-line/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                <span className="font-label-sm text-[10px] text-ink-muted group-hover:text-primary leading-tight">{clip.clipNumber}</span>
                <span className="font-headline-md text-[10px] sm:text-body-sm font-semibold truncate">{clip.title}</span>
              </a>
            );
          })}
        </div>

        {/* axis, positioned by the same dates */}
        <div className="relative h-5 border-t border-line pt-2 font-label-timecode text-[10px] text-ink-faint">
          {TICKS.map((t) => (
            <span key={t.label} style={{ left: `${t.left}%` }}
                  className={`absolute -translate-x-1/2 ${t.major ? '' : 'hidden sm:block'}`}>{t.label}</span>
          ))}
          <span className="absolute right-0 font-bold text-secondary">{fmt(NY, NM)} [NOW]</span>
        </div>
      </div>
    </div>
  );
}
