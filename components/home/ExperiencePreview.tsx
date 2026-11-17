'use client';

import React from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING, VIEWPORT_CONFIG } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';
import type { EducationItem } from '@/content/facts';

interface RoleItem {
  title: string;
  company: string;
  location: string;
  period: string;
  plainSummary: string;
}

interface ExperiencePreviewProps {
  roles: RoleItem[];
  education?: EducationItem;
}

export function ExperiencePreview({ roles, education }: ExperiencePreviewProps) {
  const motionOK = useMotionOK();

  return (
    <div className="relative flex flex-col bg-surface border border-line">
      {/* Animated Vertical Line on the left */}
      {motionOK ? (
        <m.div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary origin-top pointer-events-none"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: TIMING.diagram, ease: EASING.out }}
        />
      ) : (
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary pointer-events-none" />
      )}

      <div className="flex flex-col divide-y divide-line">
        {roles.map((role) => (
          <div
            key={role.company}
            className="p-6 pl-8 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:bg-paper-raised transition-colors duration-150"
          >
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <span className="font-headline-md text-lg font-bold text-primary">{role.title}</span>
              <span className="font-label-sm text-xs text-ink-muted uppercase">
                {role.company} · {role.location}
              </span>
              <p className="font-body-md text-sm sm:text-base text-primary font-medium mt-1">
                {role.plainSummary}
              </p>
            </div>
            <span className="font-label-timecode text-xs font-bold text-secondary uppercase shrink-0">
              {role.period}
            </span>
          </div>
        ))}

        {education && (
          <div
            key={education.institution}
            className="p-6 pl-8 flex flex-col md:flex-row md:items-start justify-between gap-4 bg-paper-sunken/40 hover:bg-paper-raised transition-colors duration-150"
          >
            <div className="flex flex-col gap-1.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-headline-md text-lg font-bold text-primary">
                  {education.degree}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30 uppercase tracking-wider">
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <span className="font-label-sm text-xs text-ink-muted uppercase">
                {education.institution}{education.location ? ` · ${education.location}` : ''}
              </span>
              {education.highlights && education.highlights.length > 0 && (
                <p className="font-body-md text-sm sm:text-base text-ink-muted mt-1">
                  {education.highlights[0]}
                </p>
              )}
            </div>
            <span className="font-label-timecode text-xs font-bold text-secondary uppercase shrink-0">
              {education.period}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
