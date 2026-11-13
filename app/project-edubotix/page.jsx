import Link from "next/link";

export default function EdubotixPage() {
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-16 bottom-0 w-16 z-40 flex-col items-center justify-between py-space-xl"><div className="flex flex-col items-center gap-space-md"><span className="font-label-sm text-label-sm text-ink-muted uppercase">RAIL</span><div className="flex flex-col items-center gap-space-xs font-label-sm text-label-sm text-ink-faint"><span className="text-primary font-bold">00</span><span className="text-ink-muted">01</span><span className="text-secondary font-bold">02</span><span className="text-ink-muted">03</span><span className="text-ink-faint">04</span><span className="text-ink-faint">05</span><span className="text-ink-faint">06</span><span className="text-ink-faint">07</span><span className="text-ink-faint">08</span></div></div><div className="flex flex-col items-center gap-1"><span className="w-2 h-0.5 bg-secondary-container"></span><span className="font-label-sm text-[9px] text-ink-muted tracking-widest uppercase">POS</span></div></aside><div className="hidden lg:block fixed bottom-space-lg left-20 z-40 pointer-events-none"><div className="bg-surface-container-low px-space-md py-1.5 rounded-DEFAULT shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><span className="font-label-timecode text-label-timecode uppercase text-on-surface-variant tracking-widest">CASE STUDY 02 / 03 · <span className="text-primary font-bold">ANALYTICS AGENT</span></span></div></div>
      <main className="w-full pt-16 bg-surface lg:pl-16 min-h-screen"><div className="flex flex-col w-full text-on-surface">
{/* CHAPTER 0: HERO (Paper Surface) */}
<section className="w-full bg-surface pt-12 pb-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Breadcrumb Meta */}
<div className="flex items-center gap-space-sm mb-space-xl">
<span className="font-label-timecode text-label-timecode uppercase tracking-widest text-ink-muted">
          PROJECTS / EDUBOTIX · CASE STUDY 03 / 03
        </span>
</div>
{/* Mega Headline (3 lines with orange highlight marker) */}
<h1 className="font-mega-display text-mega-display text-primary tracking-tighter uppercase mb-space-xl select-none">
<span className="block">Show your</span>
<span className="block relative inline-block">
<span className="relative z-10">working.</span>
<span className="absolute inset-x-0 bottom-3 top-4 bg-signal-orange-tint -z-0 -rotate-1 rounded-DEFAULT"></span>
</span>
<span className="block">Every answer.</span>
</h1>
{/* Sub-headline */}
<p className="font-body-lg text-body-lg text-on-surface max-w-4xl mb-space-2xl leading-relaxed">
        A context-aware multimodal academic intelligence platform that lets students learn from verified curriculum textbooks using natural language, equations, diagrams and photos of textbook problems.
      </p>
{/* Ruled Metadata Strip */}
<div className="w-full bg-paper-sunken p-space-lg mb-space-2xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg font-label-sm text-label-sm uppercase tracking-wider text-ink-muted">
<div>
<span className="text-primary font-bold block mb-1">ROLE:</span>
            Lead AI &amp; Backend Systems Architect (Team Lead)
          </div>
<div>
<span className="text-primary font-bold block mb-1">DOMAIN:</span>
            AI-Powered Education, STEM Curriculum Tutoring
          </div>
<div>
<span className="text-primary font-bold block mb-1">STACK:</span>
            AWS Bedrock (Claude / Titan V2), Qdrant, FastMCP, MongoDB, FastAPI, Docker
          </div>
</div>
</div>
{/* Ruled Numerals Row (4 columns) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-3xl">
<div className="bg-paper-raised p-space-lg flex flex-col justify-between">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">&gt;70%</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-md">FASTER TEXTBOOK INGESTION</span>
</div>
<div className="bg-paper-raised p-space-lg flex flex-col justify-between">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">9</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-md">DETERMINISTIC FASTMCP TOOLS</span>
</div>
<div className="bg-paper-raised p-space-lg flex flex-col justify-between">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">1024-DIM</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-md">DENSE + BM25 SPARSE HYBRID SEARCH</span>
</div>
<div className="bg-paper-raised p-space-lg flex flex-col justify-between">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">20-TURN</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-wider mt-space-md">ROLLING SUMMARY TRIGGER</span>
</div>
</div>
{/* Viewfinder-bracketed "Worked Answer" Panel */}
<div className="relative p-space-xl bg-paper-raised my-space-lg">
{/* Optical Viewfinder Corner Brackets */}
<span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary -translate-x-2 -translate-y-2 pointer-events-none"></span>
<span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary translate-x-2 -translate-y-2 pointer-events-none"></span>
<span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary -translate-x-2 translate-y-2 pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary translate-x-2 translate-y-2 pointer-events-none"></span>
<div className="flex flex-col gap-space-lg font-label-sm text-label-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md bg-surface-container-high px-space-md py-space-sm rounded-DEFAULT">
<span className="text-secondary font-bold tracking-wider">COMPUTE · PINT:</span>
<span className="font-label-timecode text-primary font-bold text-body-md">5 m/s × 10 s = 50 m</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md bg-surface-container px-space-md py-space-sm rounded-DEFAULT">
<span className="text-ink-muted font-bold tracking-wider">RETRIEVE · QDRANT:</span>
<span className="text-on-surface">Source: textbook chapter, page and section</span>
</div>
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-DEFAULT">
<span className="text-primary font-bold tracking-wider">SOCRATIC RESPONSE · KATEX:</span>
<div className="font-label-timecode text-body-md text-primary mt-space-xs space-y-1">
<div>{"v = \\frac{\\Delta x}{\\Delta t} \\implies \\Delta x = v \\cdot \\Delta t"}</div>
<div>{"\\Delta x = (5\\,\\text{m/s}) \\times (10\\,\\text{s}) = 50\\,\\text{m}"}</div>
</div>
</div>
</div>
</div>
{/* Mono Tech Chips */}
<div className="flex flex-wrap gap-space-xs mt-space-xl">
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">AWS Bedrock</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">Qdrant</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">FastMCP</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">MongoDB</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">FastAPI</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">Docker</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">RDKit</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">Pint</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">SymPy</span>
<span className="px-space-md py-1 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">KaTeX</span>
</div>
</div>
</section>
{/* CHAPTER 1: OVERVIEW (Paper Sunken) */}
<section className="w-full bg-paper-sunken py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">01 / OVERVIEW</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Why generic chatbots fail at STEM.</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl">
{/* Left: Problem */}
<div className="flex flex-col bg-surface p-space-xl">
<span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase mb-space-sm">PROBLEM</span>
<p className="font-body-md text-body-md text-on-surface mb-space-xl">
            Standard conversational AI struggles in structured academic environments. On rigorous STEM curricula (physics, chemistry, mathematics), generic LLMs show three failure modes.
          </p>
<div className="flex flex-col gap-space-lg">
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Mathematical &amp; Scientific Hallucinations</h3>
<p className="font-body-md text-body-sm text-ink-muted">Large language models predict next tokens statistically rather than executing arithmetic or chemical calculations deterministically, often yielding subtly incorrect numerical solutions or non-existent chemical bonds.</p>
</div>
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Curriculum Drift</h3>
<p className="font-body-md text-body-sm text-ink-muted">Generic models pull unvetted explanations from the broader internet rather than adhering to the textbook definitions, notations and pedagogies prescribed by regional educational boards.</p>
</div>
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Context Collapse in Long Sessions</h3>
<p className="font-body-md text-body-sm text-ink-muted">As students ask long series of follow-ups, conversation buffers exceed token limits or suffer attention dilution, losing track of earlier derivations.</p>
</div>
</div>
</div>
{/* Right: Solution */}
<div className="flex flex-col bg-surface p-space-xl">
<span className="font-label-sm text-label-sm text-primary font-bold tracking-widest uppercase mb-space-sm">SOLUTION</span>
<p className="font-body-md text-body-md text-on-surface mb-space-xl">
            Edubotix lets students interact with verified curriculum textbooks using natural language, mathematical equations, geometry diagrams and textbook problem photos. It fuses three things:
          </p>
<div className="flex flex-col gap-space-lg">
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Hybrid Dense-Sparse Vector Retrieval</h3>
<p className="font-body-md text-body-sm text-ink-muted">combines Amazon Titan V2 dense semantic embeddings with FastEmbed BM25 sparse lexical tokens in Qdrant.</p>
</div>
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Progressive Session Memory</h3>
<p className="font-body-md text-body-sm text-ink-muted">sliding-window context with rolling summarization and time-to-live (TTL) delta updates.</p>
</div>
<div className="p-space-md bg-surface-container-low">
<h3 className="font-headline-md text-body-lg text-primary font-bold mb-space-xs">Scientific FastMCP Tool Suite</h3>
<p className="font-body-md text-body-sm text-ink-muted">decoupled Model Context Protocol tools executing deterministic cheminformatics (RDKit) and dimensional physical unit conversions (Pint).</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 2: OBJECTIVES (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">02 / OBJECTIVES</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Four objectives.</h2>
<div className="flex flex-col gap-space-md">
{/* Objective 01 */}
<div className="p-space-xl bg-paper-raised flex flex-col md:flex-row items-start md:items-baseline gap-space-lg">
<span className="font-label-sm text-headline-md text-secondary font-bold min-w-16">01</span>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary mb-space-xs">Verified Curriculum Grounding</h3>
<p className="font-body-md text-body-md text-ink-muted">constrain generative answers strictly to approved grade-level curriculum textbooks using payload-filtered vector partitions.</p>
</div>
</div>
{/* Objective 02 */}
<div className="p-space-xl bg-paper-raised flex flex-col md:flex-row items-start md:items-baseline gap-space-lg">
<span className="font-label-sm text-headline-md text-secondary font-bold min-w-16">02</span>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary mb-space-xs">Multimodal Problem Perception</h3>
<p className="font-body-md text-body-md text-ink-muted">accept questions via natural text, LaTeX mathematical syntax, or cropped smartphone photos of textbook diagrams.</p>
</div>
</div>
{/* Objective 03 */}
<div className="p-space-xl bg-paper-raised flex flex-col md:flex-row items-start md:items-baseline gap-space-lg">
<span className="font-label-sm text-headline-md text-secondary font-bold min-w-16">03</span>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary mb-space-xs">Deterministic Calculation Safeguards</h3>
<p className="font-body-md text-body-md text-ink-muted">intercept scientific and mathematical sub-tasks and route them to verified symbolic tools, eliminating token-prediction arithmetic errors.</p>
</div>
</div>
{/* Objective 04 */}
<div className="p-space-xl bg-paper-raised flex flex-col md:flex-row items-start md:items-baseline gap-space-lg">
<span className="font-label-sm text-headline-md text-secondary font-bold min-w-16">04</span>
<div className="flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary mb-space-xs">Progressive Memory Retention</h3>
<p className="font-body-md text-body-md text-ink-muted">sustain coherent multi-turn Socratic tutoring dialogues across 50+ question study sessions without context window bloat.</p>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 3: NINE CAPABILITIES (Paper Sunken) */}
<section className="w-full bg-paper-sunken py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">03 / CAPABILITIES</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Nine things it does.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">01</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Hybrid Dense-Sparse Retrieval</h3>
<p className="font-body-md text-body-sm text-ink-muted">combines semantic vector similarity with keyword-exact sparse token matching to retrieve precise textbook definitions and theorem formulas.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">02</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Multimodal Equation &amp; Diagram Perception</h3>
<p className="font-body-md text-body-sm text-ink-muted">vision models interpret uploaded textbook photos, handwritten equations, circuit diagrams and geometric figures.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">03</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Progressive Conversation Memory</h3>
<p className="font-body-md text-body-sm text-ink-muted">compresses older dialogue into rolling semantic summaries while keeping recent turns in raw fidelity.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">04</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Deterministic Scientific Computation</h3>
<p className="font-body-md text-body-sm text-ink-muted">runs physical unit conversions, stoichiometry calculations and molecular weight lookups via verified Python libraries instead of LLM token guessing.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">05</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Dynamic Curriculum Filtering</h3>
<p className="font-body-md text-body-sm text-ink-muted">partitions retrieval by board, grade, subject and chapter metadata to guarantee age-appropriate depth.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">06</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Real-Time LaTeX &amp; Markdown Rendering</h3>
<p className="font-body-md text-body-sm text-ink-muted">formatted equations, chemical reaction notation and structural tables using KaTeX.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">07</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Multi-Turn Socratic Follow-Up</h3>
<p className="font-body-md text-body-sm text-ink-muted">guides students through step-by-step derivation prompts rather than dumping final answers.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">08</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Attribution &amp; Source Verification</h3>
<p className="font-body-md text-body-sm text-ink-muted">cites exact textbook chapter, page and section references alongside each explanation.</p>
</div>
</div>
<div className="p-space-lg bg-surface flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold tracking-widest block mb-space-xs">09</span>
<h3 className="font-headline-md text-body-lg font-bold text-primary mb-space-xs">Asynchronous Batch Processing</h3>
<p className="font-body-md text-body-sm text-ink-muted">embeds high-volume textbook repositories concurrently using multi-threaded batching engines.</p>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 4: ARCHITECTURE (INVERSE Dark Ink #14130F) */}
<section className="w-full bg-[#14130F] text-[#ECE8DF] py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-faint uppercase tracking-widest mb-space-md">04 / ARCHITECTURE</span>
<h2 className="font-display text-display text-[#FBFAF7] tracking-tight mb-space-2xl">Two pipelines. Five stages.</h2>
{/* Diagram 1: Ingestion Pipeline (Signal Orange accent) */}
<div className="mb-space-2xl">
<span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase block mb-space-md">INGESTION PIPELINE</span>
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
<div className="relative p-space-md bg-[#1d1c17] text-center">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary pointer-events-none"></span>
<span className="font-label-sm text-label-sm text-[#FBFAF7]">Textbook PDF</span>
</div>
<div className="relative p-space-md bg-[#1d1c17] text-center">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary pointer-events-none"></span>
<span className="font-label-sm text-label-sm text-[#FBFAF7]">Chunker</span>
</div>
<div className="relative p-space-md bg-[#1d1c17] text-center">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary pointer-events-none"></span>
<span className="font-label-sm text-label-sm text-[#FBFAF7]">15-Worker ThreadPool</span>
</div>
<div className="relative p-space-md bg-[#1d1c17] text-center">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary pointer-events-none"></span>
<span className="font-label-sm text-label-sm text-[#FBFAF7]">AWS Titan V2 Embeddings</span>
</div>
<div className="relative p-space-md bg-[#1d1c17] text-center">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary pointer-events-none"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary pointer-events-none"></span>
<span className="font-label-sm text-label-sm text-[#FBFAF7]">Qdrant (Dense + BM25)</span>
</div>
</div>
</div>
{/* Diagram 2: Retrieval & Inference Pipeline */}
<div className="mb-space-3xl">
<span className="font-label-sm text-label-sm text-[#FBFAF7] font-bold tracking-widest uppercase block mb-space-md">RETRIEVAL &amp; INFERENCE PIPELINE</span>
<div className="grid grid-cols-1 md:grid-cols-6 gap-space-xs font-label-sm text-label-sm text-center">
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">Student Query (Text / Photo)</div>
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">Intent Classifier</div>
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">[Fast Path / Deep Reasoning Path]</div>
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">Qdrant Hybrid Search</div>
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">FastMCP Scientific Tools</div>
<div className="p-space-md bg-[#1d1c17] text-[#FBFAF7]">Foundation LLM → Socratic Response (LaTeX)</div>
</div>
</div>
{/* 5-Stage Query Execution Journey */}
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-ink-faint font-bold tracking-widest uppercase block mb-space-lg">5-STAGE QUERY EXECUTION JOURNEY</span>
<div className="flex flex-col gap-space-sm">
<div className="p-space-lg bg-[#1d1c17] flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-bold min-w-48">Stage 01 Student Input:</span>
<span className="font-body-md text-body-md text-[#ECE8DF] flex-1">submits a question via text, LaTeX equation or smartphone photo of a textbook problem.</span>
</div>
<div className="p-space-lg bg-[#1d1c17] flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-bold min-w-48">Stage 02 Intent &amp; Route Classifier:</span>
<span className="font-body-md text-body-md text-[#ECE8DF] flex-1">decides whether the question needs simple definition retrieval (Fast Path) or multi-step mathematical derivation (Deep Reasoning Path).</span>
</div>
<div className="p-space-lg bg-[#1d1c17] flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-bold min-w-48">Stage 03 Qdrant Hybrid Search:</span>
<span className="font-body-md text-body-md text-[#ECE8DF] flex-1">concurrently retrieves 1024-dim dense vectors (Titan V2) and sparse BM25 lexical tokens, filtered by curriculum metadata.</span>
</div>
<div className="p-space-lg bg-[#1d1c17] flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-bold min-w-48">Stage 04 Scientific FastMCP Tools:</span>
<span className="font-body-md text-body-md text-[#ECE8DF] flex-1">if chemical structures or physical units are detected, the agent dispatches tool calls to RDKit or Pint for deterministic calculation.</span>
</div>
<div className="p-space-lg bg-[#1d1c17] flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-label-sm text-label-sm text-secondary font-bold min-w-48">Stage 05 Socratic Response Generation:</span>
<span className="font-body-md text-body-md text-[#ECE8DF] flex-1">foundation models (Claude on AWS Bedrock) generate structured, pedagogically sound answers rendered with KaTeX.</span>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 5: ENGINEERING INNOVATIONS (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">05 / INNOVATIONS</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Two things I engineered.</h2>
<div className="flex flex-col gap-space-2xl">
{/* Innovation 1 */}
<div className="p-space-xl bg-paper-raised flex flex-col lg:flex-row justify-between gap-space-xl">
<div className="flex flex-col max-w-2xl">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-lg">Concurrent Chunk Embedding Engine</h3>
<div className="flex flex-col gap-space-md font-body-md text-body-md">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold block uppercase mb-1">Challenge</span>
<p className="text-ink-muted">Serial processing of 800-page STEM textbooks through cloud embedding APIs took hours per book, causing ingestion bottlenecks.</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary font-bold block uppercase mb-1">Solution</span>
<p className="text-on-surface">An asynchronous ingestion pipeline using a 15-worker ThreadPoolExecutor submitting 50-chunk micro-batches concurrently to AWS Bedrock Titan Embeddings V2.</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-primary font-bold block uppercase mb-1">Result</span>
<p className="text-primary font-medium">Slashed textbook vectorization time by over 70%, enabling full curriculum catalogs to be updated in minutes.</p>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-low min-w-64">
<span className="font-metric-numeral text-headline-lg text-secondary font-bold">&gt;70%</span>
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-widest mt-space-sm">INGESTION BOOST</span>
</div>
</div>
{/* Innovation 2 */}
<div className="p-space-xl bg-paper-raised flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-lg">Progressive Session Memory with Delta Rolling Summarization</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg font-body-md text-body-md mb-space-xl">
<div>
<span className="font-label-sm text-label-sm text-ink-muted font-bold block uppercase mb-1">Challenge</span>
<p className="text-ink-muted">Multi-turn tutoring sessions quickly exhausted LLM context limits or caused attention dilution where the model forgot earlier problem constraints.</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-secondary font-bold block uppercase mb-1">Solution</span>
<p className="text-on-surface">A two-tiered memory architecture. Raw Buffer: keeps the last 6 conversation turns in raw fidelity. Rolling Summarizer: activates after 20 turns in the background, condensing older turns into a dense semantic state. Cache &amp; Persistence: an in-memory 30-minute TTL cache backed by asynchronous delta writes to MongoDB.</p>
</div>
<div>
<span className="font-label-sm text-label-sm text-primary font-bold block uppercase mb-1">Result</span>
<p className="text-primary font-medium">Sustained coherent, multi-hour study sessions with zero context overflow crashes and minimal token consumption.</p>
</div>
</div>
{/* Memory Diagram */}
<div className="p-space-md bg-surface-container-low text-center font-label-sm text-label-sm text-primary">
            [last 6 turns raw] + [rolling summary after 20 turns] → 30-min cache → MongoDB delta write.
          </div>
</div>
</div>
</div>
</section>
{/* CHAPTER 6: DUAL-ENGINE & FASTMCP SUITE (Paper Sunken) */}
<section className="w-full bg-paper-sunken py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">06 / DUAL ENGINE</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Compute, don't guess.</h2>
{/* Part A: FastMCP Tool Catalog */}
<div className="mb-space-3xl">
<span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase block mb-space-lg">FASTMCP TOOL CATALOG · 9 DETERMINISTIC TOOLS</span>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-sm">
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">01</span>
<span className="font-headline-md text-body-md font-bold text-primary block">RDKit SMILES Parser</span>
<span className="font-body-md text-body-sm text-ink-muted">validates chemical structure representations against strict valency rules.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">02</span>
<span className="font-headline-md text-body-md font-bold text-primary block">RDKit 2D Molecule Renderer</span>
<span className="font-body-md text-body-sm text-ink-muted">generates structural chemical diagram SVGs from SMILES strings.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">03</span>
<span className="font-headline-md text-body-md font-bold text-primary block">RDKit Molecular Weight Calculator</span>
<span className="font-body-md text-body-sm text-ink-muted">calculates exact molecular mass deterministically.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">04</span>
<span className="font-headline-md text-body-md font-bold text-primary block">IUPAC Nomenclature Verifier</span>
<span className="font-body-md text-body-sm text-ink-muted">cross-checks IUPAC chemical naming against structural formulas.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">05</span>
<span className="font-headline-md text-body-md font-bold text-primary block">Pint Unit Dimension Evaluator</span>
<span className="font-body-md text-body-sm text-ink-muted">analyzes physical equation dimensions to verify formula validity.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">06</span>
<span className="font-headline-md text-body-md font-bold text-primary block">Pint Unit Converter</span>
<span className="font-body-md text-body-sm text-ink-muted">converts physical quantities across SI, imperial and astronomical units.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">07</span>
<span className="font-headline-md text-body-md font-bold text-primary block">Pint Arithmetic Engine</span>
<span className="font-body-md text-body-sm text-ink-muted">performs dimensional arithmetic (for example 5 m/s * 10 s = 50 m).</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">08</span>
<span className="font-headline-md text-body-md font-bold text-primary block">Wiktionary Etymology Lookup</span>
<span className="font-body-md text-body-sm text-ink-muted">retrieves precise etymological and grammatical definitions for terminology.</span>
</div>
<div className="p-space-md bg-surface">
<span className="font-label-sm text-label-sm text-ink-muted block mb-1">09</span>
<span className="font-headline-md text-body-md font-bold text-primary block">Symbolic Math Evaluator</span>
<span className="font-body-md text-body-sm text-ink-muted">solves algebraic expressions with exact fractional precision using SymPy.</span>
</div>
</div>
</div>
{/* Part B: Comparison Table */}
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary font-bold tracking-widest uppercase block mb-space-lg">GENERIC LLM VS EDUBOTIX DUAL-ENGINE PLATFORM</span>
<div className="flex flex-col gap-space-xs font-body-md text-body-sm">
{/* Table Header */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface-container-high font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
<div>Task / Capability</div>
<div>Generic LLM</div>
<div>Edubotix Dual-Engine Platform</div>
</div>
{/* Row 1 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Arithmetic Calculation</div>
<div className="text-ink-muted">Token probability estimation (hallucination-prone)</div>
<div className="text-secondary font-medium">Deterministic Python calculation engine</div>
</div>
{/* Row 2 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Chemical Structure</div>
<div className="text-ink-muted">Statistical text generation</div>
<div className="text-secondary font-medium">RDKit cheminformatics validation &amp; SVG rendering</div>
</div>
{/* Row 3 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Physical Unit Math</div>
<div className="text-ink-muted">Prone to unit conversion mistakes</div>
<div className="text-secondary font-medium">Pint dimensional analysis with strict SI enforcement</div>
</div>
{/* Row 4 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Curriculum Grounding</div>
<div className="text-ink-muted">Broad, unvetted web text</div>
<div className="text-secondary font-medium">Strict Qdrant vector payload partition by grade/board</div>
</div>
{/* Row 5 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Conversation Memory</div>
<div className="text-ink-muted">Unconstrained buffer (token overflow)</div>
<div className="text-secondary font-medium">Progressive sliding window + 20-turn rolling summary</div>
</div>
{/* Row 6 */}
<div className="grid grid-cols-1 md:grid-cols-3 p-space-md bg-surface">
<div className="font-bold text-primary">Formula Display</div>
<div className="text-ink-muted">Plain text or inconsistent formatting</div>
<div className="text-secondary font-medium">High-precision KaTeX LaTeX rendering</div>
</div>
</div>
</div>
</div>
</section>
{/* CHAPTER 7: BACKEND & STORAGE (Paper Surface) */}
<section className="w-full bg-surface py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">07 / INFRASTRUCTURE</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">What it runs on.</h2>
<div className="flex flex-col gap-space-lg">
<div className="p-space-xl bg-paper-raised">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">Qdrant Vector Database</h3>
<p className="font-body-md text-body-md text-ink-muted">hybrid collection storing 1024-dimensional dense vectors alongside sparse lexical postings. Payload indexes on board_id, grade_level, subject, chapter_id and section_number. HNSW index optimized for cosine similarity with sub-10ms lookup latency.</p>
</div>
<div className="p-space-xl bg-paper-raised">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">MongoDB Database</h3>
<p className="font-body-md text-body-md text-ink-muted">"sessions" collection tracks student study sessions, active chapter references and rolling summaries. "conversation_turns" collection stores full dialogue history for offline pedagogical review. "textbooks" collection holds catalog metadata, page manifests and publisher copyright schemas.</p>
</div>
<div className="p-space-xl bg-paper-raised">
<h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm">FastAPI Microservices</h3>
<p className="font-body-md text-body-md text-ink-muted">high-throughput asynchronous endpoints managing SSE streaming responses and live WebSockets.</p>
</div>
</div>
</div>
</section>
{/* CHAPTER 8: TECHNOLOGY STACK (Paper Sunken) */}
<section className="w-full bg-paper-sunken py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-muted uppercase tracking-widest mb-space-md">08 / STACK</span>
<h2 className="font-display text-display text-primary tracking-tight mb-space-2xl">Built with.</h2>
<div className="flex flex-col gap-space-xs font-body-md text-body-md">
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Foundation Models:</span>
<span className="font-label-sm text-label-sm text-ink-muted">AWS Bedrock (Anthropic Claude 3.5 Sonnet, Claude 3 Haiku, Amazon Titan Embeddings V2)</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Vector Database:</span>
<span className="font-label-sm text-label-sm text-ink-muted">Qdrant (Dense-Sparse Hybrid Vector Search)</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Scientific Tool Layer:</span>
<span className="font-label-sm text-label-sm text-ink-muted">FastMCP (Model Context Protocol), RDKit (Cheminformatics), Pint (Physical Units), SymPy (Symbolic Math)</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Backend Framework:</span>
<span className="font-label-sm text-label-sm text-ink-muted">Python 3.11, FastAPI, Uvicorn, Motor (Async MongoDB Driver), Pydantic v2, AsyncIO</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Primary Database &amp; Cache:</span>
<span className="font-label-sm text-label-sm text-ink-muted">MongoDB (Document Storage), Redis (Session Cache)</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Frontend Presentation:</span>
<span className="font-label-sm text-label-sm text-ink-muted">React 18, Vite, KaTeX (LaTeX Math Rendering), Tailwind CSS</span>
</div>
<div className="p-space-md bg-surface flex flex-col md:flex-row md:items-baseline justify-between gap-space-md">
<span className="font-bold text-primary min-w-64">Infrastructure:</span>
<span className="font-label-sm text-label-sm text-ink-muted">Docker, Docker Compose, AWS ECS / EC2</span>
</div>
</div>
</div>
</section>
{/* CHAPTER 9: OUTCOMES & CONTRIBUTIONS (INVERSE Dark Ink #14130F) */}
<section className="w-full bg-[#14130F] text-[#ECE8DF] py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
<span className="font-label-timecode text-label-timecode text-ink-faint uppercase tracking-widest mb-space-md">09 / OUTCOMES</span>
<h2 className="font-display text-display text-[#FBFAF7] tracking-tight mb-space-2xl">What it delivered.</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl">
{/* Column 1: Pedagogical & Institutional Outcomes */}
<div className="flex flex-col bg-[#1d1c17] p-space-xl">
<span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase mb-space-lg">PEDAGOGICAL &amp; INSTITUTIONAL OUTCOMES</span>
<div className="flex flex-col gap-space-lg font-body-md text-body-sm">
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Zero Mathematical Hallucinations:</span>
<p className="text-ink-faint">routing calculation steps to verified tools eliminated token-guessing arithmetic errors.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Strict Curriculum Compliance:</span>
<p className="text-ink-faint">textbook-constrained vector partitions prevented out-of-syllabus confusion.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">70% Faster Content Ingestion:</span>
<p className="text-ink-faint">the multi-threaded embedding engine reduced textbook publishing turnaround from hours to minutes.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Stable Multi-Hour Tutoring:</span>
<p className="text-ink-faint">progressive session memory supported extended Socratic problem-solving without context crashes.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Verified Source Attribution:</span>
<p className="text-ink-faint">exact textbook page and section citations increased student and educator trust.</p>
</div>
</div>
</div>
{/* Column 2: My Technical Contributions */}
<div className="flex flex-col bg-[#1d1c17] p-space-xl">
<span className="font-label-sm text-label-sm text-[#FBFAF7] font-bold tracking-widest uppercase mb-space-lg">MY TECHNICAL CONTRIBUTIONS</span>
<div className="flex flex-col gap-space-md font-body-md text-body-sm">
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Hybrid Retrieval Architecture:</span>
<p className="text-ink-faint">architected the dual dense-sparse retrieval system combining Titan V2 and BM25 in Qdrant.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Concurrent Ingestion Pipeline:</span>
<p className="text-ink-faint">implemented the 15-worker multi-threaded embedding pipeline.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Progressive Memory Engineering:</span>
<p className="text-ink-faint">designed the sliding-window buffer, rolling summarizer and MongoDB TTL delta sync.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Scientific FastMCP Suite:</span>
<p className="text-ink-faint">developed the FastMCP server integrating RDKit, Pint and SymPy for deterministic calculations.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Dual Query Routing:</span>
<p className="text-ink-faint">built the intent classifier separating direct semantic search from multi-step Socratic reasoning.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">LaTeX Math Integration:</span>
<p className="text-ink-faint">configured frontend KaTeX rendering pipelines for complex mathematical and chemical formulas.</p>
</div>
<div>
<span className="font-bold text-[#FBFAF7] block mb-1">Team Leadership:</span>
<p className="text-ink-faint">led backend and AI engineering sprints, establishing testing harnesses and code review standards.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* BOTTOM NAV & CLOSING CTA */}
<section className="w-full bg-surface py-space-chapter px-gutter md:px-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col">
{/* Project Pagination */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-3xl">
<a className="p-space-lg bg-paper-sunken flex flex-col group hover:bg-surface-container-high transition-colors" href="#">
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-widest block mb-1">← Previous: Analytics Agent</span>
<span className="font-body-md text-body-md text-primary font-bold">Multi-agent CCTV intelligence and autonomous reporting</span>
</a>
<a className="p-space-lg bg-paper-sunken flex flex-col text-right group hover:bg-surface-container-high transition-colors" href="#">
<span className="font-label-sm text-label-sm text-ink-muted uppercase tracking-widest block mb-1">Next: VisionFacts.ai →</span>
<span className="font-body-md text-body-md text-primary font-bold">Real-time multi-camera CCTV analytics platform</span>
</a>
</div>
{/* Closing Dispatch CTA */}
<div className="flex flex-col items-center justify-center p-space-2xl bg-paper-raised text-center">
<h2 className="font-headline-md text-headline-md text-primary font-bold mb-space-lg">Looking for a Senior AI or Backend Engineer?</h2>
<div className="flex flex-wrap items-center justify-center gap-space-md">
<a className="px-space-xl py-space-sm bg-secondary text-surface font-label-sm text-label-sm uppercase tracking-widest hover:bg-signal-orange-hover transition-colors rounded-full" href="#">
            Email Rajesh
          </a>
<a className="px-space-xl py-space-sm bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors rounded-full" href="#">
            LinkedIn ↗
          </a>
<a className="px-space-xl py-space-sm bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors rounded-full" href="#">
            GitHub ↗
          </a>
</div>
</div>
</div>
</section>
</div></main>
    </>
  );
}
