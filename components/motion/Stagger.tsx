'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function Stagger({
  children,
  staggerDelay = TIMING.stagger,
  className = '',
}: StaggerProps) {
  const motionOK = useMotionOK();

  if (!motionOK) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <m.div
      data-motion="stagger"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const motionOK = useMotionOK();

  if (!motionOK) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: TIMING.base,
        ease: EASING.out,
      },
    },
  };

  return (
    <m.div
      data-motion="stagger-item"
      variants={itemVariants}
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
    >
      {children}
    </m.div>
  );
}
