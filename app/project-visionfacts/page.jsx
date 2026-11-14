'use client';

import React from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  PROJECTS,
  VISIONFACTS_OVERVIEW,
  VISIONFACTS_STAGES,
  VISIONFACTS_SIMULATED_CAMERAS,
  VISIONFACTS_CHALLENGES,
  VISIONFACTS_CONTRIBUTIONS,
  VISIONFACTS_TECH_PILLARS,
} from "@/content/facts";

import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { FlowToken } from "@/components/motion/FlowToken";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";

const JUMP_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'contribution', label: 'Contribution' },
];

export default function VisionFactsFlagshipPage() {
  const project = PROJECTS[0];

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO (Paper Surface) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="chapter-0">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Breadcrumb Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="font-label-sm text-xs text-ink-muted hover:text-secondary uppercase tracking-widest transition-colors">
                  HOME
                </Link>
                <span className="text-line">/</span>
                <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">
                  CASE STUDY: VISIONFACTS.AI
                </span>
              </div>
              <span className="font-label-timecode text-xs text-secondary font-medium">
                {VISIONFACTS_OVERVIEW.tagline}
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[32px] xs:text-[44px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                {VISIONFACTS_OVERVIEW.headlinePre}<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  {VISIONFACTS_OVERVIEW.headlineHighlight}
                </span><br />
                {VISIONFACTS_OVERVIEW.headlinePost}
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                {VISIONFACTS_OVERVIEW.leadParagraph}
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
                  {VISIONFACTS_OVERVIEW.plainEnglish}
                </p>

                {/* 3-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                  {VISIONFACTS_OVERVIEW.stripMetrics.map((metric, idx) => (
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
                    <span className="text-on-surface font-semibold">{project.role} (80–85% engineering ownership)</span>
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

                  {/* Sticky Jump Bar with underline glide */}
                  <StickyJumpBar sections={JUMP_SECTIONS} />
                </div>
              </div>
            </Reveal>

            {/* Camera Visual Readout */}
            <div className="relative w-full p-2 bg-paper-sunken border border-line">
              <span className="absolute -top-2 -left-2 text-primary font-headline-lg select-none leading-none">⌜</span>
              <span className="absolute -top-2 -right-2 text-primary font-headline-lg select-none leading-none">⌝</span>
              <span className="absolute -bottom-2 -left-2 text-primary font-headline-lg select-none leading-none">⌞</span>
              <span className="absolute -bottom-2 -right-2 text-primary font-headline-lg select-none leading-none">⌟</span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 bg-on-surface p-2">
                {VISIONFACTS_SIMULATED_CAMERAS.map((cam) => (
                  <div key={cam.id} className="aspect-video bg-neutral-900 text-white p-3 flex flex-col justify-between border border-neutral-800">
                    <div className="flex justify-between items-center text-[10px] font-label-timecode">
                      <span>{cam.id} · {cam.name}</span>
                      <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                    </div>
                    <div className="border border-secondary/80 p-1 bg-secondary/10 self-center w-3/4 text-center">
                      <span className="text-[10px] font-mono text-secondary uppercase font-bold">{cam.detection}</span>
                    </div>
                    <span className="text-[9px] text-neutral-400 font-label-timecode">FPS: {cam.fps} · LATENCY: {cam.latency}</span>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between text-xs font-label-timecode text-ink-muted p-2 bg-paper-raised border-t border-line">
                <span>HARDWARE: {VERIFIED_NUMBERS.hardware}</span>
                <span>CENTRAL TRITON · TENSORRT FP32 · CUDA IPC SHARED MEMORY</span>
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
                  From passive recording to automatic intelligence.
                </h2>
              </div>
            </Reveal>

            {/* 2-Column Split: Problem vs Solution with Animated ProblemSolutionRow */}
            <ProblemSolutionRow
              problemText="Traditional CCTV relies on human operators staring at dozens of screens simultaneously. Operators experience cognitive fatigue within 20 minutes, leading to missed safety violations, unnoticed inventory damage, and delayed emergency responses."
              problemCallout="Key risk: Loading AI models inside each individual camera worker would require ~32.5 GB of redundant GPU VRAM, immediately crashing standard servers."
              solutionText="VisionFacts.ai connects directly to RTSP camera feeds, decodes frames in hardware, passes them via zero-copy shared memory to centralized AI models on Triton, and evaluates safety rules in real time."
              solutionCallout={`Key result: ~6.5x less GPU memory (~5 GB Triton combined vs ~32.5 GB) sustaining ${VERIFIED_NUMBERS.camerasCount} cameras on 2x NVIDIA L4 GPUs.`}
            />

            {/* GPU Memory Comparison Visualization (GrowBar) */}
            <div className="p-6 bg-paper-raised border border-line flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-1 max-w-lg">
                <span className="font-label-sm text-xs uppercase text-secondary font-bold">
                  GPU VRAM BENCHMARK (130+ CAMERAS)
                </span>
                <h3 className="font-headline-md text-lg sm:text-xl font-bold text-on-surface">
                  Per-Camera Replication vs. Centralized Triton Serving
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Replicating model weights across 130 worker processes creates ~32.5 GB of memory overhead. Centralized Triton serving with CUDA IPC handles passes frame pointers with zero duplication.
                </p>
              </div>

              <div className="w-full lg:w-80 flex flex-col gap-3 bg-surface p-4 border border-line">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-mono text-ink-muted">
                    <span>Naive model replication</span>
                    <span className="font-bold text-on-surface">~32.5 GB (100%)</span>
                  </div>
                  <div className="w-full h-3.5 bg-paper-sunken border border-line overflow-hidden">
                    <GrowBar targetPercent={100} className="h-full bg-outline-variant" delay={0.2} />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-mono text-secondary font-bold">
                    <span>Centralized Triton architecture</span>
                    <span>~5.0 GB (15.4%)</span>
                  </div>
                  <div className="w-full h-3.5 bg-paper-sunken border border-line overflow-hidden">
                    <GrowBar targetPercent={15.4} className="h-full bg-secondary" delay={0.4} />
                  </div>
                </div>

                <div className="pt-2 border-t border-line text-xs font-mono text-secondary font-bold flex justify-between">
                  <span>SAVINGS:</span>
                  <span>~6.5x LESS VRAM CONSUMPTION</span>
                </div>
              </div>
            </div>
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
                A frame&apos;s eight stages.
              </h2>
            </div>

            {/* 8 Pipeline Stage Cards using FlowToken */}
            <FlowToken steps={VISIONFACTS_STAGES} />
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
                What broke, and how I fixed it.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {VISIONFACTS_CHALLENGES.map((fix) => (
                <div key={fix.number} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    {fix.number}. {fix.title}
                  </div>
                  <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                    <strong className="text-on-surface block mb-1">Problem:</strong>
                    {fix.problem}
                  </div>
                  <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                    <strong className="text-secondary block mb-1">Fix &amp; Result:</strong>
                    {fix.fixResult}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: PRODUCTION RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                  04 / RESULTS &amp; BENCHMARKS
                </span>
              </div>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-surface uppercase tracking-tight">
                Measured in production.
              </h2>
              <span className="font-label-timecode text-xs text-ink-faint">
                GRAFANA 30-MINUTE SNAPSHOT · PRODUCTION CLUSTER BENCHMARKS
              </span>
            </div>

            {/* Hardware Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-surface/5 border border-surface-container-highest/20 font-label-timecode text-xs text-surface">
              <span>COMPUTE: {VERIFIED_NUMBERS.hardware}</span>
              <span>HOST LOAD: {VERIFIED_NUMBERS.hostCpuUtilization} CPU / {VERIFIED_NUMBERS.hostRamUtilization} RAM · {VERIFIED_NUMBERS.clusterCapacity}</span>
              <span>COST BENEFIT: {VERIFIED_NUMBERS.costSavingsPerCluster} SAVED PER CLUSTER</span>
            </div>

            {/* Production Numbers Grid with CountUp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">CAMERAS REGISTERED</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value={VERIFIED_NUMBERS.camerasCount} />
                </span>
                <span className="text-xs text-ink-faint mt-1">{VERIFIED_NUMBERS.camerasOnlineSnapshot} online in snapshot</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">PRIMARY MODEL THROUGHPUT</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-2">
                  <CountUp value={VERIFIED_NUMBERS.throughputPrimaryMean} />
                </span>
                <span className="text-xs text-ink-faint mt-1">Mean inference on primary model</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">MODEL EXECUTION TIME</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value={VERIFIED_NUMBERS.yolo26ExecutionMean} />
                </span>
                <span className="text-xs text-ink-faint mt-1">{VERIFIED_NUMBERS.yolo26QueueLatencyMean} queue latency · {VERIFIED_NUMBERS.yolo26PendingRequestsMean} pending</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">OTHER MODELS LATENCY</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value={VERIFIED_NUMBERS.otherModelsLatency} />
                </span>
                <span className="text-xs text-ink-faint mt-1">Lower-traffic safety models</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">END-TO-END FRAME LATENCY</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-2">
                  <CountUp value={VERIFIED_NUMBERS.latencyEndToEnd} />
                </span>
                <span className="text-xs text-ink-faint mt-1">Mean RTSP decode through dispatch</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">STREAM FRAME RATE</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value={VERIFIED_NUMBERS.streamRateAvg} />
                </span>
                <span className="text-xs text-ink-faint mt-1">Average FPS across 130+ feeds</span>
              </div>
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
                80–85% engineering ownership.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {VISIONFACTS_CONTRIBUTIONS.map((item, idx) => (
                <div key={idx} className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                  <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    {item.area}
                  </span>
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
              {VISIONFACTS_TECH_PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
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
              <Link href="/project-led-inspection" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">PREVIOUS PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">← LED Lead Bending &amp; Polarity</span>
                <span className="text-xs text-ink-muted">Basler cameras, 50–250ms polarity sort &amp; 90° lead metrology</span>
              </Link>
              <Link href="/project-analytics-agent" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-secondary uppercase font-semibold">NEXT PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">Analytics Agent →</span>
                <span className="text-xs text-ink-muted">Two pipelines (Ask &amp; Watch) across 5 data domains</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line text-xs font-label-timecode text-ink-muted">
              <div>
                © 2026 {IDENTITY.name} · {IDENTITY.location}
              </div>
              <div className="flex items-center gap-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary font-semibold hover:underline">
                  Email Rajesh
                </a>
                <span>·</span>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface">
                  LinkedIn
                </a>
                <span>·</span>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
