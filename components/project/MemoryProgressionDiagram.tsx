'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

export function MemoryProgressionDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: '0px', once: true });
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const [activeDotCount, setActiveDotCount] = useState(motionOK ? 0 : 6);
  const [showSummary, setShowSummary] = useState(!motionOK);

  useEffect(() => {
    if (!motionOK || !inView || !isVisible) {
      if (!motionOK) {
        setActiveDotCount(6);
        setShowSummary(true);
      }
      return;
    }

    const interval = setInterval(() => {
      setActiveDotCount((prev) => {
        if (prev < 6) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setShowSummary(true), 300);
        return prev;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [motionOK, inView, isVisible]);

  return (
    <div ref={containerRef} className="p-5 bg-paper-sunken border border-line flex flex-col gap-4">
      <div className="flex items-center justify-between text-xs font-label-timecode text-ink-muted">
        <span className="font-bold text-secondary uppercase">PROGRESSIVE CONTEXT WINDOW PIPELINE</span>
        <span>SLIDING BUFFER + 20-TURN CONDENSATION</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Left: 6 Raw Conversation Turn Dots */}
        <div className="md:col-span-6 flex flex-col gap-2 p-3 bg-surface border border-line">
          <span className="text-[10px] font-label-timecode text-ink-muted uppercase">
            ACTIVE 6-TURN SLIDING BUFFER (EXACT RECALL)
          </span>
          <div className="flex items-center gap-2 pt-1">
            {[1, 2, 3, 4, 5, 6].map((num, idx) => (
              <div
                key={num}
                className={`flex-1 h-8 border flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                  activeDotCount > idx
                    ? 'border-secondary bg-signal-orange-tint text-secondary scale-100'
                    : 'border-line bg-paper-raised text-ink-faint'
                }`}
              >
                T{num}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="hidden md:flex md:col-span-1 justify-center text-secondary font-mono text-lg font-bold">
          →
        </div>

        {/* Right: Rolling 20-Turn Summary Card */}
        <div className="md:col-span-5">
          {showSummary ? (
            <div className="p-3 bg-paper-raised border border-secondary flex flex-col gap-1.5 animate-in fade-in slide-in-from-right-2 duration-300">
              <span className="text-[10px] font-label-timecode text-secondary font-bold uppercase">
                ROLLING 20-TURN COMPACTED SUMMARY
              </span>
              <p className="text-xs font-mono text-on-surface leading-tight">
                Student masteries, formula derivations, and verified error history preserved in ~140 tokens.
              </p>
            </div>
          ) : (
            <div className="h-16 p-3 border border-dashed border-line flex items-center justify-center text-xs text-ink-faint font-mono">
              Condensing turns 7–20...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
