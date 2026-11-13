'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  IDENTITY,
  VERIFIED_NUMBERS,
  CONTACT_INFO,
  PROOF_METRICS,
  AT_A_GLANCE_METRICS,
  PROJECTS,
  HOW_IT_WORKS_STEPS,
  SKILL_GROUPS,
  EXPERIENCE_ROLES,
} from "../content/facts";

export default function HomePage() {
  const [slotIndex, setSlotIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [camTiles, setCamTiles] = useState(() => Array(130).fill(false));

  useEffect(() => {
    // Slot machine rotation
    const slotTimer = setInterval(() => {
      setSlotIndex((prev) => (prev + 1) % 3);
    }, 2500);

    // Camera grid random blinking
    const camTimer = setInterval(() => {
      const randIdx = Math.floor(Math.random() * 130);
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
    }, 120);

    return () => {
      clearInterval(slotTimer);
      clearInterval(camTimer);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">
        {/* =========================================================================
            CHAPTER 00: HERO (Paper / Warm Tactile Surface)
            ========================================================================= */}
        <section className="relative w-full bg-surface px-4 sm:px-6 lg:px-8 py-12 lg:py-20 border-b border-line overflow-hidden">
          {/* Viewfinder Background Grids (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-r border-dashed border-line"></div>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] border-b border-dashed border-line"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
            {/* Top Availability Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-raised border border-line rounded-full shadow-sm text-xs font-label-timecode font-semibold tracking-wider text-primary uppercase">
                <span className="w-2 h-2 rounded-full bg-status-success inline-block"></span>
                <span>AVAILABLE FOR HIRE · {IDENTITY.noticePeriod} NOTICE · {IDENTITY.location}</span>
              </div>
              <div className="font-label-timecode text-xs text-ink-muted flex items-center gap-2 flex-wrap">
                <span className="text-secondary font-bold">●</span>
                <span>{VERIFIED_NUMBERS.cameras} CAMERAS LIVE</span>
                <span className="text-ink-faint">/</span>
                <span>{VERIFIED_NUMBERS.memoryReduction} GPU MEMORY</span>
              </div>
            </div>

            {/* Mega Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Typography & Intent */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-2 text-ink-muted font-label-sm text-xs uppercase tracking-widest">
                  <span>LEAD AI SYSTEMS ARCHITECT</span>
                  <span className="text-secondary font-bold">/</span>
                  <span>{IDENTITY.location}</span>
                </div>

                <h1 className="font-mega-display text-[34px] xs:text-[44px] sm:text-[68px] lg:text-[88px] xl:text-[96px] leading-[0.95] tracking-tighter text-primary font-bold">
                  I build production AI systems that{" "}
                  <span className="inline-block relative overflow-hidden align-middle h-[1.18em] text-secondary ml-1 sm:ml-2">
                    <span
                      className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ transform: `translateY(-${slotIndex * 33.3333}%)` }}
                    >
                      <span className="h-[1.18em] flex items-center">
                        <span className="bg-signal-orange-tint px-2 sm:px-2.5 py-0.5 text-secondary leading-none rounded-sm">[see]</span>
                      </span>
                      <span className="h-[1.18em] flex items-center">
                        <span className="bg-signal-orange-tint px-2 sm:px-2.5 py-0.5 text-secondary leading-none rounded-sm">[reason]</span>
                      </span>
                      <span className="h-[1.18em] flex items-center">
                        <span className="bg-signal-orange-tint px-2 sm:px-2.5 py-0.5 text-secondary leading-none rounded-sm">[scale]</span>
                      </span>
                    </span>
                  </span>
                </h1>

                {/* Plain-English Explainer Layer */}
                <div className="p-4 sm:p-5 bg-paper-sunken border-l-4 border-secondary border border-line rounded-DEFAULT">
                  <p className="font-body-md text-base sm:text-lg text-primary font-medium leading-relaxed">
                    In simple terms, I build software that:
                  </p>
                  <ul className="mt-2 space-y-1.5 font-body-md text-sm sm:text-base text-ink-muted list-disc list-inside">
                    <li><strong className="text-primary font-semibold">Watches security cameras</strong> and spots safety problems automatically.</li>
                    <li><strong className="text-primary font-semibold">Lets managers ask questions</strong> about company data and get reports in plain English.</li>
                    <li><strong className="text-primary font-semibold">Helps students learn</strong> from their verified curriculum textbooks.</li>
                  </ul>
                </div>

                {/* Proof Row (4 Verified Numbers) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-line">
                  {PROOF_METRICS.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-primary">
                        {metric.value}
                      </span>
                      <span className="font-label-sm text-[12px] text-ink-muted uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={CONTACT_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-neutral-800 text-on-primary font-label-timecode text-xs uppercase font-semibold tracking-wider rounded-full transition-all shadow-sm text-center"
                  >
                    <span>Download resume (PDF)</span>
                    <span className="material-symbols-outlined text-[16px]">download</span>
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-paper-raised hover:bg-paper-sunken text-primary border border-line font-label-timecode text-xs uppercase font-semibold tracking-wider rounded-full transition-colors text-center"
                  >
                    <span>View projects</span>
                    <span className="font-mono text-ink-muted">(03)</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-xs uppercase font-semibold tracking-wider rounded-full transition-colors text-center font-bold"
                  >
                    <span>Email me</span>
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Precision Viewfinder Screen Simulation */}
              <div className="lg:col-span-5 relative">
                <div className="relative bg-paper-sunken border border-line p-3 sm:p-4">
                  {/* 4 Corner Viewfinder Marks */}
                  <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                  <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-primary"></div>

                  {/* Video Monitor Screen Simulation */}
                  <div className="relative w-full aspect-[4/3] bg-surface-container-high overflow-hidden flex flex-col justify-between p-3 border border-line">
                    <div className="relative z-10 flex items-center justify-between text-ink-muted font-label-sm text-[11px]">
                      <div className="flex items-center gap-1.5 bg-paper-raised/95 px-2 py-0.5 border border-line">
                        <span className="w-1.5 h-1.5 bg-status-success rounded-full"></span>
                        <span className="font-bold text-primary">LIVE PIPELINE MONITOR</span>
                      </div>
                      <div className="bg-paper-raised/95 px-2 py-0.5 font-mono text-[10px] border border-line">
                        {VERIFIED_NUMBERS.hardware}
                      </div>
                    </div>

                    {/* Bounding Box Visuals */}
                    <div className="relative w-full h-full my-2">
                      <div className="absolute top-4 left-4 w-40 h-24 border border-secondary-container bg-secondary-container/5 p-1.5 flex flex-col justify-between">
                        <span className="bg-secondary-container text-on-secondary text-[10px] font-bold px-1 py-0.5 self-start">
                          FORKLIFT HAZARD · DETECTED
                        </span>
                        <span className="text-[10px] font-mono text-secondary font-bold">107 ms mean execution</span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-36 h-28 border border-secondary-container bg-secondary-container/5 p-1.5 flex flex-col justify-between">
                        <span className="bg-secondary-container text-on-secondary text-[10px] font-bold px-1 py-0.5 self-start">
                          PPE CHECK · PASS
                        </span>
                        <span className="text-[10px] font-mono text-secondary font-bold">Gemma 3 E4B Verified</span>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center justify-between bg-primary text-on-primary px-2.5 py-1.5 font-label-sm text-[10px] gap-1">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-secondary-fixed">CENTRAL TRITON</span>
                        <span>{VERIFIED_NUMBERS.streamRate}</span>
                        <span>{VERIFIED_NUMBERS.primaryThroughput}</span>
                      </div>
                      <div className="text-secondary-container font-semibold">
                        <span>ZERO-COPY SHM</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center justify-between font-label-sm text-[11px] text-ink-muted">
                    <span className="font-semibold text-primary">130+ CAMERAS · 2x NVIDIA L4</span>
                    <span className="font-mono text-secondary font-bold">{VERIFIED_NUMBERS.costReduction}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: AT A GLANCE (Recruiter 60-Second Scan)
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                  60-SECOND RECRUITER BRIEF
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  At a glance.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Verified production numbers delivered across enterprise edge and multimodal AI systems.
              </p>
            </div>

            {/* 6 Ruled Metric Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {AT_A_GLANCE_METRICS.map((item) => (
                <div key={item.label} className="p-5 bg-surface border border-line flex flex-col gap-1.5">
                  <span className="font-metric-numeral text-3xl sm:text-4xl font-bold text-primary">
                    {item.value}
                  </span>
                  <span className="font-label-sm text-xs uppercase font-bold text-secondary tracking-wider">
                    {item.label}
                  </span>
                  <p className="font-body-md text-sm text-ink-muted mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Career Facts Quick Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-paper-raised border border-line font-label-sm text-xs">
              <div>
                <span className="text-ink-muted block uppercase">TARGET ROLES</span>
                <span className="font-semibold text-primary block mt-0.5">{IDENTITY.targetRoles}</span>
              </div>
              <div>
                <span className="text-ink-muted block uppercase">LOCATION</span>
                <span className="font-semibold text-primary block mt-0.5">{IDENTITY.locationDetails}</span>
              </div>
              <div>
                <span className="text-ink-muted block uppercase">NOTICE PERIOD</span>
                <span className="font-semibold text-secondary block mt-0.5">{IDENTITY.noticePeriod} (Negotiable)</span>
              </div>
              <div>
                <span className="text-ink-muted block uppercase">REPLY TIME</span>
                <span className="font-semibold text-primary block mt-0.5">{IDENTITY.replyTime} guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: HOW IT WORKS (Plain-English Architecture with Animation)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 py-16" id="how-it-works">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                  SYSTEM ARCHITECTURE // HOW IT WORKS
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Five steps from camera frame to alert.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                How one centralized server processes 130+ cameras simultaneously without lagging or crashing.
              </p>
            </div>

            {/* 5 Architecture Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {HOW_IT_WORKS_STEPS.map((st) => (
                <div key={st.number} className="p-4 bg-paper-sunken border border-line flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-secondary font-bold">{st.number} / {st.plainTitle}</span>
                    <h3 className="font-headline-md text-lg font-bold text-primary">{st.plainTitle}</h3>
                    <p className="font-body-md text-sm text-ink-muted leading-relaxed">{st.plainDesc}</p>
                  </div>
                  <div className="pt-2 border-t border-line/60">
                    <span className="font-mono text-[11px] text-ink-faint leading-tight block">{st.techDesc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Benchmark Comparison: Naive vs Centralized Triton */}
            <div className="p-6 bg-paper-raised border border-line flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                  MEMORY OPTIMIZATION BENCHMARK
                </span>
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
                  Each camera loads its own model vs. One central server
                </h3>
                <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
                  Measured in production across 130+ cameras on 2x NVIDIA L4 GPUs. Standard architectures replicate model weights per process; centralized Triton shared memory passes frame pointers with zero copying.
                </p>
              </div>

              <div className="w-full lg:w-96 flex flex-col gap-3 bg-surface p-4 border border-line">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-mono text-ink-muted">
                    <span>Each camera loads its own model</span>
                    <span className="font-bold text-primary">{VERIFIED_NUMBERS.modelMemoryNaive}</span>
                  </div>
                  <div className="w-full h-4 bg-surface-variant">
                    <div className="h-full bg-outline-variant w-full"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-mono text-secondary font-bold">
                    <span>Central Triton server (Rajesh design)</span>
                    <span>{VERIFIED_NUMBERS.modelMemoryCentralized}</span>
                  </div>
                  <div className="w-full h-4 bg-surface-variant">
                    <div className="h-full bg-secondary-container w-[15.4%]"></div>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary font-bold rounded-sm">
                    {VERIFIED_NUMBERS.memoryReduction} GPU MEMORY
                  </span>
                  <span>{VERIFIED_NUMBERS.monthlySavings}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: SELECTED PROJECTS (Plain-English first)
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 py-16" id="projects">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                  03 / DELIVERED PRODUCTION SYSTEMS
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Shipped systems.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Not proofs of concept. Enterprise platforms orchestrating compute across mission-critical facilities right now.
              </p>
            </div>

            {/* Project Cards */}
            <div className="flex flex-col divide-y divide-line border-y border-line">
              {PROJECTS.map((proj, idx) => (
                <Link
                  key={proj.id}
                  href={proj.slug}
                  className="group py-8 px-4 sm:px-6 bg-surface hover:bg-paper-raised transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="flex flex-col gap-3 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-secondary">0{idx + 1}</span>
                      <span className="text-ink-faint text-xs font-mono">/</span>
                      <span className="font-label-sm text-xs uppercase text-ink-muted">{proj.role}</span>
                    </div>

                    <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {proj.title}
                    </h3>

                    {/* Plain-English Callout */}
                    <p className="font-body-md text-sm sm:text-base text-primary font-medium leading-relaxed bg-paper-sunken p-3 border-l-2 border-secondary">
                      {proj.plainEnglish}
                    </p>

                    {/* Three Result Numbers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {proj.results.map((res, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                          <span className="text-secondary font-bold">✓</span>
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-paper-sunken border border-line text-[11px] font-mono text-ink-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-secondary font-label-timecode text-xs uppercase font-bold shrink-0 self-start lg:self-center">
                    <span>View case study</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: SKILLS (Plain-English Grouping)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                  04 / TECHNICAL CAPABILITIES
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  What I work with.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Four core engineering competencies backed by 4+ years of real-world production deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="p-6 bg-paper-sunken border border-line flex flex-col gap-3">
                  <h3 className="font-headline-md text-lg font-bold text-primary">{group.title}</h3>
                  <p className="font-body-md text-sm text-secondary font-medium leading-relaxed">
                    {group.plainSentence}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
                    {group.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 bg-surface border border-line text-xs font-mono text-primary font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: CAREER PREVIEW
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block mb-1">
                  05 / CAREER CHRONOLOGY
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Where I have built.
                </h2>
              </div>
              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 text-secondary font-label-timecode text-xs uppercase font-bold hover:underline"
              >
                <span>Read detailed technical playback</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-line border-y border-line bg-surface">
              {EXPERIENCE_ROLES.map((role) => (
                <div key={role.title} className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5 max-w-2xl">
                    <span className="font-headline-md text-lg font-bold text-primary">{role.title}</span>
                    <span className="font-label-sm text-xs text-ink-muted uppercase">
                      {role.company} · {role.location}
                    </span>
                    <p className="font-body-md text-sm sm:text-base text-primary font-medium mt-1">
                      {role.plainSummary}
                    </p>
                  </div>
                  <span className="font-label-timecode text-xs font-bold text-secondary uppercase shrink-0">
                    {role.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: CONTACT CTA
            ========================================================================= */}
        <section className="w-full bg-primary text-on-primary px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-ink-muted/30 pb-3">
              <span className="font-label-timecode text-xs text-secondary-container font-bold uppercase tracking-widest">
                06 / GET IN TOUCH
              </span>
              <span className="font-label-sm text-xs text-surface-dim font-mono">REPLY WITHIN 24 HOURS</span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-mega-display text-3xl sm:text-5xl font-bold text-on-primary tracking-tight">
                Hiring for an AI team? Let's talk.
              </h2>
              <p className="font-body-lg text-sm sm:text-base text-surface-dim max-w-2xl">
                Open to {IDENTITY.targetRoles}. Located in {IDENTITY.locationDetails}. Direct inquiries receive a technical response within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-xs uppercase font-bold tracking-wider rounded-full transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>{copied ? "COPIED TO CLIPBOARD!" : `EMAIL: ${CONTACT_INFO.email}`}</span>
              </button>
              <a
                href={CONTACT_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-colors text-center"
              >
                <span>Download resume (PDF)</span>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-colors text-center"
              >
                <span>LinkedIn</span>
                <span className="font-mono text-secondary-fixed">↗</span>
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-colors text-center"
              >
                <span>GitHub</span>
                <span className="font-mono text-secondary-fixed">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
