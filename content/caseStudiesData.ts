import { VERIFIED_NUMBERS } from './coreFacts';

export interface PipelineStep {
  number: string;
  plainTitle: string;
  plainDesc: string;
  techDesc: string;
}

export interface ChallengeFixItem {
  number: string;
  title: string;
  problem: string;
  fixResult: string;
}

export interface ContributionItem {
  area: string;
  detail: string;
}

export interface TechPillar {
  category: string;
  items: string;
}

export interface SimulatedCameraFeed {
  id: string;
  name: string;
  detection: string;
  fps: string;
  latency: string;
}

export interface CaseStudyOverview {
  tagline: string;
  headlinePre: string;
  headlineHighlight: string;
  headlinePost: string;
  leadParagraph: string;
  plainEnglish: string;
  stripMetrics: {
    value: string;
    label: string;
    detail: string;
    highlight?: boolean;
  }[];
  problem: string;
  solution: string;
  traceCalculation?: string;
  traceCitation?: string;
}

// =============================================================================
// VISIONFACTS.AI FLAGSHIP CASE STUDY DATA
// =============================================================================
export const VISIONFACTS_OVERVIEW: CaseStudyOverview = {
  tagline: 'FLAGSHIP PRODUCTION PLATFORM',
  headlinePre: 'Teaching',
  headlineHighlight: `${VERIFIED_NUMBERS.camerasCount} cameras`,
  headlinePost: 'to watch.',
  leadParagraph: 'A production computer vision platform that transforms standard CCTV feeds into automated, real-time safety, security, and operational intelligence for manufacturing plants, logistics hubs, and warehouses.',
  plainEnglish: `Instead of forcing security operators to stare at dozens of video monitors, this system runs AI directly on ${VERIFIED_NUMBERS.camerasCount} live camera streams to detect missing hardhats, intrusions into hazardous zones, falls, forklift traffic hazards, and equipment blockages in real time—instantly alerting floor supervisors before accidents happen.`,
  stripMetrics: [
    {
      value: VERIFIED_NUMBERS.camerasCount,
      label: 'Cameras Analysed Live',
      detail: '112 online in 30-min Grafana snapshot',
    },
    {
      value: '~6.5x less',
      label: 'GPU Model Memory',
      detail: '~5 GB Triton vs ~32.5 GB per-camera copies',
      highlight: true,
    },
    {
      value: '74%',
      label: 'Fewer False Safety Alarms',
      detail: 'Zero-shot reasoning via Gemma 3 E4B VLM',
    },
  ],
  problem: 'Legacy video analytics run CPU-bound Python loops and spawn isolated DeepStream containers per stream. This architectural mismatch causes massive VRAM thrashing, frame drops across 50+ cameras, and forced multi-server clusters costing $4,000+/month in cloud GPU spend.',
  solution: 'VisionFacts replaces per-camera container isolation with a single Triton inference engine, zero-copy CUDA IPC shared memory, and TensorRT FP32 graph compilation. The result: 130+ concurrent 1080p RTSP feeds processing reliably on dual NVIDIA L4 GPUs.',
};

export const VISIONFACTS_STAGES: PipelineStep[] = [
  {
    number: '01',
    plainTitle: 'RTSP Ingest',
    plainDesc: `Continuous RTSP video streams received over gigabit networks from ${VERIFIED_NUMBERS.camerasCount} cameras.`,
    techDesc: 'H.264 / H.265 HW NVDEC decode into pinned memory.',
  },
  {
    number: '02',
    plainTitle: 'Process Isolation',
    plainDesc: 'One isolated Python worker per camera ensures single drops never disrupt neighbors.',
    techDesc: 'Multiprocessing isolation with zero cross-feed interference.',
  },
  {
    number: '03',
    plainTitle: 'NVDEC Decode',
    plainDesc: 'Decodes frames directly in GPU memory with zero CPU saturation.',
    techDesc: 'Pinned memory zero-copy decode buffers.',
  },
  {
    number: '04',
    plainTitle: 'Zero-Copy Inference',
    plainDesc: 'Frames pass via CUDA IPC shared memory to centralized Triton without CPU PCIe copies.',
    techDesc: `Triton + TensorRT FP32 primary model (${VERIFIED_NUMBERS.throughputPrimaryMean}).`,
  },
  {
    number: '05',
    plainTitle: 'Rule Logic',
    plainDesc: 'Evaluates spatial geofences, pose angles, and dwell timers against detected objects.',
    techDesc: 'Spatial polygon intersection & ByteTrack temporal tracking.',
  },
  {
    number: '06',
    plainTitle: 'VLM Reasoning',
    plainDesc: `Gemma 3 E4B audits edge cases and cuts false safety alarms by ${VERIFIED_NUMBERS.vlmPrecisionGain}.`,
    techDesc: 'Zero-shot prompt verification on incident crops.',
  },
  {
    number: '07',
    plainTitle: 'Persistence',
    plainDesc: 'Structured incident JSON documents, crop images, and audit evidence committed to MongoDB.',
    techDesc: 'MongoDB timeseries & Redis pub/sub queue.',
  },
  {
    number: '08',
    plainTitle: 'Client Alerting',
    plainDesc: 'Pushes real-time alerts and telemetry to client web dashboards in under 150 ms.',
    techDesc: 'FastAPI async change streams & WebSockets.',
  },
];

export const VISIONFACTS_SIMULATED_CAMERAS: SimulatedCameraFeed[] = [
  {
    id: 'CAM_01',
    name: 'LOGISTICS_DOCK',
    detection: 'FORKLIFT 0.94',
    fps: '7.5',
    latency: '104 ms',
  },
  {
    id: 'CAM_14',
    name: 'ASSEMBLY_LINE',
    detection: 'PPE: NO HARDHAT',
    fps: '7.4',
    latency: '98 ms',
  },
  {
    id: 'CAM_42',
    name: 'NORTH_PERIMETER',
    detection: 'INTRUSION DETECTED',
    fps: '7.8',
    latency: '112 ms',
  },
  {
    id: 'CAM_88',
    name: 'STORAGE_BAY',
    detection: 'FALL INCIDENT 0.89',
    fps: '7.2',
    latency: '109 ms',
  },
];

export const VISIONFACTS_CHALLENGES: ChallengeFixItem[] = [
  {
    number: '1',
    title: 'GPU Memory Duplication (32.5 GB Bottleneck)',
    problem: `Loading models inside each camera process duplicated weights across ${VERIFIED_NUMBERS.camerasCount} feeds (130 × ~250 MB = ~32.5 GB), immediately exceeding single or dual GPU limits.`,
    fixResult: `Centralized all model instances inside NVIDIA Triton with CUDA shared memory. Triton model memory dropped to ~2.5 GB per GPU (~5 GB combined)—an estimated ~6.5x model memory reduction.`,
  },
  {
    number: '2',
    title: 'Host-to-Device Memory Transfer Overhead',
    problem: `Copying 1080p frames between Python camera workers and the inference server via standard buffers saturated the PCIe bus and created frame drops.`,
    fixResult: `Implemented zero-copy CUDA IPC shared memory. Camera workers place decoded tensors directly into shared GPU memory handles that Triton reads with zero memory thrashing.`,
  },
  {
    number: '3',
    title: 'Dynamic VRAM Safety Buffer (1,500 MB)',
    problem: `Varying camera resolutions and sudden burst workloads risked out-of-memory (OOM) GPU crashes across dual L4 GPUs.`,
    fixResult: `Engineered dynamic VRAM allocation: budgeted 290 MB per camera process with a mandatory 1,500 MB safety buffer reserved per GPU, eliminating all OOM crashes in production.`,
  },
  {
    number: '4',
    title: 'Shared Primary Detection Multi-Tasking',
    problem: `Running separate inference passes per camera for hardhats, vests, intrusion, and phone usage multiplied GPU loads by 4–5x.`,
    fixResult: `A single primary YOLO26 pass detects base objects; all downstream safety rules evaluate that single detection tensor, slashing duplicate inference passes.`,
  },
  {
    number: '5',
    title: 'On-Premises Intellectual Property Protection',
    problem: `Enterprise clients required deployment on private local servers, exposing proprietary Python source code to tampering.`,
    fixResult: `Compiled all Python application modules into stripped native C-extension shared objects (.so) using Nuitka, containerized in hardened Docker images.`,
  },
];

export const VISIONFACTS_CONTRIBUTIONS: ContributionItem[] = [
  {
    area: 'Architecture & Pipeline Design',
    detail: `Designed the decoupled multiprocessing architecture from scratch, separating camera ingest, zero-copy IPC transport, centralized Triton inference, and alert dispatch across ${VERIFIED_NUMBERS.camerasCount} streams.`,
  },
  {
    area: 'GPU & Memory Optimization',
    detail: 'Compiled TensorRT FP32 engines, implemented CUDA shared memory IPC, dynamic memory budgeting, and the 1,500 MB safety buffer.',
  },
  {
    area: 'Model & Multimodal Integration',
    detail: 'Integrated YOLO26 object detection, pose estimation, face verification, and Gemma 3 E4B VLM zero-shot reasoning.',
  },
  {
    area: 'Packaging & Observability',
    detail: 'Compiled native .so binaries with Nuitka, authored Docker Compose deployments, and created Prometheus/Grafana telemetry.',
  },
];

export const VISIONFACTS_TECH_PILLARS: TechPillar[] = [
  {
    category: 'PIPELINE & VISION',
    items: 'Python 3.10+, OpenCV, PyTorch, YOLO26, ByteTrack',
  },
  {
    category: 'ACCELERATION & SERVING',
    items: 'NVIDIA Triton, TensorRT FP32, CUDA IPC, Pinned Memory',
  },
  {
    category: 'BACKEND & STORAGE',
    items: 'FastAPI, MongoDB, Redis, WebSockets',
  },
  {
    category: 'MULTIMODAL & PACKAGING',
    items: 'Gemma 3 E4B VLM, Nuitka (.so binaries), Docker',
  },
];

// =============================================================================
// ANALYTICS AGENT CASE STUDY DATA
// =============================================================================
export const ANALYTICS_AGENT_OVERVIEW: CaseStudyOverview = {
  tagline: 'MULTI-AGENT INTELLIGENCE',
  headlinePre: 'Ask the',
  headlineHighlight: 'cameras',
  headlinePost: 'anything.',
  leadParagraph: 'A multi-agent CCTV intelligence platform that lets operations and safety teams question surveillance and security records in plain English—and automatically delivers shift safety digests before they ask.',
  plainEnglish: 'Instead of waiting 24 to 48 hours for a database administrator to write custom SQL queries, warehouse directors and safety managers can ask natural-language questions like "Which forklifts entered Gate 2 during shift change without a driver badge?" The AI coordinates multiple specialized agents to check 5 data domains, verifies camera crop evidence, and replies with structured tables and images in under 3 seconds.',
  stripMetrics: [
    {
      value: VERIFIED_NUMBERS.analyticsPipelines,
      label: 'Execution Pipelines',
      detail: 'Interactive "Ask" + Autonomous "Watch"',
    },
    {
      value: VERIFIED_NUMBERS.analyticsMcpServers,
      label: 'MCP Servers',
      detail: 'Model Context Protocol for database and CCTV tools',
      highlight: true,
    },
    {
      value: '5',
      label: 'Data Domains Guarded',
      detail: `${VERIFIED_NUMBERS.analyticsWriteAccess} (SELECT-only read operations)`,
    },
  ],
  problem: 'Operations supervisors spent up to 24 hours waiting for data engineering teams to write manual SQL queries and extract video timestamp evidence from CCTV archives just to investigate simple factory-floor incidents like missing hard hats or restricted zone dwell-time violations.',
  solution: 'A LangGraph supervisor orchestrates domain-specific FastMCP agents that translate natural-language supervisor questions into validated read-only SQL queries, correlate results with verified CCTV frame snapshots, and return multi-modal answers in under 3 seconds.',
};

export const ANALYTICS_ASK_STEPS: PipelineStep[] = [
  {
    number: '01',
    plainTitle: 'SSE Client Request',
    plainDesc: 'Supervisor enters natural-language query streamed over Server-Sent Events.',
    techDesc: 'FastAPI async SSE endpoint with token-by-token streaming.',
  },
  {
    number: '02',
    plainTitle: 'Schema Inspection',
    plainDesc: 'Supervisor Agent queries describe_table via MCP tools across 5 domains.',
    techDesc: 'FastMCP JSON-RPC schema introspection.',
  },
  {
    number: '03',
    plainTitle: 'AST Guardrail Verification',
    plainDesc: 'Parses SQL abstract syntax tree to verify 100% read-only operations.',
    techDesc: 'Zero destructive mutations: INSERT, UPDATE, DROP strictly blocked.',
  },
  {
    number: '04',
    plainTitle: 'Evidence Correlation',
    plainDesc: 'Joins SQL results with physical camera crops from MongoDB.',
    techDesc: 'Correlates timestamps with incident audit crops.',
  },
  {
    number: '05',
    plainTitle: 'Structured Response',
    plainDesc: 'Delivers plain-English answer with data tables and clickable image crops.',
    techDesc: 'Returns formatted markdown with signed image URLs in < 3s.',
  },
];

export const ANALYTICS_WATCH_STEPS: PipelineStep[] = [
  {
    number: '01',
    plainTitle: 'Scheduled Trigger',
    plainDesc: 'Cron scheduler fires 15 minutes prior to every facility shift change.',
    techDesc: 'Celery Beat distributed periodic task runner.',
  },
  {
    number: '02',
    plainTitle: 'Cross-Domain Anomaly Scan',
    plainDesc: 'Background agent audits zone dwell times, tailgating, and badge anomalies.',
    techDesc: 'Parallel SQL aggregation across 8-hour shift windows.',
  },
  {
    number: '03',
    plainTitle: 'Automated Shift Digest',
    plainDesc: 'Compiles PDF report and emails safety leadership before the shift handover starts.',
    techDesc: 'FastAPI + Jinja2 PDF generation dispatched via SMTP.',
  },
];

export const ANALYTICS_AGENT_CHALLENGES: ChallengeFixItem[] = [
  {
    number: '1',
    title: 'LAN Snapshot Proxy Security Isolation',
    problem: 'CCTV cameras resided on private, isolated local networks. Directly querying snapshots from client browsers violated perimeter network security policies.',
    fixResult: 'Built a secure snapshot proxy inside FastAPI: browser requests pass through an authenticated proxy that validates camera IDs against an allowlist and forwards approved feeds from the LAN without exposing cameras directly.',
  },
  {
    number: '2',
    title: 'AST Validation Against Data Loss',
    problem: 'LLMs generating arbitrary SQL risked destructive operations (DELETE, UPDATE, DROP) or schema alterations against production database clusters.',
    fixResult: 'Constructed an SQL AST validator that verifies queries are 100% SELECT operations. Rejects multiple statements, mutations, or unrecognized table references before execution.',
  },
  {
    number: '3',
    title: 'Token Reduction via Dynamic MCP Introspection',
    problem: 'Loading entire database schemas into the LLM system prompt consumed thousands of tokens per turn and increased latency.',
    fixResult: 'Designed dynamic MCP schema introspection: the agent queries table names first, then inspects only relevant columns for the query, cutting prompt token consumption by >60%.',
  },
];

export const ANALYTICS_AGENT_CONTRIBUTIONS: ContributionItem[] = [
  {
    area: 'Multi-Agent StateGraph Architecture',
    detail: 'Architected the LangGraph state machine with dedicated supervisor, router, tool execution, and synthesis nodes.',
  },
  {
    area: 'MCP Tool Server Development',
    detail: 'Authored custom FastMCP servers exposing database schema introspection, SQL execution, and LAN camera snapshot proxying.',
  },
  {
    area: 'SQL Guardrails & Security',
    detail: 'Implemented AST validation ensuring 100% read-only compliance, table whitelisting, and query execution timeouts.',
  },
];

export const ANALYTICS_AGENT_RESULTS = [
  {
    label: 'QUERY RESPONSE TIME',
    value: '< 3s',
    detail: 'From question to structured answer & evidence',
    highlight: true,
  },
  {
    label: 'IT TICKET REDUCTION',
    value: '85%',
    detail: 'Fewer ad-hoc data requests to DBAs',
  },
  {
    label: 'SECURITY WRITE AUDIT',
    value: '0',
    detail: `Unauthorized database mutations across ${VERIFIED_NUMBERS.analyticsWriteAccess}`,
  },
];

// =============================================================================
// EDUBOTIX CASE STUDY DATA
// =============================================================================
export const EDUBOTIX_OVERVIEW: CaseStudyOverview = {
  tagline: 'MULTIMODAL STEM TUTOR',
  headlinePre: 'Show your',
  headlineHighlight: 'working.',
  headlinePost: 'Every answer.',
  leadParagraph: 'A context-aware multimodal academic intelligence platform that lets students learn from verified curriculum textbooks using natural language, equations, chemistry structures, and photos of homework problems.',
  plainEnglish: 'Most AI chatbots make subtle math and physics mistakes because they guess words instead of calculating. Edubotix connects AI to verified curriculum textbooks using RAG (AI that looks up answers in documents). When a student asks a physics or chemistry question, the AI runs all math through verified symbolic calculation tools, shows step-by-step working, and cites the exact textbook page and chapter.',
  stripMetrics: [
    {
      value: VERIFIED_NUMBERS.edubotixIngestionSpeed,
      label: 'Faster Content Ingestion',
      detail: 'Multi-threaded 15-worker textbook embedding',
    },
    {
      value: VERIFIED_NUMBERS.edubotixScientificTools,
      label: 'Scientific Tools Built-in',
      detail: 'RDKit chemistry, Pint SI units, SymPy math',
      highlight: true,
    },
    {
      value: '100%',
      label: 'Verified Attributions',
      detail: VERIFIED_NUMBERS.edubotixCitations,
    },
  ],
  problem: 'Generic LLMs predict the next statistical token rather than computing deterministic arithmetic. In physics and chemistry, this results in believable but incorrect numbers, invalid chemical bonds, and curriculum drift where answers use out-of-syllabus methods from random websites.',
  solution: 'Edubotix pairs an LLM with RAG grounded strictly in approved curriculum textbooks stored in Qdrant. All math and chemistry steps are routed to 9 deterministic tools (SymPy, Pint, RDKit), guaranteeing verified calculations instead of AI guesses.',
  traceCalculation: '5 m/s × 10 s = 50 m',
  traceCitation: 'NCERT Physics Grade 11 · Chapter 3: Motion · Section 3.2 · Page 42',
};

export const EDUBOTIX_COMPONENTS = [
  {
    number: 'COMPONENT 01',
    title: 'Hybrid Retrieval (Titan + BM25)',
    description: 'Combines 1024-dimensional dense semantic vectors (Amazon Titan V2) with sparse lexical BM25 tokens in Qdrant. Ensures domain terms like "centripetal acceleration" hit the exact formula definition.',
    spec: 'COSINE + BM25 FUSION',
  },
  {
    number: 'COMPONENT 02',
    title: '9 Scientific FastMCP Tools',
    description: 'Calculations run in verified tools instead of AI guesses. Pint enforces dimensional SI consistency, SymPy evaluates symbolic fractions, and RDKit validates chemical SMILES structures into clean SVG diagrams.',
    spec: 'ZERO CALCULATION GUESSWORK',
  },
  {
    number: 'COMPONENT 03',
    title: 'Progressive Session Memory',
    description: 'A sliding-window buffer retains immediate context while an automated 20-turn rolling summary retains long-range pedagogical continuity without context window dilution or high token overhead.',
    spec: 'STABLE MULTI-HOUR SESSIONS',
  },
];

export const EDUBOTIX_CHALLENGES: ChallengeFixItem[] = [
  {
    number: '1',
    title: 'Token-Guessing Arithmetic Failures',
    problem: 'LLMs consistently made subtle errors in unit arithmetic (e.g. converting km/h to m/s) and molecular balancing.',
    fixResult: 'Calculations run in verified tools instead of AI guesses. Created 9 FastMCP tools with Pint and SymPy, eliminating calculation hallucinations completely.',
  },
  {
    number: '2',
    title: 'Slow Textbook Ingestion at Scale',
    problem: 'Chunking, extracting LaTeX, and generating dual dense-sparse embeddings for full science textbooks took hours per book.',
    fixResult: 'Built a 15-worker multi-threaded batch ingestion pipeline with rate-limited Bedrock connection pooling, achieving >70% faster textbook ingestion.',
  },
];

export const EDUBOTIX_CONTRIBUTIONS: ContributionItem[] = [
  {
    area: 'Hybrid Retrieval Architecture',
    detail: 'Architected dual dense-sparse vector indexing combining Amazon Titan V2 embeddings with BM25 sparse postings in Qdrant.',
  },
  {
    area: 'Scientific FastMCP Suite',
    detail: 'Developed the FastMCP tool server wrapping SymPy, Pint, and RDKit to execute deterministic scientific computations.',
  },
  {
    area: 'Progressive Session Memory',
    detail: 'Engineered sliding-window conversation retention with automated 20-turn rolling summaries in MongoDB.',
  },
];

export const EDUBOTIX_RESULTS = [
  {
    label: 'CONTENT INGESTION',
    value: '>70%',
    detail: 'Faster textbook indexing pipeline',
    hasBar: true,
  },
  {
    label: 'SCIENTIFIC TOOLS',
    value: '9',
    detail: 'Deterministic calculations',
  },
  {
    label: 'CALCULATIONS',
    value: 'VERIFIED',
    detail: 'Calculations run in verified tools',
    success: true,
  },
  {
    label: 'SOURCE CITATIONS',
    value: '100%',
    detail: 'Exact chapter, page & section cited',
  },
];

export const EDUBOTIX_TECH_PILLARS: TechPillar[] = [
  {
    category: 'FOUNDATION MODELS',
    items: 'AWS Bedrock (Claude 3.5 Sonnet, Titan V2)',
  },
  {
    category: 'VECTOR DATABASE',
    items: 'Qdrant (Dense-Sparse Hybrid Vector Search)',
  },
  {
    category: 'SCIENTIFIC ENGINES',
    items: 'FastMCP, SymPy, Pint, RDKit, KaTeX',
  },
  {
    category: 'BACKEND & STORAGE',
    items: 'FastAPI, Python 3.11, MongoDB, Redis, Docker',
  },
];
