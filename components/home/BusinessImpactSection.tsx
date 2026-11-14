'use client';

import React from 'react';
import { CountUp } from '@/components/motion/CountUp';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

export interface BusinessImpactItem {
  id: string;
  metric: string;
  metricLabel: string;
  badge: string;
  problem: string;
  solution: string;
  outcome: string;
}

interface BusinessImpactSectionProps {
  items: BusinessImpactItem[];
}

export function BusinessImpactSection({ items }: BusinessImpactSectionProps) {
  return (
    <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {items.map((item, idx) => (
        <StaggerItem key={item.id} className="h-full">
          <div className="p-6 sm:p-7 bg-paper-sunken border border-line flex flex-col justify-between h-full hover:border-secondary transition-colors duration-150 group">
            {/* Top Bar with Badge & Number */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-label-timecode text-xs uppercase font-bold text-secondary tracking-wider">
                  0{idx + 1} // {item.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
              </div>

              {/* Big Metric Callout */}
              <div className="flex flex-col">
                <span className="font-metric-numeral text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                  <CountUp value={item.metric} />
                </span>
                <span className="font-label-sm text-xs font-semibold uppercase text-ink-muted mt-1 tracking-wider">
                  {item.metricLabel}
                </span>
              </div>

              {/* Problem & Solution (Clean Editorial Hierarchy, No Double Nested Gray Boxes) */}
              <div className="flex flex-col gap-3.5 pt-3 border-t border-line text-xs sm:text-[13.5px] leading-relaxed">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary font-mono font-bold uppercase text-[11px] tracking-wider">
                    The Business Problem:
                  </span>
                  <p className="text-ink-muted leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-primary font-mono font-bold uppercase text-[11px] tracking-wider">
                    Engineering Solution:
                  </span>
                  <p className="text-on-surface leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Outcome Pill */}
            <div className="pt-4 mt-4 border-t border-line flex items-center justify-between text-xs">
              <span className="font-label-timecode text-ink-muted uppercase font-medium">Outcome:</span>
              <span className="px-2.5 py-1 bg-paper-raised border border-line rounded-full font-mono text-xs font-bold text-secondary">
                {item.outcome}
              </span>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
