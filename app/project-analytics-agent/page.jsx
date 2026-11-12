import Link from 'next/link';

export const metadata = {
  title: 'Visionfacts Analytics Agent | Case Study | Rajesh Kumar S',
  description: 'Multi-agent autonomous reporting system answering operational queries in plain English.'
};

export default function AnalyticsAgentPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-10">

        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-primary transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> All projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-primary/10 border border-primary/30 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
              MULTI-AGENT AI
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Visionfacts Analytics Agent
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
            Multi-agent system for querying surveillance and operational data in natural language.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant font-mono">
              <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span>Built on Visionfacts.AI data</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant font-mono">
              <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span>Company: Nextbrain Technologies</span>
            </span>
          </div>
        </section>

        {/* Metric Cards */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-secondary tracking-wider block mb-2">Specialized agents</span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">3</span>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-secondary tracking-wider block mb-2">Tool protocol</span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">MCP</span>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-secondary tracking-wider block mb-2">Data source</span>
            <span className="text-xl sm:text-3xl font-mono font-bold text-primary truncate" title="PostgreSQL">PostgreSQL</span>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col justify-between">
            <span className="text-[11px] sm:text-xs font-mono uppercase text-secondary tracking-wider block mb-2">Report delivery</span>
            <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">Email</span>
          </div>
        </section>

        {/* Overview */}
        <section className="p-5 sm:p-6 rounded-xl bg-surface-container border-l-4 border-l-primary border border-outline-variant/30 space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">Project Overview</span>
          <p className="text-sm sm:text-base md:text-lg text-on-surface leading-relaxed">
            Operations teams had to open the dashboard to answer simple questions and prepare reports by hand. This agent connects to the Visionfacts.AI dashboard database so non-technical users can ask questions in plain language and receive hourly and end-of-day summaries by email.
          </p>
        </section>

        {/* Multi-Agent Architecture */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">
              End-to-End Multi-Agent Architecture
            </h2>
            <span className="text-xs font-mono text-outline">MCP Tool Pipeline</span>
          </div>

          <div className="p-4 sm:p-6 rounded-xl bg-surface-container border border-outline-variant/30">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
              {/* Stage 1 */}
              <div className="w-full lg:flex-1 p-3.5 sm:p-4 rounded-lg bg-surface-container-low border border-outline-variant/40 min-h-[90px] sm:min-h-[110px] flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-semibold block mb-1">01 &middot; TRIGGER</span>
                <h3 className="text-sm font-semibold text-white">User question or schedule</h3>
              </div>

              {/* Arrow */}
              <div className="text-outline flex items-center justify-center rotate-90 lg:rotate-0 py-0.5 sm:py-1" aria-hidden="true">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>

              {/* Stage 2 */}
              <div className="w-full lg:flex-1 p-3.5 sm:p-4 rounded-lg bg-surface-container-low border border-outline-variant/40 min-h-[90px] sm:min-h-[110px] flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-semibold block mb-1">02 &middot; ORCHESTRATION</span>
                <h3 className="text-sm font-semibold text-white">Supervisor Agent</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-snug">Plans the query and routes work</p>
              </div>

              {/* Arrow */}
              <div className="text-outline flex items-center justify-center rotate-90 lg:rotate-0 py-0.5 sm:py-1" aria-hidden="true">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>

              {/* Stage 3 */}
              <div className="w-full lg:flex-1 flex flex-col gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40">
                  <span className="text-[10px] font-mono text-primary font-semibold block mb-0.5">03A &middot; MCP ANALYTICS</span>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">Analytics Agent</h3>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">Queries PostgreSQL through MCP tools</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40">
                  <span className="text-[10px] font-mono text-primary font-semibold block mb-0.5">03B &middot; AUTOMATION</span>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">Report Generation Agent</h3>
                  <p className="text-[11px] text-on-surface-variant mt-0.5 leading-tight">Builds summaries</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-outline flex items-center justify-center rotate-90 lg:rotate-0 py-0.5 sm:py-1" aria-hidden="true">
                <svg className="w-5 h-5 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>

              {/* Stage 4 */}
              <div className="w-full lg:flex-1 p-3.5 sm:p-4 rounded-lg bg-surface-container-low border border-outline-variant/40 min-h-[90px] sm:min-h-[110px] flex flex-col justify-center">
                <span className="text-[10px] font-mono text-primary font-semibold block mb-1">04 &middot; DELIVERY</span>
                <h3 className="text-sm font-semibold text-white">Answer or email report</h3>
              </div>
            </div>
          </div>
        </section>

        {/* What each agent does */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">
            What each agent does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold">
                01
              </div>
              <h3 className="text-base font-semibold text-white">Supervisor Agent</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Handles query planning and delegates tasks to the other agents.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold">
                02
              </div>
              <h3 className="text-base font-semibold text-white">Analytics Agent</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Runs database analytics against enterprise PostgreSQL data to answer questions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 flex flex-col space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold">
                03
              </div>
              <h3 className="text-base font-semibold text-white">Report Generation Agent</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Produces automated insight reports and sends them through email-based workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="p-5 sm:p-6 rounded-xl bg-surface-container border border-outline-variant/30 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">Outcomes</h2>
          <p className="text-sm sm:text-base md:text-lg text-on-surface leading-relaxed">
            Natural language querying of operational data with automated insight generation. Email-based reporting removes manual report preparation for client operations teams. Self-service business intelligence for non-technical users.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">LangChain</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">Deep Agents</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">MCP</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">FastAPI</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">React</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">Gemini</span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-primary">GPT-5 mini</span>
          </div>
        </section>

        {/* Next/Previous Navigation */}
        <section className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <Link
            href="/project-visionfacts"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface hover:text-primary transition-colors flex items-center justify-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Previous: Visionfacts.AI
          </Link>

          <Link
            href="/project-edubotix"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-xs font-mono text-on-surface hover:text-primary transition-colors flex items-center justify-center gap-2 group"
          >
            Next: Edubotix <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </section>

        {/* CTA */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Want to discuss a similar system?</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-mono">Open for technical architecture discussions and senior/staff roles.</p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold text-xs sm:text-sm hover:opacity-95 transition-opacity whitespace-nowrap shadow-sm active:scale-95"
          >
            <span>Get in touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </section>

      </div>
    </div>
  );
}
