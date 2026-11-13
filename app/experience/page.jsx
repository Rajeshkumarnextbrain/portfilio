'use client';

import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  EXPERIENCE_ROLES,
} from "@/content/facts";

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
        <section className="w-full bg-surface py-space-chapter border-b border-line" id="chapter-0">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Breadcrumb Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  CAREER & LEADERSHIP · 4+ YEARS
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

            {/* Timeline Overview Strip */}
            <div className="flex flex-col gap-3 pt-space-md">
              <div className="flex flex-wrap items-center justify-between gap-2 font-label-sm text-xs text-ink-muted uppercase">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-secondary">timeline</span>
                  CAREER TIMELINE · MAY 2022 — PRESENT
                </span>
                <span className="font-label-timecode text-secondary font-medium">BANGALORE, INDIA</span>
              </div>

              {/* Responsive Scrubber / Stage Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2 bg-paper-sunken border border-line">
                {/* Role 3 */}
                <a
                  href="#chapter-3"
                  className="md:col-span-3 p-3 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between text-[11px] font-label-timecode text-ink-muted">
                    <span>MAY 2022 – JUL 2022</span>
                    <span className="font-mono">03</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-body-sm font-bold text-on-surface">Vedant Tech (DRDO)</div>
                    <div className="text-[12px] text-ink-muted truncate">Technical Support Engineer</div>
                  </div>
                </a>

                {/* Role 2 */}
                <a
                  href="#chapter-2"
                  className="md:col-span-4 p-3 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between text-[11px] font-label-timecode text-ink-muted">
                    <span>JUL 2022 – JUL 2023</span>
                    <span className="font-mono">02</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-body-sm font-bold text-on-surface">SS Automation Solutions</div>
                    <div className="text-[12px] text-ink-muted truncate">Junior Vision Engineer</div>
                  </div>
                </a>

                {/* Role 1 */}
                <a
                  href="#chapter-1"
                  className="md:col-span-5 p-3 bg-secondary text-on-secondary transition-opacity hover:opacity-95 flex flex-col justify-between gap-2 shadow-sm"
                >
                  <div className="flex items-center justify-between text-[11px] font-label-timecode text-on-secondary/80">
                    <span className="flex items-center gap-1.5 font-bold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      AUG 2023 – PRESENT · CURRENT
                    </span>
                    <span className="font-mono">01</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-body-sm font-bold text-white">Nextbrain Technologies</div>
                    <div className="text-[12px] text-white/90 font-medium">Team Lead – AI & Computer Vision</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Ruled Metric Register */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-line pt-space-lg">
              <div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">{IDENTITY.yearsExperience}</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">YEARS IN PRODUCTION AI</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Computer vision, VLMs, and low-latency systems</span>
              </div>
              <div className="flex flex-col p-4 border-b sm:border-b-0 lg:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">{VERIFIED_NUMBERS.camerasCount}</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">CAMERAS ANALYSED LIVE</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Zero-copy CUDA IPC & centralized Triton serving</span>
              </div>
              <div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">62%</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">LOWER MONTHLY GPU COST</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">TensorRT FP32 & dynamic request batching</span>
              </div>
              <div className="flex flex-col p-4">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">{IDENTITY.teamSizeLed}</span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">ENGINEERS LED</span>
                <span className="font-body-sm text-body-sm text-ink-muted mt-2">Sprint delivery, code reviews, and Nsight profiling</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: ROLE 1 · TEAM LEAD (Nextbrain Technologies) */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-space-chapter border-b border-line" id="chapter-1">
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

              {/* Plain-English 1-liner */}
              <div className="p-4 bg-paper-raised border border-line mt-2">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                  {nextbrainRole.plainSummary}
                </p>
              </div>
            </div>

            {/* Ruled Numbers Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
              <div className="flex flex-col">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">{VERIFIED_NUMBERS.camerasCount}</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">CAMERAS LIVE</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Multi-stream video analytics in production</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">74%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">FEWER FALSE ALARMS</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Via zero-shot Gemma 3 E4B Vision-Language Model reasoning</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">62%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">LOWER MONTHLY GPU COST</span>
                <span className="font-body-sm text-body-sm text-ink-muted">TensorRT FP32 graph compilation and centralized Triton serving</span>
              </div>
            </div>

            {/* Plain-English Responsibility Rows */}
            <div className="flex flex-col border-t border-line">
              {nextbrainRole.responsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4"
                >
                  <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                    {item.area}
                  </div>
                  <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* FOR ENGINEERS DIVIDER & INSTRUMENT PANEL */}
            <div className="flex flex-col gap-6 pt-space-md">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1 h-px bg-line"></div>
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
                      SNAPSHOT: {VERIFIED_NUMBERS.camerasOnlineSnapshot} CAMERAS ONLINE
                    </span>
                  </div>

                  {/* Instrument Readouts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Throughput */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <span className="font-label-sm text-xs text-ink-muted uppercase">Primary Model (YOLO26)</span>
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        {VERIFIED_NUMBERS.throughputPrimaryMean}
                      </span>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        Mean execution: {VERIFIED_NUMBERS.yolo26ExecutionMean} · Queue latency: {VERIFIED_NUMBERS.yolo26QueueLatencyMean}
                      </span>
                    </div>

                    {/* Latency & Stream Rate */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <span className="font-label-sm text-xs text-ink-muted uppercase">Latency & Stream Rate</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                          {VERIFIED_NUMBERS.latencyEndToEnd}
                        </span>
                        <span className="text-xs text-ink-muted">mean frame latency</span>
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        {VERIFIED_NUMBERS.otherModelsLatency} · Average stream rate: {VERIFIED_NUMBERS.streamRateAvg}
                      </span>
                    </div>

                    {/* Utilization & Savings */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <span className="font-label-sm text-xs text-ink-muted uppercase">Host & GPU Efficiency</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-secondary">
                          ~6.5x less
                        </span>
                        <span className="text-xs text-ink-muted">model memory</span>
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        ~5 GB centralized Triton vs ~32.5 GB · Saved {VERIFIED_NUMBERS.costSavingsPerCluster}
                      </span>
                    </div>
                  </div>

                  {/* Telemetry specs */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-line font-label-sm text-label-sm text-ink-muted gap-4">
                    <div>PRECISION: <span className="text-on-surface font-semibold">{VERIFIED_NUMBERS.precisionDetection}</span></div>
                    <div>TRANSPORT: <span className="text-on-surface font-semibold">CUDA IPC ZERO-COPY SHARED MEMORY</span></div>
                    <div>CLUSTER CAPACITY: <span className="text-secondary font-semibold">{VERIFIED_NUMBERS.clusterCapacity}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {nextbrainRole.techStack.map((tech) => (
                <span key={tech} className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: ROLE 2 · JUNIOR VISION ENGINEER (SS Automation) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-chapter border-b border-line" id="chapter-2">
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
              <div className="p-4 bg-paper-sunken border border-line mt-2">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                  {ssAutoRole.plainSummary}
                </p>
              </div>
            </div>

            {/* Ruled Numbers Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
              <div className="flex flex-col">
                <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">70–85%</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">DEFECT DETECTION ACCURACY</span>
                <span className="font-body-sm text-body-sm text-ink-muted">On factory lines with variable reflections</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">Jetson</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">EMBEDDED EDGE HARDWARE</span>
                <span className="font-body-sm text-body-sm text-ink-muted">NVIDIA Nano & Xavier NX edge inference</span>
              </div>
              <div className="flex flex-col md:border-l md:border-line md:pl-6">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface">PLC</span>
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">INDUSTRIAL INTEGRATION</span>
                <span className="font-body-sm text-body-sm text-ink-muted">Hardware triggers and pneumatic line reject mechanisms</span>
              </div>
            </div>

            {/* Plain-English Responsibility Rows */}
            <div className="flex flex-col border-t border-line">
              {ssAutoRole.responsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4"
                >
                  <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                    {item.area}
                  </div>
                  <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ssAutoRole.techStack.map((tech) => (
                <span key={tech} className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: ROLE 3 · TECHNICAL SUPPORT ENGINEER (Vedant / DRDO) */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-space-chapter border-b border-surface-container-highest/20" id="chapter-3">
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
              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 mt-2">
                <p className="font-body-md text-body-md text-surface leading-relaxed">
                  <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                  {vedantRole.plainSummary}
                </p>
              </div>
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
            <div className="flex flex-col border-t border-surface-container-highest/20">
              {vedantRole.responsibilities.map((item, idx) => (
                <div
                  key={idx}
                  className="py-space-lg border-b border-surface-container-highest/20 grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-surface/5 transition-colors p-4"
                >
                  <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-surface uppercase font-semibold">
                    {item.area}
                  </div>
                  <div className="md:col-span-8 font-body-md text-body-md text-ink-faint leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips (Cleaned: MATLAB and C++ removed per guidelines) */}
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
        <section className="w-full bg-paper-sunken py-space-chapter border-b border-line" id="chapter-4">
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

            {/* 3 Plain-English Leadership Rows */}
            <div className="flex flex-col border-t border-line">
              {/* Row 1 */}
              <div className="py-space-xl px-6 bg-paper-raised text-on-surface border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-secondary font-semibold uppercase">
                    <span>STAGE 01 · TEAM LEADERSHIP & PROFILING</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    Nsight GPU Profiling & Bi-weekly Reviews
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Led {IDENTITY.teamSizeLed} across computer vision and GenAI sprints. Instituted profiling checks using NVIDIA Nsight Systems and Nsight Compute, eliminating GPU memory leaks and CUDA race conditions before code merges to master.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-secondary text-on-secondary px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider">
                    Bi-weekly Sprints
                  </span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="py-space-xl px-6 bg-paper-sunken hover:bg-paper-raised text-on-surface transition-colors border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-ink-muted font-semibold uppercase">
                    <span>STAGE 02 · OBSERVABILITY & TELEMETRY</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    Real-Time Prometheus & Grafana Monitoring
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Built real-time telemetry dashboards tracking dropped frames, decode latency, model inference execution, and queue depth across {VERIFIED_NUMBERS.camerasCount} camera feeds with automated anomaly alerting.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-paper-raised border border-line text-on-surface px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider">
                    Zero Blindspots
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="py-space-xl px-6 bg-paper-sunken hover:bg-paper-raised text-on-surface transition-colors border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-3xl">
                  <div className="flex items-center gap-2 font-label-sm text-xs text-ink-muted font-semibold uppercase">
                    <span>STAGE 03 · DEPLOYMENT RIGOR</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    Canary Rollouts & Zero-Downtime Serving
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Standardized model serving repositories on NVIDIA Triton with automated canary rollouts, strict version control, and health check validation, ensuring zero video analytics downtime during production model updates.
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="bg-paper-raised border border-line text-on-surface px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider">
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
        <section className="w-full bg-surface py-space-chapter border-b border-line" id="chapter-5">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1 h-px bg-line"></div>
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

            {/* 4 Architecture Flow Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Node 1 */}
              <div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
                <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
                <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-[10px] text-ink-muted uppercase font-bold">NODE 01 · INGEST</span>
                  <h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">
                    {VERIFIED_NUMBERS.camerasCount} Feeds Ingest & Decode
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    RTSP ingest with NVDEC hardware decoding directly into GPU memory buffers, bypassing host CPU bottlenecks.
                  </p>
                </div>
                <div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
                  HW NVDEC · H.264 / H.265
                </div>
              </div>

              {/* Node 2 */}
              <div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
                <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
                <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-[10px] text-ink-muted uppercase font-bold">NODE 02 · TRANSPORT</span>
                  <h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">
                    CUDA IPC Zero-Copy
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Shared memory IPC handles transfer decoded frame tensors between processes without host-to-device PCIe copies.
                  </p>
                </div>
                <div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
                  CUDA IPC SHARED MEMORY
                </div>
              </div>

              {/* Node 3 */}
              <div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
                <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
                <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-[10px] text-ink-muted uppercase font-bold">NODE 03 · INFERENCE</span>
                  <h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">
                    Centralized Triton Serving
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    YOLO26 primary model ({VERIFIED_NUMBERS.yolo26ExecutionMean} mean execution) filters high-throughput streams, triggering Gemma 3 E4B VLM for deep reasoning.
                  </p>
                </div>
                <div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
                  TENSORRT FP32 + TRITON
                </div>
              </div>

              {/* Node 4 */}
              <div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
                <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
                <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
                <div className="flex flex-col gap-2">
                  <span className="font-label-sm text-[10px] text-ink-muted uppercase font-bold">NODE 04 · DISPATCH</span>
                  <h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">
                    Reasoned Alerts & Evidence
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Structured JSON outputs with natural-language explanation and audit crops dispatched via FastAPI and message brokers.
                  </p>
                </div>
                <div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
                  FASTAPI · REDIS · WEBSOCKETS
                </div>
              </div>
            </div>

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
        <section className="w-full bg-primary text-on-primary py-space-chapter" id="chapter-6">
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

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-space-md">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-full hover:bg-signal-orange-hover transition-colors font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Email Rajesh
              </a>
              <a
                href={CONTACT_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                Download Resume (PDF)
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
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
