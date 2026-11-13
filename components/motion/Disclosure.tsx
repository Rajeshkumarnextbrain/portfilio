'use client';

import React, { useId } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface DisclosureProps {
  index: string | number;
  question: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function Disclosure({
  index,
  question,
  isOpen,
  onToggle,
  children,
}: DisclosureProps) {
  const motionOK = useMotionOK();
  const contentId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-line py-4">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary py-1"
      >
        <div className="flex items-center gap-4">
          <span className="font-label-timecode text-ink-muted text-sm font-mono">
            {typeof index === 'number' && index < 10 ? `0${index}` : index}
          </span>
          <span className="font-headline-md text-body-md sm:text-headline-md text-on-surface group-hover:text-secondary group-focus-visible:text-secondary transition-colors font-semibold">
            {question}
          </span>
        </div>
        <span
          className={`font-headline-md text-ink-muted text-xl shrink-0 ml-3 transition-transform duration-200 ${
            isOpen ? 'rotate-45 text-secondary' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {motionOK ? (
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: TIMING.base,
                ease: EASING.out,
              }}
              className="overflow-hidden"
            >
              <div className="pt-3 pl-8 sm:pl-10 max-w-3xl">
                {children}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      ) : (
        isOpen && (
          <div id={contentId} role="region" aria-labelledby={buttonId} className="pt-3 pl-8 sm:pl-10 max-w-3xl">
            {children}
          </div>
        )
      )}
    </div>
  );
}
