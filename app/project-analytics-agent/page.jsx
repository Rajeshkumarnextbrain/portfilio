'use client';

import React from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  PROJECTS,
} from "@/content/facts";

import { CountUp } from "@/components/motion/CountUp";
import { DrawLine } from "@/components/motion/DrawLine";
import { Reveal } from "@/components/motion/Reveal";
import { FlowToken } from "@/components/motion/FlowToken";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { AnimatedChatTrace } from "@/components/project/AnimatedChatTrace";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";
import { ProxyPacketDiagram } from "@/components/project/ProxyPacketDiagram";

const ASK_PIPELINE_STEPS = [
  {
    number: '01',
    plainTitle: 'SSE Client Request',
    plainDesc: 'Supervisor enters natural-language query streamed over Server-Sent Events.',
    techDesc: 'FastAPI async SSE endpoint with token-by-token streaming.',
  },
  {
    number: '02',
    plainTitle: 'Schema Inspection',
    plainDesc: 'Supervisor Agent queries describe_table via MCP tools across 5 domains.',
    techDesc: 'FastMCP JSON-RPC schema introspection.',
  },
  {
    number: '03',
    plainTitle: 'AST Guardrail Verification',
    plainDesc: 'Parses SQL abstract syntax tree to verify 100% read-only operations.',
    techDesc: 'Zero destructive mutations: INSERT, UPDATE, DROP strictly blocked.',
  },
  {
    number: '04',
    plainTitle: 'Evidence Correlation',
    plainDesc: 'Joins SQL results with physical camera crops from MongoDB.',
    techDesc: 'Correlates timestamps with incident audit crops.',
  },
  {
    number: '05',
    plainTitle: 'Structured Response',
    plainDesc: 'Delivers plain-English answer with data tables and clickable image crops.',
    techDesc: 'Returns formatted markdown with signed image URLs in < 3s.',
  },
];

const WATCH_PIPELINE_STEPS = [
  {
    number: '01',
    plainTitle: 'Scheduled Trigger',
    plainDesc: 'Cron scheduler fires 15 minutes prior to every facility shift change.',
    techDesc: 'Celery Beat distributed periodic task runner.',
  },
  {
    number: '02',
    plainTitle: 'Cross-Domain Anomaly Scan',
    plainDesc: 'Background agent audits zone dwell times, tailgating, and badge anomalies.',
    techDesc: 'Parallel SQL aggregation across 8-hour shift windows.',
  },
  {
    number: '03',
    plainTitle: 'Automated Shift Digest',
    plainDesc: 'Compiles PDF report and emails safety leadership before the shift handover starts.',
    techDesc: 'FastAPI + Jinja2 PDF generation dispatched via SMTP.',
  },
];

const JUMP_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'contribution', label: 'Contribution' },
];

export default function AnalyticsAgentPage() {
  const project = PROJECTS[1];

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO (Paper Surface) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="chapter-0">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="font-label-sm text-xs text-ink-muted hover:text-secondary uppercase tracking-widest transition-colors">
                  HOME
                </Link>
                <span className="text-line">/</span>
                <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">
                  CASE STUDY: ANALYTICS AGENT
                </span>
              </div>
              <span className="font-label-timecode text-xs text-secondary font-medium">
                MULTI-AGENT INTELLIGENCE
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[36px] xs:text-[48px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                Ask the<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  cameras
                </span><br />
                anything.
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                A multi-agent CCTV intelligence platform that lets operations and safety teams question surveillance and security records in plain English—and automatically delivers shift safety digests before they ask.
              </p>
            </div>

            {/* TOP "IN PLAIN ENGLISH" BLOCK */}
            <Reveal>
              <div className="p-6 bg-paper-sunken border border-line flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold font-mono">
                    IN PLAIN ENGLISH
                  </span>
                </div>

                <p className="font-body-lg text-sm sm:text-base text-on-surface leading-relaxed">
                  Instead of waiting 24 to 48 hours for a database administrator to write custom SQL queries, warehouse directors and safety managers can ask natural-language questions like &ldquo;Which forklifts entered Gate 2 during shift change without a driver badge?&rdquo; The AI coordinates multiple specialized agents to check 5 data domains, verifies camera crop evidence, and replies with structured tables and images in under 3 seconds.
                </p>

                {/* 3-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                  <div className="flex flex-col">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value={VERIFIED_NUMBERS.analyticsPipelines} />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Execution Pipelines</span>
                    <span className="text-xs text-ink-muted mt-1">Interactive &ldquo;Ask&rdquo; + Autonomous &ldquo;Watch&rdquo;</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary">
                      <CountUp value={VERIFIED_NUMBERS.analyticsMcpServers} />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">MCP Servers</span>
                    <span className="text-xs text-ink-muted mt-1">Model Context Protocol for database and CCTV tools</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value="5" />
                    </span>
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
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-line">
                  <a
                    href="#overview"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors group active:scale-[0.97]"
                  >
                    <span>Read technical deep dive</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-y-1">
                      arrow_downward
                    </span>
                  </a>

                  <StickyJumpBar sections={JUMP_SECTIONS} />
                </div>
              </div>
            </Reveal>

            {/* Interactive Chat Trace Preview */}
            <AnimatedChatTrace />
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: THE PROBLEM & THE SOLUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="overview">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <Reveal>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                  01 / OVERVIEW
                </span>
                <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                  From database tickets to autonomous operational dialogue.
                </h2>
              </div>
            </Reveal>

            {/* 2-Column Split: Problem vs Solution with Animated ProblemSolutionRow */}
            <ProblemSolutionRow
              problemText={`VisionFacts.ai continuously tracks thousands of physical events across ${VERIFIED_NUMBERS.camerasCount} cameras. However, warehouse managers and safety supervisors had no direct SQL skills to query this data. Analyzing cross-domain incidents (e.g. linking a vehicle entry with missing worker badges) required raising IT tickets with 24-to-48 hour response delays.`}
              solutionText="Built a dual-pipeline architecture using LangGraph and MCP. The &ldquo;Ask&rdquo; pipeline allows interactive natural language questions over Server-Sent Events, while the &ldquo;Watch&rdquo; pipeline runs autonomous background audits and emails shift digests before supervisors arrive."
            />
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: FOR ENGINEERS: TECHNICAL DETAIL */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="how-it-works">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Engineer Divider */}
            <div className="flex items-center gap-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-ink-faint font-semibold">
                For engineers: technical detail
              </span>
              <div className="flex-1">
                <DrawLine className="h-px w-full bg-line" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                02 / HOW IT WORKS
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Two pipelines. Specialized agents.
              </h2>
            </div>

            {/* Pipeline 1: Ask Pipeline */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline-md text-lg sm:text-xl font-bold text-on-surface uppercase">
                Pipeline 1: Interactive &ldquo;Ask&rdquo; Workflow
              </h3>
              <FlowToken steps={ASK_PIPELINE_STEPS} />
            </div>

            {/* Pipeline 2: Watch Pipeline */}
            <div className="flex flex-col gap-4 pt-6 border-t border-line">
              <h3 className="font-headline-md text-lg sm:text-xl font-bold text-on-surface uppercase">
                Pipeline 2: Autonomous &ldquo;Watch&rdquo; Workflow
              </h3>
              <FlowToken steps={WATCH_PIPELINE_STEPS} />
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: CHALLENGES & FIXES */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="challenges">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                03 / CHALLENGES AND FIXES
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                What broke, and how I fixed it.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              {/* Fix 1 */}
              <div className="py-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    1. LAN Snapshot Proxy Security Isolation
                  </div>
                  <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                    <strong className="text-on-surface block mb-1">Problem:</strong>
                    CCTV cameras resided on private, isolated local networks. Directly querying snapshots from client browsers violated perimeter network security policies.
                  </div>
                  <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                    <strong className="text-secondary block mb-1">Fix & Result:</strong>
                    Built a secure snapshot proxy inside FastAPI: browser requests pass through an authenticated proxy that validates camera IDs against an allowlist and forwards approved feeds from the LAN without exposing cameras directly.
                  </div>
                </div>

                {/* Animated Packet Flow Diagram */}
                <ProxyPacketDiagram />
              </div>

              {/* Fix 2 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  2. AST Validation Against Data Loss
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  LLMs generating arbitrary SQL risked destructive operations (DELETE, UPDATE, DROP) or schema alterations against production database clusters.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Constructed an SQL AST validator that verifies queries are 100% SELECT operations. Rejects multiple statements, mutations, or unrecognized table references before execution.
                </div>
              </div>

              {/* Fix 3 */}
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  3. Token Reduction via Dynamic MCP Introspection
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Loading entire database schemas into the LLM system prompt consumed thousands of tokens per turn and increased latency.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Designed dynamic MCP schema introspection: the agent queries table names first, then inspects only relevant columns for the query, cutting prompt token consumption by &gt;60%.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: PRODUCTION RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                  04 / RESULTS &amp; BENCHMARKS
                </span>
              </div>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-surface uppercase tracking-tight">
                Operational impact.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">QUERY RESPONSE TIME</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-2">
                  <CountUp value="< 3s" />
                </span>
                <span className="text-xs text-ink-faint mt-1">From question to structured answer &amp; evidence</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">IT TICKET REDUCTION</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value="85%" />
                </span>
                <span className="text-xs text-ink-faint mt-1">Fewer ad-hoc data requests to DBAs</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">SECURITY WRITE AUDIT</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value="0" />
                </span>
                <span className="text-xs text-ink-faint mt-1">Unauthorized database mutations across {VERIFIED_NUMBERS.analyticsWriteAccess}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 5: MY CONTRIBUTION */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="contribution">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                05 / MY CONTRIBUTION
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                End-to-end agentic design.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  Multi-Agent StateGraph Architecture
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Architected the LangGraph state machine with dedicated supervisor, router, tool execution, and synthesis nodes.
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  MCP Tool Server Development
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Authored custom FastMCP servers exposing database schema introspection, SQL execution, and LAN camera snapshot proxying.
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  SQL Guardrails &amp; Security
                </span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Implemented AST validation ensuring 100% read-only compliance, table whitelisting, and query execution timeouts.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CLOSING NAVIGATION & CTA */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-line divide-y md:divide-y-0 md:divide-x divide-line">
              <Link href="/project-visionfacts" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">PREVIOUS PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">← VisionFacts.ai</span>
                <span className="text-xs text-ink-muted">130+ camera video analytics on 2x NVIDIA L4 GPUs</span>
              </Link>
              <Link href="/project-edubotix" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-secondary uppercase font-semibold">NEXT PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">Edubotix →</span>
                <span className="text-xs text-ink-muted">Multimodal RAG with 9 verified scientific calculation tools</span>
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
