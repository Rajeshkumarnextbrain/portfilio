import Link from 'next/link';
import ProjectTOC from '../../components/ProjectTOC';

export const metadata = {
  title: 'VisionFacts.ai Case Study | Rajesh Kumar S',
  description: 'Real-time AI video analytics for 130+ concurrent CCTV cameras on client-owned GPU infrastructure using TensorRT, Triton, and CUDA Shared Memory.',
};

const TOC_SECTIONS = [
  { id: 'overview', label: '01 · Project Overview' },
  { id: 'problem', label: '02 · Problem Statement' },
  { id: 'use-cases', label: '03 · AI Use Cases (25+)' },
  { id: 'tech-stack', label: '04 · Technology Stack' },
  { id: 'architecture', label: '05 · System Architecture' },
  { id: 'vram-breakdown', label: '06 · 13x VRAM Showcase' },
  { id: 'challenges', label: '07 · Engineering Solutions' },
  { id: 'multi-gpu', label: '08 · Multi-GPU Scheduling' },
  { id: 'deployment', label: '09 · On-Premises & IP Security' },
  { id: 'benchmarks', label: '10 · Performance Benchmarks' },
  { id: 'contributions', label: '11 · Engineering Contributions' },
  { id: 'learnings', label: '12 · Learnings & Future Roadmap' },
];

export default function VisionfactsPage() {
  return (
    <div className="w-full">
      {/* Skip Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-on-primary font-mono text-xs font-semibold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors group focus:outline-none focus:ring-1 focus:ring-primary rounded"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform" aria-hidden="true">
              arrow_back
            </span>
            <span>&larr; All projects</span>
          </Link>
        </div>

        {/* HERO SECTION - Leads with the story in 5 seconds */}
        <header className="space-y-6 pb-8 border-b border-outline-variant/30">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
              <span>COMPUTER VISION PLATFORM &bull; MANUFACTURING &amp; RETAIL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface font-sans">
              VisionFacts.ai
            </h1>

            {/* The One Punchy Lead Sentence */}
            <p className="text-lg sm:text-xl lg:text-2xl text-on-surface font-sans font-medium leading-relaxed max-w-4xl">
              Real-time AI video analytics for 130+ concurrent CCTV cameras on client-owned GPU infrastructure.
            </p>

            <p className="text-base text-secondary font-sans leading-relaxed max-w-3xl">
              Transforms passive surveillance systems into proactive monitoring solutions that detect safety violations, identify security threats, track operational compliance, and generate business insights with zero human delay.
            </p>
          </div>

          {/* TWO HEADLINE RESULTS (Immediate Visual Hook) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-primary/30 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Headline Result 01 &bull; Model Memory
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">~13x</span>
                <span className="text-xs font-mono text-secondary">VRAM Reduction</span>
              </div>
              <p className="text-sm font-sans text-secondary mt-2">
                Slashed model GPU memory from <span className="text-on-surface font-semibold">32.5 GB</span> to <span className="text-primary font-semibold font-mono">~2.5 GB</span> by centralizing YOLOv11 and facial models inside NVIDIA Triton.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-primary/30 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Headline Result 02 &bull; Inference Latency
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">100&ndash;200ms</span>
                <span className="text-xs font-mono text-secondary">End-to-End</span>
              </div>
              <p className="text-sm font-sans text-secondary mt-2">
                Doubled request throughput to <span className="text-primary font-semibold font-mono">170&ndash;180 req/s</span> (up from 90–100) using TensorRT engines and zero-copy CUDA Shared Memory.
              </p>
            </div>
          </div>

          {/* Clean Role & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Role: <strong className="font-semibold text-primary">Lead Computer Vision Architect</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Company: <strong className="font-semibold">Nextbrain Technologies</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Aug 2023 &ndash; Present
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-1.5 active:scale-95 motion-reduce:active:scale-100"
              >
                <span>Discuss this system</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </a>
              <a
                href="#architecture"
                className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/50 text-xs font-mono text-on-surface hover:text-primary transition-colors"
              >
                <span>System Architecture &darr;</span>
              </a>
            </div>
          </div>
        </header>

        {/* 2-COLUMN LAYOUT: STICKY TOC ON DESKTOP + MAIN ARTICLE */}
        <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12 pt-8">

          {/* Sticky Table of Contents Component */}
          <ProjectTOC sections={TOC_SECTIONS} />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1 min-w-0 space-y-14 sm:space-y-16">

            {/* SECTION 01: PROJECT OVERVIEW */}
            <section id="overview" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  01 &bull; Project Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Intelligent CCTV Monitoring at Enterprise Scale
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  VisionFacts.ai is an enterprise CCTV video analytics platform purpose-built for manufacturing plants and retail operations. It converts standard, passive CCTV surveillance cameras into intelligent edge sensors capable of detecting safety violations, flagging perimeter intrusions, evaluating operational workflows, and calculating customer traffic patterns in real time.
                </p>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  Traditional CCTV relies on human operators continuously watching walls of monitors—an approach known to produce alert fatigue and missed incidents. VisionFacts.ai addresses this by executing deep learning computer vision models on live camera feeds to trigger immediate alerts and structured business metrics.
                </p>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  The platform runs on client-owned GPU hardware, concurrently supporting more than 100 camera streams with multiple AI use cases per stream, while maintaining low inference latency and reliable 24/7 monitoring.
                </p>

                <div className="pt-3 border-t border-outline-variant/30 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">100+ to 130+ Concurrent Cameras</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">Multiple AI Modules Per Stream</span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-on-surface">On-Premises Edge Deployment</span>
                </div>
              </div>
            </section>

            {/* SECTION 02: PROBLEM STATEMENT */}
            <section id="problem" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  02 &bull; Problem Statement
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  The Operational &amp; Computational Limits of Legacy CCTV
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Industrial plants and retail stores install hundreds of cameras, but conventional infrastructure creates critical operational and computational roadblocks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Operator Fatigue & Blind Spots',
                    desc: 'Security personnel cannot continuously observe dozens of screens. Incidents are frequently discovered hours later on recorded tapes rather than prevented live.',
                  },
                  {
                    title: 'Delayed Threat Mitigation',
                    desc: 'Safety infractions (missing PPE, restricted zone intrusions, SOS distress calls) require second-level intervention before injuries or security breaches occur.',
                  },
                  {
                    title: 'Severe Compute Bottlenecks',
                    desc: 'Running multiple deep neural networks across 100+ high-definition RTSP streams rapidly exhausts CPU cores, PCIe bus bandwidth, and GPU memory.',
                  },
                  {
                    title: 'Real-World Visual Variability',
                    desc: 'Harsh industrial camera angles, glare, dust occlusions, variable lighting, and shifting object scales cause brittle off-the-shelf detectors to fail.',
                  },
                  {
                    title: 'Multi-Tasking Per Camera',
                    desc: 'A single shop-floor camera requires simultaneous PPE detection, forklift tracking, intrusion alerts, and slip/fall detection, multiplying the processing workload.',
                  },
                  {
                    title: 'Confidential Client Data',
                    desc: 'Surveillance streams cannot leave client premises due to confidentiality, necessitating robust deployment on heterogeneous client-owned GPU servers.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                    <h3 className="text-base font-semibold text-on-surface font-sans">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 03: AI ANALYTICS USE CASES */}
            <section id="use-cases" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  03 &bull; AI Analytics Catalog
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  25+ Production Modules Across Manufacturing &amp; Retail
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Individual cameras run combinations of specialized analytics modules tailored to facility zones. All modules share primary object detection data to prevent redundant inference.
              </p>

              <div className="space-y-6">
                {/* Manufacturing Catalog */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Manufacturing &amp; Industrial Safety (11 Modules)
                    </h3>
                    <span className="text-xs font-mono text-primary font-semibold">
                      Worker Safety &bull; Asset Protection
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'PPE Violation Detection', desc: 'Identifies personnel missing hardhats, high-visibility vests, or protective boots in designated hazardous zones.' },
                      { name: 'Intrusion Detection', desc: 'Alerts on unauthorized human entry into restricted machinery cells, hazardous bays, or configured shift hours.' },
                      { name: 'Distress & SOS Signals', desc: 'Detects specific distress gestures and emergency call body language for rapid response dispatch.' },
                      { name: 'Fire & Smoke Detection', desc: 'Early visual flame and smoke recognition to identify combustion in open storage areas before smoke detectors activate.' },
                      { name: 'Forklift Detection & Safety', desc: 'Tracks forklift movement paths and flags hazardous proximity between mobile equipment and pedestrians.' },
                      { name: 'Vehicle Tracking', desc: 'Monitors trucks, delivery vans, and plant vehicles across yard loading bays and weighing stations.' },
                      { name: 'Helmet & Seatbelt Detection', desc: 'Verifies safety gear compliance for industrial vehicle operators and machinery crews.' },
                      { name: 'Mobile Usage Detection', desc: 'Detects unauthorized handheld smartphone distraction while operating active heavy machinery.' },
                      { name: 'Human Fall Detection', desc: 'Pose-based recognition of sudden slip, trip, and collapse incidents for immediate medical alert.' },
                      { name: 'Wrong-Way Detection', desc: 'Flags vehicles or machinery driving counter to permitted one-way directional routes in logistics lanes.' },
                      { name: 'Geofence Perimeter Monitoring', desc: 'Monitors objects and personnel entering or exiting virtual polygonal safety zones.' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                        <div className="text-sm font-semibold text-on-surface font-sans">
                          {item.name}
                        </div>
                        <p className="text-sm text-secondary font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Retail Catalog & Custom Engine */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Retail Intelligence &amp; Custom Workflows (8 Modules + Custom Engine)
                    </h3>
                    <span className="text-xs font-mono text-primary font-semibold">
                      Customer Experience &bull; Operational Insights
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Staff Attendance', desc: 'RetinaFace detection + ArcFace feature embeddings to identify registered staff and log shifts without physical biometric kiosks.' },
                      { name: 'Queue Detection', desc: 'Identifies queue build-up at billing checkout counters and customer service desks in real time.' },
                      { name: 'Wait Time Monitoring', desc: 'Estimates customer queue wait times to inform dynamic cashier lane allocation.' },
                      { name: 'Occupancy Monitoring', desc: 'Tracks live headcount within retail stores and distinct departments against maximum occupancy regulations.' },
                      { name: 'Heatmap Activity Analytics', desc: 'Visualizes customer walking trajectories, dwell zones, and high-traffic promotional displays.' },
                      { name: 'Footfall Counting', desc: 'Bidirectional entrance and exit counting to measure store conversion rates and peak traffic hours.' },
                      { name: 'Customer Classification', desc: 'Differentiates staff, security personnel, visitors, and shoppers using facial embeddings and behavioral rules.' },
                      { name: 'Grouped Customer Counting', desc: 'Identifies shopping parties and family groups entering together for accurate consumer conversion analytics.' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                        <div className="text-sm font-semibold text-on-surface font-sans">
                          {item.name}
                        </div>
                        <p className="text-sm text-secondary font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-high border border-primary/30 mt-2 space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                      Custom AI Use-Case Framework
                    </span>
                    <p className="text-sm text-secondary font-sans leading-relaxed">
                      In addition to off-the-shelf modules, the platform includes a dynamic spatial rule evaluator. Field engineers can configure custom polygonal geofences, dwell time thresholds, custom object classes, direction vectors, and alert schedules without modifying the underlying model inference code.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 04: TECHNOLOGY STACK */}
            <section id="tech-stack" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  04 &bull; Production Technology Stack
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  High-Performance Inference &amp; Container Architecture
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Core Programming
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'OpenCV', 'PyTorch', 'Multiprocessing'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed pt-1">
                    Multi-process isolation per RTSP stream with hardware-accelerated video decoding.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Deep Learning Models
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['YOLOv11', 'YOLO26', 'YOLO-Pose', 'RetinaFace', 'ArcFace', 'DINOv3', 'Gemma 3 E4B'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed pt-1">
                    Multi-task vision models for detection, pose keypoints, biometric recognition, and VLM reasoning.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Inference &amp; Acceleration
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['NVIDIA TensorRT', 'Triton Server', 'CUDA Shared Memory', 'Pinned Host RAM'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed pt-1">
                    FP16/INT8 optimized engines with zero-copy shared memory inter-process communication.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Storage &amp; Vector Embeddings
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['MongoDB', 'Redis', 'ChromaDB', 'Ollama'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed pt-1">
                    Event storage, inter-process messaging, facial vector similarity search, and local LLM serving.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3 sm:col-span-2 lg:col-span-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Production Packaging &amp; Observability
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Docker & Compose', 'Nuitka C-Extension (.so)', 'Prometheus', 'Grafana'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed pt-1">
                    C-compiled binary protection for client deployments, orchestrated by Docker Compose, with live Prometheus telemetry dashboards.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 05: SYSTEM ARCHITECTURE (VISUAL DIAGRAM FLOW) */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  05 &bull; System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  End-to-End Distributed Processing Pipeline
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                VisionFacts.ai isolates video stream acquisition from centralized deep learning inference. Camera workers handle decoding and business logic independently, communicating with NVIDIA Triton through zero-copy CUDA shared memory buffers.
              </p>

              {/* Intuitive Visual Multi-Tier Flow Diagram */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">

                {/* Tier 1: Ingestion & Isolation */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                      Tier 1: Video Ingestion &amp; Stream Isolation
                    </span>
                    <span className="text-xs font-mono text-outline">CPU / Python Multiprocessing</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 01</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">Dynamic Config API</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Pulls camera RTSP URLs, enabled AI modules, and geofence polygons on startup.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 02</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">Process-Based Isolation</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Spawns one dedicated OS process per camera. RTSP drops never affect neighbor streams.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 03</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">RTSP Stream Ingestion</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Continuous frame grabbing with hardware acceleration, auto-reconnect, and corrupt frame dropping.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow Connector Down */}
                <div className="flex items-center justify-center text-primary py-1">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-secondary">
                    <span>Frames transferred via CUDA Shared Memory</span>
                    <span className="text-primary">&darr;</span>
                  </div>
                </div>

                {/* Tier 2: Centralized Model Serving (The Core Engine) */}
                <div className="p-5 rounded-xl bg-surface-container-high border-2 border-primary/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                      Tier 2: Centralized AI Inference Server (NVIDIA Triton + TensorRT)
                    </span>
                    <span className="text-xs font-mono text-primary font-bold">Zero-Copy GPU Memory</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 04 &bull; Shared Primary Detection</span>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        A single primary TensorRT detector (YOLOv11/26) processes the frame once, outputting bounding boxes and labels for people and vehicles. Results broadcast to all enabled use cases.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-primary font-bold">Triton Dynamic Batching &bull; Centralized Weights</span>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        Pose models (YOLO-Pose), facial recognizers (RetinaFace + ArcFace), and Gemma 3 VLM are served from a single centralized Triton pool. VRAM stays fixed regardless of camera count.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flow Connector Down */}
                <div className="flex items-center justify-center text-primary py-1">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-secondary">
                    <span>Detections evaluated &bull; Events serialized</span>
                    <span className="text-primary">&darr;</span>
                  </div>
                </div>

                {/* Tier 3: Evaluation & Event Dispatch */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                      Tier 3: Modular Evaluation &amp; Event Gateway
                    </span>
                    <span className="text-xs font-mono text-outline">MongoDB &bull; Webhooks &bull; Prometheus</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 05</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">Multi-Use-Case Logic</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Evaluates spatial polygons, PPE gear, direction vectors, and pose gestures without re-running primary models.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 06 &bull; 07</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">Storage &amp; Delivery</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Events write to MongoDB; an asynchronous daemon dispatches real-time webhooks, push alerts, and dashboard updates.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-1">
                      <span className="text-xs font-mono text-primary font-bold">STAGE 08</span>
                      <h3 className="text-sm font-semibold text-on-surface font-sans">Continuous Pipeline</h3>
                      <p className="text-xs text-secondary font-sans leading-relaxed">
                        Sustains 5&ndash;10 FPS real-time throughput per camera with zero memory accumulation over 24/7 continuous operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 06: HERO MOMENT - THE 13X VRAM STORY */}
            <section id="vram-breakdown" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  06 &bull; Core Architectural Breakthrough
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Solving the GPU Memory Explosion: Centralized Triton Serving
                </h2>
              </div>

              {/* STANDOUT HERO CARD - Elevated styling and visual weight */}
              <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-surface-container-high/90 to-surface-container border-2 border-primary/50 shadow-2xl space-y-8">

                <div className="space-y-3 max-w-4xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary font-bold">
                    FLAGSHIP CASE STUDY MOMENT
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-on-surface font-sans">
                    Transforming Linear $O(N)$ VRAM Growth into Constant $O(1)$ Footprint
                  </h3>
                  <p className="text-base text-secondary font-sans leading-relaxed">
                    In a naive computer vision architecture, every camera process loads its own copy of the YOLO detector (~250 MB). As camera counts grow, GPU memory needs spiral out of control: 50 cameras demand ~12.5 GB, 100 cameras demand 25 GB, and 130 cameras demand 32.5 GB just for duplicate model weights—triggering fatal CUDA Out-of-Memory crashes.
                  </p>
                </div>

                {/* Big Side-by-Side Comparison Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                      Naive Per-Camera Model Loading (130 Cameras)
                    </span>
                    <div className="text-4xl sm:text-5xl font-mono font-bold text-on-surface">
                      32.5 GB <span className="text-base font-sans font-normal text-secondary">VRAM</span>
                    </div>
                    <p className="text-sm text-secondary font-sans leading-relaxed">
                      Linear growth ($O(N)$). Requires high-end enterprise GPU clusters solely to store redundant model duplicates.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-surface-container border-2 border-primary/50 space-y-2 shadow-lg">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                      VisionFacts Centralized Triton Architecture (130 Cameras)
                    </span>
                    <div className="text-4xl sm:text-5xl font-mono font-bold text-primary">
                      ~2.5 GB <span className="text-base font-sans font-normal text-on-surface">VRAM</span>
                    </div>
                    <p className="text-sm text-secondary font-sans leading-relaxed">
                      Constant flat baseline ($O(1)$). Models loaded once in Triton; all 130 cameras query models through CUDA shared memory.
                    </p>
                  </div>
                </div>

                {/* Visual Bar Chart: Linear Growth vs Constant Triton */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold text-on-surface font-mono uppercase tracking-wider">
                    VRAM Consumption Comparison: Naive vs. Centralized Triton
                  </h4>

                  <div className="space-y-3 font-mono text-xs">
                    {/* 10 Cameras */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-secondary">
                        <span>10 Cameras &bull; Naive 2.5 GB vs Triton ~2.5 GB</span>
                        <span className="text-primary font-semibold">1x (Parity)</span>
                      </div>
                      <div className="w-full bg-surface-container-lowest rounded-full h-3 overflow-hidden flex">
                        <div className="bg-outline h-3" style={{ width: '8%' }} title="Naive: 2.5 GB"></div>
                        <div className="bg-primary h-3 ml-1" style={{ width: '8%' }} title="Triton: 2.5 GB"></div>
                      </div>
                    </div>

                    {/* 50 Cameras */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-secondary">
                        <span>50 Cameras &bull; Naive 12.5 GB vs Triton ~2.5 GB</span>
                        <span className="text-primary font-semibold">5x Memory Reduction</span>
                      </div>
                      <div className="w-full bg-surface-container-lowest rounded-full h-3 overflow-hidden flex">
                        <div className="bg-outline h-3" style={{ width: '38%' }} title="Naive: 12.5 GB"></div>
                        <div className="bg-primary h-3 ml-1" style={{ width: '8%' }} title="Triton: 2.5 GB"></div>
                      </div>
                    </div>

                    {/* 100 Cameras */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-secondary">
                        <span>100 Cameras &bull; Naive 25.0 GB vs Triton ~2.5 GB</span>
                        <span className="text-primary font-semibold">10x Memory Reduction</span>
                      </div>
                      <div className="w-full bg-surface-container-lowest rounded-full h-3 overflow-hidden flex">
                        <div className="bg-outline h-3" style={{ width: '77%' }} title="Naive: 25.0 GB"></div>
                        <div className="bg-primary h-3 ml-1" style={{ width: '8%' }} title="Triton: 2.5 GB"></div>
                      </div>
                    </div>

                    {/* 130 Cameras (Production Benchmark) */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-on-surface font-semibold">
                        <span>130 Cameras (Live Deployment) &bull; Naive 32.5 GB vs Triton ~2.5 GB</span>
                        <span className="text-primary font-bold">13x Less Memory</span>
                      </div>
                      <div className="w-full bg-surface-container-lowest rounded-full h-4 overflow-hidden flex">
                        <div className="bg-outline h-4 rounded-l" style={{ width: '100%' }} title="Naive: 32.5 GB"></div>
                        <div className="bg-primary h-4 rounded-r ml-1" style={{ width: '8%' }} title="Triton: 2.5 GB"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-outline pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 bg-outline rounded" aria-hidden="true"></span>
                      <span>Naive Per-Camera Model Loading</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 bg-primary rounded" aria-hidden="true"></span>
                      <span className="text-on-surface font-semibold">Centralized Triton Model Serving</span>
                    </span>
                  </div>
                </div>

                {/* Responsive Comparison Table: Desktop Table + Mobile Stacked Cards */}
                <div className="pt-4 border-t border-outline-variant/30 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">
                    Detailed Memory Scaling Table
                  </span>

                  {/* Desktop Table */}
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label="VRAM Scaling Comparison Table"
                    className="hidden md:block overflow-x-auto focus:outline-none focus:ring-1 focus:ring-primary rounded-lg"
                  >
                    <table className="w-full text-sm font-sans border-collapse">
                      <thead>
                        <tr className="border-b border-outline-variant/40 text-xs font-mono text-outline text-left">
                          <th className="py-2.5">Camera Count</th>
                          <th className="py-2.5">Naive Loading (250MB/cam)</th>
                          <th className="py-2.5 text-primary">Centralized Triton</th>
                          <th className="py-2.5 text-right">Memory Savings</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20 font-mono text-xs">
                        <tr>
                          <td className="py-2.5 text-on-surface font-sans font-semibold">10 Cameras</td>
                          <td className="py-2.5 text-secondary">2.5 GB</td>
                          <td className="py-2.5 text-primary font-bold">~2.5 GB</td>
                          <td className="py-2.5 text-right text-secondary">Baseline</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-on-surface font-sans font-semibold">25 Cameras</td>
                          <td className="py-2.5 text-secondary">6.25 GB</td>
                          <td className="py-2.5 text-primary font-bold">~2.5 GB</td>
                          <td className="py-2.5 text-right text-primary font-semibold">2.5x Less</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-on-surface font-sans font-semibold">50 Cameras</td>
                          <td className="py-2.5 text-secondary">12.5 GB</td>
                          <td className="py-2.5 text-primary font-bold">~2.5 GB</td>
                          <td className="py-2.5 text-right text-primary font-semibold">5.0x Less</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-on-surface font-sans font-semibold">100 Cameras</td>
                          <td className="py-2.5 text-secondary">25.0 GB</td>
                          <td className="py-2.5 text-primary font-bold">~2.5 GB</td>
                          <td className="py-2.5 text-right text-primary font-semibold">10.0x Less</td>
                        </tr>
                        <tr className="bg-primary/5">
                          <td className="py-3 text-on-surface font-sans font-bold">130 Cameras (Live)</td>
                          <td className="py-3 text-on-surface font-bold">32.5 GB (OOM Risk)</td>
                          <td className="py-3 text-primary font-bold">~2.5 GB (Stable)</td>
                          <td className="py-3 text-right text-primary font-bold">13.0x Less</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Stacked Cards */}
                  <div className="block md:hidden space-y-2.5">
                    {[
                      { cams: '10 Cameras', naive: '2.5 GB', triton: '~2.5 GB', savings: 'Baseline' },
                      { cams: '25 Cameras', naive: '6.25 GB', triton: '~2.5 GB', savings: '2.5x Less' },
                      { cams: '50 Cameras', naive: '12.5 GB', triton: '~2.5 GB', savings: '5.0x Less' },
                      { cams: '100 Cameras', naive: '25.0 GB', triton: '~2.5 GB', savings: '10.0x Less' },
                      { cams: '130 Cameras (Live)', naive: '32.5 GB', triton: '~2.5 GB', savings: '13.0x Less', highlight: true },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border font-mono text-xs ${
                          row.highlight
                            ? 'bg-primary/10 border-primary/50'
                            : 'bg-surface-container-low border-outline-variant/30'
                        }`}
                      >
                        <div className="flex items-center justify-between font-sans font-semibold text-sm text-on-surface mb-2">
                          <span>{row.cams}</span>
                          <span className="text-xs font-mono text-primary font-bold">{row.savings}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-outline block text-[11px]">Naive VRAM:</span>
                            <span className="text-secondary font-semibold">{row.naive}</span>
                          </div>
                          <div>
                            <span className="text-outline block text-[11px]">Triton VRAM:</span>
                            <span className="text-primary font-bold">{row.triton}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 07: OTHER ENGINEERING CHALLENGES */}
            <section id="challenges" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  07 &bull; Engineering Challenges
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  High-Throughput Acceleration &amp; Multi-Tasking Solutions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Challenge 1: Multi-Use-Case */}
                <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono text-primary font-bold uppercase block">
                    Challenge 1 &bull; Multi-Task Concurrency
                  </span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Multiple AI Use Cases Per Camera Without Compute Redundancy
                  </h3>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    A single plant camera frequently requires simultaneous PPE monitoring, intrusion geofencing, forklift detection, and fall detection. Running isolated video decoders and duplicate YOLO models for each use case multiplies compute and exhausts PCIe bandwidth.
                  </p>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    <strong className="text-on-surface">Solution:</strong> Designed a shared primary detection architecture. Primary detections (people, vehicles) run once per frame; structured bounding boxes and tracking IDs are forwarded to lightweight downstream use-case evaluators that apply spatial and temporal logic without re-running models.
                  </p>
                </div>

                {/* Challenge 2: Multiprocessing Isolation */}
                <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <span className="text-xs font-mono text-primary font-bold uppercase block">
                    Challenge 2 &bull; Fault Containment
                  </span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Scaling to 100+ Cameras with Process-Level Fault Isolation
                  </h3>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    Threading in a single Python process fails under 100+ high-bitrate RTSP streams due to GIL contention and memory leaks. Worse, an RTSP decoding crash on one stream takes down all surveillance feeds simultaneously.
                  </p>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    <strong className="text-on-surface">Solution:</strong> Isolated each camera stream into a dedicated OS worker process using Python multiprocessing. If a physical camera loses power or drops packets, only its isolated worker restarts; the remaining 99+ camera feeds continue processing uninterrupted.
                  </p>
                </div>
              </div>

              {/* Hardware Acceleration Breakdown */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                <span className="text-xs font-mono text-primary font-bold uppercase block">
                  Challenge 3 &bull; Hardware-Level Latency Optimization
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-on-surface font-sans">
                  Sub-200ms Latency on Constrained Hardware via 4-Layer Acceleration
                </h3>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  Even with optimized models, CPU-GPU memory copies, Python image preprocessing, and serialization overhead restrict frame rates. We engineered a four-tiered hardware acceleration pipeline:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <div className="text-sm font-semibold text-on-surface font-sans">A. TensorRT Engines</div>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Compiled PyTorch weights to FP16/INT8 TensorRT engines with layer fusion and kernel auto-tuning for NVIDIA GPU architectures.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <div className="text-sm font-semibold text-on-surface font-sans">B. GPU Preprocessing</div>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Moved frame resizing, BGR-to-RGB color conversion, normalization, and letterboxing directly to GPU kernels, offloading host CPU cores.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <div className="text-sm font-semibold text-on-surface font-sans">C. CUDA Shared Memory</div>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Replaced gRPC serialization with CUDA shared memory regions. Processes exchange frame pointers directly in GPU VRAM with zero copies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <div className="text-sm font-semibold text-on-surface font-sans">D. Pinned Host Memory</div>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Allocated page-locked pinned host memory buffers for asynchronous DMA host-to-device transfers without blocking CPU threads.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 08: DYNAMIC MULTI-GPU SCHEDULING */}
            <section id="multi-gpu" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  08 &bull; Multi-GPU Scheduling
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Dynamic Multi-GPU Camera Allocation &amp; VRAM Budgeting
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Client servers vary from single RTX cards to multi-GPU workstations (e.g. dual NVIDIA L4s). Statically assigning cameras to GPUs causes out-of-memory crashes when auxiliary services claim memory. We formulated an automated scheduling algorithm executed dynamically at system boot.
              </p>

              {/* Math Formulation & Dual L4 Case Study */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                      Mathematical Formulation
                    </span>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-2.5 rounded bg-surface-container-high text-on-surface">
                        <span className="text-outline">// Usable VRAM per GPU</span>
                        <div className="text-primary font-bold mt-0.5">
                          Usable_VRAM = Free_VRAM &minus; Safety_Buffer
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-surface-container-high text-on-surface">
                        <span className="text-outline">// Maximum Camera Capacity</span>
                        <div className="text-primary font-bold mt-0.5">
                          Camera_Slots = Floor(Usable_VRAM / Est_VRAM_per_Camera)
                        </div>
                      </div>
                    </div>
                    <p className="text-xs font-mono text-secondary">
                      Defaults: Safety Buffer = 1,500 MB | Est. VRAM / Camera = 290 MB
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">
                      Dual NVIDIA L4 Deployment Case Study
                    </span>
                    <div className="space-y-1.5 text-xs font-mono text-secondary">
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1">
                        <span>GPU 0 (Dedicated Pipelines):</span>
                        <span className="text-primary font-bold">77 Camera Slots</span>
                      </div>
                      <div className="text-[11px] text-outline">
                        (24,000 MB &minus; 1,500 MB) / 290 MB = 77.58 &rarr; 77 slots
                      </div>

                      <div className="flex justify-between border-b border-outline-variant/20 pb-1 pt-2">
                        <span>GPU 1 (Shared with Triton/Ollama):</span>
                        <span className="text-primary font-bold">48 Camera Slots</span>
                      </div>
                      <div className="text-[11px] text-outline">
                        (15,500 MB free &minus; 1,500 MB) / 290 MB = 48.27 &rarr; 48 slots
                      </div>

                      <div className="flex justify-between pt-2 text-on-surface font-semibold text-sm">
                        <span>Total Clustered Capacity:</span>
                        <span className="text-primary font-bold">125 Cameras</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Capacity Sensitivity Table: Desktop + Mobile */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">
                    Camera Capacity vs. Workload VRAM Budget
                  </span>

                  {/* Desktop Table */}
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label="Multi-GPU Capacity Table"
                    className="hidden md:block overflow-x-auto focus:outline-none focus:ring-1 focus:ring-primary rounded-lg"
                  >
                    <table className="w-full text-xs font-mono border-collapse">
                      <thead>
                        <tr className="border-b border-outline-variant/40 text-outline text-left">
                          <th className="py-2.5">VRAM Budget Per Camera</th>
                          <th className="py-2.5 text-center">GPU 0 (Dedicated)</th>
                          <th className="py-2.5 text-center">GPU 1 (Shared)</th>
                          <th className="py-2.5 text-right text-primary">Total System Capacity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20">
                        <tr>
                          <td className="py-2 text-on-surface font-sans">280 MB / camera (Lightweight detection)</td>
                          <td className="py-2 text-center text-secondary">80 slots</td>
                          <td className="py-2 text-center text-secondary">50 slots</td>
                          <td className="py-2 text-right text-primary font-bold">130 Cameras</td>
                        </tr>
                        <tr className="bg-primary/5">
                          <td className="py-2 text-on-surface font-sans font-semibold">290 MB / camera (Standard production)</td>
                          <td className="py-2 text-center text-primary font-semibold">77 slots</td>
                          <td className="py-2 text-center text-primary font-semibold">48 slots</td>
                          <td className="py-2 text-right text-primary font-bold">125 Cameras</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-on-surface font-sans">300 MB / camera (Detection + pose keypoints)</td>
                          <td className="py-2 text-center text-secondary">75 slots</td>
                          <td className="py-2 text-center text-secondary">46 slots</td>
                          <td className="py-2 text-right text-primary font-bold">121 Cameras</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-on-surface font-sans">350 MB / camera (Heavy multi-tasking)</td>
                          <td className="py-2 text-center text-secondary">64 slots</td>
                          <td className="py-2 text-center text-secondary">40 slots</td>
                          <td className="py-2 text-right text-primary font-bold">104 Cameras</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Stacked Cards */}
                  <div className="block md:hidden space-y-2">
                    {[
                      { budget: '280 MB (Lightweight)', gpu0: '80 slots', gpu1: '50 slots', total: '130 Cams' },
                      { budget: '290 MB (Standard)', gpu0: '77 slots', gpu1: '48 slots', total: '125 Cams', highlight: true },
                      { budget: '300 MB (Pose Keypoints)', gpu0: '75 slots', gpu1: '46 slots', total: '121 Cams' },
                      { budget: '350 MB (Heavy Multi-task)', gpu0: '64 slots', gpu1: '40 slots', total: '104 Cams' },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs font-mono ${
                          row.highlight
                            ? 'bg-primary/10 border-primary/50'
                            : 'bg-surface-container-low border-outline-variant/30'
                        }`}
                      >
                        <div className="flex items-center justify-between font-sans font-semibold text-on-surface mb-1">
                          <span>{row.budget}</span>
                          <span className="text-primary font-bold font-mono">{row.total}</span>
                        </div>
                        <div className="flex justify-between text-secondary text-[11px]">
                          <span>GPU 0: {row.gpu0}</span>
                          <span>GPU 1: {row.gpu1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 09: ON-PREMISES DEPLOYMENT & IP SECURITY */}
            <section id="deployment" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  09 &bull; On-Premises &amp; IP Protection
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Nuitka C-Compilation &amp; 11-Service Container Topology
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  Enterprise clients mandate that video analytics software operate entirely inside their isolated on-premises networks. To deliver turn-key deployments without exposing proprietary Python algorithms and heuristics, application modules are compiled using Nuitka into stripped native shared object binaries (<code className="text-primary font-mono">.so</code>).
                </p>

                {/* 11 Microservices Responsive Table */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">
                    Production Microservice Topology (Orchestrated by Docker Compose)
                  </span>

                  {/* Desktop Table */}
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label="Microservice Architecture Table"
                    className="hidden md:block overflow-x-auto focus:outline-none focus:ring-1 focus:ring-primary rounded-lg"
                  >
                    <table className="w-full text-xs font-mono border-collapse">
                      <thead>
                        <tr className="border-b border-outline-variant/40 text-outline text-left">
                          <th className="py-2.5">Microservice</th>
                          <th className="py-2.5">Responsibility</th>
                          <th className="py-2.5 text-right">Technology</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/20 font-sans text-xs">
                        {[
                          { name: 'Multi-camera Analytics', resp: 'RTSP ingestion, isolated frame decoding, and use-case evaluation', tech: 'Python + Nuitka .so' },
                          { name: 'Post-event Service', resp: 'Asynchronous polling & external delivery of AI event records', tech: 'Python Daemon' },
                          { name: 'Gemma Consumer', resp: 'VLM scene reasoning for complex event narratives and physical fights', tech: 'Gemma 3 E4B' },
                          { name: 'Computer Vision API', resp: 'REST and WebSocket gateway for configuration and live alerts', tech: 'FastAPI' },
                          { name: 'Triton Inference Server', resp: 'Centralized model execution with dynamic request batching', tech: 'NVIDIA Triton' },
                          { name: 'MongoDB', resp: 'Storage of structured AI event documents, crops, and metadata', tech: 'MongoDB' },
                          { name: 'Redis', resp: 'Low-latency inter-process messaging and configuration caching', tech: 'Redis' },
                          { name: 'ChromaDB', resp: 'Vector storage for facial biometric embeddings and similarity search', tech: 'ChromaDB' },
                          { name: 'Ollama', resp: 'Local LLM serving for scene summarization and reporting', tech: 'Ollama' },
                          { name: 'Prometheus', resp: 'Telemetry collection for VRAM, GPU util, latency, and stream health', tech: 'Prometheus' },
                          { name: 'Grafana', resp: 'Operational visualization dashboards and SLA threshold alerts', tech: 'Grafana' },
                        ].map((s, idx) => (
                          <tr key={idx}>
                            <td className="py-2.5 text-on-surface font-semibold font-mono">{s.name}</td>
                            <td className="py-2.5 text-secondary">{s.resp}</td>
                            <td className="py-2.5 text-right text-primary font-mono">{s.tech}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Stacked Cards */}
                  <div className="block md:hidden space-y-2">
                    {[
                      { name: 'Multi-camera Analytics', resp: 'RTSP ingestion, decoding, and use-case evaluation', tech: 'Python + Nuitka .so' },
                      { name: 'Post-event Service', resp: 'Asynchronous external event API dispatch', tech: 'Python Daemon' },
                      { name: 'Gemma Consumer', resp: 'VLM scene reasoning for complex events', tech: 'Gemma 3 E4B' },
                      { name: 'Triton Server', resp: 'Centralized model inference and dynamic batching', tech: 'NVIDIA Triton' },
                      { name: 'MongoDB & Redis', resp: 'Event storage and inter-process messaging', tech: 'Mongo / Redis' },
                      { name: 'Observability', resp: 'Metrics collection and operational dashboards', tech: 'Prometheus / Grafana' },
                    ].map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-on-surface">{s.name}</span>
                          <span className="font-mono text-primary text-[11px]">{s.tech}</span>
                        </div>
                        <p className="text-secondary font-sans">{s.resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: BENCHMARKS & OBSERVABILITY */}
            <section id="benchmarks" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  10 &bull; Benchmarks &amp; Observability
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Measured Production Performance: Before vs. After
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  Real-time telemetry gathered via Prometheus and Grafana captured the concrete performance gains achieved by transitioning to TensorRT engines, CUDA shared memory, and centralized Triton model serving:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Before Optimization */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">
                      Before Optimization (PyTorch Baseline)
                    </span>
                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-outline block text-[11px]">Inference Request Rate:</span>
                        <span className="text-xl font-bold text-on-surface">~90&ndash;100 req/s</span>
                      </div>
                      <div>
                        <span className="text-outline block text-[11px]">End-to-End Latency:</span>
                        <span className="text-xl font-bold text-on-surface">~500&ndash;750 ms</span>
                      </div>
                      <div>
                        <span className="text-outline block text-[11px]">Model VRAM Scaling:</span>
                        <span className="text-sm font-semibold text-secondary">Linear $O(N)$ (25 GB / 100 cams)</span>
                      </div>
                    </div>
                  </div>

                  {/* After Optimization */}
                  <div className="p-5 rounded-xl bg-surface-container-high border-2 border-primary/50 space-y-3 shadow-lg">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                      After Optimization (TensorRT + Triton + CUDA IPC)
                    </span>
                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <span className="text-outline block text-[11px]">Inference Request Rate:</span>
                        <span className="text-xl font-bold text-primary">~170&ndash;180 req/s <span className="text-xs text-on-surface font-normal">(+80%)</span></span>
                      </div>
                      <div>
                        <span className="text-outline block text-[11px]">End-to-End Latency:</span>
                        <span className="text-xl font-bold text-primary">~100&ndash;200 ms <span className="text-xs text-on-surface font-normal">(-70%)</span></span>
                      </div>
                      <div>
                        <span className="text-outline block text-[11px]">Model VRAM Scaling:</span>
                        <span className="text-sm font-bold text-primary">Constant $O(1)$ (~2.5 GB / 130 cams)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-mono text-secondary">
                  Telemetry verified across 130 simultaneous live RTSP video feeds during prolonged 24-hour test runs on dual NVIDIA L4 GPUs.
                </div>
              </div>
            </section>

            {/* SECTION 11: ENGINEERING CONTRIBUTIONS */}
            <section id="contributions" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  11 &bull; Engineering Contributions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Architectural Leadership &amp; Hands-On Implementation
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Architected and implemented real-time CCTV analytics pipelines using Python, OpenCV, and CUDA acceleration.',
                    'Engineered process-based camera isolation using Python multiprocessing to contain RTSP stream drops and eliminate cascading downtime.',
                    'Integrated object detection (YOLOv11/YOLO26), human pose estimation, and face recognition (RetinaFace + ArcFace).',
                    'Designed the modular multi-use-case evaluation layer with shared primary object detection to eliminate redundant model executions.',
                    'Integrated NVIDIA Triton Inference Server for centralized deep learning model serving and dynamic request batching.',
                    'Compiled and optimized PyTorch model weights into high-throughput TensorRT FP16/INT8 execution engines.',
                    'Implemented zero-copy CUDA Shared Memory and pinned host memory buffers for ultra-low latency inference exchange.',
                    'Architected the dynamic multi-GPU VRAM scheduling algorithm to dynamically balance camera loads and prevent CUDA OOMs.',
                    'Implemented structured AI event serialization in MongoDB and developed the asynchronous post-event delivery daemon.',
                    'Built Docker-based production deployment workflows and automated zero-downtime container update scripts.',
                    'Used Nuitka to compile critical Python algorithms into native C-extension (.so) binaries to safeguard intellectual property.',
                    'Established production performance monitoring and observability using Prometheus metrics and Grafana dashboards.',
                    'Profiled and debugged real-world RTSP streaming edge cases, packet corruptions, GPU kernel bottlenecks, and PCIe transfers.',
                    'Integrated Gemma 3 E4B Vision-Language Model for multimodal scene reasoning and complex contextual surveillance events.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5" aria-hidden="true">
                        verified
                      </span>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 12: LEARNINGS & FUTURE ROADMAP */}
            <section id="learnings" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  12 &bull; Learnings &amp; Future Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Key Production Insights &amp; Next Horizons
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Learnings */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Key Engineering Learnings
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                      <h4 className="text-sm font-semibold text-on-surface font-sans">Architecture Over Raw Hardware</h4>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        Transitioning from naive per-process loading to centralized Triton serving saved ~13x GPU memory, proving that architectural restructuring yields far greater efficiency gains than purchasing larger GPUs.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                      <h4 className="text-sm font-semibold text-on-surface font-sans">Data Movement is the Real Bottleneck</h4>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        PCIe host-to-device transfers and Python serialization introduced more latency than neural network forward passes. CUDA shared memory is non-negotiable for low-latency multi-stream pipelines.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                      <h4 className="text-sm font-semibold text-on-surface font-sans">Edge Deployment Defense</h4>
                      <p className="text-sm text-secondary font-sans leading-relaxed">
                        Deploying on client servers requires treating hardware as heterogeneous and untrusted, demanding dynamic VRAM budgeting and compiled binary protection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Roadmap */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Future Roadmap &amp; Planned Enhancements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-secondary">
                    {[
                      'Adaptive GPU scheduling based on per-frame motion density',
                      'Dynamic FPS throttling triggered by scene activity',
                      'Cross-camera multi-target person and vehicle Re-ID',
                      'Direct VLM reasoning for open-vocabulary anomaly alerts',
                      'Automated model drift evaluation & active-learning loops',
                      'DeepStream SDK integration for NVDEC hardware video decoding',
                      'Multi-node distributed Triton cluster orchestration',
                      'Synthetic data pipelines for rare industrial hazards',
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" aria-hidden="true"></span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* NEXT PROJECT NAVIGATION - Prominent Rich Preview Card */}
            <section className="pt-6 border-t border-outline-variant/30">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <Link
                  href="/#projects"
                  className="px-5 py-4 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all inline-flex items-center gap-2 group self-start sm:self-center"
                >
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform" aria-hidden="true">
                    arrow_back
                  </span>
                  <span>All Projects</span>
                </Link>

                <Link
                  href="/project-analytics-agent"
                  className="flex-1 p-5 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 transition-all group flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                      Next Case Study &rarr;
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-on-surface font-sans group-hover:text-primary transition-colors">
                      Visionfacts Analytics Agent
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans">
                      Multi-agent autonomous reporting system answering operational queries in plain English via MCP tools.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[24px] group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform shrink-0" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </section>

            {/* CTA SECTION */}
            <section>
              <div className="bg-surface-container border border-outline-variant/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center sm:text-left max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight font-sans">
                    Want to discuss real-time video analytics or edge AI architecture?
                  </h3>
                  <p className="text-sm font-sans text-secondary leading-relaxed">
                    Open for technical architecture discussions, AI systems consulting, and senior/lead engineering roles.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 motion-reduce:active:scale-100 shadow-md"
                >
                  <span>Get in touch</span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
}
