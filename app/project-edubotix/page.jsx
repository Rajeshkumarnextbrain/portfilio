import Link from 'next/link';

export const metadata = {
  title: 'Edubotix | Case Study | Rajesh Kumar S',
  description: 'Context-aware learning assistant giving personalized answers across academic subjects using RAG.'
};

export default function EdubotixPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-8 sm:gap-10">

        {/* Back Link */}
        <div>
          <Link
            className="inline-flex items-center gap-2 font-mono-label text-xs sm:text-mono-label text-secondary hover:text-primary transition-colors group"
            href="/#projects"
          >
            <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span>All projects</span>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="bg-surface-container-high px-3 py-1 rounded-full">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-primary uppercase">RAG ASSISTANT</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-label text-[11px] sm:text-mono-label">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Role: Team Lead</span>
            </div>
          </div>
          <h1 className="font-headline-xl text-2xl sm:text-4xl md:text-headline-xl text-on-surface tracking-tight font-sans font-bold">
            Edubotix – AI Learning Assistant
          </h1>
          <p className="font-body-lg text-sm sm:text-base md:text-body-lg text-secondary max-w-3xl leading-relaxed">
            RAG-based educational assistant delivering personalized academic support across academic subjects.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <span className="font-mono-metric text-2xl sm:text-mono-metric text-primary">RAG</span>
            <span className="font-caption text-xs sm:text-caption text-secondary mt-2">Retrieval-Augmented Generation</span>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <span className="font-mono-metric text-2xl sm:text-mono-metric text-primary">Qdrant</span>
            <span className="font-caption text-xs sm:text-caption text-secondary mt-2">Vector database</span>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <span className="font-mono-metric text-2xl sm:text-mono-metric text-primary">AWS Bedrock</span>
            <span className="font-caption text-xs sm:text-caption text-secondary mt-2">LLM provider</span>
          </div>
          <div className="bg-surface-container-low p-4 sm:p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <span className="font-mono-metric text-2xl sm:text-mono-metric text-primary">Multi-turn</span>
            <span className="font-caption text-xs sm:text-caption text-secondary mt-2">Conversation memory</span>
          </div>
        </div>

        {/* Overview Banner */}
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 sm:p-8 relative overflow-hidden shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="font-mono-label text-xs sm:text-mono-label text-primary uppercase">PROJECT OVERVIEW</span>
            <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
              A context-aware conversational assistant that gives personalized answers across academic subjects. I led development, deployment and client integration for the platform.
            </p>
          </div>
        </div>

        {/* Context Pipeline Flow */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <span className="font-mono-label text-xs sm:text-mono-label text-primary uppercase">RAG &amp; CONVERSATIONAL MEMORY PIPELINE</span>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface mt-1 font-semibold">
              End-to-End Context Pipeline
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-2 w-full">
            <div className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 rounded-xl flex-1 flex flex-col justify-between">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-secondary">01 · INPUT</span>
              <div className="mt-3 sm:mt-4">
                <p className="font-headline-md text-sm sm:text-headline-md text-on-surface font-semibold">Student question</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-0.5 sm:p-1 text-secondary self-center">
              <span className="material-symbols-outlined rotate-90 lg:rotate-0 text-base sm:text-lg text-primary/70">
                arrow_forward
              </span>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 rounded-xl flex-1 flex flex-col justify-between">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-secondary">02 · CONTEXT PREP</span>
              <div className="mt-3 sm:mt-4">
                <p className="font-headline-md text-sm sm:text-headline-md text-on-surface font-semibold">Query rewriting</p>
                <p className="font-caption text-xs sm:text-caption text-secondary mt-1">Retrieval-ready rewrite using history</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-0.5 sm:p-1 text-secondary self-center">
              <span className="material-symbols-outlined rotate-90 lg:rotate-0 text-base sm:text-lg text-primary/70">
                arrow_forward
              </span>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 rounded-xl flex-1 flex flex-col justify-between">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-secondary">03 · RETRIEVAL</span>
              <div className="mt-3 sm:mt-4">
                <p className="font-headline-md text-sm sm:text-headline-md text-on-surface font-semibold">Vector search</p>
                <p className="font-caption text-xs sm:text-caption text-secondary mt-1">Embeddings + Qdrant similarity</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-0.5 sm:p-1 text-secondary self-center">
              <span className="material-symbols-outlined rotate-90 lg:rotate-0 text-base sm:text-lg text-primary/70">
                arrow_forward
              </span>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 rounded-xl flex-1 flex flex-col justify-between">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-secondary">04 · REASONING</span>
              <div className="mt-3 sm:mt-4">
                <p className="font-headline-md text-sm sm:text-headline-md text-on-surface font-semibold">AWS Bedrock</p>
                <p className="font-caption text-xs sm:text-caption text-secondary mt-1">Grounded generation with citations</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-0.5 sm:p-1 text-secondary self-center">
              <span className="material-symbols-outlined rotate-90 lg:rotate-0 text-base sm:text-lg text-primary/70">
                arrow_forward
              </span>
            </div>

            <div className="bg-surface-container-low border border-outline-variant/40 p-4 sm:p-5 rounded-xl flex-1 flex flex-col justify-between">
              <span className="font-mono-label text-[11px] sm:text-mono-label text-secondary">05 · MEMORY</span>
              <div className="mt-3 sm:mt-4">
                <p className="font-headline-md text-sm sm:text-headline-md text-on-surface font-semibold">Multi-turn memory</p>
                <p className="font-caption text-xs sm:text-caption text-secondary mt-1">Sustained multi-turn context</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contributions */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <span className="font-mono-label text-xs sm:text-mono-label text-primary uppercase">CONTRIBUTIONS</span>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface mt-1 font-semibold">
              What I built
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-low border border-outline-variant/30 p-5 sm:p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <span className="font-mono-label text-xs sm:text-mono-label text-primary font-bold">01</span>
                <h3 className="font-headline-md text-base sm:text-headline-md text-on-surface font-semibold">
                  Context-aware assistant
                </h3>
                <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed">
                  Personalized question answering across academic subjects with tailored explanations.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-5 sm:p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <span className="font-mono-label text-xs sm:text-mono-label text-primary font-bold">02</span>
                <h3 className="font-headline-md text-base sm:text-headline-md text-on-surface font-semibold">
                  RAG pipelines
                </h3>
                <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed">
                  Retrieval-Augmented Generation using vector databases, embeddings and contextual retrieval techniques.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/30 p-5 sm:p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <span className="font-mono-label text-xs sm:text-mono-label text-primary font-bold">03</span>
                <h3 className="font-headline-md text-base sm:text-headline-md text-on-surface font-semibold">
                  Query rewriting &amp; memory
                </h3>
                <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed">
                  Query rewriting and conversation memory workflows that improve answer relevance and multi-turn coherence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div>
            <span className="font-mono-label text-xs sm:text-mono-label text-primary uppercase">SYSTEM ARCHITECTURE</span>
            <h2 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface mt-1 font-semibold">Tech stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">LangChain</span>
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">Qdrant</span>
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">MongoDB</span>
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">FastAPI</span>
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">Docker</span>
            <span className="bg-surface-container-high border border-outline-variant/30 px-3 py-1.5 rounded-lg text-on-surface font-mono-code text-xs sm:text-sm">AWS Bedrock</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-3 sm:gap-4">
          <Link
            className="flex items-center gap-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 p-3.5 sm:p-4 rounded-xl text-on-surface transition-colors group flex-1"
            href="/project-analytics-agent"
          >
            <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_back</span>
            <div className="flex flex-col">
              <span className="font-caption text-xs text-secondary">Previous</span>
              <span className="font-body-md text-xs sm:text-sm text-on-surface group-hover:text-primary transition-colors font-semibold">
                Visionfacts Analytics Agent
              </span>
            </div>
          </Link>
          <Link
            className="flex items-center justify-end gap-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 p-3.5 sm:p-4 rounded-xl text-on-surface transition-colors group flex-1 text-right"
            href="/#projects"
          >
            <div className="flex flex-col">
              <span className="font-caption text-xs text-secondary">Overview</span>
              <span className="font-body-md text-xs sm:text-sm text-on-surface group-hover:text-primary transition-colors font-semibold">
                Back to all projects
              </span>
            </div>
            <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_forward</span>
          </Link>
        </div>

        {/* CTA */}
        <div className="bg-surface-container border border-outline-variant/40 p-6 sm:p-10 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-md">
          <div className="flex flex-col gap-1.5 sm:gap-2 max-w-xl">
            <h3 className="font-headline-lg text-xl sm:text-2xl text-on-surface font-bold">Want to discuss a similar system?</h3>
            <p className="font-body-md text-xs sm:text-sm text-secondary">
              Open for technical architecture discussions and senior/staff roles.
            </p>
          </div>
          <Link
            className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary font-mono-label text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm active:scale-95"
            href="/contact"
          >
            <span>Get in touch</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
