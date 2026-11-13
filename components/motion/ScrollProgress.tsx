'use client';

import React from 'react';
import { m, useScroll } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function ScrollProgress() {
  const motionOK = useMotionOK();
  const { scrollYProgress } = useScroll();

  if (!motionOK) {
    return null;
  }

  return (
    <m.div
      data-motion="scroll-progress"
      className="fixed top-16 left-0 right-0 h-[2px] bg-secondary-container origin-left z-50 pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
