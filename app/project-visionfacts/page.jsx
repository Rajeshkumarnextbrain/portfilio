'use client';

import React from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  PROJECTS,
} from "@/content/facts";

import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { FlowToken } from "@/components/motion/FlowToken";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";

const VISIONFACTS_STAGES = [
  {
    number: '01',
    plainTitle: 'RTSP Ingest',
    plainDesc: 'Continuous RTSP video streams received over gigabit networks from 130+ cameras.',
    techDesc: 'H.264 / H.265 HW NVDEC decode into pinned memory.',
  },
  {
    number: '02',
    plainTitle: 'Process Isolation',
    plainDesc: 'One isolated Python worker per camera ensures single drops never disrupt neighbors.',
    techDesc: 'Multiprocessing isolation with zero cross-feed interference.',
  },
  {
    number: '03',
    plainTitle: 'NVDEC Decode',
    plainDesc: 'Decodes frames directly in GPU memory with zero CPU saturation.',
    techDesc: 'Pinned memory zero-copy decode buffers.',
  },
  {
    number: '04',
    plainTitle: 'Zero-Copy Inference',
    plainDesc: 'Frames pass via CUDA IPC shared memory to centralized Triton without CPU PCIe copies.',
    techDesc: 'Triton + TensorRT FP32 primary model (192 req/s mean).',
  },
  {
    number: '05',
    plainTitle: 'Rule Logic',
    plainDesc: 'Evaluates spatial geofences, pose angles, and dwell timers against detected objects.',
    techDesc: 'Spatial polygon intersection & ByteTrack temporal tracking.',
  },
  {
    number: '06',
    plainTitle: 'VLM Reasoning',
    plainDesc: 'Gemma 3 E4B audits edge cases and cuts false safety alarms by 74%.',
    techDesc: 'Zero-shot prompt verification on incident crops.',
  },
  {
    number: '07',
    plainTitle: 'Persistence',
    plainDesc: 'Structured incident JSON documents, crop images, and audit evidence committed to MongoDB.',
    techDesc: 'MongoDB timeseries & Redis pub/sub queue.',
  },
  {
    number: '08',
    plainTitle: 'Client Alerting',
    plainDesc: 'Pushes real-time alerts and telemetry to client web dashboards in under 150 ms.',
    techDesc: 'FastAPI async change streams & WebSockets.',
  },
];

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
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
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
                FLAGSHIP VIDEO ANALYTICS PLATFORM
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[36px] xs:text-[48px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                Teaching<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  {VERIFIED_NUMBERS.camerasCount} cameras
                </span><br />
                to watch.
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                A production computer vision platform that transforms standard CCTV feeds into automated, real-time safety, security, and operational intelligence for manufacturing plants, logistics hubs, and warehouses.
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
                  Instead of forcing security operators to stare at dozens of video monitors, this system runs AI directly on {VERIFIED_NUMBERS.camerasCount} live camera streams to detect missing hardhats, intrusions into hazardous zones, falls, forklift traffic hazards, and equipment blockages in real time—instantly alerting floor supervisors before accidents happen.
                </p>

                {/* 3-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                  <div className="flex flex-col">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value={VERIFIED_NUMBERS.camerasCount} />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Cameras Analysed Live</span>
                    <span className="text-xs text-ink-muted mt-1">112 online in 30-min Grafana snapshot</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary">
                      <CountUp value="~6.5x less" />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">GPU Model Memory</span>
                    <span className="text-xs text-ink-muted mt-1">~5 GB Triton vs ~32.5 GB per-camera copies</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value="74%" />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Fewer False Safety Alarms</span>
                    <span className="text-xs text-ink-muted mt-1">Zero-shot reasoning via Gemma 3 E4B VLM</span>
                  </div>
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
                <div className="aspect-video bg-neutral-900 text-white p-3 flex flex-col justify-between border border-neutral-800">
                  <div className="flex justify-between items-center text-[10px] font-label-timecode">
                    <span>CAM_01 · LOGISTICS_DOCK</span>
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                  </div>
                  <div className="border border-secondary/80 p-1 bg-secondary/10 self-center w-3/4 text-center">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold">FORKLIFT 0.94</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-label-timecode">FPS: 7.5 · LATENCY: 104 ms</span>
                </div>

                <div className="aspect-video bg-neutral-900 text-white p-3 flex flex-col justify-between border border-neutral-800">
                  <div className="flex justify-between items-center text-[10px] font-label-timecode">
                    <span>CAM_14 · ASSEMBLY_LINE</span>
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                  </div>
                  <div className="border border-secondary/80 p-1 bg-secondary/10 self-center w-3/4 text-center">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold">PPE: NO HARDHAT</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-label-timecode">FPS: 7.4 · LATENCY: 98 ms</span>
                </div>

                <div className="aspect-video bg-neutral-900 text-white p-3 flex flex-col justify-between border border-neutral-800">
                  <div className="flex justify-between items-center text-[10px] font-label-timecode">
                    <span>CAM_42 · NORTH_PERIMETER</span>
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                  </div>
                  <div className="border border-secondary/80 p-1 bg-secondary/10 self-center w-3/4 text-center">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold">INTRUSION DETECTED</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-label-timecode">FPS: 7.8 · LATENCY: 112 ms</span>
                </div>

                <div className="aspect-video bg-neutral-900 text-white p-3 flex flex-col justify-between border border-neutral-800">
                  <div className="flex justify-between items-center text-[10px] font-label-timecode">
                    <span>CAM_88 · STORAGE_BAY</span>
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                  </div>
                  <div className="border border-secondary/80 p-1 bg-secondary/10 self-center w-3/4 text-center">
                    <span className="text-[10px] font-mono text-secondary uppercase font-bold">FALL INCIDENT 0.89</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 font-label-timecode">FPS: 7.2 · LATENCY: 109 ms</span>
                </div>
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
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
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
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
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
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                03 / CHALLENGES AND FIXES
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                What broke, and how I fixed it.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {/* Fix 1 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  1. GPU Memory Duplication (32.5 GB Bottleneck)
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Loading models inside each camera process duplicated weights across {VERIFIED_NUMBERS.camerasCount} feeds (130 × ~250 MB = ~32.5 GB), immediately exceeding single or dual GPU limits.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Centralized all model instances inside NVIDIA Triton with CUDA shared memory. Triton model memory dropped to ~2.5 GB per GPU (~5 GB combined)—an estimated ~6.5x model memory reduction.
                </div>
              </div>

              {/* Fix 2 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  2. Host-to-Device Memory Transfer Overhead
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Copying 1080p frames between Python camera workers and the inference server via standard buffers saturated the PCIe bus and created frame drops.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Implemented zero-copy CUDA IPC shared memory. Camera workers place decoded tensors directly into shared GPU memory handles that Triton reads with zero memory thrashing.
                </div>
              </div>

              {/* Fix 3 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  3. Dynamic VRAM Safety Buffer (1,500 MB)
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Varying camera resolutions and sudden burst workloads risked out-of-memory (OOM) GPU crashes across dual L4 GPUs.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Engineered dynamic VRAM allocation: budgeted 290 MB per camera process with a mandatory 1,500 MB safety buffer reserved per GPU, eliminating all OOM crashes in production.
                </div>
              </div>

              {/* Fix 4 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  4. Shared Primary Detection Multi-Tasking
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Running separate inference passes per camera for hardhats, vests, intrusion, and phone usage multiplied GPU loads by 4–5x.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  A single primary YOLO26 pass detects base objects; all downstream safety rules evaluate that single detection tensor, slashing duplicate inference passes.
                </div>
              </div>

              {/* Fix 5 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  5. On-Premises Intellectual Property Protection
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Enterprise clients required deployment on private local servers, exposing proprietary Python source code to tampering.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Compiled all Python application modules into stripped native C-extension shared objects (.so) using Nuitka, containerized in hardened Docker images.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: PRODUCTION RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
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
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                05 / MY CONTRIBUTION
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                80–85% engineering ownership.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  Architecture &amp; Systems Design
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Designed the multiprocessing stream isolation model, centralized Triton serving architecture, and shared primary detection pattern.
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  GPU &amp; Memory Optimization
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Compiled TensorRT FP32 engines, implemented CUDA shared memory IPC, dynamic memory budgeting, and the 1,500 MB safety buffer.
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  Model &amp; Multimodal Integration
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Integrated YOLO26 object detection, pose estimation, face verification, and Gemma 3 E4B VLM zero-shot reasoning.
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  Packaging &amp; Observability
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Compiled native .so binaries with Nuitka, authored Docker Compose deployments, and created Prometheus/Grafana telemetry.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: TECH STACK */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="stack">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                06 / TECH STACK
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Built with.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">PIPELINE &amp; VISION</span>
                <span className="text-xs font-semibold text-on-surface">Python 3.10+, OpenCV, PyTorch, YOLO26, ByteTrack</span>
              </div>

              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">ACCELERATION &amp; SERVING</span>
                <span className="text-xs font-semibold text-on-surface">NVIDIA Triton, TensorRT FP32, CUDA IPC, Pinned Memory</span>
              </div>

              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">BACKEND &amp; STORAGE</span>
                <span className="text-xs font-semibold text-on-surface">FastAPI, MongoDB, Redis, WebSockets</span>
              </div>

              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">MULTIMODAL &amp; PACKAGING</span>
                <span className="text-xs font-semibold text-on-surface">Gemma 3 E4B VLM, Nuitka (.so binaries), Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CLOSING NAVIGATION & CTA */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-line divide-y md:divide-y-0 md:divide-x divide-line">
              <Link href="/" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">NAVIGATION</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">← Back to Overview</span>
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
