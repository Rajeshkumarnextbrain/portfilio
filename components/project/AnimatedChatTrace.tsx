'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';

export function AnimatedChatTrace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: '0px', once: true });
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();
  const [stepIndex, setStepIndex] = useState(motionOK ? 0 : 3);

  useEffect(() => {
    if (!motionOK || !inView || !isVisible) {
      if (!motionOK) setStepIndex(3);
      return;
    }

    const t1 = setTimeout(() => setStepIndex(1), 400);
    const t2 = setTimeout(() => setStepIndex(2), 900);
    const t3 = setTimeout(() => setStepIndex(3), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [motionOK, inView, isVisible]);

  return (
    <div ref={containerRef} className="relative bg-paper-raised p-6 border border-line flex flex-col gap-4">
      {/* Viewfinders */}
      <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
      <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>

      <div className="flex items-center justify-between border-b border-line pb-3">
        <span className="font-label-sm text-xs font-bold uppercase text-secondary">
          NATURAL LANGUAGE QUERY EXECUTION TRACE
        </span>
        <span className="font-label-timecode text-xs text-ink-muted">
          STREAMING PROTOCOL: SSE &amp; TOOL CALLING VIA MCP
        </span>
      </div>

      <div className="p-3 bg-surface border border-line">
        <span className="text-[10px] font-label-timecode text-ink-muted uppercase block mb-1">USER INQUIRY:</span>
        <p className="font-body-md text-sm sm:text-base text-on-surface font-medium">
          &ldquo;Which warehouse had the most missing hardhat incidents this week?&rdquo;
        </p>
      </div>

      <div className="flex flex-col gap-2.5 text-xs font-label-timecode">
        {/* Step 1 */}
        {stepIndex >= 1 ? (
          <div className="flex items-center gap-2 text-secondary font-bold animate-in fade-in duration-200">
            <span>→ STEP 1:</span>
            <span>Checking table structure via describe_table across 5 data domains</span>
          </div>
        ) : (
          <div className="h-4" />
        )}

        {/* Step 2 */}
        {stepIndex >= 2 ? (
          <div className="flex items-center gap-2 text-status-success font-semibold pl-4 animate-in fade-in duration-200">
            <span>✓ STEP 2:</span>
            <span>AST validation: 100% read-only SELECT confirmed (0 destructive mutations)</span>
          </div>
        ) : (
          <div className="h-4" />
        )}

        {/* Step 3 */}
        {stepIndex >= 3 ? (
          <div className="flex items-center gap-2 text-on-surface pl-4 animate-in fade-in duration-200">
            <span>→ STEP 3:</span>
            <span>Executed query in 14.8 ms. Result: Logistics Dock North had 18 incidents (audit crops linked).</span>
          </div>
        ) : (
          <div className="h-4" />
        )}
      </div>
    </div>
  );
}
