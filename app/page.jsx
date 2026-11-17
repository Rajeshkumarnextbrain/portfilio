import Link from "next/link";
import {
  IDENTITY,
  VERIFIED_NUMBERS,
  CONTACT_INFO,
  PROOF_METRICS,
  AT_A_GLANCE_METRICS,
  BUSINESS_IMPACT_ITEMS,
  PROJECTS,
  EXPERIENCE_ROLES,
  EDUCATION,
} from "../content/facts";

import { HeroHeadline } from "@/components/home/HeroHeadline";
import { HeroLiveDemo } from "@/components/home/HeroLiveDemo";
import { AtAGlanceSection } from "@/components/home/AtAGlanceSection";
import { BusinessImpactSection } from "@/components/home/BusinessImpactSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { CountUp } from "@/components/motion/CountUp";
import { AmbientDot } from "@/components/motion/AmbientDot";
import { Reveal } from "@/components/motion/Reveal";
import { DrawLine } from "@/components/motion/DrawLine";
import Icon from "@/components/Icon";

export default function HomePage() {
  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">

        {/* =========================================================================
            CHAPTER 00: HERO (Paper / Warm Tactile Surface)
            ========================================================================= */}
        <section className="relative w-full bg-surface px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 border-b border-line overflow-hidden min-h-[calc(100svh-100px)] flex flex-col justify-center">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto relative z-10 w-full flex flex-col gap-6 sm:gap-8 my-auto">
            {/* Top Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-secondary shrink-0"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-semibold">
                  PORTFOLIO // {IDENTITY.headlineRole}
                </span>
              </div>
              <div className="flex items-center gap-2 font-label-timecode text-xs text-ink-muted">
                <AmbientDot color="bg-status-success" size="w-2 h-2" />
                <span>STATUS: AVAILABLE FOR HIRE · {IDENTITY.location}</span>
              </div>
            </div>

            {/* Mega Hero Grid Layout - Vertically Centered */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Typography & Intent */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                {/* Animated Line-by-Line Hero Headline */}
                <HeroHeadline />

                {/* Plain-English Explainer Layer */}
                <div className="p-3.5 sm:p-4 bg-paper-sunken border-l-4 border-secondary border border-line rounded-DEFAULT">
                  <p className="font-body-md text-sm sm:text-base text-primary font-medium leading-snug">
                    In simple terms, I build software that:
                  </p>
                  <ul className="mt-1.5 space-y-1 font-body-md text-xs sm:text-[13.5px] text-ink-muted list-disc list-inside">
                    {IDENTITY.simpleTermsBullets?.map((bullet, idx) => (
                      <li key={idx}>
                        <strong className="text-primary font-semibold">{bullet.title}</strong> {bullet.detail}
                      </li>
                    ))}
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
                    <Icon name="download" className="text-[18px] transition-transform duration-150 group-hover:translate-y-[2px]" />
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
                    <Icon name="mail" className="text-[18px] transition-transform duration-150 group-hover:translate-x-[2px]" />
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

              {/* Right Column: Interactive Live Demo Simulation */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <HeroLiveDemo />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: AT A GLANCE (6 Ruled Rows + Verified Career Facts)
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-10">
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

            <AtAGlanceSection metrics={AT_A_GLANCE_METRICS} identity={IDENTITY} education={EDUCATION[0]} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: BUSINESS IMPACT & ROI (Costing, Efficiency, Turnaround)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    02 / BUSINESS IMPACT &amp; COSTING
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  Engineering that solves business problems.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                How technical decisions translate directly into cloud cost savings, operational fatigue reduction, and instant decision making.
              </p>
            </div>

            <BusinessImpactSection items={BUSINESS_IMPACT_ITEMS} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: PROJECTS (Interactive Ruled Rows)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20 scroll-mt-16" id="projects">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
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
                  Five systems shipped to real users.
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
            SECTION: SKILLS (Plain-English Grouping with Highlighted Tools)
            ========================================================================= */}
        <section className="w-full bg-surface border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-label-timecode text-xs text-secondary font-bold uppercase tracking-widest block">
                    04 / SKILLS
                  </span>
                  <div className="w-24">
                    <DrawLine className="h-[1px] w-full bg-secondary" />
                  </div>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl font-bold text-primary tracking-tight">
                  What I can do for your team.
                </h2>
              </div>
              <p className="font-body-md text-sm sm:text-base text-ink-muted max-w-md">
                Skills explained in plain English with highlighted production tools and algorithms.
              </p>
            </div>

            <SkillsSection />
          </div>
        </section>

        {/* =========================================================================
            SECTION: CAREER PREVIEW
            ========================================================================= */}
        <section className="w-full bg-paper-sunken border-b border-line px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-10">
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
                className="inline-flex items-center gap-1.5 text-secondary font-label-timecode text-[13px] uppercase font-bold hover:underline group"
              >
                <span>See full experience</span>
                <Icon name="arrow_forward" className="text-[16px] transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>

            <ExperiencePreview roles={EXPERIENCE_ROLES} education={EDUCATION[0]} />
          </div>
        </section>

        {/* =========================================================================
            SECTION: CONTACT CTA
            ========================================================================= */}
        <section className="w-full bg-primary text-on-primary px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex flex-col gap-8">
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
                <Icon name="mail" className="text-[18px]" />
                <span>Email Rajesh</span>
                <Icon name="arrow_forward" className="text-[16px] transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              <a
                href={CONTACT_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <Icon name="download" className="text-[16px] transition-transform duration-150 group-hover:translate-y-[2px]" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <span>LinkedIn</span>
                <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-4 border border-surface-dim/40 hover:border-surface text-surface font-label-timecode text-xs uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
              >
                <span>GitHub</span>
                <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
