# Design System & Architecture Specification
**Project:** Rajesh Kumar S — Senior AI Engineer Portfolio & Systems Showcase  
**Version:** 2.0.0  
**Stack:** Next.js 14 (App Router), Tailwind CSS 3.4, React 18, JetBrains Mono, Inter  
**Last Updated:** November 2026  

---

## Table of Contents
1. [Design Foundation](#1-design-foundation)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Layout and Grid System](#4-layout-and-grid-system)
5. [Shape and Elevation](#5-shape-and-elevation)
6. [Component Library](#6-component-library)
7. [Component States and Interactions](#7-component-states-and-interactions)
8. [Iconography and Imagery](#8-iconography-and-imagery)
9. [Page Design & Structure Breakdown](#9-page-design--structure-breakdown)
   - [9.1 Home Page (`/`)](#91-home-page-)
   - [9.2 Experience Page (`/experience`)](#92-experience-page-experience)
   - [9.3 Contact Page (`/contact`)](#93-contact-page-contact)
   - [9.4 Case Study: VisionFacts.ai (`/project-visionfacts`)](#94-case-study-visionfactsai-project-visionfacts)
   - [9.5 Case Study: VisionFacts Analytics Agent (`/project-analytics-agent`)](#95-case-study-visionfacts-analytics-agent-project-analytics-agent)
   - [9.6 Case Study: Edubotix (`/project-edubotix`)](#96-case-study-edubotix-project-edubotix)

---

## 1. Design Foundation

### 1.1 Philosophy & Identity
The portfolio is designed as an **engineering console and high-density technical dossier** rather than a generic creative showcase. Every design decision reflects the core domain of its author: high-throughput GPU model serving, low-latency video pipelines (RTSP, DeepStream, Triton), Vision-Language Models (Gemma E4B), and autonomous multi-agent reasoning.

* **Data-Dense & Metric-Grounded:** Prioritizes concrete engineering artifacts—latency benchmarks (p95 < 100ms), GPU memory deltas (125GB → 20GB), architectural diagrams, execution topologies, and verified production figures over vague superlatives.
* **Cyber-Industrial Terminal Aesthetic:** Deep dark surfaces (`#0a0e13` to `#1c2025`) paired with electric phosphor accents (`#94da32`, `#76b900`) inspired by high-end workstation consoles (NVIDIA NGC, Grafana, Nsight Compute).
* **Zero-Fluff Technical Authenticity:** Code snippets, terminal logs, ASCII data flows, and hardware accelerator specifications reflect real production infrastructure.
* **Instantaneous Performance:** Static prerendering (`Static 9/9 routes`), zero client-side hydration drift, custom shimmer loaders, and CSS-level overflow containment guarantee sub-second load times on mobile and edge devices.

### 1.2 Design Pillars
1. **Clarity Over Novelty:** Clean hierarchy, high contrast text (WCAG AAA compliance), and structured navigation ensure recruiters, hiring managers, and CTOs find key qualifications within 15 seconds.
2. **Deep Technical Immersion:** Case studies provide complete 8-section technical postmortems detailing architectural tradeoffs, failure modes, MCP tools, and hardware constraints.
3. **Flawless Mobile Fluidity:** Custom breakpoint adaptations (`xs: 480px`, `overflow-x: clip`, fluid typography) provide an app-like experience on compact handheld devices.

---

## 2. Color System

The palette implements a high-contrast dark theme utilizing CSS variables and semantic Tailwind tokens. Colors are grouped into functional tiers: Surfaces, Accents, Secondary Accents, and System Status indicators.

### 2.1 Surfaces & Backgrounds (Dark Elevation)
Surfaces use a stepped elevation hierarchy where higher z-index and interactive layers receive incrementally brighter tones to create spatial depth without jarring drop shadows:

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `surface-container-lowest` | `#0a0e13` | Root canvas, body background, extreme low-light base |
| `surface` / `background` | `#101419` | Default layout backdrop, base section container |
| `surface-container-low` | `#181c21` | Inner cards, simulation canvas, timeline containers |
| `surface-container` | `#1c2025` | Primary content cards, benchmark panels, hero cards |
| `surface-container-high` | `#262a30` | Elevated hover states, active filter buttons, chips |
| `surface-container-highest` | `#31353b` | Floating modals, tooltips, sticky nav headers |
| `surface-bright` | `#36393f` | Highlighted cards, active interactive outlines |

### 2.2 Primary Brand & Phosphor Accents
The primary color is an electric neon lime/cyber green evoking terminal phosphorus and NVIDIA accelerator hardware:

| Token | Hex Value | Usage / Description |
| :--- | :--- | :--- |
| `primary` | `#94da32` | Key headlines, active links, primary metrics, live pulses |
| `primary-container` | `#76b900` | CTA button fills, high-emphasis status chips |
| `on-primary` | `#203700` | Text label rendered over `primary` buttons |
| `on-primary-container` | `#284400` | High-contrast dark text rendered over `primary-container` |
| `primary-fixed` | `#aff74e` | Unconditionally bright accent highlight |
| `primary-subtle` | `rgba(148, 218, 50, 0.1)` | Tinted background containers and outline borders |

### 2.3 Secondary, Tertiary & Domain Accents
Used for domain categorization, badge classification, and multi-stream telemetry:

| Token | Hex Value | Domain / Usage |
| :--- | :--- | :--- |
| `secondary` | `#c1c7d3` | Body copy, supporting descriptions, secondary metadata |
| `on-surface` | `#e0e2ea` | Primary readable headline text, crisp foreground copy |
| `outline` | `#8c947d` | Section numbers, subtle metadata tags, inactive borders |
| `outline-variant` | `#424936` | Card dividers, hairline section borders (`rgba(66,73,54,0.4)`) |
| **Cyber Blue** | `#38bdf8` | Multi-Agent AI domain, PPE verification boxes, networking |
| **Purple Accent** | `#a855f7` | Academic RAG domain (Edubotix), scientific MCP tools |
| **Amber Warning** | `#f59e0b` | Pipeline telemetry cautions, dynamic batching thresholds |
| `error` | `#ffb4ab` | Severe validation errors, RTSP connection drops |

---

## 3. Typography System

The typography pairs **Inter** (clean, ultra-legible neo-grotesque sans-serif) for narrative copy with **JetBrains Mono** (monospace font tailored for developers) for code, metrics, and systems metadata.

### 3.1 Type Families
* **Primary Sans:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
* **Technical Monospace:** `"JetBrains Mono", Menlo, Monaco, Consolas, monospace`

### 3.2 Type Scale & Tokens

| Token Name | Font Family | Size (Desktop / Mobile) | Line Height | Weight | Tracking | Primary Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display` | Inter | 3.5rem (56px) / 2.25rem (36px) | 1.1 | 700 (Bold) | -0.03em | Hero statement headlines |
| `headline-xl` | Inter | 2.5rem (40px) / 1.75rem (28px) | 1.2 | 600 (Semibold) | -0.025em | Major section titles, case study headers |
| `headline-lg` | Inter | 1.75rem (28px) / 1.5rem (24px) | 1.3 | 600 (Semibold) | -0.02em | Subsection headers, benchmark titles |
| `headline-md` | Inter | 1.25rem (20px) / 1.125rem (18px) | 1.4 | 600 (Semibold) | -0.015em | Card titles, role headers, key takeaways |
| `body-lg` | Inter | 1.125rem (18px) / 1.0rem (16px) | 1.6 | 400 (Regular) | -0.01em | Lead paragraphs, case study intros |
| `body-md` | Inter | 1.0rem (16px) / 0.875rem (14px) | 1.6 | 400 (Regular) | -0.005em | Default body text, descriptive lists |
| `body-sm` | Inter | 0.875rem (14px) / 0.75rem (12px) | 1.5 | 400 (Regular) | 0.0em | Supporting card copy, bullet points |
| `mono-metric` | JetBrains Mono | 2.0rem (32px) / 1.25rem (20px) | 1.1 | 600 (Semibold) | -0.03em | Key numerical outcomes (`130+`, `~6x`, `92 FPS`) |
| `mono-code` | JetBrains Mono | 0.875rem (14px) / 0.75rem (12px) | 1.55 | 400 (Regular) | 0.0em | Code blocks, CLI flags, technical pills |
| `mono-label` | JetBrains Mono | 0.8125rem (13px) / 0.6875rem (11px)| 1.4 | 500 (Medium) | +0.02em | Section numbers (`01 · Overview`), status badges |
| `caption` | Inter | 0.75rem (12px) / 0.6875rem (11px) | 1.4 | 500 (Medium) | +0.01em | Fine print, footer disclaimers, micro metadata |

---

## 4. Layout and Grid System

### 4.1 Responsive Breakpoints
Configured via Tailwind CSS to ensure continuous scaling from compact smartphones (iPhone SE @ 320px) to ultra-wide 4K workstations:

```
xs: 480px    (Compact smartphones & phablets)
sm: 640px    (Landscape phones & small tablets)
md: 768px    (Tablets & vertical displays)
lg: 1024px   (Laptops & compact desktop screens)
xl: 1280px   (Full desktop workstations)
2xl: 1536px  (Large desktop monitors)
```

### 4.2 Grid Structure & Containers
* **Maximum Width Container:** `max-w-7xl` (1280px) centered with `mx-auto`.
* **Horizontal Gutters:**
  * Mobile (`< 640px`): `px-4` (16px)
  * Tablet (`640px - 1023px`): `px-6` (24px)
  * Desktop (`≥ 1024px`): `px-8` (32px)
* **Vertical Spacing:**
  * Section Gaps: `py-12 sm:py-16 lg:py-20` (48px – 80px)
  * Card Gaps: `gap-4 sm:gap-6 lg:gap-8` (16px – 32px)
  * Internal Card Padding: `p-4 sm:p-6 lg:p-8` (16px – 32px)

### 4.3 Two-Column Case Study Layout
Case studies feature a dual-column layout engineered for technical documentation readability:
* **Desktop (`≥ xl: 1280px`):**
  * Left Column: Sticky Table of Contents (`w-64 shrink-0 sticky top-28 self-start`) with active scrollspy observer tracking reading progress.
  * Right Column: Main content body (`flex-1 min-w-0 space-y-16`) formatted with generous line spacing and clear section breaks.
* **Mobile / Tablet (`< xl`):**
  * Sticky Header TOC Bar: Sticks at `top-16 z-20` with glassmorphic backdrop (`backdrop-blur-md bg-surface-container-low/95`), showing current active section with dropdown button to jump directly to any section.

### 4.4 Overflow Containment
To eliminate horizontal scrolling and layout bugs on mobile devices:
* Root `body` enforces `overflow-x: clip;` with `-webkit-overflow-scrolling: touch;`.
* Wide tables (PostgreSQL schema mappings, dual-engine comparisons) are wrapped in `<div className="overflow-x-auto">`.
* Long strings (emails, URLs, code paths) utilize `break-words` and `break-all`.

---

## 5. Shape and Elevation

### 5.1 Border Radius Hierarchy
Geometric, slightly rounded corners emphasize technical structure over playful softness:

| Token | Class | Value | Elements Applied |
| :--- | :--- | :--- | :--- |
| Small | `rounded` / `rounded-sm` | `0.25rem` (4px) | Telemetry chips, detection boxes, code pills |
| Medium | `rounded-lg` | `0.5rem` (8px) | Buttons, form inputs, secondary badges |
| Large | `rounded-xl` | `0.75rem` (12px) | Content cards, benchmark panels, timeline blocks |
| 2X-Large | `rounded-2xl` | `1.0rem` (16px) | Case study section enclosures, hero simulation frames |
| Pill | `rounded-full` | `9999px` | Availability status chips, indicator dots, avatar rings |

### 5.2 Hairline Borders & Dividers
Cards and panels avoid heavy dropped shadows, relying instead on 1px translucent borders that catch ambient light:
* Standard Inactive Border: `border border-outline-variant/40` (`rgba(66, 73, 54, 0.4)`)
* High-Emphasis Border: `border border-primary/30` (`rgba(148, 218, 50, 0.3)`)
* Interactive Hover Border: `hover:border-primary/60` with smooth transition.

### 5.3 Elevation & Glow Atmospheric Effects
* **Ambient Radial Gradients:** Blurred background lights (`blur-[120px] bg-primary/10`) positioned at top hero corners produce an organic cyber glow without increasing bundle weight.
* **Button Glows:** High-priority CTAs utilize targeted colored glows:
  `shadow-[0_0_24px_rgba(118,185,0,0.22)]`
* **Glassmorphism:** Navigation bars use `backdrop-blur-xl bg-surface-container-lowest/85 border-b border-surface-variant/40` to float over scrolling content.

---

## 6. Component Library

### 6.1 Navigation Bar (`Navbar.jsx`)
* **Fixed Header (`h-16 fixed top-0 left-0 right-0 z-50`):**
  * Brand Monogram: Hexagonal logo with subtle hover scaling (`hover:scale-105 transition-transform`).
  * Identity Tag: "Rajesh Kumar S" + "AI Engineer · Bangalore" chip.
  * Desktop Navigation: Plain text links (`Home`, `Projects`, `Experience`, `Contact`) with active green underline (`border-b-2 border-primary`).
  * Quick Actions: "Resume" button and avatar preview.
  * Mobile Drawer: Hamburger trigger opens a full-width glassmorphic panel with touch-friendly navigation rows (min 44px touch targets), social shortcuts (GitHub, LinkedIn), and resume trigger.

### 6.2 Table of Contents (`ProjectTOC.jsx`)
* **Scrollspy Engine:** Passive scroll listener calculates section offsets with a 160px reading offset buffer, updating the active section ID dynamically.
* **Smooth Scrolling:** Intercepts clicks and animates window position with compensation for the fixed 64px header (`top - 100px`).
* **Dual Rendering:** Renders desktop sticky sidebar (`xl:block`) and mobile sticky section bar (`xl:hidden`) with collapsible accordion list.

### 6.3 Interactive RTSP Video Simulation (`app/page.jsx`)
Simulates live CCTV inference inside an HTML/CSS canvas:
* Stream status header with live indicator and FPS readouts (`RTSP_H265 // TensorRT 92fps`).
* Real-time bounding box representations (Forklift tracking box with speed vectors; PPE Compliance verification box with safety helmet/vest pass checks).
* Floating HUD telemetry overlay (`VLM_ACTIVE · AWQ INT4 · 92.4 FPS`).
* Bottom hardware metric cards showing end-to-end p95 latency (`8.4ms`) and VRAM occupancy (`3.8GB`).

### 6.4 Skeleton Shimmer Loaders (`Skeleton.jsx`)
* Pure CSS shimmer animation (`@keyframes shimmer`) running an infinite 1.8s gradient sweep (`rgba(148, 218, 50, 0.08)`).
* `ProjectCardSkeleton`: Renders card shell, badge outline, headline bars, and tag chips during category filtering transitions.
* `MetricCardSkeleton`: Simulates metric numeral and caption layout.

### 6.5 Metric Cards & Stat Grids
Standardized across Home, Experience, and Case Study pages:
* `font-mono-metric` numeral with bold accent color.
* Supporting uppercase tracking-wide label.
* Narrative paragraph explaining the engineering significance and production deployment context.

---

## 7. Component States and Interactions

### 7.1 Hover & Focus States
* **Cards:** Gentle upward displacement (`hover:-translate-y-1 transition-all duration-300`) with simultaneous border brightening (`hover:border-primary/50`).
* **Buttons:** Micro active scale down (`active:scale-95 motion-reduce:active:scale-100`) providing tactile feedback.
* **Keyboard Accessibility:** Explicit focus rings (`focus:outline-none focus:ring-2 focus:ring-primary/50 rounded`) on all interactive buttons and navigation links.

### 7.2 Accessibility & Reduced Motion
* **Skip Link:** Accessible skip link at top of case study pages (`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50`).
* **Motion Reduction:** All transform animations include `motion-reduce:translate-x-0` and `motion-reduce:active:scale-100` to respect user OS preferences (`prefers-reduced-motion`).
* **Screen Reader Labels:** ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`) added to icons, drawers, and modal controls.

---

## 8. Iconography and Imagery

### 8.1 Google Material Symbols Outlined
Icons are loaded via Google Fonts Variable font (`Material Symbols Outlined`) with optimized settings (`opsz 20..48, wght 100..700`):
* Standard Icon Sizes: `text-[16px]` for inline labels, `text-[18px]` for buttons, `text-[22px]` to `text-[26px]` for feature card icons.
* Standardized Alignment: Coupled with `shrink-0` and `aria-hidden="true"` to prevent flex distortion and avoid screen reader noise.

### 8.2 Imagery & Evidence Proxies
* **Monogram & Profile:** High-resolution portrait and brand monogram served via secure Google User Content CDN with fallback styling.
* **CCTV Snapshot Proxies:** Case studies detail the security proxy architecture where internal LAN snapshot cameras are streamed via server-validated FastAPI endpoints (`/api/cctv/proxy-image`).

---

## 9. Page Design & Structure Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             Global Layout Frame                             │
│  [ Fixed Header & Nav: Logo | Home | Projects | Experience | Contact | CV ] │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Route Content (Home / Experience / Contact / Case Studies)                 │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  [ Footer: Monogram | Quick Links | Legal & Copyright | Status Badge ]       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 9.1 Home Page (`/`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero Section]                                                            │
│  Left: "Available For Hire" Pill · Main Display Headline · Subtext        │
│        Primary CTAs ("View Projects", "Contact Me") · Accelerator Pills   │
│  Right: Interactive RTSP Video Simulation (YOLO Forklift + PPE Detection) │
├───────────────────────────────────────────────────────────────────────────┤
│ [Production Metrics Bar: 4 Column Grid]                                   │
│  150+ Streams  │  25+ Use Cases  │  ~6x VRAM Reduction  │  5+ Deployments │
├───────────────────────────────────────────────────────────────────────────┤
│ [GPU Memory & Throughput Benchmark Panel]                                 │
│  Bar 1: VRAM for 50 Cams  │  Bar 2: Throughput Req/s  │  Bar 3: Latency   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Flagship Deployments Section - #projects]                                │
│  Filter Tabs: [ All Projects ]  [ Computer Vision ]  [ GenAI / LLMs ]     │
│  Grid of 3 Comprehensive Project Cards (VisionFacts, Agent, Edubotix)     │
├───────────────────────────────────────────────────────────────────────────┤
│ [Technical Architecture: 4 Systems Pillars]                               │
│  1. Computer Vision │ 2. GenAI & Agents │ 3. Serving & TRT │ 4. Backend   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Career Track Record: 3 Experience Cards with Deliverables]               │
├───────────────────────────────────────────────────────────────────────────┤
│ [Call To Action Banner: Direct Coordinates & Social Links]                │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
1. **Hero Section:**
   * Headline: *"I build production AI systems that see, reason and scale."* High-contrast styling with green underline accent.
   * Lead text highlights 4+ years architecting RTSP streaming, TensorRT optimization, and Multi-Agent reasoning.
   * Right-hand interactive canvas simulates an active NVIDIA DeepStream inference engine running YOLOv11 and Gemma E4B VLM.
2. **Metric Stats Grid:**
   * 4-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) establishing authority with verifiable scale.
3. **Engineering Performance Benchmark:**
   * Side-by-side comparison bar charts visualizing Triton centralized model allocation vs per-camera memory thrashing (125GB vs 20GB).
   * Demonstrates zero-copy CUDA IPC throughput gains (90 req/s vs 175 req/s).
4. **Flagship Projects Gallery:**
   * Dynamic category switching (`all`, `cv`, `genai`) with skeleton transition effect.
   * Cards highlight architecture tags, deployment metrics, and link directly to full-length case studies.
5. **Technical Architecture Matrix:**
   * 4 distinct domain cards breaking down frameworks, libraries, and low-level tools (ByteTrack, Triton, TensorRT, LangGraph, CUDA IPC, FastAPI).
6. **Experience Preview & Contact CTA:**
   * Highlights current role as Team Lead at Nextbrain Technologies.
   * CTA card with one-click direct email routing and verified candidate credentials.

---

### 9.2 Experience Page (`/experience`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero & Executive Summary]                                                │
│  Headline: "Engineering Experience & Production Systems"                  │
│  4-Metric Grid: Industry Span · Concurrent Pipes · GPU Efficiency · Teams │
├───────────────────────────────────────────────────────────────────────────┤
│ [Production Timeline & Systems Architecture]                              │
│  Filter Controls: [ All Roles (3) ]  [ CV & VLMs ]  [ GenAI / LLMs ]      │
│  Vertical Timeline with Glowing Node Markers:                             │
│   • Role 1: Senior AI Engineer / Team Lead — Visionfacts.AI (2023–Present)│
│     Metrics Box: 150 Cams, 82.4ms Latency, $3,400/mo GPU Savings          │
│   • Role 2: Junior Vision Engineer — SS Automation Solutions (2022–2023)  │
│     Metrics Box: Jetson Edge, 70-85% Defect Accuracy, PLC Integration     │
│   • Role 3: Technical Support Engineer — Vedant Tech / DRDO (2022)        │
│     Metrics Box: Radar Target Tracking, Kalman Filtering, KNN Signal      │
├───────────────────────────────────────────────────────────────────────────┤
│ [Engineering Leadership Matrix - 3 Governance Pillars]                    │
│  1. Profiling Standards │ 2. Telemetry & Monitors │ 3. Canary Rollouts    │
├───────────────────────────────────────────────────────────────────────────┤
│ [System Blueprint in Action: RTSP & VLM Pipeline Topology]                │
│  NVDEC Hardware ➔ CUDA IPC Ring Buffer ➔ Dual-Tier Inference ➔ Dispatch   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Leadership CTA Banner]                                                   │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
1. **Executive Leadership Header:**
   * Summary chips emphasizing edge and cloud inference specialization.
   * 4 key metrics displaying career span (4+ years), concurrent streams (150+), compute cost reduction (62%), and team size (3–5 engineers).
2. **Interactive Production Timeline:**
   * Filterable chronology allowing visitors to isolate Computer Vision vs GenAI engagements.
   * Vertical guide line with pulsating emerald status dot representing current active role.
   * Each entry pairs bulleted engineering responsibilities with an **in-situ telemetry box** displaying deployment stats, cluster configurations, and monthly cloud cost savings.
3. **Engineering Leadership Matrix:**
   * 3 cards detailing how the engineer operates in a lead capacity: architecture reviews, Prometheus/Grafana drift monitoring, and zero-downtime Triton model rollouts.
4. **System Blueprint in Action:**
   * Step-by-step architectural breakdown of an industrial plant's RTSP pipeline: hardware decode via NVDEC, zero-copy CUDA shared memory, YOLO fast gating, and Gemma VLM incident reasoning.

---

### 9.3 Contact Page (`/contact`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero: Actively Seeking Senior / Staff AI Roles]                          │
│  Status Chips: Notice (Immediate-30d) · Scope (Staff/Lead) · Location     │
├───────────────────────────────────────────────────────────────────────────┤
│ [Static Direct Routing Header: Direct Channels for Hiring Teams]          │
├───────────────────────────────────────────────────────────────────────────┤
│ [Two-Column Contact Coordinates Panel]                                    │
│  Left: Primary Direct Coordinates                                         │
│        • Email Address Box with 1-Click Copy Button ("Copied!" state)     │
│        • Metadata: Bangalore Hub, UTC+5:30, <24h Response SLA, PGP Comms  │
│        • Primary Email CTA Button                                         │
│  Right: Fast-Track Hiring Channels & Links                                │
│        • LinkedIn Profile Direct Route Card                               │
│        • GitHub Repositories Direct Route Card                            │
│        • Download Full Resume Button                                      │
├───────────────────────────────────────────────────────────────────────────┤
│ [Candidate Dossier: 4 Engineering Pillars]                                │
│  1. Computer Vision │ 2. GenAI & LLMs │ 3. GPU Optimization │ 4. Leadership│
├───────────────────────────────────────────────────────────────────────────┤
│ [Hiring Logistics & FAQ - 3 Column Grid]                                  │
│  • Target Roles & Leveling  • Location & Remote  • Interview Process      │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
1. **Availability & Status Header:**
   * Immediate visibility into work status: 30-day notice period, targeting Lead/Staff AI roles, based in Bangalore (open to hybrid, remote, and sponsored relocation).
2. **Direct Coordinates Cards:**
   * Left Card: Primary email with client-side clipboard copy button (`navigator.clipboard.writeText`), accompanied by response SLA guarantees (<24 hours).
   * Right Card: Quick-link route cards to LinkedIn, GitHub, and downloadable PDF resume.
3. **Candidate Dossier:**
   * Highlights the four core pillars of qualification so recruiters can immediately map skills to role specifications.
4. **Hiring Logistics FAQ:**
   * Explicitly addresses interview availability, whiteboard architecture preferences, and timezone overlap capabilities (US/EU overlap).

---

### 9.4 Case Study: VisionFacts.ai (`/project-visionfacts`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero & Metadata Header]                                                  │
│  Title: VisionFacts.ai · 130+ Streams · ~6.5x VRAM Cut · 192 req/s Rate   │
│  Metadata: Lead Architect · Nextbrain Technologies · Aug 2023 - Present   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Two-Column Case Study Layout]                                            │
│  Left: Sticky Table of Contents (01 Overview through 08 Contributions)    │
│  Right: 8 Structured Technical Sections:                                  │
│    01 · Project Overview: Real-time CCTV analytics on 2x NVIDIA L4 GPUs   │
│    02 · Problem Statement: VRAM explosion & per-camera pipeline overhead   │
│    03 · AI Use Cases: Safety PPE, Perimeter, Intrusion, Crowd, ANPR      │
│    04 · System Architecture: Triton Server, TensorRT FP32, CUDA IPC Mem   │
│    05 · Technology Stack: DeepStream, YOLOv11, ByteTrack, FastAPI, Docker │
│    06 · Challenges & Solutions: CUDA memory thrashing, multi-cam balancing│
│    07 · Performance & Results: Verified benchmark tables, latency curves  │
│    08 · Contributions & Leadership: End-to-end design & team mentoring   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Bottom Navigation: All Projects  |  Next: Analytics Agent]               │
│ [CTA: Looking for a Senior AI or Computer Vision Engineer?]               │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
* **Header & Headline Metrics:** 130+ live camera streams, ~6.5x dual-GPU memory reduction, 192 req/s production throughput.
* **Architecture Flow Diagram:** Illustrates the end-to-end frame journey: RTSP source → GStreamer NVDEC decode → CUDA IPC shared memory handle → Triton TensorRT inference engine → ByteTrack tracking → Redis/PostgreSQL alert dispatch.
* **Production Benchmarks:** Verifiable tables detailing mean execution latency (107ms), frame latency (141ms), and monthly GPU infrastructure cost reductions.

---

### 9.5 Case Study: VisionFacts Analytics Agent (`/project-analytics-agent`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero & Metadata Header]                                                  │
│  Title: VisionFacts Analytics Agent · Multi-Agent CCTV Intelligence       │
│  4 Headline Metrics: Dual Pipelines · MCP Protocol · Schema Guard · 5 Dom │
├───────────────────────────────────────────────────────────────────────────┤
│ [Two-Column Case Study Layout]                                            │
│  Left: Sticky Table of Contents (01 Overview through 08 Outcomes)         │
│  Right: 8 Structured Technical Sections:                                  │
│    01 · Project Overview: Conversational bridge to surveillance telemetry │
│    02 · Problem & Objectives: High-volume data fatigue, zero-SQL access   │
│    03 · Multi-Agent Architecture:                                         │
│         Pipeline A: Interactive Analytics (Analyst + Output Formatter)    │
│         Pipeline B: Autonomous Auditing (Surveillance + Email Formatter)  │
│    04 · Core Capabilities: 9 features (Natural SQL, Guardrails, Snapshot) │
│    05 · MCP Integration & Data Domain:                                    │
│         • Stdio PostgreSQL MCP & Custom FastMCP Server                    │
│         • Secure CCTV Snapshot Proxy (FastAPI LAN Bridge)                 │
│         • Supported PostgreSQL Database Schema Table                      │
│    06 · Engineering Challenges: Hallucinations, LAN CCTV, async scheduler │
│    07 · Technology Stack: LangChain, DeepAgents, FastMCP, Vite, ExcelJS   │
│    08 · Outcomes & Contributions: Value delivered & architectural ownership│
├───────────────────────────────────────────────────────────────────────────┤
│ [Bottom Navigation: Previous: VisionFacts.ai  |  Next: Edubotix]          │
│ [CTA: Looking for a Senior AI or Systems Architect?]                      │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
* **Dual Execution Pipeline Specification:** Clear architectural separation between the **Interactive Ad-Hoc Pipeline** (live conversational investigations with SSE streaming) and the **Autonomous Scheduled Reporting Pipeline** (hourly delta audits and EOD email digests).
* **Model Context Protocol (MCP) Integration:** Documents decoupled tool boundaries using `MultiServerMCPClient` connecting to `mcp-postgres-server` over stdio and a custom `FastMCP` server for timezone logic and email distribution.
* **Secure CCTV Snapshot Proxy:** Details the security bridge allowing browser clients to preview private LAN camera snapshots (`192.168.x.x`) through an allowlist-validated FastAPI backend proxy.
* **PostgreSQL Schema Domain Table:** Documents the five operational tables (`event`, `device`, `attendance`, `users`, `vehicle`) mapped to natural language queries.

---

### 9.6 Case Study: Edubotix (`/project-edubotix`)

#### Wireframe Architecture
```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Hero & Metadata Header]                                                  │
│  Title: Edubotix · Context-Aware Multimodal Academic Learning Assistant   │
│  4 Metrics: >70% Ingestion Speed · Hybrid Search · Memory TTL · 9 Tools   │
├───────────────────────────────────────────────────────────────────────────┤
│ [Two-Column Case Study Layout]                                            │
│  Left: Sticky Table of Contents (01 Overview through 08 Contributions)    │
│  Right: 8 Structured Technical Sections:                                  │
│    01 · Project Overview: Multimodal learning with verified textbooks     │
│    02 · Core Capabilities: Hybrid vector search, OCR diagram perception   │
│    03 · System Architecture: Ingestion vs Retrieval Flow, Query Routing   │
│    04 · Engineering Innovations:                                          │
│         • ThreadPoolExecutor Concurrent Embedding Pipeline (>70% boost)   │
│         • Progressive Session Memory with Delta Rolling Summarization     │
│    05 · Dual-Engine & Scientific MCP Server:                              │
│         • Deterministic Tools: RDKit chemistry, Pint unit math, Wiktionary│
│         • Comparison Table: General-purpose LLM vs Edubotix Dual-Engine   │
│    06 · Backend & Storage Infrastructure: MongoDB, Qdrant payload filters │
│    07 · Technology Stack: AWS Bedrock, Qdrant, FastMCP, React, KaTeX      │
│    08 · Contributions & Outcomes: Student engagement & hallucination drop │
├───────────────────────────────────────────────────────────────────────────┤
│ [Bottom Navigation: Previous: Analytics Agent  |  Next: VisionFacts.ai]   │
│ [CTA: Looking for a Senior AI or Backend Engineer?]                       │
└───────────────────────────────────────────────────────────────────────────┘
```

#### Section Breakdown & Functional Design
* **Hybrid Search Retrieval:** Documents the fusion of **Titan V2 1024-dimensional dense semantic vectors** with **FastEmbed BM25 sparse lexical tokens** in Qdrant, filtered by curriculum, grade, and subject metadata.
* **Concurrent Ingestion Engine:** Highlights the ThreadPoolExecutor architecture that slashed PDF textbook chunking and vectorization time by over 70%.
* **Progressive Session Memory:** Details the sliding-window conversation memory that activates rolling summaries after 20 turns, maintaining a 30-minute in-memory cache and delta database sync to eliminate context blowup.
* **Scientific FastMCP Suite:** Documents the deterministic computational tools (RDKit molecular parsing, Pint physical unit conversions) preventing mathematical and scientific hallucination.

---

## 10. Summary Checklist for Future Additions
When adding new pages, case studies, or components to this portfolio:
1. Always maintain the **dark elevation hierarchy** (`surface-container-lowest` up to `surface-container-high`).
2. Pair every major headline with a **verifiable numerical metric** or production artifact.
3. Wrap all analytical tables in `<div className="overflow-x-auto">`.
4. Ensure all interactive buttons include keyboard focus rings and active scale feedback (`active:scale-95`).
5. Maintain the `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` layout frame.
6. Verify responsive typography using the custom `xs: 480px` breakpoint for small screens.
