'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExperiencePage() {
  const [frame, setFrame] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 24);
    }, 1000 / 24);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <main className="w-full pt-16 pb-12 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* ================================================================= */}
{/* CHAPTER 0: HERO (Paper Surface) */}
{/* ================================================================= */}
<section className="w-full bg-surface py-space-chapter" id="chapter-0">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Chapter Metadata Header */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">EXPERIENCE // PLAYBACK · ARCHIVAL REEL 04</span>
</div>
<div className="flex items-center gap-4 font-label-timecode text-label-timecode text-ink-muted">
<span>SMPTE: 00:00:00:00</span>
<span className="text-line">/</span>
<span>FPS: 24.00 TENSOR_RT</span>
</div>
</div>
{/* Mega Headline & Subtitle */}
<div className="flex flex-col gap-space-lg">
<h1 className="font-mega-display text-[34px] xs:text-[46px] sm:text-[68px] md:text-[96px] lg:text-[120px] xl:text-mega-display leading-[0.94] text-on-surface tracking-tighter uppercase select-none">
          FOUR YEARS.<br/>
          ONE <span className="relative inline-block bg-signal-orange-tint px-3 py-1 text-secondary -rotate-1">PIPELINE</span><br/>
          AT A TIME.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          A chronology of architecting real-time RTSP video inference microservices, fine-tuning Vision-Language Models, and deploying cost-optimized edge AI for high-throughput enterprise applications.
        </p>
</div>
{/* Full-Width Interactive Filmstrip Scrubber */}
<div className="flex flex-col gap-3 pt-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-label-sm text-xs sm:text-label-sm text-ink-muted uppercase">
<span className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[14px] text-secondary shrink-0">movie</span>
<span className="truncate">TIMELINE SCRUBBER // MAY 2022 — PRESENT</span>
</span>
<span className="font-label-timecode text-label-timecode text-secondary font-medium shrink-0">PLAYHEAD: 00:04:18:22</span>
</div>
{/* Scrubber Track & Ticks */}
<div className="relative w-full bg-paper-sunken p-2 sm:p-3 select-none">
{/* Filmstrip Sproc Holes (Top) */}
<div className="flex justify-between pb-2 border-b border-line opacity-60">
<span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span>
<span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span>
<span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span><span className="w-2 h-1.5 bg-line"></span>
</div>
{/* Segments */}
<div className="grid grid-cols-12 gap-1 sm:gap-1.5 my-2 sm:my-3 h-14 relative">
{/* Clip 3: Tech Support (May - Jul 2022) ~ 2 cols on mobile, 1 col on sm */}
<a className="col-span-2 sm:col-span-1 bg-surface-container-highest hover:bg-primary-fixed text-on-surface flex flex-col justify-between p-1 sm:p-1.5 transition-colors group overflow-hidden" href="#chapter-3">
<span className="font-label-sm text-[8px] sm:text-[10px] text-ink-muted group-hover:text-primary leading-tight">03</span>
<span className="font-label-sm text-[8px] sm:text-[9px] truncate">VEDANT</span>
</a>
{/* Clip 2: Junior Vision (Jul 2022 - Jul 2023) ~ 3 cols */}
<a className="col-span-3 bg-surface-container-high hover:bg-primary-fixed text-on-surface flex flex-col justify-between p-1.5 sm:p-2 transition-colors group overflow-hidden" href="#chapter-2">
<span className="font-label-sm text-[8px] sm:text-label-sm text-ink-muted group-hover:text-primary leading-tight">CLIP 02</span>
<span className="font-headline-md text-[10px] sm:text-body-sm font-semibold truncate">SS AUTO</span>
</a>
{/* Clip 1: Team Lead (Jul 2023 - Present) ~ 7 cols on mobile, 8 cols on sm */}
<a className="col-span-7 sm:col-span-8 bg-secondary text-on-secondary flex items-center justify-between px-2 sm:px-4 relative overflow-hidden group" href="#chapter-1">
<div className="flex flex-col z-10 min-w-0 pr-4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-surface-bright animate-ping shrink-0"></span>
<span className="font-label-sm text-[8px] sm:text-label-sm tracking-wider uppercase truncate">ACTIVE CLIP 01</span>
</div>
<span className="font-headline-md text-[11px] sm:text-body-md lg:text-headline-md font-bold tracking-tight truncate">VISIONFACTS.AI</span>
</div>
<div className="hidden lg:flex flex-col items-end z-10 font-label-timecode text-label-timecode">
<span>REC // LIVE STREAM</span>
<span className="text-signal-orange-tint">150+ STREAMS</span>
</div>
{/* Playhead Needle */}
<div className="absolute right-4 sm:right-12 top-0 bottom-0 w-0.5 bg-surface-bright shadow-[0_0_8px_#ffffff] z-20 flex flex-col items-center">
<span className="w-2 h-2 -top-1 absolute rotate-45 bg-surface-bright"></span>
</div>
</a>
</div>
{/* Axis Ticks (Responsive frequency: 5 on mobile, 9 on desktop) */}
<div className="flex justify-between pt-2 border-t border-line font-label-timecode text-[9px] sm:text-[10px] text-ink-faint">
<span>Q2'22</span>
<span className="hidden sm:inline">Q4'22</span>
<span>Q2'23</span>
<span className="hidden sm:inline">Q4'23</span>
<span>Q2'24</span>
<span className="hidden sm:inline">Q4'24</span>
<span>Q2'25</span>
<span className="hidden sm:inline">Q4'25</span>
<span className="font-bold text-secondary">Q1'26 [NOW]</span>
</div>
</div>
</div>
{/* Ruled Metric Register */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-line pt-space-lg pb-space-lg">
<div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">4+</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">YEARS PROD AI</span>
<span className="font-body-sm text-body-sm text-ink-muted mt-2">End-to-end edge & cloud execution</span>
</div>
<div className="flex flex-col p-4 border-b sm:border-b-0 lg:border-r border-line">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">150+</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">CONCURRENT RTSP</span>
<span className="font-body-sm text-body-sm text-ink-muted mt-2">GStreamer / DeepStream scale</span>
</div>
<div className="flex flex-col p-4 border-b sm:border-b-0 sm:border-r border-line">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">62%</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">GPU TCO REDUCTION</span>
<span className="font-body-sm text-body-sm text-ink-muted mt-2">AWQ + TensorRT graph opt</span>
</div>
<div className="flex flex-col p-4">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">3–5</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-1">ENGINEERS LED</span>
<span className="font-body-sm text-body-sm text-ink-muted mt-2">Sprint delivery & architecture</span>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 1: CLIP 01 · TEAM LEAD (Paper Sunken #ECE8DF) */}
{/* ================================================================= */}
<section className="w-full bg-paper-sunken py-space-chapter" id="chapter-1">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header with Viewfinder Framing */}
<div className="flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase font-medium">CLIP 01 / 03 · JUL 2023 – PRESENT</span>
<span className="bg-paper-raised px-2 py-0.5 font-label-sm text-[10px] text-status-success border border-line">CURRENT ROLE</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-muted">TIMECODE // 00:01:45:10</span>
</div>
<h2 className="font-display text-display text-on-surface uppercase tracking-tight">
          Senior AI Engineer, Team Lead
        </h2>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label-sm text-label-sm text-ink-muted">
<span className="font-semibold text-on-surface">Visionfacts.AI / Nextbrain Technologies Pvt. Ltd.</span>
<span>·</span>
<span>Bangalore, India</span>
<span>·</span>
<span className="text-secondary font-medium">Domain: Enterprise Video Analytics & Multimodal AI Microservices</span>
</div>
</div>
{/* Ruled Numbers Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
<div className="flex flex-col">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">74%</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">FALSE POSITIVE REDUCTION</span>
<span className="font-body-sm text-body-sm text-ink-muted">Via zero-shot Gemma E4B VLM reasoning in industrial safety gates</span>
</div>
<div className="flex flex-col md:border-l md:border-line md:pl-6">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">&lt;85 ms</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">p95 PIPELINE LATENCY</span>
<span className="font-body-sm text-body-sm text-ink-muted">End-to-end RTSP decode, tensor inference, and dispatch SLA</span>
</div>
<div className="flex flex-col md:border-l md:border-line md:pl-6">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">62%</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">LOWER GPU SPEND</span>
<span className="font-body-sm text-body-sm text-ink-muted">Slashing monthly AWS/GCP compute overhead per client cluster</span>
</div>
</div>
{/* Ruled Rows: Engineering Delivery */}
<div className="flex flex-col border-t border-line">
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            High-Throughput Pipelines
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Architected low-latency RTSP video analytics microservices across 150+ concurrent camera streams, managing high-throughput GStreamer and DeepStream decode-to-inference pipelines with zero PCIe bus thrashing.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            VLM Autonomous Reasoning
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Spearheaded integration of Gemma E4B Vision-Language Model agents, enabling autonomous zero-shot incident reasoning and reducing false industrial safety alarms by 74% across high-noise shop-floor visual feeds.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            TensorRT & AWQ Quantization
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Engineered custom TensorRT and AWQ quantization execution graphs with CUDA IPC zero-copy memory buffers, slashing monthly cloud GPU compute expenditure by 62% while retaining 99.2% FP16 fidelity.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            Lifecycle Ownership
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Directed client requirement gathering, solution architecture, production onboarding, and multi-tenant telemetry for enterprise clients, mentoring 3–5 engineers through bi-weekly architecture and Nsight profiling sprints.
          </div>
</div>
</div>
{/* VIEW FINDER INSTRUMENT PANEL: DUAL L4 GPU CLUSTER SNAPSHOT */}
<div className="relative bg-paper-raised p-8 border border-line">
{/* 4 Viewfinder Brackets */}
<span className="absolute -top-2 -left-2 text-primary font-headline-lg select-none leading-none">⌜</span>
<span className="absolute -top-2 -right-2 text-primary font-headline-lg select-none leading-none">⌝</span>
<span className="absolute -bottom-2 -left-2 text-primary font-headline-lg select-none leading-none">⌞</span>
<span className="absolute -bottom-2 -right-2 text-primary font-headline-lg select-none leading-none">⌟</span>
<div className="flex flex-col gap-6">
<div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">INSTRUMENTATION</span>
<span className="font-headline-md text-body-md font-semibold text-on-surface">DUAL NVIDIA L4 GPUs · CLUSTER SNAPSHOT</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-muted">NODE: IND-BLR-EDGE-01 // ACTIVE</span>
</div>
{/* Instrument Readouts */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* 150 Stream Dot Grid */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-ink-muted uppercase">ACTIVE RTSP STREAMS</span>
<span className="text-on-surface font-semibold">150 / 150 OK</span>
</div>
<div className="bg-surface p-3 grid grid-cols-15 gap-1 border border-line h-24 overflow-hidden content-center">
{/* 150 micro indicators */}
<div className="flex flex-wrap gap-1">
{/* Generating visual array of active streams */}
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
<div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div><div className="w-1.5 h-1.5 bg-secondary"></div>
</div>
</div>
<span className="font-label-timecode text-[11px] text-ink-muted">RESOLUTION: 1080p @ 15 FPS / NVDEC HARDWARE</span>
</div>
{/* Sustained Cluster Load Gauge */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-ink-muted uppercase">SUSTAINED CLUSTER VRAM LOAD</span>
<span className="text-secondary font-bold">88.4% (42.4 GB / 48 GB)</span>
</div>
<div className="w-full bg-paper-sunken h-5 border border-line p-0.5 flex">
<div className="h-full bg-secondary w-[88.4%]"></div>
</div>
<div className="flex justify-between font-label-timecode text-[10px] text-ink-faint">
<span>0 GB</span>
<span>CUDA SHARED IPC</span>
<span>48 GB (DUAL L4)</span>
</div>
</div>
{/* Pipeline Latency vs SLA */}
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center font-label-sm text-label-sm">
<span className="text-ink-muted uppercase">p95 PIPELINE LATENCY</span>
<span className="text-status-success font-bold">82.4 ms (SLA &lt;100 ms)</span>
</div>
<div className="relative w-full bg-paper-sunken h-5 border border-line p-0.5">
<div className="h-full bg-status-success w-[82.4%]"></div>
{/* 100ms threshold marker */}
<div className="absolute right-[17.6%] top-0 bottom-0 w-0.5 bg-primary z-10"></div>
</div>
<div className="flex justify-between font-label-timecode text-[10px] text-ink-faint">
<span>0 ms</span>
<span className="text-primary font-semibold">▲ SLA THRESHOLD</span>
<span>100 ms</span>
</div>
</div>
</div>
{/* Bottom Telemetry Badges */}
<div className="flex flex-wrap items-center justify-between pt-4 border-t border-line font-label-sm text-label-sm text-ink-muted gap-4">
<div>PRECISION: <span className="text-on-surface font-semibold">AWQ INT4 (VLM) + FP16/FP32 (YOLOv8)</span></div>
<div>TRANSPORT: <span className="text-on-surface font-semibold">CUDA IPC ZERO-COPY SHARED MEMORY</span></div>
<div>COST DELTA: <span className="text-secondary font-semibold">-$3,400 / MO / CLUSTER VIA BATCHING</span></div>
</div>
</div>
</div>
{/* Tech Stack Chips */}
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">TensorRT</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">DeepStream</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Triton Inference Server</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">GStreamer</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Gemma E4B VLM</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">AWQ Quantization</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">CUDA IPC</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Python AsyncIO</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Docker</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Prometheus & Grafana</span>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 2: CLIP 02 · JUNIOR VISION ENGINEER (Paper #F5F2EC) */}
{/* ================================================================= */}
<section className="w-full bg-surface py-space-chapter" id="chapter-2">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-on-surface"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase font-medium">CLIP 02 / 03 · JUL 2022 – JUL 2023</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-muted">TIMECODE // 00:02:18:04</span>
</div>
<h2 className="font-display text-display text-on-surface uppercase tracking-tight">
          Junior Vision Engineer
        </h2>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label-sm text-label-sm text-ink-muted">
<span className="font-semibold text-on-surface">SS Automation Solutions Pvt. Ltd.</span>
<span>·</span>
<span>India</span>
<span>·</span>
<span className="text-secondary font-medium">Domain: Industrial Machine Vision & Quality Inspection Automation</span>
</div>
</div>
{/* Ruled Numbers Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
<div className="flex flex-col">
<span className="font-metric-numeral text-headline-lg font-bold text-on-surface">70–85%</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">DEFECT DETECTION ACCURACY</span>
<span className="font-body-sm text-body-sm text-ink-muted">On high-speed assembly lines with varied reflectivity</span>
</div>
<div className="flex flex-col md:border-l md:border-line md:pl-6">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">Jetson</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">EMBEDDED EDGE DEPLOYMENT</span>
<span className="font-body-sm text-body-sm text-ink-muted">NVIDIA Nano & Xavier NX units running localized inference</span>
</div>
<div className="flex flex-col md:border-l md:border-line md:pl-6">
<span className="font-headline-lg text-headline-lg font-bold text-on-surface">PLC</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">INDUSTRIAL INTEGRATION</span>
<span className="font-body-sm text-body-sm text-ink-muted">Opto-isolated hardware triggers and pneumatic line reject systems</span>
</div>
</div>
{/* Ruled Rows: Engineering Delivery */}
<div className="flex flex-col border-t border-line">
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            Rapid Autodidactic Ramp
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Joined with no prior computer vision background and self-taught the field on the job, becoming the lead engineer responsible for delivering customer inspection systems from optical setup to PLC handshakes.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            Surface Defect Systems
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Built bespoke machine vision solutions for manufacturing automation, sub-millimeter dimensional measurement, and surface defect classification on metal stamping and plastic injection lines.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            Custom Model Training
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Trained and benchmarked SSD, YOLOv3, and YOLOv7 detection architectures on curated multi-lighting industrial image datasets, achieving 70–85% defect detection precision under variable factory lighting.
          </div>
</div>
<div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-paper-raised transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-on-surface uppercase">
            Embedded Edge Deployments
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Packaged vision pipelines onto NVIDIA Jetson embedded hardware, directly interfacing GigE Vision and Camera Link cameras with factory PLCs to trigger pneumatic rejections within a 20 ms mechanical window.
          </div>
</div>
</div>
{/* Factory Inspection Visual Schematic with Viewfinder */}
<div className="relative bg-paper-sunken p-8 border border-line">
<span className="absolute -top-2 -left-2 text-primary font-headline-lg select-none leading-none">⌜</span>
<span className="absolute -top-2 -right-2 text-primary font-headline-lg select-none leading-none">⌝</span>
<span className="absolute -bottom-2 -left-2 text-primary font-headline-lg select-none leading-none">⌞</span>
<span className="absolute -bottom-2 -right-2 text-primary font-headline-lg select-none leading-none">⌟</span>
<div className="flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-line pb-4">
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">SCHEMATIC 02.B // FACTORY INSPECTION RIG</span>
<span className="font-label-timecode text-label-timecode text-ink-muted">OPTO-TRIGGER: 24V PLC PULSE</span>
</div>
{/* Schematic Diagram */}
<div className="relative h-64 bg-paper-raised border border-line flex items-center justify-between px-8 overflow-hidden">
{/* Background Grid Lines */}
<div className="absolute inset-0 opacity-10 flex justify-between pointer-events-none">
<div className="w-px h-full bg-primary"></div><div className="w-px h-full bg-primary"></div><div className="w-px h-full bg-primary"></div><div className="w-px h-full bg-primary"></div><div className="w-px h-full bg-primary"></div>
</div>
{/* Conveyor Belt Graphic */}
<div className="absolute bottom-6 left-0 right-0 h-4 bg-line flex items-center">
<div className="w-full border-t border-dashed border-ink-muted"></div>
</div>
{/* Camera Setup */}
<div className="flex flex-col items-center gap-1 z-10">
<div className="w-16 h-12 bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px] text-center uppercase p-1">
                GIGE CAM 5MP
              </div>
<div className="w-1 h-12 bg-secondary"></div>
<span className="font-label-timecode text-[10px] text-ink-muted">STROBE 10µs</span>
</div>
{/* Detected Workpiece with Bounding Box */}
<div className="relative w-48 h-36 bg-paper-sunken border-2 border-dashed border-line flex items-center justify-center z-10">
{/* Bounding Box */}
<div className="absolute inset-4 border-2 border-secondary flex flex-col justify-between p-1">
<span className="bg-secondary text-on-secondary font-label-sm text-[9px] px-1 py-0.5 w-max">
                  DEFECT #08: CRACK DETECTED · CONF 82%
                </span>
<div className="flex justify-between font-label-timecode text-[8px] text-secondary">
<span>DIM: 1.2mm x 4.8mm</span>
<span>LOC: [X:142, Y:89]</span>
</div>
</div>
<span className="font-label-sm text-ink-faint text-center">BILLET SPECIMEN #304</span>
</div>
{/* Jetson + PLC Node */}
<div className="flex flex-col items-center gap-2 z-10">
<div className="p-3 bg-primary text-on-primary font-label-sm text-center text-[11px] uppercase">
                JETSON XAVIER NX<br/>
<span className="text-secondary font-label-timecode">INFER: 18.2 ms</span>
</div>
<div className="w-0.5 h-6 bg-primary"></div>
<div className="px-3 py-1 bg-paper-raised border border-primary font-label-sm text-[10px] uppercase">
                SIEMENS S7-1200 PLC
              </div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between font-label-sm text-label-sm text-ink-muted">
<span>TRIGGER TO REJECT AIR-VALVE: <strong className="text-on-surface">&lt;20 ms TOTAL</strong></span>
<span>DATA INTERFACE: <strong className="text-on-surface">OPC-UA / SNAP7 DIRECT MEMORY</strong></span>
</div>
</div>
</div>
{/* Tech Stack Chips */}
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">NVIDIA Jetson (Nano, Xavier NX)</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">YOLOv7 / YOLOv3</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">SSD</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">OpenCV</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">PyTorch</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Industrial PLCs</span>
<span className="bg-paper-raised px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface">Camera Link / GigE Vision</span>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 3: CLIP 03 · TECHNICAL SUPPORT (INVERSE Dark Ink #14130F) */}
{/* ================================================================= */}
<section className="w-full bg-primary text-on-primary py-space-chapter" id="chapter-3">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">CLIP 03 / 03 · MAY 2022 – JUL 2022</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-faint">DEFENSE RESEARCH · MISSION VALIDATION</span>
</div>
<h2 className="font-display text-display text-surface uppercase tracking-tight">
          Technical Support Engineer
        </h2>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label-sm text-label-sm text-ink-faint">
<span className="font-semibold text-surface">Vedant Tech Solutions Pvt. Ltd.</span>
<span>·</span>
<span>India (DRDO Project)</span>
<span>·</span>
<span className="text-secondary font-medium">Domain: Radar Data Processing & Target Tracking</span>
</div>
</div>
{/* Ruled Numbers Strip (Inverse) */}
<div className="grid grid-cols-1 md:grid-cols-3 border-y border-surface-container-highest/20 py-space-lg gap-6">
<div className="flex flex-col">
<span className="font-metric-numeral text-headline-lg font-bold text-surface">&gt;99.4%</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">SIGNAL PRECISION</span>
<span className="font-body-sm text-body-sm text-ink-faint">Clutter suppression on multi-channel RF returns</span>
</div>
<div className="flex flex-col md:border-l md:border-surface-container-highest/20 md:pl-6">
<span className="font-headline-lg text-headline-lg font-bold text-surface">REAL-TIME</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">STREAM PROCESSING</span>
<span className="font-body-sm text-body-sm text-ink-faint">Synchronous telemetry ingest under defense protocols</span>
</div>
<div className="flex flex-col md:border-l md:border-surface-container-highest/20 md:pl-6">
<span className="font-headline-lg text-headline-lg font-bold text-surface">KALMAN+KNN</span>
<span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">NOISE CLASSIFICATION</span>
<span className="font-body-sm text-body-sm text-ink-faint">Trajectory state smoothing and false track termination</span>
</div>
</div>
{/* Ruled Rows: Inverse Delivery */}
<div className="flex flex-col border-t border-surface-container-highest/20">
<div className="py-space-lg border-b border-surface-container-highest/20 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-surface-container/10 transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-surface uppercase">
            Radar Telemetry Processing
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-ink-faint leading-relaxed">
            Worked on high-volume radar telemetry data processing, kinematic target tracking, and multi-channel RF signal analysis under mission-critical constraints.
          </div>
</div>
<div className="py-space-lg border-b border-surface-container-highest/20 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-surface-container/10 transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-surface uppercase">
            Kinematic State Estimation
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-ink-faint leading-relaxed">
            Applied Kalman filtering state covariance matrices and K-Nearest Neighbors (KNN) algorithms for kinematic state estimation, noise elimination, and non-linear trajectory smoothing.
          </div>
</div>
<div className="py-space-lg border-b border-surface-container-highest/20 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-surface-container/10 transition-colors p-4">
<div className="md:col-span-4 font-headline-md text-headline-md text-surface uppercase">
            Defense Empirical Validation
          </div>
<div className="md:col-span-8 font-body-md text-body-md text-ink-faint leading-relaxed">
            Supported rigorous testing, telemetry capture, and empirical validation of mission-critical radar signal processing algorithms under defense research establishment conditions.
          </div>
</div>
</div>
{/* Viewfinder-Bracketed PPI Radar Scope Graphic */}
<div className="relative bg-surface-container/5 p-8 border border-surface-container-highest/20">
<span className="absolute -top-2 -left-2 text-surface font-headline-lg select-none leading-none">⌜</span>
<span className="absolute -top-2 -right-2 text-surface font-headline-lg select-none leading-none">⌝</span>
<span className="absolute -bottom-2 -left-2 text-surface font-headline-lg select-none leading-none">⌞</span>
<span className="absolute -bottom-2 -right-2 text-surface font-headline-lg select-none leading-none">⌟</span>
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
{/* PPI Scope Display */}
<div className="relative w-72 h-72 rounded-full border border-surface-container-highest/40 flex items-center justify-center overflow-hidden">
{/* Concentric Range Rings */}
<div className="absolute w-52 h-52 rounded-full border border-surface-container-highest/20"></div>
<div className="absolute w-32 h-32 rounded-full border border-surface-container-highest/20"></div>
<div className="absolute w-12 h-12 rounded-full border border-surface-container-highest/20"></div>
{/* Crosshairs */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-surface-container-highest/20"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-full w-px bg-surface-container-highest/20"></div>
</div>
{/* Rotating Sweep Simulator Angle */}
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/10 to-secondary/30 origin-center rotate-45 pointer-events-none"></div>
{/* Target Blip with Vector */}
<div className="absolute top-20 right-20 flex flex-col items-center">
<div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#FF5A1F]"></div>
<div className="w-8 h-px bg-secondary rotate-[-30deg] origin-left"></div>
<span className="font-label-timecode text-[9px] text-secondary mt-1">TRK-409 [AZ: 042°]</span>
</div>
</div>
{/* Radar Readout Specifications */}
<div className="flex flex-col gap-4 max-w-md w-full font-label-sm text-label-sm">
<div className="border-b border-surface-container-highest/20 pb-2 flex justify-between">
<span className="text-ink-faint uppercase">ALGORITHM</span>
<span className="text-surface font-semibold">DISCRETE EXTENDED KALMAN FILTER</span>
</div>
<div className="border-b border-surface-container-highest/20 pb-2 flex justify-between">
<span className="text-ink-faint uppercase">TRACK SMOOTHING</span>
<span className="text-surface font-semibold">KNN CLUSTER TRAJECTORY GATING</span>
</div>
<div className="border-b border-surface-container-highest/20 pb-2 flex justify-between">
<span className="text-ink-faint uppercase">SAMPLING INTERVAL</span>
<span className="text-secondary font-semibold">ΔT = 4.0 ms SYNCHRONOUS</span>
</div>
<div className="border-b border-surface-container-highest/20 pb-2 flex justify-between">
<span className="text-ink-faint uppercase">COGNIZANT AGENCY</span>
<span className="text-surface font-semibold">DRDO COLLABORATIVE TASK FORCE</span>
</div>
<p className="font-body-sm text-body-sm text-ink-faint mt-2">
              High-confidence discrimination between radar ground clutter echoes and high-velocity kinematic targets via spatial covariance tracking.
            </p>
</div>
</div>
</div>
{/* Tech Stack Chips (Inverse) */}
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">Radar Data Systems</span>
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">Kalman Filters</span>
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">KNN Classification</span>
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">Signal Analysis</span>
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">MATLAB</span>
<span className="bg-surface/5 px-3 py-1 font-label-sm text-label-sm border border-surface-container-highest/20 text-surface">C++</span>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 4: ENGINEERING LEADERSHIP (Paper Sunken #ECE8DF) */}
{/* ================================================================= */}
<section className="w-full bg-paper-sunken py-space-chapter" id="chapter-4">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase font-medium">04 / SYSTEMS GOVERNANCE</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-muted">STANDARD OPERATING PROTOCOL</span>
</div>
<h2 className="font-display text-display text-on-surface uppercase tracking-tight">
          How I run engineering.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Protocols, standards, and observability patterns enforced across vision infrastructure to guarantee resilience.
        </p>
</div>
{/* Ruled Full-Width Interactive Governance Rows */}
<div className="flex flex-col border-t border-line">
{/* Row 1: IN ACTIVE HOVER DEMONSTRATION (Inverted styling) */}
<div className="py-space-xl px-6 bg-primary text-on-primary transition-all border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
<div className="flex flex-col gap-3 max-w-3xl">
<div className="flex items-center gap-3 font-label-sm text-label-sm">
<span className="text-secondary font-semibold">STAGE 01 // ACTIVE STANDARD</span>
<span className="text-ink-faint">CADENCE: BI-WEEKLY SPRINTS</span>
</div>
<h3 className="font-headline-md text-headline-md text-surface uppercase">
              Team Leadership & Profiling Standards
            </h3>
<p className="font-body-md text-body-md text-ink-faint leading-relaxed">
              Led 3–5 engineers across CV and GenAI sprints. Instituted rigorous GPU memory profiling standards using NVIDIA Nsight Systems and Nsight Compute, eliminating CUDA memory fragmentation, memory leaks, and thread race conditions before reaching master branches.
            </p>
</div>
<div className="flex flex-col items-start lg:items-end justify-center w-full lg:w-auto lg:min-w-[260px]">
<span className="bg-secondary text-on-secondary px-3 py-1 font-label-sm text-[11px] uppercase tracking-wider font-semibold">
              MECHANISM
            </span>
<span className="font-label-timecode text-label-timecode text-surface mt-2 text-left lg:text-right">
              Bi-weekly Architecture Reviews<br/>& Nsight Sprints
            </span>
</div>
</div>
{/* Row 2: Standard Row */}
<div className="py-space-xl px-6 bg-paper-sunken hover:bg-paper-raised text-on-surface transition-all border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
<div className="flex flex-col gap-3 max-w-3xl">
<div className="flex items-center gap-3 font-label-sm text-label-sm">
<span className="text-ink-muted">STAGE 02 // OBSERVABILITY</span>
<span className="text-ink-muted">REAL-TIME TELEMETRY</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-secondary transition-colors">
              Telemetry & Observability
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Constructed real-time drift telemetry and latency monitors across multi-stream RTSP ingestion using Prometheus, Grafana, and OpenTelemetry. Established automated anomaly alerts to catch dropped camera frames, decoding buffer bottlenecks, and model drift before client impact.
            </p>
</div>
<div className="flex flex-col items-start lg:items-end justify-center w-full lg:w-auto lg:min-w-[260px]">
<span className="bg-paper-raised border border-line text-on-surface px-3 py-1 font-label-sm text-[11px] uppercase tracking-wider">
              MECHANISM
            </span>
<span className="font-label-timecode text-label-timecode text-ink-muted mt-2 text-left lg:text-right">
              Real-time drift, frame drop<br/>& p95 latency alerts
            </span>
</div>
</div>
{/* Row 3: Standard Row */}
<div className="py-space-xl px-6 bg-paper-sunken hover:bg-paper-raised text-on-surface transition-all border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
<div className="flex flex-col gap-3 max-w-3xl">
<div className="flex items-center gap-3 font-label-sm text-label-sm">
<span className="text-ink-muted">STAGE 03 // DEPLOYMENT DEVOPS</span>
<span className="text-ink-muted">ZERO-DOWNTIME CI/CD</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface uppercase group-hover:text-secondary transition-colors">
              Deployment Rigor & Canary Rollouts
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Standardized multi-environment model repositories on NVIDIA Triton with automated canary rollouts. Enforced strict version hashing, configuration validation, and automated rollback logic, guaranteeing zero video analytics downtime during live model upgrades.
            </p>
</div>
<div className="flex flex-col items-start lg:items-end justify-center w-full lg:w-auto lg:min-w-[260px]">
<span className="bg-paper-raised border border-line text-on-surface px-3 py-1 font-label-sm text-[11px] uppercase tracking-wider">
              MECHANISM
            </span>
<span className="font-label-timecode text-label-timecode text-ink-muted mt-2 text-left lg:text-right">
              Zero-downtime canary deployments<br/>with health check gating
            </span>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 5: BLUEPRINT (Paper #F5F2EC) */}
{/* ================================================================= */}
<section className="w-full bg-surface py-space-chapter" id="chapter-5">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface uppercase font-medium">05 / SYSTEM BLUEPRINT</span>
</div>
<span className="font-label-timecode text-label-timecode text-secondary font-medium">LIVE PIPELINE TOPOLOGY</span>
</div>
<h2 className="font-display text-display text-on-surface uppercase tracking-tight">
          A frame's journey.
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Multi-stream RTSP and VLM pipeline topology engineered for zero CPU PCIe bottlenecks and deterministic execution.
        </p>
</div>
{/* Large Horizontal Flow Diagram (4 Nodes) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
{/* Node 1 */}
<div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
<span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-ink-muted">NODE 01</span>
<span className="bg-paper-sunken px-2 py-0.5 font-label-timecode text-label-timecode text-secondary font-bold">22.0 ms</span>
</div>
<h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">150+ RTSP Feeds Ingestion & Decode</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              RTSP ingest via GStreamer with hardware NVDEC decoding directly into NVMM GPU memory buffers, completely bypassing host CPU decoding.
            </p>
</div>
<div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
            TRANS: H.264 / H.265 HW NVDEC
          </div>
</div>
{/* Node 2 */}
<div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
<span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-ink-muted">NODE 02</span>
<span className="bg-paper-sunken px-2 py-0.5 font-label-timecode text-label-timecode text-status-success font-bold">&lt; 1.2 ms</span>
</div>
<h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">CUDA IPC Ring Buffer</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Zero-copy shared memory handles transfer decoded frame tensors in &lt;1.2 ms without host PCIe bus copy overhead or inter-process serialization.
            </p>
</div>
<div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
            SYNC: ZERO-COPY SHARED MEM
          </div>
</div>
{/* Node 3 */}
<div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
<span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-ink-muted">NODE 03</span>
<span className="bg-paper-sunken px-2 py-0.5 font-label-timecode text-label-timecode text-secondary font-bold">15.0 ms / GATED</span>
</div>
<h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">Dual-Tier Inference</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Fast YOLO detection filter (15 ms) processes every frame, gating the heavier Gemma E4B VLM to execute only during triggered security anomalies.
            </p>
</div>
<div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
            ENGINES: TRT FP16 + AWQ INT4
          </div>
</div>
{/* Node 4 */}
<div className="relative bg-paper-raised p-6 border border-line flex flex-col justify-between gap-4">
<span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-[10px] text-ink-muted">NODE 04</span>
<span className="bg-paper-sunken px-2 py-0.5 font-label-timecode text-label-timecode text-status-success font-bold">5.2 ms</span>
</div>
<h4 className="font-headline-md text-body-md font-bold uppercase text-on-surface">Reasoned Dispatch & Alerting</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Structured JSON output with natural-language explanation, confidence metrics, and audit evidence image stream dispatched to downstream message brokers.
            </p>
</div>
<div className="pt-3 border-t border-line font-label-timecode text-[11px] text-ink-muted">
            BROKER: REDIS STREAMS / MQTT
          </div>
</div>
</div>
{/* Telemetry Strip Notice */}
<div className="bg-paper-sunken p-4 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-label-sm text-label-sm">
<span className="text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
          VERIFIED ARCHITECTURE TELEMETRY: p95 pipeline latency 82.4 ms · Zero host-to-device memory thrashing
        </span>
<span className="font-label-timecode text-label-timecode text-ink-muted">DUAL NVIDIA L4 (48 GB VRAM)</span>
</div>
{/* Cumulative Latency Breakdown Bar */}
<div className="flex flex-col gap-2 pt-2">
<div className="flex justify-between font-label-sm text-label-sm text-ink-muted">
<span>LATENCY WATERFALL PER FRAME</span>
<span className="text-on-surface font-semibold">TOTAL: 43.4 ms CORE (p95: 82.4 ms / SLA 100 ms)</span>
</div>
<div className="w-full bg-paper-sunken h-7 border border-line flex">
{/* Decode: 22ms (~22%) */}
<div className="h-full bg-primary text-on-primary flex items-center justify-center font-label-timecode text-[10px] w-[22%]" title="NVDEC Hardware Decode 22ms">
            DECODE 22ms
          </div>
{/* IPC: 1.2ms (~1.2%) */}
<div className="h-full bg-status-success text-on-primary flex items-center justify-center font-label-timecode text-[10px] w-[1.2%]" title="CUDA IPC 1.2ms"></div>
{/* YOLO: 15ms (~15%) */}
<div className="h-full bg-secondary text-on-secondary flex items-center justify-center font-label-timecode text-[10px] w-[15%]" title="YOLO Detection 15ms">
            YOLO 15ms
          </div>
{/* Dispatch: 5.2ms (~5.2%) */}
<div className="h-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-timecode text-[10px] w-[5.2%]" title="Dispatch 5.2ms">
            5.2
          </div>
{/* Jitter / Headroom: remainder to 100ms */}
<div className="h-full bg-paper-raised text-ink-muted flex items-center justify-center font-label-timecode text-[10px] flex-1 border-l border-dashed border-line">
            HEADROOM TO SLA: 56.6 ms MARGIN
          </div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 6: CLOSING / DISPATCH (INVERSE Dark Ink #14130F) */}
{/* ================================================================= */}
<section className="w-full bg-primary text-on-primary py-space-chapter" id="chapter-6">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-surface-container-highest/20 pb-4">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 bg-secondary animate-ping"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">06 / DISPATCH</span>
</div>
<span className="font-label-timecode text-label-timecode text-ink-faint">TRANSMISSION CHANNEL: OPEN</span>
</div>
<h2 className="font-mega-display text-[34px] xs:text-[46px] sm:text-[68px] md:text-[96px] lg:text-[120px] xl:text-mega-display leading-[0.94] text-surface tracking-tight uppercase select-none">
          Need someone to lead the next pipeline?
        </h2>
<p className="font-body-lg text-body-lg text-ink-faint max-w-3xl leading-relaxed">
          Open to Lead AI Engineer, Staff Computer Vision Engineer, and Staff GenAI Systems Architect roles. Bangalore (onsite / hybrid) or remote. Inquiries answered within 24 hours.
        </p>
</div>
{/* Action Buttons Row */}
<div className="flex flex-wrap items-center gap-4 pt-space-lg">
<a className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-full hover:bg-signal-orange-hover transition-colors font-semibold" href="mailto:rajesh.ai.engineer@outlook.com">
<span className="material-symbols-outlined text-[18px]">mail</span>
          Email Rajesh
        </a>
<a className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<span>LinkedIn</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">
<span>GitHub</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
{/* Visual Motion Callout Strip */}
<div className="mt-space-xl pt-space-lg border-t border-surface-container-highest/20 flex flex-wrap justify-between items-center font-label-timecode text-label-timecode text-ink-faint gap-4">
<div className="flex items-center gap-4">
<span>TELEMETRY_ENGINE: ACTIVE</span>
<span className="text-surface-container-highest/40">|</span>
<span>BUFFER: ZERO-COPY RING</span>
<span className="text-surface-container-highest/40">|</span>
<span>LATENCY SLA: &lt;100 ms</span>
</div>
<div className="uppercase">
          © 2026 RAJESH KUMAR S · BANGALORE · UTC+5:30
        </div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}
