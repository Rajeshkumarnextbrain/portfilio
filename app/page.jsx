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

import { HeroHeadline } from "@/components/home/HeroHeadline";
import { HeroIllustration } from "@/components/home/HeroIllustration";
import { AtAGlanceSection } from "@/components/home/AtAGlanceSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { CountUp } from "@/components/motion/CountUp";
import { AmbientDot } from "@/components/motion/AmbientDot";
import { Reveal } from "@/components/motion/Reveal";
import { DrawLine } from "@/components/motion/DrawLine";

export default function HomePage() {
  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">

        {/* =========================================================================
            CHAPTER 00: HERO (Paper / Warm Tactile Surface)
            ========================================================================= */}
        <section className="relative w-full bg-surface px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-b border-line overflow-hidden min-h-[calc(100svh-64px)] flex flex-col justify-center">
          {/* Viewfinder Background Guidelines (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none opacity-30">
            <div className="max-w-7xl mx-auto h-full relative border-x border-dashed border-line"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col gap-6 sm:gap-8 my-auto">
            {/* Top Availability Pill */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper-raised border border-line rounded-full shadow-sm text-xs font-label-timecode font-semibold tracking-wider text-primary uppercase">
                {/* Ambient Loop 1: Green Available Dot Pulse */}
                <AmbientDot color="bg-status-success" size="w-2 h-2" />
                <span>AVAILABLE FOR HIRE · {IDENTITY.noticePeriod} NOTICE · {IDENTITY.location}</span>
              </div>
              <div className="font-label-timecode text-xs text-ink-muted flex items-center gap-2 flex-wrap">
                <span className="text-secondary font-bold">●</span>
                <span>{VERIFIED_NUMBERS.cameras} CAMERAS LIVE</span>
                <span className="text-ink-faint">/</span>
                <span>{VERIFIED_NUMBERS.memoryReduction} GPU MEMORY</span>
              </div>
            </div>

            {/* Mega Hero Grid Layout - Vertically Centered */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Typography & Intent */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                {/* Eyebrow: Headline Role */}
                <div className="font-body-md text-[13px] sm:text-[14px] text-ink-muted font-medium">
                  {IDENTITY.headlineRole}
                </div>

                {/* Animated Line-by-Line Hero Headline */}
                <HeroHeadline />

                {/* Plain-English Explainer Layer */}
                <div className="p-3.5 sm:p-4 bg-paper-sunken border-l-4 border-secondary border border-line rounded-DEFAULT">
                  <p className="font-body-md text-sm sm:text-base text-primary font-medium leading-snug">
                    In simple terms, I build software that:
                  </p>
                  <ul className="mt-1.5 space-y-1 font-body-md text-xs sm:text-[13.5px] text-ink-muted list-disc list-inside">
                    <li><strong className="text-primary font-semibold">Watches security cameras</strong> and spots safety problems automatically.</li>
                    <li><strong className="text-primary font-semibold">Lets managers ask questions</strong> about company data and get reports in plain English.</li>
                    <li><strong className="text-primary font-semibold">Helps students learn</strong> from their verified curriculum textbooks.</li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href={CONTACT_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary hover:bg-neutral-800 text-on-primary font-body-md text-[15px] sm:text-base font-semibold rounded-full transition-all duration-150 shadow-sm text-center active:scale-[0.97] group"
                  >
                    <span>Download resume (PDF)</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-150 group-hover:translate-y-[2px]">
                      download
                    </span>
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-paper-raised hover:bg-paper-sunken text-primary border border-line font-body-md text-[15px] sm:text-base font-semibold rounded-full transition-colors duration-150 text-center active:scale-[0.97]"
                  >
                    <span>View projects</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-body-md text-[15px] sm:text-base font-semibold rounded-full transition-colors duration-150 text-center active:scale-[0.97] group"
                  >
                    <span>Email me</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-150 group-hover:translate-x-[2px]">
                      mail
                    </span>
                  </a>
                </div>

                {/* Proof Row (4 Verified Numbers Counting Up) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 pb-1 border-t border-line">
                  {PROOF_METRICS.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="font-metric-numeral text-xl sm:text-2xl font-bold text-primary">
                        <CountUp value={metric.value} />
                      </span>
                      <span className="font-label-sm text-[11px] sm:text-[12px] text-ink-muted uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Precision Viewfinder Screen Simulation */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: AT A GLANCE (6 Ruled Rows + Verified Career Facts)
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-1 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                  01 / AT A GLANCE
                </span>
                <div className="w-24">
                  <DrawLine className="h-[1px] w-full bg-secondary" />
                </div>
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                What you need to know in 30 seconds.
              </h2>
            </div>

            <AtAGlanceSection metrics={AT_A_GLANCE_METRICS} identity={IDENTITY} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: HOW IT WORKS (Plain-English 5 Steps)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    02 / ARCHITECTURE BLUEPRINT
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  How the video pipeline works.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                How one centralized server processes 130+ cameras simultaneously without lagging or crashing.
              </p>
            </div>

            <HowItWorksSection
              steps={HOW_IT_WORKS_STEPS}
              modelMemoryNaive={VERIFIED_NUMBERS.modelMemoryNaive}
              modelMemoryCentralized={VERIFIED_NUMBERS.modelMemoryCentralized}
              memoryReduction={VERIFIED_NUMBERS.memoryReduction}
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION: PROJECTS (Interactive Ruled Rows)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20" id="projects">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    03 / PRODUCTION CASE STUDIES
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Three systems shipped to real users.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Not proofs of concept. Enterprise platforms orchestrating compute across mission-critical facilities right now.
              </p>
            </div>

            <ProjectsSection projects={PROJECTS} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: SKILLS (Plain-English Grouping)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    04 / TECHNICAL CAPABILITIES
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  What I work with.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Four core engineering competencies backed by 4+ years of real-world production deployments.
              </p>
            </div>

            <SkillsSection skillGroups={SKILL_GROUPS} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: CAREER PREVIEW
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    05 / CAREER CHRONOLOGY
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Where I have built.
                </h2>
              </div>
              <Link
                href="/experience"
                className="inline-flex items-center gap-1.5 text-secondary font-label-timecode text-xs uppercase font-bold hover:underline group"
              >
                <span>Read detailed technical playback</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>

            <ExperiencePreview roles={EXPERIENCE_ROLES} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: CONTACT CTA
            ========================================================================= */}
        <section className="w-full bg-primary text-on-primary px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-ink-muted/30 pb-3">
              <div className="flex items-center gap-2">
                <AmbientDot color="bg-secondary" size="w-2 h-2" />
                <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest">
                  06 / LET&apos;S TALK
                </span>
              </div>
              <span className="font-label-sm text-xs text-ink-faint">
                {IDENTITY.timezone} · {IDENTITY.replyTime}
              </span>
            </div>

            <Reveal>
              <div className="flex flex-col gap-3">
                <h2 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl font-bold text-surface tracking-tight uppercase">
                  Let&apos;s build the next pipeline.
                </h2>
                <p className="font-body-md text-base sm:text-lg text-ink-faint max-w-2xl leading-relaxed">
                  Open to {IDENTITY.targetRoles}. Available for technical architecture whiteboards, code reviews, and leadership interviews.
                </p>
              </div>
            </Reveal>

            {/* Action Buttons with Stagger */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-xs uppercase font-bold tracking-wider rounded-full transition-all duration-150 shadow-sm active:scale-[0.97] group"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Email Rajesh</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

              <a
                href={CONTACT_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:translate-y-[2px]">
                  download
                </span>
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  north_east
                </span>
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                  north_east
                </span>
              </a>
            </div>

            <div className="pt-6 border-t border-ink-muted/30 flex flex-wrap items-center justify-between gap-4 text-xs font-label-timecode text-ink-faint">
              <div>
                © 2026 {IDENTITY.name} · {IDENTITY.location}
              </div>
              <div className="text-status-success font-semibold">
                Available for hire · {IDENTITY.noticePeriod} notice
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
