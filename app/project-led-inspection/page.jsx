'use client';

import React from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  PROJECTS,
  LED_INSPECTION_OVERVIEW,
  LED_STAGES,
  LED_TOLERANCE_SPECS,
  LED_CHALLENGES,
  LED_CONTRIBUTIONS,
  LED_RESULTS,
  LED_TECH_PILLARS,
} from "@/content/facts";

import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";
import { LedInspectionVisualizer } from "@/components/project/LedInspectionVisualizer";

const JUMP_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'contribution', label: 'Contribution' },
  { id: 'stack', label: 'Tech Stack' },
];

export default function LedInspectionPage() {
  const project = PROJECTS.find((p) => p.id === 'led-inspection') || PROJECTS[PROJECTS.length - 1];

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
                  CASE STUDY: LED LEAD BENDING &amp; POLARITY INSPECTION
                </span>
              </div>
              <span className="font-label-timecode text-xs text-secondary font-medium">
                {LED_INSPECTION_OVERVIEW.tagline}
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[32px] xs:text-[44px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                {LED_INSPECTION_OVERVIEW.headlinePre}<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  {LED_INSPECTION_OVERVIEW.headlineHighlight}
                </span><br />
                {LED_INSPECTION_OVERVIEW.headlinePost}
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                {LED_INSPECTION_OVERVIEW.leadParagraph}
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
                  {LED_INSPECTION_OVERVIEW.plainEnglish}
                </p>

                {/* 4-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-y border-line py-4">
                  {LED_INSPECTION_OVERVIEW.stripMetrics.map((metric, idx) => (
                    <div key={metric.label} className={`flex flex-col ${idx > 0 ? 'lg:border-l lg:border-line lg:pl-4' : ''}`}>
                      <span className={`font-metric-numeral text-2xl sm:text-3xl font-bold ${metric.highlight ? 'text-secondary' : 'text-on-surface'}`}>
                        {metric.value.includes('%') ? <CountUp value={metric.value} /> : metric.value}
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
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-y-1">
                      arrow_downward
                    </span>
                  </a>

                  <StickyJumpBar sections={JUMP_SECTIONS} />
                </div>
              </div>
            </Reveal>

            {/* Interactive Dual-Station Machine Visualizer */}
            <LedInspectionVisualizer />
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
                  High-speed automated polarity sort &amp; right-angle lead forming.
                </h2>
              </div>
            </Reveal>

            {/* 2-Column Split: Problem vs Solution */}
            <ProblemSolutionRow
              problemText={LED_INSPECTION_OVERVIEW.problem}
              solutionText={LED_INSPECTION_OVERVIEW.solution}
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
                6-Stage Dual-Station Machine Vision &amp; Actuation Pipeline.
              </h2>
            </div>

            {/* Pipeline Stage Cards */}
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LED_STAGES.map((stage) => (
                <StaggerItem key={stage.number}>
                  <div className="p-6 bg-paper-raised border border-line hover:border-secondary transition-colors flex flex-col justify-between gap-4 h-full">
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-xs text-secondary uppercase font-bold">
                        STAGE {stage.number}
                      </span>
                      <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase">
                        {stage.plainTitle}
                      </h3>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {stage.plainDesc}
                      </p>
                    </div>
                    <span className="text-[10px] font-label-timecode text-ink-muted pt-2 border-t border-line">
                      {stage.techDesc}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* 4 Lead Forming Metrology Specs Table */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                    4 CRITICAL PARAMETERS AUDITED VIA PURE OPENCV CONTOURS &amp; EDGES
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-muted">CALIBRATED TELECENTRIC BACKLIGHT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {LED_TOLERANCE_SPECS.map((spec) => (
                  <div key={spec.parameter} className="p-4 bg-paper-sunken border border-line flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-secondary uppercase font-bold">{spec.toleranceLabel}</span>
                        <span className="font-mono text-[10px] text-ink-muted">{spec.unit}</span>
                      </div>
                      <h4 className="font-headline-md text-sm font-bold text-on-surface uppercase">{spec.parameter}</h4>
                      <p className="text-[11px] text-ink-muted leading-relaxed mt-1">{spec.description}</p>
                    </div>

                    <div className="pt-2 border-t border-line flex flex-col gap-1 font-mono text-[11px]">
                      <div className="flex justify-between text-ink-muted">
                        <span>Range:</span>
                        <span>{spec.lowerLimit} – {spec.upperLimit} {spec.unit}</span>
                      </div>
                      <div className="flex justify-between font-bold text-primary">
                        <span>Nominal SPEC:</span>
                        <span>{spec.spec} {spec.unit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                High-speed strobe optics &amp; sub-pixel geometry challenges.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {LED_CHALLENGES.map((item) => (
                <div key={item.number} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    {item.number}. {item.title}
                  </div>
                  <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                    <strong className="text-on-surface block mb-1">Problem:</strong>
                    {item.problem}
                  </div>
                  <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                    <strong className="text-secondary block mb-1">Fix &amp; Result:</strong>
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
                Production throughput &amp; zero defect leakage.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LED_RESULTS.map((res) => (
                <div key={res.label} className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-2">
                  <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">{res.label}</span>
                  {res.success ? (
                    <>
                      <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-1">
                        <CountUp value={res.value} />
                      </span>
                      <div className="w-full h-2 bg-surface/10 rounded-full overflow-hidden mt-1">
                        <GrowBar targetPercent={100} className="h-full bg-secondary" delay={0.3} />
                      </div>
                    </>
                  ) : (
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                      {res.value}
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
                Junior Vision Engineer Ownership at SS Automation.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {LED_CONTRIBUTIONS.map((item) => (
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
                Architectural pillars &amp; industrial vision stack.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LED_TECH_PILLARS.map((pillar) => (
                <div key={pillar.category} className="p-6 bg-paper-raised border border-line flex flex-col gap-3">
                  <span className="font-label-sm text-xs text-secondary uppercase font-bold">
                    {pillar.category}
                  </span>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface leading-relaxed font-mono">
                    {pillar.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 7: TRACE & FOOTER NAVIGATION */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 px-4 sm:px-6 lg:px-12 border-b border-line">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-6">
            <div className="p-4 bg-paper-sunken border border-line flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                <span className="text-primary font-bold">LIVE TELEMETRY TRACE:</span>
                <span className="text-ink-muted">{LED_INSPECTION_OVERVIEW.traceCalculation}</span>
              </div>
              <span className="text-secondary">{LED_INSPECTION_OVERVIEW.traceCitation}</span>
            </div>

            {/* Next / Previous Case Study Navigation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-line">
              <Link
                href="/project-drill-bit-inspection"
                className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-ink-muted hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>Previous: Drill Bit Inspection</span>
              </Link>

              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-paper-raised hover:bg-surface-container-high border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold text-primary transition-colors active:scale-[0.97]"
              >
                <span>All Case Studies</span>
              </Link>

              <Link
                href="/project-visionfacts"
                className="flex items-center justify-end gap-2 text-xs font-mono font-bold uppercase text-ink-muted hover:text-secondary transition-colors"
              >
                <span>Next: VisionFacts.ai</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
