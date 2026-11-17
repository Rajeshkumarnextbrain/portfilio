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

// =============================================================================
// DRILL BIT INSPECTION CASE STUDY DATA
// =============================================================================
export const DRILL_BIT_OVERVIEW: CaseStudyOverview = {
  tagline: 'INDUSTRIAL METROLOGY & DEFECT SORTING',
  headlinePre: 'Sub-millimeter metrology.',
  headlineHighlight: 'Micron accuracy.',
  headlinePost: 'Real-time PLC reject.',
  leadParagraph: 'An automated inline industrial inspection system deployed across three machine lines (2.5–3mm, 5–8mm, and 8–11mm), combining dual Hikrobot machine vision cameras, OpenCV sub-pixel edge metrology, and YOLOv7 deep learning to measure 7 geometric parameters and reject defective drill bits via PLC actuation.',
  plainEnglish: 'In precision manufacturing, drill bits must meet strict tolerances down to fractions of a millimeter. This machine picks up drill bits one by one from a feeder onto a conveyor belt. Two high-resolution industrial cameras inspect each bit: a front camera checks the point diameter, chisel angle, and web thickness, while a top camera rotates the bit 360° to measure overall length, flute length, and helix angle. If cracks, rust, or broken shanks are detected, the system immediately signals a PLC to fire a pneumatic ejector into a reject bin.',
  stripMetrics: [
    {
      value: '±150–250 µm',
      label: 'Metrology Tolerance',
      detail: 'Calibrated against physical scroll gauge',
    },
    {
      value: '70%',
      label: 'Defect Recall',
      detail: '8 structural defect categories flagged',
      highlight: true,
    },
    {
      value: '~20s',
      label: 'Per-Part Cycle Time',
      detail: 'Dual capture + 360° rotation + pneumatic sort',
    },
  ],
  problem: 'Manual inspection of drill bits using optical comparators and hand micrometers was slow, prone to human eye fatigue, and inconsistent across shifts. Subtle defects like land cracks, chisel blend errors, and rust were regularly missed, leading to broken bits and expensive downtime in customer CNC machining lines.',
  solution: 'Engineered a dual-camera automated inspection station powered by an Industrial PC. Implemented OpenCV edge and contour detection for 7 geometric metrology parameters achieving ±150–250 µm scroll gauge tolerance, paired with a custom YOLOv7 model for 360° surface defect classification and instantaneous PLC pneumatic reject signaling.',
  traceCalculation: 'Scroll Gauge: 8.000 mm · Measured: 8.082 mm (Δ +82 µm — PASS within ±150 µm)',
  traceCitation: 'Machine Category B · Drill Shank: 5–8 mm · Station #02 (Conveyor Inline)',
};

export const DRILL_BIT_STAGES: PipelineStep[] = [
  {
    number: '01',
    plainTitle: 'Mechanical Feed & Conveyor Ingest',
    plainDesc: 'Inspection machine fetches drill bits one-by-one from the staging feeder onto the inline conveyor belt.',
    techDesc: 'Singulated mechanical track with optical proximity trigger.',
  },
  {
    number: '02',
    plainTitle: 'Front Hikrobot Camera Metrology',
    plainDesc: 'Captures the drill tip face to measure front diameter, web thickness, and chisel angle under coaxial lighting.',
    techDesc: 'Sub-pixel contour detection with adaptive Canny thresholding.',
  },
  {
    number: '03',
    plainTitle: 'Immediate Front Defect PLC Reject',
    plainDesc: 'If the front face has broken blends or undersized web, the IPC signals the PLC immediately to reject the bit without wasting rotation time.',
    techDesc: '24V digital I/O trigger pulse to pneumatic ejector cylinder.',
  },
  {
    number: '04',
    plainTitle: 'Top Camera & 360° Indexing Rotation',
    plainDesc: 'Top camera measures overall length and flute length, then the bit rotates 360° to measure helix angle and audit the full circumference.',
    techDesc: 'Stepper motor indexing fixture synchronized with camera strobe.',
  },
  {
    number: '05',
    plainTitle: 'YOLOv7 Defect Classification',
    plainDesc: 'Deep learning model inspects the rotating surface for land cracks, damage, land merging, rust, and broken shanks.',
    techDesc: 'YOLOv7 PyTorch inference on IPC GPU detecting 8 defect classes.',
  },
  {
    number: '06',
    plainTitle: 'Sorting & Metrology Audit Log',
    plainDesc: 'Passing bits route to accepted bins; rejected bits divert to quarantine bins with full measurement telemetry recorded.',
    techDesc: 'CSV/SQLite telemetry logging with scroll gauge tolerance delta.',
  },
];

export interface DrillBitMeasurement {
  id: string;
  name: string;
  view: 'Front Camera' | 'Top Camera';
  description: string;
  tolerance: string;
}

export const DRILL_BIT_MEASUREMENTS: DrillBitMeasurement[] = [
  {
    id: 'overall-length',
    name: 'Overall Length',
    view: 'Top Camera',
    description: 'Total tip-to-shank axial length measured via sub-pixel top edge contour.',
    tolerance: '±150–250 µm',
  },
  {
    id: 'flute-length',
    name: 'Flute Length',
    view: 'Top Camera',
    description: 'Axial distance from the cutting corner to the flute runout.',
    tolerance: '±150–250 µm',
  },
  {
    id: 'front-diameter',
    name: 'Front Diameter',
    view: 'Front Camera',
    description: 'Major cutting edge diameter measured across the primary drill tip.',
    tolerance: '±150 µm',
  },
  {
    id: 'web-thickness',
    name: 'Web Thickness',
    view: 'Front Camera',
    description: 'Central core thickness separating cutting flutes; critical for drill strength.',
    tolerance: '±150 µm',
  },
  {
    id: 'point-angle',
    name: 'Point Angle',
    view: 'Top Camera',
    description: 'Included angle between primary cutting lips (typically 118° or 135°).',
    tolerance: '±0.5°',
  },
  {
    id: 'chisel-angle',
    name: 'Chisel Angle',
    view: 'Front Camera',
    description: 'Angle between the chisel edge and the main cutting lip.',
    tolerance: '±1.0°',
  },
  {
    id: 'helix-angle',
    name: 'Helix Angle',
    view: 'Top Camera',
    description: 'Spiral angle formed by cutting flutes relative to drill centerline (audited during 360° spin).',
    tolerance: '±1.0°',
  },
];

export interface DrillBitTopSpecs {
  lengthMm: number;
  diameterMm: number;
  fluteMm: number;
  helixDeg: number;
  pointDeg: number;
}

export const DRILL_BIT_TOP_SPECS: DrillBitTopSpecs = {
  lengthMm: 117.25,
  diameterMm: 8.0,
  fluteMm: 72.8,
  helixDeg: 30.0,
  pointDeg: 118,
};

export interface DefectClass {
  code: string;
  name: string;
  impact: string;
  action: string;
}

export const DRILL_BIT_DEFECT_CLASSES: DefectClass[] = [
  { code: 'DEF-01', name: 'Broken Blend', impact: 'Chipped or fractured transition between cutting lip and margin', action: 'Immediate Reject' },
  { code: 'DEF-02', name: 'Land Crack', impact: 'Micro-fractures along the spiral drill margin', action: 'Immediate Reject' },
  { code: 'DEF-03', name: 'Surface Damage', impact: 'Physical gouges, dents, or tool scoring on cutting surfaces', action: 'Immediate Reject' },
  { code: 'DEF-04', name: 'Land Merge', impact: 'Manufacturing defect where margin lands improperly blur or fuse', action: 'Immediate Reject' },
  { code: 'DEF-05', name: 'Rust & Oxidation', impact: 'Surface corrosion from coolant exposure or humidity', action: 'Immediate Reject' },
  { code: 'DEF-06', name: 'Shank Broken / Deformed', impact: 'Clamping end fractures or dimensional runout', action: 'Immediate Reject' },
  { code: 'DEF-07', name: 'Web Undersize', impact: 'Core web thickness below tolerance, risking structural snap', action: 'Immediate Reject' },
  { code: 'DEF-08', name: 'Chisel Chipped', impact: 'Tip piercing edge damage preventing clean pilot penetration', action: 'Immediate Reject' },
];

export const DRILL_BIT_MACHINE_TIERS = [
  {
    tier: 'MACHINE A',
    range: '2.5 mm – 3.0 mm',
    focus: 'Micro-Drill Inspection',
    detail: 'High-magnification telecentric optics tuned for delicate miniature drill geometry.',
  },
  {
    tier: 'MACHINE B',
    range: '5.0 mm – 8.0 mm',
    focus: 'Mainstream Tooling',
    detail: 'Standard industrial production drill bits; high-volume CNC manufacturing.',
  },
  {
    tier: 'MACHINE C',
    range: '8.0 mm – 11.0 mm',
    focus: 'Heavy Industrial',
    detail: 'Large shank heavy-duty drills requiring expanded field-of-view lenses.',
  },
];

export const DRILL_BIT_CHALLENGES: ChallengeFixItem[] = [
  {
    number: '1',
    title: 'Specular Reflections on Cylindrical Carbide',
    problem: 'Polished carbide drill flutes created harsh bright streaks under standard factory lighting, blowing out OpenCV edge detection and distorting sub-pixel diameter measurements.',
    fixResult: 'Configured polarized coaxial illumination for the front camera and diffuse dome lighting for the top camera. Implemented adaptive Otsu thresholding with sub-pixel Sobel edge gradients, isolating true geometric boundaries regardless of glare.',
  },
  {
    number: '2',
    title: 'Scroll Gauge Calibration Across 3 Machine Tiers',
    problem: 'Inspecting drill sizes from 2.5mm up to 11mm across three separate machines caused optical magnification variance and pixel-to-millimeter calibration drift between shifts.',
    fixResult: 'Instituted a physical scroll gauge calibration routine at shift start. Built per-machine lookup matrices mapping pixel coordinates to physical dimensions, reliably hitting ±150–250 µm tolerance.',
  },
  {
    number: '3',
    title: '360° Rotation Synchronization & Defect Tagging',
    problem: 'Continuous rotation of the drill bit blurred micro-cracks on the spiral flutes during camera exposure.',
    fixResult: 'Synchronized an indexed stepper rotation fixture with hardware camera opto-coupler triggers, executing indexed stop-and-shoot bursts across 360° to feed sharp frames to YOLOv7.',
  },
];

export const DRILL_BIT_CONTRIBUTIONS: ContributionItem[] = [
  {
    area: 'OpenCV Sub-Pixel Metrology Pipeline',
    detail: 'Authored edge detection and contour metrology algorithms in Python/OpenCV to extract 7 geometric parameters with ±150–250 µm tolerance.',
  },
  {
    area: 'Dual-Camera Hardware & Lighting Setup',
    detail: 'Integrated two Hikrobot industrial cameras, configured coaxial and polarized illumination, and calibrated optical focus across 3 machine categories.',
  },
  {
    area: 'YOLOv7 Defect Model & PLC Actuation',
    detail: 'Trained YOLOv7 on custom drill damage classes (~70% recall) and implemented IPC-to-PLC communication to trigger pneumatic reject cylinders.',
  },
];

export const DRILL_BIT_RESULTS = [
  {
    label: 'METROLOGY TOLERANCE',
    value: '±150–250 µm',
    detail: 'Scroll gauge verified precision',
    highlight: true,
  },
  {
    label: 'CYCLE TIME',
    value: '~20s',
    detail: 'Dual capture + 360° rotation + sort',
  },
  {
    label: 'DEFECT RECALL',
    value: '70%',
    detail: 'Catches all major structural breaks',
    success: true,
  },
  {
    label: 'MACHINE CATEGORIES',
    value: '3',
    detail: '2.5–3mm, 5–8mm, and 8–11mm lines',
  },
];

export const DRILL_BIT_TECH_PILLARS: TechPillar[] = [
  {
    category: 'VISION METROLOGY',
    items: 'OpenCV, Canny Edge Detection, Contour Metrology, Sub-Pixel Corner Refinement, NumPy',
  },
  {
    category: 'DEEP LEARNING DEFECTS',
    items: 'YOLOv7, PyTorch, CUDA, Transfer Learning on Industrial Carbide Dataset',
  },
  {
    category: 'OPTICS & CAMERAS',
    items: 'Dual Hikrobot Machine Vision Cameras, Coaxial & Polarized Dome Lighting, Telecentric Optics',
  },
  {
    category: 'INDUSTRIAL AUTOMATION',
    items: 'Industrial PC (IPC), Siemens/Omron PLC, 24V Digital I/O, Pneumatic Reject Valves, Stepper Indexing',
  },
];

// =============================================================================
// LED LEAD BENDING & POLARITY INSPECTION CASE STUDY DATA
// =============================================================================
export const LED_INSPECTION_OVERVIEW: CaseStudyOverview = {
  tagline: 'HIGH-SPEED POLARITY & 90° BEND METROLOGY',
  headlinePre: 'Sub-millimeter lead metrology.',
  headlineHighlight: '50ms polarity sort.',
  headlinePost: 'Pneumatic reject actuation.',
  leadParagraph: 'A dual-station industrial machine vision platform engineered for automated high-volume LED lead forming. Integrates Basler machine vision cameras, pure OpenCV edge and contour geometry, and high-speed digital I/O to identify lead polarity in 50–250 ms and audit post-bend 90° angles, radius, and pin lengths against tight micrometer specifications.',
  plainEnglish: 'In automated electronics assembly, LEDs must be oriented correctly and their wire leads bent to an exact 90° right angle before being inserted into circuit boards. This custom machine performs two vision jobs: First, in the vibration alignment tray, a high-speed camera detects the LED\'s positive (anode) and negative (cathode) polarity within 50–250 ms so a robotic arm can grab and place it in the correct orientation. Second, after the mechanical die bends the leads, another camera audits the bend to ensure it is exactly 90 degrees (between 89° and 91°), inspects the corner radius, and measures both lead lengths. Any LED that fails even one measurement is immediately shot into a reject bin by a pneumatic blast.',
  stripMetrics: [
    {
      value: '50–250 ms',
      label: 'Polarity Latency',
      detail: 'Station 1 Anode vs. Cathode orientation',
    },
    {
      value: '89° – 91°',
      label: 'Bend Angle Window',
      detail: 'SPEC: 90.0° (±1.0° tolerance window)',
      highlight: true,
    },
    {
      value: '1–3s',
      label: 'Bend Metrology Cycle',
      detail: 'Station 2 sub-pixel contour & pin length audit',
    },
    {
      value: '100%',
      label: 'Pneumatic Defect Rejection',
      detail: 'Zero out-of-spec components pass downstream',
    },
  ],
  problem: 'In mass electronic component assembly, manual inspection of bent LED leads with calipers or shadowgraphs was impossible at factory speeds. Incorrect polarity insertion burned out components on downstream PCB lines, while improper bend angles (e.g. 88° or 93°) or incorrect pin lengths caused leads to miss through-hole PCB vias, jamming automated insertion machinery and halting production.',
  solution: 'Architected a dual-camera machine vision pipeline using Basler industrial cameras and pure OpenCV algorithms. Station 1 isolates the LED lead frame and epoxy flat notch in 50–250 ms to instruct pick-and-place robotics on polarity orientation. Station 2 captures high-contrast backlit silhouettes of the formed leads, computing sub-pixel edge boundaries, Hough line angle vectors, corner arc radius, and pin lengths against four engineering tolerance thresholds, triggering instantaneous pneumatic reject cylinder actuation for any non-conforming part.',
  traceCalculation: 'Angle: 90.18° (SPEC 90° ±1.0°) · Radius: 1.034 mm (SPEC 1.016 mm) · Top: 2.392 mm (SPEC 2.3876 mm) · Bottom: 15.731 mm (SPEC 15.748 mm) — ALL PASS',
  traceCitation: 'Station #02 · Basler GigE Camera · Telecentric Backlight · PLC Digital Output #04',
};

export const LED_STAGES: PipelineStep[] = [
  {
    number: '01',
    plainTitle: 'Bowl Feeder Ingest & Alignment Staging',
    plainDesc: 'Raw LEDs are vibrated into a singulated mechanical track so they arrive flat and ready for visual polarity inspection.',
    techDesc: 'Vibratory bowl feeder with linear singulation track and optical parts-present photo-sensor.',
  },
  {
    number: '02',
    plainTitle: 'Camera 1: Polarity & Orientation Detection (50–250 ms)',
    plainDesc: 'A Basler machine vision camera captures the LED in the alignment zone. OpenCV contour analysis detects whether the anode (+) or cathode (-) lead is on the left or right.',
    techDesc: 'Sub-millisecond global shutter capture with morphological lead-frame flag/anvil contour segmentation in 50–250 ms.',
  },
  {
    number: '03',
    plainTitle: 'Robotic Pick-and-Place Positioning',
    plainDesc: 'Armed with the polarity signal from the vision PC, the robotic picker grasps the LED and loads it into the bending die in the exact intended orientation.',
    techDesc: 'Digital I/O handshake between Industrial PC and 2-axis pneumatic pick-and-place arm.',
  },
  {
    number: '04',
    plainTitle: 'Precision 90° Mechanical Lead Bending',
    plainDesc: 'Mechanical tooling folds both wire leads against a precision hardened steel anvil to form the 90-degree right-angle bend.',
    techDesc: 'Cam-driven bending punch with fixed radius die tooling.',
  },
  {
    number: '05',
    plainTitle: 'Camera 2: Multi-Parameter Lead Metrology (1–3s)',
    plainDesc: 'Second Basler camera captures a backlit silhouette of the bent leads. OpenCV measures 4 key dimensions: bend angle, corner radius, top distance, and bottom pin length.',
    techDesc: 'Telecentric backlight imaging with sub-pixel Canny edge gradients and Hough line angle fitting in 1–3s.',
  },
  {
    number: '06',
    plainTitle: 'Pneumatic Defect Rejection & Audit Log',
    plainDesc: 'If any single dimension is outside the allowable tolerance, a pneumatic blast blows the part into the reject bin; passing LEDs proceed to tape-and-reel packaging.',
    techDesc: 'Industrial PC fires 24V PLC solenoid valve pulse; telemetry recorded to per-shift quality logs.',
  },
];

export interface LedToleranceSpec {
  parameter: string;
  unit: string;
  upperLimit: number;
  spec: number;
  lowerLimit: number;
  toleranceLabel: string;
  description: string;
}

export const LED_TOLERANCE_SPECS: LedToleranceSpec[] = [
  {
    parameter: 'Corner Radius',
    unit: 'MM',
    upperLimit: 1.27,
    spec: 1.016,
    lowerLimit: 0.762,
    toleranceLabel: '±0.254 mm',
    description: 'Fillet bend radius around the die corner; ensures wire ductility without stress fractures.',
  },
  {
    parameter: 'Bend Angle',
    unit: 'Degrees',
    upperLimit: 91,
    spec: 90,
    lowerLimit: 89,
    toleranceLabel: '±1.0°',
    description: 'Included right angle between horizontal shoulder and vertical PCB insertion pin.',
  },
  {
    parameter: 'Top Distance',
    unit: 'MM',
    upperLimit: 2.5146,
    spec: 2.3876,
    lowerLimit: 2.2606,
    toleranceLabel: '±0.127 mm',
    description: 'Horizontal lead shoulder extension from epoxy package face to outer bend vertex.',
  },
  {
    parameter: 'Bottom Distance',
    unit: 'MM',
    upperLimit: 16.002,
    spec: 15.748,
    lowerLimit: 15.494,
    toleranceLabel: '±0.254 mm',
    description: 'Vertical pin insertion length measured from bottom bend vertex to lead tips.',
  },
];

export const LED_CHALLENGES: ChallengeFixItem[] = [
  {
    number: '1',
    title: 'Eliminating Motion Blur & Shutter Latency in Station 1 (50–250 ms)',
    problem: 'In the vibratory feeder, LEDs were subject to continuous micro-vibrations. Standard camera exposure times produced blurred lead edges, slowing down the cycle and confusing lead frame polarity identification.',
    fixResult: 'Configured ultra-short microsecond hardware strobe lighting coupled with Basler global shutter GigE sensors. Optimized pure C++ / NumPy OpenCV contour bounding boxes to process within 50–250 ms without blocking the pick robot.',
  },
  {
    number: '2',
    title: 'Sub-Pixel Angle Calculation on Rounded Bends',
    problem: 'The lead bend is not a sharp knife-edge corner; it has a 1.016 mm radius. Fitting straight lines across the curved vertex distorted the true 90° angle measurement.',
    fixResult: 'Segmented the lead into two linear regions separated by the fillet curve. Applied Hough Line transforms and sub-pixel edge gradients exclusively on the straight segments to calculate the intersection angle, while fitting a circle arc to measure the corner bend radius independently.',
  },
  {
    number: '3',
    title: 'Optical Parallax & Perspective Distortion Prevention',
    problem: 'Standard industrial lenses introduce barrel and parallax distortion, causing lead pins closer to the lens edge to appear artificially longer than pins in the center.',
    fixResult: 'Installed a telecentric lens paired with a collimated LED backlight panel. Calibrated pixel-to-millimeter ratios using high-precision optical dot grids, achieving sub-millimeter measurement accuracy across the entire field of view.',
  },
];

export const LED_CONTRIBUTIONS: ContributionItem[] = [
  {
    area: 'Pure OpenCV Metrology Pipeline',
    detail: 'Developed high-precision edge detection, contour filtering, line intersection, and arc-fitting algorithms without deep learning overhead to achieve microsecond-fast deterministic execution.',
  },
  {
    area: 'Dual Basler Camera & Telecentric Optics Setup',
    detail: 'Configured dual Basler machine vision cameras with hardware strobe triggers, collimated backlight panels, and telecentric optics to eliminate optical parallax.',
  },
  {
    area: 'High-Speed Polarity & PLC Reject Interface',
    detail: 'Programmed digital I/O handshakes with industrial PLCs: sending 50–250 ms polarity orientation signals to the pick-and-place robot and millisecond pneumatic reject triggers.',
  },
];

export const LED_RESULTS = [
  {
    label: 'POLARITY DETECTION SPEED',
    value: '50–250 ms',
    detail: 'Station 1 alignment and pick guidance',
    highlight: true,
  },
  {
    label: 'BEND ANGLE TOLERANCE',
    value: '89° – 91°',
    detail: 'SPEC: 90.0° audited via sub-pixel Hough lines',
    success: true,
  },
  {
    label: 'METROLOGY PARAMETERS',
    value: '4 Dimensions',
    detail: 'Angle, radius, top distance, bottom distance',
  },
  {
    label: 'DEFECT REJECTION',
    value: '100%',
    detail: 'Automated pneumatic ejection for out-of-spec parts',
    success: true,
  },
];

export const LED_TECH_PILLARS: TechPillar[] = [
  {
    category: 'VISION METROLOGY',
    items: 'OpenCV, Canny Edge Detection, Sub-Pixel Edge Extraction, Hough Line Transform, Contour Curvature Fitting, NumPy',
  },
  {
    category: 'CAMERAS & OPTICS',
    items: 'Dual Basler Machine Vision Cameras (GigE / USB3), Telecentric Lenses, Collimated Backlight Panel, Hardware Strobe',
  },
  {
    category: 'INDUSTRIAL AUTOMATION',
    items: 'Industrial PC (IPC), SS Automation Bending Machine, Siemens/Omron PLC, 24V Digital I/O, Pneumatic Blow-Off Reject Cylinder',
  },
  {
    category: 'METROLOGY SPECS',
    items: 'Bend Angle (89°–91°), Corner Radius (0.762–1.27mm), Top Distance (2.26–2.51mm), Bottom Pin Length (15.49–16.00mm)',
  },
];
