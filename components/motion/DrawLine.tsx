'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface DrawLineProps {
  className?: string;
  delay?: number;
}

export function DrawLine({ className = 'h-px w-full bg-line', delay = 0 }: DrawLineProps) {
  const motionOK = useMotionOK();

  if (!motionOK) {
    return <div className={className} />;
  }

  return (
    <m.div
      data-motion="draw-line"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: TIMING.reveal,
        delay,
        ease: EASING.out,
      }}
      className={className}
    />
  );
}
