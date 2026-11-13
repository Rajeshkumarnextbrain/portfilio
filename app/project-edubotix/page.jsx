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
import { GrowBar } from "@/components/motion/GrowBar";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { StickyJumpBar } from "@/components/project/StickyJumpBar";
import { MemoryProgressionDiagram } from "@/components/project/MemoryProgressionDiagram";
import { ProblemSolutionRow } from "@/components/project/ProblemSolutionRow";

const JUMP_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'contribution', label: 'Contribution' },
];

export default function EdubotixPage() {
  const project = PROJECTS[2];

  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">

        {/* ================================================================= */}
        {/* CHAPTER 0: HERO (Paper Surface) */}
        {/* ================================================================= */}
        <section className="w-full bg-surface py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="chapter-0">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            {/* Breadcrumb Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="font-label-sm text-xs text-ink-muted hover:text-secondary uppercase tracking-widest transition-colors">
                  HOME
                </Link>
                <span className="text-line">/</span>
                <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">
                  CASE STUDY: EDUBOTIX
                </span>
              </div>
              <span className="font-label-timecode text-xs text-secondary font-medium">
                MULTIMODAL STEM TUTOR
              </span>
            </div>

            {/* Mega Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="font-mega-display text-[36px] xs:text-[48px] sm:text-[68px] md:text-[92px] lg:text-[110px] leading-[0.92] font-bold text-on-surface uppercase tracking-tight">
                Show your<br />
                <span className="bg-signal-orange-tint text-secondary px-3 py-0.5 inline-block -rotate-1">
                  working.
                </span><br />
                Every answer.
              </h1>
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-ink-muted max-w-3xl leading-relaxed">
                A context-aware multimodal academic intelligence platform that lets students learn from verified curriculum textbooks using natural language, equations, chemistry structures, and photos of homework problems.
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
                  Most AI chatbots make subtle math and physics mistakes because they guess words instead of calculating. Edubotix connects AI to verified curriculum textbooks using RAG (AI that looks up answers in documents). When a student asks a physics or chemistry question, the AI runs all math through verified symbolic calculation tools, shows step-by-step working, and cites the exact textbook page and chapter.
                </p>

                {/* 3-Number Result Strip with CountUp */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-line py-4">
                  <div className="flex flex-col">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value={VERIFIED_NUMBERS.edubotixIngestionSpeed} />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Faster Content Ingestion</span>
                    <span className="text-xs text-ink-muted mt-1">Multi-threaded 15-worker textbook embedding</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary">
                      <CountUp value={VERIFIED_NUMBERS.edubotixScientificTools} />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Scientific Tools Built-in</span>
                    <span className="text-xs text-ink-muted mt-1">RDKit chemistry, Pint SI units, SymPy math</span>
                  </div>
                  <div className="flex flex-col sm:border-l sm:border-line sm:pl-4">
                    <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-on-surface">
                      <CountUp value="100%" />
                    </span>
                    <span className="font-label-sm text-xs text-secondary font-semibold uppercase">Verified Attributions</span>
                    <span className="text-xs text-ink-muted mt-1">{VERIFIED_NUMBERS.edubotixCitations}</span>
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

            {/* Worked Answer Panel */}
            <div className="relative p-6 bg-paper-raised border border-line flex flex-col gap-4">
              <span className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none">⌜</span>
              <span className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none">⌝</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none">⌞</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none">⌟</span>

              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                  STEP-BY-STEP CALCULATION TRACE
                </span>
                <span className="font-label-timecode text-xs text-ink-muted">
                  VERIFIED WITH: PINT (SI UNITS) + SYMPY EVALUATOR
                </span>
              </div>

              <div className="p-3 bg-surface border border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-label-timecode text-ink-muted uppercase">CALCULATION VERIFIED:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-on-surface">5 m/s × 10 s = 50 m</span>
              </div>

              <div className="p-3 bg-surface border border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-label-timecode text-ink-muted uppercase">GROUNDED CITATION:</span>
                <span className="text-xs font-mono text-secondary font-semibold">NCERT Physics Grade 11 · Chapter 3: Motion · Section 3.2 · Page 42</span>
              </div>
            </div>
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
                  Why generic chatbots fail at STEM tutoring.
                </h2>
              </div>
            </Reveal>

            {/* 2-Column Split: Problem vs Solution with Animated ProblemSolutionRow */}
            <ProblemSolutionRow
              problemText="Generic LLMs predict the next statistical token rather than computing deterministic arithmetic. In physics and chemistry, this results in believable but incorrect numbers, invalid chemical bonds, and curriculum drift where answers use out-of-syllabus methods from random websites."
              solutionText="Edubotix pairs an LLM with RAG grounded strictly in approved curriculum textbooks stored in Qdrant. All math and chemistry steps are routed to 9 deterministic tools (SymPy, Pint, RDKit), guaranteeing verified calculations instead of AI guesses."
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
                Dense-sparse hybrid retrieval &amp; scientific tool execution.
              </h2>
            </div>

            {/* Architecture Cards with Stagger */}
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="p-6 bg-paper-raised border border-line hover:border-secondary transition-colors flex flex-col justify-between gap-4 h-full">
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">COMPONENT 01</span>
                    <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase">
                      Hybrid Retrieval (Titan + BM25)
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Combines 1024-dimensional dense semantic vectors (Amazon Titan V2) with sparse lexical BM25 tokens in Qdrant. Ensures domain terms like &ldquo;centripetal acceleration&rdquo; hit the exact formula definition.
                    </p>
                  </div>
                  <span className="text-[10px] font-label-timecode text-ink-muted pt-2 border-t border-line">
                    COSINE + BM25 FUSION
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-paper-raised border border-line hover:border-secondary transition-colors flex flex-col justify-between gap-4 h-full">
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">COMPONENT 02</span>
                    <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase">
                      9 Scientific FastMCP Tools
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      Calculations run in verified tools instead of AI guesses. Pint enforces dimensional SI consistency, SymPy evaluates symbolic fractions, and RDKit validates chemical SMILES structures into clean SVG diagrams.
                    </p>
                  </div>
                  <span className="text-[10px] font-label-timecode text-ink-muted pt-2 border-t border-line">
                    ZERO CALCULATION GUESSWORK
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-6 bg-paper-raised border border-line hover:border-secondary transition-colors flex flex-col justify-between gap-4 h-full">
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">COMPONENT 03</span>
                    <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface uppercase">
                      Progressive Session Memory
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      A sliding-window buffer retains immediate context while an automated 20-turn rolling summary retains long-range pedagogical continuity without context window dilution or high token overhead.
                    </p>
                  </div>
                  <span className="text-[10px] font-label-timecode text-ink-muted pt-2 border-t border-line">
                    STABLE MULTI-HOUR SESSIONS
                  </span>
                </div>
              </StaggerItem>
            </Stagger>

            {/* Progressive Session Memory Diagram */}
            <MemoryProgressionDiagram />
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
                Engineering hurdles &amp; resolutions.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  1. Token-Guessing Arithmetic Failures
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  LLMs consistently made subtle errors in unit arithmetic (e.g. converting km/h to m/s) and molecular balancing.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Calculations run in verified tools instead of AI guesses. Created 9 FastMCP tools with Pint and SymPy, eliminating calculation hallucinations completely.
                </div>
              </div>

              <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">
                  2. Slow Textbook Ingestion at Scale
                </div>
                <div className="md:col-span-4 text-xs text-ink-muted leading-relaxed">
                  <strong className="text-on-surface block mb-1">Problem:</strong>
                  Chunking, extracting LaTeX, and generating dual dense-sparse embeddings for full science textbooks took hours per book.
                </div>
                <div className="md:col-span-4 text-xs text-on-surface leading-relaxed p-3 bg-paper-raised border border-line">
                  <strong className="text-secondary block mb-1">Fix & Result:</strong>
                  Built a 15-worker multi-threaded batch ingestion pipeline with rate-limited Bedrock connection pooling, achieving &gt;70% faster textbook ingestion.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 4: RESULTS */}
        {/* ================================================================= */}
        <section className="w-full bg-primary text-on-primary py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-surface-container-highest/20" id="results">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                04 / RESULTS
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-surface uppercase tracking-tight">
                Pedagogical and system results.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* GrowBar for >70% faster */}
              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between gap-2">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">CONTENT INGESTION</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-secondary mt-1">
                  <CountUp value=">70%" />
                </span>
                <div className="w-full h-2 bg-surface/10 rounded-full overflow-hidden mt-1">
                  <GrowBar targetPercent={70} className="h-full bg-secondary" delay={0.3} />
                </div>
                <span className="text-xs text-ink-faint mt-1">Faster textbook indexing pipeline</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">SCIENTIFIC TOOLS</span>
                <span className="font-metric-numeral text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value="9" />
                </span>
                <span className="text-xs text-ink-faint mt-1">Deterministic calculations</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">CALCULATIONS</span>
                <span className="font-headline-lg text-lg sm:text-xl font-bold text-status-success mt-2">VERIFIED</span>
                <span className="text-xs text-ink-faint mt-1">Calculations run in verified tools</span>
              </div>

              <div className="p-4 bg-surface/5 border border-surface-container-highest/20 flex flex-col justify-between">
                <span className="font-label-sm text-xs text-ink-faint uppercase font-semibold">SOURCE CITATIONS</span>
                <span className="font-headline-lg text-2xl sm:text-3xl font-bold text-surface mt-2">
                  <CountUp value="100%" />
                </span>
                <span className="text-xs text-ink-faint mt-1">Exact chapter, page &amp; section cited</span>
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
                Architectural ownership.
              </h2>
            </div>

            <div className="flex flex-col border-t border-line divide-y divide-line">
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">Hybrid Retrieval Architecture</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Architected dual dense-sparse vector indexing combining Amazon Titan V2 embeddings with BM25 sparse postings in Qdrant.
                </span>
              </div>
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">Scientific FastMCP Suite</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Developed the FastMCP tool server wrapping SymPy, Pint, and RDKit to execute deterministic scientific computations.
                </span>
              </div>
              <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4">
                <span className="md:col-span-4 font-headline-md text-base sm:text-lg font-bold text-on-surface">Progressive Session Memory</span>
                <span className="md:col-span-8 text-xs text-ink-muted leading-relaxed">
                  Engineered sliding-window conversation retention with automated 20-turn rolling summaries in MongoDB.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CHAPTER 6: TECH STACK */}
        {/* ================================================================= */}
        <section className="w-full bg-paper-sunken py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-line" id="stack">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-xs text-secondary font-semibold uppercase tracking-wider">
                06 / TECH STACK
              </span>
              <h2 className="font-headline-lg lg:font-display text-2xl sm:text-4xl text-on-surface uppercase tracking-tight">
                Built with.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">FOUNDATION MODELS</span>
                <span className="text-xs font-semibold text-on-surface">AWS Bedrock (Claude 3.5 Sonnet, Titan V2)</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">VECTOR DATABASE</span>
                <span className="text-xs font-semibold text-on-surface">Qdrant (Dense-Sparse Hybrid Vector Search)</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">SCIENTIFIC ENGINES</span>
                <span className="text-xs font-semibold text-on-surface">FastMCP, SymPy, Pint, RDKit, KaTeX</span>
              </div>
              <div className="p-4 bg-paper-raised border border-line flex flex-col gap-2">
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">BACKEND &amp; STORAGE</span>
                <span className="text-xs font-semibold text-on-surface">FastAPI, Python 3.11, MongoDB, Redis, Docker</span>
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
              <Link href="/project-analytics-agent" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-ink-muted uppercase">PREVIOUS PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">← Analytics Agent</span>
                <span className="text-xs text-ink-muted">Two pipelines (Ask &amp; Watch) across 5 data domains</span>
              </Link>
              <Link href="/project-visionfacts" className="p-6 hover:bg-paper-sunken transition-colors flex flex-col gap-1">
                <span className="text-xs font-label-sm text-secondary uppercase font-semibold">FLAGSHIP PROJECT</span>
                <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">VisionFacts.ai Core →</span>
                <span className="text-xs text-ink-muted">130+ camera live video analytics platform</span>
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
