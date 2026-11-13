'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export function CopyButton({
  textToCopy,
  label,
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const motionOK = useMotionOK();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonContent = (
    <>
      <span
        className={`material-symbols-outlined text-[18px] transition-transform duration-150 ${
          copied ? 'scale-110 text-status-success' : ''
        }`}
        aria-hidden="true"
      >
        {copied ? 'check' : 'content_copy'}
      </span>
      <span>{copied ? 'Copied ✓' : label || `Email: ${textToCopy}`}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </>
  );

  if (!motionOK) {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${className}`}
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <m.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${className}`}
    >
      {buttonContent}
    </m.button>
  );
}
