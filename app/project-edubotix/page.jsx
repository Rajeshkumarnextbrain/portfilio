'use client';

import React from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  PROJECTS,
  EDUBOTIX_OVERVIEW,
  EDUBOTIX_COMPONENTS,
  EDUBOTIX_CHALLENGES,
  EDUBOTIX_CONTRIBUTIONS,
  EDUBOTIX_RESULTS,
  EDUBOTIX_TECH_PILLARS,
} from "@/content/facts";

import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { MemoryProgressionDiagram } from "@/components/project/MemoryProgressionDiagram";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";
import Icon from "@/components/Icon";

const JUMP_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'contribution', label: 'Contribution' },
];

export default function EdubotixPage() {
  const project = PROJECTS[2];

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO (Paper Surface) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="chapter-0">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Breadcrumb Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="font-label-sm text-xs text-ink-muted hover:text-secondary uppercase tracking-widest transition-colors">
                  HOME
                </Link>
                <span className="text-line">/</span>
                <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">
                  CASE STUDY: EDUBOTIX
                </span>
              </div>
              <span className="font-label-timecode text-xs text-secondary font-medium">
                {EDUBOTIX_OVERVIEW.tagline}
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[32px] xs:text-[44px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                {EDUBOTIX_OVERVIEW.headlinePre}<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  {EDUBOTIX_OVERVIEW.headlineHighlight}
                </span><br />
                {EDUBOTIX_OVERVIEW.headlinePost}
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                {EDUBOTIX_OVERVIEW.leadParagraph}
              </p>
            </div>

            {/* TOP "IN PLAIN ENGLISH" BLOCK */}
            <Reveal>
              <div className="p-6 bg-paper-sunken border border-line flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold font-mono">
                    IN PLAIN ENGLISH
                  </span>
                </div>

                <p className="font-body-lg text-sm sm:text-base text-on-surface leading-relaxed">
                  {EDUBOTIX_OVERVIEW.plainEnglish}
                </p>

                {/* 3-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                  {EDUBOTIX_OVERVIEW.stripMetrics.map((metric, idx) => (
                    <div key={metric.label} className={`flex flex-col ${idx > 0 ? 'sm:border-l sm:border-line sm:pl-4' : ''}`}>
                      <span className={`font-metric-numeral text-2xl sm:text-3xl font-bold ${metric.highlight ? 'text-secondary' : 'text-on-surface'}`}>
                        <CountUp value={metric.value} />
                      </span>
                      <span className="font-label-sm text-xs text-secondary font-semibold uppercase">{metric.label}</span>
                      <span className="text-xs text-ink-muted mt-1">{metric.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Metadata Block */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-label-timecode">
                  <div>
                    <span className="text-ink-muted block uppercase">MY ROLE:</span>
                    <span className="text-on-surface font-semibold">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block uppercase">COMPANY &amp; DATES:</span>
                    <span className="text-on-surface font-semibold">{project.companyDates}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted block uppercase">TECHNOLOGIES:</span>
                    <span className="text-on-surface font-semibold">{project.technologies}</span>
                  </div>
                </div>

                {/* Action Button & Jump Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-line">
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors group active:scale-[0.97]"
                  >
                    <span>Read technical deep dive</span>
                    <Icon name="arrow_downward" className="text-[16px] transition-transform duration-150 group-hover:translate-y-1" />
                  </a>

                  <StickyJumpBar sections={JUMP_SECTIONS} />
                </div>
              </div>
            </Reveal>

            {/* Worked Answer Panel */}
            <div className="relative p-6 bg-paper-raised border border-line flex flex-col gap-4">
              <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
              <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>

              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                  STEP-BY-STEP CALCULATION TRACE
                </span>
                <span className="font-label-timecode text-xs text-ink-muted">
                  VERIFIED WITH: PINT (SI UNITS) + SYMPY EVALUATOR
                </span>
              </div>

              <div className="p-3 bg-surface border border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-label-timecode text-ink-muted uppercase">CALCULATION VERIFIED:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-on-surface">{EDUBOTIX_OVERVIEW.traceCalculation}</span>
              </div>

              <div className="p-3 bg-surface border border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-label-timecode text-ink-muted uppercase">GROUNDED CITATION:</span>
                <span className="text-xs font-mono text-secondary font-semibold">{EDUBOTIX_OVERVIEW.traceCitation}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: THE PROBLEM & THE SOLUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="overview">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <Reveal>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                  01 / OVERVIEW
                </span>
                <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                  Why generic chatbots fail at STEM tutoring.
                </h2>
              </div>
            </Reveal>

            {/* 2-Column Split: Problem vs Solution with Animated ProblemSolutionRow */}
            <ProblemSolutionRow
              problemText={EDUBOTIX_OVERVIEW.problem}
              solutionText={EDUBOTIX_OVERVIEW.solution}
            />
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: FOR ENGINEERS: TECHNICAL DETAIL */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="how-it-works">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Engineer Divider */}
            <div className="flex items-center gap-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                For engineers: technical detail
              </span>
              <div className="flex-1">
                <DrawLine className="h-px w-full bg-line" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                02 / HOW IT WORKS
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Dense-sparse hybrid retrieval &amp; scientific tool execution.
              </h2>
            </div>

            {/* Architecture Cards with Stagger */}
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUBOTIX_COMPONENTS.map((comp) => (
                <StaggerItem key={comp.number}>
                  <div className="p-6 bg-paper-raised border border-line hover:border-secondary transition-colors flex flex-col justify-between gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-xs text-secondary uppercase font-bold">{comp.number}</span>
                      <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-label-timecode text-ink-muted pt-2 border-t border-line">
                      {comp.spec}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Progressive Session Memory Diagram */}
            <MemoryProgressionDiagram />
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: CHALLENGES & FIXES */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="challenges">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                03 / CHALLENGES AND FIXES
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Engineering hurdles &amp; resolutions.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {EDUBOTIX_CHALLENGES.map((item) => (
                <div key={item.number} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    {item.number}. {item.title}
                  </div>
                  <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                    <strong className="text-on-surface block mb-1">Problem:</strong>
                    {item.problem}
                  </div>
                  <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                    <strong className="text-secondary block mb-1">Fix & Result:</strong>
                    {item.fixResult}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                04 / RESULTS
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-surface uppercase tracking-tight">
                Pedagogical and system results.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EDUBOTIX_RESULTS.map((res) => (
                <div key={res.label} className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-2">
                  <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">{res.label}</span>
                  {res.hasBar ? (
                    <>
                      <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-1">
                        <CountUp value={res.value} />
                      </span>
                      <div className="w-full h-2 bg-surface/10 rounded-full overflow-hidden mt-1">
                        <GrowBar targetPercent={70} className="h-full bg-secondary" delay={0.3} />
                      </div>
                    </>
                  ) : res.success ? (
                    <span className="font-headline-lg text-lg sm:text-xl font-bold text-status-success mt-2">{res.value}</span>
                  ) : (
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                      <CountUp value={res.value} />
                    </span>
                  )}
                  <span className="text-xs text-ink-faint mt-1">{res.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 5: MY CONTRIBUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="contribution">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                05 / MY CONTRIBUTION
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Architectural ownership.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {EDUBOTIX_CONTRIBUTIONS.map((item) => (
                <div key={item.area} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                  <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">{item.area}</span>
                  <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: TECH STACK */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="stack">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                06 / TECH STACK
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Built with.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EDUBOTIX_TECH_PILLARS.map((pillar) => (
                <div key={pillar.category} className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                  <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">{pillar.category}</span>
                  <span className="text-xs font-semibold text-on-surface">{pillar.items}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CLOSING NAVIGATION & CTA */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-line divide-y md:divide-y-0 md:divide-x divide-line">
              <Link href="/project-analytics-agent" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">PREVIOUS PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">← Analytics Agent</span>
                <span className="text-xs text-ink-muted">Two pipelines (Ask &amp; Watch) across 5 data domains</span>
              </Link>
              <Link href="/project-drill-bit-inspection" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-secondary uppercase font-semibold">NEXT PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">Drill Bit Inspection Machine →</span>
                <span className="text-xs text-ink-muted">Dual Hikrobot cameras, ±150–250 µm metrology &amp; PLC reject</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
