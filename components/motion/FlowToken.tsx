'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

export interface FlowStep {
  number: string;
  plainTitle: string;
  plainDesc: string;
  techDesc: string;
}

interface FlowTokenProps {
  steps: FlowStep[];
  className?: string;
}

export function FlowToken({ steps, className = '' }: FlowTokenProps) {
  const motionOK = useMotionOK();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '0px' });
  const [activeStepIndex, setActiveStepIndex] = useState<number>(motionOK ? -1 : steps.length - 1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView || !motionOK) {
      setActiveStepIndex(steps.length - 1);
      return;
    }

    // Sequence token across the steps over ~2.2s
    const stepDuration = 2200 / steps.length;
    let current = 0;

    const interval = setInterval(() => {
      setActiveStepIndex(current);
      current++;
      if (current >= steps.length) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView, motionOK, steps.length]);

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-6 ${className}`}>
      {/* Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {steps.map((st, idx) => {
          const isReached = activeStepIndex >= idx;
          const isHovered = hoveredIndex === idx;
          const isCurrentToken = activeStepIndex === idx;

          return (
            <div
              key={st.number}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              className={`p-4 bg-paper-sunken border transition-all duration-300 flex flex-col justify-between gap-3 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                isHovered || isCurrentToken
                  ? 'border-secondary ring-1 ring-secondary/50 shadow-sm'
                  : isReached
                  ? 'border-secondary/70'
                  : 'border-line'
              }`}
            >
              {/* Step Title & Description */}
              <div className="flex flex-col gap-2">
                <span
                  className={`font-label-sm text-xs font-bold transition-colors ${
                    isHovered || isReached ? 'text-secondary' : 'text-ink-muted'
                  }`}
                >
                  {st.number} / {st.plainTitle}
                </span>
                <h3 className="font-headline-md text-lg font-bold text-primary">
                  {st.plainTitle}
                </h3>
                <p className="font-body-md text-sm text-ink-muted leading-relaxed">
                  {st.plainDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-line/60">
                <span
                  className={`font-mono text-[13px] leading-tight block transition-colors ${
                    isHovered ? 'text-secondary font-semibold' : 'text-ink-faint'
                  }`}
                >
                  {st.techDesc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
