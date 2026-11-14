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
    <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <StaggerItem key={item.id}>
          <div className="relative p-6 sm:p-7 bg-surface border border-line flex flex-col justify-between gap-6 h-full hover:border-secondary transition-colors duration-150 group">
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

              {/* Problem & Solution Flow */}
              <div className="flex flex-col gap-3 pt-2 text-xs sm:text-sm leading-relaxed">
                <div className="p-3 bg-paper-sunken border border-line rounded-DEFAULT">
                  <span className="text-secondary font-mono font-bold uppercase text-[11px] block mb-0.5">
                    The Business Problem:
                  </span>
                  <p className="text-ink-muted">
                    {item.problem}
                  </p>
                </div>

                <div className="p-3 bg-paper-raised border border-line rounded-DEFAULT">
                  <span className="text-primary font-mono font-bold uppercase text-[11px] block mb-0.5">
                    Engineering Solution:
                  </span>
                  <p className="text-on-surface">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Outcome Strip */}
            <div className="pt-3 border-t border-line flex items-center justify-between font-label-timecode text-xs">
              <span className="text-ink-muted uppercase">MEASURED RESULT:</span>
              <span className="text-secondary font-bold text-right">
                {item.outcome}
              </span>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
