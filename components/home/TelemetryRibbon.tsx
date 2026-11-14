'use client';

import React, { useState, useEffect } from 'react';

export function TelemetryRibbon() {
  const [timeDisplay, setTimeDisplay] = useState('11:18:21:04');

  useEffect(() => {
    const clockTimer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      setTimeDisplay(`${h}:${m}:${s}:${ms}`);
    }, 40);

    return () => clearInterval(clockTimer);
  }, []);

  return (
    <div className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-1.5 sm:py-2 text-xs font-label-timecode text-ink-muted">
      <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Pipeline status with green pulsing dot */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-status-success animate-ping opacity-75" />
            <span className="relative w-2 h-2 rounded-full bg-status-success" />
          </span>
          <span className="tracking-widest uppercase font-bold text-primary">
            SYS_INIT :: PIPELINE_MONITOR
          </span>
          <span className="text-ink-faint">|</span>
          <span className="font-medium text-ink-muted">BUFFER: CUDA_IPC_RING</span>
        </div>

        {/* Right: Live Clock & Hardware Sync */}
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs shrink-0" suppressHydrationWarning>
          <span className="font-semibold text-primary">CLK: {timeDisplay}</span>
          <span className="hidden md:inline-block text-ink-faint">CALIBRATION_HASH: 0x884E_L4x2</span>
          <span className="px-1.5 py-0.5 bg-line border border-outline-variant/60 text-primary font-bold text-[10px] uppercase tracking-wider rounded-sm">
            100% HARDWARE SYNC
          </span>
        </div>
      </div>
    </div>
  );
}
