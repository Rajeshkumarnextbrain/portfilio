'use client';

import React, { useState } from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
} from "@/content/facts";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Disclosure } from "@/components/motion/Disclosure";
import { CopyButton } from "@/components/motion/CopyButton";
import { AmbientDot } from "@/components/motion/AmbientDot";

const RECRUITER_DOSSIER = `CANDIDATE DOSSIER // RAJESH KUMAR S
Target Roles: ${IDENTITY.targetRoles}
Focus: 50% High-Throughput Computer Vision · 50% Autonomous GenAI & Multi-Agent Systems
Experience: ${IDENTITY.yearsExperience} Years Production AI Architecture | Led ${IDENTITY.teamSizeLed}

KEY PRODUCTION HIGHLIGHTS:
• Shipped 3 end-to-end production AI platforms (130+ concurrent RTSP streams, multi-agent RAG/MCP pipelines)
• Engineered ~390 GB → 48 GB VRAM reduction using centralized NVIDIA Triton & zero-copy CUDA IPC ($3,400/mo GPU savings)
• Reduced operational false alarms by 74% using Gemma 3 VLM verification layers
• Built autonomous LangGraph agents with FastMCP tooling and strict AST safety guards (< 3s query response)
• Tech Stack: YOLOv11/26, DINOv3, ByteTrack, Triton, TensorRT, CUDA, LangGraph, FastMCP, Qdrant, FastAPI, Docker

LOCATION & LOGISTICS:
• Location: ${IDENTITY.locationDetails}
• Notice Period: ${IDENTITY.noticePeriod}
• Email: ${CONTACT_INFO.email}
• LinkedIn: ${CONTACT_INFO.linkedin}
• GitHub: ${CONTACT_INFO.github}`;

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full selection:bg-secondary selection:text-on-secondary">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 flex justify-center border-b border-line">
          <div className="w-full max-w-screen-2xl 2xl:max-w-[1640px] flex flex-col gap-8 md:gap-12">
            {/* Breadcrumb Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  CONTACT &amp; HIRING
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-timecode text-xs text-ink-muted">
                <AmbientDot color="bg-status-success" size="w-2 h-2" />
                <span>STATUS: {IDENTITY.availabilityStatus} · {IDENTITY.replyTime}</span>
              </div>
            </div>

            {/* 2-Column Hero Grid on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
              {/* Left Column: Headline, Bio & Primary Action Buttons */}
              <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
                <Reveal>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-mega-display text-[44px] xs:text-[60px] sm:text-[84px] md:text-[96px] lg:text-[112px] xl:text-[120px] tracking-tighter text-on-surface uppercase leading-[0.92]">
                      Let&apos;s talk.
                    </h1>
                    <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
                      Actively interviewing with visionary teams building production AI systems. Open to <strong className="text-on-surface font-semibold">{IDENTITY.targetRoles}</strong>. Available for architecture whiteboards, systems deep-dives, and leadership conversations.
                    </p>
                  </div>
                </Reveal>

                {/* Top Action Buttons with Stagger */}
                <Stagger className="flex flex-wrap items-center gap-3">
                  <StaggerItem>
                    <CopyButton
                      textToCopy={CONTACT_INFO.email}
                      label={`Email: ${CONTACT_INFO.email}`}
                      className="px-6 py-3.5 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.resumeUrl}
                      download
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Download Resume (PDF)</span>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <span>LinkedIn</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <span>GitHub</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </a>
                  </StaggerItem>
                </Stagger>
              </div>

              {/* Right Column: Executive Fast-Track Dossier Card */}
              <Reveal className="lg:col-span-5 w-full">
                <div className="bg-paper-raised border border-line p-5 sm:p-6 flex flex-col gap-4 relative">
                  {/* Eyebrow */}
                  <div className="flex items-center justify-between pb-3 border-b border-line">
                    <div className="flex items-center gap-2 font-label-timecode text-xs text-secondary font-semibold uppercase tracking-wider">
                      <span className="w-2 h-2 bg-secondary inline-block"></span>
                      <span>00 // CANDIDATE DOSSIER</span>
                    </div>
                    <span className="font-label-timecode text-[10px] px-2 py-0.5 bg-paper-sunken border border-line text-ink-muted uppercase">
                      FAST-TRACK FOR LEADS &amp; HR
                    </span>
                  </div>

                  {/* Role & Split */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase tracking-tight">
                      Lead &amp; Staff AI Systems Architect
                    </h3>
                    <p className="font-label-timecode text-xs text-secondary font-medium">
                      50% Computer Vision &bull; 50% Generative AI &amp; Autonomous Agents
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-line text-xs">
                    <div className="p-2.5 bg-paper-sunken border border-line flex flex-col gap-0.5">
                      <span className="font-label-timecode text-[10px] text-ink-muted uppercase font-semibold">PRODUCTION SCALE</span>
                      <span className="font-headline-md text-xs font-bold text-on-surface">130+ RTSP Streams</span>
                      <span className="text-[11px] text-ink-muted">Triton &bull; Zero-copy CUDA IPC</span>
                    </div>

                    <div className="p-2.5 bg-paper-sunken border border-line flex flex-col gap-0.5">
                      <span className="font-label-timecode text-[10px] text-ink-muted uppercase font-semibold">GPU EFFICIENCY</span>
                      <span className="font-headline-md text-xs font-bold text-secondary">~390 GB &rarr; 48 GB VRAM</span>
                      <span className="text-[11px] text-ink-muted">6.5x compaction &bull; $3,400/mo cut</span>
                    </div>

                    <div className="p-2.5 bg-paper-sunken border border-line flex flex-col gap-0.5">
                      <span className="font-label-timecode text-[10px] text-ink-muted uppercase font-semibold">AGENTIC ARCHITECTURE</span>
                      <span className="font-headline-md text-xs font-bold text-on-surface">LangGraph + FastMCP</span>
                      <span className="text-[11px] text-ink-muted">AST security guards &bull; &lt; 3s query</span>
                    </div>

                    <div className="p-2.5 bg-paper-sunken border border-line flex flex-col gap-0.5">
                      <span className="font-label-timecode text-[10px] text-ink-muted uppercase font-semibold">LEADERSHIP &amp; TEAM</span>
                      <span className="font-headline-md text-xs font-bold text-on-surface">Led {IDENTITY.teamSizeLed}</span>
                      <span className="text-[11px] text-ink-muted">3 shipped platforms &bull; {IDENTITY.yearsExperience} yrs exp</span>
                    </div>
                  </div>

                  {/* Mobility Pill */}
                  <div className="flex items-center gap-2 p-2.5 bg-paper-sunken border border-line text-[11px] text-ink-muted">
                    <span className="material-symbols-outlined text-[16px] text-secondary">travel_explore</span>
                    <span><strong>Mobility:</strong> Bangalore onsite/hybrid &bull; Open to sponsored relocation worldwide</span>
                  </div>

                  {/* 1-Click Copy Dossier */}
                  <div className="pt-2 border-t border-line">
                    <CopyButton
                      textToCopy={RECRUITER_DOSSIER}
                      label="Copy Recruiter Dossier (Slack / ATS ready)"
                      className="w-full justify-center py-2.5 px-4 bg-paper-sunken hover:bg-surface-container-high text-on-surface border border-line font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Candidate Facts Strip (5 items) */}
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6 border-t border-line">
              {/* Item 1 */}
              <StaggerItem>
                <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                  <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">LOOKING FOR</span>
                  <span className="font-headline-md text-sm font-bold text-on-surface">
                    Lead / Staff AI
                  </span>
                  <span className="text-[11px] text-ink-muted">Computer Vision &amp; GenAI</span>
                </div>
              </StaggerItem>

              {/* Item 2 */}
              <StaggerItem>
                <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                  <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">LOCATION</span>
                  <span className="font-headline-md text-sm font-bold text-on-surface">
                    {IDENTITY.location}
                  </span>
                  <span className="text-[11px] text-ink-muted">Onsite, hybrid or remote; relocation open</span>
                </div>
              </StaggerItem>

              {/* Item 3 */}
              <StaggerItem>
                <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                  <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">NOTICE PERIOD</span>
                  <span className="font-headline-md text-sm font-bold text-secondary">
                    {IDENTITY.noticePeriod}
                  </span>
                  <span className="text-[11px] text-ink-muted">Standard transition cycle</span>
                </div>
              </StaggerItem>

              {/* Item 4 */}
              <StaggerItem>
                <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                  <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">TIMEZONE</span>
                  <span className="font-headline-md text-sm font-bold text-on-surface">
                    IST (UTC+5:30)
                  </span>
                  <span className="text-[11px] text-ink-muted">Flexible for US / EU hours</span>
                </div>
              </StaggerItem>

              {/* Item 5 */}
              <StaggerItem>
                <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                  <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">REPLY TIME</span>
                  <span className="font-headline-md text-sm font-bold text-status-success">
                    {IDENTITY.replyTime}
                  </span>
                  <span className="text-[11px] text-ink-muted">Direct inbox response</span>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 1: WHAT I BRING (4 Plain-English Quadrants) */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 flex justify-center border-b border-surface-container-highest/20">
          <div className="w-full max-w-screen-2xl 2xl:max-w-[1640px] flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary"></span>
                <span className="font-label-sm text-xs text-secondary uppercase font-semibold">
                  CORE VALUE
                </span>
              </div>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl lg:text-5xl text-surface uppercase tracking-tight">
                Four things I&apos;m hired for.
              </h2>
            </div>

            {/* 2x2 Grid with Stagger & Hairline Orange Hover */}
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <StaggerItem>
                <div className="group relative p-6 bg-surface/5 border border-surface-container-highest/20 hover:border-secondary transition-colors flex flex-col justify-between gap-6 h-full">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  <div className="flex flex-col gap-3">
                    <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                      01 // REAL-TIME VIDEO &amp; VISION
                    </span>
                    <h3 className="font-headline-md text-lg sm:text-xl text-surface uppercase">
                      Computer Vision &amp; Real-Time Video
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-ink-faint leading-relaxed">
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
                        <span>Full multi-model execution: YOLOv11, YOLO26, DINOv3, RetinaFace, ArcFace, and ByteTrack tracking.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Production expertise in DeepStream, GStreamer, PyTorch, OpenCV, and hardware NVDEC decoding.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">YOLOv11</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">PyTorch</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">RetinaFace</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">ByteTrack</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">OpenCV</span>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 2 */}
              <StaggerItem>
                <div className="group relative p-6 bg-surface/5 border border-surface-container-highest/20 hover:border-secondary transition-colors flex flex-col justify-between gap-6 h-full">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  <div className="flex flex-col gap-3">
                    <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                      02 // MULTIMODAL &amp; AGENTS
                    </span>
                    <h3 className="font-headline-md text-lg sm:text-xl text-surface uppercase">
                      Generative AI &amp; Multimodal Agents
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-ink-faint leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Production deployment of {VERIFIED_NUMBERS.precisionVlm} for zero-shot incident reasoning, cutting false alarms by 74%.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Autonomous multi-agent pipelines with LangChain and LangGraph for structured data analysis and reporting.</span>
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
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">LangGraph</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">FastMCP</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">AWS Bedrock</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Qdrant</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Gemma 3 VLM</span>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 3 */}
              <StaggerItem>
                <div className="group relative p-6 bg-surface/5 border border-surface-container-highest/20 hover:border-secondary transition-colors flex flex-col justify-between gap-6 h-full">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  <div className="flex flex-col gap-3">
                    <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                      03 // GPU OPTIMIZATION &amp; THROUGHPUT
                    </span>
                    <h3 className="font-headline-md text-lg sm:text-xl text-surface uppercase">
                      GPU Optimization &amp; High Throughput
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-ink-faint leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Avoided ~390 GB of redundant VRAM across 130+ cameras by centralizing the 6-model suite on Triton.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Custom TensorRT FP32 graph compilation delivering 192 req/s average throughput on NVIDIA L4 GPUs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Zero-copy inter-process communication using CUDA IPC shared memory, eliminating PCIe bus bottlenecks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Dynamic request batching saving {VERIFIED_NUMBERS.costSavingsPerCluster} per deployed cluster (62% lower GPU costs).</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Triton Server</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">TensorRT FP32</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">CUDA IPC</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">NVDEC Decode</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Nsight Systems</span>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 4 */}
              <StaggerItem>
                <div className="group relative p-6 bg-surface/5 border border-surface-container-highest/20 hover:border-secondary transition-colors flex flex-col justify-between gap-6 h-full">
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  <div className="flex flex-col gap-3">
                    <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                      04 // TECHNICAL LEADERSHIP &amp; RIGOR
                    </span>
                    <h3 className="font-headline-md text-lg sm:text-xl text-surface uppercase">
                      Technical Engineering Leadership
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-ink-faint leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Mentored and led {IDENTITY.teamSizeLed} across fast-paced Computer Vision &amp; GenAI sprints.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Established GPU profiling protocols with NVIDIA Nsight Compute to eliminate CUDA race conditions and memory leaks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Owned client technical discovery, architecture design, and enterprise onboarding across {VERIFIED_NUMBERS.clientDeploymentsCount} deployments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-mono">›</span>
                        <span>Implemented zero-downtime canary rollouts on Triton with automated health check rollbacks.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Sprint Leadership</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Nsight Profiling</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Canary Rollouts</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Architecture Design</span>
                    <span className="px-2 py-0.5 bg-surface/10 text-surface">Client Discovery</span>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 2: FAQ ACCORDION (Animated Disclosure) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 flex justify-center border-b border-line">
          <div className="w-full max-w-screen-2xl 2xl:max-w-[1640px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                COMMON QUESTIONS
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Before you ask.
              </h2>
            </div>

            <div className="w-full border-t border-line">
              {/* Question 1 */}
              <Disclosure
                index={1}
                question="What specific full-time roles are you prioritizing?"
                isOpen={openFaqIndex === 0}
                onToggle={() => toggleFaq(0)}
              >
                <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
                  Actively interviewing for <strong className="text-on-surface font-semibold">{IDENTITY.targetRoles}</strong>. Prioritizing high-ownership teams building real-time computer vision, low-latency GPU microservices, or multimodal AI agent architectures.
                </p>
              </Disclosure>

              {/* Question 2 */}
              <Disclosure
                index={2}
                question="What are your location preferences and work arrangements?"
                isOpen={openFaqIndex === 1}
                onToggle={() => toggleFaq(1)}
              >
                <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
                  Based in <strong className="text-on-surface font-semibold">{IDENTITY.location}</strong>. Open to onsite, hybrid, and remote roles. Also open to sponsored relocation for Tier-1 AI engineering hubs. {IDENTITY.timezone}.
                </p>
              </Disclosure>

              {/* Question 3 */}
              <Disclosure
                index={3}
                question="What is your notice period and interview process?"
                isOpen={openFaqIndex === 2}
                onToggle={() => toggleFaq(2)}
              >
                <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
                  Official notice period is <strong className="text-on-surface font-semibold">{IDENTITY.noticePeriod}</strong>. Enthusiastic about systems architecture whiteboards, technical walkthroughs of live pipelines, and real-world engineering discussions. Direct email inquiries receive a response {IDENTITY.replyTime}.
                </p>
              </Disclosure>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 3: DIRECT CONTACT STRIP */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 flex justify-center">
          <div className="w-full max-w-screen-2xl 2xl:max-w-[1640px] flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                CHANNELS
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Pick a channel.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Channel 1: Email */}
              <div className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-4">
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">PRIMARY INBOX</span>
                  <div className="font-headline-md text-base sm:text-lg font-bold text-on-surface mt-1 break-all">
                    {CONTACT_INFO.email}
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Direct outreach for hiring managers and CTOs.
                  </p>
                </div>
                <div className="pt-2">
                  <CopyButton
                    textToCopy={CONTACT_INFO.email}
                    label="Copy email address"
                    className="text-secondary font-label-sm text-xs uppercase font-semibold hover:underline"
                  />
                </div>
              </div>

              {/* Channel 2: LinkedIn */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-4 group"
              >
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">PROFESSIONAL NETWORK</span>
                  <div className="font-headline-md text-base sm:text-lg font-bold text-on-surface mt-1">
                    LinkedIn Profile
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Fast outreach and interview scheduling.
                  </p>
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-xs uppercase font-semibold pt-2">
                  <span>Connect on LinkedIn</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    north_east
                  </span>
                </div>
              </a>

              {/* Channel 3: GitHub */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-paper-raised hover:bg-surface-container-high border border-line transition-colors flex flex-col justify-between gap-4 group"
              >
                <div>
                  <span className="font-label-timecode text-xs text-ink-muted uppercase">CODE &amp; REPOSITORIES</span>
                  <div className="font-headline-md text-base sm:text-lg font-bold text-on-surface mt-1">
                    GitHub Profile
                  </div>
                  <p className="text-xs text-ink-muted mt-2">
                    Systems implementations, CUDA benchmarks, and microservices.
                  </p>
                </div>
                <div className="flex items-center justify-between text-secondary font-label-sm text-xs uppercase font-semibold pt-2">
                  <span>View GitHub repos</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    north_east
                  </span>
                </div>
              </a>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs font-label-timecode text-ink-muted">
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
