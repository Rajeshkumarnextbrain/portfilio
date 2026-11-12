import Link from 'next/link';
import ProjectTOC from '../../components/ProjectTOC';

export const metadata = {
  title: 'Edubotix | Case Study | Rajesh Kumar S',
  description: 'Context-Aware Multimodal RAG Platform for Personalized Academic Learning combining hybrid dense-sparse vector search, progressive memory, and scientific MCP tools.',
};

const TOC_SECTIONS = [
  { id: 'overview', label: '01 · Project Overview' },
  { id: 'capabilities', label: '02 · Core Capabilities' },
  { id: 'architecture', label: '03 · System Architecture' },
  { id: 'innovations', label: '04 · Engineering Innovations' },
  { id: 'dual-engine-mcp', label: '05 · Dual-Engine & Scientific MCP' },
  { id: 'technical-infra', label: '06 · Backend & Storage Infrastructure' },
  { id: 'tech-stack', label: '07 · Technology Stack' },
  { id: 'contributions-outcomes', label: '08 · Contributions & Outcomes' },
];

export default function EdubotixPage() {
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
              <span>MULTIMODAL RAG &bull; ACADEMIC INTELLIGENCE PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface font-sans">
              Edubotix – Multimodal AI Learning Assistant
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-on-surface font-sans font-medium leading-relaxed max-w-4xl">
              Context-Aware Multimodal RAG Platform for Personalized Academic Learning
            </p>

            <p className="text-base text-secondary font-sans leading-relaxed max-w-3xl">
              An enterprise academic intelligence platform enabling students to interact with verified curriculum textbooks using natural language, mathematical equations, geometry diagrams, and textbook problem photos—powered by hybrid dense-sparse vector search, progressive session memory, and deterministic scientific MCP computation.
            </p>
          </div>

          {/* Headline Results Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Embedding Throughput
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">&gt;70%</span>
                <span className="text-xs font-mono text-secondary">Faster</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Concurrent AWS Bedrock embedding engine using 15-worker ThreadPoolExecutor and 50-chunk batches.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-primary/30 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Retrieval Precision
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">Hybrid Search</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Titan V2 1024-dim dense vectors fused with FastEmbed BM25 sparse vectors in Qdrant with curriculum filters.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Conversation Memory
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">Progressive TTL</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Rolling summary activation after 20 turns, 30-minute in-memory cache, delta updates, and MongoDB persistence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
                Scientific MCP Server
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary">9 Tools</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-secondary mt-2">
                Deterministic RDKit cheminformatics, Pint physical unit calculations, and Wiktionary definitions via FastMCP.
              </p>
            </div>
          </div>

          {/* Metadata & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Role: <strong className="font-semibold text-primary">Lead AI Backend Engineer</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Stack: <strong className="font-semibold">FastAPI &bull; AWS Bedrock &bull; Qdrant &bull; LangChain</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface">
                Protocol: <strong className="font-semibold">FastMCP (Model Context Protocol)</strong>
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
                  High-Precision Academic Assistance Beyond Generic Chatbots
                </h2>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <p className="text-base text-secondary font-sans leading-relaxed">
                  Traditional conversational AI models frequently fail in formal academic settings. When secondary and higher-secondary students present complex math problems, circuit schematics, or organic chemistry reactions, generic LLMs struggle with three critical failure modes: hallucinating scientific facts, providing explanations outside the student&apos;s prescribed educational curriculum, and committing arithmetic errors during multi-step unit conversions.
                </p>

                <p className="text-base text-secondary font-sans leading-relaxed">
                  <strong>Edubotix</strong> was engineered to solve this challenge through a production-grade, multimodal Retrieval-Augmented Generation (RAG) platform. Rather than acting as an open-ended conversational bot, the system acts as a curriculum-grounded academic tutor. Students submit questions in natural text, capture phone camera images of textbook problems or handwritten proofs, and ask follow-up questions across sustained multi-turn study sessions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">MULTIMODAL GROUNDING</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">Text, Diagrams &amp; Math</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Accepts textbook photos, geometric diagrams, LaTeX expressions, and follow-up references.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">CURRICULUM ISOLATION</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">Board &amp; Grade Scoping</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Qdrant payload filters isolate content strictly to the student&apos;s Board, Class, and Subject.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">SCIENTIFIC DETERMINISM</span>
                    <h3 className="text-sm font-semibold text-on-surface font-sans">MCP Scientific Server</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Offloads molecular chemistry and dimensional conversions to RDKit and Pint via Model Context Protocol.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. CORE CAPABILITIES */}
            <section id="capabilities" className="space-y-4 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  02 &bull; Core Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Seven Pillars of Academic RAG Engineering
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The Edubotix backend provides specialized capabilities designed to preserve academic accuracy, conversational coherence, and curriculum fidelity:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: 'photo_camera',
                    title: 'Multimodal Learning',
                    desc: 'Students submit textbook problem photos, hand-drawn geometry diagrams, and scientific figures alongside conversational text and mathematical queries.',
                  },
                  {
                    icon: 'psychology',
                    title: 'Contextual Query Understanding',
                    desc: 'A dedicated vision-language contextualization chain synthesizes the current query, uploaded image data, and chat history into a self-contained retrieval query.',
                  },
                  {
                    icon: 'manage_search',
                    title: 'Hybrid Dense & Sparse Search',
                    desc: 'Combines 1024-dimensional dense semantic vectors (Titan V2) with sparse keyword tokens (FastEmbed BM25) in Qdrant for both conceptual and exact-match retrieval.',
                  },
                  {
                    icon: 'filter_alt',
                    title: 'Curriculum Metadata Isolation',
                    desc: 'Restricts vector similarity queries at the database payload level by Board (e.g. CBSE), Class (e.g. 10th), and Subject (e.g. Physics) to prevent syllabus bleeding.',
                  },
                  {
                    icon: 'history_edu',
                    title: 'Progressive Conversational Memory',
                    desc: 'Maintains long-running multi-turn learning sessions by activating rolling checkpointed summaries after 20 turns, backed by a 30-min cache and MongoDB.',
                  },
                  {
                    icon: 'science',
                    title: 'Scientific MCP Computation',
                    desc: 'Delegates complex molecular structure rendering, cheminformatics, and physical unit conversions to deterministic Python libraries via FastMCP.',
                  },
                  {
                    icon: 'gavel',
                    title: 'Dual-Engine Academic Guardrails',
                    desc: 'Enforces a strict 3-tier classification taxonomy separating curriculum questions from general educational queries while blocking inappropriate non-academic topics.',
                  },
                ].map((cap, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{cap.icon}</span>
                      <h3 className="text-sm font-bold text-on-surface font-sans">{cap.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYSTEM ARCHITECTURE */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  03 &bull; System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Modular Multi-Layer Backend Architecture
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                Edubotix organizes data flows across six interconnected backend layers, decoupling asynchronous ingestion from low-latency query reasoning:
              </p>

              {/* Architecture Layered Cards */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {/* Layer A */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER A</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">REST / Async</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">API &amp; Session Layer</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      FastAPI asynchronous framework managing REST routing, JWT authentication, rate limiting, and session lifecycle validation.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Endpoints: /chat, /upload, /sessions
                    </div>
                  </div>

                  {/* Layer B */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER B</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">Async Pipeline</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Document Ingestion Pipeline</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Textbook PDF upload to S3, PyPDFium2 text extraction, RecursiveCharacterTextSplitter chunking, and parallel AWS Bedrock embedding into Qdrant.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tech: PyPDFium2 &bull; S3 &bull; ThreadPoolExecutor
                    </div>
                  </div>

                  {/* Layer C */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER C</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">Dense + Sparse</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Hybrid Retrieval Layer</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Titan Text Embeddings V2 (1024 dims) and FastEmbed BM25 sparse vectors executed within Qdrant, filtered by Board, Class, and Subject.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tech: Qdrant Vector DB &bull; Payload Filters
                    </div>
                  </div>

                  {/* Layer D */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER D</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">LangChain Chains</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Reasoning Layer</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Orchestrates multimodal contextualization, the Academic RAG tutor chain with step-by-step guidance, and the academic general-knowledge engine.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Models: Claude 3.5 Sonnet &bull; Titan V2
                    </div>
                  </div>

                  {/* Layer E */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER E</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">Checkpoint Memory</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Memory Layer</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Maintains conversational coherence via MongoDB full message history, rolling summaries after 20 turns, and a 30-minute in-memory cache.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tech: MongoDB &bull; Rolling Checkpoints
                    </div>
                  </div>

                  {/* Layer F */}
                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-primary font-bold">LAYER F</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-outline">Deterministic Tools</span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Scientific MCP Layer</h3>
                    <p className="text-xs text-secondary font-sans leading-relaxed">
                      Dedicated FastMCP server exposing nine specialized tools for RDKit cheminformatics, Pint physical unit conversions, and Wiktionary definitions.
                    </p>
                    <div className="text-[11px] font-mono text-outline border-t border-outline-variant/20 pt-2">
                      Tools: 6 RDKit &bull; 2 Pint &bull; 1 Wiktionary
                    </div>
                  </div>

                </div>

                {/* Pipeline Flow Visualization */}
                <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 space-y-2">
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block">
                    Execution Dataflow Summary
                  </span>
                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    Student Question &amp; Image &rarr; Multimodal Contextualizer (Bedrock) &rarr; Standalone Academic Query &rarr; Qdrant Hybrid Retrieval (Dense Titan V2 + Sparse BM25 + Metadata Filter) &rarr; Academic Tutor Chain &amp; Scientific MCP Tools &rarr; Step-by-Step Answer with KaTeX Math &rarr; Memory Update (MongoDB + Rolling Summary).
                  </p>
                </div>
              </div>
            </section>

            {/* 4. ENGINEERING INNOVATIONS */}
            <section id="innovations" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  04 &bull; Engineering Innovations
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Deep Technical Breakthroughs in Retrieval &amp; Ingestion
                </h2>
              </div>

              {/* Innovation A: Multimodal Query Contextualization */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">visibility</span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    A. Multimodal Query Contextualization
                  </h3>
                </div>
                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Students frequently ask ambiguous questions like <em>&quot;Explain step 2 of this problem&quot;</em> while attaching a phone picture of a geometry proof or an organic chemistry mechanism. Standard text-only RAG pipelines fail completely in this scenario because the vector query contains zero semantic search terms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">The Contextualization Chain</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      A vision-language model evaluates the input image, extracts printed text, mathematical symbols, and diagram geometries, and correlates it with the last 5 turns of conversation history.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">Standalone Search Query</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      Produces an expanded, standalone academic retrieval query such as: <em>&quot;CBSE Class 10 Circles Theorem 10.2 tangent length from external point proof&quot;</em>, ensuring high-fidelity vector retrieval.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation B: Concurrent PDF Ingestion */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-primary/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">bolt</span>
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      B. Concurrent PDF Ingestion &amp; Embedding Pipeline
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-bold">
                    &gt;70% Throughput Boost
                  </span>
                </div>
                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Injesting full 400-page academic textbooks with traditional sequential embedding workflows took upwards of 15–20 minutes per volume, bottlenecked by round-trip latency to cloud embedding APIs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">FAST PARSING</span>
                    <h4 className="text-sm font-semibold text-on-surface">PyPDFium2 &amp; Chunking</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      High-speed C++ backed PDF parsing and RecursiveCharacterTextSplitter with 1000-character chunks and 200-character overlap.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">BATCH PROCESSING</span>
                    <h4 className="text-sm font-semibold text-on-surface">50-Chunk Batches</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Chunks are assembled into 50-item batches to saturate embedding model token windows while avoiding payload limits.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold">CONCURRENCY</span>
                    <h4 className="text-sm font-semibold text-on-surface">15-Worker ThreadPool</h4>
                    <p className="text-xs text-secondary leading-relaxed">
                      Custom ParallelBedrockEmbeddings class dispatches batches in parallel via ThreadPoolExecutor, achieving &gt;70% throughput improvement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Innovation C: Hybrid Vector Retrieval */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">hub</span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    C. Hybrid Dense &amp; Sparse Vector Retrieval
                  </h3>
                </div>
                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Academic questions require both conceptual semantic understanding (e.g., <em>&quot;How does cellular respiration release energy?&quot;</em>) and exact scientific terminology matching (e.g., <em>&quot;Adenosine Triphosphate stoichiometry&quot;</em>). Pure dense search often overlooks specific formula keywords, while pure keyword search misses conceptually equivalent explanations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">Dense Embeddings (Titan V2)</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      Generates 1024-dimensional semantic embeddings capturing conceptual meaning, sentence grammar, and disciplinary context.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-xs font-mono text-primary font-bold uppercase">Sparse Retrieval (FastEmbed BM25)</span>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      Computes lexical term frequency and inverse document frequency for exact formula tokens, named theorems, and chemical acronyms.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 text-xs text-secondary space-y-1">
                  <strong className="text-on-surface">Syllabus-Aware Payload Filtering:</strong> Qdrant fuses dense and sparse vector scores using Reciprocal Rank Fusion (RRF), simultaneously enforcing hard payload filters (<code className="font-mono text-primary">board: CBSE</code>, <code className="font-mono text-primary">class: 10</code>, <code className="font-mono text-primary">subject: Science</code>) to guarantee zero syllabus cross-contamination.
                </div>
              </div>

              {/* Innovation D: Progressive Conversation Memory */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">memory</span>
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    D. Progressive Conversational Memory Lifecycle
                  </h3>
                </div>
                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Academic study sessions often extend beyond 30–50 conversational turns. Storing full uncompressed transcripts rapidly exhausts LLM context windows, inflates token inference costs, and dilutes retrieval attention.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
                    <span className="text-[10px] font-mono text-primary font-bold block mb-1">TURNS 1–20</span>
                    <h4 className="text-xs font-bold text-on-surface">Raw Buffer History</h4>
                    <p className="text-[11px] text-secondary mt-1">Full message exchanges preserved for verbatim contextual precision.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
                    <span className="text-[10px] font-mono text-primary font-bold block mb-1">TURN 20+ THRESHOLD</span>
                    <h4 className="text-xs font-bold text-on-surface">Rolling Summary</h4>
                    <p className="text-[11px] text-secondary mt-1">Compacts past turns into 2–4 concise bullet educational summaries.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
                    <span className="text-[10px] font-mono text-primary font-bold block mb-1">CACHE STRATEGY</span>
                    <h4 className="text-xs font-bold text-on-surface">30-Min TTL Cache</h4>
                    <p className="text-[11px] text-secondary mt-1">In-memory cache stores active session summaries, updating via delta updates.</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30">
                    <span className="text-[10px] font-mono text-primary font-bold block mb-1">PERSISTENCE</span>
                    <h4 className="text-xs font-bold text-on-surface">MongoDB Checkpoints</h4>
                    <p className="text-[11px] text-secondary mt-1">Original raw dialogue and rolling checkpoints permanently archived for audits.</p>
                  </div>
                </div>
              </div>

            </section>

            {/* 5. DUAL-ENGINE & SCIENTIFIC MCP */}
            <section id="dual-engine-mcp" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  05 &bull; Dual-Engine &amp; Scientific MCP
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Guardrailed Reasoning &amp; Deterministic Calculation
                </h2>
              </div>

              {/* Dual Engine Comparison */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="border-b border-outline-variant/30 pb-3">
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Guardrailed Dual-Engine Architecture
                  </h3>
                  <p className="text-xs text-secondary font-mono">
                    Three-tier classification system separating curriculum RAG from general knowledge
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-surface-container-low border border-primary/30 space-y-2">
                    <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block">
                      ENGINE 01 &bull; SYLLABUS-SPECIFIC
                    </span>
                    <h4 className="text-base font-bold text-on-surface">Academic RAG Engine</h4>
                    <ul className="text-xs sm:text-sm text-secondary space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>Retrieves syllabus-specific textbook passages through Qdrant vector similarity.</li>
                      <li>Generates step-by-step pedagogical explanations tailored to the student&apos;s grade level.</li>
                      <li>Formats mathematical formulas, derivations, and matrices using standard KaTeX notation.</li>
                      <li>Includes explicit chapter, section, and page citations back to official textbooks.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <span className="text-xs font-mono text-outline font-bold uppercase tracking-wider block">
                      ENGINE 02 &bull; GENERAL &amp; SAFETY
                    </span>
                    <h4 className="text-base font-bold text-on-surface">Academic General-Knowledge Engine</h4>
                    <ul className="text-xs sm:text-sm text-secondary space-y-1.5 list-disc list-inside leading-relaxed">
                      <li>Enforces 3-tier classification: <strong className="text-on-surface">Allowed Academic</strong>, <strong className="text-error">Restricted/Harmful</strong>, and <strong className="text-outline">Ambiguous</strong>.</li>
                      <li>Gracefully rejects entertainment queries, gaming, or non-educational conversational chatter.</li>
                      <li>Resolves ambiguous queries by prompting student clarification rather than guessing.</li>
                      <li>Incorporates safe search tools to retrieve current scientific discoveries and definitions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scientific FastMCP Server */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-primary/30 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface font-sans">
                      Scientific FastMCP Server (9 Specialized Tools)
                    </h3>
                    <p className="text-xs text-secondary font-mono">
                      Deterministic calculation engine via Model Context Protocol
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-surface-container-high border border-primary/30 text-xs font-mono text-primary font-semibold">
                    RDKit + Pint + Wiktionary
                  </span>
                </div>

                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Large language models are inherently probabilistic text generators; when asked to calculate molecular weights, test chemical validity, or perform chained unit conversions across metric and imperial systems, LLMs frequently hallucinate intermediate arithmetic. Edubotix eliminates this failure mode by equipping the agent with a custom FastMCP server providing nine deterministic tools:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* RDKit Chemistry */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[18px]">biotech</span>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider">RDKit &bull; Chemistry (6 Tools)</h4>
                    </div>
                    <ul className="text-xs text-secondary space-y-1">
                      <li>&bull; <strong className="text-on-surface font-mono">get_molecule_info:</strong> InChI, SMILES, MW</li>
                      <li>&bull; <strong className="text-on-surface font-mono">get_descriptors:</strong> LogP, HBD/HBA, TPSA</li>
                      <li>&bull; <strong className="text-on-surface font-mono">generate_2d_depiction:</strong> Clean 2D SVG</li>
                      <li>&bull; <strong className="text-on-surface font-mono">calculate_similarity:</strong> Tanimoto/Morgan</li>
                      <li>&bull; <strong className="text-on-surface font-mono">substructure_search:</strong> Functional groups</li>
                      <li>&bull; <strong className="text-on-surface font-mono">analyze_reaction:</strong> Balancing &amp; products</li>
                    </ul>
                  </div>

                  {/* Pint Units */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[18px]">straighten</span>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Pint &bull; Physics (2 Tools)</h4>
                    </div>
                    <ul className="text-xs text-secondary space-y-1">
                      <li>&bull; <strong className="text-on-surface font-mono">convert_units:</strong> Dimensional verification across SI, CGS, and imperial scales</li>
                      <li>&bull; <strong className="text-on-surface font-mono">evaluate_expression:</strong> Safe physical calculations validating dimensional consistency</li>
                    </ul>
                  </div>

                  {/* Wiktionary Definitions */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[18px]">menu_book</span>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Wiktionary (1 Tool)</h4>
                    </div>
                    <ul className="text-xs text-secondary space-y-1">
                      <li>&bull; <strong className="text-on-surface font-mono">get_academic_definition:</strong> Authoritative etymological roots and formal scientific terminology definitions across disciplines</li>
                    </ul>
                  </div>
                </div>
              </div>

            </section>

            {/* 6. BACKEND & STORAGE INFRASTRUCTURE */}
            <section id="technical-infra" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  06 &bull; Backend &amp; Storage Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  High-Throughput Asynchronous Server Architecture
                </h2>
              </div>

              <p className="text-base text-secondary font-sans leading-relaxed">
                The platform is engineered as an enterprise-grade backend service built on FastAPI, containerized with Docker Compose, and backed by specialized storage tiers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">api</span>
                    <h3 className="text-sm font-bold text-on-surface font-sans">FastAPI Core Architecture</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    Built using Python 3.11 with asynchronous endpoint handlers (<code className="font-mono text-primary">async def</code>), Uvicorn ASGI workers, and Pydantic v2 data validation schemas. Handles concurrent student chat traffic without thread starvation.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">cloud</span>
                    <h3 className="text-sm font-bold text-on-surface font-sans">AWS S3 Document Storage</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    Stores raw textbook PDFs, parsed chapter page artifacts, and uploaded student problem images with secure presigned URLs and cryptographic integrity verification.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">dataset</span>
                    <h3 className="text-sm font-bold text-on-surface font-sans">MongoDB Session Database</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    Houses user session records, multi-turn dialogue histories, rolling summary checkpoints, student profile preferences, and analytics telemetry.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">database</span>
                    <h3 className="text-sm font-bold text-on-surface font-sans">Qdrant Vector Engine</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                    Orchestrates dense and sparse vector indexing, in-memory HNSW graphs, and payload metadata filtering with sub-50ms search latencies under high concurrency.
                  </p>
                </div>
              </div>

              {/* Core API Endpoints Grouping */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <div className="border-b border-outline-variant/30 pb-3">
                  <h3 className="text-lg font-bold text-on-surface font-sans">
                    Primary Backend REST API Endpoints
                  </h3>
                  <p className="text-xs text-secondary font-mono">
                    High-level service interface grouping
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/40 text-outline font-mono text-xs uppercase">
                        <th className="py-2.5 px-3">Method &amp; Endpoint</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Description &amp; Payload Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 text-secondary">
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">POST /api/v1/chat/message</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Conversational RAG</td>
                        <td className="py-3 px-3">Main student inference route. Accepts question text, optional image URL, session ID, and curriculum filters. Returns step-by-step KaTeX guidance.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">POST /api/v1/documents/ingest</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Textbook Ingestion</td>
                        <td className="py-3 px-3">Uploads textbook PDF to S3, triggers concurrent PyPDFium2 chunking, executes parallel Bedrock embeddings, and populates Qdrant.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">GET /api/v1/sessions/&#123;id&#125;/history</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Session Memory</td>
                        <td className="py-3 px-3">Retrieves chronological chat transcript and rolling summary checkpoints from MongoDB.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-primary font-semibold">POST /api/v1/mcp/scientific/calculate</td>
                        <td className="py-3 px-3 text-on-surface font-medium">Deterministic Tooling</td>
                        <td className="py-3 px-3">Direct invocation bridge for RDKit cheminformatics or Pint unit conversion expressions.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-xs text-secondary">
                  <strong className="text-on-surface">Docker Compose Deployment:</strong> Services are containerized across isolated multi-stage Docker builds, orchestrating the FastAPI backend worker, Qdrant vector database, MongoDB instance, and FastMCP server with health check dependencies.
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
                  Modular Technical Specifications by Layer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    layer: 'AI Models & Foundation LLMs',
                    tech: 'AWS Bedrock &bull; Claude 3.5 Sonnet &bull; Titan Embeddings V2',
                    desc: 'High-speed vision-language models for multimodal query contextualization, step-by-step tutoring, and 1024-dim dense embeddings.',
                  },
                  {
                    layer: 'Vector & Keyword Search',
                    tech: 'Qdrant Vector DB &bull; FastEmbed BM25 &bull; RRF',
                    desc: 'Hybrid dense-sparse vector database storing 1024d embeddings alongside sparse lexical tokens with strict payload filtering.',
                  },
                  {
                    layer: 'Scientific MCP Server',
                    tech: 'FastMCP &bull; RDKit &bull; Pint &bull; Wiktionary API',
                    desc: 'Deterministic Model Context Protocol microservice exposing 9 tools for chemistry calculations, physical unit conversions, and definitions.',
                  },
                  {
                    layer: 'Backend API Framework',
                    tech: 'Python 3.11 &bull; FastAPI &bull; Uvicorn &bull; Pydantic v2',
                    desc: 'Asynchronous, high-throughput REST backend handling concurrent student interactions, chat sessions, and ingestion routines.',
                  },
                  {
                    layer: 'Document Ingestion & Concurrency',
                    tech: 'PyPDFium2 &bull; RecursiveCharacterTextSplitter &bull; ThreadPoolExecutor',
                    desc: 'C++ backed PDF parser with 15-worker concurrent batch embedding pipeline achieving &gt;70% throughput boost.',
                  },
                  {
                    layer: 'Data Storage & Persistence',
                    tech: 'MongoDB &bull; AWS S3 Object Storage',
                    desc: 'MongoDB stores multi-turn conversation logs and rolling summary checkpoints; AWS S3 stores textbook PDFs and student image uploads.',
                  },
                  {
                    layer: 'Orchestration & Chains',
                    tech: 'LangChain &bull; Custom Runnable Chains',
                    desc: 'Composes query contextualization chains, dual-engine guardrail classification, and progressive memory summarize workflows.',
                  },
                  {
                    layer: 'Mathematical Rendering',
                    tech: 'KaTeX Math Notation',
                    desc: 'Standardized formula syntax and step-by-step LaTeX derivation formatting for physics, chemistry, and calculus solutions.',
                  },
                  {
                    layer: 'Infrastructure & Containerization',
                    tech: 'Docker &bull; Docker Compose &bull; Multi-Stage Builds',
                    desc: 'Production containerized deployment managing FastAPI, FastMCP, Qdrant, and MongoDB services with automated network isolation.',
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

            {/* 8. CONTRIBUTIONS & OUTCOMES */}
            <section id="contributions-outcomes" className="space-y-6 scroll-mt-24">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold block">
                  08 &bull; Contributions &amp; Outcomes
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-on-surface font-sans tracking-tight">
                  Verified Engineering Achievements &amp; Core Responsibilities
                </h2>
              </div>

              {/* Measurable Achievements */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <h3 className="text-base font-bold text-on-surface font-sans">
                  Verified Engineering Achievements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-2xl font-mono font-bold text-primary">&gt;70%</span>
                    <h4 className="text-xs font-bold text-on-surface font-sans">Ingestion Throughput</h4>
                    <p className="text-xs text-secondary">Boosted embedding speed with 15-worker ThreadPoolExecutor and 50-chunk batches.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-2xl font-mono font-bold text-primary">1024d + BM25</span>
                    <h4 className="text-xs font-bold text-on-surface font-sans">Hybrid Search Precision</h4>
                    <p className="text-xs text-secondary">Titan V2 dense vectors fused with FastEmbed BM25 sparse lexical tokens in Qdrant.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-2xl font-mono font-bold text-primary">20 Turns</span>
                    <h4 className="text-xs font-bold text-on-surface font-sans">Memory Checkpoints</h4>
                    <p className="text-xs text-secondary">Summary threshold with 30-min in-memory cache TTL and delta updates.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
                    <span className="text-2xl font-mono font-bold text-primary">9 MCP Tools</span>
                    <h4 className="text-xs font-bold text-on-surface font-sans">Zero Calculation Hallucinations</h4>
                    <p className="text-xs text-secondary">Deterministic chemistry and physical units through FastMCP RDKit and Pint servers.</p>
                  </div>
                </div>
              </div>

              {/* Engineering Contributions */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/40 space-y-4">
                <h3 className="text-base font-bold text-on-surface font-sans">
                  My Engineering Contributions
                </h3>

                <p className="text-sm text-secondary font-sans leading-relaxed">
                  Key responsibilities delivered across the technical design, backend implementation, and deployment of Edubotix:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      area: 'Multimodal RAG Pipeline Implementation',
                      points: 'Designed and implemented the end-to-end multimodal contextualization chain in LangChain, enabling simultaneous ingestion of student images, diagrams, and mathematical follow-ups.',
                    },
                    {
                      area: 'Hybrid Dense-Sparse Vector Retrieval',
                      points: 'Architected the hybrid Qdrant search combining 1024-dimensional Titan Text V2 dense vectors with FastEmbed BM25 sparse keyword indices, integrating curriculum payload filters.',
                    },
                    {
                      area: 'Concurrent Document Ingestion Optimization',
                      points: 'Built ParallelBedrockEmbeddings using ThreadPoolExecutor with 15 concurrent workers and 50-chunk batching, delivering a verified >70% throughput boost for full textbook ingestion.',
                    },
                    {
                      area: 'Progressive Conversation Memory Architecture',
                      points: 'Engineered the checkpointed memory lifecycle with a 20-turn threshold, 2–4 bullet educational rolling summaries, 30-minute in-memory cache TTL, and MongoDB transcript persistence.',
                    },
                    {
                      area: 'Academic Guardrails & Dual-Engine System',
                      points: 'Implemented the 3-tier classification taxonomy separating curriculum RAG tutoring from general educational questions while blocking inappropriate, non-academic user topics.',
                    },
                    {
                      area: 'Scientific FastMCP Microservice',
                      points: 'Created the dedicated FastMCP server implementing nine deterministic tools across RDKit (cheminformatics/reaction balancing) and Pint (dimensional analysis/unit conversion).',
                    },
                    {
                      area: 'FastAPI Backend & API Service Design',
                      points: 'Built the production asynchronous FastAPI backend, implementing session validation, document ingestion routes, and Pydantic schemas.',
                    },
                    {
                      area: 'Docker Compose Infrastructure Deployment',
                      points: 'Containerized all microservices using multi-stage Docker builds, orchestrating FastAPI, FastMCP, Qdrant, and MongoDB within an isolated Docker Compose network.',
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

            {/* Next / Previous Project Navigation */}
            <section className="pt-6 border-t border-outline-variant/30">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <Link
                  href="/project-analytics-agent"
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 text-xs font-mono text-on-surface hover:text-primary transition-all inline-flex items-center justify-center sm:justify-start gap-2 group self-stretch sm:self-center"
                >
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0 transition-transform" aria-hidden="true">
                    arrow_back
                  </span>
                  <span>Previous: Visionfacts Analytics Agent</span>
                </Link>

                <Link
                  href="/project-visionfacts"
                  className="flex-1 p-5 rounded-xl bg-surface-container border border-outline-variant/40 hover:border-primary/60 transition-all group flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                      Next Case Study &rarr;
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-on-surface font-sans group-hover:text-primary transition-colors">
                      VisionFacts.ai
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans">
                      Production-grade real-time CCTV video analytics platform serving 130+ camera streams across 2 &times; NVIDIA L4 GPUs.
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
                    Looking for a Senior AI or Backend Engineer?
                  </h3>
                  <p className="text-sm font-sans text-secondary leading-relaxed">
                    Available for technical leadership roles, multimodal RAG architecture discussions, and client consulting projects.
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
