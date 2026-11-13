'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface GrowBarProps {
  targetPercent: number; // 0 to 100
  className?: string;
  delay?: number;
  duration?: number;
}

export function GrowBar({
  targetPercent,
  className = 'h-full bg-secondary',
  delay = 0,
  duration = TIMING.diagram,
}: GrowBarProps) {
  const motionOK = useMotionOK();

  if (!motionOK) {
    return <div style={{ width: `${targetPercent}%` }} className={className} />;
  }

  return (
    <m.div
      data-motion="grow-bar"
      initial={{ width: '0%' }}
      whileInView={{ width: `${targetPercent}%` }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration,
        delay,
        ease: EASING.out,
      }}
      className={className}
    />
  );
}
