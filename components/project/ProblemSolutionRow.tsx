'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface ProblemSolutionRowProps {
  problemHeading?: string;
  problemText: string;
  problemCallout?: string;
  solutionHeading?: string;
  solutionText: string;
  solutionCallout?: string;
}

export function ProblemSolutionRow({
  problemHeading = 'THE PROBLEM',
  problemText,
  problemCallout,
  solutionHeading = 'THE SOLUTION',
  solutionText,
  solutionCallout,
}: ProblemSolutionRowProps) {
  const motionOK = useMotionOK();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-line py-8">
      {/* Problem column (fades in first) */}
      {motionOK ? (
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: TIMING.reveal, ease: EASING.out }}
          className="flex flex-col gap-3 md:border-r md:border-line md:pr-8"
        >
          <span className="font-label-sm text-xs uppercase tracking-wider text-ink-muted font-bold">
            {problemHeading}
          </span>
          <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
            {problemText}
          </p>
          {problemCallout && (
            <div className="p-3 bg-paper-raised border border-line text-xs font-mono text-ink-muted mt-2">
              {problemCallout}
            </div>
          )}
        </m.div>
      ) : (
        <div className="flex flex-col gap-3 md:border-r md:border-line md:pr-8">
          <span className="font-label-sm text-xs uppercase tracking-wider text-ink-muted font-bold">
            {problemHeading}
          </span>
          <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
            {problemText}
          </p>
          {problemCallout && (
            <div className="p-3 bg-paper-raised border border-line text-xs font-mono text-ink-muted mt-2">
              {problemCallout}
            </div>
          )}
        </div>
      )}

      {/* Solution column (slides in from right x: 16 -> 0, 150ms delay) */}
      {motionOK ? (
        <m.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{
            duration: TIMING.reveal,
            delay: 0.15,
            ease: EASING.out,
          }}
          className="flex flex-col gap-3 md:pl-4"
        >
          <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
            {solutionHeading}
          </span>
          <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
            {solutionText}
          </p>
          {solutionCallout && (
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: TIMING.base, delay: 0.35, ease: EASING.out }}
              className="p-3 bg-paper-raised border border-line text-xs font-mono text-secondary mt-2"
            >
              {solutionCallout}
            </m.div>
          )}
        </m.div>
      ) : (
        <div className="flex flex-col gap-3 md:pl-4">
          <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
            {solutionHeading}
          </span>
          <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
            {solutionText}
          </p>
          {solutionCallout && (
            <div className="p-3 bg-paper-raised border border-line text-xs font-mono text-secondary mt-2">
              {solutionCallout}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
