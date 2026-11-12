'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('App Router Boundary caught error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-error/30 bg-error/10 text-error text-xs font-mono tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-error"></span>
          Runtime Error
        </div>
        <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-on-surface">
          System Interruption
        </h1>
        <p className="text-outline text-sm sm:text-base leading-relaxed">
          An unexpected error occurred during execution. You can attempt to reset the application state or navigate back to safety.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded border border-primary bg-primary text-surface-container-lowest font-mono font-semibold text-sm hover:bg-primary-hover hover:border-primary-hover transition-colors"
          >
            Retry Execution
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded border border-outline/30 bg-surface-container-low text-on-surface font-mono text-sm hover:border-primary/50 transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
