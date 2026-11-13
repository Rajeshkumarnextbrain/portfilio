'use client';

import { useState } from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
} from "@/content/facts";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full selection:bg-secondary selection:text-on-secondary">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-chapter px-6 lg:px-12 flex justify-center border-b border-line">
          <div className="w-full max-w-[1200px] flex flex-col gap-space-xl">
            {/* Breadcrumb Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  CONTACT &amp; HIRING
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-timecode text-label-timecode text-ink-muted">
                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                <span>STATUS: {IDENTITY.availabilityStatus} · {IDENTITY.replyTime}</span>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-space-md">
              <h1 className="font-mega-display text-[44px] xs:text-[60px] sm:text-[84px] md:text-[104px] lg:text-[120px] tracking-tighter text-on-surface uppercase leading-[0.92]">
                Let&apos;s talk.
              </h1>
              <p className="font-body-lg text-body-lg text-ink-muted max-w-3xl leading-relaxed">
                Actively interviewing with visionary teams building production AI systems. Open to <strong className="text-on-surface">{IDENTITY.targetRoles}</strong>. Available for architecture whiteboards, systems deep-dives, and leadership conversations.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-space-xs">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? "check" : "mail"}
                </span>
                <span>{copied ? "Copied ✓" : `Email: ${CONTACT_INFO.email}`}</span>
              </button>

              <a
                href={CONTACT_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-label-sm uppercase tracking-wider font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-label-sm uppercase tracking-wider font-medium transition-colors"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-label-sm uppercase tracking-wider font-medium transition-colors"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>

            {/* Candidate Facts Strip (5 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-space-md border-t border-line">
              {/* Item 1 */}
              <div className="flex flex-col gap-1 p-3 bg-paper-sunken border border-line">
                <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">LOOKING FOR</span>
                <span className="font-headline-md text-body-sm font-bold text-on-surface">
                  Lead / Staff AI
                </span>
                <span className="text-[11px] text-ink-muted">Computer Vision &amp; GenAI</span>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-1 p-3 bg-paper-sunken border border-line">
                <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">LOCATION</span>
                <span className="font-headline-md text-body-sm font-bold text-on-surface">
                  {IDENTITY.location}
                </span>
                <span className="text-[11px] text-ink-muted">Onsite, hybrid or remote; relocation open</span>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-1 p-3 bg-paper-sunken border border-line">
                <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">NOTICE PERIOD</span>
                <span className="font-headline-md text-body-sm font-bold text-secondary">
                  {IDENTITY.noticePeriod}
                </span>
                <span className="text-[11px] text-ink-muted">Standard transition cycle</span>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col gap-1 p-3 bg-paper-sunken border border-line">
                <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">TIMEZONE</span>
                <span className="font-headline-md text-body-sm font-bold text-on-surface">
                  IST (UTC+5:30)
                </span>
                <span className="text-[11px] text-ink-muted">Flexible for US / EU hours</span>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col gap-1 p-3 bg-paper-sunken border border-line">
                <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">REPLY TIME</span>
                <span className="font-headline-md text-body-sm font-bold text-status-success">
                  {IDENTITY.replyTime}
                </span>
                <span className="text-[11px] text-ink-muted">Direct inbox response</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: WHAT I BRING (4 Plain-English Quadrants) */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-space-chapter px-6 lg:px-12 flex justify-center border-b border-surface-container-highest/20">
          <div className="w-full max-w-[1200px] flex flex-col gap-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  CORE VALUE
                </span>
              </div>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-surface uppercase tracking-tight">
                Four things I&apos;m hired for.
              </h2>
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                    01 // REAL-TIME VIDEO &amp; VISION
                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface uppercase">
                    Computer Vision &amp; Real-Time Video
                  </h3>
                  <ul className="flex flex-col gap-2 text-body-sm text-ink-faint leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>{IDENTITY.yearsExperience} years architecting and shipping mission-critical production vision systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>{VERIFIED_NUMBERS.camerasCount} live cameras analysed concurrently across 2x NVIDIA L4 GPUs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Centralized low-latency serving via NVIDIA Triton Inference Server with dynamic request batching.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Production expertise in DeepStream, GStreamer, ByteTrack tracking, and OpenCV.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">YOLO26</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Triton</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">DeepStream</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">ByteTrack</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                    02 // MULTIMODAL &amp; AGENTS
                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface uppercase">
                    Generative AI &amp; Multimodal Agents
                  </h3>
                  <ul className="flex flex-col gap-2 text-body-sm text-ink-faint leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Production deployment of {VERIFIED_NUMBERS.precisionVlm} for zero-shot incident reasoning, cutting false alarms by 74%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Autonomous multi-agent pipelines with LangChain and LangGraph for structured data analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Standardized AI tool integration via Model Context Protocol (FastMCP) with SELECT-only database safeguards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Multimodal RAG with textbook citations and 9 verified calculation tools in Edubotix.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Gemma 3 E4B</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">LangGraph</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">FastMCP</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Qdrant</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                    03 // GPU OPTIMIZATION &amp; THROUGHPUT
                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface uppercase">
                    GPU Optimization &amp; High Throughput
                  </h3>
                  <ul className="flex flex-col gap-2 text-body-sm text-ink-faint leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Custom TensorRT FP32 graph compilation for maximum throughput on NVIDIA L4 GPUs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Centralized Triton architecture cutting model memory by ~6.5x (~5 GB vs ~32.5 GB).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Zero-copy inter-process communication using CUDA IPC shared memory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Dynamic request batching saving {VERIFIED_NUMBERS.costSavingsPerCluster} per deployed cluster.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">TensorRT FP32</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">CUDA IPC</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">NVDEC Decode</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Nsight Systems</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                    04 // TECHNICAL LEADERSHIP &amp; RIGOR
                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface uppercase">
                    Technical Engineering Leadership
                  </h3>
                  <ul className="flex flex-col gap-2 text-body-sm text-ink-faint leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Mentored and led {IDENTITY.teamSizeLed} across fast-paced CV &amp; GenAI sprints.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Established GPU profiling protocols with NVIDIA Nsight Compute to eliminate CUDA memory leaks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Owned client technical discovery, architecture design, and enterprise onboarding across {VERIFIED_NUMBERS.clientDeploymentsCount} deployments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-mono">›</span>
                      <span>Implemented zero-downtime canary rollouts with automated health check rollbacks.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Sprint Leadership</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Nsight Profiling</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Canary Rollouts</span>
                  <span className="px-2 py-0.5 bg-surface/10 text-surface">Client Discovery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: FAQ ACCORDION */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-space-chapter px-6 lg:px-12 flex justify-center border-b border-line">
          <div className="w-full max-w-[1200px] flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                COMMON QUESTIONS
              </span>
              <h2 className="font-headline-lg lg:font-display text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Before you ask.
              </h2>
            </div>

            <div className="w-full border-t border-line divide-y divide-line">
              {/* Question 1 */}
              <details className="group py-5 transition-all" open>
                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <span className="font-label-timecode text-ink-muted text-sm font-mono">01</span>
                    <span className="font-headline-md text-body-md sm:text-headline-md text-on-surface group-open:text-secondary font-semibold">
                      What specific full-time roles are you prioritizing?
                    </span>
                  </div>
                  <span className="font-headline-md text-ink-muted group-open:rotate-45 transition-transform text-lg shrink-0 ml-2">+</span>
                </summary>
                <div className="pt-3 pl-8 sm:pl-10 max-w-3xl">
                  <p className="font-body-md text-body-md text-ink-muted leading-relaxed">
                    Actively interviewing for <strong className="text-on-surface">{IDENTITY.targetRoles}</strong>. Prioritizing high-ownership teams building real-time computer vision, low-latency GPU microservices, or multimodal AI agent architectures.
                  </p>
                </div>
              </details>

              {/* Question 2 */}
              <details className="group py-5 transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <span className="font-label-timecode text-ink-muted text-sm font-mono">02</span>
                    <span className="font-headline-md text-body-md sm:text-headline-md text-on-surface group-open:text-secondary font-semibold">
                      What are your location preferences and work arrangements?
                    </span>
                  </div>
                  <span className="font-headline-md text-ink-muted group-open:rotate-45 transition-transform text-lg shrink-0 ml-2">+</span>
                </summary>
                <div className="pt-3 pl-8 sm:pl-10 max-w-3xl">
                  <p className="font-body-md text-body-md text-ink-muted leading-relaxed">
                    Based in <strong className="text-on-surface">{IDENTITY.location}</strong>. Open to onsite, hybrid, and remote roles. Also open to sponsored relocation for Tier-1 AI engineering hubs. {IDENTITY.timezone}.
                  </p>
                </div>
              </details>

              {/* Question 3 */}
              <details className="group py-5 transition-all">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                  <div className="flex items-center gap-4">
                    <span className="font-label-timecode text-ink-muted text-sm font-mono">03</span>
                    <span className="font-headline-md text-body-md sm:text-headline-md text-on-surface group-open:text-secondary font-semibold">
                      What is your notice period and interview process?
                    </span>
                  </div>
                  <span className="font-headline-md text-ink-muted group-open:rotate-45 transition-transform text-lg shrink-0 ml-2">+</span>
                </summary>
                <div className="pt-3 pl-8 sm:pl-10 max-w-3xl">
                  <p className="font-body-md text-body-md text-ink-muted leading-relaxed">
                    Official notice period is <strong className="text-on-surface">{IDENTITY.noticePeriod}</strong>. Enthusiastic about systems architecture whiteboards, technical walkthroughs of live pipelines, and real-world engineering discussions. Direct email inquiries receive a response {IDENTITY.replyTime}.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: DIRECT CONTACT STRIP */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-space-chapter px-6 lg:px-12 flex justify-center">
          <div className="w-full max-w-[1200px] flex flex-col gap-space-lg">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                CHANNELS
              </span>
              <h2 className="font-headline-lg text-headline-lg lg:text-display text-on-surface uppercase tracking-tight">
                Pick a channel.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Channel 1: Email */}
              <div
                onClick={handleCopyEmail}
                className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line cursor-pointer transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">PRIMARY INBOX</span>
                  <div className="font-headline-md text-body-md font-bold text-on-surface mt-1 break-all">
                    {CONTACT_INFO.email}
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Direct outreach for hiring managers and CTOs.
                  </p>
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-xs uppercase font-semibold">
                  <span>{copied ? "Copied ✓" : "Copy email address"}</span>
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                </div>
              </div>

              {/* Channel 2: LinkedIn */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">PROFESSIONAL NETWORK</span>
                  <div className="font-headline-md text-body-md font-bold text-on-surface mt-1">
                    LinkedIn Profile
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Fast outreach and interview scheduling.
                  </p>
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-xs uppercase font-semibold">
                  <span>Connect on LinkedIn</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </div>
              </a>

              {/* Channel 3: GitHub */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">CODE &amp; REPOSITORIES</span>
                  <div className="font-headline-md text-body-md font-bold text-on-surface mt-1">
                    GitHub Profile
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Systems implementations, CUDA benchmarks, and microservices.
                  </p>
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-xs uppercase font-semibold">
                  <span>View GitHub repos</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </div>
              </a>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-space-md border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs font-label-timecode text-ink-muted">
              <div>
                © 2026 {IDENTITY.name} · {IDENTITY.location} · {IDENTITY.timezone}
              </div>
              <div className="text-status-success font-medium">
                Available for hire · {IDENTITY.noticePeriod}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
