'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExperiencePage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">

<section className="relative w-full max-w-7xl mx-auto px-gutter py-8 md:py-12 overflow-hidden">

<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-primary/10 via-primary/0 to-transparent blur-3xl pointer-events-none -z-10"></div>
<div className="flex flex-col gap-6">

<div className="flex flex-wrap items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/50 text-secondary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono-label text-caption uppercase tracking-wider text-on-surface">Career Track Record · 4+ Years In Production</span>
</div>
<div className="flex items-center gap-3 font-mono-code text-caption text-secondary">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-primary" aria-hidden="true">memory</span> Edge + Cloud Inference</span>
<span className="text-outline-variant">/</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[15px] text-tertiary" aria-hidden="true">tune</span> Quantization (AWQ/TRT)</span>
</div>
</div>

<div className="max-w-4xl flex flex-col gap-4">
<h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight leading-[1.08]">Engineering Experience &amp; <span className="text-primary-container">Production Systems</span></h1>
<p className="font-body-lg text-body-lg text-secondary max-w-3xl">
          A chronology of architecting real-time RTSP video inference microservices, fine-tuning Vision-Language Models, and deploying cost-optimized edge AI for high-throughput enterprise applications.
        </p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

<div className="bg-surface-container-low/90 backdrop-blur-md p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
<div className="flex items-center justify-between text-secondary">
<span className="font-mono-label text-caption uppercase">Industry Span</span>
<span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">calendar_month</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-semibold tracking-tight">4+ <span className="text-primary text-[1.25rem]">Years</span></div>
<p className="font-caption text-caption text-secondary mt-1">Production AI &amp; Systems Delivery</p>
</div>
</div>

<div className="bg-surface-container-low/90 backdrop-blur-md p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
<div className="flex items-center justify-between text-secondary">
<span className="font-mono-label text-caption uppercase">Concurrent Pipes</span>
<span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">videocam</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-semibold tracking-tight">150+ <span className="text-primary text-[1.25rem]">Streams</span></div>
<p className="font-caption text-caption text-secondary mt-1">GStreamer/DeepStream Low-Latency</p>
</div>
</div>

<div className="bg-surface-container-low/90 backdrop-blur-md p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
<div className="flex items-center justify-between text-secondary">
<span className="font-mono-label text-caption uppercase">Compute Efficiency</span>
<span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">savings</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-semibold tracking-tight">62% <span className="text-primary text-[1.25rem]">Drop</span></div>
<p className="font-caption text-caption text-secondary mt-1">Cloud GPU TCO Cut via AWQ &amp; TRT</p>
</div>
</div>

<div className="bg-surface-container-low/90 backdrop-blur-md p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-sm">
<div className="flex items-center justify-between text-secondary">
<span className="font-mono-label text-caption uppercase">Team Leadership</span>
<span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">groups</span>
</div>
<div className="mt-3">
<div className="font-mono-metric text-mono-metric text-on-surface font-semibold tracking-tight">3–5 <span className="text-primary text-[1.25rem]">Engineers</span></div>
<p className="font-caption text-caption text-secondary mt-1">Mentored across CV &amp; GenAI Sprints</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-8 flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-variant/40 pb-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[26px]" aria-hidden="true">timeline</span>
          Production Timeline &amp; Systems Architecture
        </h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">Deep dives into deployed inference topologies, latency profiles, and operational wins.</p>
</div>

<div className="inline-flex p-1 rounded-lg bg-surface-container-lowest border border-outline-variant/40 font-mono-code text-caption">
<button className="px-3 py-1.5 rounded-md bg-surface-container-high text-primary font-medium transition-all" id="btn-all">All Roles (3)</button>
<button className="px-3 py-1.5 rounded-md text-secondary hover:text-on-surface transition-all" id="btn-vision">CV &amp; VLMs</button>
<button className="px-3 py-1.5 rounded-md text-secondary hover:text-on-surface transition-all" id="btn-genai">GenAI / LLMs</button>
</div>
</div>

<div className="relative flex flex-col gap-12 before:absolute before:top-4 before:bottom-4 before:left-4 md:before:left-8 before:w-px before:bg-surface-variant/50">

<article className="timeline-card relative pl-12 md:pl-20 transition-all duration-300" data-category="vision">

<div className="absolute left-1 md:left-5 top-2 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center shadow-[0_0_12px_rgba(118,185,0,0.5)]"><span className="w-2 h-2 rounded-full bg-primary animate-ping"></span></div>

<div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-6 md:p-8 flex flex-col gap-6 hover:border-primary/40 transition-all shadow-md group">

<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4"><div className="flex flex-col gap-1.5"><div className="flex flex-wrap items-center gap-2"><span className="px-2.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary/30 font-mono-label text-caption">SENIOR AI ENGINEER · COMPUTER VISION &amp; GENAI</span><span className="font-mono-code text-caption text-secondary">JUL 2023 – PRESENT · BANGALORE, INDIA</span></div><h3 className="font-headline-xl text-headline-xl text-on-surface font-semibold group-hover:text-primary transition-colors">Senior AI Engineer — Computer Vision &amp; GenAI</h3><p className="font-body-md text-body-md text-secondary flex items-center gap-2"><span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">apartment</span><span className="font-semibold text-on-surface">Visionfacts.AI</span><span className="text-outline-variant">|</span><span>Enterprise Video Analytics &amp; Multimodal AI Microservices</span></p></div><div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 shrink-0"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-primary"><span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span><span>74% False Positive Cut</span></div><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-on-surface"><span className="material-symbols-outlined text-[16px] text-tertiary" aria-hidden="true">bolt</span><span>p95 Latency &lt; 85ms</span></div><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-secondary"><span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">trending_down</span><span>62% Cloud GPU Cut</span></div></div></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">

<div className="lg:col-span-7 flex flex-col gap-4">
<h4 className="font-mono-label text-caption uppercase tracking-wider text-secondary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Core Responsibilities &amp; Systems Architecture
              </h4>
<ul className="flex flex-col gap-3 font-body-sm text-body-sm text-secondary"><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span><strong className="text-on-surface">High-Throughput Pipelines:</strong> Architected low-latency RTSP video analytics microservices across 150+ concurrent camera streams, managing high-throughput GStreamer and DeepStream decode-to-inference pipelines.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span><strong className="text-on-surface">VLM Autonomous Reasoning:</strong> Spearheaded integration of Gemma E4B Vision-Language Model agents, enabling autonomous zero-shot incident reasoning and reducing false industrial safety alarms by 74%.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span><strong className="text-on-surface">TensorRT &amp; AWQ Quantization:</strong> Engineered custom TensorRT and AWQ quantization execution graphs with CUDA IPC zero-copy memory buffers, slashing monthly cloud GPU compute expenditure by 62% ($3,400/mo savings).</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span><strong className="text-on-surface">Lifecycle Ownership:</strong> Directed client requirement gathering, solution architecture, production onboarding, and multi-tenant telemetry for enterprise clients.</span></li></ul>
</div>

<div className="lg:col-span-5 flex flex-col gap-4">
<div className="bg-surface-container-lowest p-4 rounded-lg border border-surface-variant/60 flex flex-col gap-3 font-mono-code text-caption">
<div className="flex items-center justify-between border-b border-surface-variant/40 pb-2"><span className="text-on-surface font-semibold flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">developer_board</span> Visionfacts.AI Telemetry</span><span className="text-primary text-[11px] px-1.5 py-0.5 rounded bg-surface-container-high">Dual NVIDIA L4 · Lead Arch</span></div>
<div className="flex flex-col gap-2 text-secondary text-[12px]">
<div className="flex justify-between items-center">
<span>Target Stream Count:</span>
<span className="text-on-surface font-semibold">150 Streams (1080p @ 15fps)</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "88%"}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span>p95 Pipeline Latency:</span>
<span className="text-primary font-semibold">82.4 ms (Target: &lt;100ms)</span>
</div>
<div className="flex justify-between items-center">
<span>Precision Profile:</span>
<span className="text-on-surface">AWQ INT4 + FP16 Attention</span>
</div>
<div className="flex justify-between items-center">
<span>Model Backbone:</span>
<span className="text-on-surface">Gemma E4B</span>
</div>
<div className="flex justify-between items-center">
<span>Inter-Process Buffer:</span>
<span className="text-tertiary">CUDA IPC Shared Memory</span>
</div>
</div>
<div className="mt-2 p-2 rounded bg-surface-container-low border border-surface-variant/40 text-[11px] text-secondary">
<span className="text-primary font-semibold">$3,400/mo</span> savings achieved per deployed cluster via dynamic batching &amp; dynamic VRAM paging.
                </div>
</div>

<div className="flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">TensorRT</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">DeepStream</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Triton Server</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">GStreamer</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Gemma E4B</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">AWQ Quant</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">CUDA IPC</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Python AsyncIO</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">C++20</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Docker</span>
</div>
</div>
</div>
</div>
</article>

<article className="timeline-card relative pl-12 md:pl-20 transition-all duration-300" data-category="vision">

<div className="absolute left-1 md:left-5 top-2 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-outline"></span></div>
<div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-6 md:p-8 flex flex-col gap-6 hover:border-primary/40 transition-all shadow-md group">

<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-0.5 rounded bg-surface-container-high text-secondary border border-outline-variant/40 font-mono-label text-caption">INDUSTRIAL MACHINE VISION</span>
<span className="font-mono-code text-caption text-secondary">JUL 2022 – JUL 2023 · INDIA</span>
</div>
<h3 className="font-headline-xl text-headline-xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                Junior Vision Engineer
              </h3>
<p className="font-body-md text-body-md text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">precision_manufacturing</span>
<span className="font-semibold text-on-surface">SS Automation Solutions Pvt. Ltd.</span>
<span className="text-outline-variant">|</span>
<span>Industrial Machine Vision &amp; Quality Inspection Automation</span>
</p>
</div>

<div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 shrink-0">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">verified</span>
<span>70–85% Defect Accuracy</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary" aria-hidden="true">memory</span>
<span>NVIDIA Jetson Edge</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">settings_input_component</span>
<span>PLC Line Control</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
<div className="lg:col-span-7 flex flex-col gap-4">
<h4 className="font-mono-label text-caption uppercase tracking-wider text-secondary flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Engineering Deliverables &amp; Machine Vision
              </h4>
<ul className="flex flex-col gap-3 font-body-sm text-body-sm text-secondary"><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Joined with no prior computer vision background and self-taught the field on the job, becoming the engineer responsible for delivering customer inspection systems.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Built machine vision solutions for industrial automation, dimensional measurement, and surface defect detection.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Trained SSD, YOLOv3, and YOLOv7 detection models on large annotated image datasets, reaching 70-85% defect detection accuracy depending on defect type and part geometry.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Deployed vision applications on NVIDIA Jetson devices, integrating industrial cameras and PLC systems for automated line control.</span></li></ul></div></div></div></article>

<article className="timeline-card relative pl-12 md:pl-20 transition-all duration-300" data-category="vision">

<div className="absolute left-1 md:left-5 top-2 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-outline flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-outline"></span></div>
<div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-6 md:p-8 flex flex-col gap-6 hover:border-primary/40 transition-all shadow-md group">

<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex flex-wrap items-center gap-2">
<span className="px-2.5 py-0.5 rounded bg-surface-container-high text-secondary border border-outline-variant/40 font-mono-label text-caption">RADAR &amp; SIGNAL PROCESSING</span>
<span className="font-mono-code text-caption text-secondary">MAY 2022 – JUL 2022 · INDIA</span>
</div>
<h3 className="font-headline-xl text-headline-xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                Technical Support Engineer
              </h3>
<p className="font-body-md text-body-md text-secondary flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">radar</span>
<span className="font-semibold text-on-surface">Vedant Tech Solutions Pvt. Ltd. (DRDO)</span>
<span className="text-outline-variant">|</span>
<span>Radar Data Processing, Target Tracking &amp; Signal Analysis Systems</span>
</p>
</div>

<div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 shrink-0">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">check_circle</span>
<span>&gt; 99.4% Signal Precision</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary" aria-hidden="true">speed</span>
<span>Real-Time Stream</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high border border-outline-variant/50 font-mono-code text-caption text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">track_changes</span>
<span>Kalman + KNN</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2"><div className="lg:col-span-7 flex flex-col gap-4"><h4 className="font-mono-label text-caption uppercase tracking-wider text-secondary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Engineering Deliverables &amp; Signal Processing</h4><ul className="flex flex-col gap-3 font-body-sm text-body-sm text-secondary"><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Worked on radar data processing, target tracking, and signal analysis systems.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Applied Kalman filtering and KNN-based techniques for target state estimation and noise classification.</span></li><li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0" aria-hidden="true">check_circle</span><span>Supported testing and validation of radar signal processing algorithms.</span></li></ul></div><div className="lg:col-span-5 flex flex-col gap-4"><div className="flex flex-wrap gap-1.5"><span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Radar Systems</span><span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Kalman Filter</span><span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">KNN</span><span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">Signal Analysis</span><span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono-code text-caption text-secondary">MATLAB / C++</span></div></div></div></div></article>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-12 md:py-16">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-mono-label text-caption uppercase tracking-wider text-primary">ENGINEERING LEADERSHIP MATRIX</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Systems Governance &amp; Technical Execution</h2>
<p className="font-body-md text-body-md text-secondary">
          How I lead engineering teams to build resilient, fault-tolerant AI platforms with high development velocity and rigorous production testing.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40 flex flex-col gap-4 hover:border-primary/40 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">groups_3</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Team Leadership &amp; Profiling</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
            Led 3–5 engineers across CV and GenAI sprints. Instituted rigorous GPU memory profiling standards with NVIDIA Nsight Systems, eliminating CUDA memory fragmentation and race conditions.
          </p>
<div className="mt-auto pt-3 border-t border-surface-variant/40 flex items-center gap-2 font-mono-code text-caption text-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">check</span>
<span>Bi-weekly Architecture Reviews</span>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40 flex flex-col gap-4 hover:border-primary/40 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">monitoring</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Telemetry &amp; Observability</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
            Constructed real-time drift telemetry and latency monitors across multi-stream RTSP ingestion using Prometheus, Grafana, and OpenTelemetry to catch dropped camera frames and model drift proactively.
          </p>
<div className="mt-auto pt-3 border-t border-surface-variant/40 flex items-center gap-2 font-mono-code text-caption text-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">check</span>
<span>Real-time Drift &amp; Latency Alerts</span>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40 flex flex-col gap-4 hover:border-primary/40 transition-colors shadow-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]" aria-hidden="true">deployed_code</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Deployment Rigor &amp; Rollbacks</h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
            Standardized multi-environment model repositories on Triton with automated canary rollouts, strict version hashing, and automated fallback logic ensuring zero video analytics downtime.
          </p>
<div className="mt-auto pt-3 border-t border-surface-variant/40 flex items-center gap-2 font-mono-code text-caption text-primary">
<span className="material-symbols-outlined text-[16px]" aria-hidden="true">check</span>
<span>Zero-Downtime Canary Rollouts</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-8">
<div className="bg-surface-container-low rounded-2xl border border-outline-variant/40 p-6 md:p-10 flex flex-col gap-6 relative overflow-hidden">

<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<span className="font-mono-label text-caption uppercase text-primary">SYSTEM BLUEPRINT IN ACTION</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">Multi-Stream RTSP &amp; VLM Pipeline Topology</h3>
<p className="font-body-sm text-body-sm text-secondary">End-to-end zero-copy architecture designed for high-concurrency industrial plants.</p>
</div>
<div className="flex items-center gap-2 font-mono-code text-caption text-secondary">
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40">NVDEC Hardware</span>
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">arrow_forward</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40">CUDA Shared Memory</span>
<span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">arrow_forward</span>
<span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40">Triton / TensorRT</span>
</div>
</div>

<div className="w-full bg-surface-container-lowest p-6 rounded-xl border border-surface-variant/60 flex flex-col gap-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">

<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant/40 flex flex-col items-center gap-2">
<span className="material-symbols-outlined text-[28px] text-primary" aria-hidden="true">videocam</span>
<div className="font-mono-code text-on-surface font-semibold text-body-sm">150+ RTSP Feeds</div>
<p className="font-caption text-caption text-secondary">RTSP ingest via GStreamer with hardware NVDEC decoding directly to NVMM buffers.</p>
</div>

<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant/40 flex flex-col items-center gap-2">
<span className="material-symbols-outlined text-[28px] text-tertiary" aria-hidden="true">memory</span>
<div className="font-mono-code text-on-surface font-semibold text-body-sm">CUDA IPC Ring Buffer</div>
<p className="font-caption text-caption text-secondary">Zero-copy shared memory handles transfer decoded frame tensors in &lt;1.2ms without host CPU overhead.</p>
</div>

<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant/40 flex flex-col items-center gap-2">
<span className="material-symbols-outlined text-[28px] text-primary" aria-hidden="true">visibility</span>
<div className="font-mono-code text-on-surface font-semibold text-body-sm">Dual-Tier Inference</div>
<p className="font-caption text-caption text-secondary">Fast YOLO filter (15ms) gates Gemma E4B reasoning only on candidate incidents.</p>
</div>

<div className="p-4 rounded-lg bg-surface-container-low border border-surface-variant/40 flex flex-col items-center gap-2">
<span className="material-symbols-outlined text-[28px] text-tertiary" aria-hidden="true">notification_important</span>
<div className="font-mono-code text-on-surface font-semibold text-body-sm">Reasoned Dispatch</div>
<p className="font-caption text-caption text-secondary">Structured JSON output with natural language explanation &amp; audit evidence stream.</p>
</div>
</div>
<div className="flex items-center justify-between text-secondary font-mono-code text-caption px-2 pt-2 border-t border-surface-variant/40">
<span>Overall p95 Pipeline Latency: <strong className="text-primary">82.4ms</strong></span>
<span>Zero Host-to-Device Memory Thrashing</span>
<span>Dual NVIDIA L4 (48GB VRAM)</span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-12 md:py-16">
<div className="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low rounded-2xl border border-outline-variant/50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
<div className="flex flex-col gap-2 text-center md:text-left max-w-2xl">
<div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-mono-code text-caption font-semibold">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>AVAILABLE FOR SELECT ADVISORY &amp; STAFF ROLES</span>
</div>
<h3 className="font-headline-xl text-headline-xl text-on-surface font-semibold">
          Looking for an Engineering Leader or Staff AI Practitioner?
        </h3>
<p className="font-body-md text-body-md text-secondary">
          Let’s discuss architecting ultra-low latency vision microservices, deploying performant VLMs, or scaling inference infrastructure.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all active:scale-95 shadow-[0_0_24px_rgba(118,185,0,0.2)]" href="/contact">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
<span>Let's Connect for Senior/Staff Roles</span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-high border border-outline-variant/60 text-on-surface font-mono-code text-body-sm hover:border-primary/40 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">download</span>
<span>Download Resume (PDF)</span>
</a>
</div>
</div>
</section>
</div>


    </div>
  );
}
