import Link from 'next/link';

export const metadata = {
  title: 'Edubotix | Case Study | Rajesh Kumar S',
  description: 'Context-aware learning assistant giving personalized answers across academic subjects using RAG.'
};

export default function EdubotixPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">

<div className="mb-8">
<a className="inline-flex items-center gap-2 font-mono-label text-mono-label text-secondary hover:text-primary transition-colors group" href="/#projects">
<span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
<span>All projects</span>
</a>
</div>

<div className="flex flex-col gap-4 mb-10">
<div className="flex items-center gap-3">
<div className="bg-surface-container-high px-3 py-1 rounded-full border-none">
<span className="font-mono-label text-mono-label text-primary uppercase">RAG ASSISTANT</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-label text-mono-label">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>Role: Team Lead</span>
</div>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
      Edubotix – AI Learning Assistant
    </h1>
<p className="font-body-lg text-body-lg text-secondary max-w-3xl">
      RAG-based educational assistant delivering personalized academic support.
    </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
<div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between">
<span className="font-mono-metric text-mono-metric text-primary">RAG</span>
<span className="font-caption text-caption text-secondary mt-2">Retrieval-Augmented Generation</span>
</div>
<div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between">
<span className="font-mono-metric text-mono-metric text-primary">Qdrant</span>
<span className="font-caption text-caption text-secondary mt-2">Vector database</span>
</div>
<div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between">
<span className="font-mono-metric text-mono-metric text-primary">AWS Bedrock</span>
<span className="font-caption text-caption text-secondary mt-2">LLM provider</span>
</div>
<div className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between">
<span className="font-mono-metric text-mono-metric text-primary">Multi-turn</span>
<span className="font-caption text-caption text-secondary mt-2">Conversation memory</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-6 sm:p-8 relative overflow-hidden mb-12 shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex flex-col gap-3">
<span className="font-mono-label text-mono-label text-primary uppercase">PROJECT OVERVIEW</span>
<p className="font-body-md text-body-md text-on-surface leading-relaxed">
        A context-aware conversational assistant that gives personalized answers across academic subjects. I led development, deployment and client integration for the platform.
      </p>
</div>
</div>

<div className="flex flex-col gap-6 mb-12">
<div>
<span className="font-mono-label text-mono-label text-primary uppercase">RAG &amp; CONVERSATIONAL MEMORY PIPELINE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">End-to-End Context Pipeline</h2>
</div>
<div className="flex flex-col lg:flex-row items-stretch gap-2 w-full">

<div className="bg-surface-container-low p-5 rounded-xl flex-1 flex flex-col justify-between">
<span className="font-mono-label text-mono-label text-secondary">01 · INPUT</span>
<div className="mt-4">
<p className="font-headline-md text-headline-md text-on-surface">Student question</p>
</div>
</div>

<div className="flex items-center justify-center p-1 text-secondary">
<span className="material-symbols-outlined lg:rotate-0 rotate-90">arrow_forward</span>
</div>

<div className="bg-surface-container-low p-5 rounded-xl flex-1 flex flex-col justify-between">
<span className="font-mono-label text-mono-label text-secondary">02 · CONTEXT PREP</span>
<div className="mt-4">
<p className="font-headline-md text-headline-md text-on-surface">Query rewriting</p>
<p className="font-caption text-caption text-secondary mt-1">Makes the question retrieval-ready using conversation context</p>
</div>
</div>

<div className="flex items-center justify-center p-1 text-secondary">
<span className="material-symbols-outlined lg:rotate-0 rotate-90">arrow_forward</span>
</div>

<div className="bg-surface-container-low p-5 rounded-xl flex-1 flex flex-col justify-between">
<span className="font-mono-label text-mono-label text-secondary">03 · RETRIEVAL</span>
<div className="mt-4">
<p className="font-headline-md text-headline-md text-on-surface">Retrieval</p>
<p className="font-caption text-caption text-secondary mt-1">Embeddings + Qdrant vector search</p>
</div>
</div>

<div className="flex items-center justify-center p-1 text-secondary">
<span className="material-symbols-outlined lg:rotate-0 rotate-90">arrow_forward</span>
</div>

<div className="bg-surface-container-low p-5 rounded-xl flex-1 flex flex-col justify-between">
<span className="font-mono-label text-mono-label text-secondary">04 · REASONING</span>
<div className="mt-4">
<p className="font-headline-md text-headline-md text-on-surface">LLM on AWS Bedrock</p>
<p className="font-caption text-caption text-secondary mt-1">Answers using retrieved context</p>
</div>
</div>

<div className="flex items-center justify-center p-1 text-secondary">
<span className="material-symbols-outlined lg:rotate-0 rotate-90">arrow_forward</span>
</div>

<div className="bg-surface-container-low p-5 rounded-xl flex-1 flex flex-col justify-between">
<span className="font-mono-label text-mono-label text-secondary">05 · MEMORY</span>
<div className="mt-4">
<p className="font-headline-md text-headline-md text-on-surface">Conversation memory</p>
<p className="font-caption text-caption text-secondary mt-1">Keeps multi-turn coherence</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mb-12">
<div>
<span className="font-mono-label text-mono-label text-primary uppercase">CONTRIBUTIONS</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">What I built</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex flex-col gap-3">
<span className="font-mono-label text-mono-label text-primary">01</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Context-aware assistant</h3>
<p className="font-body-sm text-body-sm text-secondary">
            Personalized question answering across academic subjects.
          </p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex flex-col gap-3">
<span className="font-mono-label text-mono-label text-primary">02</span>
<h3 className="font-headline-md text-headline-md text-on-surface">RAG pipelines</h3>
<p className="font-body-sm text-body-sm text-secondary">
            Retrieval-Augmented Generation using vector databases, embeddings and contextual retrieval techniques.
          </p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex flex-col gap-3">
<span className="font-mono-label text-mono-label text-primary">03</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Query rewriting and memory</h3>
<p className="font-body-sm text-body-sm text-secondary">
            Query rewriting and conversation memory workflows that improve answer relevance and multi-turn coherence.
          </p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low p-6 sm:p-8 rounded-xl mb-12 shadow-sm">
<div className="flex flex-col gap-2">
<span className="font-mono-label text-mono-label text-primary uppercase">LEADERSHIP</span>
<p className="font-body-md text-body-md text-on-surface">
        Led development, deployment and client integration for the platform.
      </p>
</div>
</div>

<div className="flex flex-col gap-4 mb-12">
<div>
<span className="font-mono-label text-mono-label text-primary uppercase">SYSTEM ARCHITECTURE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Tech stack</h2>
</div>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">LangChain</span>
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">Qdrant</span>
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">MongoDB</span>
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">FastAPI</span>
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">Docker</span>
<span className="bg-surface-container-high px-3.5 py-1.5 rounded-lg text-on-surface font-mono-code text-mono-code">AWS Bedrock</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 mb-12">
<a className="flex items-center gap-3 bg-surface-container-low hover:bg-surface-container p-4 rounded-xl text-on-surface transition-colors group flex-1" href="/project-analytics-agent">
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_back</span>
<div className="flex flex-col">
<span className="font-caption text-caption text-secondary">Previous</span>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Visionfacts Analytics Agent</span>
</div>
</a>
<a className="flex items-center justify-end gap-3 bg-surface-container-low hover:bg-surface-container p-4 rounded-xl text-on-surface transition-colors group flex-1 text-right" href="/#projects">
<div className="flex flex-col">
<span className="font-caption text-caption text-secondary">Overview</span>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Back to all projects</span>
</div>
<span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">arrow_forward</span>
</a>
</div>

<div className="bg-surface-container p-8 sm:p-10 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
<div className="flex flex-col gap-2 max-w-xl">
<h3 className="font-headline-lg text-headline-lg text-on-surface">Want to discuss a similar system?</h3>
<p className="font-body-md text-body-md text-secondary">
        Open for technical architecture discussions and senior/staff roles.
      </p>
</div>
<a className="bg-primary hover:bg-primary-container text-on-primary font-mono-label text-mono-label px-6 py-3 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm" href="/contact">
<span>Get in touch</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>
    </div>
  );
}
