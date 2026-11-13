'use client';

import React from 'react';
import Link from 'next/link';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { CountUp } from '@/components/motion/CountUp';

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  plainEnglish: string;
  results: string[];
  tech: string[];
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Stagger className="flex flex-col divide-y divide-line border-y border-line">
      {projects.map((proj, idx) => (
        <StaggerItem key={proj.id}>
          <Link
            href={proj.slug}
            className="group py-8 px-4 sm:px-6 bg-surface hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary transition-colors duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-secondary group-hover:text-secondary-fixed group-focus-visible:text-secondary-fixed">
                  0{idx + 1}
                </span>
                <span className="text-ink-faint group-hover:text-line text-xs font-mono">/</span>
                <span className="font-label-sm text-xs uppercase text-ink-muted group-hover:text-line group-focus-visible:text-line">
                  {proj.role}
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary group-hover:text-on-primary group-focus-visible:text-on-primary transition-colors">
                {proj.title}
              </h3>

              {/* Plain-English Callout */}
              <p className="font-body-md text-sm sm:text-base text-primary group-hover:text-inverse-primary group-focus-visible:text-inverse-primary font-medium leading-relaxed bg-paper-sunken group-hover:bg-primary-container p-3 border-l-2 border-secondary transition-colors">
                {proj.plainEnglish}
              </p>

              {/* Three Result Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {proj.results.map((res, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-ink-muted group-hover:text-line group-focus-visible:text-line">
                    <span className="text-secondary group-hover:text-secondary-fixed font-bold">✓</span>
                    <span>
                      <CountUp value={res} />
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-paper-sunken group-hover:bg-primary-container border border-line group-hover:border-primary-container text-[11px] font-mono text-ink-muted group-hover:text-on-primary transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-secondary group-hover:text-secondary-fixed group-focus-visible:text-secondary-fixed font-label-timecode text-xs uppercase font-bold shrink-0 self-start lg:self-center">
              <span>View case study</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                arrow_forward
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
