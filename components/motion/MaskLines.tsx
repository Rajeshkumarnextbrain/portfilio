'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface MaskLinesProps {
  lines: React.ReactNode[];
  className?: string;
  delay?: number;
}

export function MaskLines({ lines, className = '', delay = 0 }: MaskLinesProps) {
  const motionOK = useMotionOK();

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden">
          {motionOK ? (
            <m.div
              data-motion="mask-line"
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: TIMING.reveal,
                delay: delay + idx * TIMING.stagger,
                ease: EASING.out,
              }}
            >
              {line}
            </m.div>
          ) : (
            <div>{line}</div>
          )}
        </div>
      ))}
    </div>
  );
}
