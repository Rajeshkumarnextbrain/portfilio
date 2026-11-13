'use client';

import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  PROJECTS,
} from "@/content/facts";

export default function AnalyticsAgentPage() {
  const project = PROJECTS[1];

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO (Paper Surface) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="chapter-0">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="font-label-sm text-label-sm text-ink-muted hover:text-secondary uppercase tracking-widest transition-colors">
                  HOME
                </Link>
                <span className="text-line">/</span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  CASE STUDY: ANALYTICS AGENT
                </span>
              </div>
              <span className="font-label-timecode text-label-timecode text-secondary font-medium">
                MULTI-AGENT INTELLIGENCE
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-space-md">
              <h1 className="font-mega-display text-[36px] xs:text-[48px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                Ask the<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  cameras
                </span><br />
                anything.
              </h1>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-3xl leading-relaxed">
                A multi-agent CCTV intelligence platform that lets operations and safety teams question surveillance and security records in plain English—and automatically delivers shift safety digests before they ask.
              </p>
            </div>

            {/* TOP "IN PLAIN ENGLISH" BLOCK */}
            <div className="p-6 bg-paper-sunken border border-line flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold font-mono">
                  IN PLAIN ENGLISH
                </span>
              </div>

              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface leading-relaxed">
                Instead of waiting 24 to 48 hours for a database administrator to write custom SQL queries, warehouse directors and safety managers can ask natural-language questions like &ldquo;Which forklifts entered Gate 2 during shift change without a driver badge?&rdquo; The AI coordinates multiple specialized agents to check 5 data domains, verifies camera crop evidence, and replies with structured tables and images in under 3 seconds.
              </p>

              {/* 3-Number Result Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                <div className="flex flex-col">
                  <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">{VERIFIED_NUMBERS.analyticsPipelines}</span>
                  <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Execution Pipelines</span>
                  <span className="text-xs text-ink-muted mt-1">Interactive &ldquo;Ask&rdquo; + Autonomous &ldquo;Watch&rdquo;</span>
                </div>
                <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                  <span className="font-metric-numeral text-headline-lg font-bold text-secondary">{VERIFIED_NUMBERS.analyticsMcpServers}</span>
                  <span className="font-label-sm text-xs text-secondary font-semibold uppercase">MCP Servers</span>
                  <span className="text-xs text-ink-muted mt-1">Model Context Protocol for database and CCTV tools</span>
                </div>
                <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                  <span className="font-metric-numeral text-headline-lg font-bold text-on-surface">5</span>
                  <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Data Domains Guarded</span>
                  <span className="text-xs text-ink-muted mt-1">{VERIFIED_NUMBERS.analyticsWriteAccess} (SELECT-only read operations)</span>
                </div>
              </div>

              {/* Metadata Block */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-label-timecode">
                <div>
                  <span className="text-ink-muted block uppercase">MY ROLE:</span>
                  <span className="text-on-surface font-semibold">{project.role}</span>
                </div>
                <div>
                  <span className="text-ink-muted block uppercase">COMPANY &amp; DATES:</span>
                  <span className="text-on-surface font-semibold">{project.companyDates}</span>
                </div>
                <div>
                  <span className="text-ink-muted block uppercase">TECHNOLOGIES:</span>
                  <span className="text-on-surface font-semibold">{project.technologies}</span>
                </div>
              </div>

              {/* Action Button & Jump Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Read the technical deep dive</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>

                <div className="flex items-center gap-2 sm:gap-3 text-xs font-label-sm uppercase font-semibold text-ink-muted flex-wrap">
                  <a href="#overview" className="hover:text-secondary transition-colors">Overview</a>
                  <span>·</span>
                  <a href="#how-it-works" className="hover:text-secondary transition-colors">How it works</a>
                  <span>·</span>
                  <a href="#challenges" className="hover:text-secondary transition-colors">Challenges</a>
                  <span>·</span>
                  <a href="#results" className="hover:text-secondary transition-colors">Results</a>
                </div>
              </div>
            </div>

            {/* Interactive Chat Trace Preview */}
            <div className="relative bg-paper-raised p-6 border border-line flex flex-col gap-4">
              <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
              <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>

              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                  AD-HOC TELEMETRY REASONING TRACE
                </span>
                <span className="font-label-timecode text-xs text-ink-muted">
                  PROTOCOL: SSE · MCP (FASTJSON-RPC)
                </span>
              </div>

              <div className="p-3 bg-surface border border-line">
                <span className="text-[10px] font-label-timecode text-ink-muted uppercase block mb-1">USER INQUIRY:</span>
                <p className="font-body-md text-body-md text-on-surface font-medium">
                  &ldquo;Correlate vehicles entering Gate 2 between 08:00 and 09:00 with attendance records and perimeter alerts.&rdquo;
                </p>
              </div>

              <div className="flex flex-col gap-2 text-xs font-label-timecode text-ink-muted">
                <div className="flex items-center gap-2 text-secondary font-bold">
                  <span>→ STEP 1:</span>
                  <span>MCP tool invocation: describe_table across 5 data domains</span>
                </div>
                <div className="flex items-center gap-2 text-status-success font-semibold pl-4">
                  <span>✓ STEP 2:</span>
                  <span>SQL guardrail AST validation: 0 destructive mutations (SELECT-only enforced)</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface pl-4">
                  <span>→ STEP 3:</span>
                  <span>Executed analytical query in 14.8 ms. Correlated 1 anomaly with CCTV evidence crop.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: THE PROBLEM & THE SOLUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="overview">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                01 / OVERVIEW
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                From database tickets to autonomous operational dialogue.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-line py-8">
              <div className="flex flex-col gap-3 md:border-r md:border-line md:pr-8">
                <span className="font-label-sm text-xs uppercase tracking-wider text-ink-muted font-bold">
                  THE PROBLEM
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  VisionFacts.ai continuously tracks thousands of physical events across {VERIFIED_NUMBERS.camerasCount} cameras. However, warehouse managers and safety supervisors had no direct SQL skills to query this data. Analyzing cross-domain incidents (e.g. linking a vehicle entry with missing worker badges) required raising IT tickets with 24-to-48 hour response delays.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:pl-4">
                <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
                  THE SOLUTION
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Built a dual-pipeline architecture using LangGraph (a framework for coordinating multiple AI agents in loops and branches) and MCP (a standard way for AI to use tools). The &ldquo;Ask&rdquo; pipeline allows interactive natural language questions over Server-Sent Events, while the &ldquo;Watch&rdquo; pipeline runs autonomous background audits and emails shift digests before supervisors arrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: FOR ENGINEERS: TECHNICAL DETAIL */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="how-it-works">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            {/* Engineer Divider */}
            <div className="flex items-center gap-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                For engineers: technical detail
              </span>
              <div className="flex-1 h-px bg-line"></div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                02 / HOW IT WORKS
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Two pipelines. Specialized agents.
              </h2>
            </div>

            {/* Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pipeline 1 */}
              <div className="p-6 bg-paper-raised border border-line flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">PIPELINE 01 · INTERACTIVE</span>
                    <span className="font-label-timecode text-xs text-ink-muted">STREAMING SSE</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    The &ldquo;Ask&rdquo; Pipeline
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Users ask questions in natural language. The coordinator agent parses intent and queries the database via Model Context Protocol (MCP—a standard way for AI to use tools). An AST validation layer ensures all generated SQL is strictly SELECT-only across 5 data domains before executing. Formatter subagents then compile streaming tables, charts, and optical image proofs.
                  </p>
                </div>
                <div className="pt-3 border-t border-line text-xs font-mono text-ink-muted">
                  Latency: Sub-3-second end-to-end response
                </div>
              </div>

              {/* Pipeline 2 */}
              <div className="p-6 bg-paper-raised border border-line flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">PIPELINE 02 · AUTONOMOUS</span>
                    <span className="font-label-timecode text-xs text-ink-muted">ASYNCIO BACKGROUND</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                    The &ldquo;Watch&rdquo; Pipeline
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Runs on scheduled cron intervals in non-blocking FastAPI lifespan workers. Aggregates shift safety logs, detects abnormal trends, queries Gemma 3 E4B Vision-Language Model (a VLM—an AI model that understands images and text) for narrative explanation, and dispatches responsive HTML email digests to plant leadership.
                  </p>
                </div>
                <div className="pt-3 border-t border-line text-xs font-mono text-ink-muted">
                  Reliability: 100% on-time automated shift digests
                </div>
              </div>
            </div>

            {/* 5 Data Domains Grid */}
            <div className="flex flex-col gap-4 pt-space-md">
              <span className="font-label-sm text-xs text-ink-muted uppercase font-bold">
                5 CORE DATA DOMAINS (STRICTLY SELECT-ONLY ACCESS)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1">
                  <span className="font-label-timecode text-xs text-secondary font-bold">01. CAMERAS</span>
                  <span className="text-xs text-on-surface font-semibold">Camera Inventory</span>
                  <span className="text-[11px] text-ink-muted">IP, RTSP URLs, location, zone tags</span>
                </div>
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1">
                  <span className="font-label-timecode text-xs text-secondary font-bold">02. DETECTIONS</span>
                  <span className="text-xs text-on-surface font-semibold">Inference Records</span>
                  <span className="text-[11px] text-ink-muted">Objects, bounding boxes, timestamps</span>
                </div>
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1">
                  <span className="font-label-timecode text-xs text-secondary font-bold">03. INCIDENTS</span>
                  <span className="text-xs text-on-surface font-semibold">Safety Events</span>
                  <span className="text-[11px] text-ink-muted">PPE violations, falls, intrusions</span>
                </div>
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1">
                  <span className="font-label-timecode text-xs text-secondary font-bold">04. VEHICLES</span>
                  <span className="text-xs text-on-surface font-semibold">Logistics Logs</span>
                  <span className="text-[11px] text-ink-muted">Gate crossing, forklift IDs, docks</span>
                </div>
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1">
                  <span className="font-label-timecode text-xs text-secondary font-bold">05. ATTENDANCE</span>
                  <span className="text-xs text-on-surface font-semibold">Workforce Activity</span>
                  <span className="text-[11px] text-ink-muted">Badge timestamps, shifts, departments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: CHALLENGES & FIXES */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="challenges">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                03 / CHALLENGES AND FIXES
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Architectural hurdles & solutions.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">
                  1. SQL Injection &amp; Accidental Write Risks
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Allowing an LLM to generate raw SQL on production databases risks table locks, drops, or updates.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Implemented an AST-level SQL validation barrier that strictly allows SELECT queries across 5 data domains, rejecting all mutations.
                </div>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">
                  2. Air-Gapped Optical Image Verification
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Surveillance camera snapshots were hosted on isolated local LANs inaccessible to web browser frontends.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Built an authenticated reverse image proxy with IP allowlisting in FastAPI, allowing safe thumbnail previews directly in chat.
                </div>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">
                  3. Decoupling Execution from Presentation
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  A single agent handling both SQL extraction and markdown formatting mixed raw database errors into user-facing output.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Split into specialized agents: an analyst agent strictly handles data retrieval, while formatting subagents compile clean Markdown and responsive email HTML.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                04 / RESULTS
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-surface uppercase tracking-tight">
                Production value delivered.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">TICKET TURNAROUND</span>
                <span className="font-headline-lg text-headline-lg font-bold text-surface mt-2">&lt; 3 sec</span>
                <span className="text-xs text-ink-faint mt-1">Down from 24–48 hour DBA queue</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">DATABASE MUTATIONS</span>
                <span className="font-metric-numeral text-headline-lg font-bold text-status-success mt-2">0</span>
                <span className="text-xs text-ink-faint mt-1">100% SELECT-only compliance</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">SHIFT AUDITS</span>
                <span className="font-headline-lg text-headline-lg font-bold text-secondary mt-2">100%</span>
                <span className="text-xs text-ink-faint mt-1">Autonomous scheduled dispatches</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">DATA DOMAINS</span>
                <span className="font-metric-numeral text-headline-lg font-bold text-surface mt-2">5</span>
                <span className="text-xs text-ink-faint mt-1">Cross-domain correlation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 5: MY CONTRIBUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="contribution">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                05 / MY CONTRIBUTION
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Architectural ownership.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">Dual-Pipeline Architecture</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Architected the decoupled &ldquo;Ask &amp; Watch&rdquo; execution pipelines separating real-time SSE interaction from background cron tasks.
                </span>
              </div>
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">MCP Server Development</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Implemented FastMCP domain server providing CCTV frame resolution, camera health inspection, and structured PostgreSQL queries.
                </span>
              </div>
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-body-md font-bold text-on-surface">SQL Guardrail AST Validator</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Built the schema introspection engine and AST validator enforcing SELECT-only operations across 5 data domains.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: TECH STACK */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-space-xl lg:py-space-2xl px-6 lg:px-12 border-b border-line" id="stack">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-space-xl">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                06 / TECH STACK
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Built with.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">AGENT FRAMEWORKS</span>
                <span className="text-xs font-semibold text-on-surface">LangChain, LangGraph, DeepAgents</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">PROTOCOL & TOOLS</span>
                <span className="text-xs font-semibold text-on-surface">Model Context Protocol (FastMCP), SSE</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">BACKEND & STORAGE</span>
                <span className="text-xs font-semibold text-on-surface">FastAPI, PostgreSQL (5 domains), SQLite</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">MULTIMODAL AI</span>
                <span className="text-xs font-semibold text-on-surface">Gemma 3 E4B Vision-Language Model</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CLOSING NAVIGATION & CTA */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-xl px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-line divide-y md:divide-y-0 md:divide-x divide-line">
              <Link href="/project-visionfacts" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">PREVIOUS PROJECT</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">← VisionFacts.ai Core</span>
                <span className="text-xs text-ink-muted">130+ camera live video analytics platform</span>
              </Link>
              <Link href="/project-edubotix" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-secondary uppercase font-semibold">NEXT PROJECT</span>
                <span className="font-headline-md text-body-md font-bold text-on-surface">Edubotix Platform →</span>
                <span className="text-xs text-ink-muted">Multimodal AI science tutor with verified calculation tools</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line text-xs font-label-timecode text-ink-muted">
              <div>
                © 2026 {IDENTITY.name} · {IDENTITY.location}
              </div>
              <div className="flex items-center gap-3">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-secondary font-semibold hover:underline">
                  Email Rajesh
                </a>
                <span>·</span>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface">
                  LinkedIn
                </a>
                <span>·</span>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-on-surface">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
