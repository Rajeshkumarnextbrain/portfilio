'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className = '',
}: RevealProps) {
  const motionOK = useMotionOK();

  if (!motionOK) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      data-motion="reveal"
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: TIMING.reveal,
        delay,
        ease: EASING.out,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
