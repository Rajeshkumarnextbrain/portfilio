import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  EXPERIENCE_ROLES,
} from "@/content/facts";

import { ExperienceScrubber } from "@/components/experience/ExperienceScrubber";
import { CameraGridDots } from "@/components/experience/CameraGridDots";
import { BlueprintFlow } from "@/components/experience/BlueprintFlow";
import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function ExperiencePage() {
  const nextbrainRole = EXPERIENCE_ROLES[0];
  const ssAutoRole = EXPERIENCE_ROLES[1];
  const vedantRole = EXPERIENCE_ROLES[2];

  return (
    <main className="w-full pt-16 pb-12 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-0">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Breadcrumb Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  CAREER &amp; LEADERSHIP · 4+ YEARS
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-timecode text-label-timecode text-ink-muted">
                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                <span>STATUS: {IDENTITY.availabilityStatus}</span>
              </div>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-space-md">
              <h1 className="font-mega-display text-[34px] xs:text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] text-on-surface tracking-tighter uppercase select-none">
                FOUR YEARS.<br />
                ONE <span className="relative inline-block bg-signal-orange-tint px-3 py-1 text-secondary -rotate-1">PIPELINE</span><br />
                AT A TIME.
              </h1>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-3xl leading-relaxed">
                A chronology of leading engineering teams, architecting real-time video analytics microservices across {VERIFIED_NUMBERS.camerasCount} live cameras, and deploying production AI systems that deliver measurable business savings.
              </p>
            </div>

            {/* Interactive Scrubber Bar */}
            <ExperienceScrubber />

            {/* Ruled Metric Register with CountUp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-line pt-space-lg">
              <div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value={IDENTITY.yearsExperience} />
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">YEARS IN PRODUCTION AI</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Computer vision, VLMs, and low-latency systems</span>
              </div>
              <div className="flex flex-col p-4 border-b sm:border-b-0 lg:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value={VERIFIED_NUMBERS.camerasCount} />
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">CAMERAS ANALYSED LIVE</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Zero-copy CUDA IPC &amp; centralized Triton serving</span>
              </div>
              <div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value="62%" />
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">LOWER MONTHLY GPU COST</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">TensorRT FP32 &amp; dynamic request batching</span>
              </div>
              <div className="flex flex-col p-4">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value={IDENTITY.teamSizeLed} />
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">ENGINEERS LED</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Sprint delivery, code reviews, and Nsight profiling</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: ROLE 1 · TEAM LEAD (Nextbrain Technologies) */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-1">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    ROLE 01 · {nextbrainRole.period}
                  </span>
                  <span className="bg-paper-raised px-2 py-0.5 font-label-sm text-[10px] text-status-success border border-line font-medium">
                    CURRENT ROLE
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">
                  ROLE ON FLAGSHIP: {nextbrainRole.flagshipRole}
                </span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                {nextbrainRole.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-ink-muted">
                <span className="font-semibold text-on-surface">{nextbrainRole.company}</span>
                <span>·</span>
                <span>{nextbrainRole.location}</span>
                <span>·</span>
                <span className="text-secondary font-medium">Domain: {nextbrainRole.domain}</span>
              </div>

              {/* Plain-English 1-liner with Fade */}
              <Reveal>
                <div className="p-4 bg-paper-raised border border-line mt-2">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                    {nextbrainRole.plainSummary}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Ruled Numbers Strip with CountUp */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
              <div className="flex flex-col">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value={VERIFIED_NUMBERS.camerasCount} />
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">CAMERAS LIVE</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Multi-stream video analytics in production</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value="74%" />
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">FEWER FALSE ALARMS</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Via zero-shot Gemma 3 E4B Vision-Language Model reasoning</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value="62%" />
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">LOWER MONTHLY GPU COST</span>
                <span className="font-body-sm text-body-sm text-ink-muted">TensorRT FP32 graph compilation and centralized Triton serving</span>
              </div>
            </div>

            {/* Plain-English Responsibility Rows Stagger */}
            <Stagger className="flex flex-col border-t border-line">
              {nextbrainRole.responsibilities.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4">
                    <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                      {item.area}
                    </div>
                    <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* FOR ENGINEERS DIVIDER & INSTRUMENT PANEL */}
            <div className="flex flex-col gap-6 pt-space-md">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1">
                  <DrawLine className="h-px w-full bg-line" />
                </div>
              </div>

              {/* Dual L4 GPU Cluster Snapshot */}
              <div className="relative bg-paper-raised p-6 sm:p-8 border border-line">
                <span className="absolute -top-2 -left-2 text-primary font-headline-lg select-none leading-none">⌜</span>
                <span className="absolute -top-2 -right-2 text-primary font-headline-lg select-none leading-none">⌝</span>
                <span className="absolute -bottom-2 -left-2 text-primary font-headline-lg select-none leading-none">⌞</span>
                <span className="absolute -bottom-2 -right-2 text-primary font-headline-lg select-none leading-none">⌟</span>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">CLUSTER SNAPSHOT</span>
                      <span className="font-headline-md text-body-md font-semibold text-on-surface">
                        {VERIFIED_NUMBERS.hardware}
                      </span>
                    </div>
                    <span className="font-label-timecode text-label-timecode text-ink-muted">
                      SNAPSHOT: {VERIFIED_NUMBERS.camerasOnlineSnapshot}
                    </span>
                  </div>

                  {/* Instrument Readouts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Camera Dot Grid Sequence */}
                    <div className="flex flex-col justify-between">
                      <CameraGridDots />
                      <div className="mt-2 text-[11px] font-mono text-ink-muted">
                        Hardware NVDEC 1080p stream decoding
                      </div>
                    </div>

                    {/* Cluster Capacity Gauge */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <div className="flex justify-between items-center text-xs font-mono text-ink-muted uppercase">
                        <span>CLUSTER SUSTAINED LOAD</span>
                        <span className="text-secondary font-bold">
                          <CountUp value="88%" />
                        </span>
                      </div>
                      <div className="w-full h-4 bg-paper-sunken border border-line/40 overflow-hidden">
                        <GrowBar targetPercent={88} className="h-full bg-secondary" delay={0.2} />
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        80.1% CPU / 87.7% RAM · Zero OOM crashes
                      </span>
                    </div>

                    {/* Latency & Savings */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <span className="font-label-sm text-xs text-ink-muted uppercase">Throughput &amp; Frame Latency</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                          <CountUp value={VERIFIED_NUMBERS.latencyEndToEnd} />
                        </span>
                        <span className="text-xs text-ink-muted">mean frame latency</span>
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        {VERIFIED_NUMBERS.throughputPrimaryMean} · Saved {VERIFIED_NUMBERS.costSavingsPerCluster}
                      </span>
                    </div>
                  </div>

                  {/* Telemetry specs */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-line font-label-sm text-label-sm text-ink-muted gap-4">
                    <div>PRECISION: <span className="text-on-surface font-semibold">{VERIFIED_NUMBERS.precisionDetection}</span></div>
                    <div>TRANSPORT: <span className="text-on-surface font-semibold">CUDA IPC ZERO-COPY SHARED MEMORY</span></div>
                    <div>SAVINGS: <span className="text-secondary font-semibold">{VERIFIED_NUMBERS.costSavingsPerCluster}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Chips Stagger */}
            <div className="flex flex-wrap gap-2 pt-2">
              {nextbrainRole.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-paper-raised hover:border-secondary hover:text-secondary px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface transition-colors duration-150 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: ROLE 2 · JUNIOR VISION ENGINEER (SS Automation) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-2">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-on-surface"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    ROLE 02 · {ssAutoRole.period}
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">INDUSTRIAL MACHINE VISION</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                {ssAutoRole.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-ink-muted">
                <span className="font-semibold text-on-surface">{ssAutoRole.company}</span>
                <span>·</span>
                <span>{ssAutoRole.location}</span>
                <span>·</span>
                <span className="text-secondary font-medium">Domain: {ssAutoRole.domain}</span>
              </div>

              {/* Plain-English summary */}
              <Reveal>
                <div className="p-4 bg-paper-sunken border border-line mt-2">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                    {ssAutoRole.plainSummary}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Ruled Numbers Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
              <div className="flex flex-col">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                  <CountUp value="70–85%" />
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">DEFECT DETECTION ACCURACY</span>
                <span className="font-body-sm text-body-sm text-ink-muted">On factory lines with variable reflections</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">Jetson</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">EMBEDDED EDGE HARDWARE</span>
                <span className="font-body-sm text-body-sm text-ink-muted">NVIDIA Nano &amp; Xavier NX edge inference</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">PLC</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">INDUSTRIAL INTEGRATION</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Hardware triggers and pneumatic line reject mechanisms</span>
              </div>
            </div>

            {/* Plain-English Responsibility Rows */}
            <Stagger className="flex flex-col border-t border-line">
              {ssAutoRole.responsibilities.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4">
                    <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                      {item.area}
                    </div>
                    <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ssAutoRole.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-paper-raised hover:border-secondary hover:text-secondary px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface transition-colors duration-150 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: ROLE 3 · TECHNICAL SUPPORT ENGINEER (Vedant / DRDO) */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 border-b border-surface-container-highest/20" id="chapter-3">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                    ROLE 03 · {vedantRole.period}
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-faint">DEFENSE RESEARCH VALIDATION</span>
              </div>

              <h2 className="font-display text-display text-surface uppercase tracking-tight">
                {vedantRole.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-ink-faint">
                <span className="font-semibold text-surface">{vedantRole.company}</span>
                <span>·</span>
                <span>{vedantRole.location}</span>
                <span>·</span>
                <span className="text-secondary font-medium">Domain: {vedantRole.domain}</span>
              </div>

              {/* Plain-English summary */}
              <Reveal>
                <div className="p-4 bg-surface/5 border border-surface-container-highest/20 mt-2">
                  <p className="font-body-md text-body-md text-surface leading-relaxed">
                    <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                    {vedantRole.plainSummary}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Ruled Numbers Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-y border-surface-container-highest/20 py-space-lg gap-6">
              <div className="flex flex-col">
                <span className="font-headline-lg text-headline-lg font-bold text-surface">REAL-TIME</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">STREAM PROCESSING</span>
                <span className="font-body-sm text-body-sm text-ink-faint">Synchronous telemetry ingest under defense protocols</span>
              </div>
              <div className="flex flex-col md:border-l md:border-surface-container-highest/20 md:pl-6">
                <span className="font-headline-lg text-headline-lg font-bold text-surface">KALMAN FILTERING</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">TRAJECTORY SMOOTHING</span>
                <span className="font-body-sm text-body-sm text-ink-faint">Kinematic state estimation and false track termination</span>
              </div>
            </div>

            {/* Plain-English Responsibility Rows */}
            <Stagger className="flex flex-col border-t border-surface-container-highest/20">
              {vedantRole.responsibilities.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-space-lg border-b border-surface-container-highest/20 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-surface/5 transition-colors p-4">
                    <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-surface uppercase font-semibold">
                      {item.area}
                    </div>
                    <div className="md:col-span-8 font-body-md text-body-md text-ink-faint leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {vedantRole.techStack.map((tech) => (
                <span key={tech} className="bg-surface/10 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/30 text-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: HOW I LEAD A TEAM */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-4">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    LEADERSHIP PRACTICE
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">ENGINEERING EXCELLENCE</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                How I lead a team.
              </h2>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
                Protocols, review standards, and profiling cadences I enforce across AI engineering teams to guarantee production reliability.
              </p>
            </div>

            {/* 3 Plain-English Leadership Rows with Hover Fill */}
            <div className="flex flex-col border-t border-line">
              <div className="py-space-xl px-6 bg-paper-raised hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary text-on-surface border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" tabIndex={0}>
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-secondary group-hover:text-secondary-fixed group-focus-visible:text-secondary-fixed font-semibold uppercase">
                    <span>STAGE 01 · TEAM LEADERSHIP &amp; PROFILING</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-on-primary group-focus-visible:text-on-primary uppercase transition-colors">
                    Nsight GPU Profiling &amp; Bi-weekly Reviews
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-inverse-primary group-focus-visible:text-inverse-primary leading-relaxed transition-colors">
                    Led {IDENTITY.teamSizeLed} across computer vision and GenAI sprints. Instituted profiling checks using NVIDIA Nsight Systems and Nsight Compute, eliminating GPU memory leaks and CUDA race conditions before code merges to master.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-secondary text-on-secondary group-hover:bg-primary-container group-hover:text-white px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider transition-colors">
                    Bi-weekly Sprints
                  </span>
                </div>
              </div>

              <div className="py-space-xl px-6 bg-paper-sunken hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary text-on-surface border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" tabIndex={0}>
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-ink-muted group-hover:text-line group-focus-visible:text-line font-semibold uppercase">
                    <span>STAGE 02 · OBSERVABILITY &amp; TELEMETRY</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-on-primary group-focus-visible:text-on-primary uppercase transition-colors">
                    Real-Time Prometheus &amp; Grafana Monitoring
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-inverse-primary group-focus-visible:text-inverse-primary leading-relaxed transition-colors">
                    Built real-time telemetry dashboards tracking dropped frames, decode latency, model inference execution, and queue depth across {VERIFIED_NUMBERS.camerasCount} camera feeds with automated anomaly alerting.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-paper-raised group-hover:bg-primary-container group-hover:text-white border border-line text-on-surface px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider transition-colors">
                    Zero Blindspots
                  </span>
                </div>
              </div>

              <div className="py-space-xl px-6 bg-paper-sunken hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary text-on-surface border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" tabIndex={0}>
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-ink-muted group-hover:text-line group-focus-visible:text-line font-semibold uppercase">
                    <span>STAGE 03 · DEPLOYMENT RIGOR</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-on-primary group-focus-visible:text-on-primary uppercase transition-colors">
                    Canary Rollouts &amp; Zero-Downtime Serving
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-inverse-primary group-focus-visible:text-inverse-primary leading-relaxed transition-colors">
                    Standardized model serving repositories on NVIDIA Triton with automated canary rollouts, strict version control, and health check validation, ensuring zero video analytics downtime during production model updates.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-paper-raised group-hover:bg-primary-container group-hover:text-white border border-line text-on-surface px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider transition-colors">
                    Zero Downtime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 5: BLUEPRINT (Under "For engineers" divider) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-5">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1">
                  <DrawLine className="h-px w-full bg-line" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    SYSTEM BLUEPRINT
                  </span>
                </div>
                <span className="font-label-timecode text-secondary font-medium">HIGH-THROUGHPUT PIPELINE</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                A frame&apos;s journey.
              </h2>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
                Multi-stream RTSP and VLM pipeline engineered for zero CPU PCIe bottlenecks and deterministic execution.
              </p>
            </div>

            {/* 4 Architecture Flow Nodes with FlowToken */}
            <BlueprintFlow />

            {/* Telemetry Notice */}
            <div className="bg-paper-sunken p-4 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-label-sm text-label-sm">
              <span className="text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                VERIFIED SNAPSHOT: {VERIFIED_NUMBERS.latencyEndToEnd} mean frame latency · {VERIFIED_NUMBERS.throughputPrimaryMean}
              </span>
              <span className="font-label-timecode text-label-timecode text-ink-muted">
                {VERIFIED_NUMBERS.hardware}
              </span>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: CALL TO ACTION */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20" id="chapter-6">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-surface-container-highest/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">GET IN TOUCH</span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-faint">
                  NOTICE: {IDENTITY.noticePeriod} · {IDENTITY.replyTime}
                </span>
              </div>

              <h2 className="font-mega-display text-[34px] xs:text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] text-surface tracking-tight uppercase select-none">
                Need someone to lead the next pipeline?
              </h2>

              <p className="font-body-lg text-body-lg text-ink-faint max-w-3xl leading-relaxed">
                Open to {IDENTITY.targetRoles}. {IDENTITY.location} ({IDENTITY.locationDetails}). Inquiries answered {IDENTITY.replyTime}.
              </p>
            </div>

            {/* Action Buttons with Stagger */}
            <div className="flex flex-wrap items-center gap-4 pt-space-md">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-full hover:bg-signal-orange-hover transition-colors font-semibold active:scale-[0.97] group"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Email Rajesh</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href={CONTACT_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors font-medium active:scale-[0.97] group"
              >
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-y-[2px]">
                  download
                </span>
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors active:scale-[0.97] group"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  north_east
                </span>
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors active:scale-[0.97] group"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  north_east
                </span>
              </a>
            </div>

            {/* Bottom Strip */}
            <div className="pt-space-lg border-t border-surface-container-highest/20 flex flex-wrap justify-between items-center font-label-timecode text-label-timecode text-ink-faint gap-4">
              <div className="flex items-center gap-3">
                <span>{IDENTITY.name}</span>
                <span>·</span>
                <span>{IDENTITY.location}</span>
                <span>·</span>
                <span>{IDENTITY.timezone}</span>
              </div>
              <div>
                © 2026 {IDENTITY.name}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
