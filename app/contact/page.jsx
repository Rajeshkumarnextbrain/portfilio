'use client';

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    navigator.clipboard.writeText("rajesh.ai.engineer@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <main className="w-full pt-16 bg-surface lg:pl-12"><div className="flex flex-col w-full selection:bg-secondary selection:text-on-secondary">
{/* PERSISTENT SUBTLE TELEMETRY MARKER (DESKTOP) */}
<div className="fixed left-2 bottom-8 z-30 hidden xl:flex flex-col items-start gap-1 font-label-timecode text-label-timecode text-ink-faint pointer-events-none select-none">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-secondary animate-ping"></span>
<span className="tracking-widest uppercase">FRAME 05 / 05 · DISPATCH</span>
</div>
<span className="text-[9px] tracking-widest text-ink-muted">SYS_SIG_TX // 24H_ACK</span>
</div>
{/* CHAPTER 0: HERO (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-start justify-between gap-space-2xl">
{/* Left Column: Copy & CTAs */}
<div className="flex-1 flex flex-col items-start">
<div className="flex items-center gap-3 mb-space-md">
<span className="w-2 h-2 bg-secondary"></span>
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-ink-muted">CONTACT // DISPATCH · STAGE 05/05</span>
</div>
<h1 className="font-headline-lg lg:font-mega-display text-headline-lg lg:text-mega-display tracking-tighter text-on-surface uppercase mb-space-lg leading-[0.95]">
<span>Send the</span><br/>
<mark className="bg-signal-orange-tint text-secondary px-2 py-0.5 rounded inline-block">signal.</mark><br/>
<span>I reply in 24h<span className="animate-pulse text-secondary">_</span></span>
</h1>
<p className="font-body-lg text-body-lg text-ink-muted max-w-2xl mb-space-xl">
          Actively interviewing with visionary engineering teams building production AI systems. Open to Senior, Lead, or Staff AI Engineer opportunities, available for technical architecture interviews, systems whiteboard deep-dives, team leadership discussions, and remote or hybrid positions.
        </p>
<div className="flex items-center flex-wrap gap-space-md">
<a className="inline-flex items-center gap-2 px-space-xl py-3.5 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-timecode text-label-timecode tracking-wider uppercase transition-colors" href="mailto:rajesh.ai.engineer@outlook.com">
<span className="material-symbols-outlined text-[18px]">mail</span>
<span>Email Rajesh</span>
</a>
<button className="inline-flex items-center gap-1.5 px-space-md py-3.5 bg-paper-sunken hover:bg-surface-container-high text-on-surface rounded-full font-label-timecode text-label-timecode uppercase tracking-wider transition-colors" onClick={handleCopyEmail}>
<span className="material-symbols-outlined text-[16px]">content_copy</span>
<span>{copied ? 'Copied!' : 'Copy Address'}</span>
</button>
<a className="inline-flex items-center gap-1.5 px-space-lg py-3.5 bg-paper-raised hover:bg-primary hover:text-on-primary text-on-surface rounded-full font-label-timecode text-label-timecode tracking-wider uppercase transition-all" href="https://linkedin.com/in/rajesh-kumar-ai" rel="noopener noreferrer" target="_blank">
<span>View LinkedIn</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
</div>
{/* Right Column: Transmitting Optical Radar */}
<div className="w-full lg:w-[360px] flex justify-center shrink-0">
<div className="relative w-[340px] h-[340px] sm:w-[360px] sm:h-[360px] bg-paper-raised p-6 flex flex-col justify-between">
{/* Viewfinder Brackets ⌜ ⌝ ⌞ ⌟ */}
<div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary pointer-events-none"></div>
<div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary pointer-events-none"></div>
<div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary pointer-events-none"></div>
<div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary pointer-events-none"></div>
{/* Radar Header Meta */}
<div className="flex items-center justify-between font-label-sm text-label-sm text-ink-muted">
<span className="text-secondary font-bold tracking-widest flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block animate-ping"></span>
              RADAR_01
            </span>
<span className="font-label-timecode">2.4 GHz CARRIER</span>
</div>
{/* Animated Concentric Pulse Graphics */}
<div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
{/* Concentric rings */}
<div className="absolute w-44 h-44 rounded-full border border-line animate-ping opacity-25"></div>
<div className="absolute w-36 h-36 rounded-full border border-secondary/40"></div>
<div className="absolute w-24 h-24 rounded-full border border-line"></div>
<div className="absolute w-12 h-12 rounded-full border border-secondary/60"></div>
{/* Crosshair Lines */}
<div className="absolute w-full h-[1px] bg-line/60"></div>
<div className="absolute h-full w-[1px] bg-line/60"></div>
{/* Center Point with orange pulse */}
<div className="relative z-10 w-3 h-3 bg-secondary rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-on-secondary rounded-full"></div>
</div>
{/* Peripheral Angle Ticks */}
<span className="absolute top-2 font-label-sm text-[9px] text-ink-faint">000°</span>
<span className="absolute right-2 font-label-sm text-[9px] text-ink-faint">090°</span>
<span className="absolute bottom-2 font-label-sm text-[9px] text-ink-faint">180°</span>
<span className="absolute left-2 font-label-sm text-[9px] text-ink-faint">270°</span>
</div>
{/* Radar Footer Meta */}
<div className="flex flex-col gap-1 font-label-sm text-label-sm text-ink-muted pt-2 border-t border-line">
<div className="flex items-center justify-between">
<span className="text-ink-muted uppercase">STATUS:</span>
<span className="text-on-surface font-semibold uppercase">TRANSMITTING</span>
</div>
<div className="flex items-center justify-between">
<span className="text-ink-muted uppercase">QUEUE:</span>
<span className="text-secondary font-semibold uppercase">AWAITING REPLY</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 1: CANDIDATE STATUS (Paper Sunken #ECE8DF) */}
<section className="w-full bg-paper-sunken py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col gap-space-lg">
<div className="flex items-center justify-between font-label-timecode text-label-timecode text-ink-muted">
<span className="text-secondary font-semibold tracking-widest uppercase">01 / STATUS</span>
<span className="uppercase tracking-widest text-[11px]">SYS_TELEMETRY_REF: RK-2026-V1</span>
</div>
{/* Instrument Console Panel */}
<div className="relative bg-paper-raised p-space-md sm:p-space-lg">
{/* Viewfinder corner brackets */}
<div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none"></div>
<div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none"></div>
<div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none"></div>
<div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none"></div>
<div className="pb-space-md mb-space-md border-b border-line flex items-center justify-between flex-wrap gap-2">
<span className="font-label-timecode text-label-timecode text-on-surface uppercase font-bold tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[16px]">tune</span>
            CANDIDATE STATUS · LIVE TELEMETRY
          </span>
<span className="font-label-sm text-label-sm text-ink-faint">SYNCED: 2026-Q1 // PRODUCTION READINESS</span>
</div>
{/* 5-column Telemetry Readout Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md lg:gap-0 lg:divide-x lg:divide-line">
{/* Col 1 */}
<div className="flex flex-col gap-1 lg:px-4 first:pl-0">
<span className="font-label-sm text-label-sm text-ink-faint uppercase">AVAILABILITY</span>
<div className="flex items-center gap-2 mt-1">
<span className="w-2.5 h-2.5 rounded-full bg-status-success inline-block animate-pulse"></span>
<span className="font-headline-md text-body-md font-semibold text-on-surface">Actively interviewing</span>
</div>
<span className="font-label-sm text-[11px] text-ink-muted mt-0.5">Immediate interview stages</span>
</div>
{/* Col 2 */}
<div className="flex flex-col gap-1 lg:px-4">
<span className="font-label-sm text-label-sm text-ink-faint uppercase">NOTICE PERIOD</span>
<span className="font-headline-md text-headline-md text-on-surface mt-1 leading-none">30 days</span>
<span className="font-label-sm text-[11px] text-ink-muted mt-0.5">Standard transition cycle</span>
</div>
{/* Col 3 */}
<div className="flex flex-col gap-1 lg:px-4">
<span className="font-label-sm text-label-sm text-ink-faint uppercase">TARGET SCOPE</span>
<span className="font-headline-md text-body-md font-semibold text-on-surface mt-1">Senior / Lead / Staff</span>
<span className="font-label-sm text-[11px] text-ink-muted mt-0.5">AI &amp; CV Systems Engineer</span>
</div>
{/* Col 4 */}
<div className="flex flex-col gap-1 lg:px-4">
<span className="font-label-sm text-label-sm text-ink-faint uppercase">LOCATION</span>
<span className="font-headline-md text-body-md font-semibold text-on-surface mt-1">Bangalore, India</span>
<span className="font-label-sm text-[11px] text-ink-muted mt-0.5">Onsite / Hybrid / Remote</span>
</div>
{/* Col 5 */}
<div className="flex flex-col gap-1 lg:px-4 last:pr-0">
<span className="font-label-sm text-label-sm text-ink-faint uppercase">TIMEZONE</span>
<span className="font-headline-md text-body-md font-semibold text-on-surface mt-1">IST (UTC+5:30)</span>
<span className="font-label-sm text-[11px] text-ink-muted mt-0.5">Flexible US/EU overlap</span>
</div>
</div>
</div>
{/* Telemetry footnote */}
<div className="flex items-center justify-between font-label-timecode text-label-timecode text-ink-muted px-1 flex-wrap gap-2">
<span className="tracking-widest">RESPONSE SLA: WITHIN 24 HOURS · VERIFIED CONTACT DISPATCH</span>
<span className="text-ink-faint">GEO_COORD: 12.9716° N, 77.5946° E</span>
</div>
</div>
</section>
{/* CHAPTER 2: DIRECT CHANNELS (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col">
<div className="flex items-center gap-3 mb-space-sm">
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-secondary font-semibold">02 / CHANNELS</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:font-display lg:text-display text-on-surface tracking-tight uppercase mb-space-xl">
        Pick a channel.
      </h2>
{/* Ruled Rows Container */}
<div className="w-full border-t border-b border-line flex flex-col">
{/* ROW 01: Email */}
<div className="group relative py-space-lg border-b border-line transition-all duration-200 px-space-md -mx-space-md hover:bg-primary hover:text-on-primary cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-lg min-w-0">
<span className="font-label-timecode text-label-timecode text-ink-faint group-hover:text-line tracking-widest w-8 shrink-0">01</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md group-hover:text-on-primary text-on-surface leading-tight">Email</span>
<div className="flex items-center gap-3 mt-1">
<span className="font-label-timecode text-body-sm text-secondary group-hover:text-secondary-fixed">rajesh.ai.engineer@outlook.com</span>
<button className="px-2 py-0.5 rounded text-[11px] font-label-sm uppercase bg-paper-sunken text-on-surface group-hover:bg-on-primary group-hover:text-primary transition-colors" onClick={handleCopyEmail}>Copy</button>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-xl">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-line uppercase tracking-wider max-w-sm text-left md:text-right">
              PRIMARY INBOX · FOR CTOS, HIRING MANAGERS AND TALENT PARTNERS · INTERVIEW SCHEDULING
            </span>
<span className="material-symbols-outlined text-[28px] text-ink-muted group-hover:text-on-primary group-hover:translate-x-2 transition-transform shrink-0">arrow_forward</span>
</div>
</div>
{/* ROW 02: LinkedIn */}
<a className="group relative py-space-lg border-b border-line transition-all duration-200 px-space-md -mx-space-md hover:bg-primary hover:text-on-primary cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-space-md" href="https://linkedin.com/in/rajesh-kumar-ai" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-space-lg min-w-0">
<span className="font-label-timecode text-label-timecode text-ink-faint group-hover:text-line tracking-widest w-8 shrink-0">02</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md group-hover:text-on-primary text-on-surface leading-tight">LinkedIn</span>
<span className="font-label-timecode text-body-sm text-ink-muted group-hover:text-inverse-primary mt-1">linkedin.com/in/rajesh-kumar-ai</span>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-xl">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-line uppercase tracking-wider max-w-sm text-left md:text-right">
              PREFERRED FOR CALENDAR SYNC &amp; RECRUITER OUTREACH
            </span>
<span className="material-symbols-outlined text-[28px] text-ink-muted group-hover:text-on-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform shrink-0">north_east</span>
</div>
</a>
{/* ROW 03: GitHub */}
<a className="group relative py-space-lg border-b border-line transition-all duration-200 px-space-md -mx-space-md hover:bg-primary hover:text-on-primary cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-space-md" href="https://github.com/rajesh-kumar-s" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-space-lg min-w-0">
<span className="font-label-timecode text-label-timecode text-ink-faint group-hover:text-line tracking-widest w-8 shrink-0">03</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md group-hover:text-on-primary text-on-surface leading-tight">GitHub</span>
<span className="font-label-timecode text-body-sm text-ink-muted group-hover:text-inverse-primary mt-1">github.com/rajesh-kumar-s</span>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-xl">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-line uppercase tracking-wider max-w-sm text-left md:text-right">
              SOURCE CODE, SYSTEMS IMPLEMENTATIONS, BENCHMARKS &amp; CUDA IPC REPOS
            </span>
<span className="material-symbols-outlined text-[28px] text-ink-muted group-hover:text-on-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform shrink-0">north_east</span>
</div>
</a>
{/* ROW 04: Resume */}
<div className="group relative py-space-lg transition-all duration-200 px-space-md -mx-space-md hover:bg-primary hover:text-on-primary cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-space-md" onclick="alert('Resume request logged. Please dispatch an email for complete PDF dossiers with full metrics.');">
<div className="flex items-center gap-space-lg min-w-0">
<span className="font-label-timecode text-label-timecode text-ink-faint group-hover:text-line tracking-widest w-8 shrink-0">04</span>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md group-hover:text-on-primary text-on-surface leading-tight">Resume Dossier</span>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-timecode text-body-sm text-ink-muted group-hover:text-inverse-primary">Request full resume (PDF)</span>
<span className="material-symbols-outlined text-[16px] text-ink-muted group-hover:text-on-primary">download</span>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-space-xl">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-line uppercase tracking-wider max-w-sm text-left md:text-right">
              AVAILABLE ON REQUEST · FULL CASE HISTORIES &amp; EXECUTIVE REFERENCES
            </span>
<span className="material-symbols-outlined text-[28px] text-ink-muted group-hover:text-on-primary group-hover:translate-y-1 transition-transform shrink-0">arrow_downward</span>
</div>
</div>
</div>
{/* Ruled List Telemetry Footnote */}
<div className="pt-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs font-label-timecode text-label-timecode text-ink-muted">
<span className="uppercase">LOCATION HUB: BANGALORE, KARNATAKA · INDIRANAGAR / OUTER RING ROAD TECH CORRIDOR</span>
<span className="text-ink-faint">Encrypted comms: Signal/Session handles on request.</span>
</div>
</div>
</section>
{/* CHAPTER 3: WHAT I BRING / DOSSIER (Inverse Ink Background) */}
<section className="w-full bg-primary text-on-primary py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col">
<div className="flex items-center gap-3 mb-space-sm">
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-secondary font-semibold">03 / DOSSIER</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:font-display lg:text-display text-on-primary tracking-tight uppercase mb-space-xl">
        Four things I'm hired for.
      </h2>
{/* Ruled 2x2 Grid */}
<div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-l border-primary-container">
{/* QUADRANT 01 */}
<div className="p-space-lg lg:p-space-xl border-r border-b border-primary-container flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-timecode text-label-timecode text-secondary tracking-widest font-bold">01 // VISION &amp; VIDEO</span>
<span className="font-label-sm text-label-sm text-on-primary-container tracking-wider">REAL-TIME</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">Computer Vision &amp; Real-Time Video</h3>
<ul className="flex flex-col gap-2 font-body-md text-body-md text-inverse-primary">
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>4+ years shipping mission-critical production vision systems.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>150+ concurrent live RTSP camera feeds managed in production clusters.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Deep expertise in NVIDIA DeepStream, GStreamer, ByteTrack multi-object tracking, and pose estimation.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Centralized low-latency model serving via NVIDIA Triton Inference Server.</span>
</li>
</ul>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 pt-space-md border-t border-primary-container font-label-sm text-label-sm">
<span className="px-2 py-1 bg-primary-container text-inverse-primary">YOLO26</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">DeepStream</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">GStreamer</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Triton</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">ByteTrack</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">OpenCV</span>
</div>
</div>
{/* QUADRANT 02 */}
<div className="p-space-lg lg:p-space-xl border-r border-b border-primary-container flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-timecode text-label-timecode text-secondary tracking-widest font-bold">02 // MULTIMODAL &amp; AGENTS</span>
<span className="font-label-sm text-label-sm text-on-primary-container tracking-wider">REASONING</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">Generative AI &amp; Multimodal LLMs</h3>
<ul className="flex flex-col gap-2 font-body-md text-body-md text-inverse-primary">
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Production deployment of Vision-Language Models (Gemma E4B) for automated incident reasoning.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Multi-agent state machines, directed acyclic graphs (DAGs), and supervisor patterns using LangChain &amp; LangGraph.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Standardized autonomous tool integration via Model Context Protocol (MCP).</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Multimodal RAG architectures, hybrid reranking, and evaluation harnesses.</span>
</li>
</ul>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 pt-space-md border-t border-primary-container font-label-sm text-label-sm">
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Gemma E4B</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">LangGraph</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">FastMCP</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Qdrant</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Multimodal RAG</span>
</div>
</div>
{/* QUADRANT 03 */}
<div className="p-space-lg lg:p-space-xl border-r border-b border-primary-container flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-timecode text-label-timecode text-secondary tracking-widest font-bold">03 // HARDWARE OPTIMIZATION</span>
<span className="font-label-sm text-label-sm text-on-primary-container tracking-wider">LATENCY SLAs</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">GPU Optimization &amp; Embedded Edge</h3>
<ul className="flex flex-col gap-2 font-body-md text-body-md text-inverse-primary">
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Custom TensorRT engine compilation and execution graphs for zero overhead.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>AWQ and FP8/INT4 quantization slashing cloud GPU spend by 62%.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Zero-copy inter-process communication using CUDA IPC shared memory.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Edge deployments on NVIDIA Jetson Orin and Xavier with sub-50 ms latency SLAs.</span>
</li>
</ul>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 pt-space-md border-t border-primary-container font-label-sm text-label-sm">
<span className="px-2 py-1 bg-primary-container text-inverse-primary">TensorRT</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">CUDA IPC</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">AutoAWQ</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Jetson Orin</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Nsight Compute</span>
</div>
</div>
{/* QUADRANT 04 */}
<div className="p-space-lg lg:p-space-xl border-r border-b border-primary-container flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-timecode text-label-timecode text-secondary tracking-widest font-bold">04 // SYSTEMS LEADERSHIP</span>
<span className="font-label-sm text-label-sm text-on-primary-container tracking-wider">EXECUTION</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-primary">Technical Engineering Leadership</h3>
<ul className="flex flex-col gap-2 font-body-md text-body-md text-inverse-primary">
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Mentored and led 3–5 engineers across high-velocity computer vision &amp; GenAI sprint cycles.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Established GPU memory profiling protocols with NVIDIA Nsight Systems to eliminate CUDA race conditions.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Led client technical discovery, requirements scoping, and solution architecture.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-secondary font-mono">›</span>
<span>Spearheaded multi-tenant production onboarding and zero-downtime canary rollouts.</span>
</li>
</ul>
</div>
{/* Tags */}
<div className="flex flex-wrap gap-2 pt-space-md border-t border-primary-container font-label-sm text-label-sm">
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Team Lead</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Nsight Profiling</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Architecture Review</span>
<span className="px-2 py-1 bg-primary-container text-inverse-primary">Canary Rollouts</span>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 4: HIRING LOGISTICS FAQ (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col">
<div className="flex items-center gap-3 mb-space-sm">
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-secondary font-semibold">04 / LOGISTICS</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:font-display lg:text-display text-on-surface tracking-tight uppercase mb-space-xl">
        Before you ask.
      </h2>
{/* Ruled Accordion Rows */}
<div className="w-full border-t border-line flex flex-col divide-y divide-line">
{/* ITEM 1 (Expanded by Default) */}
<details className="group py-space-lg transition-all" open="">
<summary className="flex items-center justify-between cursor-pointer list-none select-none">
<div className="flex items-center gap-space-lg">
<span className="font-label-timecode text-label-timecode text-ink-faint">01</span>
<span className="font-headline-md text-headline-md text-on-surface group-open:text-secondary transition-colors">
                What specific full-time positions are you prioritizing?
              </span>
</div>
<span className="font-headline-md text-headline-md text-ink-muted transition-transform group-open:rotate-45 shrink-0">+</span>
</summary>
<div className="pt-space-md pl-12 max-w-3xl">
<p className="font-body-lg text-body-lg text-ink-muted leading-relaxed">
              Actively interviewing for <strong className="text-on-surface">Lead AI Engineer</strong>, <strong className="text-on-surface">Staff Computer Vision Engineer</strong>, and <strong className="text-on-surface">Principal GenAI Systems</strong> roles. Seeking high-ownership engineering challenges building production video analytics, low-latency inference clusters, or multimodal agent architectures.
            </p>
</div>
</details>
{/* ITEM 2 */}
<details className="group py-space-lg transition-all">
<summary className="flex items-center justify-between cursor-pointer list-none select-none">
<div className="flex items-center gap-space-lg">
<span className="font-label-timecode text-label-timecode text-ink-faint">02</span>
<span className="font-headline-md text-headline-md text-on-surface group-open:text-secondary transition-colors">
                What are your location preferences and work arrangements?
              </span>
</div>
<span className="font-headline-md text-headline-md text-ink-muted transition-transform group-open:rotate-45 shrink-0">+</span>
</summary>
<div className="pt-space-md pl-12 max-w-3xl">
<p className="font-body-lg text-body-lg text-ink-muted leading-relaxed">
              Based in <strong className="text-on-surface">Bangalore, India</strong>, available for onsite or hybrid arrangements across Outer Ring Road, Indiranagar, Whitefield, and Electronic City. Also completely open to remote-first global engineering teams and to sponsored relocation for Tier-1 AI tech hubs.
            </p>
</div>
</details>
{/* ITEM 3 */}
<details className="group py-space-lg transition-all">
<summary className="flex items-center justify-between cursor-pointer list-none select-none">
<div className="flex items-center gap-space-lg">
<span className="font-label-timecode text-label-timecode text-ink-faint">03</span>
<span className="font-headline-md text-headline-md text-on-surface group-open:text-secondary transition-colors">
                What is your notice period and preferred interview format?
              </span>
</div>
<span className="font-headline-md text-headline-md text-ink-muted transition-transform group-open:rotate-45 shrink-0">+</span>
</summary>
<div className="pt-space-md pl-12 max-w-3xl">
<p className="font-body-lg text-body-lg text-ink-muted leading-relaxed">
              Standard 30-day notice period. Enthusiastic about deep technical conversations: systems architecture whiteboard sessions, live code walkthroughs, and practical take-home engineering challenges reflecting real-world GPU and inference systems.
            </p>
</div>
</details>
</div>
</div>
</section>
{/* CHAPTER 5: CLOSING DISPATCH (Inverse Ink Background) */}
<section className="w-full bg-primary text-on-primary py-space-chapter px-space-md lg:px-space-xl flex justify-center">
<div className="w-full max-w-[1200px] flex flex-col items-start">
<div className="flex items-center gap-3 mb-space-sm">
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-secondary font-semibold">05 / OUTPUT</span>
</div>
<h2 className="font-headline-lg lg:font-mega-display text-headline-lg lg:text-mega-display tracking-tight text-on-primary uppercase leading-[0.95] mb-space-lg">
        Let's build the<br/>next pipeline.
      </h2>
<p className="font-body-lg text-body-lg text-inverse-primary max-w-xl mb-space-xl">
        Direct inquiries receive a response within 24 hours. Send initial role specifics, architecture challenges, or scheduling links directly.
      </p>
<div className="flex items-center flex-wrap gap-space-md mb-space-3xl">
<a className="inline-flex items-center gap-2 px-space-xl py-4 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-timecode text-label-timecode tracking-wider uppercase transition-colors" href="mailto:rajesh.ai.engineer@outlook.com">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Email Rajesh</span>
</a>
<a className="inline-flex items-center gap-1.5 px-space-lg py-4 border border-on-primary-container hover:bg-primary-container text-on-primary rounded-full font-label-timecode text-label-timecode tracking-wider uppercase transition-colors" href="https://linkedin.com/in/rajesh-kumar-ai" rel="noopener noreferrer" target="_blank">
<span>LinkedIn</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
<a className="inline-flex items-center gap-1.5 px-space-lg py-4 border border-on-primary-container hover:bg-primary-container text-on-primary rounded-full font-label-timecode text-label-timecode tracking-wider uppercase transition-colors" href="https://github.com/rajesh-kumar-s" rel="noopener noreferrer" target="_blank">
<span>GitHub</span>
<span className="material-symbols-outlined text-[16px]">north_east</span>
</a>
</div>
{/* Chapter 5 Bottom Ruled Spec Line */}
<div className="w-full pt-space-lg border-t border-primary-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md font-label-timecode text-label-timecode text-on-primary-container">
<span className="tracking-widest">© 2026 RAJESH KUMAR S · BANGALORE · UTC+5:30</span>
<span className="tracking-widest text-[11px] text-ink-faint">ARCHITECTED UNDER SWISS TELEMETRY SPEC // DISPATCH COMPLETE</span>
</div>
</div>
</section>
</div></main>
    </>
  );
}
