'use client';

import React from 'react';
import { EDUCATION, CERTIFICATIONS, COURSES } from '@/content/facts';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { DrawLine } from '@/components/motion/DrawLine';
import Icon from '@/components/Icon';

export function EducationSection() {
  if (!EDUCATION || EDUCATION.length === 0) {
    return null;
  }

  const displayCourses = (COURSES || []).slice(0, 6);

  return (
    <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 border-b border-line" id="education">
      <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
        {/* Header */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-secondary"></span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                CHAPTER 06 // EDUCATION
              </span>
            </div>
            <span className="font-label-timecode text-label-timecode text-secondary font-medium uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>

          <div className="flex items-center gap-4">
            <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
              Education &amp; Credentials.
            </h2>
            <div className="flex-1 hidden sm:block">
              <DrawLine className="h-px w-full bg-line" />
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
            Formal engineering foundations in computer science, systems design, and software engineering principles.
          </p>
        </div>

        {/* Content: Education Rows + Optional Certifications */}
        <Reveal>
          <div className={`grid grid-cols-1 ${CERTIFICATIONS && CERTIFICATIONS.length > 0 ? 'lg:grid-cols-12 gap-8' : 'gap-4'}`}>
            {/* Education Items List */}
            <div className={CERTIFICATIONS && CERTIFICATIONS.length > 0 ? 'lg:col-span-8 flex flex-col gap-4' : 'w-full flex flex-col gap-4'}>
              <Stagger className="flex flex-col border border-line divide-y divide-line bg-surface">
                {EDUCATION.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="p-6 flex flex-col gap-3 hover:bg-paper-raised transition-colors duration-150">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <div className="flex flex-col gap-0.5">
                          <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary">
                            {item.degree}
                          </h3>
                          <span className="font-label-sm text-xs sm:text-sm text-ink-muted uppercase">
                            {item.institution}{item.location ? ` · ${item.location}` : ''}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {item.grade && (
                            <span className="px-2 py-0.5 text-xs font-mono font-bold bg-secondary/10 text-secondary border border-secondary/30">
                              {item.grade}
                            </span>
                          )}
                          <span className="font-mono text-xs sm:text-sm font-bold text-secondary uppercase">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-2 border-t border-line/60">
                          <ul className="list-disc list-inside space-y-1 font-body-md text-xs sm:text-sm text-ink-muted">
                            {item.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* COURSES & TRAINING Block */}
              {displayCourses.length > 0 && (
                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="font-label-sm text-xs font-bold uppercase text-ink-muted tracking-wider">
                      COURSES &amp; TRAINING
                    </span>
                    <div className="flex-1">
                      <div className="h-px w-full bg-line" />
                    </div>
                  </div>

                  <div className="flex flex-col border border-line divide-y divide-line/60 bg-surface/40 text-xs">
                    {displayCourses.map((course, idx) => {
                      const inner = (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:px-4 hover:bg-paper-raised/60 transition-colors duration-150 group">
                          <div className="flex items-center gap-2 min-w-0">
                            {course.kind === 'certification' && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30 uppercase tracking-wider shrink-0">
                                CERTIFIED
                              </span>
                            )}
                            <span className="font-body-md text-xs sm:text-[13px] text-primary font-medium truncate group-hover:text-secondary transition-colors">
                              {course.title}
                            </span>
                            {course.url && (
                              <Icon
                                name="north_east"
                                className="text-[13px] text-ink-muted group-hover:text-secondary shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            )}
                          </div>

                          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-muted shrink-0">
                            <span>{course.provider}</span>
                            {course.year && (
                              <>
                                <span className="opacity-40">·</span>
                                <span>{course.year}</span>
                              </>
                            )}
                          </div>
                        </div>
                      );

                      if (course.url) {
                        return (
                          <a
                            key={idx}
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary"
                          >
                            {inner}
                          </a>
                        );
                      }

                      return <div key={idx}>{inner}</div>;
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Certifications (if non-empty) */}
            {CERTIFICATIONS && CERTIFICATIONS.length > 0 && (
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="font-label-sm text-xs uppercase font-bold text-ink-muted tracking-wider">
                  CERTIFICATIONS &amp; CREDENTIALS
                </span>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-surface border border-line flex flex-col gap-1 w-full hover:border-secondary transition-colors duration-150"
                    >
                      <span className="font-body-md text-sm font-bold text-primary">
                        {cert.name}
                      </span>
                      <div className="flex justify-between items-center text-xs font-mono text-ink-muted">
                        <span>{cert.issuer}</span>
                        {cert.year && <span>{cert.year}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
