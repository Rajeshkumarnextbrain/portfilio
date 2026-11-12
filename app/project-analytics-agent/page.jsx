import Link from 'next/link';
import ProjectTOC from '../../components/ProjectTOC';

export const metadata = {
  title: 'Visionfacts Analytics Agent | Case Study | Rajesh Kumar S',
  description: 'Multi-Agent CCTV Intelligence & Autonomous Reporting Platform extending VisionFacts.ai with natural-language database analytics and scheduled surveillance audits.',
};

const TOC_SECTIONS = [
  { id: 'overview', label: '01 · Project Overview' },
  { id: 'problem-objectives', label: '02 · Problem & Objectives' },
  { id: 'architecture', label: '03 · Multi-Agent Architecture' },
  { id: 'capabilities', label: '04 · Core Capabilities' },
  { id: 'mcp-database', label: '05 · MCP & Data Domain' },
  { id: 'challenges', label: '06 · Challenges & Solutions' },
  { id: 'tech-stack', label: '07 · Technology Stack' },
  { id: 'outcomes-contributions', label: '08 · Outcomes & Contributions' },
];

export default function AnalyticsAgentPage() {
  return (
    <div className="w-full">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-on-primary font-mono text-xs font-semibold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-primary transition-colors group focus:outline-none focus:ring-1 focus:ring-primary rounded"
          >
            <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform" aria-hidden="true">
              arrow_back
            </span>
            <span>&larr; All projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="space-y-6 pb-8 border-b border-outline-variant/30">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
              <span>AGENTIC AI &bull; ENTERPRISE SURVEILLANCE INTELLIGENCE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface font-sans">
              VisionFacts Analytics Agent
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-on-surface font-sans font-medium leading-relaxed max-w-4xl">
              Multi-Agent CCTV Intelligence &amp; Autonomous Reporting Platform
            </p>

            <p className="text-base text-secondary font-sans leading-relaxed max-w-3xl">
              Extends the VisionFacts.ai CCTV video analytics ecosystem with an Agentic AI layer that makes surveillance telemetry and enterprise operational databases accessible through natural-language ad-hoc queries and automated scheduled reporting.
            </p>
          </div>

          {/* Headline Results Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Dual Execution Pipelines
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl xs:text-2xl sm:text-3xl font-mono font-bold text-primary break-words">Interactive + Autonomous</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Dedicated pipelines for live conversational investigations and scheduled background email digests.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-primary/30 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Tool Integration Protocol
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl xs:text-2xl sm:text-3xl font-mono font-bold text-primary break-words">Model Context Protocol</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                MultiServerMCPClient bridging stdio PostgreSQL MCP and a custom FastMCP server.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Query Guardrails
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl xs:text-2xl sm:text-3xl font-mono font-bold text-primary break-words">describe_table + SELECT</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Runtime schema verification prevents hallucinated joins; strict SELECT-only rules block data mutations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Operational Data Correlated
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl xs:text-2xl sm:text-3xl font-mono font-bold text-primary break-words">5 Domains</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Cross-correlates CCTV events, camera metadata, attendance logs, employee rosters, and ANPR vehicle records.
              </p>
            </div>
          </div>

          {/* Metadata & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Ecosystem: <strong className="font-semibold text-primary">VisionFacts.ai CCTV Suite</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Company: <strong className="font-semibold">Nextbrain Technologies</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Stack: <strong className="font-semibold">LangChain &bull; DeepAgents &bull; MCP &bull; FastAPI</strong>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-1.5 active:scale-95 motion-reduce:active:scale-100"
              >
                <span>Discuss this project</span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </a>
              <a
                href="#architecture"
                className="px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/50 text-xs font-mono text-on-surface hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                <span>Architecture Flow &darr;</span>
              </a>
            </div>
          </div>
        </header>

        {/* Two-Column Layout: Sticky Navigation + Main Case Study */}
        <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12 pt-8">

          {/* Sticky Table of Contents */}
          <ProjectTOC sections={TOC_SECTIONS} />

          {/* Main Case Study Content */}
          <main id="main-content" className="flex-1 min-w-0 space-y-16">

            {/* 1. PROJECT OVERVIEW */}
            <section id="overview" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  01 &bull; Project Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Bridging CCTV Surveillance Telemetry and Operational Intelligence
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  The VisionFacts Analytics Agent extends the production VisionFacts.ai CCTV video analytics ecosystem by introducing an Agentic AI layer. While the core computer vision platform continuously ingests over 130 camera streams to detect physical security and safety events (such as PPE compliance, perimeter intrusions, and vehicle movements), operations and security personnel traditionally faced a steep data-accessibility barrier when attempting to extract holistic operational meaning from millions of logged database records.
                </p>

                <p className="text-base text-secondary font-sans leading-relaxed">
                  Rather than functioning as a simplistic chatbot or an unconstrained text-to-SQL script, the platform functions as an autonomous surveillance intelligence system engineered around two distinct operational modes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      Interactive Analytical Intelligence
                    </div>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">
                      Self-Service Plain-Language Investigations
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      Enables operations managers, safety directors, and floor supervisors to query operational databases in natural English. The agent autonomously plans query strategies, inspects PostgreSQL table structures at runtime, retrieves records via Model Context Protocol (MCP) tools, and renders structured answers complete with analytical tables, metric trends, and visual CCTV snapshot evidence.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[18px]">schedule_send</span>
                      Autonomous Scheduled Reporting
                    </div>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">
                      Automated Hourly &amp; End-of-Day Surveillance Audits
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      Operates continuously in the background without user intervention. An asynchronous scheduler triggers the Autonomous Surveillance Agent to run hourly comparative audits (current hour vs. previous hour) and comprehensive end-of-day summaries, packaging key performance metrics, delta indicators, and rare-event highlights into responsive HTML email reports distributed via SMTP.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-high border border-primary/30 mt-2 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block">
                    Enterprise Accessibility Value
                  </span>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    By decoupling operational insights from manual SQL writing and active dashboard surveillance, the platform transforms raw surveillance records into immediate, distributed business intelligence for both frontline plant operators and remote executives.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. PROBLEM & OBJECTIVES */}
            <section id="problem-objectives" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  02 &bull; Problem &amp; Objectives
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  The Friction of Manual Surveillance Telemetry Analysis
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Modern enterprise CCTV facilities generate vast volumes of continuous event telemetry. However, extracting actionable operational intelligence from these repositories presents significant operational friction:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'High-Volume Telemetry Overload',
                    problem: 'Hundreds of connected camera streams generate thousands of event records daily across safety infractions, gate crossings, and movement patterns.',
                    impact: 'Security personnel suffer monitoring fatigue and lack the technical capability to write multi-table joins correlating events with staff attendance or camera metadata.',
                  },
                  {
                    title: 'Manual Query & Collation Bottleneck',
                    problem: 'Non-technical stakeholders (safety officers, HR managers, warehouse supervisors) depend entirely on database administrators to retrieve routine operational data.',
                    impact: 'Incident investigations are delayed by hours or days while waiting for ad-hoc SQL query extraction and spreadsheet compilation.',
                  },
                  {
                    title: 'Dashboard Vigilance Friction',
                    problem: 'Traditional analytical platforms require users to actively log in, select date ranges, apply filters, and manually check widgets throughout the workday.',
                    impact: 'Emerging anomalies during shift handovers or critical security events go unnoticed until routine post-mortem reviews.',
                  },
                  {
                    title: 'Loss of Low-Frequency Critical Events',
                    problem: 'Standard executive dashboards aggregate data into high-level averages and summary charts.',
                    impact: 'Rare but critical safety violations (e.g. singular PPE violations, gate obstructions, perimeter breaches) disappear into high-volume normal traffic counts.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                    <h3 className="text-base font-semibold text-on-surface font-sans">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      <strong className="text-on-surface font-medium">Challenge:</strong> {item.problem}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      <strong className="text-primary font-medium">Operational Impact:</strong> {item.impact}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core System Objectives */}
              <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary font-bold">
                  Core Engineering Objectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-outline font-semibold">OBJECTIVE 1</span>
                    <h4 className="text-sm font-semibold text-on-surface">Zero-SQL Conversational Access</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Allow non-technical operators to interrogate PostgreSQL surveillance and HR data using conversational English with reliable schema grounding.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-outline font-semibold">OBJECTIVE 2</span>
                    <h4 className="text-sm font-semibold text-on-surface">Autonomous Shift Auditing</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Deliver proactive operational visibility straight to user inboxes with hourly delta comparisons and end-of-day audit summaries.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-outline font-semibold">OBJECTIVE 3</span>
                    <h4 className="text-sm font-semibold text-on-surface">Secure Visual Evidence Delivery</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Safely proxy visual CCTV snapshot evidence across isolated private LAN camera networks into modern browser interfaces without compromising perimeter security.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. MULTI-AGENT ARCHITECTURE */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  03 &bull; Multi-Agent Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Two Dedicated Execution Pipelines with Shared Tooling
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The platform is engineered around two distinct execution pipelines rather than a monolithic agent. Each pipeline pairs a primary analytical agent with a specialized output formatter subagent, sharing a standardized Model Context Protocol (MCP) data layer:
              </p>

              {/* Agent Clarification Note */}
              <div className="p-5 rounded-xl bg-surface-container-high border border-primary/30 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">account_tree</span>
                  <h3 className="text-sm font-bold text-on-surface font-sans">
                    Architecture Clarification: Primary Agents &amp; Formatter Subagents
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                  Rather than an opaque multi-tiered hierarchy or an invented supervisor agent, the system maintains clear pipeline separation:
                  the <strong className="text-on-surface">Interactive Pipeline</strong> uses the <strong className="text-primary font-mono">CCTV Analyst Agent</strong> (primary DeepAgent) paired with an <strong className="text-primary font-mono">Output Formatter Subagent</strong>, while the <strong className="text-on-surface">Autonomous Reporting Pipeline</strong> uses the <strong className="text-primary font-mono">Autonomous Surveillance Agent</strong> (primary DeepAgent) paired with an <strong className="text-primary font-mono">Email Formatter Subagent</strong>. Both communicate with database services through unified MCP tool interfaces.
                </p>
              </div>

              {/* Architecture Diagram Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-8">
                
                {/* PIPELINE A */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-outline-variant/30 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-[11px] font-mono font-bold text-primary">
                        PIPELINE A
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-on-surface font-sans">
                        Interactive Analytics Pipeline (Ad-Hoc Conversational Flow)
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-outline">SSE Streaming to Dashboard</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 01</span>
                        <h4 className="text-sm font-semibold text-on-surface">User Question</h4>
                        <p className="text-xs text-secondary mt-1">Natural-language query entered via React chat UI.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">Input Trigger</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-primary/40 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 02</span>
                        <h4 className="text-sm font-semibold text-on-surface">CCTV Analyst Agent</h4>
                        <p className="text-xs text-secondary mt-1">Primary DeepAgent parses intent, determines needed tables, and formulates queries.</p>
                      </div>
                      <span className="text-[11px] font-mono text-primary mt-3">Primary DeepAgent</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 03</span>
                        <h4 className="text-sm font-semibold text-on-surface">MCP PostgreSQL</h4>
                        <p className="text-xs text-secondary mt-1">Inspects schema via describe_table; runs verified read-only SELECT.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">mcp-postgres-server</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 04</span>
                        <h4 className="text-sm font-semibold text-on-surface">Output Formatter</h4>
                        <p className="text-xs text-secondary mt-1">Subagent transforms raw query tuples into tables, metrics, and snapshot links.</p>
                      </div>
                      <span className="text-[11px] font-mono text-secondary mt-3">Formatter Subagent</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 05</span>
                        <h4 className="text-sm font-semibold text-on-surface">Web Dashboard</h4>
                        <p className="text-xs text-secondary mt-1">Renders markdown, tables, modal snapshot previews, and XLSX export.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">UI Presentation</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1.5 text-xs text-secondary">
                    <div className="font-mono text-primary font-semibold">Interactive Pipeline Mechanics:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong className="text-on-surface">Natural-language parsing:</strong> Interprets queries like <em>&quot;How many PPE violations occurred on Camera 3 during morning shift?&quot;</em> without rigid syntax requirements.</li>
                      <li><strong className="text-on-surface">Runtime schema inspection:</strong> Executes <code className="font-mono text-primary">describe_table</code> before SQL generation to ground column names against live database reality.</li>
                      <li><strong className="text-on-surface">Read-only SELECT enforcement:</strong> Hard guardrails prohibit non-SELECT operations, ensuring production data safety.</li>
                      <li><strong className="text-on-surface">Subagent handoff:</strong> The primary agent delegates formatting to the Output Formatter Subagent, decoupling analytical logic from markdown and UI presentation.</li>
                    </ul>
                  </div>
                </div>

                {/* PIPELINE B */}
                <div className="space-y-4 pt-4 border-t border-outline-variant/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-outline-variant/30 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-[11px] font-mono font-bold text-primary">
                        PIPELINE B
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-on-surface font-sans">
                        Autonomous Reporting Pipeline (Scheduled Email Audits)
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-outline">asyncio.create_task Cron</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 01</span>
                        <h4 className="text-sm font-semibold text-on-surface">Asynchronous Scheduler</h4>
                        <p className="text-xs text-secondary mt-1">Triggers hourly comparisons and end-of-day summary jobs in background.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">FastAPI Lifespan</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-primary/40 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 02</span>
                        <h4 className="text-sm font-semibold text-on-surface">Surveillance Agent</h4>
                        <p className="text-xs text-secondary mt-1">Autonomous DeepAgent executes aggregate queries, delta math, and rare-event extraction.</p>
                      </div>
                      <span className="text-[11px] font-mono text-primary mt-3">Primary DeepAgent</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 03</span>
                        <h4 className="text-sm font-semibold text-on-surface">MCP Analytics</h4>
                        <p className="text-xs text-secondary mt-1">Executes temporal comparisons against PostgreSQL via MultiServerMCPClient.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">MCP stdio Client</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 04</span>
                        <h4 className="text-sm font-semibold text-on-surface">Email Formatter</h4>
                        <p className="text-xs text-secondary mt-1">Subagent generates responsive inline-CSS HTML email with stat callouts and tables.</p>
                      </div>
                      <span className="text-[11px] font-mono text-secondary mt-3">Formatter Subagent</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-primary font-bold block mb-1">STAGE 05</span>
                        <h4 className="text-sm font-semibold text-on-surface">SMTP Distribution</h4>
                        <p className="text-xs text-secondary mt-1">Dispatches email report via FastMCP send_broadcast_email to active subscribers.</p>
                      </div>
                      <span className="text-[11px] font-mono text-outline mt-3">SMTP over SSL</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 space-y-1.5 text-xs text-secondary">
                    <div className="font-mono text-primary font-semibold">Autonomous Pipeline Mechanics:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong className="text-on-surface">Hourly delta analysis:</strong> Compares current hour incident frequency against the preceding hour to identify emerging operational trends.</li>
                      <li><strong className="text-on-surface">End-of-day reconciliation:</strong> Compares full day activity against previous day benchmarks across shifts, departments, and zones.</li>
                      <li><strong className="text-on-surface">Rare-event preservation:</strong> Explicitly isolates low-frequency incidents (e.g. PPE violations, perimeter breaches, gate obstructions) so they are preserved rather than lost in aggregate figures.</li>
                      <li><strong className="text-on-surface">Automated dispatch:</strong> Queries active email subscribers stored in SQLite and dispatches customized, cross-client HTML reports over SMTP SSL.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. CORE CAPABILITIES */}
            <section id="capabilities" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  04 &bull; Core Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Engineered Features for Operational Reliability
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The platform integrates nine core engineering capabilities designed to bridge conversational AI with enterprise-grade surveillance reliability:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: 'translate',
                    name: 'Natural-Language Database Analytics',
                    detail: 'Translates conversational operational queries into syntactically valid PostgreSQL queries, bypassing the need for manual SQL composition.',
                  },
                  {
                    icon: 'schema',
                    name: 'Runtime Schema Verification',
                    detail: 'Inspects live table definitions via describe_table prior to SQL generation, grounding column selections as an engineering reliability measure.',
                  },
                  {
                    icon: 'security',
                    name: 'Read-Only SQL Guardrails',
                    detail: 'Restricts query execution strictly to SELECT statements. Parsing logic intercepts and rejects modifying statements (INSERT, UPDATE, DELETE, DROP).',
                  },
                  {
                    icon: 'timer',
                    name: 'Scheduled Autonomous Auditing',
                    detail: 'Asynchronous background scheduler executes hourly comparative audits and comprehensive EOD summaries without manual prompt triggers.',
                  },
                  {
                    icon: 'priority_high',
                    name: 'Rare-Event Preservation',
                    detail: 'Guarantees that low-frequency security infractions (PPE violations, gate obstructions, perimeter breaches) remain highlighted instead of lost in bulk totals.',
                  },
                  {
                    icon: 'stream',
                    name: 'Live Agent Activity Streaming',
                    detail: 'Server-Sent Events (SSE) stream agent execution state, tool invocations, task delegations, and SQL activity to the UI without revealing hidden internal chain-of-thought.',
                  },
                  {
                    icon: 'photo_camera',
                    name: 'CCTV Snapshot Access',
                    detail: 'Integrates image thumbnail previews directly into chat responses and analytical tables, linking timestamps to visual CCTV evidence via modal previews.',
                  },
                  {
                    icon: 'table_view',
                    name: 'Client-Side Excel Export',
                    detail: 'Enables one-click export of generated analytical tables into formatted XLSX workbooks using ExcelJS and File-Saver for offline review.',
                  },
                  {
                    icon: 'mark_email_read',
                    name: 'Subscriber Management Lifecycle',
                    detail: 'Complete subscriber workflow supporting user registration, active subscriber viewing, automated welcome confirmations, and one-click unsubscription.',
                  },
                ].map((cap, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{cap.icon}</span>
                      <h3 className="text-sm font-bold text-on-surface font-sans">{cap.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {cap.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. MCP INTEGRATION & DATABASE DOMAIN */}
            <section id="mcp-database" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  05 &bull; MCP Integration &amp; Database Domain
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Standardized Tool Protocol &amp; Operational Data Boundaries
                </h2>
              </div>

              {/* MCP Section */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Model Context Protocol (MCP) Integration
                    </h3>
                    <p className="text-xs text-secondary font-mono">
                      Decoupled Tool Boundary via MultiServerMCPClient
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-semibold">
                    Stdio + FastMCP
                  </span>
                </div>

                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Model Context Protocol (MCP) provides a standardized, secure interface between agentic reasoning engines and backend infrastructure. Rather than hard-coding database connections or custom utility scripts directly into agent loops, the platform consumes external capabilities through two distinct MCP servers:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">SERVER 01</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">stdio transport</span>
                    </div>
                    <h4 className="text-base font-semibold text-on-surface">PostgreSQL MCP Server</h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      Powered by <code className="font-mono text-primary">mcp-postgres-server</code> running as a subprocess over stdio. Exposes database schema introspection tools (<code className="font-mono text-primary">describe_table</code>) and read-only query execution tools directly into the agent&apos;s LangChain tool catalog.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tools: describe_table, query (SELECT-only)
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">SERVER 02</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">custom_mcp.py</span>
                    </div>
                    <h4 className="text-base font-semibold text-on-surface">Custom FastMCP Server</h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      Custom server implemented using the FastMCP framework. Exposes <code className="font-mono text-primary">get_current_time</code> for accurate temporal alignment across UTC and <code className="font-mono text-primary">Asia/Kolkata</code> operational shifts, and exposes <code className="font-mono text-primary">send_broadcast_email</code> powered by a dedicated SQLite subscriber store.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tools: get_current_time, send_broadcast_email
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure CCTV Image Proxy */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-primary/30 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">vpn_lock</span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Secure CCTV Snapshot Proxy (FastAPI LAN Bridge)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <span className="text-xs font-mono text-error font-bold uppercase">The Network Boundary Problem</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      CCTV snapshot servers reside on private, isolated LAN subnets (e.g. <code className="font-mono text-on-surface">192.168.x.x</code> or <code className="font-mono text-on-surface">10.x.x.x</code>). End-user browsers accessing the dashboard cannot reach these private IPs directly due to network isolation, browser CORS policies, and mixed-content HTTPS restrictions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                    <span className="text-xs font-mono text-primary font-bold uppercase">The Host-Validated Solution</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      A dedicated FastAPI backend proxy endpoint (<code className="font-mono text-primary">/api/cctv/proxy-image</code>) validates target camera snapshot hostnames against a strict server-side allowlist. The backend securely retrieves raw image bytes across the private network and streams them to the browser client, ensuring visual verification without compromising network isolation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Database Domains */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="border-b border-outline-variant/30 pb-3">
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Supported Database Domain &amp; Operational Tables
                  </h3>
                  <p className="text-xs text-secondary font-mono">
                    Ground-truth PostgreSQL tables accessible to the Analytics Agent
                  </p>
                </div>

                <p className="text-sm text-secondary font-sans leading-relaxed">
                  The agent accurately correlates records across five verified operational domains documented in the production schema:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/40 text-outline font-mono text-xs uppercase">
                        <th className="py-2.5 px-3">Table Name</th>
                        <th className="py-2.5 px-3">Domain Entity</th>
                        <th className="py-2.5 px-3">Operational Purpose &amp; Key Content</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-secondary">
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">event &amp; eventtype</td>
                        <td className="py-3 px-3 text-on-surface font-medium">CCTV Analytics Events</td>
                        <td className="py-3 px-3">Logged computer vision detections (PPE violations, intrusion geofences, smoke/fire alerts, forklift detections, fall events) with timestamps, camera IDs, and snapshot paths.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">device</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Camera Hardware &amp; Feeds</td>
                        <td className="py-3 px-3">Camera metadata, stream IP endpoints, RTSP URLs, location/zone assignments, and online/offline operational statuses.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">attendance &amp; attendancelog</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Access &amp; Shift Attendance</td>
                        <td className="py-3 px-3">Employee access control timestamps, entry/exit turnstile logs, check-in records, and shift timestamps.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">users</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Employee &amp; Staff Records</td>
                        <td className="py-3 px-3">Personnel identities, department mappings, role classifications, designated shifts, and operational contact metadata.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">vehicle &amp; vehicle-logs</td>
                        <td className="py-3 px-3 text-on-surface font-medium">ANPR &amp; Vehicle Movements</td>
                        <td className="py-3 px-3">Automatic Number Plate Recognition (ANPR) logs, gate entry/exit timestamps, vehicle classification, and authorized driver assignments.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-xs text-secondary">
                  <strong className="text-on-surface">Cross-Domain Synthesis Example:</strong> The agent can resolve complex operational queries such as <em>&quot;Correlate vehicles entering Gate 2 between 08:00 and 09:00 with employee attendance logs and any perimeter alerts in the adjoining logistics bay.&quot;</em>
                </div>
              </div>

            </section>

            {/* 6. ENGINEERING CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  06 &bull; Engineering Challenges &amp; Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Addressing Technical Roadblocks in Agentic Surveillance
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Developing an autonomous, database-backed surveillance intelligence system required solving four fundamental engineering challenges:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 01</span>
                    <span className="text-xs font-mono text-outline">Reliability</span>
                  </div>
                  <h3 className="text-base font-semibold text-on-surface font-sans">
                    LLM SQL Hallucinations &amp; Schema Drift
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    <p>
                      <strong className="text-on-surface">Problem:</strong> Without active grounding, large language models frequently invent nonexistent column names, assume incorrect foreign keys, or attempt modifying queries (e.g. UPDATE or DROP) that could compromise production databases.
                    </p>
                    <p>
                      <strong className="text-primary">Solution:</strong> Implemented a mandatory pre-query runtime inspection step using <code className="font-mono text-primary">describe_table</code> through the PostgreSQL MCP server. The agent must verify exact table definitions before generating queries, backed by a strict regex and parser-level read-only guardrail that rejects any non-SELECT SQL statement.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 02</span>
                    <span className="text-xs font-mono text-outline">Security &amp; Networking</span>
                  </div>
                  <h3 className="text-base font-semibold text-on-surface font-sans">
                    Private LAN CCTV Images in the Web Dashboard
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    <p>
                      <strong className="text-on-surface">Problem:</strong> Surveillance snapshot servers are housed on isolated corporate subnets unreachable by external client browsers, while direct browser requests would trigger CORS violations and mixed-content security blocks.
                    </p>
                    <p>
                      <strong className="text-primary">Solution:</strong> Developed a host-validated FastAPI streaming proxy endpoint. The backend validates target camera IP addresses against an approved server-side whitelist, fetches image bytes over the internal network, and streams them safely to the client browser for rendering in thumbnails and preview modals.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 03</span>
                    <span className="text-xs font-mono text-outline">Concurrency &amp; Lifecycle</span>
                  </div>
                  <h3 className="text-base font-semibold text-on-surface font-sans">
                    Non-Blocking Scheduled Autonomous Reporting
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    <p>
                      <strong className="text-on-surface">Problem:</strong> Running intensive hourly and end-of-day multi-query analytical pipelines within a standard synchronous web framework would block worker processes, degrading ad-hoc API responsiveness.
                    </p>
                    <p>
                      <strong className="text-primary">Solution:</strong> Integrated an asynchronous background task scheduler utilizing <code className="font-mono text-primary">asyncio.create_task</code> tied directly into the FastAPI application <code className="font-mono text-primary">lifespan</code>. This ensures audit routines run in independent asynchronous tasks without contending with user-facing request loops.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-bold">CHALLENGE 04</span>
                    <span className="text-xs font-mono text-outline">Prompt Architecture</span>
                  </div>
                  <h3 className="text-base font-semibold text-on-surface font-sans">
                    Analytical Output &amp; Presentation Separation
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    <p>
                      <strong className="text-on-surface">Problem:</strong> Expecting a single agent prompt to handle complex SQL planning, numeric aggregation, and responsive UI/HTML email formatting leads to prompt degradation, JSON parsing failures, and malformed styling.
                    </p>
                    <p>
                      <strong className="text-primary">Solution:</strong> Architected a clean handoff to dedicated formatter subagents. The primary analytical agent produces structured analytical summaries, which are passed to the Output Formatter Subagent for web markdown/tables or the Email Formatter Subagent for cross-client compatible HTML email generation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. TECHNOLOGY STACK */}
            <section id="tech-stack" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  07 &bull; Technology Stack
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Production Engineering Architecture by Layer
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The platform is constructed with modern, production-grade frameworks organized into modular architectural layers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    layer: 'Agentic Orchestration',
                    tech: 'LangChain &bull; DeepAgents &bull; LangGraph',
                    desc: 'Frameworks managing agent state loops, tool bindings, message memory, and subagent delegation.',
                  },
                  {
                    layer: 'Tool Integration & Protocol',
                    tech: 'Model Context Protocol (MCP) &bull; MultiServerMCPClient &bull; FastMCP',
                    desc: 'Standardized tool communication layer bridging stdio PostgreSQL MCP and custom FastMCP microservices.',
                  },
                  {
                    layer: 'LLM Foundation Models',
                    tech: 'Google Gemini (gemini-3-flash-preview) &bull; OpenAI (gpt-5.4-nano, GPT-4o)',
                    desc: 'High-speed reasoning models powering SQL generation, analytical synthesis, and formatter subagent pipelines.',
                  },
                  {
                    layer: 'Backend API & Scheduling',
                    tech: 'Python 3.11 &bull; FastAPI &bull; Uvicorn &bull; Pydantic v2 &bull; AsyncIO',
                    desc: 'High-throughput async backend managing SSE streaming, image proxying, and background cron execution.',
                  },
                  {
                    layer: 'Database Layer',
                    tech: 'PostgreSQL &bull; SQLite',
                    desc: 'PostgreSQL stores enterprise CCTV, camera, and access logs; SQLite manages email subscriber preferences.',
                  },
                  {
                    layer: 'Frontend Application',
                    tech: 'React 18 &bull; TypeScript &bull; Vite &bull; Tailwind CSS',
                    desc: 'Modern reactive dashboard interface providing chat interactions, query telemetry, and status indicators.',
                  },
                  {
                    layer: 'UI Components & Motion',
                    tech: 'Framer Motion &bull; Lucide React',
                    desc: 'Smooth interactive transitions, expandable card states, and standardized iconography across dashboards.',
                  },
                  {
                    layer: 'Streaming & Markdown',
                    tech: 'Server-Sent Events (SSE) &bull; React-Markdown &bull; Remark-GFM',
                    desc: 'Real-time agent activity and SQL telemetry streaming paired with formatted table and markdown rendering.',
                  },
                  {
                    layer: 'Document Export',
                    tech: 'ExcelJS &bull; File-Saver',
                    desc: 'Client-side generation and instant download of formatted XLSX workbooks directly from analytical query tables.',
                  },
                  {
                    layer: 'Infrastructure & Containerization',
                    tech: 'Docker &bull; Docker Compose &bull; Nginx Multi-Stage',
                    desc: 'Multi-stage Docker container builds orchestrated via Docker Compose with Nginx reverse proxying.',
                  },
                  {
                    layer: 'Email Delivery Protocol',
                    tech: 'SMTP over SSL',
                    desc: 'Secure enterprise transport for distributing automated hourly and end-of-day surveillance audit reports.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-surface-container border border-outline-variant/40 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-outline font-semibold block">
                      {item.layer}
                    </span>
                    <h3 className="text-sm font-bold text-primary font-mono" dangerouslySetInnerHTML={{ __html: item.tech }} />
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. OUTCOMES & MY CONTRIBUTIONS */}
            <section id="outcomes-contributions" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  08 &bull; Outcomes &amp; Contributions
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Business Value Delivered &amp; Engineering Responsibilities
                </h2>
              </div>

              {/* Business Value Cards */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <h3 className="text-base font-bold text-on-surface font-sans">
                  Concrete Operational Outcomes
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Self-Service Operational Analytics',
                      detail: 'Empowers non-technical facility managers, HR officers, and safety supervisors to retrieve answers directly through natural language, removing dependency on technical DBAs.',
                    },
                    {
                      title: 'Accelerated Incident Investigations',
                      detail: 'Correlates CCTV events with camera metadata, access control logs, and vehicle movements in seconds, drastically reducing the time required to reconstruct security incidents.',
                    },
                    {
                      title: 'Elimination of Manual Report Preparation',
                      detail: 'Automated hourly and end-of-day summaries deliver proactive intelligence to stakeholder inboxes, replacing manual spreadsheet collation and SQL extraction.',
                    },
                    {
                      title: 'Preserved Visibility for Low-Frequency Events',
                      detail: 'Safety infractions and perimeter breaches remain highlighted in operational summaries, ensuring compliance risks receive immediate oversight rather than being lost in bulk footfall numbers.',
                    },
                    {
                      title: 'Centralized Visual Evidence Access',
                      detail: 'Direct snapshot previews within conversational answers provide instant visual verification of detected events without switching between disparate NVR systems.',
                    },
                    {
                      title: 'Frictionless Stakeholder Distribution',
                      detail: 'Automated email distribution and subscriber self-management keep plant managers, security leads, and executives aligned on floor performance without dashboard logins.',
                    },
                  ].map((val, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">check_circle</span>
                        <h4 className="text-sm font-semibold text-on-surface font-sans">{val.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                        {val.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Contributions */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <h3 className="text-base font-bold text-on-surface font-sans">
                  My Engineering Contributions
                </h3>

                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Key technical responsibilities executed across the design, implementation, and deployment of the VisionFacts Analytics Agent:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      area: 'Dual-Pipeline Architecture Design',
                      points: 'Architected and built the two execution pipelines—interactive ad-hoc analytics and autonomous background reporting—using LangChain, DeepAgents, and LangGraph.',
                    },
                    {
                      area: 'MCP Tool Integration & Custom Server',
                      points: 'Configured MultiServerMCPClient to bridge mcp-postgres-server over stdio and implemented the custom FastMCP server for timezone-aware time checks and email distribution.',
                    },
                    {
                      area: 'SQL Guardrails & Schema Verification',
                      points: 'Implemented runtime schema inspection via describe_table to eliminate hallucinated table structures, enforcing parser-level SELECT-only query constraints.',
                    },
                    {
                      area: 'Secure FastAPI Image Proxy',
                      points: 'Engineered the host-validated CCTV snapshot streaming proxy in FastAPI, enabling the secure display of private LAN camera snapshots in public browser clients.',
                    },
                    {
                      area: 'Asynchronous Background Scheduler',
                      points: 'Implemented the non-blocking background audit scheduler using asyncio.create_task within the FastAPI application lifecycle for hourly and EOD reporting.',
                    },
                    {
                      area: 'Specialized Formatter Subagents',
                      points: 'Engineered structured prompt workflows and schemas for the Output Formatter Subagent (dashboard tables/markdown) and Email Formatter Subagent (responsive HTML email).',
                    },
                    {
                      area: 'Real-Time SSE Activity Streaming',
                      points: 'Built Server-Sent Events (SSE) streaming infrastructure in FastAPI to expose live tool invocations, task delegations, and SQL activity to the React interface.',
                    },
                    {
                      area: 'Subscriber Lifecycle & Export Workflows',
                      points: 'Implemented SQLite subscriber management with automated welcome emails and integrated client-side ExcelJS workbook generation for analytical table exports.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">verified</span>
                        <h4 className="text-sm font-bold text-on-surface font-sans">
                          {item.area}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                        {item.points}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </section>

            {/* Next/Previous Project Navigation */}
            <section className="pt-6 border-t border-outline-variant/30">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <Link
                  href="/project-visionfacts"
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all inline-flex items-center justify-center sm:justify-start gap-2 group self-stretch sm:self-center"
                >
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform" aria-hidden="true">
                    arrow_back
                  </span>
                  <span>Previous: Visionfacts.AI</span>
                </Link>

                <Link
                  href="/project-edubotix"
                  className="flex-1 p-5 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 transition-all group flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                      Next Case Study &rarr;
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-on-surface font-sans group-hover:text-primary transition-colors">
                      Edubotix
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans">
                      Production automated assessment and educational robotics intelligence platform.
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[24px] group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform shrink-0" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-surface-container border border-outline-variant/50 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center sm:text-left max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight font-sans">
                    Looking for a Senior AI or Systems Architect?
                  </h3>
                  <p className="text-sm font-sans text-secondary leading-relaxed">
                    Available for technical leadership roles, agentic AI architecture discussions, and enterprise computer vision consulting.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-primary text-on-primary font-mono text-xs font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 motion-reduce:active:scale-100 shadow-md"
                >
                  <span>Get in touch</span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </section>

          </main>
        </div>

      </div>
    </div>
  );
}
