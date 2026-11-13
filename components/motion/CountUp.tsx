'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

export function CountUp({ value, className = '', duration = 0.8 }: CountUpProps) {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [displayValue, setDisplayValue] = useState<string>(value);

  // Parse prefix, numeric target, decimals, commas, and suffix
  const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/,/g, '') : '';
  const suffix = match ? match[3] : '';
  const targetNumber = parseFloat(numStr);
  const hasComma = match ? match[2].includes(',') : false;
  const decimalPlaces = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    if (!isInView || !motionOK || isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    const durationMs = duration * 1000;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      const easedProgress = easeOutCubic(progress);
      const current = easedProgress * targetNumber;

      let formattedNumber: string;
      if (decimalPlaces > 0) {
        formattedNumber = current.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.round(current).toString();
      }

      if (hasComma) {
        const parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNumber = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // ensure exact final value
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, motionOK, targetNumber, prefix, suffix, value, duration, decimalPlaces, hasComma]);

  return (
    <span
      ref={ref}
      aria-label={value}
      className={`tabular-nums inline-block ${className}`}
      data-motion="count-up"
    >
      {/* Visual animated count */}
      {displayValue}
    </span>
  );
}
