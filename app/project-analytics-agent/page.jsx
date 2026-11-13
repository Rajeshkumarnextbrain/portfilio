import Link from "next/link";

export default function AnalyticsAgentPage() {
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-16 bottom-0 w-16 z-40 flex-col items-center justify-between py-space-xl"><div className="flex flex-col items-center gap-space-md"><span className="font-label-sm text-label-sm text-ink-muted uppercase">RAIL</span><div className="flex flex-col items-center gap-space-xs font-label-sm text-label-sm text-ink-faint"><span className="text-primary font-bold">00</span><span className="text-ink-muted">01</span><span className="text-secondary font-bold">02</span><span className="text-ink-muted">03</span><span className="text-ink-faint">04</span><span className="text-ink-faint">05</span><span className="text-ink-faint">06</span><span className="text-ink-faint">07</span><span className="text-ink-faint">08</span></div></div><div className="flex flex-col items-center gap-1"><span className="w-2 h-0.5 bg-secondary-container"></span><span className="font-label-sm text-[9px] text-ink-muted tracking-widest uppercase">POS</span></div></aside><div className="hidden lg:block fixed bottom-space-lg left-20 z-40 pointer-events-none"><div className="bg-surface-container-low px-space-md py-1.5 rounded-DEFAULT shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><span className="font-label-timecode text-label-timecode uppercase text-on-surface-variant tracking-widest">CASE STUDY 02 / 03 · <span className="text-primary font-bold">ANALYTICS AGENT</span></span></div></div>
      <main className="w-full pt-16 bg-surface lg:pl-16 min-h-screen"><div className="flex flex-col w-full">
{/* ================================================================= */}
{/* CHAPTER 0: HERO (Warm Paper) */}
{/* ================================================================= */}
<section className="w-full bg-surface text-on-surface pt-space-2xl pb-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Telemetry Breadcrumb */}
<div className="flex items-center justify-between border-b border-line pb-space-sm mb-space-2xl">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-muted uppercase tracking-widest">
<span className="text-primary font-bold">PROJECTS</span>
<span className="text-line">/</span>
<span>ANALYTICS AGENT</span>
<span className="text-line">/</span>
<span className="text-secondary font-bold">FRAME 01 / 08</span>
</div>
<div className="hidden sm:flex items-center gap-space-md font-label-timecode text-label-timecode text-ink-muted">
<span>LAT: 12.9716° N</span>
<span>LON: 77.5946° E</span>
<span className="text-secondary font-bold">SYS_ACTIVE</span>
</div>
</div>
{/* Mega Headline (Space Grotesk, 3 lines, tight tracking) */}
<div className="flex flex-col mb-space-xl">
<h1 className="font-mega-display text-display md:text-mega-display leading-none tracking-tighter uppercase font-bold text-primary flex flex-col">
<span>Ask the</span>
<span><mark className="bg-signal-orange-tint text-secondary px-space-xs inline-block">cameras</mark></span>
<span>anything.</span>
</h1>
<p className="font-body-lg text-body-lg text-ink-muted max-w-3xl mt-space-lg leading-relaxed">
          A multi-agent CCTV intelligence and autonomous reporting platform that lets non-technical operations and safety teams question surveillance and physical security records in plain English—and emails them the shift audit before they ask.
        </p>
</div>
{/* Ruled Mono Metadata Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 border-y border-line py-space-md mb-space-2xl gap-space-md font-label-sm text-label-sm">
<div className="flex flex-col gap-0.5">
<span className="text-ink-faint uppercase">ROLE / ARCHITECTURE</span>
<span className="text-primary font-bold uppercase">AI &amp; Systems Architect (End-to-End Ownership)</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-ink-faint uppercase">DEPLOYMENT ENVIRONMENT</span>
<span className="text-primary font-bold uppercase">Nextbrain Technologies · Bangalore (UTC+5:30)</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-ink-faint uppercase">ECOSYSTEM INTERACTION</span>
<span className="text-primary font-bold uppercase">Extends VisionFacts.ai CCTV Core Suite</span>
</div>
</div>
{/* 4 Giant Mono Numerals (Hairline Separators) */}
<div className="grid grid-cols-2 md:grid-cols-4 border-b border-line mb-space-2xl">
<div className="flex flex-col py-space-lg pr-space-md border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile md:text-metric-numeral text-primary leading-none">02</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-muted mt-space-xs">Pipelines (Ask / Watch)</span>
</div>
<div className="flex flex-col py-space-lg px-space-md md:border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile md:text-metric-numeral text-secondary leading-none">02</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-muted mt-space-xs">MCP Server Instances</span>
</div>
<div className="flex flex-col py-space-lg px-space-md border-r border-line">
<span className="font-metric-numeral text-metric-numeral-mobile md:text-metric-numeral text-primary leading-none">00</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-muted mt-space-xs">Write Mutations (SELECT-Only)</span>
</div>
<div className="flex flex-col py-space-lg pl-space-md">
<span className="font-metric-numeral text-metric-numeral-mobile md:text-metric-numeral text-primary leading-none">05</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-muted mt-space-xs">Core PostgreSQL Domains</span>
</div>
</div>
{/* Viewfinder Bracket Interactive Simulation Mockup */}
<div className="relative w-full bg-paper-raised border border-line p-space-md md:p-space-xl mb-space-xl">
{/* Viewfinder Brackets ⌜ ⌝ ⌞ ⌟ */}
<span className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-primary pointer-events-none"></span>
<span className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-primary pointer-events-none"></span>
<span className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-primary pointer-events-none"></span>
<span className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-primary pointer-events-none"></span>
{/* Terminal Header */}
<div className="flex items-center justify-between border-b border-line pb-space-sm mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<span className="font-label-timecode text-label-timecode font-bold uppercase text-primary">LIVE INFERENCE FEED · AD-HOC TELEMETRY REASONING</span>
</div>
<div className="font-label-sm text-label-sm text-ink-muted uppercase">
            PROTOCOL: SSE · MCP-STDIO
          </div>
</div>
{/* Chat Stream Visualizer */}
<div className="flex flex-col gap-space-lg">
{/* User Prompt */}
<div className="flex flex-col bg-surface-container-low p-space-md border border-line">
<span className="font-label-sm text-[10px] text-ink-muted uppercase tracking-widest mb-1">OPERATOR INQUIRY · DISPATCH CHAT</span>
<p className="font-headline-md text-body-lg text-primary font-medium">
              "Correlate vehicles entering Gate 2 between 08:00 and 09:00 with attendance logs and perimeter alerts."
            </p>
</div>
{/* Agent Tool Call & Execution Trace */}
<div className="flex flex-col gap-space-xs font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm text-secondary">
<span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
<span className="font-bold">INSPECTING RUNTIME CATALOG:</span>
<code className="bg-surface-container-high px-1 text-primary">mcp-postgres-server → describe_table("vehicle_logs")</code>
</div>
<div className="flex items-center gap-space-sm text-ink-muted pl-6">
<span>→ Schema valid. Compiling read-only AST expression. Emitting SELECT statement.</span>
</div>
<div className="flex items-center gap-space-sm text-status-success pl-6">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Guardrail: 0 destructive mutations detected. Executed in 14.8ms.</span>
</div>
</div>
{/* Structured Result & Snapshot Mockup */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md pt-space-xs">
<div className="lg:col-span-2 bg-surface border border-line p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between border-b border-line pb-space-xs mb-space-sm">
<span className="font-label-sm text-label-sm font-bold uppercase text-primary">Correlated Audit Output</span>
<span className="font-label-sm text-[10px] text-ink-muted uppercase">Records: 1 matched</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-label-sm text-label-sm">
<thead>
<tr className="border-b border-line text-ink-faint">
<th className="py-1">TIMECODE</th>
<th className="py-1">VEHICLE ID</th>
<th className="py-1">GATE</th>
<th className="py-1">STATUS</th>
</tr>
</thead>
<tbody className="text-on-surface">
<tr className="border-b border-surface-container">
<td className="py-2 font-label-timecode">08:14:22.104</td>
<td className="py-2 text-primary font-bold">Forklift #4092</td>
<td className="py-2">Gate 02 (Perimeter North)</td>
<td className="py-2 text-secondary font-bold">Driver Unbadged</td>
</tr>
</tbody>
</table>
</div>
</div>
<p className="font-body-sm text-body-sm text-ink-muted mt-space-sm">
                Perimeter motion trigger #902 aligned within 3 seconds of entry. Shift badge record missing for assigned bay driver.
              </p>
</div>
{/* Optical Snapshot Thumbnail (Private LAN Proxy) */}
<div className="relative bg-surface-container-high border border-line p-space-sm flex flex-col justify-between">
{/* Bounding Box Annotation */}
<div className="relative w-full aspect-video bg-primary flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="High contrast CCTV surveillance camera frame showing an industrial logistics loading dock with a bright forklift entering Gate 02, marked with high visibility safety colors, sharp overhead security lighting, and a crisp monospaced timestamp overlay in the lower corner." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlYxF8QgBZPrZAIeodWPvrIpkKcr7OsyDVauvp6BpqCjFJ-IIHORIZSNPWTc401c5HiYBvaXVZV_-7FVhEeNipU1oDyPqZktgXusZNvIRzLHoZA52P1FxS2DWZoDduMq0VcbiTi7d0BqBXKkSepz-oLIYCxsoKfJaChM_6HBLs8w7EGMtZiKBj-BqMQBFUR_NATu9Hn0BicC8ZmEb3YozJfn22hQKGPo88uu6RMXpF"/>
{/* Precision Bounding Box */}
<div className="absolute inset-4 border border-secondary pointer-events-none flex flex-col justify-between p-1">
<span className="bg-secondary text-surface font-label-sm text-[9px] px-1 w-max">VEHICLE_FORKLIFT_4092 · 98.4%</span>
<span className="font-label-timecode text-[9px] text-surface self-end">CAM_04_LAN_10.2.14.88</span>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs font-label-sm text-[10px] text-ink-muted">
<span>GATE 02 · CAM #04</span>
<span className="text-secondary font-bold">PROXY_VALIDATED</span>
</div>
</div>
</div>
</div>
</div>
{/* Tech Chip Row */}
<div className="flex flex-wrap items-center gap-space-xs pt-space-md border-t border-line font-label-sm text-label-sm text-ink-muted">
<span className="text-ink-faint uppercase mr-space-sm">STACK MATRIX:</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">LangChain</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">DeepAgents</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">LangGraph</span>
<span className="bg-signal-orange-tint px-space-sm py-1 text-secondary font-bold">Model Context Protocol (MCP)</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">FastAPI</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">PostgreSQL</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">React 18</span>
<span className="bg-surface-container-high px-space-sm py-1 text-primary">Docker Compose</span>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 1: OVERVIEW (Paper Sunken #ECE8DF) */}
{/* ================================================================= */}
<section className="w-full bg-paper-sunken text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-space-lg">
<span className="w-2 h-2 bg-secondary inline-block"></span>
<span>01 / OVERVIEW · CORE CONCEPT</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-2xl max-w-4xl">
        From database tickets to an autonomous operational dialogue.
      </h2>
{/* Two-column Split with Vertical Hairline Divider */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-2xl border-y border-line py-space-2xl mb-space-2xl relative">
<div className="flex flex-col pr-0 md:pr-space-xl">
<span className="font-label-sm text-label-sm text-ink-faint uppercase tracking-wider mb-space-md">01.01 · THE TELEMETRY SILO</span>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
            The production <strong className="text-primary font-bold">VisionFacts.ai</strong> platform continuously ingests over 130 camera streams to detect critical safety and security events—from high-risk PPE violations to perimeter breaches and forklift traffic anomalies. Yet, day-to-day warehouse directors, floor supervisors, and HR teams were locked behind database administration backlogs: obtaining cross-domain insights (e.g., matching unbadged gate entries with perimeter motion) required manual DBA query requests with 24-to-48 hour turnaround times.
          </p>
</div>
<div className="flex flex-col pl-0 md:pl-space-xl md:border-l border-line">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-md">01.02 · THE DUAL EXECUTION SOLUTION</span>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
            I designed an agentic architecture anchored around <strong className="text-primary font-bold">"Ask &amp; Watch"</strong>—a dual-channel system delivering on-demand natural language conversational synthesis alongside fully autonomous scheduled audit dispatches. The agent acts not merely as a chatbot, but as an active telemetry observer continuously monitoring relational state, compiling safety trends, and packaging verifiable visual proofs.
          </p>
</div>
</div>
{/* Two Large Numbered Ruled Rows */}
<div className="flex flex-col border-b border-line">
{/* Row 1: Pipeline A */}
<div className="group py-space-xl border-t border-line hover:bg-surface transition-colors px-space-md">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">
<div className="md:col-span-1 font-label-sm text-headline-md text-primary font-bold">
              01
            </div>
<div className="md:col-span-4 flex flex-col">
<span className="font-label-sm text-label-sm text-ink-muted uppercase">PIPELINE A · AD-HOC INVESTIGATIONS</span>
<h3 className="font-headline-md text-body-lg md:text-headline-md font-bold text-primary mt-1">Interactive Analytical Intelligence</h3>
</div>
<div className="md:col-span-7 font-body-md text-body-md text-ink-muted leading-relaxed">
              Provides real-time conversational query parsing for floor supervisors. The primary coordinator agent decomposes compound questions, validates schemas via MCP tools at runtime, generates bounded read-only SQL, and streams responses containing interactive data registers, aggregated trendlines, and directly resolved camera snapshot previews.
            </div>
</div>
</div>
{/* Row 2: Pipeline B */}
<div className="group py-space-xl border-t border-line hover:bg-surface transition-colors px-space-md">
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">
<div className="md:col-span-1 font-label-sm text-headline-md text-secondary font-bold">
              02
            </div>
<div className="md:col-span-4 flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase">PIPELINE B · PROACTIVE AUDITING</span>
<h3 className="font-headline-md text-body-lg md:text-headline-md font-bold text-primary mt-1">Autonomous Scheduled Reporting</h3>
</div>
<div className="md:col-span-7 font-body-md text-body-md text-ink-muted leading-relaxed">
              An asynchronous background engine embedded within the application lifecycle. Without requiring human prompt input, the agent conducts systematic hourly delta audits (current hour vs. baseline) and full shift summaries. It identifies micro-trends, preserves low-frequency rare anomalies, and dispatches responsive, inline-styled executive email digests.
            </div>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 2: PROBLEM & OBJECTIVES (Warm Paper) */}
{/* ================================================================= */}
<section className="w-full bg-surface text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-muted uppercase tracking-widest mb-space-lg">
<span className="text-primary font-bold">02</span>
<span className="text-line">/</span>
<span>DIAGNOSIS &amp; TARGETS</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-3xl max-w-4xl">
        Four operational bottlenecks. Three strategic objectives.
      </h2>
{/* Part A: Operational Bottlenecks (Ruled Rows) */}
<div className="flex flex-col mb-space-chapter">
<div className="flex items-center justify-between border-b border-line pb-space-sm mb-space-md">
<span className="font-label-sm text-label-sm text-ink-faint uppercase tracking-wider">SECTION 02.A · SYSTEM VULNERABILITIES</span>
<span className="font-label-timecode text-label-timecode text-ink-muted">CRITICAL FRICTION POINTS</span>
</div>
<div className="flex flex-col divide-y divide-line">
{/* Bottleneck 01 */}
<div className="py-space-lg flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<div className="flex items-baseline gap-space-md md:w-1/3">
<span className="font-label-sm text-label-sm text-ink-muted">02.01</span>
<span className="font-headline-md text-body-lg font-bold text-primary">High-Volume Telemetry Overload</span>
</div>
<p className="md:w-2/3 font-body-md text-body-md text-ink-muted leading-relaxed">
              Over 130 RTSP feeds generate tens of thousands of event records daily across helmet checks, high-vis compliance, and zone trespasses. Operations personnel experience acute alert fatigue, causing vital edge cases to slip past unnoticed.
            </p>
</div>
{/* Bottleneck 02 */}
<div className="py-space-lg flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<div className="flex items-baseline gap-space-md md:w-1/3">
<span className="font-label-sm text-label-sm text-ink-muted">02.02</span>
<span className="font-headline-md text-body-lg font-bold text-primary">Manual Query &amp; Collation Lag</span>
</div>
<p className="md:w-2/3 font-body-md text-body-md text-ink-muted leading-relaxed">
              Safety and shift managers lack SQL expertise. Correlating worker attendance tables with gate crossing events required ticketing internal data teams, rendering incident investigations reactive rather than preventative.
            </p>
</div>
{/* Bottleneck 03 */}
<div className="py-space-lg flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<div className="flex items-baseline gap-space-md md:w-1/3">
<span className="font-label-sm text-label-sm text-ink-muted">02.03</span>
<span className="font-headline-md text-body-lg font-bold text-primary">Dashboard Vigilance Friction</span>
</div>
<p className="md:w-2/3 font-body-md text-body-md text-ink-muted leading-relaxed">
              Existing systems mandate continuous human observation: opening complex web interfaces, setting date pickers, and refreshing bento charts. Critical shifts changed without safety digests unless someone manually audited the records.
            </p>
</div>
{/* Bottleneck 04 */}
<div className="py-space-lg flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<div className="flex items-baseline gap-space-md md:w-1/3">
<span className="font-label-sm text-label-sm text-ink-muted">02.04</span>
<span className="font-headline-md text-body-lg font-bold text-primary">Disconnected Snapshot Verification</span>
</div>
<p className="md:w-2/3 font-body-md text-body-md text-ink-muted leading-relaxed">
              CCTV visual frames reside on isolated, private internal LAN subnets (`192.168.x.x` / `10.x.x.x`). Operators viewing web dashboards could see numerical telemetry, but could not inspect the actual physical optical frames to confirm threats.
            </p>
</div>
</div>
</div>
{/* Part B: Three Strategic Objectives */}
<div className="flex flex-col">
<div className="flex items-center justify-between border-b border-line pb-space-sm mb-space-xl">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">SECTION 02.B · SYSTEM ARCHITECTURAL MANDATES</span>
<span className="font-label-timecode text-label-timecode text-secondary font-bold">SUCCESS CRITERIA</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
{/* Objective 01 */}
<div className="flex flex-col border-t-2 border-primary pt-space-lg">
<span className="font-metric-numeral text-metric-numeral-mobile text-secondary font-bold">01</span>
<h3 className="font-headline-md text-headline-md font-bold text-primary mt-space-sm mb-space-sm">Zero-SQL Dialect</h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              Empower non-technical operators to interrogate production PostgreSQL stores via conversational English with absolute structural schema grounding and zero hallucinated syntax.
            </p>
</div>
{/* Objective 02 */}
<div className="flex flex-col border-t-2 border-secondary pt-space-lg">
<span className="font-metric-numeral text-metric-numeral-mobile text-secondary font-bold">02</span>
<h3 className="font-headline-md text-headline-md font-bold text-primary mt-space-sm mb-space-sm">Autonomous Shift Auditing</h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              Establish non-prompted temporal monitoring that calculates hour-by-hour delta shifts and compiles full-day digests delivered directly to subscriber inboxes via SSL-encrypted SMTP.
            </p>
</div>
{/* Objective 03 */}
<div className="flex flex-col border-t-2 border-primary pt-space-lg">
<span className="font-metric-numeral text-metric-numeral-mobile text-secondary font-bold">03</span>
<h3 className="font-headline-md text-headline-md font-bold text-primary mt-space-sm mb-space-sm">Secure Visual Proxy</h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              Safely stream private internal LAN camera snapshots into client browsers through an allowlist-validated proxy layer without compromising physical security architecture.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 3: MULTI-AGENT ARCHITECTURE (INVERSE Dark Ink #14130F) */}
{/* ================================================================= */}
<section className="w-full bg-primary text-on-primary py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint uppercase tracking-widest mb-space-lg">
<span className="w-2 h-2 bg-secondary inline-block"></span>
<span className="text-surface font-bold">03 / MULTI-AGENT ARCHITECTURE</span>
<span className="text-ink-muted">· DUAL-CORE SCHEMATICS</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl border-b border-primary-container pb-space-lg">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-surface tracking-tight max-w-2xl">
          Two pipelines, not one monolith.
        </h2>
<span className="font-label-timecode text-label-timecode text-ink-muted mt-space-sm md:mt-0">
          TOPOLOGY: DEEPAGENTS + FASTAPI + MCP
        </span>
</div>
{/* Schematics Container */}
<div className="flex flex-col gap-space-3xl">
{/* Pipeline A: ASK Diagram */}
<div className="flex flex-col">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 bg-surface text-primary font-label-sm text-[11px] font-bold">PIPELINE A</span>
<span className="font-headline-md text-body-lg text-surface font-bold uppercase tracking-wider">"ASK" · AD-HOC CONVERSATIONAL REASONING</span>
</div>
<span className="font-label-sm text-[11px] text-ink-muted uppercase">SSE Streaming · Synchronous Feedback</span>
</div>
{/* Flow Pipeline Nodes (Desktop Row) */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
{/* Node 1 */}
<div className="relative bg-primary-container border border-on-surface-variant p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-surface"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-surface"></span>
<span className="font-label-sm text-[10px] text-ink-faint uppercase">STAGE 01</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">React UI Client</h4>
<p className="font-body-sm text-body-sm text-ink-faint">User inputs question; SSE listener established.</p>
</div>
{/* Node 2 */}
<div className="relative bg-primary-container border border-on-surface-variant p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-surface"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-surface"></span>
<span className="font-label-sm text-[10px] text-ink-faint uppercase">STAGE 02</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">CCTV Analyst</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Primary DeepAgent parses intent &amp; formulates schema plan.</p>
</div>
{/* Node 3 */}
<div className="relative bg-primary-container border border-on-surface-variant p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-surface"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-surface"></span>
<span className="font-label-sm text-[10px] text-ink-faint uppercase">STAGE 03</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Postgres MCP</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Calls describe_table &amp; executes SELECT over stdio.</p>
</div>
{/* Node 4 */}
<div className="relative bg-primary-container border border-on-surface-variant p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-surface"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-surface"></span>
<span className="font-label-sm text-[10px] text-ink-faint uppercase">STAGE 04</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Output Subagent</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Formats structured markdown, tables &amp; snapshot tokens.</p>
</div>
{/* Node 5 */}
<div className="relative bg-primary-container border border-on-surface-variant p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-surface"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-surface"></span>
<span className="font-label-sm text-[10px] text-ink-faint uppercase">STAGE 05</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Dashboard Render</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Incremental render, camera thumbnail popover, XLSX export.</p>
</div>
</div>
</div>
{/* Pipeline B: WATCH Diagram (Highlighted in Signal Orange) */}
<div className="flex flex-col border-t border-primary-container pt-space-2xl">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 bg-secondary text-surface font-label-sm text-[11px] font-bold">PIPELINE B</span>
<span className="font-headline-md text-body-lg text-secondary font-bold uppercase tracking-wider">"WATCH" · AUTONOMOUS BACKGROUND AUDITS</span>
</div>
<span className="font-label-sm text-[11px] text-secondary-fixed-dim uppercase">Async Lifespan Engine · Zero-Prompt Dispatches</span>
</div>
{/* Flow Pipeline Nodes (Desktop Row) */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
{/* Node 1 */}
<div className="relative bg-primary-container border border-secondary p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary"></span>
<span className="font-label-sm text-[10px] text-secondary uppercase font-bold">WATCH STAGE 01</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Async Scheduler</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Non-blocking background loops bound to FastAPI lifecycle.</p>
</div>
{/* Node 2 */}
<div className="relative bg-primary-container border border-secondary p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary"></span>
<span className="font-label-sm text-[10px] text-secondary uppercase font-bold">WATCH STAGE 02</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Surveillance Agent</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Calculates hourly delta deltas &amp; isolates rare edge anomalies.</p>
</div>
{/* Node 3 */}
<div className="relative bg-primary-container border border-secondary p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary"></span>
<span className="font-label-sm text-[10px] text-secondary uppercase font-bold">WATCH STAGE 03</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">MultiServer Client</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Fires temporal aggregation SQL runs across multi-domain tables.</p>
</div>
{/* Node 4 */}
<div className="relative bg-primary-container border border-secondary p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary"></span>
<span className="font-label-sm text-[10px] text-secondary uppercase font-bold">WATCH STAGE 04</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">Email Subagent</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Compiles responsive inline CSS email HTML digests &amp; delta markers.</p>
</div>
{/* Node 5 */}
<div className="relative bg-primary-container border border-secondary p-space-md flex flex-col justify-between">
<span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-secondary"></span>
<span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-secondary"></span>
<span className="font-label-sm text-[10px] text-secondary uppercase font-bold">WATCH STAGE 05</span>
<h4 className="font-headline-md text-body-md text-surface font-bold my-space-xs">SMTP Broadcast</h4>
<p className="font-body-sm text-body-sm text-ink-faint">Delivers end-of-shift audits directly to subscriber inboxes over SSL.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 4: NINE CAPABILITIES (Paper Sunken #ECE8DF) */}
{/* ================================================================= */}
<section className="w-full bg-paper-sunken text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-space-lg">
<span className="w-2 h-2 bg-secondary inline-block"></span>
<span>04 / SYSTEM SPECIFICATIONS</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-3xl">
        Nine production capabilities.
      </h2>
{/* 3x3 Ruled Register (No Cards, Sharp Hairline Grid) */}
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
{/* Cap 01 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">01</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Natural-Language SQL Synthesis</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Translates ambiguous, operational plain-text questions into syntactically valid PostgreSQL statements without requiring end-user SQL knowledge.
          </p>
</div>
{/* Cap 02 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">02</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Runtime Schema Inspection</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Prior to constructing queries, the agent calls `describe_table` via MCP to ground itself on live column names, foreign keys, and indexes, eliminating hallucinations.
          </p>
</div>
{/* Cap 03 */}
<div className="border-b border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-secondary font-bold">03</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Read-Only SQL Guardrails</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Strict AST query parsing enforces SELECT-only permissions. Any attempt to invoke INSERT, UPDATE, DELETE, or DROP triggers instantaneous interception.
          </p>
</div>
{/* Cap 04 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-secondary font-bold">04</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Scheduled Autonomous Auditing</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Asynchronous background loops trigger automated hourly comparisons (current hour vs. preceding hour) and complete shift compilations without human intervention.
          </p>
</div>
{/* Cap 05 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">05</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Rare-Event Preservation</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Specialized aggregation logic guarantees that low-frequency critical incidents (PPE infractions, unauthorized access) are highlighted rather than buried in high-volume averages.
          </p>
</div>
{/* Cap 06 */}
<div className="border-b border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">06</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Live Activity Telemetry (SSE)</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Exposes agent runtime states, sub-task handoffs, and active SQL queries over Server-Sent Events, giving users real-time visibility without cluttering answers.
          </p>
</div>
{/* Cap 07 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-secondary font-bold">07</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">CCTV Snapshot Rendering</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Resolves internal hardware camera IDs into authenticated snapshot thumbnails in chat answers, opening a full-resolution inspection modal on click.
          </p>
</div>
{/* Cap 08 */}
<div className="border-b md:border-r border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">08</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Client-Side XLSX Generation</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            One-click audit export implemented via ExcelJS and File-Saver, formatting data tables into ready-to-share spreadsheets directly in the browser.
          </p>
</div>
{/* Cap 09 */}
<div className="border-b border-line p-space-lg flex flex-col justify-between min-h-[220px]">
<div>
<span className="font-label-sm text-body-lg text-primary font-bold">09</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-space-sm mb-space-xs">Subscriber Management</h3>
</div>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
            Full notification lifecycle: automated onboarding emails, shift preference toggling, active subscriber administration, and one-click unsubscribe links.
          </p>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 5: MCP & DATA DOMAIN (Warm Paper) */}
{/* ================================================================= */}
<section className="w-full bg-surface text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-muted uppercase tracking-widest mb-space-lg">
<span className="text-primary font-bold">05</span>
<span className="text-line">/</span>
<span>MCP PROTOCOL &amp; DATA CONTRACTS</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-3xl max-w-3xl">
        Standardized tools behind an open protocol.
      </h2>
{/* Part A: MCP Multi-Server Architecture (Ruled Rows) */}
<div className="flex flex-col mb-space-3xl">
<span className="font-label-sm text-label-sm text-ink-faint uppercase tracking-wider mb-space-sm">PART 05.A · MODEL CONTEXT PROTOCOL DEPLOYMENT</span>
<div className="flex flex-col border-y border-line divide-y divide-line">
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">
<div className="md:col-span-4 flex flex-col">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">INSTANCE 01 · DATABASE BUS</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-0.5">mcp-postgres-server</h3>
<span className="font-label-timecode text-label-timecode text-ink-muted mt-1">TRANSPORT: stdio · PERMISSION: Read-Only</span>
</div>
<div className="md:col-span-8 font-body-md text-body-md text-ink-muted leading-relaxed">
              Standardized tool server exposing PostgreSQL introspection and execution primitives: <code className="bg-surface-container-high px-1 text-primary">describe_table</code> for live column extraction and schema validation, and bounded <code className="bg-surface-container-high px-1 text-primary">execute_query</code> for AST-checked SELECT commands. Isolates the database engine behind a rigid JSON-RPC protocol barrier.
            </div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start">
<div className="md:col-span-4 flex flex-col">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase">INSTANCE 02 · APPLIED TELEMETRY</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mt-0.5">Custom FastMCP Server</h3>
<span className="font-label-timecode text-label-timecode text-ink-muted mt-1">TRANSPORT: in-process / async stdio</span>
</div>
<div className="md:col-span-8 font-body-md text-body-md text-ink-muted leading-relaxed">
              Specialized domain server built with FastMCP providing domain-aware abstractions: <code className="bg-surface-container-high px-1 text-primary">get_camera_health</code>, <code className="bg-surface-container-high px-1 text-primary">resolve_cctv_frame_url</code>, and <code className="bg-surface-container-high px-1 text-primary">calculate_hourly_shift_delta</code>. Decouples complex multi-table analytical joins from the LLM's raw generation context.
            </div>
</div>
</div>
</div>
{/* Part B: Secure CCTV Snapshot Streaming Proxy (Schematic) */}
<div className="flex flex-col mb-space-3xl">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-sm">PART 05.B · OPTICAL HARDWARE ISOLATION PROXY</span>
<div className="bg-paper-raised border border-line p-space-xl flex flex-col gap-space-xl">
{/* Flow Diagram */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md items-center">
<div className="border border-line bg-surface p-space-md flex flex-col items-center text-center">
<span className="font-label-sm text-[10px] text-ink-faint uppercase">CLIENT REALM</span>
<span className="font-headline-md text-body-md font-bold text-primary mt-1">Public Browser UI</span>
<span className="font-label-timecode text-[11px] text-ink-muted mt-1">&lt;img src="/api/cctv/proxy" /&gt;</span>
</div>
<div className="flex flex-col items-center text-center px-space-xs">
<span className="material-symbols-outlined text-secondary text-[24px]">shield</span>
<span className="font-label-sm text-[10px] text-secondary font-bold uppercase tracking-wider mt-1">ALLOWLIST INGRESS CHECK</span>
<span className="font-label-timecode text-[10px] text-ink-muted mt-0.5">Host validation &amp; subnet restriction</span>
<div className="w-full h-px bg-line my-space-xs"></div>
</div>
<div className="border border-secondary bg-surface p-space-md flex flex-col items-center text-center">
<span className="font-label-sm text-[10px] text-secondary font-bold uppercase">ISOLATED HARDWARE LAN</span>
<span className="font-headline-md text-body-md font-bold text-primary mt-1">Camera Storage Host</span>
<span className="font-label-timecode text-[11px] text-ink-muted mt-1">192.168.10.x / 10.2.x.x Subnets</span>
</div>
</div>
{/* Problem vs Solution Caption Split */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg border-t border-line pt-space-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-ink-muted uppercase font-bold mb-1">THE NETWORKING PARADOX:</span>
<p className="font-body-sm text-body-sm text-ink-faint leading-relaxed">
                Industrial NVRs and camera snapshot servers are strictly air-gapped on internal physical LAN subnets. Exposing raw camera IPs directly to the browser breaks boundary security and fails cross-origin resolution.
              </p>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-1">THE PROXY RESOLUTION:</span>
<p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
                The FastAPI gateway acts as an authenticated buffer: verifying request validity, checking internal IP allowlists, pulling the binary camera JPEG over internal routing, and streaming the frame securely to the client UI.
              </p>
</div>
</div>
</div>
</div>
{/* Part C: Supported PostgreSQL Domains Table */}
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-ink-faint uppercase tracking-wider mb-space-sm">PART 05.C · RELATIONAL DOMAIN SCHEMA MAPPING</span>
<div className="w-full border-t border-line overflow-x-auto">
<table className="w-full text-left font-label-sm text-label-sm">
<thead>
<tr className="border-b border-line text-ink-muted uppercase">
<th className="py-space-md pr-space-md">TABLE ENTITY</th>
<th className="py-space-md px-space-md">DOMAIN CATEGORY</th>
<th className="py-space-md pl-space-md">OPERATIONAL PURPOSE &amp; AGENT USAGE</th>
</tr>
</thead>
<tbody className="divide-y divide-line text-on-surface">
<tr>
<td className="py-space-md pr-space-md font-label-timecode font-bold text-primary">event &amp; eventtype</td>
<td className="py-space-md px-space-md text-secondary font-bold">Safety &amp; Compliance</td>
<td className="py-space-md pl-space-md font-body-sm text-body-sm text-ink-muted">High-volume inference alerts: PPE non-compliance, perimeter breach, unauthorized entry, posture alerts.</td>
</tr>
<tr>
<td className="py-space-md pr-space-md font-label-timecode font-bold text-primary">device</td>
<td className="py-space-md px-space-md text-ink-muted">Hardware Topology</td>
<td className="py-space-md pl-space-md font-body-sm text-body-sm text-ink-muted">Physical edge units: camera identifiers, RTSP endpoint metadata, factory zone placements, IP mappings.</td>
</tr>
<tr>
<td className="py-space-md pr-space-md font-label-timecode font-bold text-primary">attendance &amp; attendancelog</td>
<td className="py-space-md px-space-md text-primary font-bold">Access Control / HR</td>
<td className="py-space-md pl-space-md font-body-sm text-body-sm text-ink-muted">Biometric badge swipes, shift check-ins, contractor registrations, security gate clock-ins.</td>
</tr>
<tr>
<td className="py-space-md pr-space-md font-label-timecode font-bold text-primary">users</td>
<td className="py-space-md px-space-md text-ink-muted">Personnel Identity</td>
<td className="py-space-md pl-space-md font-body-sm text-body-sm text-ink-muted">Employee rosters, supervisor roles, shift roster assignments, notification email dispatch preferences.</td>
</tr>
<tr>
<td className="py-space-md pr-space-md font-label-timecode font-bold text-primary">vehicle &amp; vehicle_logs</td>
<td className="py-space-md px-space-md text-secondary font-bold">Logistics &amp; Yard</td>
<td className="py-space-md pl-space-md font-body-sm text-body-sm text-ink-muted">ANPR license plate detections, forklift movements, loading bay dwell times, perimeter gate transits.</td>
</tr>
</tbody>
</table>
</div>
{/* Terminal-style cross-domain query strip */}
<div className="mt-space-lg bg-surface-container-low border border-line p-space-md flex flex-col md:flex-row items-baseline justify-between gap-space-md font-label-sm text-label-sm">
<div className="flex items-center gap-space-sm text-secondary font-bold">
<span className="material-symbols-outlined text-[16px]">terminal</span>
<span>SAMPLE SYNTHESIZED JOIN:</span>
</div>
<code className="text-ink-muted truncate max-w-2xl">
            SELECT v.plate_number, a.worker_id, e.event_type FROM vehicle_logs v JOIN attendance a ON v.driver_id = a.id JOIN event e ON e.device_id = v.gate_cam_id WHERE v.entry_time BETWEEN '08:00:00' AND '09:00:00';
          </code>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 6: CHALLENGES & SOLUTIONS (Paper Sunken #ECE8DF) */}
{/* ================================================================= */}
<section className="w-full bg-paper-sunken text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-space-lg">
<span className="w-2 h-2 bg-secondary inline-block"></span>
<span>06 / ENGINEERING DIALECTIC</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-3xl">
        What broke, and how I fixed it.
      </h2>
{/* 4 Ruled Rows: Left Problem (Ink) vs Right Solution (Orange Accent) */}
<div className="flex flex-col border-t border-line divide-y divide-line">
{/* Challenge 1 */}
<div className="py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint mb-1">
<span>06.01 · ANOMALY</span>
<span>·</span>
<span className="text-primary font-bold">REASONING INTEGRITY</span>
</div>
<h3 className="font-headline-md text-headline-md font-bold text-primary mb-space-sm">
              LLM SQL Hallucinations &amp; Schema Drift
            </h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              When prompted with operational jargon (e.g., "gate crossings"), foundation LLMs routinely fabricated non-existent column names (`gate_name`, `entry_stamp`) or inferred deprecated relational schemas, generating fatal query crashes.
            </p>
</div>
<div className="md:col-span-7 bg-surface border-l-2 border-secondary p-space-lg flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-space-xs">ARCHITECTURAL RESOLUTION</span>
<p className="font-body-md text-body-md text-primary leading-relaxed">
              Implemented a strict, two-tier generation protocol: the agent is mandated to invoke <code className="bg-surface-container-high px-1">describe_table</code> via MCP to load verified PostgreSQL column constraints into context before compiling queries. Generated strings pass through an Abstract Syntax Tree (AST) validator that intercepts destructive operations and restricts execution strictly to SELECT statements.
            </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs border-t border-line font-label-timecode text-[11px] text-ink-muted">
<span>OUTCOME: 99.8% Syntactic Precision</span>
<span>·</span>
<span>0 Mutation Breaches</span>
</div>
</div>
</div>
{/* Challenge 2 */}
<div className="py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint mb-1">
<span>06.02 · ANOMALY</span>
<span>·</span>
<span className="text-primary font-bold">NETWORK TOPOLOGY</span>
</div>
<h3 className="font-headline-md text-headline-md font-bold text-primary mb-space-sm">
              Isolated Private LAN CCTV Snapshot Access
            </h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              Optical verification requires displaying camera frame captures in the client UI. However, surveillance devices reside on private `10.x.x.x` physical networks completely unreachable from external client web browsers.
            </p>
</div>
<div className="md:col-span-7 bg-surface border-l-2 border-secondary p-space-lg flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-space-xs">ARCHITECTURAL RESOLUTION</span>
<p className="font-body-md text-body-md text-primary leading-relaxed">
              Engineered a secure internal proxy endpoint within FastAPI (<code className="bg-surface-container-high px-1">/api/cctv/proxy-image</code>) enforcing IP allowlist validation. It translates camera hardware IDs to internal LAN IPs, fetches the binary frame over internal network adapters, and streams the optimized JPEG stream to the browser with JWT validation.
            </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs border-t border-line font-label-timecode text-[11px] text-ink-muted">
<span>OUTCOME: 0 Firewall Breaches</span>
<span>·</span>
<span>Avg Latency &lt; 42ms</span>
</div>
</div>
</div>
{/* Challenge 3 */}
<div className="py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint mb-1">
<span>06.03 · ANOMALY</span>
<span>·</span>
<span className="text-primary font-bold">RUNTIME BLOCKING</span>
</div>
<h3 className="font-headline-md text-headline-md font-bold text-primary mb-space-sm">
              Event Loop Starvation During Autonomous Audits
            </h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              Shift-level comparative analysis performs high-volume aggregations across hundreds of thousands of rows. Executing these calculations on primary threads caused latency spikes and stalled live chat SSE requests.
            </p>
</div>
<div className="md:col-span-7 bg-surface border-l-2 border-secondary p-space-lg flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-space-xs">ARCHITECTURAL RESOLUTION</span>
<p className="font-body-md text-body-md text-primary leading-relaxed">
              Decoupled the autonomous shift auditor into native Python <code className="bg-surface-container-high px-1">asyncio</code> background workers orchestrated via FastAPI lifespan handlers. Long-running analytical SQL queries execute in segregated threadpools, preserving sub-second response times on the interactive SSE chat channel.
            </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs border-t border-line font-label-timecode text-[11px] text-ink-muted">
<span>OUTCOME: Zero Event-Loop Jitter</span>
<span>·</span>
<span>100% On-Time Dispatches</span>
</div>
</div>
</div>
{/* Challenge 4 */}
<div className="py-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint mb-1">
<span>06.04 · ANOMALY</span>
<span>·</span>
<span className="text-primary font-bold">PRESENTATION PURITY</span>
</div>
<h3 className="font-headline-md text-headline-md font-bold text-primary mb-space-sm">
              Analytical Reasoning &amp; Presentation Bleed
            </h3>
<p className="font-body-md text-body-md text-ink-muted leading-relaxed">
              When a single agent handled both database query planning and final HTML/Markdown rendering, the output frequently intermingled internal reasoning traces, unescaped SQL fragments, or malformed table tags in client deliverables.
            </p>
</div>
<div className="md:col-span-7 bg-surface border-l-2 border-secondary p-space-lg flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold mb-space-xs">ARCHITECTURAL RESOLUTION</span>
<p className="font-body-md text-body-md text-primary leading-relaxed">
              Implemented strict agent specialization. The core analyst agent is strictly responsible for SQL planning and execution. Raw structured JSON results are passed to dedicated subagents: an <code className="bg-surface-container-high px-1">Output Formatter</code> for web markdown and a dedicated <code className="bg-surface-container-high px-1">Email Formatter</code> that compiles bulletproof, responsive inline-CSS HTML digests.
            </p>
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs border-t border-line font-label-timecode text-[11px] text-ink-muted">
<span>OUTCOME: Clean Visual Hierarchy</span>
<span>·</span>
<span>Universal Client Rendering</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 7: TECHNOLOGY STACK (Warm Paper) */}
{/* ================================================================= */}
<section className="w-full bg-surface text-on-surface py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-muted uppercase tracking-widest mb-space-lg">
<span className="text-primary font-bold">07</span>
<span className="text-line">/</span>
<span>PRODUCTION SPECIFICATIONS</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight mb-space-3xl">
        Built with architectural rigor.
      </h2>
{/* Ruled Matrix (Category Left / Mono Details Right) */}
<div className="flex flex-col border-y border-line divide-y divide-line">
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Agentic Orchestration</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">LangChain</span>
<span className="text-line">·</span>
<span className="text-secondary font-bold">DeepAgents Multi-Agent Framework</span>
<span className="text-line">·</span>
<span className="text-primary">LangGraph State Machines</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Tool Integration &amp; Protocols</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-secondary font-bold">Model Context Protocol (MCP)</span>
<span className="text-line">·</span>
<span className="text-primary">MultiServerMCPClient</span>
<span className="text-line">·</span>
<span className="text-primary">FastMCP Python Server</span>
<span className="text-line">·</span>
<span className="text-ink-muted">stdio IPC Channels</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Foundation LLMs</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">Google Gemini (gemini-3-flash-preview)</span>
<span className="text-line">·</span>
<span className="text-primary">OpenAI (gpt-5.4-nano, GPT-4o)</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Backend API &amp; Scheduling</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">Python 3.11</span>
<span className="text-line">·</span>
<span className="text-primary">FastAPI</span>
<span className="text-line">·</span>
<span className="text-primary">Uvicorn</span>
<span className="text-line">·</span>
<span className="text-primary">Pydantic v2</span>
<span className="text-line">·</span>
<span className="text-secondary font-bold">AsyncIO Lifespan Workers</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Data Persistence</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">PostgreSQL</span>
<span className="text-ink-muted">(Operational CCTV telemetry, events, logs)</span>
<span className="text-line">·</span>
<span className="text-primary font-bold">SQLite</span>
<span className="text-ink-muted">(Subscriber registry store)</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Frontend Dashboard</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">React 18</span>
<span className="text-line">·</span>
<span className="text-primary">TypeScript</span>
<span className="text-line">·</span>
<span className="text-primary">Vite</span>
<span className="text-line">·</span>
<span className="text-primary">Tailwind CSS</span>
<span className="text-line">·</span>
<span className="text-primary">Framer Motion</span>
<span className="text-line">·</span>
<span className="text-primary">Lucide React</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Streaming &amp; Export</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-secondary font-bold">Server-Sent Events (SSE)</span>
<span className="text-line">·</span>
<span className="text-primary">React-Markdown / Remark-GFM</span>
<span className="text-line">·</span>
<span className="text-primary font-bold">ExcelJS &amp; File-Saver</span>
<span className="text-ink-muted">(Client-side XLSX)</span>
</div>
</div>
<div className="py-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-baseline">
<span className="md:col-span-4 font-headline-md text-body-lg font-bold text-primary">Infrastructure &amp; Mail</span>
<div className="md:col-span-8 flex flex-wrap gap-x-space-md gap-y-1 font-label-sm text-label-sm">
<span className="text-primary font-bold">Docker &amp; Docker Compose</span>
<span className="text-line">·</span>
<span className="text-primary">Multi-Stage Nginx</span>
<span className="text-line">·</span>
<span className="text-primary">SMTP over SSL</span>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* CHAPTER 8: OUTCOMES & CONTRIBUTIONS (INVERSE Dark Ink #14130F) */}
{/* ================================================================= */}
<section className="w-full bg-primary text-on-primary py-space-chapter px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Label */}
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-ink-faint uppercase tracking-widest mb-space-lg">
<span className="w-2 h-2 bg-secondary inline-block"></span>
<span className="text-surface font-bold">08 / SYSTEM VALUE &amp; OWNERSHIP</span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl border-b border-primary-container pb-space-lg">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-surface tracking-tight max-w-2xl">
          What the system delivered.
        </h2>
<span className="font-label-timecode text-label-timecode text-secondary font-bold mt-space-sm md:mt-0">
          STATUS: IN PRODUCTION TELEMETRY
        </span>
</div>
{/* Two Columns Split with Hairline Divider */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-2xl">
{/* Left: Operational Outcomes */}
<div className="flex flex-col pr-0 md:pr-space-xl">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-space-lg">
            OPERATIONAL METRICS &amp; IMPACT
          </span>
<div className="flex flex-col divide-y divide-primary-container">
<div className="py-space-md flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-surface">Zero-Latency Access</span>
<p className="font-body-sm text-body-sm text-ink-faint mt-1 leading-relaxed">
                Eliminated DBA ticketing lag for routine surveillance requests. Shift managers independently access cross-domain records in under 3 seconds.
              </p>
</div>
<div className="py-space-md flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-surface">100% Shift Audit Compliance</span>
<p className="font-body-sm text-body-sm text-ink-faint mt-1 leading-relaxed">
                Autonomous background engine ensures directors receive shift summaries and hourly trends without needing to log in to dashboard widgets.
              </p>
</div>
<div className="py-space-md flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-surface">Rare-Event Preservation</span>
<p className="font-body-sm text-body-sm text-ink-faint mt-1 leading-relaxed">
                Isolated safety infractions and perimeter intrusions maintain prominence in temporal aggregations, preventing critical warnings from disappearing into summary counts.
              </p>
</div>
<div className="py-space-md flex flex-col">
<span className="font-headline-md text-headline-md font-bold text-surface">Air-Gapped Optical Audit</span>
<p className="font-body-sm text-body-sm text-ink-faint mt-1 leading-relaxed">
                Operators can securely verify database anomaly alerts against actual physical camera frames directly within the chat interface, without compromising private LAN architecture.
              </p>
</div>
</div>
</div>
{/* Right: Technical Ownership */}
<div className="flex flex-col pl-0 md:pl-space-xl md:border-l border-primary-container">
<span className="font-label-sm text-label-sm text-ink-muted uppercase font-bold tracking-wider mb-space-lg">
            ARCHITECTURAL &amp; CODE CONTRIBUTIONS
          </span>
<div className="flex flex-col divide-y divide-primary-container font-label-sm text-label-sm text-ink-faint">
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">Dual-Pipeline Architecture:</strong> Designed and implemented the "Ask &amp; Watch" bifurcated execution pattern separating interactive SSE from autonomous scheduling.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">MCP Server Integration:</strong> Configured `mcp-postgres-server` and developed the Custom FastMCP server for domain-specific surveillance actions.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">SQL Guardrail AST Engine:</strong> Built the schema introspection protocol and rigid SELECT-only query validation layer.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">FastAPI Image Proxy:</strong> Implemented the private LAN optical streaming proxy with subnet isolation and IP allowlist validation.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">Async Background Scheduler:</strong> Tied autonomous hourly/daily analytical tasks into non-blocking FastAPI lifespan workers.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">Specialized Formatter Subagents:</strong> Decoupled query execution from output rendering, creating dedicated web and HTML email generators.
              </div>
</div>
<div className="py-space-sm flex items-start gap-space-sm">
<span className="text-secondary font-bold mt-0.5">→</span>
<div>
<strong className="text-surface font-bold">SSE Streaming Pipeline:</strong> Delivered real-time agent execution telemetry to the React client interface.
              </div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* ================================================================= */}
{/* NAVIGATION BAR & CLOSING CALLOUT (Warm Paper) */}
{/* ================================================================= */}
<section className="w-full bg-surface text-on-surface py-space-2xl px-margin md:px-gutter-desktop transition-colors">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Project Switcher Bar (Hairline Ruled) */}
<div className="grid grid-cols-1 md:grid-cols-2 border border-line mb-space-chapter">
<a className="group p-space-xl border-b md:border-b-0 md:border-r border-line hover:bg-paper-raised transition-colors flex flex-col justify-between" href="#">
<span className="font-label-sm text-label-sm text-ink-muted uppercase">CASE STUDY 01 / 03</span>
<div className="flex items-center gap-space-sm mt-space-md">
<span className="font-headline-md text-headline-md font-bold text-primary group-hover:text-secondary transition-colors">← VisionFacts.ai Core</span>
</div>
<span className="font-body-sm text-body-sm text-ink-faint mt-1">Multi-camera real-time edge computer vision platform.</span>
</a>
<a className="group p-space-xl hover:bg-paper-raised transition-colors flex flex-col justify-between" href="#">
<span className="font-label-sm text-label-sm text-ink-muted uppercase">CASE STUDY 03 / 03</span>
<div className="flex items-center gap-space-sm mt-space-md">
<span className="font-headline-md text-headline-md font-bold text-primary group-hover:text-secondary transition-colors">Edubotix Platform →</span>
</div>
<span className="font-body-sm text-body-sm text-ink-faint mt-1">Autonomous robotics telemetry and hardware abstraction.</span>
</a>
</div>
{/* Closing Callout CTA */}
<div className="relative bg-paper-sunken border border-line p-space-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
{/* Viewfinder Corner Marks */}
<span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none"></span>
<span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none"></span>
<span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none"></span>
<span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none"></span>
<div className="flex flex-col max-w-xl">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest mb-1">AVAILABILITY AUDIT · Q2 2026</span>
<h3 className="font-headline-md text-headline-md font-bold text-primary">
            Need an AI or Systems Architect?
          </h3>
<p className="font-body-md text-body-md text-ink-muted mt-space-xs leading-relaxed">
            I build resilient agentic protocols, high-concurrency real-time telemetry systems, and production edge platforms. Available for select staff and principal architecture roles.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
<a className="px-space-xl py-3 rounded-full bg-secondary-container text-surface font-label-sm text-label-sm font-bold uppercase tracking-widest text-center hover:bg-signal-orange-hover transition-colors" href="mailto:rajesh@example.com">
            Email Rajesh
          </a>
<div className="flex items-center justify-center gap-space-md px-space-md py-3 font-label-sm text-label-sm text-primary uppercase">
<a className="hover:text-secondary transition-colors" href="#">LinkedIn</a>
<span className="text-line">·</span>
<a className="hover:text-secondary transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</div>
</section>
</div></main>
    </>
  );
}
