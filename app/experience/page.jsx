import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  EXPERIENCE_ROLES,
  EXPERIENCE_HERO_METRICS,
  LEADERSHIP_STAGES,
  NEXTBRAIN_ROLE_METRICS,
  SS_AUTO_ROLE_METRICS,
} from "@/content/facts";

import { ExperienceScrubber } from "@/components/experience/ExperienceScrubber";
import { SmpteTicker } from "@/components/experience/SmpteTicker";
import { ArchivalReelPlayer } from "@/components/experience/ArchivalReelPlayer";
import { CameraGridDots } from "@/components/experience/CameraGridDots";
import { BlueprintFlow } from "@/components/experience/BlueprintFlow";
import DrdoRadarPanel from "@/components/experience/DrdoRadarPanel";
import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Icon from "@/components/Icon";

export default function ExperiencePage() {
  const nextbrainRole = EXPERIENCE_ROLES[0];
  const ssAutoRole = EXPERIENCE_ROLES[1];
  const vedantRole = EXPERIENCE_ROLES[2];

  return (
    <main className="w-full pt-16 pb-12 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-0">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            {/* Chapter Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary shrink-0"></span>
                <span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-widest font-semibold">
                  EXPERIENCE // PLAYBACK · ARCHIVAL REEL 04
                </span>
              </div>
              <SmpteTicker />
            </div>

            {/* Top Grid: 2-Column Hero on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
              {/* Left Column (7 cols): Mega Headline & Subtitle */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <Reveal>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-serif text-[34px] xs:text-[46px] sm:text-[68px] md:text-[88px] lg:text-[96px] xl:text-[110px] leading-[0.92] text-on-surface tracking-tight uppercase select-none font-bold">
                      FOUR YEARS.<br />
                      ONE <span className="relative inline-block bg-signal-orange-tint px-3 py-1 text-secondary -rotate-1">PIPELINE</span><br />
                      AT A TIME.
                    </h1>
                    <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
                      A chronology of architecting real-time RTSP video inference microservices, deploying autonomous LangGraph &amp; FastMCP multi-agent systems, and optimizing high-throughput AI on edge and cloud GPUs.
                    </p>
                  </div>
                </Reveal>

                {/* Sub-strip: Quick Focus Indicators */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="font-label-timecode text-xs px-3 py-1 bg-paper-sunken border border-line text-ink-muted uppercase">
                    STAFF / LEAD AI SCOPE
                  </span>
                  <span className="font-label-timecode text-xs px-3 py-1 bg-paper-sunken border border-line text-secondary uppercase font-semibold">
                    50% COMPUTER VISION · 50% GENAI &amp; AGENTS
                  </span>
                </div>
              </div>

              {/* Right Column (5 cols): 35mm SMPTE Archival Reel Mechanism */}
              <Reveal className="lg:col-span-5 w-full">
                <ArchivalReelPlayer />
              </Reveal>
            </div>

            {/* Interactive Filmstrip Scrubber Bar */}
            <ExperienceScrubber />

            {/* Ruled Metric Register with CountUp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-line py-space-lg">
              {EXPERIENCE_HERO_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col p-4 border-b sm:border-b-0 ${
                    idx < 3 ? 'sm:border-r' : ''
                  } border-line`}
                >
                  <span className="font-serif text-[56px] sm:text-[68px] lg:text-[76px] font-bold text-on-surface leading-none">
                    {metric.value.startsWith('<') ? (
                      metric.value
                    ) : (
                      <CountUp value={metric.value} />
                    )}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold mt-2">
                    {metric.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-ink-muted mt-1">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: ROLE 1 · TEAM LEAD (Nextbrain Technologies) */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-1">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    ROLE 01 · {nextbrainRole.period}
                  </span>
                  <span className="bg-paper-raised px-2 py-0.5 font-label-sm text-[10px] text-status-success border border-line font-medium">
                    CURRENT ROLE
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">
                  ROLE ON FLAGSHIP: {nextbrainRole.flagshipRole}
                </span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                {nextbrainRole.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-ink-muted">
                <span className="font-semibold text-on-surface">{nextbrainRole.company}</span>
                <span>·</span>
                <span>{nextbrainRole.location}</span>
                <span>·</span>
                <span className="text-secondary font-medium">Domain: {nextbrainRole.domain}</span>
              </div>

              {/* Plain-English 1-liner with Fade */}
              <Reveal>
                <div className="p-4 bg-paper-raised border border-line mt-2">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                    {nextbrainRole.plainSummary}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Ruled Numbers Strip (4 Metrics: 2 CV, 2 GenAI) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-line py-space-lg gap-6">
              {NEXTBRAIN_ROLE_METRICS.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`flex flex-col ${idx > 0 ? (idx === 2 ? 'lg:border-l lg:border-line lg:pl-6 sm:border-l sm:border-line sm:pl-6' : 'sm:border-l sm:border-line sm:pl-6') : ''}`}
                >
                  <span className={`font-metric-numeral text-headline-lg font-bold ${metric.highlight ? 'text-secondary' : 'text-on-surface'}`}>
                    {metric.value.startsWith('<') ? metric.value : <CountUp value={metric.value} />}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">
                    {metric.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-ink-muted">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Plain-English Responsibility Rows Stagger */}
            <Stagger className="flex flex-col border-t border-line">
              {nextbrainRole.responsibilities.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4">
                    <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                      {item.area}
                    </div>
                    <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* FOR ENGINEERS DIVIDER & INSTRUMENT PANEL */}
            <div className="flex flex-col gap-6 pt-space-md">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1">
                  <DrawLine className="h-px w-full bg-line" />
                </div>
              </div>

              {/* Dual L4 GPU Cluster Snapshot */}
              <div className="relative bg-paper-raised p-6 sm:p-8 border border-line">
                <span className="absolute -top-2 -left-2 text-primary font-headline-lg select-none leading-none">⌜</span>
                <span className="absolute -top-2 -right-2 text-primary font-headline-lg select-none leading-none">⌝</span>
                <span className="absolute -bottom-2 -left-2 text-primary font-headline-lg select-none leading-none">⌞</span>
                <span className="absolute -bottom-2 -right-2 text-primary font-headline-lg select-none leading-none">⌟</span>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">CLUSTER SNAPSHOT</span>
                      <span className="font-headline-md text-body-md font-semibold text-on-surface">
                        {VERIFIED_NUMBERS.hardware}
                      </span>
                    </div>
                    <span className="font-label-timecode text-label-timecode text-ink-muted">
                      SNAPSHOT: {VERIFIED_NUMBERS.camerasOnlineSnapshot}
                    </span>
                  </div>

                  {/* Instrument Readouts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Camera Dot Grid Sequence */}
                    <div className="flex flex-col justify-between">
                      <CameraGridDots />
                      <div className="mt-2 text-[11px] font-mono text-ink-muted">
                        Hardware NVDEC 1080p stream decoding
                      </div>
                    </div>

                    {/* Cluster Capacity Gauge */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <div className="flex justify-between items-center text-xs font-mono text-ink-muted uppercase">
                        <span>CLUSTER SUSTAINED LOAD</span>
                        <span className="text-secondary font-bold">
                          <CountUp value="88%" />
                        </span>
                      </div>
                      <div className="w-full h-4 bg-paper-sunken border border-line/40 overflow-hidden">
                        <GrowBar targetPercent={88} className="h-full bg-secondary" delay={0.2} />
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        80.1% CPU / 87.7% RAM · Zero OOM crashes
                      </span>
                    </div>

                    {/* Latency & Savings */}
                    <div className="flex flex-col gap-2 p-3 bg-surface border border-line">
                      <span className="font-label-sm text-xs text-ink-muted uppercase">Throughput &amp; Frame Latency</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                          <CountUp value={VERIFIED_NUMBERS.latencyEndToEnd} />
                        </span>
                        <span className="text-xs text-ink-muted">mean frame latency</span>
                      </div>
                      <span className="font-label-timecode text-[11px] text-ink-muted">
                        {VERIFIED_NUMBERS.throughputPrimaryMean} · Saved {VERIFIED_NUMBERS.costSavingsPerCluster}
                      </span>
                    </div>
                  </div>

                  {/* Telemetry specs */}
                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-line font-label-sm text-label-sm text-ink-muted gap-4">
                    <div>PRECISION: <span className="text-on-surface font-semibold">{VERIFIED_NUMBERS.precisionDetection}</span></div>
                    <div>TRANSPORT: <span className="text-on-surface font-semibold">CUDA IPC ZERO-COPY SHARED MEMORY</span></div>
                    <div>SAVINGS: <span className="text-secondary font-semibold">{VERIFIED_NUMBERS.costSavingsPerCluster}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Chips with Highlights */}
            <div className="flex flex-wrap gap-2 pt-2">
              {nextbrainRole.techStack.map((tech) => {
                const isHighlight = [
                  "LangGraph",
                  "FastMCP / MCP",
                  "Triton Inference Server",
                  "TensorRT",
                  "CUDA IPC",
                  "YOLOv11 / YOLO26",
                  "DINOv3",
                  "Gemma 3 VLM",
                  "Qdrant Vector DB",
                ].includes(tech);
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1 font-label-sm text-label-sm border transition-colors duration-150 cursor-default ${
                      isHighlight
                        ? "bg-paper-raised border-secondary/40 text-on-surface font-semibold shadow-xs"
                        : "bg-paper-sunken border-line text-ink-muted"
                    }`}
                  >
                    {isHighlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block mr-1.5 -translate-y-0.5"></span>
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: ROLE 2 · JUNIOR VISION ENGINEER (SS Automation) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-2">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-on-surface"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    ROLE 02 · {ssAutoRole.period}
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">INDUSTRIAL MACHINE VISION</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                {ssAutoRole.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-sm text-label-sm text-ink-muted">
                <span className="font-semibold text-on-surface">{ssAutoRole.company}</span>
                <span>·</span>
                <span>{ssAutoRole.location}</span>
                <span>·</span>
                <span className="text-secondary font-medium">Domain: {ssAutoRole.domain}</span>
              </div>

              {/* Plain-English summary */}
              <Reveal>
                <div className="p-4 bg-paper-sunken border border-line mt-2">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    <strong className="text-secondary uppercase text-xs font-semibold mr-2 font-mono">In plain English:</strong>
                    {ssAutoRole.plainSummary}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Ruled Numbers Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-lg gap-6">
              {SS_AUTO_ROLE_METRICS.map((metric, idx) => (
                <div key={metric.label} className={`flex flex-col ${idx > 0 ? 'md:border-l md:border-line md:pl-6' : ''}`}>
                  <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">
                    {metric.value.includes('%') ? <CountUp value={metric.value} /> : metric.value}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">
                    {metric.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-ink-muted">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Plain-English Responsibility Rows */}
            <Stagger className="flex flex-col border-t border-line">
              {ssAutoRole.responsibilities.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="py-space-lg border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 hover:bg-paper-raised transition-colors p-4">
                    <div className="md:col-span-4 font-headline-md text-body-md md:text-headline-md text-on-surface uppercase font-semibold">
                      {item.area}
                    </div>
                    <div className="md:col-span-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Schematic Diagram: Edge Inspection Line */}
            <div className="flex flex-col gap-3 my-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-label-sm text-xs text-ink-muted uppercase">
                <span>INSPECTION TOPOLOGY // HIGH-SPEED CONVEYOR LINE</span>
                <span className="font-label-timecode text-xs text-secondary font-medium">OPTO-TRIGGER: 24V PLC PULSE</span>
              </div>
              <div className="w-full overflow-x-auto pb-1">
                <div className="relative min-w-[520px] h-64 bg-paper-raised border border-line flex items-center justify-between px-8 overflow-hidden">
                  {/* Background Grid Lines */}
                  <div className="absolute inset-0 opacity-10 flex justify-between pointer-events-none">
                    <div className="w-px h-full bg-primary"></div>
                    <div className="w-px h-full bg-primary"></div>
                    <div className="w-px h-full bg-primary"></div>
                    <div className="w-px h-full bg-primary"></div>
                    <div className="w-px h-full bg-primary"></div>
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
                      JETSON XAVIER NX<br />
                      <span className="text-secondary font-label-timecode">INFER: 18.2 ms</span>
                    </div>
                    <div className="w-0.5 h-6 bg-primary"></div>
                    <div className="px-3 py-1 bg-paper-raised border border-primary font-label-sm text-[10px] uppercase">
                      SIEMENS S7-1200 PLC
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between font-label-sm text-label-sm text-ink-muted">
                <span>TRIGGER TO REJECT: <strong className="text-on-surface">PNEUMATIC LINE SIGNAL</strong></span>
                <span>DATA INTERFACE: <strong className="text-on-surface">PLC CONTROLLER SIGNAL</strong></span>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ssAutoRole.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-paper-raised hover:border-secondary hover:text-secondary px-3 py-1 font-label-sm text-label-sm border border-line text-on-surface transition-colors duration-150 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: ROLE 3 · TECHNICAL SUPPORT ENGINEER (Vedant / DRDO) */}
        {/* ================================================================= */}
        <section className="w-full bg-[#14130F] text-[#F5F2EC] py-10 md:py-16 lg:py-20 border-b border-surface-container-highest/20" id="chapter-3">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-6">
            {/* DRDO Radar Panel */}
            <DrdoRadarPanel />

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {vedantRole.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface/10 px-3 py-1 font-mono text-[13px] border border-surface-container-highest/30 text-[#F5F2EC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: HOW I LEAD A TEAM */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-4">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    LEADERSHIP PRACTICE
                  </span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-muted">ENGINEERING EXCELLENCE</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                How I lead a team.
              </h2>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
                Protocols, review standards, and profiling cadences I enforce across AI engineering teams to guarantee production reliability.
              </p>
            </div>

            {/* Plain-English Leadership Rows with Hover Fill */}
            <div className="flex flex-col border-t border-line">
              {LEADERSHIP_STAGES.map((stage, idx) => (
                <div
                  key={idx}
                  className={`py-space-xl px-6 ${
                    stage.isFirst ? 'bg-paper-raised' : 'bg-paper-sunken'
                  } hover:bg-primary hover:text-on-primary focus-visible:bg-primary focus-visible:text-on-primary text-on-surface border-b border-line flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary`}
                  tabIndex={0}
                >
                  <div className="flex flex-col gap-2 max-w-3xl">
                    <div className="flex items-center gap-2 font-label-sm text-xs text-secondary group-hover:text-secondary-fixed group-focus-visible:text-secondary-fixed font-semibold uppercase">
                      <span>{stage.stage}</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-on-primary group-focus-visible:text-on-primary uppercase transition-colors">
                      {stage.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-inverse-primary group-focus-visible:text-inverse-primary leading-relaxed transition-colors">
                      {stage.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span
                      className={`${
                        stage.isFirst
                          ? 'bg-secondary text-on-secondary'
                          : 'bg-paper-raised border border-line text-on-surface'
                      } group-hover:bg-primary-container group-hover:text-white px-3 py-1 font-label-sm text-xs uppercase font-semibold tracking-wider transition-colors`}
                    >
                      {stage.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 5: BLUEPRINT (Under "For engineers" divider) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 border-b border-line" id="chapter-5">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            {/* Header */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-4">
                <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                  For engineers: technical detail
                </span>
                <div className="flex-1">
                  <DrawLine className="h-px w-full bg-line" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-semibold">
                    SYSTEM BLUEPRINT
                  </span>
                </div>
                <span className="font-label-timecode text-secondary font-medium">HIGH-THROUGHPUT PIPELINE</span>
              </div>

              <h2 className="font-display text-display text-on-surface uppercase tracking-tight">
                A frame&apos;s journey.
              </h2>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-2xl">
                Multi-stream RTSP and VLM pipeline engineered for zero CPU PCIe bottlenecks and deterministic execution.
              </p>
            </div>

            {/* 4 Architecture Flow Nodes with FlowToken */}
            <BlueprintFlow />

            {/* Telemetry Notice */}
            <div className="bg-paper-sunken p-4 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-label-sm text-label-sm">
              <span className="text-on-surface font-semibold flex items-center gap-2">
                <Icon name="verified" className="text-secondary text-[16px]" />
                VERIFIED SNAPSHOT: {VERIFIED_NUMBERS.latencyEndToEnd} mean frame latency · {VERIFIED_NUMBERS.throughputPrimaryMean}
              </span>
              <span className="font-label-timecode text-label-timecode text-ink-muted">
                {VERIFIED_NUMBERS.hardware}
              </span>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: CALL TO ACTION */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20" id="chapter-6">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-surface-container-highest/20 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">GET IN TOUCH</span>
                </div>
                <span className="font-label-timecode text-label-timecode text-ink-faint">
                  NOTICE: {IDENTITY.noticePeriod} · {IDENTITY.replyTime}
                </span>
              </div>

              <h2 className="font-mega-display text-[34px] xs:text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px] leading-[0.95] text-surface tracking-tight uppercase select-none">
                Need someone to lead the next pipeline?
              </h2>

              <p className="font-body-lg text-body-lg text-ink-faint max-w-3xl leading-relaxed">
                Open to {IDENTITY.targetRoles}. {IDENTITY.location} ({IDENTITY.locationDetails}). Inquiries answered {IDENTITY.replyTime}.
              </p>
            </div>

            {/* Action Buttons with Stagger */}
            <div className="flex flex-wrap items-center gap-4 pt-space-md">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider rounded-full hover:bg-signal-orange-hover transition-colors font-semibold active:scale-[0.97] group"
              >
                <Icon name="mail" className="text-[18px]" />
                <span>Email Rajesh</span>
                <Icon name="arrow_forward" className="text-[16px] transition-transform duration-150 group-hover:translate-x-1" />
              </a>
              <a
                href={CONTACT_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors font-medium active:scale-[0.97] group"
              >
                <Icon name="download" className="text-[16px] transition-transform duration-150 group-hover:translate-y-[2px]" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors active:scale-[0.97] group"
              >
                <span>LinkedIn</span>
                <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-container-highest/40 text-surface hover:bg-surface/10 font-label-sm text-label-sm uppercase tracking-wider rounded-full transition-colors active:scale-[0.97] group"
              >
                <span>GitHub</span>
                <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </a>
            </div>

            {/* Bottom Strip */}
            <div className="pt-space-lg border-t border-surface-container-highest/20 flex flex-wrap justify-between items-center font-label-timecode text-label-timecode text-ink-faint gap-4">
              <div className="flex items-center gap-3">
                <span>{IDENTITY.name}</span>
                <span>·</span>
                <span>{IDENTITY.location}</span>
                <span>·</span>
                <span>{IDENTITY.timezone}</span>
              </div>
              <div>
                © 2026 {IDENTITY.name}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
