'use client';

import React, { useState } from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  IDENTITY,
  VERIFIED_NUMBERS,
  RECRUITER_DOSSIER_TEXT,
  CANDIDATE_FACTS,
  CORE_VALUE_CARDS,
  CONTACT_FAQS,
} from "@/content/facts";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Disclosure } from "@/components/motion/Disclosure";
import { CopyButton } from "@/components/motion/CopyButton";
import { AmbientDot } from "@/components/motion/AmbientDot";
import Icon from "@/components/Icon";

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
                <Stagger className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <StaggerItem>
                    <CopyButton
                      textToCopy={CONTACT_INFO.email}
                      label="Copy Email Address"
                      className="px-4 sm:px-6 py-3 sm:py-3.5 bg-secondary hover:bg-signal-orange-hover text-on-secondary rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.resumeUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <Icon name="download" className="text-[18px]" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-3 sm:py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <span>LinkedIn</span>
                      <Icon name="north_east" className="text-[16px]" />
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a
                      href={CONTACT_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-3 sm:py-3.5 bg-paper-raised hover:bg-surface-container-high text-on-surface border border-line rounded-full font-label-sm text-xs uppercase tracking-wider font-medium transition-colors active:scale-[0.97]"
                    >
                      <span>GitHub</span>
                      <Icon name="north_east" className="text-[16px]" />
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
                    <Icon name="travel_explore" className="text-[16px] text-secondary" />
                    <span><strong>Mobility:</strong> Bangalore onsite/hybrid &bull; Open to sponsored relocation worldwide</span>
                  </div>

                  {/* 1-Click Copy Dossier */}
                  <div className="pt-2 border-t border-line">
                    <CopyButton
                      textToCopy={RECRUITER_DOSSIER_TEXT}
                      label="Copy Recruiter Dossier (Slack / ATS ready)"
                      className="w-full justify-center py-2.5 px-4 bg-paper-sunken hover:bg-surface-container-high text-on-surface border border-line font-label-sm text-xs uppercase tracking-wider font-semibold transition-colors"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Candidate Facts Strip */}
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6 border-t border-line">
              {CANDIDATE_FACTS.map((fact, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex flex-col gap-1 p-3.5 bg-paper-sunken border border-line h-full">
                    <span className="font-label-sm text-xs text-ink-muted uppercase font-semibold">{fact.label}</span>
                    <span className={`font-headline-md text-sm font-bold ${fact.highlight ? 'text-secondary' : fact.success ? 'text-status-success' : 'text-on-surface'}`}>
                      {fact.value}
                    </span>
                    <span className="text-[11px] text-ink-muted">{fact.detail}</span>
                  </div>
                </StaggerItem>
              ))}
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
              {CORE_VALUE_CARDS.map((card, idx) => (
                <StaggerItem key={idx}>
                  <div className="group relative p-6 bg-surface/5 border border-surface-container-highest/20 hover:border-secondary transition-colors flex flex-col justify-between gap-6 h-full">
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    <div className="flex flex-col gap-3">
                      <span className="font-label-timecode text-xs text-secondary uppercase font-bold tracking-wider">
                        {card.number}
                      </span>
                      <h3 className="font-headline-md text-lg sm:text-xl text-surface uppercase">
                        {card.title}
                      </h3>
                      <ul className="flex flex-col gap-2 text-sm text-ink-faint leading-relaxed">
                        {card.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-secondary font-mono">›</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-container-highest/20 text-xs">
                      {card.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-surface/10 text-surface">{tag}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
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
              {CONTACT_FAQS.map((faq, idx) => (
                <Disclosure
                  key={idx}
                  index={idx + 1}
                  question={faq.question}
                  isOpen={openFaqIndex === idx}
                  onToggle={() => toggleFaq(idx)}
                >
                  <p className="font-body-md text-sm sm:text-base text-ink-muted leading-relaxed">
                    {faq.answerText}
                  </p>
                </Disclosure>
              ))}
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
                  <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
                  <Icon name="north_east" className="text-[16px] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
