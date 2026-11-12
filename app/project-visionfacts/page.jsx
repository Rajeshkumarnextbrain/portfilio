import Link from 'next/link';

export const metadata = {
  title: 'Visionfacts.AI Case Study | Rajesh Kumar S',
  description: 'Production video analytics platform for surveillance, manufacturing and retail, serving 150+ live camera streams.'
};

export default function VisionfactsPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-10">

        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-outline hover:text-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform" aria-hidden="true">
              arrow_back
            </span>
            <span>&larr; All projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-[11px] font-mono uppercase tracking-wider text-primary font-semibold w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
            <span>COMPUTER VISION PLATFORM</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-on-surface font-sans">
            Visionfacts.AI
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Production video analytics platform for surveillance, manufacturing and retail, serving 150+ live camera streams.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">badge</span>
              <span>Role: Lead Architect</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">domain</span>
              <span>Company: Nextbrain Technologies</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant">
              <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">calendar_today</span>
              <span>Aug 2023 – Present</span>
            </div>
          </div>
        </section>

        {/* Metric Badges */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-outline">Live camera streams</span>
              <div className="text-xl sm:text-3xl font-mono font-bold text-primary mt-2">150+</div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-outline">Less GPU memory</span>
              <div className="text-xl sm:text-3xl font-mono font-bold text-primary mt-2">~6x</div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-outline">Production AI use cases</span>
              <div className="text-xl sm:text-3xl font-mono font-bold text-primary mt-2">25+</div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-outline">Sustained per stream</span>
              <div className="text-xl sm:text-3xl font-mono font-bold text-primary mt-2">5-10 FPS</div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section>
          <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-5 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" aria-hidden="true"></div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2 sm:mb-3">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-on-surface leading-relaxed">
              The company needed a vision product with no existing platform or reference architecture to build on. I designed the complete software architecture covering camera orchestration, GPU model serving and event-driven processing.
            </p>
          </div>
        </section>

        {/* End-to-End Architecture Flow */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
              End-to-End Architecture Flow
            </h2>
            <span className="text-[11px] font-mono text-outline">5-Stage Distributed Pipeline</span>
          </div>

          <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Step 1 */}
              <div className="flex-1 bg-surface-container-high border border-outline-variant/60 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-bold">01</span>
                <div className="text-sm font-semibold text-on-surface mt-1">Camera API config</div>
                <div className="text-xs font-mono text-outline mt-1 leading-snug">Read at startup</div>
              </div>

              <div className="flex items-center justify-center text-outline self-center py-0.5 md:py-0">
                <span className="material-symbols-outlined text-base md:text-lg md:rotate-0 rotate-90" aria-hidden="true">
                  arrow_forward
                </span>
              </div>

              {/* Step 2 */}
              <div className="flex-1 bg-surface-container-high border border-outline-variant/60 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-bold">02</span>
                <div className="text-sm font-semibold text-on-surface mt-1">One process per camera</div>
                <div className="text-xs font-mono text-outline mt-1 leading-snug">Isolated, runs all use cases for that camera</div>
              </div>

              <div className="flex items-center justify-center text-outline self-center py-0.5 md:py-0">
                <span className="material-symbols-outlined text-base md:text-lg md:rotate-0 rotate-90" aria-hidden="true">
                  arrow_forward
                </span>
              </div>

              {/* Step 3 */}
              <div className="flex-1 bg-surface-container-high border border-primary/40 bg-primary/5 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-bold">03</span>
                <div className="text-sm font-semibold text-primary mt-1">Triton Inference Server</div>
                <div className="text-xs font-mono text-outline mt-1 leading-snug">Models loaded once, frames sent over gRPC</div>
              </div>

              <div className="flex items-center justify-center text-outline self-center py-0.5 md:py-0">
                <span className="material-symbols-outlined text-base md:text-lg md:rotate-0 rotate-90" aria-hidden="true">
                  arrow_forward
                </span>
              </div>

              {/* Step 4 */}
              <div className="flex-1 bg-surface-container-high border border-outline-variant/60 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-bold">04</span>
                <div className="text-sm font-semibold text-on-surface mt-1">Detection + Pose + Gemma VLM</div>
                <div className="text-xs font-mono text-outline mt-1 leading-snug">TensorRT engines in NGC containers</div>
              </div>

              <div className="flex items-center justify-center text-outline self-center py-0.5 md:py-0">
                <span className="material-symbols-outlined text-base md:text-lg md:rotate-0 rotate-90" aria-hidden="true">
                  arrow_forward
                </span>
              </div>

              {/* Step 5 */}
              <div className="flex-1 bg-surface-container-high border border-outline-variant/60 rounded-lg p-3.5 sm:p-4 flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-bold">05</span>
                <div className="text-sm font-semibold text-on-surface mt-1">Event pipeline</div>
                <div className="text-xs font-mono text-outline mt-1 leading-snug">Alerts, analytics, dashboards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Engineering Decisions */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
            Key engineering decisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">hub</span>
                  <h3 className="text-base font-semibold text-on-surface">Centralized model serving</h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Cut model GPU memory from ~2.5 GB per camera to ~2.5 GB total by serving YOLOv11, YOLO26, RetinaFace and ArcFace from Triton. Each camera process sends preprocessed frames over gRPC, so model VRAM stays constant instead of growing with camera count.
                </p>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">trending_up</span>
                  <h3 className="text-base font-semibold text-on-surface">Business impact</h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  Projected VRAM for a 50-camera deployment dropped from ~125 GB to ~20 GB (roughly 6x), making single-GPU deployments commercially viable.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-outline-variant/30">
                <div>
                  <div className="flex justify-between text-xs font-mono text-outline mb-1">
                    <span>Per-camera loading ~125 GB</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                    <div className="bg-outline h-2.5 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-primary font-medium mb-1">
                    <span>Centralized Triton ~20 GB</span>
                    <span>16% (6x Less)</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "16%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">settings_input_composite</span>
                  <h3 className="text-base font-semibold text-on-surface">Camera orchestration</h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Dynamic multiprocessing framework that reads camera configuration from an API at startup and spawns one isolated process per camera. Gives per-camera fault isolation and horizontal scaling without code changes.
                </p>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">speed</span>
                  <h3 className="text-base font-semibold text-on-surface">Inference optimization</h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  All production models run as TensorRT engines inside NVIDIA NGC containers, sustaining 5-10 FPS per stream across 150+ concurrent streams. GPU kernels are profiled with NVIDIA Nsight Compute to keep improving latency and throughput.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Generative Multimodal AI */}
        <section>
          <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">psychology</span>
              <h2 className="text-base font-semibold text-on-surface">Generative multimodal AI</h2>
            </div>
            <p className="text-xs sm:text-base text-on-surface-variant leading-relaxed">
              Integrated a Gemma Vision-Language Model to detect physical fights and aggressive behavior, contextual and temporal events that bounding-box detectors such as YOLO cannot classify. Combined detection and pose output with VLM scene reasoning to unlock use cases classical computer vision cannot serve.
            </p>
          </div>
        </section>

        {/* Use Cases Delivered */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
            Use cases delivered
          </h2>

          <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">PPE detection</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">Attendance monitoring</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">Crowd analytics</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">Vehicle detection</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">License Plate Recognition</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">Fire and smoke detection</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/50 text-xs font-mono text-on-surface">Intrusion detection</span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-outline pt-2 border-t border-outline-variant/30">
              Event-driven pipelines for real-time alerting, analytics aggregation and dashboard reporting.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
            Tech stack
          </h2>

          <div className="bg-surface-container border border-outline-variant/40 rounded-xl p-4 sm:p-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">Python</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">Triton Inference Server</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">TensorRT</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">gRPC</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">YOLOv11</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">YOLO26</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">RetinaFace</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">ArcFace</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">ByteTrack</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">Gemma VLM</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">OpenCV</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">FastAPI</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">MongoDB</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">Docker</span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-medium">NVIDIA Nsight Compute</span>
            </div>
          </div>
        </section>

        {/* Next Project Nav */}
        <section className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container border border-outline-variant/60 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all group"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform" aria-hidden="true">arrow_back</span>
            <span>All Projects</span>
          </Link>
          <Link
            href="/project-analytics-agent"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container border border-outline-variant/60 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all group"
          >
            <span>Next: Visionfacts Analytics Agent</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
          </Link>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-surface-container-low border border-outline-variant/50 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-2xl font-bold text-on-surface tracking-tight font-sans">
                Want to discuss a similar system?
              </h2>
              <p className="text-xs sm:text-sm font-mono text-outline">
                Open for technical architecture discussions and senior/staff roles.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
            >
              <span>Get in touch</span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
