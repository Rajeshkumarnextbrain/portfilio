'use client';

import React from 'react';
import { CountUp } from '@/components/motion/CountUp';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { Reveal } from '@/components/motion/Reveal';

interface MetricItem {
  value: string;
  title: string;
  caption: string;
}

interface IdentityInfo {
  targetRoles: string;
  noticePeriod: string;
  locationDetails: string;
  replyTime: string;
}

interface AtAGlanceSectionProps {
  metrics: MetricItem[];
  identity: IdentityInfo;
}

export function AtAGlanceSection({ metrics, identity }: AtAGlanceSectionProps) {
  return (
    <div className="flex flex-col gap-8">
      {/* 6 Ruled Metric Rows */}
      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((item) => (
          <StaggerItem key={item.title}>
            <div className="p-5 bg-surface border border-line flex flex-col gap-1.5 h-full hover:border-secondary transition-colors duration-150">
              <span className="font-metric-numeral text-3xl sm:text-4xl font-bold text-primary">
                <CountUp value={item.value} />
              </span>
              <span className="font-label-sm text-xs uppercase font-bold text-secondary tracking-wider">
                {item.title}
              </span>
              <p className="font-body-md text-sm text-ink-muted mt-1 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Career Facts Quick Strip */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-paper-raised border border-line font-label-sm text-xs">
          <div>
            <span className="text-ink-muted block uppercase">TARGET ROLES</span>
            <span className="font-semibold text-primary block mt-0.5">{identity.targetRoles}</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">NOTICE PERIOD</span>
            <span className="font-semibold text-secondary block mt-0.5">{identity.noticePeriod}</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">LOCATION</span>
            <span className="font-semibold text-primary block mt-0.5">{identity.locationDetails}</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">REPLY TIME</span>
            <span className="font-semibold text-status-success block mt-0.5">{identity.replyTime}</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
