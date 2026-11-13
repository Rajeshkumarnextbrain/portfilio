'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function CameraGridDots() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  // 48 dots representing cameras in cluster
  const dots = Array.from({ length: 48 });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center text-xs font-mono text-ink-muted">
        <span>ACTIVE CAMERA CLUSTER GRID</span>
        <span className="text-secondary font-bold">112 / 130 ONLINE</span>
      </div>
      <div className="p-3 bg-surface border border-line flex flex-wrap gap-1.5 h-16 content-center overflow-hidden">
        {dots.map((_, idx) => (
          motionOK ? (
            <m.span
              key={idx}
              className="w-1.5 h-1.5 rounded-sm bg-secondary"
              initial={{ opacity: 0.15, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0.15 }}
              transition={{
                duration: 0.15,
                delay: (idx / 48) * 0.6, // 600ms total sequence
                ease: 'easeOut',
              }}
            />
          ) : (
            <span key={idx} className="w-1.5 h-1.5 rounded-sm bg-secondary" />
          )
        ))}
      </div>
    </div>
  );
}
