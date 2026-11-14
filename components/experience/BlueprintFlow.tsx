'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';
import { BLUEPRINT_NODES } from '@/content/facts';

export function BlueprintFlow() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(motionOK ? -1 : 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || !motionOK) {
      setActiveNodeIndex(3);
      return;
    }

    const durationPerStep = 2200 / 4;
    let current = 0;
    const interval = setInterval(() => {
      setActiveNodeIndex(current);
      current++;
      if (current >= 4) {
        clearInterval(interval);
      }
    }, durationPerStep);

    return () => clearInterval(interval);
  }, [inView, motionOK]);

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {BLUEPRINT_NODES.map((node, idx) => {
        const isReached = activeNodeIndex >= idx;
        const isHovered = hoveredIndex === idx;
        const isCurrentToken = activeNodeIndex === idx;

        return (
          <div
            key={node.nodeNumber}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(idx)}
            onBlur={() => setHoveredIndex(null)}
            tabIndex={0}
            className={`relative p-6 bg-paper-raised border transition-all duration-300 flex flex-col justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              isHovered || isCurrentToken
                ? 'border-secondary ring-1 ring-secondary/50 shadow-sm'
                : isReached
                ? 'border-secondary/70'
                : 'border-line'
            }`}
          >
            {/* Corner Viewfinders */}
            <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
            <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>

            {/* Traveling Token */}
            {motionOK && isCurrentToken && (
              <m.div
                layoutId="blueprint-token"
                className="absolute -top-2.5 right-4 px-1.5 py-0.5 bg-secondary text-white font-mono text-[9px] uppercase font-bold tracking-wider rounded-sm shadow-sm"
                transition={{ duration: TIMING.micro, ease: EASING.out }}
              >
                ⌜⌟ ACTIVE STAGE
              </m.div>
            )}

            <div className="flex flex-col gap-2">
              <span
                className={`font-label-sm text-[10px] uppercase font-bold transition-colors ${
                  isHovered || isReached ? 'text-secondary' : 'text-ink-muted'
                }`}
              >
                {node.nodeNumber} · {node.stageName}
              </span>
              <h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">
                {node.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {node.description}
              </p>
            </div>

            <div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
              {node.spec}
            </div>
          </div>
        );
      })}
    </div>
  );
}
