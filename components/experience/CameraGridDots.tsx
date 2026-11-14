'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function CameraGridDots() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  // 130 dots (13 x 10) representing 130+ cameras in cluster
  const dots = Array.from({ length: 130 });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-mono text-ink-muted gap-1">
        <span>ACTIVE CAMERA CLUSTER GRID (130 FEEDS)</span>
        <span className="text-secondary font-bold">112 / 130 ONLINE</span>
      </div>
      <div className="p-3 bg-surface border border-line grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5 overflow-hidden">
        {dots.map((_, idx) => (
          motionOK ? (
            <m.span
              key={idx}
              className="w-1.5 h-1.5 rounded-sm bg-secondary justify-self-center"
              initial={{ opacity: 0.15, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.15 }}
              transition={{
                duration: 0.15,
                delay: (idx / 130) * 0.6, // 600ms total sequence
                ease: 'easeOut',
              }}
            />
          ) : (
            <span key={idx} className="w-1.5 h-1.5 rounded-sm bg-secondary justify-self-center" />
          )
        ))}
      </div>
    </div>
  );
}
