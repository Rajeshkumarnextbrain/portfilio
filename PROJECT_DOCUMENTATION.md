# Rajesh Kumar S — Portfolio System Architecture & Design Documentation

> **Purpose of this document:**  
> This file is the definitive single-source technical and design blueprint for this portfolio. It is authored so that any **AI agent or human developer** can understand the entire project, its visual design language, content architecture, component interactions, and exact page layouts. Anyone needing to update metrics, modify styles, add pages, or extend features can do so quickly and safely without breaking design consistency or build pipelines.

---

## Table of Contents

1. [Project Overview & Technology Stack](#1-project-overview--technology-stack)
2. [Repository Directory & File Map](#2-repository-directory--file-map)
3. [Design Philosophy & Core Aesthetics](#3-design-philosophy--core-aesthetics)
4. [Design System & Foundation Tokens](#4-design-system--foundation-tokens)
   - [4.1 Color System & Semantic Palette](#41-color-system--semantic-palette)
   - [4.2 Typography System](#42-typography-system)
   - [4.3 Spacing, Borders & Grid Rules](#43-spacing-borders--grid-rules)
   - [4.4 Motion, Easing & Accessibility Framework](#44-motion-easing--accessibility-framework)
   - [4.5 Signature Visual Atoms & Patterns](#45-signature-visual-atoms--patterns)
5. [Single Source of Truth (SSOT) Architecture](#5-single-source-of-truth-ssot-architecture)
6. [Detailed Page-by-Page Specifications](#6-detailed-page-by-page-specifications)
   - [6.1 Global Shell (Layout, Navbar, Footer)](#61-global-shell-layout-navbar-footer)
   - [6.2 Home Page (`/`)](#62-home-page-)
   - [6.3 Experience Chronology Page (`/experience`)](#63-experience-chronology-page-experience)
   - [6.4 Project Case Study 1: VisionFacts.ai Core (`/project-visionfacts`)](#64-project-case-study-1-visionfactsai-core-project-visionfacts)
   - [6.5 Project Case Study 2: Analytics Agent (`/project-analytics-agent`)](#65-project-case-study-2-analytics-agent-project-analytics-agent)
   - [6.6 Project Case Study 3: Edubotix Academic Tutor (`/project-edubotix`)](#66-project-case-study-3-edubotix-academic-tutor-project-edubotix)
   - [6.7 Contact & Hiring Page (`/contact`)](#67-contact--hiring-page-contact)
7. [Developer & AI Modification Guide (How to Make Changes Easily)](#7-developer--ai-modification-guide-how-to-make-changes-easily)
   - [How to Update Candidate Identity, Metrics & Contacts](#how-to-update-candidate-identity-metrics--contacts)
   - [How to Add a New Project Case Study](#how-to-add-a-new-project-case-study)
   - [How to Update Work Experience](#how-to-update-work-experience)
   - [How to Modify Design Tokens (Colors, Fonts, Spacing)](#how-to-modify-design-tokens-colors-fonts-spacing)
   - [How to Safely Tune Motion & Animation](#how-to-safely-tune-motion--animation)
   - [Build, Validation & Deployment Workflow](#build-validation--deployment-workflow)

---

## 1. Project Overview & Technology Stack

- **Target Persona:** Rajesh Kumar S — AI Engineer & Team Lead specializing in Computer Vision (high-throughput RTSP video pipelines, NVIDIA Triton, TensorRT) and Generative AI (LangGraph multi-agent systems, FastMCP, Multimodal RAG).
- **Goal:** A high-conversion, enterprise-grade engineering portfolio targeting Staff AI Engineer, Lead Vision Engineer, and GenAI Systems Architect roles.
- **Core Architecture:**
  - **Framework:** Next.js 14 (App Router, React 18, React DOM 18)
  - **Styling:** Tailwind CSS 3.4 + PostCSS + Autoprefixer
  - **Animations & Micro-interactions:** Framer Motion 14 (LazyMotion with DOM animations, zero bundle bloat)
  - **Font Services:** Google Fonts via `@import` in `app/globals.css` (Playfair Display, Space Grotesk, Manrope, Space Mono) + Google Material Symbols Outlined
  - **Runtime Mode:** Static generation with client-side interactive islands (`'use client'`) where state or motion is needed

---

## 2. Repository Directory & File Map

```text
/home/nextbrain-ssd/rajesh/portfilio/
├── app/                                    # Next.js App Router root
│   ├── globals.css                         # CSS base layers, font imports, keyframes & reduced-motion rules
│   ├── layout.jsx                          # Root layout, metadata, MotionProvider, Navbar, Footer
│   ├── page.jsx                            # Home page (Hero, At a Glance, Architecture, Projects, Skills, Preview, CTA)
│   ├── experience/
│   │   └── page.jsx                        # Career chronology, filmstrip scrubber, cluster readouts, radar panel
│   ├── project-visionfacts/
│   │   └── page.jsx                        # Flagship case study: 130+ camera RTSP analytics platform
│   ├── project-analytics-agent/
│   │   └── page.jsx                        # Case study: LangGraph & FastMCP multi-agent CCTV reporting
│   ├── project-edubotix/
│   │   └── page.jsx                        # Case study: Curriculum-grounded STEM multimodal RAG tutor
│   └── contact/
│       └── page.jsx                        # Hiring status, 4 core value quadrants, FAQ disclosure, contact channels
│
├── components/                             # Modular UI & Feature components
│   ├── Navbar.jsx                          # Fixed header, active link indicators, resume download, email CTA
│   ├── Footer.jsx                          # Minimal sunken footer, copyright, social/contact links
│   │
│   ├── home/                               # Home-page specific components
│   │   ├── HeroHeadline.tsx                # Animated line-by-line staggered hero headline
│   │   ├── HeroLiveDemo.tsx                # Interactive 3-tab live simulation (Watch, Ask, Learn)
│   │   ├── HeroIllustration.tsx            # Visual vector elements
│   │   ├── AtAGlanceSection.tsx            # 6 ruled metric rows + candidate snapshot
│   │   ├── HowItWorksSection.tsx           # 5-step video analytics architecture blueprint
│   │   ├── ProjectsSection.tsx             # Interactive production case study preview rows
│   │   ├── SkillsSection.tsx               # Categorized skills matrix with plain-English + engineering tools
│   │   └── ExperiencePreview.tsx           # Chronology cards preview for the home page
│   │
│   ├── experience/                         # Experience-page specific components
│   │   ├── SmpteTicker.tsx                 # Timecode counter display
│   │   ├── ExperienceScrubber.tsx          # Filmstrip scrubber jump bar (Role 1 -> 2 -> 3)
│   │   ├── CameraGridDots.tsx              # Interactive camera feed cluster visualization
│   │   ├── BlueprintFlow.tsx               # High-throughput frame execution flowchart
│   │   └── DrdoRadarPanel.tsx              # Radar scope canvas visual & telemetry for DRDO project
│   │
│   ├── project/                            # Shared case-study components
│   │   ├── StickyJumpBar.tsx               # Sticky in-page section navigator with active underline glide
│   │   ├── ProblemSolutionRow.tsx          # 2-column comparative problem vs solution layout
│   │   ├── AnimatedChatTrace.tsx           # Step-by-step interactive agent chat simulation
│   │   ├── ProxyPacketDiagram.tsx          # Network packet isolation diagram (LAN CCTV -> FastAPI proxy -> Browser)
│   │   └── MemoryProgressionDiagram.tsx    # Sliding-window + rolling summary memory visualizer
│   │
│   └── motion/                             # Reusable accessible animation atoms
│       ├── MotionProvider.tsx              # LazyMotion provider wrapping the app
│       ├── CountUp.tsx                     # Numeric counter animating on viewport scroll
│       ├── Reveal.tsx                      # Fade-and-slide element reveal on scroll
│       ├── Stagger.tsx                     # Container & item stagger orchestrator
│       ├── DrawLine.tsx                    # Animated hairline rule draw
│       ├── GrowBar.tsx                     # Percentage-based horizontal benchmark bar
│       ├── AmbientDot.tsx                  # Subtle status pulse (green available dot, orange accent)
│       ├── FlowToken.tsx                   # Multi-stage numbered pipeline cards
│       ├── Disclosure.tsx                  # Animated accessible FAQ accordion item
│       ├── CopyButton.tsx                  # One-click clipboard copy button with feedback
│       ├── MaskLines.tsx                   # Text line reveal masking component
│       └── ScrollProgress.tsx              # 2px hairline scroll progress bar under navbar
│
├── content/                                # SINGLE SOURCE OF TRUTH (Content Data)
│   ├── facts.ts                            # Identity, metrics, verified numbers, roles, project metadata
│   ├── skills.ts                           # Skills categories, icons, proof points, tool lists
│   └── heroScenes.ts                       # Simulation data for the interactive Hero demo
│
├── lib/                                    # Animation & Utility libraries
│   ├── motion.ts                           # Timing tokens, easing bezier curves, transition presets
│   └── useMotionOK.ts                      # Accessible reduced-motion hook & document visibility hook
│
├── public/                                 # Static assets
│   ├── favicon.svg                         # SVG favicon
│   ├── resume.pdf                          # Downloadable candidate resume
│   └── og-image.png                        # OpenGraph social share card
│
├── tailwind.config.js                      # Custom color palette, typography scales, spacing tokens
├── postcss.config.js                       # PostCSS configuration
├── next.config.js                          # Next.js configuration
└── package.json                            # Scripts, dependencies, and metadata
```

---

## 3. Design Philosophy & Core Aesthetics

This portfolio embodies **"Editorial Engineering"**: a synthesis of Swiss International Typographic Style, high-precision technical instrument design, and tactile paper warmth.

### Key Principles

1. **Dual-Audience Communication Strategy:**
   - **Audience A (Executives, Hiring Managers, Recruiters):** They need immediate clarity in 30 seconds. They receive prominent **"In Plain English"** callouts, everyday analogies ("watches cameras automatically", "tutors students from textbooks"), and verified business ROI metrics ($3,400/month saved, 74% fewer false alarms).
   - **Audience B (Staff/Principal Engineers, CTOs, AI Leads):** They need technical proof. They receive exact telemetry, memory footprints, frame latency profiles, TensorRT FP32 execution graphs, CUDA IPC zero-copy handles, and LangGraph AST security validators.

2. **Tactile Industrial Aesthetic:**
   - The primary backdrop is not sterile white or generic dark mode; it is a warm, physical paper tone (`#fcf9f3` "surface", `#ECE8DF` "paper-sunken", `#FBFAF7` "paper-raised").
   - Dark technical sections (`#14130F` on the DRDO radar panel or `#000000` CTA zones) simulate heavy laboratory equipment or camera viewfinders.
   - Distinctive typography: Architectural Grotesque (`Space Grotesk`) paired with Monospace telemetry (`Space Mono`) and human editorial prose (`Manrope`).
   - Hairline 1px borders (`#D9D4C7` "line") with viewfinder corner brackets (`⌜ ⌝ ⌞ ⌟`) evoke engineering schematics.

3. **Motion with Restraint:**
   - No bouncy, playful animations. All transitions use high-precision cubic-bezier curves (`[0.22, 1, 0.36, 1]`).
   - Strict adherence to `prefers-reduced-motion`: all elements immediately resolve to `opacity: 1` and `transform: none` when reduced motion is detected or JavaScript is disabled.

---

## 4. Design System & Foundation Tokens

All design tokens are formalized in `tailwind.config.js`, `app/globals.css`, and `lib/motion.ts`.

### 4.1 Color System & Semantic Palette

| Token Name | Hex Value | Usage / Semantic Role |
| :--- | :--- | :--- |
| `surface` | `#fcf9f3` | Main canvas background (warm off-white/cream paper) |
| `paper-sunken` | `#ECE8DF` | Secondary section background (recessed paper, metric rows, cards) |
| `paper-raised` | `#FBFAF7` | Elevated surface (highlighted cards, active tabs, buttons) |
| `primary` | `#000000` | Deep black: primary headings, heavy CTAs, dark container panels |
| `on-surface` | `#1c1c18` | Primary body typography color |
| `ink-muted` | `#4A483F` | Secondary body text, subheadings, explanations |
| `ink-faint` | `#6B685E` | Tertiary text, timestamps, captions, footer notes |
| `line` | `#D9D4C7` | Ruled 1px borders, dividers, frame bounding boxes |
| `outline-variant` | `#cbc6bd` | Inactive benchmark bars, subtle outlines |
| `secondary` | `#ae3200` | Signature signal terracotta/orange: active accents, chips, numbers |
| `secondary-container`| `#fd591e` | Vibrant orange button fills, highlights |
| `signal-orange-hover`| `#E04A12` | Hover state for interactive orange buttons |
| `signal-orange-tint` | `#FFE6DA` | Soft orange highlight backdrop behind hero words |
| `status-success` | `#1F8A4C` | Green status dot: "Available for hire", verified calculations |
| `dark-radar-panel` | `#14130F` | Deep charcoal used specifically for the DRDO radar canvas |
| `dark-radar-text` | `#F5F2EC` | High-contrast warm white text on dark radar panels |

### 4.2 Typography System

The application loads four complementary font families:

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
```

1. **`font-display` / `font-headline-lg` / `font-mega-display` (`Space Grotesk`):**
   - Geometric, architectural display font used for page titles, chapter markers, and section headlines.
   - Example styles: `mega-display` (160px desktop, 64px mobile, leading 0.92, tracking -0.05em).
2. **`font-body-md` / `font-body-lg` / `font-body-sm` (`Manrope`):**
   - Clean, highly legible humanist sans-serif used for all long-form paragraphs, descriptions, and list items.
3. **`font-mono` / `font-label-timecode` / `font-metric-numeral` (`Space Mono`):**
   - Monospace font used for metrics, SMPTE timecodes, camera IDs, technical telemetry, and metadata chips.
   - Numerals count up smoothly without jitter thanks to fixed character widths.
4. **`font-serif` (`Playfair Display`):**
   - Editorial high-contrast serif used sparingly on large thematic statements (e.g., "FOUR YEARS. ONE PIPELINE AT A TIME." on the Experience page).
5. **Iconography (`Material Symbols Outlined`):**
   - Loaded globally and rendered via `<span className="material-symbols-outlined">icon_name</span>` (e.g., `download`, `mail`, `videocam`, `smart_toy`, `speed`, `groups`, `arrow_forward`).

### 4.3 Spacing, Borders & Grid Rules

- **Max Container Widths:** `max-w-screen-2xl 2xl:max-w-[1640px] mx-auto` ensures expansive yet controlled layouts on ultra-wide monitors.
- **Horizontal Page Padding:** `px-4 sm:px-6 lg:px-8 xl:px-12` provides uniform gutters across all breakpoints.
- **Vertical Chapter Padding:** Typically `py-10 md:py-16 lg:py-20` on standard sections to establish clear pacing.
- **Ruled Borders:** Sections are separated by continuous `border-b border-line` dividers.
- **Viewfinder Brackets:** Specialized technical cards feature corner brackets (`⌜ ⌝ ⌞ ⌟`) positioned absolutely via `-top-2 -left-2` to reinforce the CCTV/radar surveillance motif.

### 4.4 Motion, Easing & Accessibility Framework

Configured in `lib/motion.ts` and `lib/useMotionOK.ts`:

- **Timing Constants:**
  - `micro`: 0.15s (150ms) for button scale and quick hover states
  - `base`: 0.30s (300ms) for tab switching and disclosure expansion
  - `reveal`: 0.50s (500ms) for viewport scroll reveals
  - `diagram`: 0.80s (800ms) for complex diagram paths
  - `stagger`: 0.06s (60ms) between list items
- **Easing Bezier:**
  - `EASING.out = [0.22, 1, 0.36, 1]` (smooth deceleration)
- **Accessible Reduced-Motion Enforcement:**
  - `useMotionOK()` checks `window.matchMedia('(prefers-reduced-motion: reduce)')`.
  - In `app/globals.css`, any active reduced-motion setting forces:
    ```css
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      [data-motion] {
        opacity: 1 !important;
        transform: none !important;
        clip-path: none !important;
      }
    }
    ```
  - In `app/layout.jsx`, `<noscript>` injects identical styling so search engine bots and JS-disabled browsers render all content cleanly with zero layout shift.

### 4.5 Signature Visual Atoms & Patterns

- **`<CountUp value="130+" />`:** Automatically parses numbers, decimals, and suffixes (`+`, `%`, `x`, `req/s`, `ms`), animating smoothly when scrolled into the viewport.
- **`<Reveal>`:** Wraps section blocks with a clean vertical slide-in and opacity fade.
- **`<Stagger>` & `<StaggerItem>`:** Staggers sequences of cards or skill items.
- **`<GrowBar targetPercent={88} />`:** Animates horizontal telemetry meters (e.g. GPU sustained load, memory savings).
- **`<DrawLine />`:** Hairline rule drawing across the width of a section header.
- **`<FlowToken steps={...} />`:** Renders ordered pipeline nodes with step numbers, plain titles, and technical footnotes.
- **`<AmbientDot color="bg-status-success" />`:** A pulsing 8px dot signaling live availability or active streaming.

---

## 5. Single Source of Truth (SSOT) Architecture

All quantitative claims, career dates, contact links, and skills across the site are defined in the `content/` directory. **Never hardcode metrics inside JSX pages.**

### 5.1 `content/facts.ts` (SSOT Hub)
Acts as the central export gateway. Contains authoritative core constants and re-exports domain data:

```typescript
// Contacts, Candidate Core Identity, and Telemetry Numbers
export const CONTACT_INFO = { ... };
export const IDENTITY = { ... };
export const VERIFIED_NUMBERS = { ... };

// Re-exports from domain-specific data modules
export * from "./contactData";
export * from "./caseStudiesData";
export * from "./experienceData";
```

### 5.2 Domain Data Modules (`content/`)
To prevent hardcoded copy in JSX presentation files, all page narrative, FAQ disclosures, challenges, contributions, and benchmarks are split into focused domain files:

1. **`content/contactData.ts`**:
   - `RECRUITER_DOSSIER_TEXT`: Full text for candidate terminal export.
   - `CANDIDATE_FACTS`: Quick metadata strip for recruiter assessment.
   - `CORE_VALUE_CARDS`: The 4 hiring pillars (High-Throughput CV, Autonomous GenAI, Cost Efficiency, Production Leadership).
   - `CONTACT_FAQS`: Structured FAQ entries with answer lists, ideal roles, and compensation transparency.

2. **`content/caseStudiesData.ts`**:
   - `VISIONFACTS_OVERVIEW`, `ANALYTICS_AGENT_OVERVIEW`, `EDUBOTIX_OVERVIEW`: Hero typography, plain-English explainer, 3-metric strips, and problem/solution texts.
   - `VISIONFACTS_STAGES`, `VISIONFACTS_SIMULATED_CAMERAS`, `VISIONFACTS_CHALLENGES`, `VISIONFACTS_CONTRIBUTIONS`, `VISIONFACTS_TECH_PILLARS`.
   - `ANALYTICS_ASK_STEPS`, `ANALYTICS_WATCH_STEPS`, `ANALYTICS_AGENT_CHALLENGES`, `ANALYTICS_AGENT_CONTRIBUTIONS`, `ANALYTICS_AGENT_RESULTS`.
   - `EDUBOTIX_COMPONENTS`, `EDUBOTIX_CHALLENGES`, `EDUBOTIX_CONTRIBUTIONS`, `EDUBOTIX_RESULTS`, `EDUBOTIX_TECH_PILLARS`.

3. **`content/experienceData.ts`**:
   - `EXPERIENCE_HERO_METRICS`: 4 hero telemetry numerals.
   - `NEXTBRAIN_ROLE_METRICS` & `SS_AUTO_ROLE_METRICS`: Ruled metrics for individual role chapters.
   - `LEADERSHIP_STAGES`: 3-stage team leadership and profiling protocol.
   - `BLUEPRINT_NODES`: The 4 pipeline nodes (Ingest, Transport, Inference, Dispatch).
   - `DRDO_RADAR_ROWS`: Radar data processing and telemetry validation specs.
   - `TIMELINE_SCRUBBER_CLIPS`: Interactive filmstrip scrubber segments.

4. **`content/skills.ts`**:
   - Defines the 4 primary skill domains with scannable, highlighted tool/algorithm badges.

5. **`content/heroScenes.ts`**:
   - Contains simulation dialogues and step sequences for the interactive Hero demo (Watch, Ask, Learn).

---

## 6. Detailed Page-by-Page Specifications

### 6.1 Global Shell (Layout, Navbar, Footer)

#### `app/layout.jsx`
- Wraps all pages in `MotionProvider` to initialize Framer Motion's `LazyMotion` context.
- Configures comprehensive SEO metadata: Title (`Rajesh Kumar S · AI Engineer & Team Lead...`), OpenGraph tags, Twitter Cards, Canonical URLs, and Favicons (`/favicon.svg`).
- Features a top-level `<noscript>` style block for accessibility and crawler rendering.

#### `components/Navbar.jsx`
- **Positioning:** Fixed top navigation with backdrop blur (`bg-surface/95 backdrop-blur-md`).
- **Brand Identity:** Left monogram button (`RK` in circular border), candidate name, and role title.
- **Navigation Links:** `HOME`, `PROJECTS` (anchor jumps to `#projects`), `EXPERIENCE`, `CONTACT`.
- **Active State:** Active pages receive a bold font weight, a signal-orange dot, and an orange underline that glides on hover.
- **Primary CTAs:**
  - Outline pill button: `RESUME` (opens `/resume.pdf` in a new tab).
  - Solid signal-orange pill button: `EMAIL ME` (launches `mailto:`).
- **Mobile Menu:** Collapsible hamburger drawer with touch-friendly navigation rows.
- **Integrated Scroll Indicator:** Thin 2px signal-orange `<ScrollProgress />` bar fixed to the bottom edge of the navbar that tracks scroll depth from 0% to 100%.

#### `components/Footer.jsx`
- **Background:** Sunken warm paper (`bg-paper-sunken border-t border-line`).
- **Left:** Monogram name, active location dot, candidate summary statement.
- **Right:** Text links for `Email`, `LinkedIn`, `GitHub`, and `Resume (PDF)`, alongside dynamic copyright year, location, and IST timezone indicator.

---

### 6.2 Home Page (`/`)
*File: `app/page.jsx`*

Designed as an editorial magazine spread that answers the hiring manager's questions progressively from high-level intent down to deep architecture.

```text
┌─────────────────────────────────────────────────────────────────┐
│ CHAPTER 00: HERO (Availability, Line Headline, Live Demo)      │
├─────────────────────────────────────────────────────────────────┤
│ SECTION 01: AT A GLANCE (6 Ruled Metrics + Snapshot Facts)      │
├─────────────────────────────────────────────────────────────────┤
│ SECTION 02: BUSINESS IMPACT & COSTING (3 Major Problems Solved) │
├─────────────────────────────────────────────────────────────────┤
│ SECTION 03: PRODUCTION CASE STUDIES (3 Interactive Project Rows)│
├─────────────────────────────────────────────────────────────────┤
│ SECTION 04: SKILLS (Plain-English Matrix + Engineering Tools)   │
├─────────────────────────────────────────────────────────────────┤
│ SECTION 05: CAREER CHRONOLOGY PREVIEW (Experience Preview Cards)│
├─────────────────────────────────────────────────────────────────┤
│ SECTION 06: CONTACT CTA (Dark Background, Role List, Buttons)   │
└─────────────────────────────────────────────────────────────────┘
```

#### Detailed Sections:
1. **Chapter 00: Hero (Tactile Paper Canvas):**
   - **Availability Pill:** Live green ambient pulsing dot (`AVAILABLE FOR HIRE · 90-DAY NOTICE · BANGALORE, INDIA`).
   - **Left Column:**
     - Eyebrow: `AI Engineer & Team Lead · Computer Vision and Generative AI`.
     - `HeroHeadline.tsx`: Staggered line-by-line animated headline: *"I build production AI systems that see, reason and scale."*
     - Plain-English callout box detailing the 3 capabilities: (1) Watching cameras automatically while cutting GPU costs, (2) Autonomous AI agents delivering instant shift reports, (3) Textbook tutoring with verified calculation tools.
     - Action buttons: "Download resume (PDF)" [black pill], "View projects" [paper pill], and "Email me" [orange pill].
     - Ruled 4-metric counter strip (`4+` years experience, `130+` cameras analysed, `3` agent & RAG systems, `$3,400/mo` saved per cluster).
   - **Right Column (`HeroLiveDemo.tsx`):**
     - Interactive multi-scene simulation panel with 3 tabs: **Watch** (VisionFacts.ai), **Ask** (Analytics Agent), and **Learn** (Edubotix).
     - Cycles every 7 seconds automatically, pauses permanently upon user click or focus. Supports URL query override (`?scene=watch|ask|learn`).
2. **Section 01: At a Glance:**
   - 6 Ruled Metric Rows: `130+` cameras live, `2` LangGraph agent pipelines, `~6.5x less` GPU memory, `9` scientific FastMCP tools, `74%` fewer false alarms, `$3,400/mo` saved per cluster.
   - Candidate verification sidebar: location flexibility, team size led (`3–5 engineers`), and notice period.
3. **Section 02: Business Impact & Costing (`BusinessImpactSection.tsx`):**
   - 3 Dedicated Enterprise Problem-Solution-ROI Cards:
     1. **Cloud GPU Cost & Multi-Model Architecture ($3,400/mo saved):** Analyzing 130+ cameras with a 6-model suite (YOLO26, Pose, PPE, Fall, Face) naively consumed ~3 GB VRAM per stream (~390 GB total). Centralized Triton serving with zero-copy CUDA IPC lets all 130+ streams fit on just 2x NVIDIA L4 GPUs (48 GB total VRAM), cutting monthly GPU spend by 62%.
     2. **Operational Fatigue (74% fewer false alarms):** Replaced alert fatigue with Gemma 3 E4B VLM zero-shot verification before alerting.
     3. **Data Turnaround & Speed (< 3s response vs 48-hr wait):** Replaced 2-day DBA ticket delays with LangGraph multi-agent pipelines and SELECT-only AST security (85% fewer tickets).
4. **Section 03: Production Case Studies:**
   - Interactive preview rows for VisionFacts.ai, Analytics Agent, and Edubotix.
   - Shows role, dates, plain-English summary, key outcome metrics, tech chips, and arrow links to full case-study pages.
5. **Section 04: Skills (Plain English First):**
   - Four structured skill rows (Computer Vision, Generative AI & Agents, Efficient AI, Systems & Leadership) with icon, headline, sentence, proof counters, and small-text engineering tools.
6. **Section 05: Career Chronology Preview:**
   - Summarized view of Nextbrain Technologies, SS Automation, and Vedant / DRDO with a link to `/experience`.
7. **Section 06: Contact Call to Action:**
   - High-contrast dark charcoal background (`bg-primary text-on-primary`) with timezone, reply time guarantee (`within 24 hours`), target roles, and email/resume/social buttons.

---

### 6.3 Experience Chronology Page (`/experience`)
*File: `app/experience/page.jsx`*

Presents 4+ years of industrial engineering progression from defense radar tracking to industrial IoT and enterprise multi-camera AI clusters.

#### Detailed Sections:
1. **Chapter 0: Hero & 35mm Archival Reel Deck (2-Column Desktop Grid):**
   - SMPTE live running timecode ticker (`SmpteTicker.tsx`).
   - **Left Column (7 cols):** Massive editorial serif headline: *"FOUR YEARS. ONE PIPELINE AT A TIME."*, subtitle balancing high-throughput 130+ camera video microservices with autonomous LangGraph & FastMCP multi-agent systems, and 50/50 scope indicators.
   - **Right Column (5 cols) — 35mm SMPTE Archival Reel Deck (`ArchivalReelPlayer.tsx`):** Precision analog-digital playback animation featuring two rotating mechanical tape spools (Reel A: 130+ Concurrent RTSP Cameras / Triton / CUDA IPC; Reel B: Autonomous LangGraph & FastMCP Agents / < 3s turnaround), threaded tape ribbon with dynamic motion, a central dual playback sensor head with stereo bouncing VU meters (CV & AI channels), live frame-ticking SMPTE timecode, and interactive Play / Pause / 2X Boost transport controls.
   - Filmstrip scrubber bar (`ExperienceScrubber.tsx`): Allows quick jump between Role 01, Role 02, and Role 03 with progress indicators.
   - 4-column metric register balancing CV and GenAI: `4+` Years Prod AI, `130+` Concurrent RTSP, `< 3s` Agent Query Turnaround, `3–5` Engineers Led.
2. **Chapter 1: Role 01 — Nextbrain Technologies (Team Lead – Computer Vision & Generative AI Systems):**
   - Current role banner with live green pulse.
   - Plain-English summary highlighting both the 130+ camera vision clusters and autonomous LangGraph/FastMCP agent systems.
   - 4 Ruled metrics (2 CV, 2 GenAI): `130+` cameras live, `< 3s` agent response, `74%` fewer false alarms, `62%` lower monthly GPU cost ($3,400/mo saved).
   - Plain-English responsibility rows across:
     - 01 // Autonomous Agents & FastMCP (LangGraph pipelines, AST security guardrails, < 3s queries)
     - 02 // High-Throughput Vision Pipelines (130+ concurrent cameras, NVDEC hardware decode)
     - 03 // Multimodal RAG & VLM Reasoning (Gemma 3 false alarm cut, Edubotix curriculum RAG with SymPy/RDKit/Pint tools)
     - 04 // TensorRT & GPU Optimization (Triton multi-model serving, CUDA IPC shared memory, 6.5x memory reduction)
     - 05 // Engineering Leadership & Cadence (mentoring 3–5 engineers, Nsight profiling cadences)
   - **For Engineers Technical Instrument Panel:**
     - Dual NVIDIA L4 GPU cluster snapshot (Grafana 30-min telemetry).
     - Camera dot grid sequence (`CameraGridDots.tsx`) showing NVDEC hardware decoding.
     - Cluster sustained load gauge (`GrowBar` at 88% capacity, 80.1% CPU / 87.7% RAM).
     - Latency readout: `141 ms` mean frame latency, `192 req/s` average primary throughput.
     - Tech stack chips featuring permanently highlighted badges for `LangGraph`, `FastMCP`, `Triton`, `TensorRT`, `YOLOv11/26`, `DINOv3`, and `Qdrant`.
3. **Chapter 2: Role 02 — SS Automation Solutions (Junior Vision Engineer):**
   - Context: Autodidactic leap into machine vision for industrial manufacturing lines.
   - Metrics: `70–85%` defect detection accuracy, `NVIDIA Jetson` (Nano, Xavier NX), `PLC` integration.
   - **Interactive Conveyor Line Schematic:** Graphic depicting industrial GigE camera with 10µs strobe, workpiece bounding box identifying defect cracks, and Siemens S7-1200 PLC pneumatic reject signal.
4. **Chapter 3: Role 03 — Vedant Tech Solutions / DRDO Project (Technical Support Engineer):**
   - Immersive dark canvas panel (`DrdoRadarPanel.tsx`).
   - Live animated 2D radar sweep scope with pulsing targets, Kalman filtering trajectory smoothing, and KNN kinematic state classification readouts.
5. **Chapter 4: Leadership Practice ("How I Lead a Team"):**
   - 3 Plain-English leadership stages with hover dark fills:
     - Stage 01: Nsight GPU Profiling & Bi-weekly Reviews (eliminating CUDA race conditions).
     - Stage 02: Real-Time Prometheus & Grafana Monitoring (zero blindspots).
     - Stage 03: Canary Rollouts & Zero-Downtime Serving (automated health check rollbacks).
6. **Chapter 5: System Blueprint ("A Frame's Journey"):**
   - Interactive 4-node flow (`BlueprintFlow.tsx`) tracking an RTSP packet from network socket through NVDEC, CUDA shared memory, and Triton inference.
7. **Chapter 6: Contact Call to Action:** Full-width dark hiring banner.

---

### 6.4 Project Case Study 1: VisionFacts.ai Core (`/project-visionfacts`)
*File: `app/project-visionfacts/page.jsx`*

Detailed breakdown of the enterprise video analytics platform that processes 130+ concurrent RTSP camera streams on dual NVIDIA L4 GPUs.

#### Detailed Sections:
1. **Chapter 0: Hero & Viewfinder Simulation:**
   - Breadcrumb navigation (`HOME / CASE STUDY: VISIONFACTS.AI`).
   - Giant headline: *"Teaching 130+ cameras to watch."*
   - In Plain English callout box with 3 key proof metrics (`130+` cameras live, `~6.5x less` GPU model memory, `74%` fewer false safety alarms).
   - In-page `StickyJumpBar.tsx` jumping between Overview, How It Works, Challenges, Results, and Contribution.
   - **Live 4-Camera Viewfinder Simulation:** Real-time multi-feed simulation showing Logistics Dock (Forklift detection 0.94), Assembly Line (PPE missing hardhat), North Perimeter (Intrusion), and Storage Bay (Fall incident).
2. **Chapter 1: Overview (The Problem & Solution):**
   - Comparative 2-column problem vs solution breakdown (`ProblemSolutionRow.tsx`).
   - **GPU VRAM Benchmark Comparison Bar (`GrowBar`):** Visualizes naive per-camera model replication (~32.5 GB / 100%) versus centralized Triton serving with CUDA IPC (~5.0 GB / 15.4%), saving ~6.5x memory.
3. **Chapter 2: How It Works ("A Frame's Eight Stages"):**
   - Rendered using `FlowToken.tsx`:
     1. RTSP Ingest (H.264/H.265 NVDEC decode)
     2. Process Isolation (One isolated worker per camera)
     3. NVDEC Decode (GPU pinned memory buffers)
     4. Zero-Copy Inference (CUDA IPC shared memory to Triton)
     5. Rule Logic (Spatial geofences & ByteTrack)
     6. VLM Reasoning (Gemma 3 E4B zero-shot audit)
     7. Persistence (MongoDB timeseries & Redis pub/sub)
     8. Client Alerting (FastAPI WebSockets < 150 ms)
4. **Chapter 3: Challenges & Fixes (Engineering Deep Dives):**
   - 1. GPU Memory Duplication: Solved via centralized Triton architecture.
   - 2. Host-to-Device Memory Overhead: Solved via zero-copy CUDA IPC shared memory.
   - 3. Dynamic VRAM Safety Buffer: 290 MB per camera + mandatory 1,500 MB reserve per GPU to prevent OOM.
   - 4. Shared Primary Detection Multi-Tasking: Single YOLO26 pass feeding all safety rules.
   - 5. On-Premises IP Protection: Compiling Python to native stripped `.so` binaries with Nuitka in Docker.
5. **Chapter 4: Production Results & Telemetry:**
   - Real-world 30-minute Grafana benchmark readout: 112 online cameras, 192 req/s mean throughput, 107 ms model execution, 90.7 ms queue latency, 141 ms end-to-end latency.
6. **Chapter 5: My Contribution:**
   - 80–85% engineering ownership breakdown across Architecture, GPU Optimization, VLM Integration, and Packaging.
7. **Chapter 6: Tech Stack & Cross-Project Navigation:**
   - Links back to Overview and forwards to Analytics Agent.

---

### 6.5 Project Case Study 2: Analytics Agent (`/project-analytics-agent`)
*File: `app/project-analytics-agent/page.jsx`*

Case study on an autonomous multi-agent intelligence system built with LangGraph and FastMCP that translates natural language queries into read-only SQL, correlates database records with camera crops, and generates automated shift reports.

#### Detailed Sections:
1. **Chapter 0: Hero & Interactive Agent Chat Simulation:**
   - Headline: *"Ask the cameras anything."*
   - Plain-English explainer: Eliminates 24–48 hour database ticket turnaround for facility directors.
   - 3 Key metrics: `2` execution pipelines (Ask & Watch), `2` FastMCP servers, `5` data domains guarded with SELECT-only access.
   - **`AnimatedChatTrace.tsx`:** Interactive visual chat transcript illustrating a supervisor query (*"Correlate vehicles entering Gate 2 between 08:00 and 09:00 with attendance logs"*), stepping through tool calls, SQL generation, AST verification, and final structured response with crop previews.
2. **Chapter 1: Overview (The Problem & Solution):**
   - Eliminates database backlogs and enables zero-latency natural-language intelligence.
3. **Chapter 2: How It Works (Two Specialized Pipelines):**
   - **Pipeline 1: Interactive "Ask" Workflow:** SSE Client Request → Schema Inspection via FastMCP → AST Guardrail Verification → Evidence Correlation with MongoDB crops → Structured Response in < 3s.
   - **Pipeline 2: Autonomous "Watch" Workflow:** Scheduled Cron Trigger (15 mins prior to shift change) → Cross-Domain Anomaly Scan → Automated PDF Shift Digest via SMTP.
4. **Chapter 3: Challenges & Fixes:**
   - 1. LAN Snapshot Proxy Security Isolation: Built an authenticated proxy in FastAPI so client browsers cannot directly reach private camera subnet IPs (`ProxyPacketDiagram.tsx` animates this packet flow).
   - 2. AST Validation Against Data Loss: Custom SQL Abstract Syntax Tree parser that unconditionally blocks `INSERT`, `UPDATE`, `DELETE`, `DROP`, and multi-statement queries.
   - 3. Token Reduction via Dynamic MCP Introspection: Cuts prompt token consumption by >60% by inspecting table schemas on demand rather than loading entire databases into system prompts.
5. **Chapter 4: Operational Results:**
   - `< 3s` query response time, `85%` IT ticket reduction, `0` unauthorized database writes.
6. **Chapter 5: My Contribution & Tech Stack:**
   - LangGraph, FastMCP, PostgreSQL, FastAPI, SSE, Google Gemini & OpenAI models.

---

### 6.6 Project Case Study 3: Edubotix Academic Tutor (`/project-edubotix`)
*File: `app/project-edubotix/page.jsx`*

Case study on a multimodal, curriculum-grounded academic tutor that avoids LLM calculation hallucinations by pairing Qdrant dense-sparse RAG with 9 deterministic scientific calculation tools.

#### Detailed Sections:
1. **Chapter 0: Hero & Worked Answer Panel:**
   - Headline: *"Show your working. Every answer."*
   - Plain-English explainer: Solves the token-prediction weakness in standard chatbots by verifying all math and chemistry through code engines.
   - 3 Key metrics: `>70%` faster content ingestion, `9` built-in scientific tools, `100%` verified textbook attributions.
   - **Worked Answer Trace Panel:** Visual representation of an answer verifying `5 m/s × 10 s = 50 m` using Pint & SymPy, with exact textbook attribution to *NCERT Physics Grade 11, Chapter 3, Section 3.2, Page 42*.
2. **Chapter 1: Overview:**
   - Contrast between hallucinated token prediction and deterministic educational tutoring.
3. **Chapter 2: How It Works:**
   - Component 01: Hybrid Retrieval combining dense Amazon Titan V2 vectors with sparse BM25 tokens in Qdrant.
   - Component 02: 9 Scientific FastMCP Tools (Pint for SI units, SymPy for algebra/calculus, RDKit for molecular SMILES and SVG bond rendering).
   - Component 03: Progressive Session Memory (`MemoryProgressionDiagram.tsx`) pairing a sliding-window recent buffer with an automated 20-turn rolling summary in MongoDB.
4. **Chapter 3: Challenges & Fixes:**
   - Token-guessing arithmetic failures eliminated via external calculation sandboxes.
   - Multi-threaded 15-worker textbook ingestion pipeline cutting indexing times by >70%.
5. **Chapter 4: Results & Tech Stack:**
   - AWS Bedrock (Claude 3.5 Sonnet, Titan V2), Qdrant, FastMCP, SymPy, Pint, RDKit, FastAPI, Docker.

---

### 6.7 Project Case Study 4: Drill Bit Inspection Machine (`/project-drill-bit-inspection`)
*File: `app/project-drill-bit-inspection/page.jsx`*

Case study on an automated inline industrial metrology and defect sorting machine deployed at SS Automation across three machine categories (2.5–3mm, 5–8mm, and 8–11mm).

#### Detailed Sections:
1. **Chapter 0: Hero & Inspection Station Visualizer:**
   - Headline: *"Sub-millimeter metrology. Micron accuracy. Real-time PLC reject."*
   - Plain-English explainer: Automated inspection using dual Hikrobot machine cameras to measure 7 geometric dimensions and reject damaged drill bits via PLC pneumatic actuation.
   - 3 Key metrics: `±150–250 µm` scroll gauge tolerance, `70%` defect recall across 8 damage classes, `~20s` per-bit cycle time.
   - **Interactive Station Visualizer (`DrillBitInspectionVisualizer.tsx`):** Tabbed interface with Front Camera tip reticle (point diameter, web thickness, chisel angle, live defect simulator), Top Camera 360° rotation profile with YOLOv7 defect bounding boxes, and 3 Machine Tier breakdown.
2. **Chapter 1: Overview:**
   - Replaces fatigue-prone manual micrometer checking with high-speed automated machine vision.
3. **Chapter 2: How It Works:**
   - 6-Stage Pipeline: Feeder ingest $\rightarrow$ Front Camera metrology $\rightarrow$ Immediate front reject pulse $\rightarrow$ Top Camera & 360° stepper rotation $\rightarrow$ YOLOv7 defect detection $\rightarrow$ Pneumatic sorting and audit log.
   - 7 OpenCV Parameters: Overall length, flute length, front diameter, web thickness, point angle, chisel angle, and helix angle.
4. **Chapter 3: Challenges & Fixes:**
   - Specular reflections on cylindrical carbide flutes resolved via coaxial polarized lighting and adaptive Canny edge extraction.
   - Optical magnification variance across 3 machine categories standardized using shift-start physical scroll gauge calibration.
   - 360° rotation motion blur eliminated via hardware opto-coupler synchronized stop-and-shoot stepper indexing.
5. **Chapter 4: Results & Tech Stack:**
   - OpenCV, YOLOv7, Dual Hikrobot GigE Cameras, Industrial PC (IPC), Industrial PLC (24V Digital I/O), Pneumatic Reject Cylinders, Stepper Motor Indexing.

---

### 6.8 Contact & Hiring Page (`/contact`)
*File: `app/contact/page.jsx`*

High-efficiency, friction-free portal for recruiters, hiring managers, and founders.

#### Detailed Sections:
1. **Chapter 0: Hero & Quick Actions (2-Column Desktop Grid):**
   - Header with status pill (`AVAILABLE FOR HIRE · 90-DAY NOTICE · WITHIN 24 HOURS`).
   - **Left Column (7 cols):** Giant headline *"Let's talk."*, target roles highlighted (*Lead AI Engineer, Staff Computer Vision Engineer, Staff GenAI Systems Architect*), and action buttons with `<CopyButton>` for one-click email copying, resume download, LinkedIn, and GitHub links.
   - **Right Column (5 cols) — Executive Fast-Track Dossier Card:** High-contrast Swiss-style recruiter dossier highlighting the 50/50 CV & GenAI split, 130+ camera production scale, ~390 GB → 48 GB VRAM compaction, LangGraph/FastMCP agentic architecture, team leadership over 3–5 engineers, worldwide mobility, and a 1-click *"Copy Recruiter Dossier (Slack / ATS ready)"* action button.
   - **Candidate Facts Strip (5 Cards):** Looking For (Lead / Staff AI), Location (Bangalore; onsite/hybrid/remote/relocation open), Notice Period (90 days), Timezone (IST UTC+5:30, flexible), Reply Time (< 24 hours).
2. **Chapter 1: Four Things I'm Hired For (Core Value Quadrants):**
   - 2x2 grid of cards featuring an animated signal-orange hairline hover top border:
     - 01 // Real-Time Video & Vision: 4+ years vision, 130+ cameras live on 2x L4 GPUs, full multi-model execution (YOLOv11, YOLO26, DINOv3, RetinaFace, ArcFace, ByteTrack, PyTorch, OpenCV).
     - 02 // Multimodal & Agents: Gemma 3 VLM for 74% false alarm reduction, LangGraph multi-agent pipelines, FastMCP tool integration, and multimodal RAG in Edubotix.
     - 03 // GPU Optimization & High Throughput: Avoided ~390 GB VRAM by centralizing the 6-model suite on Triton, TensorRT FP32 (192 req/s), CUDA IPC zero-copy memory, 62% cost savings.
     - 04 // Technical Engineering Leadership: Mentored 3–5 engineers across CV and GenAI sprints, Nsight profiling cadences, zero-downtime canary rollouts, client discovery across 5+ deployments.
3. **Chapter 2: Frequently Asked Questions (`<Disclosure>` Accordion):**
   - Animated collapsible accordion answering:
     1. *What specific full-time roles are you prioritizing?*
     2. *What are your location preferences and work arrangements?*
     3. *What is your notice period and interview process?*
4. **Chapter 3: Direct Contact Channels:**
   - 3 Interactive channel cards: Primary Email (with `<CopyButton>`), LinkedIn Profile, and GitHub Code Repositories.

---

## 7. Developer & AI Modification Guide (How to Make Changes Easily)

This section provides clear, step-by-step recipes for any developer or AI agent updating this portfolio.

### How to Update Candidate Identity, Metrics & Contacts

All personal facts and numbers live exclusively in `content/facts.ts`. **Do not edit JSX files to change candidate metrics.**

1. **Changing Notice Period, Location, or Role:**
   - Open `content/facts.ts`.
   - Update `IDENTITY.noticePeriod`, `IDENTITY.location`, `IDENTITY.headlineRole`, or `IDENTITY.targetRoles`.
   - The changes propagate automatically to `Navbar.jsx`, `Footer.jsx`, `app/page.jsx`, `app/experience/page.jsx`, `app/contact/page.jsx`, and metadata tags.
2. **Updating a Verified Telemetry Number (e.g. from 130+ to 200+ cameras):**
   - Open `content/facts.ts`.
   - Update `VERIFIED_NUMBERS.camerasCount = "200+"`.
   - Open `content/skills.ts` and sync the corresponding proof value in `SKILLS`.
   - Open `content/heroScenes.ts` and update `bigLabel` in the `watch` scene.
   - All CountUp animations, diagrams, and section headers update synchronously without discrepancy.
3. **Updating Email, LinkedIn, or Resume Links:**
   - Set environment variables (`NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_LINKEDIN`, `NEXT_PUBLIC_GITHUB`, `NEXT_PUBLIC_RESUME_URL`) in deployment settings (e.g., Vercel), OR update the fallback strings in `CONTACT_INFO` inside `content/facts.ts`.
   - To replace the resume PDF, overwrite `public/resume.pdf`.

---

### How to Add a New Project Case Study

To add a 4th project (e.g., `project-industrial-defect`):

1. **Register the Project in `content/facts.ts`:**
   - Append a new `ProjectItem` object to the `PROJECTS` array with `id`, `slug: "/project-industrial-defect"`, `title`, `subtitle`, `role`, `companyDates`, `technologies`, `plainEnglish`, `results`, and `tech` chips.
2. **Create the New Route:**
   - Create directory `app/project-industrial-defect/`.
   - Create `app/project-industrial-defect/page.jsx`.
   - Use `app/project-visionfacts/page.jsx` or `app/project-analytics-agent/page.jsx` as your template.
   - Import `StickyJumpBar`, `ProblemSolutionRow`, `CountUp`, `FlowToken`, and shared motion atoms.
3. **Update Cross-Project Navigation:**
   - In `app/project-edubotix/page.jsx`, update the closing navigation box so the "NEXT PROJECT" points to `/project-industrial-defect`.
   - In your new project page, set "PREVIOUS PROJECT" to `/project-edubotix` and "NEXT PROJECT" to `/project-visionfacts`.
4. **Link from the Skills Section:**
   - Open `content/skills.ts` and add `{ label: "New Project Name", href: "/project-industrial-defect" }` to the `usedIn` array of the appropriate skill row.

---

### How to Update Work Experience

1. **Edit or Add Roles in `content/facts.ts`:**
   - Find `EXPERIENCE_ROLES`.
   - Each role contains `title`, `company`, `location`, `period`, `domain`, `flagshipRole`, `plainSummary`, `outcomes`, `responsibilities` (array of `{ area, detail }`), and `techStack` chips.
2. **Modify Experience Page Visuals (`app/experience/page.jsx`):**
   - The Home page preview (`components/home/ExperiencePreview.tsx`) reads directly from `EXPERIENCE_ROLES` and updates automatically.
   - On `app/experience/page.jsx`, each role is mapped to an editorial chapter. If adding a 4th role, add a new `<section id="chapter-4">` following the established typography and ruled border conventions.

---

### How to Modify Design Tokens (Colors, Fonts, Spacing)

1. **Changing Colors:**
   - Open `tailwind.config.js`.
   - All colors are mapped under `theme.extend.colors`.
   - For example, to adjust the signal orange brand accent, update:
     ```javascript
     "secondary": "#ae3200",               // Terracotta base
     "secondary-container": "#fd591e",     // Vibrant button fill
     "signal-orange-hover": "#E04A12",     // Hover state
     "signal-orange-tint": "#FFE6DA",      // Muted text highlight box
     ```
   - Because all components use semantic utility classes (e.g. `bg-surface`, `bg-paper-sunken`, `text-secondary`, `border-line`), changing the token updates the entire site instantly.
2. **Changing Fonts:**
   - Open `app/globals.css` and update the `@import` Google Font URL.
   - Open `tailwind.config.js` and update `theme.extend.fontFamily`.

---

### How to Safely Tune Motion & Animation

1. **Adjusting Speeds & Transitions Globally:**
   - Open `lib/motion.ts`.
   - Modify `TIMING` constants (e.g., `micro`, `base`, `reveal`) or `EASING` arrays.
   - All motion components importing `TRANSITIONS` will automatically adopt the new rhythm.
2. **Rules for Maintaining Motion Safety:**
   - Always wrap motion elements with `useMotionOK()` or use classes with `[data-motion]` so users with vestibular motion sensitivity get an instantaneous, accessible experience.
   - Never disable the fallback `<noscript>` styling in `app/layout.jsx`.

---

### Build, Validation & Deployment Workflow

Always verify changes locally before pushing to production:

```bash
# 1. Run local development server
npm run dev

# 2. Test development server on local network (e.g. testing mobile devices)
npm run dev:host

# 3. Compile production build and verify strict TypeScript / JSX typing
npm run build

# 4. Start production server locally to benchmark performance
npm run start
```

- **Clean Build Expectation:** `npm run build` must complete with zero errors. All routes will be statically generated as static HTML pages (`○ /`, `○ /experience`, `○ /contact`, `○ /project-visionfacts`, `○ /project-analytics-agent`, `○ /project-edubotix`).

---

*Document compiled and maintained for Rajesh Kumar S's Portfolio Repository.*
