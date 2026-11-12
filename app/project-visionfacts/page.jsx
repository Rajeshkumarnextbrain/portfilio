import Link from 'next/link';
import ProjectTOC from '../../components/ProjectTOC';

export const metadata = {
  title: 'VisionFacts.ai Case Study | Rajesh Kumar S',
  description: 'Production AI CCTV video analytics platform scaling 130+ camera streams with NVIDIA Triton, TensorRT FP32, and CUDA Shared Memory on 2x NVIDIA L4 GPUs.',
};

const TOC_SECTIONS = [
  { id: 'overview', label: '01 · Project Overview' },
  { id: 'problem-statement', label: '02 · Problem Statement' },
  { id: 'use-cases', label: '03 · AI Use Cases' },
  { id: 'architecture', label: '04 · System Architecture' },
  { id: 'tech-stack', label: '05 · Technology Stack' },
  { id: 'challenges', label: '06 · Challenges & Solutions' },
  { id: 'performance', label: '07 · Performance & Results' },
  { id: 'contributions', label: '08 · My Contributions' },
];

export default function VisionfactsPage() {
  return (
    <div className="w-full">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-on-primary font-mono text-xs font-semibold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Back Navigation */}
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

        {/* Hero Section */}
        <header className="space-y-6 pb-8 border-b border-outline-variant/30">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
              <span>COMPUTER VISION PLATFORM &bull; MANUFACTURING &amp; RETAIL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface font-sans">
              VisionFacts.ai
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-on-surface font-sans font-medium leading-relaxed max-w-4xl">
              Production-grade real-time CCTV video analytics platform serving 130+ camera streams across 2 &times; NVIDIA L4 GPUs.
            </p>

            <p className="text-base text-secondary font-sans leading-relaxed max-w-3xl">
              Engineered to convert passive surveillance into automated real-time intelligence—detecting safety violations, perimeter security risks, operational compliance, and customer traffic metrics with centralized Triton model serving, FP32 TensorRT engines, and CUDA Shared Memory.
            </p>
          </div>

          {/* Headline Results Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Deployment Scale
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">130+</span>
                <span className="text-xs font-mono text-secondary">Cameras Deployed</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Latest production deployment running on 2 &times; NVIDIA L4 GPUs (24 GB VRAM each) with per-camera process isolation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-primary/30 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Model Memory Reduction
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">~6.5x</span>
                <span className="text-xs font-mono text-secondary">Dual-GPU Scope</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Centralized Triton model allocation reduced model VRAM from ~32.5 GB (duplicated) to ~5 GB combined across both GPUs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Production Monitoring Snapshot
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">192 req/s</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Mean YOLO26 request rate at 107 ms mean execution latency and 141 ms avg frame latency (30-min Grafana window).
              </p>
            </div>
          </div>

          {/* Metadata & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Role: <strong className="font-semibold text-primary">Lead Computer Vision &amp; AI Systems Architect</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Company: <strong className="font-semibold">Nextbrain Technologies</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Aug 2023 &ndash; Present
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-1.5 active:scale-95 motion-reduce:active:scale-100"
              >
                <span>Discuss this project</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </a>
              <a
                href="#architecture"
                className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/50 text-xs font-mono text-on-surface hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                <span>Architecture Flow &darr;</span>
              </a>
            </div>
          </div>
        </header>

        {/* Two-Column Layout: Sticky Navigation + Main Case Study */}
        <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12 pt-8">

          {/* Sticky Table of Contents */}
          <ProjectTOC sections={TOC_SECTIONS} />

          {/* Main Case Study Content */}
          <main id="main-content" className="flex-1 min-w-0 space-y-16">

            {/* 1. PROJECT OVERVIEW */}
            <section id="overview" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  01 &bull; Project Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Intelligent CCTV Video Analytics at Production Scale
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  VisionFacts.ai is an enterprise AI-powered CCTV video analytics platform designed for manufacturing plants and retail operations. The platform transforms existing, passive camera installations into automated monitoring systems capable of identifying safety infractions, perimeter intrusions, operational anomalies, and customer movement behaviors in real time.
                </p>

                <p className="text-base text-secondary font-sans leading-relaxed">
                  Conventional surveillance requires security personnel to continuously watch walls of video monitors, leading to cognitive fatigue and missed incidents. VisionFacts.ai solves this limitation by applying deep learning computer vision directly to live RTSP camera feeds, instantly generating structured incident events, alert triggers, and operational telemetry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">DEPLOYMENT TARGETS</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">Manufacturing &amp; Retail</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Shop floors, heavy machinery cells, warehouse logistics bays, store entrances, and cashier lanes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">SCALE &amp; HARDWARE</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">130+ Cameras Deployed</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Deployed across 2 &times; NVIDIA L4 GPUs (24 GB each), running multiple concurrent AI use cases per camera.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">MY RESPONSIBILITY</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">Primary Contributor (80–85%)</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Designed stream isolation, multi-GPU scheduling, Triton model serving, FP32 TensorRT engines, and deployment packaging.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. PROBLEM STATEMENT */}
            <section id="problem-statement" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  02 &bull; Problem Statement
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Real-World Engineering Challenges in CCTV Analytics
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Building a reliable surveillance analytics platform processing over a hundred live streams is primarily a systems engineering and GPU resource optimization challenge, rather than a generic model training task:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Simultaneous RTSP Stream Ingestion',
                    desc: 'Ingesting and decoding 100+ continuous RTSP feeds introduces significant CPU thread contention, memory accumulation risks, and network jitter. An unexpected connection drop on one camera must not disrupt neighbor streams.',
                  },
                  {
                    title: 'GPU Memory (VRAM) Scaling Bottleneck',
                    desc: 'Running deep neural networks inside each camera worker process duplicates model weights linearly: 130 cameras × ~250 MB = ~32.5 GB of redundant model VRAM, exceeding standard GPU hardware limits.',
                  },
                  {
                    title: 'Multi-Task Concurrency Per Camera',
                    desc: 'A single camera often requires multiple simultaneous analytics (PPE violation, intrusion geofencing, forklift detection, and fall detection). Running duplicate detection passes multiplies GPU workload by 4–5x.',
                  },
                  {
                    title: 'Inference Latency & Data-Transfer Overhead',
                    desc: 'Passing video frames between application processes and the inference server over standard request buffers introduces data-transfer overhead that can limit frame rates and overall throughput.',
                  },
                  {
                    title: 'Heterogeneous Multi-GPU Scaling',
                    desc: 'Client servers range from single GPUs to dual-GPU clusters shared with auxiliary workloads. A fixed camera-to-GPU assignment causes memory imbalance and application instability.',
                  },
                  {
                    title: 'Real-World Production Stream Reliability',
                    desc: 'Hardware power cycles, frame corruptions, and packet drops occur regularly in industrial environments. The platform requires fault-isolated recovery mechanisms without system-wide downtime.',
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

            {/* 3. AI USE CASES */}
            <section id="use-cases" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  03 &bull; AI Use Cases
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Production Analytics Modules &amp; Business Purpose
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The platform supports <strong className="text-on-surface font-semibold">25+ AI analytics use cases and client-specific workflows</strong> across manufacturing, retail, and other operational environments. The selected modules below represent core production examples, while custom spatial and behavioral rules are tailored per deployment:
              </p>

              <div className="space-y-6">
                {/* Manufacturing Analytics */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Manufacturing Analytics (Selected Core Modules)
                    </h3>
                    <span className="text-xs font-mono text-primary font-semibold">
                      Worker Safety &bull; Perimeter Protection &bull; Hazard Mitigation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'PPE Violation Detection',
                        detects: 'Identifies workers not wearing required personal protective equipment (hardhats, high-visibility vests, boots) in designated areas.',
                        purpose: 'Supports workplace safety compliance and helps reduce injury risks in active manufacturing zones.',
                      },
                      {
                        name: 'Intrusion Detection',
                        detects: 'Detects unauthorized human presence in restricted zones or during configured time periods.',
                        purpose: 'Protects dangerous machinery perimeters and secures facilities against unauthorized entry.',
                      },
                      {
                        name: 'Distress & SOS Signal Detection',
                        detects: 'Identifies predefined human gestures or movements indicating distress or requests for assistance.',
                        purpose: 'Enables prompt notification for emergency assistance in industrial work cells.',
                      },
                      {
                        name: 'Fire & Smoke Detection',
                        detects: 'Detects visual indications of flame and smoke in open facility environments.',
                        purpose: 'Provides visual early warning in large open spaces before smoke alarms trigger.',
                      },
                      {
                        name: 'Forklift Detection & Safety',
                        detects: 'Detects forklifts operating within facilities and monitors proximity to nearby workers.',
                        purpose: 'Helps prevent pedestrian-equipment collisions in busy logistics corridors.',
                      },
                      {
                        name: 'Vehicle Detection & Tracking',
                        detects: 'Detects and tracks trucks, vans, and industrial transit vehicles across plant yards.',
                        purpose: 'Monitors yard logistics movement and assists loading bay scheduling.',
                      },
                      {
                        name: 'Helmet & Seatbelt Detection',
                        detects: 'Identifies missing safety helmets or unfastened seatbelts in applicable safety scenarios.',
                        purpose: 'Supports transportation and mobile equipment operating safety protocols.',
                      },
                      {
                        name: 'Mobile Phone Usage Detection',
                        detects: 'Detects mobile phone usage in safety-sensitive or machine operation areas.',
                        purpose: 'Helps mitigate worker distraction around active heavy machinery.',
                      },
                      {
                        name: 'Human Fall Detection',
                        detects: 'Identifies potential human fall incidents using visual and pose-related information.',
                        purpose: 'Facilitates rapid assistance for lone workers or shop-floor slip/fall accidents.',
                      },
                      {
                        name: 'Wrong-Way Direction Detection',
                        detects: 'Detects vehicles moving against configured permitted directional flows.',
                        purpose: 'Prevents traffic hazards and bottlenecks in one-way logistics lanes.',
                      },
                      {
                        name: 'Geofence Perimeter Monitoring',
                        detects: 'Monitors objects or personnel entering or leaving configured virtual boundaries.',
                        purpose: 'Enforces spatial isolation between personnel and automated machinery.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                        <div className="text-sm font-semibold text-on-surface font-sans">
                          {item.name}
                        </div>
                        <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                          <strong className="text-on-surface font-medium">Detects:</strong> {item.detects}
                        </p>
                        <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                          <strong className="text-primary font-medium">Purpose:</strong> {item.purpose}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Retail Analytics */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Retail Analytics (Selected Core Modules)
                    </h3>
                    <span className="text-xs font-mono text-primary font-semibold">
                      Customer Experience &bull; Operational Efficiency
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'Staff Attendance Monitoring',
                        detects: 'Uses face recognition (RetinaFace + ArcFace) to identify registered staff members.',
                        purpose: 'Supports touchless attendance logging without physical biometric queues.',
                      },
                      {
                        name: 'Queue Detection',
                        detects: 'Identifies queues forming in designated billing and customer service areas.',
                        purpose: 'Alerts store supervisors to checkout bottlenecks in real time.',
                      },
                      {
                        name: 'Customer Wait Time Estimation',
                        detects: 'Estimates customer waiting time in monitored queues.',
                        purpose: 'Informs dynamic cashier staffing decisions to reduce checkout abandonment.',
                      },
                      {
                        name: 'Store Occupancy Monitoring',
                        detects: 'Tracks the number of people present within configured store areas.',
                        purpose: 'Helps maintain compliance with facility occupancy and safety limits.',
                      },
                      {
                        name: 'Heatmap Activity Analytics',
                        detects: 'Visualizes movement and activity patterns to identify high-traffic areas and dwell zones.',
                        purpose: 'Informs store merchandising, promotional placement, and aisle layout design.',
                      },
                      {
                        name: 'Footfall Counting',
                        detects: 'Counts people entering and exiting retail locations bidirectionally.',
                        purpose: 'Helps evaluate visitor traffic trends against sales receipts and peak hours.',
                      },
                      {
                        name: 'Customer vs. Staff Classification',
                        detects: 'Differentiates staff, visitors, and customers using configured identification and business rules.',
                        purpose: 'Filters staff movements out of visitor analytics to keep conversion metrics representative.',
                      },
                      {
                        name: 'Grouped Customer Counting',
                        detects: 'Supports group-aware footfall analytics to identify customers entering together.',
                        purpose: 'Provides group-aware visitor data instead of counting groups as isolated shoppers.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                        <div className="text-sm font-semibold text-on-surface font-sans">
                          {item.name}
                        </div>
                        <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                          <strong className="text-on-surface font-medium">Detects:</strong> {item.detects}
                        </p>
                        <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                          <strong className="text-primary font-medium">Purpose:</strong> {item.purpose}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Custom AI Engine Note */}
                  <div className="p-4 rounded-xl bg-surface-container-high border border-primary/30 mt-2 space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                      Custom AI Use-Case Framework
                    </span>
                    <p className="text-sm text-secondary font-sans leading-relaxed">
                      In addition to predefined analytics modules, the platform supports custom use-case development based on client requirements, camera configurations, operational rules, and industry-specific workflows.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. SYSTEM ARCHITECTURE */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  04 &bull; System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  End-to-End Video Analytics Architecture
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                VisionFacts.ai follows a multi-process, multi-camera architecture with centralized AI inference and modular use-case processing:
              </p>

              {/* Architecture Diagram */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">

                {/* Linear Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      stage: '01',
                      title: 'CCTV Cameras',
                      detail: 'IP cameras stream live RTSP feeds over on-premises Ethernet networks.',
                      tech: 'RTSP / H.264 / H.265'
                    },
                    {
                      stage: '02',
                      title: 'Stream Isolation',
                      detail: 'Python multiprocessing creates a dedicated process for each camera.',
                      tech: 'Process Isolation'
                    },
                    {
                      stage: '03',
                      title: 'Frame Acquisition',
                      detail: 'Continuously retrieves frames and prepares them for inference.',
                      tech: 'OpenCV + CUDA Preprocessing'
                    },
                    {
                      stage: '04',
                      title: 'Centralized Inference',
                      detail: 'Triton executes FP32 models using CUDA Shared Memory communication.',
                      tech: 'Triton + TensorRT FP32'
                    },
                    {
                      stage: '05',
                      title: 'Use-Case Logic',
                      detail: 'Evaluates spatial boundaries, equipment rules, and temporal logic.',
                      tech: 'Modular Evaluator'
                    },
                    {
                      stage: '06',
                      title: 'Event Generation',
                      detail: 'Generates structured AI event records upon rule satisfaction.',
                      tech: 'JSON Schema'
                    },
                    {
                      stage: '07',
                      title: 'MongoDB Storage',
                      detail: 'Stores event records, crop references, and operational metadata.',
                      tech: 'MongoDB'
                    },
                    {
                      stage: '08',
                      title: 'Backend API & UI',
                      detail: 'Post-event service monitors MongoDB and sends events to backend APIs.',
                      tech: 'FastAPI + WebSockets'
                    },
                  ].map((item) => (
                    <div key={item.stage} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-primary font-bold">STAGE {item.stage}</span>
                          <span className="text-[11px] font-mono text-outline">{item.tech}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-on-surface font-sans">{item.title}</h3>
                        <p className="text-xs text-secondary font-sans leading-relaxed mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Architectural Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-on-surface font-sans">How Multiple Cameras Are Managed</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      After retrieving configurations from a backend API, the application creates a dedicated Python process for each camera using multiprocessing. Each process independently manages stream lifecycle, reducing the impact of individual camera failures on other streams.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-on-surface font-sans">How AI Inference Is Centralized</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Models are deployed once in NVIDIA Triton Inference Server. Camera processes submit inference requests and exchange data through CUDA Shared Memory regions, avoiding duplicate model loading across processes while reducing transfer overhead.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-on-surface font-sans">How Events Reach the Dashboard</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      When a use-case condition is satisfied, the system writes an event record to MongoDB. A separate, asynchronous post-event service monitors MongoDB and delivers events to backend APIs, decoupling video analytics from external API delivery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TECHNOLOGY STACK */}
            <section id="tech-stack" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  05 &bull; Technology Stack
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Verified Production Technologies
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Organized strictly by category, reflecting verified components used in production:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Programming */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Programming
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Python Multiprocessing'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Core application logic, stream orchestration, and multiprocessing isolation.
                  </p>
                </div>

                {/* Computer Vision */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Computer Vision
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['OpenCV', 'PyTorch', 'YOLOv11 / YOLO26', 'YOLO-Pose', 'RetinaFace', 'ArcFace', 'DINOv3'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Object detection, pose estimation, face detection, and embedding extraction.
                  </p>
                </div>

                {/* AI Inference */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    AI Inference
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['NVIDIA Triton', 'NVIDIA TensorRT', 'ONNX', 'CUDA'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Centralized model serving with TensorRT FP32 engines, prioritizing detection accuracy in production.
                  </p>
                </div>

                {/* GPU Optimization */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    GPU Optimization
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['CUDA Shared Memory', 'Pinned Memory', '1,500 MB Safety Buffer', 'Multi-GPU Allocation'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Shared memory IPC reducing transfer overhead, pinned host memory, and dynamic VRAM safety budgeting (1,500 MB buffer).
                  </p>
                </div>

                {/* Backend & Database */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Backend &amp; Database
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['FastAPI', 'MongoDB', 'Redis', 'ChromaDB'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Event storage, inter-process caching, and facial vector similarity search.
                  </p>
                </div>

                {/* Infrastructure & Build */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Build &amp; Infrastructure
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Docker', 'Docker Compose', 'Ubuntu Linux', 'Nuitka'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Nuitka C-extension compilation (.so) for IP protection; Docker Compose service orchestration.
                  </p>
                </div>

                {/* Monitoring */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Monitoring &amp; Observability
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Prometheus', 'Grafana'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Real-time operational dashboards tracking VRAM, GPU utilization, stream FPS, and latency metrics.
                  </p>
                </div>

                {/* Generative AI */}
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Generative AI (VLM)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Gemma 3 E4B', 'Ollama'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Vision-Language Model integration for scene reasoning and complex event summarization.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. ENGINEERING CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  06 &bull; Engineering Challenges &amp; Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Major Technical Problems &amp; Implementation Details
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The primary engineering contributions on VisionFacts.ai organized by:
                <span className="text-primary font-mono font-semibold"> Challenge &rarr; Technical Approach &rarr; Implementation &rarr; Result</span>.
              </p>

              <div className="space-y-6">

                {/* 1. Triton Centralized Inference */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 1 &bull; GPU MEMORY DUPLICATION</span>
                    <span className="text-xs font-mono text-primary font-semibold">~6.5x Model Memory Reduction</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Centralized AI Inference Using NVIDIA Triton Server
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Loading YOLO models independently inside every camera worker process duplicates model weights. At an estimated 250 MB per camera, redundant model instances for 130 cameras would require approximately 32.5 GB of GPU memory just for duplicate model copies, creating severe memory constraints.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Decouple model weights from camera worker processes. Deploy deep learning models once in a centralized model repository and serve inference requests across all active camera processes.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Deployed YOLOv11, YOLO-Pose, RetinaFace, and ArcFace centrally in NVIDIA Triton Inference Server across two NVIDIA L4 GPUs. Camera processes acquire frames and submit inference requests to Triton, which executes the corresponding model and returns prediction results.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Triton model-serving GPU memory was approximately 2.5 GB per GPU (~5 GB combined across the dual-GPU deployment), achieving an estimated <strong className="text-primary font-mono font-semibold">~6.5x model memory reduction</strong> compared to the ~32.5 GB duplicated baseline. (Note: Total GPU VRAM also includes per-camera decoding, frame buffers, and auxiliary workloads).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. CUDA Shared Memory */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 2 &bull; DATA-TRANSFER OVERHEAD</span>
                    <span className="text-xs font-mono text-primary font-semibold">Shared Memory IPC</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    CUDA Shared Memory to Reduce Data-Transfer Overhead
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Transferring inference input frames and prediction outputs between camera processes and Triton through conventional request buffers introduces communication overhead and PCIe transfer latency across dozens of active streams.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Use CUDA Shared Memory regions for communication between the camera application processes and the Triton inference server to reduce unnecessary data-transfer overhead.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Configured CUDA Shared Memory regions. Camera processes place preprocessed frame inputs directly into shared memory regions accessible by Triton, exchanging inference data without repeated host-device buffer copying.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Substantially reduced inference communication overhead and helped maintain pipeline throughput across concurrent video workloads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. TensorRT Optimization */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 3 &bull; INFERENCE LATENCY &amp; ACCURACY</span>
                    <span className="text-xs font-mono text-primary font-semibold">FP32 TensorRT Execution</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    TensorRT Optimization &amp; GPU Preprocessing (FP32 Precision)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Conventional framework-based inference incurs execution overhead, while CPU-bound image preprocessing operations (resizing, color conversions, normalization) limit the number of frames processed per second.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Convert deep learning models to TensorRT execution engines using FP32 precision to prioritize detection accuracy in production, while moving image preprocessing operations closer to the GPU inference pipeline.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Exported models to ONNX and compiled into TensorRT FP32 engines with layer fusion. Shifted frame resizing and normalization closer to GPU memory, utilizing page-locked pinned memory for supported host-to-device transfers.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Improved inference execution efficiency without compromising bounding box or feature accuracy, maintaining responsive frame rates under continuous multi-camera streaming.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Multi-GPU Allocation & Safety Buffer */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 4 &bull; VRAM ALLOCATION &amp; SAFETY BUFFER</span>
                    <span className="text-xs font-mono text-primary font-semibold">1,500 MB (1.5 GB) Safety Buffer</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    GPU Memory Allocation &amp; Safety Buffer
                  </h3>

                  <div className="space-y-3 text-sm text-secondary font-sans leading-relaxed">
                    <p>
                      The application dynamically checks available GPU memory before allocating camera processes.
                    </p>
                    <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm">
                      <li>
                        Estimated average VRAM budget: <strong className="text-on-surface font-semibold font-mono">290 MB per camera process</strong>
                      </li>
                      <li>
                        Configured GPU memory safety buffer: <strong className="text-primary font-semibold font-mono">1,500 MB (1.5 GB)</strong>
                      </li>
                      <li>
                        Actual per-camera memory consumption varies depending on the workload.
                      </li>
                    </ul>
                    <p>
                      The scheduler calculates available camera capacity while preserving the configured 1.5 GB memory buffer. This helps prevent GPU memory exhaustion and maintain stable multi-camera processing across both NVIDIA L4 GPUs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans pt-1">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Client servers have varying GPU configurations (single or multiple GPUs) with mixed workloads. Static camera assignments risk memory exhaustion when auxiliary workloads (Triton, local LLMs) claim VRAM.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Implement a GPU-aware camera allocation strategy that calculates available capacity for each detected GPU before starting camera processes, preserving the configured 1,500 MB (1.5 GB) memory safety buffer.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Queries free VRAM dynamically via <code className="text-primary font-mono text-xs">torch.cuda.mem_get_info()</code>; preserves the configured 1,500 MB safety buffer; calculates available camera slots based on the 290 MB planning budget; distributes streams across detected GPUs.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Successfully deployed 130+ cameras across 2 &times; NVIDIA L4 GPUs. Actual per-camera memory varied from approximately 245 MB to 360 MB depending on workload, with the preserved 1,500 MB buffer protecting against unexpected memory exhaustion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Multiprocessing Fault Isolation */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 5 &bull; STREAM RELIABILITY</span>
                    <span className="text-xs font-mono text-primary font-semibold">Process-Level Fault Isolation</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Multiprocessing Isolation &amp; Camera-Level Recovery
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Physical cameras periodically disconnect, experience network drops, or transmit corrupted frames. In a single-process architecture, decoding errors can terminate or destabilize the entire platform.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Isolate camera stream management into dedicated OS worker processes, containing camera-specific failures to individual pipelines.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Spawns dedicated Python worker processes per camera stream. Added non-blocking frame retrieval, stream validation, and automatic reconnection handling with exponential backoff.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Stream disconnects and network interruptions remain strictly contained to the affected camera process, allowing remaining active camera pipelines to continue processing without interruption.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6. Shared Detection Results */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 6 &bull; MULTI-USE-CASE EFFICIENCY</span>
                    <span className="text-xs font-mono text-primary font-semibold">Shared Detection Pipeline</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Shared Primary Detection Across Multiple AI Use Cases
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        A single camera often requires multiple analytics functions simultaneously (e.g. PPE monitoring, intrusion detection, mobile usage). Running independent detection models for every use case creates redundant computation.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Use a shared primary object detection stage followed by modular use-case processing to evaluate business rules.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        The primary detector identifies relevant objects (people, vehicles) once per frame. The structured predictions are passed to enabled use-case modules, which evaluate spatial geofences, pose checks, and temporal conditions without re-detecting base objects.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Eliminates redundant object detection operations, enabling multiple concurrent analytics modules per camera while improving overall computational efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7. Production Deployment & Monitoring */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 7 &bull; ON-PREMISES DEPLOYMENT</span>
                    <span className="text-xs font-mono text-primary font-semibold">IP Protection &amp; Observability</span>
                  </div>

                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Nuitka Compilation &amp; Prometheus/Grafana Monitoring
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Challenge</span>
                      <p className="text-secondary leading-relaxed">
                        Client security policies require deploying on their own GPU servers without exposing proprietary source code, while operations teams require real-time visibility into infrastructure health.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Technical Approach</span>
                      <p className="text-secondary leading-relaxed">
                        Package application modules using Nuitka to compile Python into native C-extension shared object binaries (.so), orchestrate services via Docker Compose, and integrate Prometheus telemetry.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-outline font-bold block">Implementation</span>
                      <p className="text-secondary leading-relaxed">
                        Compiled Python modules to stripped .so binaries; packaged the production release into Docker images; configured Prometheus exporters and Grafana dashboards tracking GPU VRAM, utilization, request rates, and stream latency.
                      </p>
                    </div>

                    <div className="space-y-2 p-4 rounded-xl bg-surface-container-low border border-primary/30">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">Result</span>
                      <p className="text-secondary leading-relaxed">
                        Enables protected on-premises deployment on client GPU servers with repeatable updates, supported by real-time observability for production operations.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 7. PERFORMANCE & PRODUCTION RESULTS */}
            <section id="performance" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  07 &bull; Performance &amp; Production Results
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Measured Benchmarks &amp; Production Monitoring Snapshots
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Production monitoring evidence gathered from client deployment on <strong className="text-on-surface font-semibold">2 &times; NVIDIA L4 GPUs (24 GB VRAM each)</strong>. Verified operational metrics from the Prometheus/Grafana monitoring dashboards are detailed below:
              </p>

              {/* Verified Metrics Cards from Grafana */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline">Production Deployment</span>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">130+</div>
                  <span className="text-xs font-mono text-primary font-semibold block">Cameras Deployed</span>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Actual latest production deployment scale across 2 &times; NVIDIA L4 GPUs.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-primary/30 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline">Triton Model Memory</span>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">~2.5 GB</div>
                  <span className="text-xs font-mono text-primary font-semibold block">Per GPU Allocation</span>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    ~5 GB combined across 2 GPUs (~6.5x reduction vs ~32.5 GB duplicated model VRAM).
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline">YOLO26 Inference Rate</span>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">192 req/s</div>
                  <span className="text-xs font-mono text-primary font-semibold block">Mean (30-min window)</span>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Active request rate recorded on the Triton Server Monitoring dashboard.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-outline">Average Stream FPS</span>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">7.47 FPS</div>
                  <span className="text-xs font-mono text-primary font-semibold block">Dashboard Mean</span>
                  <p className="text-xs text-secondary font-sans leading-relaxed pt-1">
                    Average stream FPS across active cameras in the Camera Time Series Monitoring snapshot.
                  </p>
                </div>
              </div>

              {/* Detailed Production Monitoring Snapshot Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Production Monitoring Dashboard Snapshot (30-Minute Window)
                    </h3>
                    <span className="text-xs font-mono text-primary font-semibold">
                      Live Telemetry Evidence
                    </span>
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed mt-2">
                    The values below represent a real 30-minute operational window captured directly from the production Grafana monitoring dashboards on the 2 &times; NVIDIA L4 server:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Camera Time Series Dashboard */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                        Camera Time Series Monitoring
                      </span>
                      <span className="text-[11px] font-mono text-outline">Stream Telemetry</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs text-secondary">
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>Online Cameras (Snapshot):</span>
                        <span className="text-on-surface font-bold">112</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>Camera Status Table Count:</span>
                        <span className="text-on-surface font-bold">113 rows</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>Average Stream FPS:</span>
                        <span className="text-primary font-bold">7.47 FPS</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Average Frame Latency:</span>
                        <span className="text-primary font-bold">141 ms</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-outline font-sans pt-1">
                      Note: 7.47 FPS is the dashboard average across streams in this window, not a fixed rate for every individual camera. Frame latency reflects end-to-end camera frame arrival and pipeline processing.
                    </p>
                  </div>

                  {/* Triton Server Monitoring Dashboard */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                        Triton Server Monitoring
                      </span>
                      <span className="text-[11px] font-mono text-outline">Inference Telemetry</span>
                    </div>

                    <div className="space-y-2 font-mono text-xs text-secondary">
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>YOLO26 Inference Request Rate:</span>
                        <span className="text-primary font-bold">192 req/s mean</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>YOLO26 Execution Latency:</span>
                        <span className="text-primary font-bold">107 ms mean</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>YOLO26 Queue Latency:</span>
                        <span className="text-on-surface font-bold">90.7 ms mean</span>
                      </div>
                      <div className="flex justify-between border-b border-outline-variant/20 pb-1.5">
                        <span>YOLO26 Pending Requests:</span>
                        <span className="text-on-surface">17.4 mean</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Host CPU / System RAM Usage:</span>
                        <span className="text-on-surface">80.1% CPU / 87.7% RAM</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-outline font-sans pt-1">
                      Note: Triton execution latency (107 ms) is model execution time; queue latency (90.7 ms) is server wait time. These are distinct metrics from the camera frame latency (141 ms).
                    </p>
                  </div>
                </div>

                {/* Technical Validation & Context Notes */}
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs font-mono text-secondary space-y-1.5">
                  <span className="text-on-surface font-semibold block">Production Memory &amp; Deployment Scope:</span>
                  <p>
                    &bull; <strong className="text-on-surface">Model VRAM Scope:</strong> Estimated duplicated model memory before centralization was ~32.5 GB. Triton allocation was ~2.5 GB per GPU (~5 GB combined across 2 &times; NVIDIA L4 GPUs), representing approximately a <strong className="text-primary font-semibold">6.5x reduction</strong> in model memory footprint across the full deployment.
                  </p>
                  <p>
                    &bull; <strong className="text-on-surface">Per-Camera Memory Variation:</strong> The 290 MB per-camera VRAM figure is an average planning estimate. Actual per-camera VRAM consumption varied between approximately <strong className="text-on-surface font-semibold">245 MB and 360 MB</strong> depending on enabled analytics (e.g., basic detection vs. multi-module pose and facial embeddings).
                  </p>
                  <p>
                    &bull; <strong className="text-on-surface">GPU Memory Safety Buffer:</strong> A configured safety buffer of <strong className="text-primary font-semibold font-mono">1,500 MB (1.5 GB)</strong> was preserved per GPU to prevent GPU memory exhaustion and maintain stable multi-camera processing across both NVIDIA L4 GPUs during workload fluctuations.
                  </p>
                  <p>
                    &bull; <strong className="text-on-surface">Snapshot Context:</strong> In the 30-minute Grafana snapshot, 112 cameras were actively online (113 rows in the status table) out of the 130+ total registered cameras in the deployment.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. MY CONTRIBUTIONS */}
            <section id="contributions" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  08 &bull; My Contributions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  My Contributions &amp; Project Ownership
                </h2>
              </div>

              {/* Exact Required Contribution Introduction */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-primary/30 space-y-4">
                <p className="text-base text-on-surface font-sans leading-relaxed">
                  I was the primary technical contributor to VisionFacts.ai, responsible for approximately <strong className="text-primary font-semibold">80–85% of the project&apos;s engineering and implementation work</strong>.
                </p>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  I independently handled most of the core development, including computer vision model integration, real-time video processing, GPU optimization, inference architecture, multi-camera management, and production deployment.
                </p>
                <p className="text-base text-secondary font-sans leading-relaxed">
                  I also collaborated with the team on project requirements, integration, testing, and delivery.
                </p>
              </div>

              {/* Detailed Functional Ownership Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    area: 'Computer Vision Model Integration',
                    points: 'Integrated YOLOv11 and YOLO26 for primary object detection; integrated human pose estimation models; integrated RetinaFace face detection and ArcFace embedding extraction for attendance; integrated Gemma 3 E4B VLM for scene reasoning.',
                  },
                  {
                    area: 'Real-Time Video Processing',
                    points: 'Developed RTSP video stream ingestion pipelines using Python and OpenCV; implemented stream decoding, frame validation, corrupt frame handling, and non-blocking exponential backoff reconnection logic for industrial stream reliability.',
                  },
                  {
                    area: 'GPU Inference Optimization',
                    points: 'Exported PyTorch models to ONNX and compiled TensorRT FP32 execution engines prioritizing accuracy; implemented CUDA Shared Memory communication and pinned host memory transfers to reduce data-transfer overhead with Triton.',
                  },
                  {
                    area: 'Multi-GPU Deployment & Scheduling',
                    points: 'Formulated the dynamic VRAM allocation strategy; implemented runtime GPU querying via PyTorch, safety buffer enforcement (1,500 MB), and camera distribution across detected GPUs based on an estimated ~290 MB per-camera planning budget.',
                  },
                  {
                    area: 'AI System Architecture',
                    points: 'Architected the decoupled multi-process architecture; designed the shared primary detection workflow to avoid redundant computation across multiple use cases; integrated NVIDIA Triton Inference Server for centralized model serving.',
                  },
                  {
                    area: 'Backend & Database Integration',
                    points: 'Designed structured AI incident schemas in MongoDB; configured Redis for inter-process messaging; configured ChromaDB for facial vector similarity search; developed the asynchronous post-event delivery daemon.',
                  },
                  {
                    area: 'Production Deployment & Packaging',
                    points: 'Built multi-container Docker Compose configurations; developed repeatable update procedures; packaged Python application modules into stripped native C-extension (.so) binaries using Nuitka to safeguard intellectual property.',
                  },
                  {
                    area: 'Performance Monitoring & Observability',
                    points: 'Instrumented application services with Prometheus metrics exporters; built real-time Grafana operational dashboards tracking GPU VRAM, host utilization, request rates, stream FPS, and execution/queue latency.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                        verified
                      </span>
                      <h3 className="text-sm font-bold text-on-surface font-sans">
                        {item.area}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {item.points}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Project Link */}
            <section className="pt-6 border-t border-outline-variant/30">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <Link
                  href="/#projects"
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all inline-flex items-center justify-center sm:justify-start gap-2 group self-stretch sm:self-center"
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

            {/* CTA Section */}
            <section>
              <div className="bg-surface-container border border-outline-variant/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center sm:text-left max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight font-sans">
                    Looking for a Senior AI or Computer Vision Engineer?
                  </h3>
                  <p className="text-sm font-sans text-secondary leading-relaxed">
                    Available for technical leadership roles, computer vision architecture discussions, and client consulting projects.
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
