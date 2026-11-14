'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/content/facts';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full flex flex-col">
      {/* Table Header Row (Desktop) */}
      <div className="hidden lg:grid grid-cols-12 gap-4 pb-3 border-b border-line text-xs font-mono font-bold uppercase text-ink-muted tracking-wider px-4 sm:px-6">
        <span className="col-span-1">No.</span>
        <span className="col-span-3">System / Platform</span>
        <span className="col-span-3">Role &amp; Domain</span>
        <span className="col-span-4">Verified Production Impact</span>
        <span className="col-span-1 text-right">Action</span>
      </div>

      {/* 5 Sleek Minimalist Index Rows */}
      <div className="flex flex-col divide-y divide-line border-y border-line">
        {projects.map((proj, idx) => {
          // Curated one-line high-impact production metrics for the index table
          const metricText =
            proj.id === 'visionfacts'
              ? '130+ live RTSP streams · ~6.5x less VRAM · 74% fewer alarms'
              : proj.id === 'analytics-agent'
              ? '2 LangGraph pipelines · FastMCP tools · < 3s query turnaround'
              : proj.id === 'edubotix'
              ? 'AWS Bedrock + Qdrant · 9 scientific engines · Verified page citations'
              : proj.id === 'drill-bit-inspection'
              ? 'Dual Hikrobot cameras · ±150–250 µm tolerance · 70% defect recall'
              : 'Dual Basler cameras · 50–250ms polarity · 89°–91° lead metrology';

          return (
            <Link
              key={proj.id}
              href={proj.slug}
              className="group py-4 sm:py-5 px-4 sm:px-6 bg-surface hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary transition-colors duration-150 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* 01, 02... Index */}
                <span className="font-mono text-xs sm:text-sm font-bold text-secondary group-hover:text-secondary-fixed shrink-0 w-6 sm:w-8">
                  0{idx + 1}
                </span>

                {/* Grid Columns on Large Screens */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-1 lg:gap-4 flex-1 min-w-0 items-center">
                  {/* Project Title */}
                  <div className="lg:col-span-3 flex flex-col min-w-0">
                    <span className="font-headline-md text-base sm:text-lg lg:text-xl font-bold text-primary group-hover:text-on-primary transition-colors truncate">
                      {proj.title}
                    </span>
                    {/* Subtitle visible on mobile/tablet */}
                    <span className="text-[11px] text-ink-muted group-hover:text-line truncate lg:hidden">
                      {proj.subtitle}
                    </span>
                  </div>

                  {/* Role & Category */}
                  <div className="hidden lg:flex lg:col-span-3 flex-col min-w-0">
                    <span className="font-label-sm text-xs uppercase font-semibold text-on-surface group-hover:text-on-primary truncate">
                      {proj.role}
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted group-hover:text-line truncate">
                      {proj.category}
                    </span>
                  </div>

                  {/* Impact Highlight */}
                  <div className="hidden lg:block lg:col-span-4 min-w-0">
                    <span className="font-mono text-xs text-ink-muted group-hover:text-line truncate block">
                      {metricText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Link / Arrow */}
              <div className="flex items-center gap-1 sm:gap-2 text-secondary group-hover:text-secondary-fixed font-label-timecode text-xs uppercase font-bold shrink-0">
                <span className="hidden sm:inline">Case Study</span>
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] transition-transform duration-150 group-hover:translate-x-1.5">
                  arrow_forward
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
