'use client';

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

interface AmbientDotProps {
  color?: string; // e.g. 'bg-status-success' or 'bg-secondary'
  size?: string; // e.g. 'w-2 h-2'
  pulseColor?: string;
  className?: string;
}

export function AmbientDot({
  color = 'bg-status-success',
  size = 'w-2 h-2',
  className = '',
}: AmbientDotProps) {
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  const shouldAnimate = motionOK && isVisible && inView;

  return (
    <span ref={ref} className={`relative inline-flex items-center justify-center ${size} ${className}`}>
      {shouldAnimate && (
        <m.span
          className={`absolute inset-0 rounded-full ${color} opacity-75`}
          animate={{
            scale: [1, 2, 2],
            opacity: [0.75, 0, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}
      <span className={`relative rounded-full ${size} ${color}`} />
    </span>
  );
}
