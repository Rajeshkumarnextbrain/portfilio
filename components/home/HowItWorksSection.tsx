'use client';

import React from 'react';
import { m } from 'framer-motion';
import { FlowToken, FlowStep } from '@/components/motion/FlowToken';
import { GrowBar } from '@/components/motion/GrowBar';
import { CountUp } from '@/components/motion/CountUp';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

interface HowItWorksSectionProps {
  steps: FlowStep[];
  modelMemoryNaive: string; // e.g. "~32.5 GB"
  modelMemoryCentralized: string; // e.g. "~5 GB"
  memoryReduction: string; // e.g. "~6.5x less"
}

export function HowItWorksSection({
  steps,
  modelMemoryNaive,
  modelMemoryCentralized,
  memoryReduction,
}: HowItWorksSectionProps) {
  const motionOK = useMotionOK();

  return (
    <div className="flex flex-col gap-10">
      {/* 5 Architecture Steps with FlowToken */}
      <FlowToken steps={steps} />

      {/* Benchmark Comparison: Naive vs Centralized Triton */}
      <div className="p-6 bg-paper-raised border border-line flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
            MEMORY OPTIMIZATION BENCHMARK
          </span>
          <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
            Each camera loads its own model vs. One central server
          </h3>
          <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
            Measured in production across 130+ cameras on 2x NVIDIA L4 GPUs. Standard architectures replicate model weights per process; centralized Triton shared memory passes frame pointers with zero copying.
          </p>
        </div>

        <div className="w-full lg:w-96 flex flex-col gap-3 bg-surface p-4 border border-line">
          {/* Bar 1: Naive (100%) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono text-ink-muted">
              <span>Each camera loads its own model</span>
              <span className="font-bold text-primary">
                <CountUp value={modelMemoryNaive} />
              </span>
            </div>
            <div className="w-full h-4 bg-paper-sunken border border-line/40 overflow-hidden">
              <GrowBar targetPercent={100} className="h-full bg-outline-variant" delay={0.2} />
            </div>
          </div>

          {/* Bar 2: Central Triton (15.4%) */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs font-mono text-secondary font-bold">
              <span>One central Triton server</span>
              <span>
                <CountUp value={modelMemoryCentralized} />
              </span>
            </div>
            <div className="w-full h-4 bg-paper-sunken border border-line/40 overflow-hidden">
              <GrowBar targetPercent={15.4} className="h-full bg-secondary" delay={0.4} />
            </div>
          </div>

          {/* Pop Badge: ~6.5x less (scale 0.9 to 1, 200ms) */}
          <div className="pt-2 border-t border-line flex items-center justify-between">
            <span className="text-xs text-ink-muted">Memory efficiency gain:</span>
            {motionOK ? (
              <m.span
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.2, delay: 0.8, ease: EASING.out }}
                className="px-2 py-0.5 bg-signal-orange-tint text-secondary font-mono text-xs font-bold uppercase rounded"
              >
                {memoryReduction} GPU memory
              </m.span>
            ) : (
              <span className="px-2 py-0.5 bg-signal-orange-tint text-secondary font-mono text-xs font-bold uppercase rounded">
                {memoryReduction} GPU memory
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
