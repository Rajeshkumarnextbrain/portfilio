'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [slotIndex, setSlotIndex] = useState(0);
  const [timeDisplay, setTimeDisplay] = useState("14:02:48:19");
  const [copied, setCopied] = useState(false);
  const [camTiles, setCamTiles] = useState(() => Array(150).fill(false));

  useEffect(() => {
    // Slot machine rotation
    const slotTimer = setInterval(() => {
      setSlotIndex((prev) => (prev + 1) % 3);
    }, 2500);

    // Millisecond clock
    const clockTimer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, "0");
      setTimeDisplay(`${h}:${m}:${s}:${ms}`);
    }, 40);

    // Camera grid random blinking
    const camTimer = setInterval(() => {
      const randIdx = Math.floor(Math.random() * 150);
      setCamTiles((prev) => {
        const next = [...prev];
        next[randIdx] = true;
        return next;
      });
      setTimeout(() => {
        setCamTiles((prev) => {
          const next = [...prev];
          next[randIdx] = false;
          return next;
        });
      }, 1200);
    }, 80);

    return () => {
      clearInterval(slotTimer);
      clearInterval(clockTimer);
      clearInterval(camTimer);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rajesh.ai.engineer@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="hidden lg:flex fixed left-0 top-16 bottom-0 w-16 z-40 flex-col items-center justify-between py-space-xl"><div className="font-label-sm text-label-sm uppercase tracking-widest text-ink-faint -rotate-90 origin-center whitespace-nowrap mt-space-xl">TELEMETRY RAIL</div><div className="flex flex-col items-center gap-space-lg"><div className="w-[1px] h-12 bg-line"></div><nav className="flex flex-col items-center gap-space-md" data-active-classes="text-primary font-bold"><a className="group flex items-center justify-center w-8 h-8 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="stage-01-ingest" href="#stage-01"><span className="group-hover:scale-110 transition-transform">01</span></a><a className="group flex items-center justify-center w-8 h-8 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="stage-02-share" href="#stage-02"><span className="group-hover:scale-110 transition-transform">02</span></a><a className="group flex items-center justify-center w-8 h-8 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="stage-03-detect" href="#stage-03"><span className="group-hover:scale-110 transition-transform">03</span></a><a className="group flex items-center justify-center w-8 h-8 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="stage-04-reason" href="#stage-04"><span className="group-hover:scale-110 transition-transform">04</span></a><a className="group flex items-center justify-center w-8 h-8 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" data-path="stage-05-deliver" href="#stage-05"><span className="group-hover:scale-110 transition-transform">05</span></a></nav><div className="w-[1px] h-12 bg-line"></div></div><div className="font-label-sm text-label-sm text-ink-faint">+</div></div><div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-space-xs bg-paper-raised px-space-sm py-1 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><span className="text-ink-muted font-label-sm text-label-sm">+</span><span className="font-label-timecode text-label-timecode uppercase tracking-wider text-primary font-medium">FRAME 01 / 05 · INGEST</span><span className="text-ink-muted font-label-sm text-label-sm">+</span></div>
      <main className="w-full pt-16 bg-surface lg:pl-16"><div className="flex flex-col w-full text-on-surface select-none">
{/* Top Progress Calibration Bar */}
<div className="w-full flex items-center justify-between px-space-md lg:px-space-xl py-2 bg-paper-sunken font-label-sm text-label-sm text-ink-muted border-b border-line">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-status-success animate-ping"></span>
<span className="tracking-widest uppercase font-semibold text-primary">SYS_INIT :: PIPELINE_MONITOR</span>
<span className="text-ink-faint">|</span>
<span>BUFFER: CUDA_IPC_RING</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-mono">CLK: {timeDisplay}</span>
<span className="hidden md:inline-block text-ink-faint">CALIBRATION_HASH: 0x884E_L4x2</span>
<span className="px-1.5 py-0.5 bg-line text-primary font-bold">100% HARDWARE SYNC</span>
</div>
</div>
{/* =========================================================================
       CHAPTER 00: HERO (Paper / Warm Tactile Surface)
       ========================================================================= */}
<section className="relative w-full bg-surface px-space-md lg:px-space-xl py-space-xl lg:py-space-3xl flex flex-col justify-between border-b border-line overflow-hidden" id="stage-00">
{/* Viewfinder Background Grids (Archival Ticks) */}
<div className="absolute inset-0 pointer-events-none opacity-40">
<div className="absolute left-6 top-8 text-ink-faint font-label-sm">+ 00.00.00</div>
<div className="absolute right-6 top-8 text-ink-faint font-label-sm">COORDINATE_REF: [12.9716, 77.5946]</div>
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-r border-dashed border-line"></div>
<div className="absolute top-1/2 left-0 right-0 h-[1px] border-b border-dashed border-line"></div>
</div>
{/* Top Availability Pill */}
<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-md mb-space-xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-paper-raised border border-line rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-status-success inline-block"></span>
<span className="font-label-timecode text-label-timecode font-semibold tracking-wider text-primary uppercase">
          AVAILABLE FOR HIRE · 30-DAY NOTICE
        </span>
</div>
<div className="font-label-timecode text-label-timecode text-ink-muted flex items-center gap-space-xs">
<span className="text-secondary font-bold">●</span>
<span>LATENCY TARGET: &lt; 10ms</span>
<span className="mx-1 text-ink-faint">/</span>
<span>VRAM SAVINGS: 84%</span>
</div>
</div>
{/* Mega Hero Grid Layout */}
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Left Column: Typography & Intent */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
<div className="flex items-center gap-space-xs text-ink-muted font-label-sm uppercase tracking-widest">
<span>PIPELINE DISPATCH</span>
<span className="text-secondary font-bold">/</span>
<span>SR. ARCHITECT</span>
</div>
<h1 className="font-mega-display text-[56px] sm:text-[84px] lg:text-[118px] leading-[0.92] tracking-tighter text-primary font-semibold">
          I build production AI systems that
          <span className="block relative mt-2 inline-block h-[1.1em] overflow-hidden align-top text-secondary">
<span className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: `translateY(-${slotIndex * 33.333}%)` }}>
    <span className="bg-signal-orange-tint px-2 py-0.5 text-secondary border-b-2 border-secondary">[see]</span>
    <span className="bg-signal-orange-tint px-2 py-0.5 text-secondary border-b-2 border-secondary">[reason]</span>
    <span className="bg-signal-orange-tint px-2 py-0.5 text-secondary border-b-2 border-secondary">[scale]</span>
  </span>
</span>
</h1>
<p className="font-body-lg text-body-lg text-ink-muted max-w-2xl leading-relaxed mt-space-sm">
          Computer Vision, Vision-Language Models, and Generative AI. 4+ years architecting and shipping low-latency RTSP video analytics, multimodal intelligence, and multi-agent reasoning at enterprise scale.
        </p>
{/* CTA Buttons */}
<div className="flex flex-wrap items-center gap-space-md pt-space-md">
<a className="group inline-flex items-center gap-space-sm px-space-xl py-3.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-label-timecode uppercase font-semibold tracking-wider rounded-full transition-all shadow-sm" href="#stage-01">
<span>Follow the frame</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform">arrow_downward</span>
</a>
<a className="inline-flex items-center gap-space-sm px-space-lg py-3.5 bg-transparent hover:bg-paper-raised text-primary border border-primary font-label-timecode text-label-timecode uppercase font-semibold tracking-wider rounded-full transition-colors" href="#stage-05">
<span>View projects</span>
<span className="font-mono text-ink-faint">(03)</span>
</a>
</div>
</div>
{/* Right Column: Precision Viewfinder Bracket Screen Simulation */}
<div className="lg:col-span-5 relative mt-space-md lg:mt-0">
{/* Structural Bracket Container */}
<div className="relative bg-paper-sunken border border-line p-space-md lg:p-space-lg">
{/* 4 Corner Viewfinder Marks */}
<div className="absolute -top-[2px] -left-[2px] w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-primary"></div>
<div className="absolute -top-[2px] -right-[2px] w-5 h-5 border-t-[2.5px] border-r-[2.5px] border-primary"></div>
<div className="absolute -bottom-[2px] -left-[2px] w-5 h-5 border-b-[2.5px] border-l-[2.5px] border-primary"></div>
<div className="absolute -bottom-[2px] -right-[2px] w-5 h-5 border-b-[2.5px] border-r-[2.5px] border-primary"></div>
{/* Video Monitor Screen Simulation */}
<div className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden flex flex-col justify-between p-space-md border border-line">
{/* Simulated CCTV Overlay Scanlines */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none bg-[length:100%_4px]"></div>
{/* Top HUD inside simulation */}
<div className="relative z-10 flex items-center justify-between text-ink-muted font-label-sm">
<div className="flex items-center gap-space-xs bg-paper-raised/90 px-2 py-0.5">
<span className="w-1.5 h-1.5 bg-secondary-container rounded-full animate-ping"></span>
<span className="font-bold text-primary">CAM_08 :: DOCK_SOUTH</span>
</div>
<div className="bg-paper-raised/90 px-2 py-0.5 font-mono text-[10px]">
                NVIDIA L4 · NVDEC 1080p60
              </div>
</div>
{/* Center Bounding Box Overlays */}
<div className="relative w-full h-full my-space-xs">
{/* Bounding Box 1: FORKLIFT */}
<div className="absolute top-8 left-6 w-48 h-32 border border-secondary-container bg-secondary-container/5 transition-all duration-300">
<div className="absolute -top-5 left-0 bg-secondary-container text-on-secondary px-1.5 py-0.5 font-label-sm text-[10px] whitespace-nowrap flex items-center gap-1 font-bold">
<span>FORKLIFT 99%</span>
<span className="opacity-75">·</span>
<span>#4092</span>
<span className="opacity-75">·</span>
<span>4.2 m/s</span>
</div>
{/* Crosshairs in box */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none text-secondary-container text-[12px] opacity-40">+</div>
</div>
{/* Bounding Box 2: PPE VERIFICATION */}
<div className="absolute bottom-6 right-8 w-36 h-40 border border-secondary-container bg-secondary-container/5">
<div className="absolute -top-5 left-0 bg-secondary-container text-on-secondary px-1.5 py-0.5 font-label-sm text-[10px] whitespace-nowrap flex items-center gap-1 font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span>PPE PASS</span>
<span className="opacity-75">·</span>
<span>HELMET 99%</span>
<span className="opacity-75">·</span>
<span>VEST 97%</span>
</div>
{/* Box corner accents */}
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-secondary-container"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary-container"></div>
</div>
</div>
{/* Bottom Telemetry HUD Inside Monitor */}
<div className="relative z-10 flex items-center justify-between bg-primary text-on-primary px- space-sm py-1.5 font-label-sm text-[11px]">
<div className="flex items-center gap-space-sm font-mono">
<span className="text-secondary-fixed">RTSP H.265</span>
<span>92 FPS</span>
<span>p95 8.4 ms</span>
<span>3.8 GB VRAM</span>
</div>
<div className="flex items-center gap-1 text-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>SINGLE-STREAM LIVE</span>
</div>
</div>
</div>
{/* Bottom Micro-specs */}
<div className="mt-space-sm flex items-center justify-between font-label-sm text-ink-muted">
<span className="flex items-center gap-1">
<span className="font-bold text-primary">FRAME_SPEC:</span> 1920x1080 YUV420 → RGB
            </span>
<span className="font-mono">ZERO_COPY_SHM = ACTIVE</span>
</div>
</div>
</div>
</div>
{/* Ticker Banner at Chapter Base */}
<div className="relative z-10 mt-space-2xl pt-space-md border-t border-line overflow-hidden w-full">
<div className="flex items-center gap-space-md whitespace-nowrap font-label-timecode text-label-timecode uppercase text-ink-muted">
<span className="text-secondary font-bold tracking-widest text-[10px]">CORE RUNTIME:</span>
<div className="flex items-center gap-space-xl tracking-wider text-primary font-medium animate-[marquee_25s_linear_infinite]">
<span>TRITON SERVER</span>
<span className="text-line">✦</span>
<span>TENSORRT ENGINE</span>
<span className="text-line">✦</span>
<span>DEEPSTREAM SDK</span>
<span className="text-line">✦</span>
<span>CUDA IPC ZERO-COPY</span>
<span className="text-line">✦</span>
<span>YOLO26 MULTI-HEAD</span>
<span className="text-line">✦</span>
<span>GEMMA E4B AWQ</span>
<span className="text-line">✦</span>
<span>LANGGRAPH AGENTS</span>
<span className="text-line">✦</span>
<span>MCP TOOLS</span>
<span className="text-line">✦</span>
<span>QDRANT VECTOR DB</span>
<span className="text-line">✦</span>
<span>FASTAPI ASYNC</span>
</div>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 01: INGEST (Paper Sunken #ECE8DF)
       ========================================================================= */}
<section className="relative w-full bg-paper-sunken px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-line" id="stage-01">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-line pb-space-lg">
<div>
<div className="font-label-timecode text-label-timecode text-secondary font-semibold uppercase tracking-widest mb-space-xs">
            01 / INGESTION ARCHITECTURE
          </div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-primary tracking-tight">
            150+ streams. Zero chaos.
          </h2>
</div>
<p className="font-body-md text-body-md text-ink-muted max-w-md">
          Live camera streams, one isolated process per camera, each running multiple use cases simultaneously with zero-copy shared memory IPC.
        </p>
</div>
{/* Main Ingest Stage: Matrix Grid + Big Readouts */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-md">
{/* Left: 150-Stream Visualizer Grid (10 rows x 15 cols = 150 items) */}
<div className="lg:col-span-7 bg-surface p-space-lg border border-line relative">
{/* Viewfinder calibration notches */}
<div className="absolute top-2 left-2 text-ink-faint font-label-sm">⌜ CAM_MATRIX_150</div>
<div className="absolute top-2 right-2 text-ink-faint font-label-sm">ACTIVE ⌝</div>
<div className="flex items-center justify-between mb-space-md pt-space-sm text-ink-muted font-label-sm">
<span>RTSP DEMUX :: DECODE POOL</span>
<span className="text-status-success font-mono font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
              ALL CHANNELS SYNCHRONIZED
            </span>
</div>
{/* Camera Grid (150 tiles generated cleanly via loop script or dense layout) */}
<div className="grid grid-cols-15 gap-1 w-full aspect-[16/9] bg-paper-sunken p-2 border border-line">
    {camTiles.map((isActive, idx) => (
      <div
        key={idx}
        className={`w-full h-full transition-colors duration-500 ${isActive ? "bg-secondary-container" : "bg-surface-variant"}`}
      />
    ))}
  </div>
<div className="mt-space-md flex flex-wrap items-center justify-between text-ink-muted font-label-sm gap-space-sm">
<span className="font-mono">INGEST THROUGHPUT: 4,500 FPS TOTAL</span>
<span className="font-mono">FRAME DROP: 0.00%</span>
<span className="text-secondary font-bold">NVDEC LOAD: 74%</span>
</div>
</div>
{/* Right: Gigantic Metric Counters with Editorial Rule Lines */}
<div className="lg:col-span-5 flex flex-col justify-center divide-y divide-line">
<div className="pb-space-xl">
<div className="font-label-sm text-label-sm uppercase tracking-widest text-ink-muted mb-space-xs">
              SCALE REGISTER #01
            </div>
<div className="font-metric-numeral text-[96px] lg:text-[130px] font-bold text-primary leading-none tracking-tighter">
              150<span className="text-secondary">+</span>
</div>
<div className="font-label-timecode text-label-timecode font-medium text-ink-muted uppercase tracking-wider mt-2">
              LIVE CONCURRENT RTSP STREAMS PROCESSED 24/7
            </div>
<p className="font-body-sm text-body-sm text-ink-muted mt-space-sm">
              Architected isolated sub-processes for hardware decoders ensuring catastrophic camera hardware disconnects never bring down adjacent analytics nodes.
            </p>
</div>
<div className="pt-space-xl">
<div className="font-label-sm text-label-sm uppercase tracking-widest text-ink-muted mb-space-xs">
              SCALE REGISTER #02
            </div>
<div className="font-metric-numeral text-[80px] lg:text-[104px] font-bold text-primary leading-none tracking-tighter">
              5<span className="text-secondary">+</span>
</div>
<div className="font-label-timecode text-label-timecode font-medium text-ink-muted uppercase tracking-wider mt-2">
              ENTERPRISE DEPLOYMENTS SERVING REAL OPERATIONS
            </div>
<p className="font-body-sm text-body-sm text-ink-muted mt-space-sm">
              Manufacturing plants, national retail footprints, and tier-1 physical surveillance perimeters operating continuously in real time.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 02: SHARE (Paper Surface)
       ========================================================================= */}
<section className="relative w-full bg-surface px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-line" id="stage-02">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Header */}
<div className="flex flex-col gap-space-xs border-b border-line pb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="font-label-timecode text-label-timecode text-secondary font-semibold uppercase tracking-widest">02 / MEMORY SHARING</span>
<span className="text-ink-faint">·</span>
<span className="font-label-sm text-label-sm text-ink-muted">IPC_MECHANICS</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-primary tracking-tight">
          Load the model once.
        </h2>
<p className="font-body-lg text-body-lg text-ink-muted max-w-3xl mt-space-xs">
          Measured on 2x NVIDIA L4 GPUs running YOLO26, Pose Estimation, and RetinaFace simultaneously. Standard naive architectures replicate model weights per camera stream. We bypass PCIe bus bottlenecks entirely.
        </p>
</div>
{/* The Bar Duel: Visual Benchmark Comparison */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-start">
{/* VRAM DUEL */}
<div className="flex flex-col gap-space-md bg-paper-sunken p-space-xl border border-line relative">
<div className="flex items-center justify-between border-b border-line pb-space-sm">
<span className="font-label-timecode text-label-timecode font-bold uppercase text-primary">01 // VRAM CONSUMPTION (50 CAMERAS)</span>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary font-label-sm font-bold uppercase tracking-wider">
              ~6X LESS VRAM
            </span>
</div>
{/* Naive Bar */}
<div className="flex flex-col gap-space-xs pt-space-sm">
<div className="flex justify-between font-label-sm text-ink-muted">
<span>Per-camera isolated load (Naive)</span>
<span className="font-mono text-primary font-bold">~125 GB</span>
</div>
<div className="w-full h-8 bg-surface-variant flex items-center px-space-sm">
<div className="h-full bg-outline-variant w-full flex items-center justify-end pr-2 text-[11px] font-mono text-on-surface-variant">
                EXCEEDS DUAL L4 LIMIT
              </div>
</div>
</div>
{/* Centralized Triton Bar */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex justify-between font-label-sm text-secondary font-bold">
<span>Centralized Triton + CUDA IPC (Rajesh Architecture)</span>
<span className="font-mono text-secondary">~20 GB TOTAL</span>
</div>
<div className="w-full h-8 bg-surface-variant flex items-center">
<div className="h-full bg-secondary-container w-[16%] flex items-center justify-start pl-2 text-[11px] font-mono text-on-secondary font-bold">
                20 GB
              </div>
</div>
</div>
<div className="font-label-sm text-ink-muted pt-2 text-[11px]">
            *Fits comfortably on single GPU instance, preserving secondary accelerator for dense Gemma VLM inference.
          </div>
</div>
{/* THROUGHPUT DUEL */}
<div className="flex flex-col gap-space-md bg-paper-sunken p-space-xl border border-line relative">
<div className="flex items-center justify-between border-b border-line pb-space-sm">
<span className="font-label-timecode text-label-timecode font-bold uppercase text-primary">02 // INFERENCE THROUGHPUT</span>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary font-label-sm font-bold uppercase tracking-wider">
              ~2X FASTER
            </span>
</div>
{/* Naive Host PCIe Bar */}
<div className="flex flex-col gap-space-xs pt-space-sm">
<div className="flex justify-between font-label-sm text-ink-muted">
<span>Host PCIe Memory Copies</span>
<span className="font-mono text-primary font-bold">~90 req/s</span>
</div>
<div className="w-full h-8 bg-surface-variant flex items-center">
<div className="h-full bg-outline-variant w-[51%] flex items-center justify-end pr-2 text-[11px] font-mono text-on-surface-variant">
                90 req/s
              </div>
</div>
</div>
{/* Zero-Copy CUDA IPC Bar */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex justify-between font-label-sm text-secondary font-bold">
<span>Zero-Copy CUDA IPC Buffer</span>
<span className="font-mono text-secondary">~175 req/s</span>
</div>
<div className="w-full h-8 bg-surface-variant flex items-center">
<div className="h-full bg-secondary-container w-[100%] flex items-center justify-end pr-3 text-[11px] font-mono text-on-secondary font-bold">
                175 req/s
              </div>
</div>
</div>
<div className="font-label-sm text-ink-muted pt-2 text-[11px]">
            *Eliminates CPU RAM host transfers. Tensor pointers pass directly inside shared GPU memory handles.
          </div>
</div>
</div>
{/* Latency & Architecture Ruled Schematic */}
<div className="border border-line bg-paper-raised p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-md">
<span className="font-label-sm text-ink-muted tracking-widest uppercase">LATENCY SLICE BENCHMARK</span>
<div className="font-metric-numeral text-[72px] lg:text-[96px] font-bold text-primary leading-none">
            &lt;100<span className="text-secondary text-[48px] lg:text-[60px] font-mono">ms</span>
</div>
<span className="font-label-timecode text-label-timecode uppercase text-ink-muted font-semibold">
            END-TO-END P95 ACROSS 150+ CONCURRENT LIVE RTSP STREAMS
          </span>
<p className="font-body-sm text-body-sm text-ink-muted mt-2">
            Includes capture, hardware decoding, zero-copy batching, TensorRT execution, and alert generation.
          </p>
</div>
{/* Inline Architecture ASCII/SVG Flow */}
<div className="w-full lg:w-auto flex-1 max-w-2xl bg-paper-sunken border border-line p-space-md">
<div className="font-label-sm text-ink-muted mb-space-sm flex justify-between">
<span>PIPELINE_FLOW_MAP</span>
<span className="font-mono text-secondary">POSIX_SHM_RING</span>
</div>
{/* Visual Nodes Row */}
<div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center font-label-sm">
<div className="p-3 bg-surface border border-line">
<div className="text-secondary font-bold">01. RTSP CAM</div>
<div className="text-[10px] text-ink-muted mt-1">NVDEC H.264/5</div>
</div>
<div className="p-3 bg-surface border border-line">
<div className="text-primary font-bold">02. SHM BUFFER</div>
<div className="text-[10px] text-ink-muted mt-1">POSIX Ring Ring</div>
</div>
<div className="p-3 bg-surface border-2 border-secondary bg-signal-orange-tint/30">
<div className="text-secondary font-bold">03. TRITON ENGINE</div>
<div className="text-[10px] text-ink-muted mt-1">Single Model TensorRT</div>
</div>
<div className="p-3 bg-surface border border-line">
<div className="text-primary font-bold">04. DISPATCH</div>
<div className="text-[10px] text-ink-muted mt-1">IPC Client Sync</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 03: DETECT (INVERSE Dark Ink #14130F)
       ========================================================================= */}
<section className="relative w-full bg-primary text-on-primary px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-inverse-surface" id="stage-03">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-ink-muted/30 pb-space-lg">
<div>
<div className="font-label-timecode text-label-timecode text-secondary-container font-bold uppercase tracking-widest mb-space-xs">
            03 / DETECT STAGE
          </div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-on-primary tracking-tight">
            25+ use cases. One shared detector.
          </h2>
</div>
<p className="font-body-md text-body-md text-surface-dim max-w-md">
          Eliminated discrete isolated model runs by multiplexing detection backbones. A unified spatial backbone routes features to specialized heads in parallel.
        </p>
</div>
{/* High Contrast Viewfinder Stage & Sequential Bounding Pulse */}
<div className="relative w-full bg-primary-container border border-ink-muted/40 p-space-lg lg:p-space-xl">
{/* Inverted Corner Viewfinders */}
<div className="absolute -top-[2px] -left-[2px] w-6 h-6 border-t-2 border-l-2 border-surface"></div>
<div className="absolute -top-[2px] -right-[2px] w-6 h-6 border-t-2 border-r-2 border-surface"></div>
<div className="absolute -bottom-[2px] -left-[2px] w-6 h-6 border-b-2 border-l-2 border-surface"></div>
<div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 border-b-2 border-r-2 border-surface"></div>
{/* Telemetry readout */}
<div className="flex items-center justify-between text-surface-dim font-label-sm border-b border-ink-muted/30 pb-space-sm mb-space-lg">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            ACTIVE MULTI-HEAD INFERENCE DISPATCHER
          </span>
<span className="font-mono text-secondary-fixed">TENSORRT ENGINE: FP16 OPTIMIZED</span>
</div>
{/* Active Tags Display Grid */}
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-space-sm text-center">
<div className="p-space-md border border-secondary-container bg-secondary-container/10 flex flex-col justify-between">
<span className="font-label-sm text-secondary-container font-bold">CROWD</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">DENSITY 88%</span>
</div>
<div className="p-space-md border border-secondary-container bg-secondary-container/20 flex flex-col justify-between">
<span className="font-label-sm text-on-secondary font-bold bg-secondary-container px-1">PPE GUARD</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">HELMET/VEST</span>
</div>
<div className="p-space-md border border-ink-muted/40 bg-surface/5 flex flex-col justify-between">
<span className="font-label-sm text-surface font-bold">DISTRESS</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">POSE ANOMALY</span>
</div>
<div className="p-space-md border border-secondary-container bg-secondary-container/10 flex flex-col justify-between">
<span className="font-label-sm text-secondary-container font-bold">VIOLENCE</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">ACTION TENSOR</span>
</div>
<div className="p-space-md border border-ink-muted/40 bg-surface/5 flex flex-col justify-between">
<span className="font-label-sm text-surface font-bold">INTRUSION</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">POLYGON ZONE</span>
</div>
<div className="p-space-md border border-secondary-container bg-secondary-container/20 flex flex-col justify-between">
<span className="font-label-sm text-secondary-container font-bold">SLIP &amp; FALL</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">VELOCITY &lt; 0.2</span>
</div>
<div className="p-space-md border border-ink-muted/40 bg-surface/5 flex flex-col justify-between">
<span className="font-label-sm text-surface font-bold">FACE VERIFY</span>
<span className="font-mono text-[10px] text-surface-dim mt-2">512D EMBED</span>
</div>
</div>
</div>
{/* Ruled Two-Column Register of Capabilities (No Cards) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-2xl gap-y-space-xl border-t border-ink-muted/30 pt-space-xl">
{/* Col 1 */}
<div className="flex flex-col gap-space-lg">
<div className="font-label-timecode text-label-timecode text-secondary-fixed font-bold tracking-widest uppercase">
            REGISTRY 01 // COMPUTER VISION STACK
          </div>
<div className="divide-y divide-ink-muted/25 font-body-md text-surface-bright">
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Detection Models</span>
<span className="font-mono text-surface-dim text-right">YOLO26, YOLOv11, YOLOv7</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Pose &amp; Action</span>
<span className="font-mono text-surface-dim text-right">YOLO-Pose, OpenPose 2D, Keypoint Kalmans</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Biometric ID</span>
<span className="font-mono text-surface-dim text-right">RetinaFace + ArcFace Cosine Search</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Tracking &amp; Fusion</span>
<span className="font-mono text-surface-dim text-right">ByteTrack, DeepSORT, Kalman Filtering</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Foundational Vision</span>
<span className="font-mono text-surface-dim text-right">DINOv3, Segment Anything, OpenCV CUDA</span>
</div>
</div>
</div>
{/* Col 2 */}
<div className="flex flex-col gap-space-lg">
<div className="font-label-timecode text-label-timecode text-secondary-fixed font-bold tracking-widest uppercase">
            REGISTRY 02 // MODEL SERVING &amp; ACCELERATION
          </div>
<div className="divide-y divide-ink-muted/25 font-body-md text-surface-bright">
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Inference Server</span>
<span className="font-mono text-surface-dim text-right">Triton Inference Server, TensorRT 10.x</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">IPC Architecture</span>
<span className="font-mono text-surface-dim text-right">CUDA IPC, POSIX Shared Memory Rings</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Hardware Targets</span>
<span className="font-mono text-surface-dim text-right">NVIDIA L4, A100, Jetson AGX Orin / Xavier</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Low-Latency Protocols</span>
<span className="font-mono text-surface-dim text-right">gRPC Async, ZeroMQ, WebRTC, RTSP Demux</span>
</div>
<div className="py-space-md flex items-start justify-between gap-space-md">
<span className="font-bold text-on-primary">Profiling Tooling</span>
<span className="font-mono text-surface-dim text-right">Nsight Systems, Perf Analyzer, PyTorch Trace</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 04: REASON (Paper Surface)
       ========================================================================= */}
<section className="relative w-full bg-surface px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-line" id="stage-04">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-xs border-b border-line pb-space-lg">
<div className="font-label-timecode text-label-timecode text-secondary font-semibold uppercase tracking-widest">
          04 / COGNITIVE REASONING &amp; VLMs
        </div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-primary tracking-tight">
          Then the system thinks.
        </h2>
<p className="font-body-lg text-body-lg text-ink-muted max-w-3xl">
          Vision-Language Models classify nuanced workplace incidents; multi-agent systems answer questions in plain English and autonomously generate the shift safety report.
        </p>
</div>
{/* Architectural SVG Pipeline Flow */}
<div className="w-full bg-paper-sunken border border-line p-space-lg lg:p-space-xl relative">
<div className="font-label-sm text-ink-muted uppercase tracking-widest mb-space-lg flex items-center justify-between">
<span>EVENT_PROPAGATION_TOPOLOGY</span>
<span className="font-mono text-status-success">STATE: CONVERGED</span>
</div>
{/* Flow Visualizer */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md items-center relative">
{/* Step 1 */}
<div className="bg-surface p-space-md border border-line flex flex-col gap-2 relative">
<span className="font-label-sm text-ink-muted">NODE 01</span>
<span className="font-headline-md text-[20px] font-bold text-primary">Frame Ingest</span>
<span className="font-mono text-[11px] text-ink-muted">1080p RTSP Stream</span>
<div className="mt-2 text-[10px] bg-paper-sunken p-1 font-mono text-primary border border-line">
              RAW YUV TENSOR
            </div>
</div>
{/* Step 2 */}
<div className="bg-surface p-space-md border border-line flex flex-col gap-2 relative">
<span className="font-label-sm text-secondary font-bold">NODE 02</span>
<span className="font-headline-md text-[20px] font-bold text-primary">YOLO Gate</span>
<span className="font-mono text-[11px] text-ink-muted">Fast Spatial Filter</span>
<div className="mt-2 text-[10px] bg-signal-orange-tint text-secondary p-1 font-mono font-bold border border-secondary">
              ANOMALY TRIGGERED
            </div>
</div>
{/* Step 3 */}
<div className="bg-surface p-space-md border border-line flex flex-col gap-2 relative">
<span className="font-label-sm text-ink-muted">NODE 03</span>
<span className="font-headline-md text-[20px] font-bold text-primary">Gemma E4B VLM</span>
<span className="font-mono text-[11px] text-ink-muted">AWQ INT4 Vision-Language</span>
<div className="mt-2 text-[10px] bg-paper-sunken p-1 font-mono text-primary border border-line">
              STRUCTURED JSON INCIDENT
            </div>
</div>
{/* Step 4 */}
<div className="bg-surface p-space-md border-2 border-primary flex flex-col gap-2 relative">
<span className="font-label-sm text-primary font-bold">NODE 04</span>
<span className="font-headline-md text-[20px] font-bold text-primary">LangGraph Agents</span>
<span className="font-mono text-[11px] text-ink-muted">Multi-Agent Reasoner</span>
<div className="mt-2 text-[10px] bg-primary text-on-primary p-1 font-mono">
              MCP TOOLS DISPATCHED
            </div>
</div>
{/* Step 5 */}
<div className="bg-paper-raised p-space-md border border-line flex flex-col gap-2 relative">
<span className="font-label-sm text-status-success font-bold">NODE 05</span>
<span className="font-headline-md text-[20px] font-bold text-primary">Shift Report</span>
<span className="font-mono text-[11px] text-ink-muted">Audit Dispatch &amp; Alert</span>
<div className="mt-2 text-[10px] bg-status-success text-on-primary p-1 font-mono font-bold">
              AUTONOMOUS LOG 100%
            </div>
</div>
</div>
{/* Connection indicators */}
<div className="hidden md:flex justify-between px-12 pt-space-sm text-secondary font-mono text-xs">
<span>───►</span>
<span>───►</span>
<span>───►</span>
<span>───►</span>
</div>
</div>
{/* GenAI Tooling Ruled Chips */}
<div className="flex flex-wrap gap-space-xs items-center font-label-timecode text-label-timecode">
<span className="text-ink-muted font-bold mr-2 uppercase">REASONING SPECIFICATIONS:</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">GEMMA E4B (AWQ INT4)</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">LANGGRAPH WORKFLOWS</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">MODEL CONTEXT PROTOCOL (MCP)</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">QDRANT VECTOR DB</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">CHROMADB EMBEDDINGS</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">AWS BEDROCK + CLAUDE 3.5</span>
<span className="px-3 py-1.5 bg-paper-sunken border border-line text-primary">OLLAMA LOCAL EDGE</span>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 05: DELIVER — Selected Work (Paper Sunken #ECE8DF)
       ========================================================================= */}
<section className="relative w-full bg-paper-sunken px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-line" id="stage-05">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-line pb-space-lg">
<div>
<div className="font-label-timecode text-label-timecode text-secondary font-semibold uppercase tracking-widest mb-space-xs">
            05 / DELIVERED PRODUCTION SYSTEMS
          </div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-primary tracking-tight">
            Shipped systems.
          </h2>
</div>
<p className="font-body-md text-body-md text-ink-muted max-w-md">
          Not proofs of concept. Enterprise platforms orchestrating compute across mission-critical facilities right now.
        </p>
</div>
{/* Ruled Interactive Project Rows (Invert on hover) */}
<div className="flex flex-col border-t border-b border-line divide-y divide-line">
{/* Row 01: Visionfacts.AI */}
<Link href="/project-visionfacts" className="block cursor-pointer group relative py-space-xl px-space-md transition-colors duration-200 hover:bg-primary hover:text-on-primary">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
<div className="lg:col-span-1 font-mono text-ink-muted group-hover:text-secondary-fixed text-lg font-bold">
              01
            </div>
<div className="lg:col-span-4">
<h3 className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary group-hover:text-on-primary">
                Visionfacts.AI
              </h3>
<p className="font-label-sm uppercase tracking-wider text-ink-muted group-hover:text-surface-dim mt-1">
                Real-Time Computer Vision Platform
              </p>
</div>
<div className="lg:col-span-5 font-body-md text-ink-muted group-hover:text-surface-bright flex flex-col gap-1">
<div className="font-mono text-sm">
                150+ streams · 125GB → 20GB VRAM (6x reduction) · 25+ simultaneous use cases
              </div>
<p className="text-xs text-ink-faint group-hover:text-surface-dim mt-1">
                Designed POSIX shared memory ring buffers with centralized Triton Inference Server and TensorRT backbones.
              </p>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<span className="inline-flex items-center gap-2 font-label-timecode uppercase font-semibold text-secondary group-hover:text-secondary-fixed">
<span>View Case Study</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
</div>
</div>
</Link>
{/* Row 02: Visionfacts Analytics Agent */}
<Link href="/project-analytics-agent" className="block cursor-pointer group relative py-space-xl px-space-md transition-colors duration-200 hover:bg-primary hover:text-on-primary">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
<div className="lg:col-span-1 font-mono text-ink-muted group-hover:text-secondary-fixed text-lg font-bold">
              02
            </div>
<div className="lg:col-span-4">
<h3 className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary group-hover:text-on-primary">
                Analytics Agent
              </h3>
<p className="font-label-sm uppercase tracking-wider text-ink-muted group-hover:text-surface-dim mt-1">
                Multi-Agent Intelligence System
              </p>
</div>
<div className="lg:col-span-5 font-body-md text-ink-muted group-hover:text-surface-bright flex flex-col gap-1">
<div className="font-mono text-sm">
                4 Specialized agent roles · MCP server architecture · 5 relational Postgres schemas
              </div>
<p className="text-xs text-ink-faint group-hover:text-surface-dim mt-1">
                Enables natural language querying of camera event logs, autonomous shift synthesis, and anomaly triaging.
              </p>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<span className="inline-flex items-center gap-2 font-label-timecode uppercase font-semibold text-secondary group-hover:text-secondary-fixed">
<span>View Case Study</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
</div>
</div>
</Link>
{/* Row 03: Edubotix */}
<Link href="/project-edubotix" className="block cursor-pointer group relative py-space-xl px-space-md transition-colors duration-200 hover:bg-primary hover:text-on-primary">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
<div className="lg:col-span-1 font-mono text-ink-muted group-hover:text-secondary-fixed text-lg font-bold">
              03
            </div>
<div className="lg:col-span-4">
<h3 className="font-headline-lg text-headline-lg font-bold tracking-tight text-primary group-hover:text-on-primary">
                Edubotix
              </h3>
<p className="font-label-sm uppercase tracking-wider text-ink-muted group-hover:text-surface-dim mt-1">
                Multimodal Academic RAG Assistant
              </p>
</div>
<div className="lg:col-span-5 font-body-md text-ink-muted group-hover:text-surface-bright flex flex-col gap-1">
<div className="font-mono text-sm">
                &gt;70% faster PDF ingestion · Hybrid dense/sparse search · 30-min conversation memory
              </div>
<p className="text-xs text-ink-faint group-hover:text-surface-dim mt-1">
                Engineered with Qdrant vector database, AWS Bedrock integration, and low-latency token streaming.
              </p>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<span className="inline-flex items-center gap-2 font-label-timecode uppercase font-semibold text-secondary group-hover:text-secondary-fixed">
<span>View Case Study</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
</div>
</div>
</Link>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 06: JOURNEY (Paper Surface)
       ========================================================================= */}
<section className="relative w-full bg-surface px-space-md lg:px-space-xl py-space-xl lg:py-space-chapter border-b border-line" id="stage-06">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Section Header */}
<div className="flex flex-col gap-space-xs border-b border-line pb-space-lg">
<div className="font-label-timecode text-label-timecode text-secondary font-semibold uppercase tracking-widest">
          06 / PROFESSIONAL TIMELINE
        </div>
<h2 className="font-headline-lg text-headline-lg lg:text-[68px] leading-tight font-bold text-primary tracking-tight">
          How I got here.
        </h2>
<p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
          From defense radar tracking and industrial edge PLCs to architecting high-throughput VLM video pipelines.
        </p>
</div>
{/* Vertical Hairline Timeline */}
<div className="relative border-l border-primary/20 ml-4 lg:ml-12 pl-6 lg:pl-12 flex flex-col gap-space-2xl">
{/* Milestone 1 */}
<div className="relative">
<div className="absolute -left-[31px] lg:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary border-4 border-surface"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
<h3 className="font-headline-md text-headline-md font-bold text-primary">
              Team Lead – AI &amp; Computer Vision
            </h3>
<span className="font-label-timecode text-label-timecode text-secondary font-bold uppercase">
              AUG 2023 – PRESENT
            </span>
</div>
<div className="font-label-sm text-ink-muted uppercase tracking-wider mb-space-sm font-semibold">
            Nextbrain Technologies · Bangalore, India
          </div>
<p className="font-body-md text-body-md text-ink-muted max-w-3xl">
            Lead engineering team of 3–5 engineers architecting Visionfacts.AI. Designed full-stack zero-copy shared memory multi-camera video pipeline processing 150+ live streams. Deployed Triton model repositories, TensorRT optimizations, and multi-agent reasoning layers for enterprise clients.
          </p>
</div>
{/* Milestone 2 */}
<div className="relative">
<div className="absolute -left-[31px] lg:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-surface"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
<h3 className="font-headline-md text-headline-md font-bold text-primary">
              Junior Vision Engineer
            </h3>
<span className="font-label-timecode text-label-timecode text-ink-muted font-bold uppercase">
              JUL 2022 – JUL 2023
            </span>
</div>
<div className="font-label-sm text-ink-muted uppercase tracking-wider mb-space-sm font-semibold">
            SS Automation Solutions
          </div>
<p className="font-body-md text-body-md text-ink-muted max-w-3xl">
            Developed real-time surface defect detection systems deployed on NVIDIA Jetson embedded edge hardware. Interfaced vision inferences directly with industrial factory floor PLCs via Modbus and serial protocols.
          </p>
</div>
{/* Milestone 3 */}
<div className="relative">
<div className="absolute -left-[31px] lg:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-line border-4 border-surface"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs mb-space-xs">
<h3 className="font-headline-md text-headline-md font-bold text-primary">
              Technical Support Engineer
            </h3>
<span className="font-label-timecode text-label-timecode text-ink-muted font-bold uppercase">
              MAY 2022 – JUL 2022
            </span>
</div>
<div className="font-label-sm text-ink-muted uppercase tracking-wider mb-space-sm font-semibold">
            Vedant Tech Solutions · DRDO Defense Project
          </div>
<p className="font-body-md text-body-md text-ink-muted max-w-3xl">
            Engineered radar target trajectory tracking and spatial state estimation using extended Kalman filtering. Calibrated coordinate registration for high-speed tracking feeds under strict latency limits.
          </p>
</div>
</div>
</div>
</section>
{/* =========================================================================
       CHAPTER 07: CONTACT / OUTPUT (INVERSE Dark Ink #14130F)
       ========================================================================= */}
<section className="relative w-full bg-primary text-on-primary px-space-md lg:px-space-xl py-space-xl lg:py-space-3xl" id="stage-07">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Section Tag */}
<div className="flex items-center justify-between border-b border-ink-muted/30 pb-space-sm">
<span className="font-label-timecode text-label-timecode text-secondary-container font-bold uppercase tracking-widest">
          07 / DISPATCH TERMINAL
        </span>
<span className="font-label-sm text-surface-dim font-mono">STATUS: AWAITING QUERY</span>
</div>
{/* Giant Invitation Headline */}
<div className="flex flex-col gap-space-md">
<h2 className="font-mega-display text-[54px] sm:text-[80px] lg:text-[124px] font-bold text-on-primary leading-[0.92] tracking-tighter">
          Let's build the next pipeline.
        </h2>
<p className="font-body-lg text-body-lg text-surface-dim max-w-3xl mt-space-sm">
          Open to Lead AI Engineer, Staff Computer Vision Engineer, and Staff GenAI Systems Architect roles. Bangalore (onsite / hybrid) or remote globally. Direct inquiries receive a technical response within 24 hours.
        </p>
</div>
{/* Action Box & Direct Links */}
<div className="flex flex-wrap items-center gap-space-md pt-space-md">
<button className="inline-flex items-center gap-space-sm px-space-xl py-4 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-label-timecode uppercase font-bold tracking-wider rounded-full transition-all" id="copy-email-btn" onClick={handleCopyEmail}>
<span className="material-symbols-outlined text-[20px]">mail</span>
<span id="email-btn-text">{copied ? "COPIED TO CLIPBOARD!" : "COPY DIRECT EMAIL: rajesh.ai.engineer@outlook.com"}</span>
<span className="material-symbols-outlined text-[18px]">content_copy</span>
</button>
<a className="inline-flex items-center gap-space-xs px-space-lg py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-label-timecode uppercase tracking-wider rounded-full transition-colors" href="https://linkedin.com" rel="noopener" target="_blank">
<span>LinkedIn</span>
<span className="font-mono text-secondary-fixed">↗</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-label-timecode uppercase tracking-wider rounded-full transition-colors" href="https://github.com" rel="noopener" target="_blank">
<span>GitHub</span>
<span className="font-mono text-secondary-fixed">↗</span>
</a>
</div>
{/* Archival System Stamp at Section Bottom */}
<div className="pt-space-2xl border-t border-ink-muted/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md font-label-sm text-surface-dim">
<div className="flex items-center gap-space-sm">
<span className="text-secondary font-bold">●</span>
<span>© 2026 RAJESH KUMAR S</span>
<span>·</span>
<span>BANGALORE, INDIA</span>
<span>·</span>
<span>UTC+5:30</span>
</div>
<div className="font-mono text-[10px] text-surface-variant">
          SPEC: 2026.1-EDITORIAL · PIPELINE TELEMETRY ACTIVE
        </div>
</div>
</div>
</section>
{/* Interactive Client-side Script for Camera Grid & Slot Machine */}

</div></main>
    </>
  );
}
