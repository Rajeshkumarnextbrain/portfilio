'use client';

import React from 'react';
import { m, useScroll, useSpring } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function ScrollProgress() {
  const motionOK = useMotionOK();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  if (!motionOK) {
    return null;
  }

  return (
    <m.div
      data-motion="scroll-progress"
      className="fixed top-16 left-0 right-0 h-[2.5px] bg-secondary shadow-[0_1px_6px_rgba(255,100,34,0.4)] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
    />
  );
}
