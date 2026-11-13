'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to check if motion animations are allowed.
 * Returns false if the user prefers reduced motion or before client hydration.
 */
export function useMotionOK(): boolean {
  const [motionOK, setMotionOK] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionOK(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setMotionOK(!e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return motionOK;
}

/**
 * Hook to pause ambient loops when the browser tab is hidden.
 */
export function useDocumentVisible(): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return isVisible;
}
