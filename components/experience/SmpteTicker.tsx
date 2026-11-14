'use client';

import React, { useState, useEffect } from 'react';
import { useMotionOK } from '@/lib/useMotionOK';

export function SmpteTicker() {
  const [frame, setFrame] = useState(11);
  const motionOK = useMotionOK();

  useEffect(() => {
    if (!motionOK) return;
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 24);
    }, 1000 / 24);
    return () => clearInterval(timer);
  }, [motionOK]);

  const frameStr = frame < 10 ? `0${frame}` : `${frame}`;

  return (
    <span className="font-label-timecode text-label-timecode text-ink-muted shrink-0">
      SMPTE: 00:00:00:{frameStr}
    </span>
  );
}
