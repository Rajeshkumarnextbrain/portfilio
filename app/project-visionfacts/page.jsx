import Link from "next/link";

export default function VisionFactsFlagshipPage() {
  return (
    <>
      <main className="w-full pt-16 bg-surface lg:pl-16"><div className="flex flex-col w-full">
{/* CHAPTER 0: HERO (Paper background) */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl" id="chapter-0">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
{/* Breadcrumb mono label */}
<div className="flex items-center justify-between border-b border-line pb-space-sm">
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-widest">
          PROJECTS / VISIONFACTS.AI
        </span>
<span className="font-label-timecode text-label-timecode text-ink-faint">
          ACT 00 · CASE STUDY SPECIFICATION
        </span>
</div>
{/* Mega headline */}
<div className="flex flex-col -space-y-1 sm:-space-y-2 lg:-space-y-4">
<h1 className="font-headline-lg lg:font-mega-display text-[34px] xs:text-[46px] sm:text-[68px] md:text-[96px] lg:text-[110px] xl:text-[124px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
          Teaching
        </h1>
<div className="inline-flex items-baseline gap-space-sm flex-wrap">
<span className="font-headline-lg lg:font-mega-display text-[34px] xs:text-[46px] sm:text-[68px] md:text-[96px] lg:text-[110px] xl:text-[124px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight bg-signal-orange-tint px-2 py-0">
            130+ cameras
          </span>
</div>
<h1 className="font-headline-lg lg:font-mega-display text-[34px] xs:text-[46px] sm:text-[68px] md:text-[96px] lg:text-[110px] xl:text-[124px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
          to watch.
        </h1>
</div>
{/* Subtitle */}
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
        A production intelligent CCTV video analytics platform that turns passive surveillance feeds into automated, real-time intelligence for manufacturing plants, warehouses and retail stores.
      </p>
{/* Metadata strip */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-space-md border-t border-b border-line py-space-md font-label-timecode text-label-timecode text-on-surface">
<div className="flex flex-col gap-1 pr-space-md lg:border-r border-line">
<span className="text-ink-faint uppercase font-label-sm text-label-sm">ROLE</span>
<span className="font-medium">Lead Computer Vision &amp; AI Systems Architect (80–85% engineering ownership)</span>
</div>
<div className="flex flex-col gap-1 px-0 lg:px-space-md lg:border-r border-line">
<span className="text-ink-faint uppercase font-label-sm text-label-sm">COMPANY</span>
<span className="font-medium">Nextbrain Technologies Pvt. Ltd. · Bangalore, India</span>
</div>
<div className="flex flex-col gap-1 px-0 lg:px-space-md lg:border-r border-line">
<span className="text-ink-faint uppercase font-label-sm text-label-sm">TIMELINE</span>
<span className="font-medium">August 2023 – Present</span>
</div>
<div className="flex flex-col gap-1 pl-0 lg:pl-space-md">
<span className="text-ink-faint uppercase font-label-sm text-label-sm">DEPLOYMENT</span>
<span className="font-medium">130+ live IP cameras across 2x NVIDIA L4 GPUs (24 GB VRAM each)</span>
</div>
</div>
{/* 4 Giant Mono Numerals */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-line">
<div className="flex flex-col py-space-lg lg:pr-space-lg lg:border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile lg:text-display font-medium text-on-surface">130+</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-xs">LIVE IP CAMERAS</span>
</div>
<div className="flex flex-col py-space-lg sm:pl-space-lg lg:px-space-lg sm:border-l lg:border-l-0 lg:border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile lg:text-display font-medium text-on-surface">~6.5x</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-xs">MODEL MEMORY REDUCTION</span>
</div>
<div className="flex flex-col py-space-lg lg:px-space-lg border-t sm:border-t-0 lg:border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile lg:text-display font-medium text-on-surface">192</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-xs">REQUESTS / SECOND (YOLO26 MEAN)</span>
</div>
<div className="flex flex-col py-space-lg lg:pl-space-lg border-t lg:border-t-0 border-line">
<span className="font-metric-numeral text-metric-numeral-mobile lg:text-display font-medium text-on-surface">25+</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-xs">PRODUCTION AI MODULES</span>
</div>
</div>
{/* Visual: Camera wall with viewfinder corner brackets */}
<div className="relative w-full p-2 bg-paper-sunken border border-line">
{/* Viewfinder Brackets */}
<span className="absolute -top-2 -left-2 text-primary font-metric-numeral text-body-lg select-none">⌜</span>
<span className="absolute -top-2 -right-2 text-primary font-metric-numeral text-body-lg select-none">⌝</span>
<span className="absolute -bottom-2 -left-2 text-primary font-metric-numeral text-body-lg select-none">⌞</span>
<span className="absolute -bottom-2 -right-2 text-primary font-metric-numeral text-body-lg select-none">⌟</span>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-on-surface p-2">
{/* Camera Feed 1 */}
<div className="relative aspect-video bg-inverse-surface overflow-hidden flex flex-col justify-between p-2">
<div className="flex justify-between items-center text-surface text-label-sm font-label-sm">
<span>CAM_01 · LOGISTICS_DOCK</span>
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
</div>
{/* Bounding Box FORKLIFT */}
<div className="relative w-3/4 h-3/5 mx-auto border border-secondary-container flex items-start">
<span className="bg-secondary-container text-surface font-label-sm text-[10px] px-1 uppercase tracking-wider">FORKLIFT 0.94</span>
</div>
<span className="text-ink-faint text-[9px] font-label-timecode">FPS: 7.5 · LAT: 104ms</span>
</div>
{/* Camera Feed 2 */}
<div className="relative aspect-video bg-inverse-surface overflow-hidden flex flex-col justify-between p-2">
<div className="flex justify-between items-center text-surface text-label-sm font-label-sm">
<span>CAM_14 · ASSEMBLY_LINE</span>
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
</div>
{/* Bounding Box PPE */}
<div className="relative w-1/2 h-4/5 mx-auto border border-secondary-container flex items-start">
<span className="bg-secondary-container text-surface font-label-sm text-[10px] px-1 uppercase tracking-wider">PPE NO_VEST</span>
</div>
<span className="text-ink-faint text-[9px] font-label-timecode">FPS: 7.4 · LAT: 98ms</span>
</div>
{/* Camera Feed 3 */}
<div className="relative aspect-video bg-inverse-surface overflow-hidden flex flex-col justify-between p-2">
<div className="flex justify-between items-center text-surface text-label-sm font-label-sm">
<span>CAM_42 · NORTH_PERIMETER</span>
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
</div>
{/* Bounding Box INTRUSION */}
<div className="relative w-2/3 h-2/3 mx-auto border border-secondary-container flex items-start">
<span className="bg-secondary-container text-surface font-label-sm text-[10px] px-1 uppercase tracking-wider">INTRUSION</span>
</div>
<span className="text-ink-faint text-[9px] font-label-timecode">FPS: 7.8 · LAT: 112ms</span>
</div>
{/* Camera Feed 4 */}
<div className="relative aspect-video bg-inverse-surface overflow-hidden flex flex-col justify-between p-2">
<div className="flex justify-between items-center text-surface text-label-sm font-label-sm">
<span>CAM_88 · STORAGE_ZONE_C</span>
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
</div>
{/* Bounding Box FALL */}
<div className="relative w-4/5 h-1/2 mx-auto border border-secondary-container flex items-start">
<span className="bg-secondary-container text-surface font-label-sm text-[10px] px-1 uppercase tracking-wider">FALL 0.89</span>
</div>
<span className="text-ink-faint text-[9px] font-label-timecode">FPS: 7.2 · LAT: 109ms</span>
</div>
</div>
<div className="mt-2 flex flex-col md:flex-row items-start md:items-center justify-between text-on-surface font-label-timecode text-label-timecode px-2 py-1 bg-paper-sunken border-t border-line">
<span className="uppercase">RTSP H.264 / H.265 · 2x NVIDIA L4 · TRITON · TENSORRT FP32</span>
<span className="text-ink-muted">TELEMETRY STREAM: CONTINUOUS ACTIVE RECOVERY ENABLED</span>
</div>
</div>
{/* Tech chips */}
<div className="flex flex-wrap items-center gap-2 pt-space-xs">
<span className="font-label-sm text-label-sm text-ink-muted uppercase mr-2">Core Tech:</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">Python</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">OpenCV</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">YOLO26</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">Triton</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">TensorRT</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">CUDA IPC</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">MongoDB</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">FastAPI</span>
<span className="font-label-sm text-label-sm px-3 py-1 bg-paper-sunken text-on-surface border border-line">Docker</span>
</div>
</div>
</section>
{/* CHAPTER 1: OVERVIEW (Paper Sunken background) */}
<section className="w-full bg-paper-sunken py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-1">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">01 / OVERVIEW</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        From passive recording to automatic intelligence.
      </h2>
{/* Two-column split with hairline */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl py-space-lg border-t border-b border-line">
<div className="flex flex-col gap-space-sm pr-0 md:pr-space-xl md:border-r border-line">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-muted">PROBLEM</span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            Conventional CCTV relies on passive recording, with human operators watching dozens or hundreds of camera screens at once. This creates extreme cognitive fatigue and guarantees missed physical security infractions, worker safety hazards and inventory incidents.
          </p>
</div>
<div className="flex flex-col gap-space-sm pl-0 md:pl-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">SOLUTION</span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
            VisionFacts.ai applies deep learning computer vision directly to live RTSP camera feeds. It instantly generates structured incident records, sends real-time alert triggers and exposes operational telemetry to management dashboards, without human monitoring.
          </p>
</div>
</div>
{/* Ruled rows */}
<div className="flex flex-col border-b border-line">
<div className="py-space-md border-b border-line flex flex-col md:flex-row md:items-start gap-space-md">
<span className="w-full md:w-1/4 font-label-sm text-label-sm text-ink-muted uppercase">SCALE &amp; ENVIRONMENTS</span>
<span className="w-full md:w-3/4 font-body-md text-body-md text-on-surface">
            Shop floors, heavy machinery zones, logistics loading docks, warehouse aisles, building perimeters, retail store entrances and billing lanes. Production scale: 130+ cameras on 2x NVIDIA L4 GPUs (48 GB total VRAM).
          </span>
</div>
<div className="py-space-md flex flex-col md:flex-row md:items-start gap-space-md">
<span className="w-full md:w-1/4 font-label-sm text-label-sm text-ink-muted uppercase">CORE ENGINEERING CONTRIBUTION</span>
<span className="w-full md:w-3/4 font-body-md text-body-md text-on-surface">
            Multi-process camera isolation, multi-GPU scheduling, centralized Triton model serving, TensorRT FP32 optimization, CUDA Shared Memory IPC and Nuitka binary compilation.
          </span>
</div>
</div>
</div>
</section>
{/* CHAPTER 2: ENGINEERING PROBLEMS (Paper background) */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-2">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">02 / PROBLEM STATEMENT</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        Six things that break at scale.
      </h2>
<div className="flex flex-col border-t border-line">
{/* 01 */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">01</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Simultaneous RTSP Stream Ingestion</div>
<div className="lg:col-span-7 font-body-md text-body-md text-on-surface-variant">
            Ingesting and decoding 100+ continuous RTSP feeds brings CPU thread contention, memory accumulation risks and network jitter. A connection drop on one camera must not disrupt neighbor streams.
          </div>
</div>
{/* 02 with Visual */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">02</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">GPU Memory (VRAM) Scaling Bottleneck</div>
<div className="lg:col-span-4 font-body-md text-body-md text-on-surface-variant">
            Running deep neural networks inside each camera worker duplicates model weights linearly: 130 cameras × ~250 MB = ~32.5 GB of redundant model VRAM, exceeding standard GPU limits.
          </div>
<div className="lg:col-span-3 bg-paper-sunken p-space-md border border-line flex flex-col justify-center">
<span className="font-label-sm text-label-sm text-ink-muted uppercase">Bottleneck Metric</span>
<span className="font-metric-numeral text-body-lg font-medium text-on-surface mt-1">130 × ~250 MB = ~32.5 GB</span>
</div>
</div>
{/* 03 */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">03</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Multi-Task Concurrency Per Camera</div>
<div className="lg:col-span-7 font-body-md text-body-md text-on-surface-variant">
            One camera often needs several analytics at once (PPE violation, intrusion geofencing, forklift detection, fall detection). Duplicate detection passes multiply GPU workload by 4–5x.
          </div>
</div>
{/* 04 */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">04</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Inference Latency &amp; Data-Transfer Overhead</div>
<div className="lg:col-span-7 font-body-md text-body-md text-on-surface-variant">
            Passing video frames between application processes and the inference server over standard request buffers adds transfer overhead that can limit frame rates and throughput.
          </div>
</div>
{/* 05 */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">05</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Heterogeneous Multi-GPU Scaling</div>
<div className="lg:col-span-7 font-body-md text-body-md text-on-surface-variant">
            Client servers range from single GPUs to dual-GPU clusters shared with other workloads. Fixed camera-to-GPU assignment causes memory imbalance and instability.
          </div>
</div>
{/* 06 */}
<div className="py-space-lg border-b border-line grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<div className="lg:col-span-1 font-metric-numeral text-headline-md text-secondary-container font-medium">06</div>
<div className="lg:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Real-World Production Stream Reliability</div>
<div className="lg:col-span-7 font-body-md text-body-md text-on-surface-variant">
            Power cycles, frame corruptions and packet drops are routine in industrial sites. The platform needs fault-isolated recovery without system-wide downtime.
          </div>
</div>
</div>
</div>
</section>
{/* CHAPTER 3: USE CASES (INVERSE Dark Ink background) */}
<section className="w-full bg-primary text-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl" id="chapter-3">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-outline-variant tracking-widest uppercase">03 / AI USE CASES</span>
<div className="flex-1 h-px bg-outline-variant/30"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-surface">
        25+ modules. Two industries.
      </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl border-t border-outline-variant/30 pt-space-lg">
{/* Col 1: Manufacturing */}
<div className="flex flex-col">
<div className="flex justify-between items-center pb-space-sm border-b border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface">MANUFACTURING &amp; INDUSTRIAL ANALYTICS</span>
<span className="font-label-timecode text-label-timecode text-secondary-container">11 SELECTED MODULES</span>
</div>
<div className="flex flex-col">
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">PPE Violation Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">identifies workers not wearing required protective equipment (hardhats, high-visibility vests, safety boots) in designated areas for OSHA / regulatory compliance.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Intrusion Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects unauthorized human presence in restricted zones or outside permitted shifts.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Distress &amp; SOS Signal Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">identifies predefined gestures or movements indicating physical distress or a request for help.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Fire &amp; Smoke Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects visual flame and smoke in open facility areas, offering early warning before traditional heat/smoke sensors trigger.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Forklift Detection &amp; Safety</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects forklifts and continuously monitors proximity to nearby walking workers to prevent pedestrian-vehicle collisions.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Vehicle Detection &amp; Tracking</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects and tracks trucks, vans and industrial transit equipment across plant yards for logistics and dock management.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Helmet &amp; Seatbelt Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">identifies missing safety helmets or unfastened seatbelts in heavy machinery cabins.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Mobile Phone Usage Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects smartphone distraction near active machinery cells.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Human Fall Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">identifies potential slip-and-fall incidents using visual pose estimation, critical for lone-worker safety.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Wrong-Way Direction Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects vehicles moving against designated flow in one-way logistics lanes.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Geofence Perimeter Monitoring</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">enforces virtual boundaries isolating personnel from automated robotic or heavy machinery zones.</p>
</div>
</div>
</div>
{/* Col 2: Retail */}
<div className="flex flex-col">
<div className="flex justify-between items-center pb-space-sm border-b border-outline-variant/30">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface">RETAIL ANALYTICS</span>
<span className="font-label-timecode text-label-timecode text-secondary-container">08 SELECTED MODULES</span>
</div>
<div className="flex flex-col">
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Staff Attendance Monitoring</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">face recognition (RetinaFace + ArcFace) identifies registered personnel for touchless attendance without physical biometric queues.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Queue Detection</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">identifies queue buildup in billing and customer service areas.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Customer Wait Time Estimation</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">tracks dwell time in checkout queues to inform dynamic cashier staffing.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Store Occupancy Monitoring</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">tracks total customer count within configured zones to maintain safety compliance.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Heatmap Activity Analytics</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">visualizes foot traffic to find high-interest displays and dead zones.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Footfall Counting</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">counts bidirectional entries and exits to evaluate conversion against sales receipts.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Customer vs. Staff Classification</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">separates staff movement from customer traffic so footfall analytics stay accurate.</p>
</div>
<div className="py-space-sm border-b border-outline-variant/20 hover:bg-inverse-surface transition-colors p-2">
<span className="font-headline-md text-body-md font-semibold text-surface block">Grouped Customer Counting</span>
<p className="font-body-sm text-body-sm text-surface-container-highest mt-1">detects shopping parties entering together so a family is not counted as several parties.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 4: SYSTEM ARCHITECTURE (Paper background) */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-4">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">04 / ARCHITECTURE (PINNED SCENE)</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        A frame's eight stages.
      </h2>
{/* Flow Diagram: 8 Viewfinder Nodes across 2 rows of 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md">
{/* Node 1 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 01</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">CCTV Cameras</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">IP cameras stream live RTSP feeds (H.264 / H.265) over local gigabit Ethernet.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ DISPATCH TO WORKER</span>
</div>
{/* Node 2 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 02</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Stream Isolation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Python multiprocessing spawns a dedicated worker process per camera, so a single-camera crash does not affect other streams.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ OPENCV DECODE</span>
</div>
{/* Node 3 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 03</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Frame Acquisition &amp; Preprocessing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">camera workers continuously retrieve frames using OpenCV and stage them for GPU inference with pinned host memory.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ CUDA IPC SHM</span>
</div>
{/* Node 4 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 04</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Centralized AI Inference</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">models are served centrally via NVIDIA Triton Inference Server using TensorRT FP32 engines and zero-copy CUDA Shared Memory.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ DETECTIONS RETURNED</span>
</div>
{/* Node 5 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 05</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Use-Case Evaluation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">worker processes take primary detections and evaluate business rules (geofences, pose angles, proximity math, temporal thresholds).</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ RULE TRIGGERED</span>
</div>
{/* Node 6 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 06</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Event Generation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">when an incident condition is met, a structured AI incident JSON record is built with metadata and frame crop references.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ MONGODB EMIT</span>
</div>
{/* Node 7 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 07</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">MongoDB Storage</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">incident records, camera metadata and cropped image file paths are committed to MongoDB.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ CHANGE STREAM</span>
</div>
{/* Node 8 */}
<div className="relative p-space-md bg-paper-sunken border border-line flex flex-col justify-between">
<span className="absolute -top-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌜</span>
<span className="absolute -top-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌝</span>
<span className="absolute -bottom-1.5 -left-1.5 text-primary font-metric-numeral text-body-sm">⌞</span>
<span className="absolute -bottom-1.5 -right-1.5 text-primary font-metric-numeral text-body-sm">⌟</span>
<div>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">STAGE 08</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mt-1">Backend API &amp; Dashboard</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">an asynchronous post-event daemon watches MongoDB changes and pushes events to client dashboards via FastAPI and WebSockets.</p>
</div>
<span className="font-label-timecode text-[10px] text-ink-muted mt-4 block">→ CLIENT DISPLAY</span>
</div>
</div>
{/* Principles Section */}
<div className="mt-space-lg flex flex-col border-t border-line">
<span className="font-label-sm text-label-sm text-ink-muted uppercase py-space-sm">KEY ARCHITECTURAL PRINCIPLES</span>
<div className="py-space-md border-t border-line grid grid-cols-1 md:grid-cols-12 gap-space-md">
<span className="md:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Stream Isolation</span>
<span className="md:col-span-8 font-body-md text-body-md text-on-surface-variant">dedicated Python processes keep camera disconnects, RTSP packet corruption and reboots limited to a single process.</span>
</div>
<div className="py-space-md border-t border-line grid grid-cols-1 md:grid-cols-12 gap-space-md">
<span className="md:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Centralized Inference</span>
<span className="md:col-span-8 font-body-md text-body-md text-on-surface-variant">models are deployed once in Triton; workers pass frame pointers through CUDA Shared Memory, eliminating redundant GPU model memory.</span>
</div>
<div className="py-space-md border-t border-line grid grid-cols-1 md:grid-cols-12 gap-space-md">
<span className="md:col-span-4 font-headline-md text-body-lg font-semibold text-on-surface">Shared Primary Detection</span>
<span className="md:col-span-8 font-body-md text-body-md text-on-surface-variant">one YOLO pass detects people and vehicles per frame; multiple analytics modules (PPE, intrusion, mobile usage) evaluate that single output, cutting inference compute by 4–5x.</span>
</div>
</div>
</div>
</section>
{/* CHAPTER 5: TECHNOLOGY STACK (Paper Sunken background) */}
<section className="w-full bg-paper-sunken py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-5">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">05 / STACK</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        Built with.
      </h2>
<div className="flex flex-col border-t border-line">
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Programming &amp; Multiprocessing</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">Python 3.10+, Python Multiprocessing, AsyncIO</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Computer Vision &amp; Detection</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">OpenCV, PyTorch, YOLOv11 / YOLO26, YOLO-Pose, RetinaFace, ArcFace, DINOv3, ByteTrack</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Inference &amp; Acceleration</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">NVIDIA Triton Inference Server, NVIDIA TensorRT (FP32 precision), ONNX Runtime, CUDA</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">GPU Optimization &amp; Memory</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">CUDA Shared Memory (IPC), Pinned Host Memory, PyTorch CUDA Memory Querying (torch.cuda.mem_get_info)</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Backend &amp; Storage</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">FastAPI, MongoDB, Redis (caching and pub/sub), ChromaDB (facial embeddings vector database)</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Compilation &amp; Packaging</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">Nuitka (C-extension compilation to .so shared libraries for source code protection), Docker, Docker Compose, Ubuntu Linux</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Monitoring &amp; Telemetry</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">Prometheus metrics exporters, Grafana operational dashboards</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row justify-between gap-space-sm">
<span className="w-full md:w-1/3 font-headline-md text-body-md font-semibold text-on-surface">Generative AI (VLM)</span>
<span className="w-full md:w-2/3 font-label-timecode text-label-timecode text-on-surface">Gemma 3 E4B Vision-Language Model via Ollama for zero-shot incident reasoning and narrative generation</span>
</div>
</div>
</div>
</section>
{/* CHAPTER 6: CHALLENGES & SOLUTIONS (Paper background) */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-6">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">06 / CHALLENGES</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        What broke, and how I fixed it.
      </h2>
<div className="flex flex-col border-t border-line">
{/* 1 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">1. GPU Memory Duplication Across 130 Cameras</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              loading models per camera worker duplicated weights: 130 cameras × 250 MB = ~32.5 GB of redundant model VRAM, exceeding dual-GPU limits.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              centralized all models into NVIDIA Triton Inference Server across 2x NVIDIA L4 GPUs.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              Triton model memory dropped to ~2.5 GB per GPU (~5 GB combined), an estimated ~6.5x model memory reduction.
            </div>
</div>
</div>
{/* 2 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">2. Inter-Process Data-Transfer Latency</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              moving raw 1080p frames between Python workers and Triton across standard HTTP/gRPC buffers caused heavy host PCIe copying overhead.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              CUDA Shared Memory (IPC) regions; workers place preprocessed frames directly into shared GPU memory buffers that Triton reads zero-copy.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              minimized host-device transfer overhead and boosted throughput to 192 requests/second.
            </div>
</div>
</div>
{/* 3 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">3. Balancing Inference Latency with Accuracy</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              default framework inference had execution overhead, while INT8 quantization risked accuracy loss for safety-critical detection in industrial settings.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              exported models to ONNX and compiled dedicated TensorRT FP32 engines with layer fusion and GPU-adjacent normalization.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              preserved full detection precision while sustaining high inference speeds.
            </div>
</div>
</div>
{/* 4 with Visual */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">4. Multi-GPU Allocation &amp; 1,500 MB Safety Buffer</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              dynamic workloads, LLM tasks and camera reconnects risked out-of-memory crashes on multi-GPU servers.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              a dynamic VRAM allocation algorithm: budgeted planning estimate of 290 MB VRAM per camera process; a mandatory 1,500 MB (1.5 GB) safety buffer per GPU; dynamic balancing of camera worker assignments across available GPUs.
            </div>
<div className="md:col-span-3 flex flex-col gap-2">
<div className="font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
                sustained 130+ cameras across 2x NVIDIA L4 GPUs (actual per-camera memory varied from 245 MB to 360 MB) with zero OOM crashes.
              </div>
<div className="font-label-timecode text-[11px] text-secondary bg-signal-orange-tint p-2 border border-secondary/20">
                290 MB × cameras + 1,500 MB buffer per GPU
              </div>
</div>
</div>
</div>
{/* 5 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">5. Stream Reliability &amp; Recovery</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              camera drops, power blips and frame corruptions destabilized monolithic video pipelines.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              each camera stream isolated in a dedicated OS worker process with non-blocking frame retrieval and automatic exponential backoff reconnection.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              reconnects stay strictly isolated to the affected camera without disrupting other feeds.
            </div>
</div>
</div>
{/* 6 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">6. Shared Detection Pipeline</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              separate detection passes for PPE, intrusion and phone usage on one camera multiplied GPU workload by 4–5x.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              a shared primary detection stage where YOLO detects base objects once; downstream modules evaluate spatial and pose rules against that result.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              more use-case capacity per camera without more GPU inference passes.
            </div>
</div>
</div>
{/* 7 */}
<div className="py-space-lg border-b border-line flex flex-col gap-space-sm">
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface">7. On-Premises Intellectual Property Protection</h3>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-5 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-ink-faint block">Problem</span>
              enterprise clients required on-premises deployment on private servers, ruling out cloud hosting while exposing proprietary Python code.
            </div>
<div className="md:col-span-4 text-on-surface font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm uppercase text-secondary block">Solution</span>
              application modules compiled into stripped native C-extension shared object binaries (.so) with Nuitka and packaged in hardened Docker containers.
            </div>
<div className="md:col-span-3 font-label-timecode text-label-timecode text-on-surface bg-paper-sunken p-space-sm border border-line">
<span className="text-ink-muted block text-[10px] uppercase">Result</span>
              secure on-premises enterprise deployment with source code protection.
            </div>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 7: PERFORMANCE & RESULTS (INVERSE Dark Ink background) */}
<section className="w-full bg-primary text-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl" id="chapter-7">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-outline-variant tracking-widest uppercase">07 / RESULTS</span>
<div className="flex-1 h-px bg-outline-variant/30"></div>
</div>
<div className="flex flex-col gap-2">
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-surface">
          Measured in production.
        </h2>
<span className="font-label-timecode text-label-timecode text-secondary-container">
          GRAFANA 30-MINUTE SNAPSHOT · PRODUCTION CLUSTER
        </span>
</div>
{/* Hardware strip */}
<div className="flex flex-col md:flex-row justify-between py-space-sm border-t border-b border-outline-variant/30 font-label-timecode text-label-timecode text-surface-container-highest">
<span>COMPUTE: 2x NVIDIA L4 GPUs (24 GB VRAM each, 48 GB total)</span>
<span>HOST UTILIZATION: 80.1% CPU / 87.7% RAM</span>
</div>
{/* Comparison Strip Bar */}
<div className="flex flex-col gap-2 bg-inverse-surface p-space-md border border-outline-variant/20">
<span className="font-label-sm text-label-sm text-surface uppercase">PER-CAMERA LOADING ~32.5 GB → CENTRALIZED TRITON ~5 GB COMBINED</span>
<div className="w-full flex flex-col gap-2 mt-2">
<div className="flex items-center gap-2">
<span className="font-label-timecode text-[11px] w-28 text-outline-variant">PER-CAMERA:</span>
<div className="h-4 bg-outline-variant/50 w-full relative flex items-center px-2">
<span className="font-label-timecode text-[10px] text-surface font-bold">~32.5 GB</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-timecode text-[11px] w-28 text-secondary-container">TRITON CENTRAL:</span>
<div className="h-4 bg-secondary-container w-[15.4%] relative flex items-center px-2">
<span className="font-label-timecode text-[10px] text-surface font-bold">~5 GB</span>
</div>
</div>
</div>
</div>
{/* Ruled Grid of Big Numerals with hairline separators */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-outline-variant/30">
<div className="py-space-md border-b sm:border-r border-outline-variant/30 pr-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">130+</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">TOTAL CAMERAS REGISTERED</span>
</div>
<div className="py-space-md border-b lg:border-r border-outline-variant/30 sm:px-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">112</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">ACTIVE ONLINE CAMERAS IN SNAPSHOT (113 status table rows)</span>
</div>
<div className="py-space-md border-b border-outline-variant/30 sm:border-r lg:border-r-0 lg:pl-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">~2.5 GB</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">TRITON MODEL VRAM PER GPU (~5 GB COMBINED)</span>
</div>
<div className="py-space-md border-b sm:border-r border-outline-variant/30 pr-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">192</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">REQ/S YOLO26 INFERENCE REQUEST RATE (MEAN)</span>
</div>
<div className="py-space-md border-b lg:border-r border-outline-variant/30 sm:px-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">107 ms</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">YOLO26 MODEL EXECUTION LATENCY (MEAN)</span>
</div>
<div className="py-space-md border-b border-outline-variant/30 sm:border-r lg:border-r-0 lg:pl-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">90.7 ms</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">YOLO26 QUEUE LATENCY (MEAN)</span>
</div>
<div className="py-space-md border-b sm:border-b-0 sm:border-r border-outline-variant/30 pr-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">17.4</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">YOLO26 PENDING REQUESTS (MEAN)</span>
</div>
<div className="py-space-md border-b sm:border-b-0 lg:border-r border-outline-variant/30 sm:px-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">7.47 FPS</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">AVERAGE STREAM FPS ACROSS CLUSTER (MEAN)</span>
</div>
<div className="py-space-md lg:pl-space-md">
<span className="font-metric-numeral text-headline-lg lg:text-metric-numeral-mobile font-medium text-surface block">141 ms</span>
<span className="font-label-sm text-label-sm text-outline-variant uppercase mt-1 block">AVERAGE END-TO-END FRAME LATENCY (MEAN)</span>
</div>
</div>
</div>
</section>
{/* CHAPTER 8: CONTRIBUTIONS (Paper background) */}
<section className="w-full bg-surface py-space-xl lg:py-space-2xl px-space-md lg:px-space-xl border-t border-line" id="chapter-8">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-ink-faint tracking-widest uppercase">08 / OWNERSHIP</span>
<div className="flex-1 h-px bg-line"></div>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-display font-semibold text-on-surface">
        80–85% of the engineering.
      </h2>
<div className="flex flex-col border-t border-line">
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Computer Vision Model Integration</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">integrated YOLOv11 / YOLO26 object detectors, YOLO-Pose estimation, RetinaFace face detection, ArcFace facial embeddings and the Gemma 3 E4B VLM.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Real-Time Video Pipelines</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">multi-stream RTSP ingestion using Python and OpenCV with non-blocking recovery and exponential backoff.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">GPU Optimization</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">compiled TensorRT FP32 engines, implemented CUDA Shared Memory IPC and configured pinned host memory transfers.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Multi-GPU Allocation Engine</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">designed the dynamic VRAM budget calculator and enforced the 1,500 MB memory safety buffer.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Systems Architecture</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">designed the decoupled multiprocessing architecture, the shared primary detection pipeline and the Triton server integration.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Backend &amp; Event Delivery</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">designed MongoDB event schemas, Redis messaging, ChromaDB vector indexing and the asynchronous event daemon.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Production Deployment</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">compiled Python to native .so binaries with Nuitka and authored multi-container Docker Compose architectures.</span>
</div>
<div className="py-space-md border-b border-line flex flex-col md:flex-row gap-space-md">
<span className="w-full md:w-1/3 font-headline-md text-body-lg font-semibold text-on-surface">Observability</span>
<span className="w-full md:w-2/3 font-body-md text-body-md text-on-surface-variant">configured Prometheus metrics exporters and designed real-time Grafana operational dashboards for cluster telemetry.</span>
</div>
</div>
</div>
</section>
{/* BOTTOM NAV & CLOSING CTA */}
<section className="w-full bg-paper-sunken border-t border-line py-space-2xl px-space-md lg:px-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
{/* Bottom Nav Rows */}
<div className="grid grid-cols-1 md:grid-cols-2 border border-line divide-y md:divide-y-0 md:divide-x divide-line">
<a className="p-space-lg flex flex-col gap-2 hover:bg-primary hover:text-surface transition-colors group" href="#">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-surface-container-highest uppercase">NAVIGATION</span>
<span className="font-headline-md text-headline-md font-semibold">← All Projects</span>
</a>
<a className="p-space-lg flex flex-col gap-2 hover:bg-primary hover:text-surface transition-colors group" href="#">
<span className="font-label-sm text-label-sm text-ink-muted group-hover:text-surface-container-highest uppercase">NEXT CASE STUDY</span>
<span className="font-headline-md text-headline-md font-semibold">Next: Analytics Agent →</span>
<span className="font-body-sm text-body-sm text-ink-muted group-hover:text-surface-container-highest">Multi-agent CCTV intelligence and autonomous reporting</span>
</a>
</div>
{/* Closing CTA */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg bg-surface p-space-xl border border-line">
<div className="flex flex-col gap-1">
<h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
            Looking for a Senior AI or Computer Vision Engineer?
          </h3>
<span className="font-label-timecode text-label-timecode text-ink-muted">AVAILABLE FOR ARCHITECTURE ADVISORY &amp; FULL-STACK ROLES</span>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<a className="px-space-lg py-2 rounded-full bg-secondary-container text-surface font-label-sm text-label-sm font-bold uppercase tracking-wider hover:bg-signal-orange-hover transition-colors" href="mailto:rajesh@example.com">
            Email Rajesh
          </a>
<a className="px-space-lg py-2 rounded-full border border-on-surface text-on-surface font-label-sm text-label-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-surface transition-colors" href="#">
            LinkedIn ↗
          </a>
<a className="px-space-lg py-2 rounded-full border border-on-surface text-on-surface font-label-sm text-label-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-surface transition-colors" href="#">
            GitHub ↗
          </a>
</div>
</div>
{/* Mono Footer strip */}
<div className="flex flex-col md:flex-row items-center justify-between border-t border-line pt-space-md font-label-timecode text-label-timecode text-ink-muted">
<span>© 2026 RAJESH KUMAR S · BANGALORE · UTC+5:30</span>
<div className="flex items-center gap-space-md">
<a className="hover:text-on-surface" href="#">Projects</a>
<span>·</span>
<a className="hover:text-on-surface" href="#">Experience</a>
<span>·</span>
<a className="hover:text-on-surface" href="#">Contact</a>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}
