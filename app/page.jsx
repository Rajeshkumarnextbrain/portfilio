'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
<div className="absolute top-[800px] -right-40 w-[600px] h-[400px] bg-primary-container/5 rounded-full blur-[130px] pointer-events-none -z-10"></div>

<section className="max-w-7xl mx-auto px-gutter pt-8 pb-16 lg:py-20 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/60 w-fit">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono-label text-caption text-primary tracking-wider uppercase font-semibold">Available For Hire</span>
<span className="text-outline-variant text-caption">•</span>
<span className="font-mono-label text-caption text-secondary tracking-wide">AI Engineer · Bangalore, India</span>
</div>
<h1 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-on-surface tracking-tight leading-[1.08]">I build production AI systems that <span className="text-primary underline decoration-primary/40 underline-offset-8">see, reason and scale.</span></h1>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Computer Vision, Vision-Language Models, and Generative AI. 4+ years architecting and shipping low-latency RTSP video analytics, multimodal intelligence, and multi-agent reasoning at enterprise scale.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all shadow-[0_0_24px_rgba(118,185,0,0.22)] active:scale-95" href="/#projects">
<span>View Projects</span>
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container-low border border-outline-variant/70 text-on-surface hover:text-primary hover:border-primary/50 font-mono-code text-body-sm transition-all active:scale-95" href="/contact">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">terminal</span>
<span>Contact Me</span>
</a>
</div>

<div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-on-surface-variant font-mono-code text-caption"><div className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[16px]">memory</span>
<span>Triton + TensorRT</span>
</div>
<div className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[16px]">videocam</span>
<span>DeepStream / RTSP</span>
</div>
<div className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[16px]">psychology</span>
<span>Gemma E4B Quant</span>
</div>
<div className="flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[16px]">bolt</span>
<span>CUDA IPC Shared Memory</span>
</div></div>
</div>

<div className="lg:col-span-5 w-full">
<div className="rounded-xl border border-outline-variant/80 bg-surface-container-lowest p-4 lg:p-5 shadow-2xl relative">

<div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-variant/40 pb-3 mb-4 font-mono-code"><div className="flex items-center gap-2 min-w-0"><span className="w-3 h-3 rounded-full bg-error/80 shrink-0"></span><span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 shrink-0"></span><span className="w-3 h-3 rounded-full bg-primary/80 shrink-0"></span><span className="text-on-surface font-mono-label text-[13px] ml-1.5 font-medium tracking-wide truncate">RTSP_H265 // TensorRT 92fps</span></div><div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-low border border-outline-variant/60 text-secondary font-mono-label text-caption font-semibold shrink-0"><span className="w-2 h-2 rounded-full bg-outline"></span><span>Illustrative</span></div></div>

<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant/40 bg-surface-container-low flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-high/60 to-surface-container-lowest opacity-95"></div><div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]"></div><div className="absolute top-6 left-6 w-36 h-40 border-2 border-primary/90 rounded-sm bg-primary/5 flex flex-col justify-between p-2 group transition-all duration-300"><div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary text-surface-container-lowest font-mono-code text-[11px] font-bold tracking-tight w-fit"><span>FORKLIFT_02 [99%]</span></div><div className="font-mono-code text-[11px] text-primary/90 leading-snug space-y-0.5 bg-surface-container-lowest/90 p-1.5 rounded backdrop-blur border border-primary/20"><div className="font-semibold">TRACK_ID: #4092</div><div>SPD: 4.2m/s | OCC: 0.12</div></div></div><div className="absolute top-8 right-6 w-36 h-48 border-2 border-[#38bdf8] rounded-sm bg-[#38bdf8]/5 flex flex-col justify-between p-2"><div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#38bdf8] text-surface-container-lowest font-mono-code text-[11px] font-bold tracking-tight w-fit"><span>PERSON_PPE_OK</span></div><div className="flex items-center justify-center my-auto opacity-75"><span aria-hidden="true" className="material-symbols-outlined text-[44px] text-[#38bdf8]">accessibility_new</span></div><div className="font-mono-code text-[11px] text-[#38bdf8] leading-snug space-y-0.5 bg-surface-container-lowest/90 p-1.5 rounded backdrop-blur border border-[#38bdf8]/20"><div>HELMET: PASS (99%)</div><div>VEST: PASS (97%)</div></div></div><div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-surface-container-lowest/95 border border-outline-variant/60 font-mono-code text-[11px] text-secondary flex items-center gap-3 backdrop-blur shadow-lg"><span className="text-primary flex items-center gap-1 font-semibold"><span aria-hidden="true" className="material-symbols-outlined text-[15px]">center_focus_strong</span>VLM_ACTIVE</span><span className="text-on-surface-variant">AWQ INT4 + FP16 ATTN</span><span className="text-primary font-bold">92.4 FPS</span></div></div>

<div className="grid grid-cols-2 gap-3 mt-4 pt-3.5 border-t border-surface-variant/40 font-mono-code"><div className="bg-surface-container-low/90 p-3.5 rounded-lg border border-outline-variant/40 flex flex-col justify-between gap-1"><div className="flex items-center justify-between"><span className="text-caption text-secondary font-medium tracking-wider uppercase">Latency (E2E)</span><span className="text-caption px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">p95</span></div><div className="text-headline-md font-bold text-primary tracking-tight">8.4ms</div><span className="text-caption text-on-surface-variant truncate">RTSP GStreamer Pipeline</span></div><div className="bg-surface-container-low/90 p-3.5 rounded-lg border border-outline-variant/40 flex flex-col justify-between gap-1"><div className="flex items-center justify-between"><span className="text-caption text-secondary font-medium tracking-wider uppercase">Throughput &amp; VRAM</span><span className="text-caption px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">-82% AWQ</span></div><div className="text-headline-md font-bold text-on-surface tracking-tight">92 FPS <span className="text-caption text-primary font-semibold">· 3.8GB</span></div><span className="text-caption text-on-surface-variant truncate">Gemma E4B TensorRT</span></div></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter pb-16 w-full">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-colors group">
<div className="font-mono-metric text-mono-metric text-on-surface group-hover:text-primary transition-colors">150+</div>
<div className="font-headline-md text-body-md font-semibold text-on-surface mt-1">Live Camera Streams</div>
<p className="font-body-sm text-caption text-secondary mt-1">One isolated process per camera, each running multiple use cases.</p>
</div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-colors group">
<div className="font-mono-metric text-mono-metric text-on-surface group-hover:text-primary transition-colors">25+</div>
<div className="font-headline-md text-body-md font-semibold text-on-surface mt-1">Production AI Use Cases</div>
<p className="font-body-sm text-caption text-secondary mt-1">A shared YOLO26 detector feeds per-camera use cases: crowd, PPE, distress, fight.</p>
</div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-colors group">
<div className="font-mono-metric text-mono-metric text-primary">~6x</div>
<div className="font-headline-md text-body-md font-semibold text-on-surface mt-1">GPU Memory Reduction</div>
<p className="font-body-sm text-caption text-secondary mt-1">Models served once from Triton + TensorRT, not per camera. Frames move via zero-copy CUDA shared memory.</p>
</div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/40 transition-colors group">
<div className="font-mono-metric text-mono-metric text-on-surface group-hover:text-primary transition-colors">5+</div>
<div className="font-headline-md text-body-md font-semibold text-on-surface mt-1">Client Deployments</div>
<p className="font-body-sm text-caption text-secondary mt-1">Manufacturing, retail and surveillance.</p>
</div>
</div>
</section><section className="max-w-7xl mx-auto px-gutter pb-16 w-full"><div className="p-6 lg:p-8 rounded-2xl bg-surface-container border border-outline-variant/50 shadow-xl"><div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-surface-variant/40 pb-5"><div><div className="flex items-center gap-2 font-mono-code text-caption text-primary uppercase tracking-wider mb-1.5"><span aria-hidden="true" className="material-symbols-outlined text-[16px]">speed</span><span>Engineering Performance Postmortem</span></div><h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">GPU Memory &amp; Throughput Benchmark</h2></div><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/40 font-mono-code text-caption text-secondary"><span className="w-2 h-2 rounded-full bg-primary"></span><span>Workload: YOLO26, Pose, RetinaFace, ArcFace on 2x NVIDIA L4</span></div></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono-code"><div className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/40 flex flex-col justify-between"><div className="flex items-center justify-between mb-3"><span className="text-body-sm font-semibold text-on-surface">VRAM for 50 cameras</span><span className="text-caption px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/30 font-bold">~6x LESS</span></div><div className="space-y-3"><div className="space-y-1"><div className="flex justify-between text-caption text-secondary"><span>Per-camera loading (projected)</span><span className="text-on-surface font-semibold">~125 GB</span></div><div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden"><div className="h-full rounded-full bg-secondary-container" style={{width: "100%"}}></div></div></div><div className="space-y-1"><div className="flex justify-between text-caption text-secondary"><span>Centralized Triton + TensorRT</span><span className="text-primary font-bold">~20 GB</span></div><div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden"><div className="h-full rounded-full bg-primary" style={{width: "16%"}}></div></div></div></div><p className="text-[11px] text-secondary mt-4 pt-3 border-t border-surface-variant/40">Models are loaded once in Triton instead of once per camera.</p></div><div className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/40 flex flex-col justify-between"><div className="flex items-center justify-between mb-3"><span className="text-body-sm font-semibold text-on-surface">Inference throughput</span><span className="text-caption px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/30 font-bold">~2x BOOST</span></div><div className="space-y-3"><div className="space-y-1"><div className="flex justify-between text-caption text-secondary"><span>Without shared memory</span><span className="text-on-surface font-semibold">~90 req/s</span></div><div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden"><div className="h-full rounded-full bg-secondary-container" style={{width: "50%"}}></div></div></div><div className="space-y-1"><div className="flex justify-between text-caption text-secondary"><span>Zero-copy CUDA shared memory</span><span className="text-primary font-bold">~175 req/s</span></div><div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden"><div className="h-full rounded-full bg-primary" style={{width: "100%"}}></div></div></div></div><p className="text-[11px] text-secondary mt-4 pt-3 border-t border-surface-variant/40">Frames move between camera workers and Triton without PCIe copies.</p></div><div className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/40 flex flex-col justify-between"><div className="flex items-center justify-between mb-3"><span className="text-body-sm font-semibold text-on-surface">Latency</span><span className="text-caption px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/30 font-bold">SUB-100 MS</span></div><div className="py-4 my-auto flex flex-col items-center justify-center"><div className="text-mono-metric font-bold text-primary tracking-tight">&lt;100 ms</div><span className="text-caption text-secondary mt-1 font-mono-code">p95 End-to-End Latency</span></div><p className="text-[11px] text-secondary mt-4 pt-3 border-t border-surface-variant/40">End-to-end across 150+ live streams.</p></div></div></div></section>

<section className="max-w-7xl mx-auto px-gutter py-16 w-full border-t border-surface-variant/40" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 font-mono-code text-caption text-primary uppercase tracking-wider mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">dataset</span>
<span>Flagship Deployments</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Architected &amp; Shipped Systems</h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md">
          End-to-end architectures from raw GStreamer pipelines to multi-agent LLM reasoning runtimes.
        </p>
</div>
<div className="flex flex-wrap items-center gap-2 mb-8 font-mono-code text-caption">
  <button
    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all ${
      filter === 'all'
        ? 'bg-primary-container text-on-primary-container border-primary/30'
        : 'bg-surface-container text-secondary hover:text-on-surface border-outline-variant/40'
    }`}
    onClick={() => setFilter('all')}
  >
    All Projects
  </button>
  <button
    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all ${
      filter === 'cv'
        ? 'bg-primary-container text-on-primary-container border-primary/30'
        : 'bg-surface-container text-secondary hover:text-on-surface border-outline-variant/40'
    }`}
    onClick={() => setFilter('cv')}
  >
    Computer Vision
  </button>
  <button
    className={`px-3 py-1.5 rounded-lg font-semibold border transition-all ${
      filter === 'genai'
        ? 'bg-primary-container text-on-primary-container border-primary/30'
        : 'bg-surface-container text-secondary hover:text-on-surface border-outline-variant/40'
    }`}
    onClick={() => setFilter('genai')}
  >
    GenAI / LLMs
  </button>
</div><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<a className="project-card flex flex-col justify-between rounded-xl bg-surface-container border border-outline-variant/50 p-6 lg:p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group" data-category="cv genai" href="/project-visionfacts" style={{ display: (filter === "all" || filter === "cv" || filter === "genai") ? "flex" : "none" }}>
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary font-mono-code text-caption font-semibold">
        COMPUTER VISION PLATFORM
      </span>
<span aria-hidden="true" className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">deployed_code</span>
</div>
<h3 className="font-headline-lg text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
      Visionfacts.AI
    </h3>
<p className="font-body-md text-body-sm text-secondary mt-3 leading-relaxed">
      Production video analytics platform for surveillance, manufacturing and retail, serving 150+ live camera streams.
    </p>

<div className="my-5 p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 font-mono-code text-caption text-on-surface space-y-1.5">
<div className="flex items-center justify-between"><span className="text-secondary">Streams:</span><span className="text-primary font-semibold">150+</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">VRAM (50 cameras):</span><span className="text-primary font-semibold">~125 GB -&gt; ~20 GB</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">Use cases:</span><span className="text-on-surface font-semibold">25+</span></div>
</div>

<div className="flex flex-wrap gap-1.5 mb-6">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Triton</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">TensorRT</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">gRPC</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">YOLO26</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Gemma VLM</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Docker</span>
</div>
</div>
<div className="flex items-center gap-1.5 font-mono-code text-body-sm font-semibold text-primary group-hover:text-primary-fixed transition-colors pt-3 border-t border-surface-variant/40">
<span>View case study</span>
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</a>

<a className="project-card flex flex-col justify-between rounded-xl bg-surface-container border border-outline-variant/50 p-6 lg:p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group" data-category="genai llm" href="/project-analytics-agent" style={{ display: (filter === "all" || filter === "genai") ? "flex" : "none" }}>
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-2.5 py-1 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] font-mono-code text-caption font-semibold">
        MULTI-AGENT AI
      </span>
<span aria-hidden="true" className="material-symbols-outlined text-outline group-hover:text-[#38bdf8] transition-colors">smart_toy</span>
</div>
<h3 className="font-headline-lg text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
      Visionfacts Analytics Agent
    </h3>
<p className="font-body-md text-body-sm text-secondary mt-3 leading-relaxed">
      Multi-agent system that answers questions about surveillance and operational data in plain language and emails automated reports.
    </p>

<div className="my-5 p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 font-mono-code text-caption text-on-surface space-y-1.5">
<div className="flex items-center justify-between"><span className="text-secondary">Agents:</span><span className="text-[#38bdf8] font-semibold">Supervisor, Analytics, Reports</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">Protocol:</span><span className="text-on-surface font-semibold">MCP</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">Data:</span><span className="text-on-surface font-semibold">PostgreSQL</span></div>
</div>

<div className="flex flex-wrap gap-1.5 mb-6">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">LangChain</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Deep Agents</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">MCP</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">PostgreSQL</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">FastAPI</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">React</span>
</div>
</div>
<div className="flex items-center gap-1.5 font-mono-code text-body-sm font-semibold text-primary group-hover:text-primary-fixed transition-colors pt-3 border-t border-surface-variant/40">
<span>View case study</span>
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</a>

<a className="project-card flex flex-col justify-between rounded-xl bg-surface-container border border-outline-variant/50 p-6 lg:p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group" data-category="genai llm" href="/project-edubotix" style={{ display: (filter === "all" || filter === "genai") ? "flex" : "none" }}>
<div>
<div className="flex items-center justify-between mb-4">
<span className="px-2.5 py-1 rounded bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7] font-mono-code text-caption font-semibold">RAG ASSISTANT</span>
<span aria-hidden="true" className="material-symbols-outlined text-outline group-hover:text-[#a855f7] transition-colors">model_training</span>
</div>
<h3 className="font-headline-lg text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
      Edubotix
    </h3>
<p className="font-body-md text-body-sm text-secondary mt-3 leading-relaxed">
      Context-aware learning assistant giving personalized answers across academic subjects, using RAG, query rewriting and conversation memory.
    </p>

<div className="my-5 p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 font-mono-code text-caption text-on-surface space-y-1.5">
<div className="flex items-center justify-between"><span className="text-secondary">Role:</span><span className="text-[#a855f7] font-semibold">Team Lead</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">Vector DB:</span><span className="text-on-surface font-semibold">Qdrant</span></div>
<div className="flex items-center justify-between"><span className="text-secondary">LLM:</span><span className="text-on-surface font-semibold">AWS Bedrock</span></div>
</div>

<div className="flex flex-wrap gap-1.5 mb-6">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">LangChain</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Qdrant</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">MongoDB</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">FastAPI</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">Docker</span>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-mono-code text-[11px]">AWS Bedrock</span>
</div>
</div>
<div className="flex items-center gap-1.5 font-mono-code text-body-sm font-semibold text-primary group-hover:text-primary-fixed transition-colors pt-3 border-t border-surface-variant/40">
<span>View case study</span>
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</a></div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-16 w-full border-t border-surface-variant/40">
<div className="mb-12">
<div className="flex items-center gap-2 font-mono-code text-caption text-primary uppercase tracking-wider mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">terminal</span>
<span>Technical Architecture</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Core Systems &amp; Engineering Stack</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between"><div>
<div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
<span aria-hidden="true" className="material-symbols-outlined text-[22px]">visibility</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">Computer Vision</h3>
<ul className="space-y-2.5 font-body-sm text-body-sm text-secondary">
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Object detection with YOLO26 and YOLOv11</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Pose estimation for distress and behavior detection</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Face recognition with RetinaFace and ArcFace</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Multi-object tracking with ByteTrack</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>DINOv3 and OpenCV</span>
</li>
</ul>
</div>
<div className="mt-6 pt-4 border-t border-surface-variant/40 font-mono-code text-[11px] text-outline">
YOLO26 · Pose · Tracking
</div></div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between"><div>
<div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] mb-5">
<span aria-hidden="true" className="material-symbols-outlined text-[22px]">cognition</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">Generative AI &amp; Agents</h3>
<ul className="space-y-2.5 font-body-sm text-body-sm text-secondary">
<li className="flex items-start gap-2">
<span className="text-[#38bdf8] mt-1 text-[12px]">▸</span>
<span>Vision-Language Models (Gemma) for fight detection</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#38bdf8] mt-1 text-[12px]">▸</span>
<span>Multi-agent systems with LangChain, Deep Agents and LangGraph</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#38bdf8] mt-1 text-[12px]">▸</span>
<span>MCP tool integration</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#38bdf8] mt-1 text-[12px]">▸</span>
<span>RAG with Qdrant and ChromaDB</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#38bdf8] mt-1 text-[12px]">▸</span>
<span>OpenAI, Gemini, AWS Bedrock and Ollama</span>
</li>
</ul>
</div>
<div className="mt-6 pt-4 border-t border-surface-variant/40 font-mono-code text-[11px] text-outline">
Multi-agent · RAG · Guardrails
</div></div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between"><div>
<div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
<span aria-hidden="true" className="material-symbols-outlined text-[22px]">speed</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">Serving &amp; Optimization</h3>
<ul className="space-y-2.5 font-body-sm text-body-sm text-secondary">
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Triton Inference Server with TensorRT engines</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Zero-copy CUDA shared memory (IPC)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Multi-GPU scheduling with a VRAM gatekeeper</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>gRPC and NVIDIA NGC containers</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary mt-1 text-[12px]">▸</span>
<span>Nsight Compute profiling and NVIDIA Jetson</span>
</li>
</ul>
</div>
<div className="mt-6 pt-4 border-t border-surface-variant/40 font-mono-code text-[11px] text-outline">
Triton · TensorRT · CUDA IPC
</div></div>

<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between"><div>
<div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] mb-5">
<span aria-hidden="true" className="material-symbols-outlined text-[22px]">developer_board</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">Backend &amp; Infrastructure</h3>
<ul className="space-y-2.5 font-body-sm text-body-sm text-secondary">
<li className="flex items-start gap-2">
<span className="text-[#a855f7] mt-1 text-[12px]">▸</span>
<span>Python and FastAPI</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#a855f7] mt-1 text-[12px]">▸</span>
<span>Multiprocessing and event-driven pipelines</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#a855f7] mt-1 text-[12px]">▸</span>
<span>MongoDB, PostgreSQL and Redis</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#a855f7] mt-1 text-[12px]">▸</span>
<span>Docker and Docker Compose</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#a855f7] mt-1 text-[12px]">▸</span>
<span>Prometheus and Grafana monitoring</span>
</li>
</ul>
</div>
<div className="mt-6 pt-4 border-t border-surface-variant/40 font-mono-code text-[11px] text-outline">
PostgreSQL · MongoDB · Redis
</div></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-16 w-full border-t border-surface-variant/40" id="experience">
<div className="mb-12">
<div className="flex items-center gap-2 font-mono-code text-caption text-primary uppercase tracking-wider mb-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">history</span>
<span>Career Track Record</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Professional Engineering Experience</h2>
</div>
<div className="flex flex-col gap-6">

<div className="p-6 lg:p-8 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/30 transition-all"><div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4"><div><h3 className="font-headline-lg text-headline-md text-on-surface font-semibold">Team Lead – AI &amp; Computer Vision</h3><div className="font-mono-code text-body-sm text-primary">Nextbrain Technologies Pvt. Ltd. <span className="text-secondary">· Bangalore, India</span></div></div><div className="px-3 py-1 rounded bg-surface-container-high text-secondary font-mono-code text-caption w-fit border border-outline-variant/40">Aug 2023 – Present</div></div><ul className="space-y-3 font-body-md text-body-sm text-secondary"><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Recruited into a 2-person AI team at a 60-70 person web and mobile development company to supply the computer vision expertise the team lacked, with no existing vision platform or reference architecture to build on.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Designed the complete software architecture for Visionfacts.AI, the company’s flagship video analytics product, covering camera orchestration, GPU model serving, and event-driven processing.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Delivered 25+ production AI use cases for manufacturing, retail, and surveillance clients across 5+ deployments.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Promoted to Team Lead in 2025 following the departure of the team’s senior AI engineer; now lead 3-5 engineers across computer vision and Generative AI delivery.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Expanded the practice into Generative AI, delivering multi-agent analytics systems, RAG assistants, and production Vision-Language Model use cases.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Own client requirement gathering, solution architecture, deployment planning, onboarding, and production support.</span></li></ul></div>

<div className="p-6 lg:p-8 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/30 transition-all">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
<div>
<h3 className="font-headline-lg text-headline-md text-on-surface font-semibold">
                Junior Vision Engineer
              </h3>
<div className="font-mono-code text-body-sm text-primary">
                SS Automation Solutions Pvt. Ltd. <span className="text-secondary">· Industrial Machine Vision &amp; Quality Inspection Automation · India</span>
</div>
</div>
<div className="px-3 py-1 rounded bg-surface-container-high text-secondary font-mono-code text-caption w-fit border border-outline-variant/40">
              Jul 2022 — Jul 2023
            </div>
</div>
<ul className="space-y-3 font-body-md text-body-sm text-secondary">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Joined with no prior computer vision background and self-taught the field on the job, becoming the engineer responsible for delivering customer inspection systems.</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Built machine vision solutions for industrial automation, dimensional measurement, and surface defect detection.</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Trained SSD, YOLOv3, and YOLOv7 detection models on large annotated image datasets, reaching 70-85% defect detection accuracy depending on defect type and part geometry.</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Deployed vision applications on NVIDIA Jetson devices, integrating industrial cameras and PLC systems for automated line control.</span>
</li>
</ul>
</div>

<div className="p-6 lg:p-8 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/30 transition-all"><div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4"><div><h3 className="font-headline-lg text-headline-md text-on-surface font-semibold">Technical Support Engineer</h3><div className="font-mono-code text-body-sm text-primary">Vedant Tech Solutions Pvt. Ltd. (DRDO) <span className="text-secondary">· Radar Data Processing, Target Tracking &amp; Signal Analysis Systems · India</span></div></div><div className="px-3 py-1 rounded bg-surface-container-high text-secondary font-mono-code text-caption w-fit border border-outline-variant/40">May 2022 — Jul 2022</div></div><ul className="space-y-3 font-body-md text-body-sm text-secondary"><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Worked on radar data processing, target tracking, and signal analysis systems.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Applied Kalman filtering and KNN-based techniques for target state estimation and noise classification.</span></li><li className="flex items-start gap-3"><span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span><span>Supported testing and validation of radar signal processing algorithms.</span></li></ul></div>
</div>
</section>


<section className="max-w-7xl mx-auto px-gutter py-16 w-full" id="contact">
<div className="rounded-2xl bg-surface-container border border-outline-variant/60 p-8 lg:p-12 relative overflow-hidden">

<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[90px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low border border-outline-variant/40 text-primary font-mono-code text-caption w-fit">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>Open for Staff Engineering &amp; Strategic Technical Advisory</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">
              Ready to build high-performance AI systems?
            </h2>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Whether you need to architect real-time multimodal surveillance, quantize massive VLMs for edge deployment, or scale multi-agent reasoning, let's connect.
            </p>
<div className="flex items-center gap-2 font-mono-code text-body-sm text-secondary pt-2">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span className="text-on-surface font-semibold">Bangalore, Karnataka, India</span>
<span className="text-outline-variant">•</span>
<span>Available for Remote / Hybrid Collaboration</span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-4">
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all shadow-[0_0_24px_rgba(118,185,0,0.2)] active:scale-95 text-center" href="/contact">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">mail</span>
<span>Get in Touch</span>
</a>
<div className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 font-mono-code text-caption text-center text-secondary">
<span className="text-outline">Direct:</span>
<span className="text-on-surface ml-1 font-semibold select-all">rajesh.kumar.ai@example.com</span>
</div>

<div className="grid grid-cols-3 gap-2 pt-2">
<a className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-primary/40 hover:text-primary text-secondary font-mono-code text-caption transition-colors" href="https://github.com/rajesh-kumar-s" rel="noopener noreferrer" target="_blank">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">code</span>
<span>GitHub</span>
</a>
<a className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-primary/40 hover:text-primary text-secondary font-mono-code text-caption transition-colors" href="https://linkedin.com/in/rajesh-kumar-ai" rel="noopener noreferrer" target="_blank">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">link</span>
<span>LinkedIn</span>
</a>
<a className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:border-primary/40 hover:text-primary text-secondary font-mono-code text-caption transition-colors" href="#" rel="noopener noreferrer" target="_blank">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">school</span>
<span>Scholar</span>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
    </div>
  );
}
