'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    const email = "rajesh.kumar.ai@example.com";
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/10 blur-[120px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-12 relative z-10">

<section className="flex flex-col gap-6 max-w-4xl">

<div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-container-low border border-primary/20 w-fit"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono-label text-caption text-primary tracking-wide uppercase font-semibold">Actively Seeking Full-Time Senior / Staff AI Roles</span></div>

<div className="flex flex-col gap-3"><h1 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.15] sm:leading-[1.1] text-on-surface tracking-tight">Let's connect for <span className="text-primary selection:text-surface">engineering leadership &amp; staff AI roles.</span></h1>
<p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl">
  Actively interviewing with visionary engineering teams building production AI systems. Open to Senior, Lead, or Staff AI Engineer opportunities—available for technical architecture interviews, team leadership discussions, and remote or hybrid roles.
</p></div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"><div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span aria-hidden="true" className="material-symbols-outlined text-[20px] text-primary">bolt</span>
<div className="flex flex-col">
<span className="font-mono-label text-caption text-secondary">Notice Period / Start</span>
<span className="font-mono-code text-body-sm font-semibold text-on-surface">Immediate to 30 Days</span>
</div>
</div>
<div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span aria-hidden="true" className="material-symbols-outlined text-[20px] text-primary">badge</span>
<div className="flex flex-col">
<span className="font-mono-label text-caption text-secondary">Preferred Role Scope</span>
<span className="font-mono-code text-body-sm font-semibold text-on-surface">Senior / Lead / Staff AI</span>
</div>
</div>
<div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
<span aria-hidden="true" className="material-symbols-outlined text-[20px] text-primary">distance</span>
<div className="flex flex-col">
<span className="font-mono-label text-caption text-secondary">Location Preference</span>
<span className="font-mono-code text-body-sm font-semibold text-on-surface">Bangalore · Hybrid / Remote / Reloc.</span>
</div>
</div></div>
</section>

<section className="flex flex-col gap-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-primary font-mono-code text-caption uppercase tracking-wider">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">verified</span>
<span>Static Direct Routing · Zero Intermediaries</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Direct Channels for Hiring Teams &amp; Engineering Leaders</h2>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all active:scale-[0.98] shadow-[0_0_24px_rgba(118,185,0,0.2)]" href="mailto:rajesh.kumar.ai@example.com">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">mail</span>
<span>Direct Email</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/40 font-mono-code text-body-sm transition-colors" download="" href="#">
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-primary">download</span>
<span>Resume PDF</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

<div className="p-6 sm:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between gap-6 shadow-lg">
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono-label text-caption text-primary uppercase font-medium flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">alternate_email</span>
              Primary Channel
            </span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Primary Direct Coordinates</h3>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container text-primary font-mono-code text-caption border border-primary/20 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Active Inbox
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
          Hiring teams, recruiters, and engineering leaders can reach out directly via encrypted inbox or calendar invite for high-signal technical alignment.
        </p>

<div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
<div className="flex items-center gap-2.5 min-w-0">
<span aria-hidden="true" className="material-symbols-outlined text-primary text-[20px]">alternate_email</span>
<div className="flex flex-col min-w-0">
<span className="font-mono-label text-[11px] text-secondary">Primary Address</span>
<span className="font-mono-code text-body-sm text-on-surface truncate" id="primary-email-text">rajesh.kumar.ai@example.com</span>
</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-secondary hover:text-primary border border-outline-variant/30 font-mono-code text-caption transition-colors flex items-center gap-1.5" id="copy-email-btn" onClick={handleCopyEmail} title="Copy Email" type="button">
<span aria-hidden="true" className="material-symbols-outlined text-[15px]">content_copy</span>
<span id="copy-btn-label">{copied ? "Copied!" : "Copy"}</span>
</button>
</div>

<div className="flex flex-col gap-2 font-mono-code text-caption">
<div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
<span className="text-secondary flex items-center gap-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-outline">location_city</span>
              Location Hub
            </span>
<span className="text-on-surface font-medium text-right">Bangalore, Karnataka (Indiranagar / ORR)</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
<span className="text-secondary flex items-center gap-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-outline">schedule</span>
              Timezone Alignment
            </span>
<span className="text-on-surface font-medium text-right">IST (UTC+5:30) · US &amp; EU overlaps</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
<span className="text-secondary flex items-center gap-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary">bolt</span>
              Response SLA
            </span>
<span className="text-primary font-medium">&lt; 24 Hours (Guaranteed)</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
<span className="text-secondary flex items-center gap-2">
<span aria-hidden="true" className="material-symbols-outlined text-[16px] text-outline">lock</span>
              PGP / Encrypted Comms
            </span>
<span className="text-on-surface font-medium text-right">Signal / Session upon request</span>
</div>
</div>
</div>
<a className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all active:scale-[0.98] shadow-[0_0_24px_rgba(118,185,0,0.2)]" href="mailto:rajesh.kumar.ai@example.com">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">mail</span>
<span>Send Direct Email to Rajesh</span>
</a>
</div>

<div className="p-6 sm:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between gap-6 shadow-lg">
<div className="flex flex-col gap-5">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-mono-label text-caption text-primary uppercase font-medium flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">speed</span>
              Recruitment Expedited
            </span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Fast-Track Hiring Channels &amp; Links</h3>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container text-secondary font-mono-code text-caption border border-outline-variant/30">
            Direct Route
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
          Fastest routing for hiring managers, technical talent partners, and CTOs seeking verified credentials and quick calendar sync.
        </p>

<div className="flex flex-col gap-2.5">

<a className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container transition-all group" href="https://linkedin.com/in/rajesh-kumar-ai" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3 min-w-0">
<div className="p-2 rounded bg-surface-container text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
<span aria-hidden="true" className="material-symbols-outlined text-[18px]">link</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-mono-code text-body-sm font-semibold text-on-surface">LinkedIn Profile</span>
<span className="px-2 py-0.2 rounded-full bg-primary/10 text-primary font-mono-label text-[11px] border border-primary/20">Preferred for Recruiters</span>
</div>
<span className="font-mono-code text-caption text-secondary truncate">linkedin.com/in/rajesh-kumar-ai</span>
</div>
</div>
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">north_east</span>
</a>



</div>
</div>

<div className="flex flex-col gap-3">
<a className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/40 font-mono-code text-body-sm font-semibold hover:border-primary/50 transition-all" href="#">
<span aria-hidden="true" className="material-symbols-outlined text-[18px] text-primary">description</span>
<span>Download Full Resume (PDF)</span>
</a>
<div className="flex items-center justify-center gap-1.5 text-center text-secondary font-mono-code text-[11px]">
<span aria-hidden="true" className="material-symbols-outlined text-[14px] text-primary">check_circle</span>
<span>Zero backend dependencies · 100% static &amp; instant response</span>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-4">
<div className="flex items-center gap-2.5">
<span aria-hidden="true" className="material-symbols-outlined text-[20px] text-primary">verified</span>
<h3 className="font-mono-code text-body-sm font-semibold text-on-surface uppercase tracking-wider">Core Engineering Fit &amp; Candidate Dossier</h3>
</div>
<span className="font-mono-code text-caption text-secondary">4 Pillars · Senior / Staff Scope</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-2 font-mono-code text-caption hover:border-primary/40 transition-colors">
<span className="text-primary font-semibold text-body-sm flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">videocam</span>Computer Vision &amp; Video
        </span>
<span className="text-secondary leading-relaxed">4+ yrs in production, 150+ RTSP streams, DeepStream, Triton Inference Server, low-latency tracking.</span>
</div>
<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-2 font-mono-code text-caption hover:border-primary/40 transition-colors">
<span className="text-primary font-semibold text-body-sm flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">neurology</span>GenAI &amp; Multimodal LLMs
        </span>
<span className="text-secondary leading-relaxed">Gemma, LangGraph DAGs, deterministic tool-calling, RAG architectures, and multimodal eval harnesses.</span>
</div>
<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-2 font-mono-code text-caption hover:border-primary/40 transition-colors">
<span className="text-primary font-semibold text-body-sm flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">memory</span>GPU Optimization &amp; Edge
        </span>
<span className="text-secondary leading-relaxed">TensorRT, AWQ/FP8 quantization, Jetson Orin deployment, zero-copy CUDA IPC, sub-50ms latency SLAs.</span>
</div>
<div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 flex flex-col gap-2 font-mono-code text-caption hover:border-primary/40 transition-colors">
<span className="text-primary font-semibold text-body-sm flex items-center gap-1.5">
<span aria-hidden="true" className="material-symbols-outlined text-[16px]">groups</span>Engineering Leadership
        </span>
<span className="text-secondary leading-relaxed">Mentored 3–5 engineers, architecture whiteboard deep-dives, production reliability, sprint orchestration.</span>
</div>
</div>
</div></section>

<section className="flex flex-col gap-6 pt-6">
<div className="flex flex-col gap-1 border-b border-outline-variant/30 pb-4"><span className="font-mono-label text-caption uppercase text-primary tracking-widest">Candidate Logistics &amp; Preferences</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Hiring Logistics &amp; FAQ</h2></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary font-mono-code text-body-sm font-semibold">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">badge</span>
<span>Target Roles &amp; Leveling</span>
</div>
<h3 className="font-headline-md text-body-lg text-on-surface font-semibold leading-snug">
    What specific full-time positions are you prioritizing?
  </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
    Actively interviewing for Lead AI Engineer, Staff Computer Vision Engineer, and Principal GenAI Systems roles. Seeking high-ownership engineering challenges building production video analytics, low-latency inference clusters, or multimodal agent architectures.
  </p>
</div>

<div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary font-mono-code text-body-sm font-semibold">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">location_city</span>
<span>Work Authorization &amp; Location</span>
</div>
<h3 className="font-headline-md text-body-lg text-on-surface font-semibold leading-snug">
    What are your location preferences and work arrangements?
  </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
    Based in Bangalore, India (available immediately for onsite/hybrid across Outer Ring Road, Indiranagar, Whitefield, Electronic City). Also open to remote-first global teams and open to sponsored relocation for Tier-1 AI tech hubs.
  </p>
</div>

<div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary font-mono-code text-body-sm font-semibold">
<span aria-hidden="true" className="material-symbols-outlined text-[20px]">schedule</span>
<span>Interview Process &amp; Notice</span>
</div>
<h3 className="font-headline-md text-body-lg text-on-surface font-semibold leading-snug">
    What is your notice period and preferred interview format?
  </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
    Currently available with a standard 30-day notice period. Open to technical deep-dives, systems architecture whiteboard discussions, and take-home engineering challenges reflecting real-world GPU and inference systems.
  </p>
</div></div>
</section>
</div>
</div>
</div>

    </div>
  );
}
