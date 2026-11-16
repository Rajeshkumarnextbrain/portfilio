'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

export function SmpteTicker() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(11);
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const inView = useInView(spanRef, { margin: '0px' });

  useEffect(() => {
    if (!motionOK || !isVisible || !inView) return;

    const timer = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % 24;
      const frameStr = frameRef.current < 10 ? `0${frameRef.current}` : `${frameRef.current}`;
      if (spanRef.current) {
        spanRef.current.textContent = `SMPTE: 00:00:00:${frameStr}`;
      }
    }, 1000 / 24);

    return () => clearInterval(timer);
  }, [motionOK, isVisible, inView]);

  return (
    <span
      ref={spanRef}
      className="font-label-timecode text-label-timecode text-ink-muted shrink-0"
    >
      SMPTE: 00:00:00:11
    </span>
  );
}
