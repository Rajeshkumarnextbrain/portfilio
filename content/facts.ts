// Single source of truth for portfolio facts, metrics, and content.
import { CONTACT_INFO, IDENTITY, VERIFIED_NUMBERS } from "./coreFacts";
export * from "./coreFacts";

export const PROOF_METRICS = [
  { value: "4+", label: "years experience", caption: "production AI & systems engineering" },
  { value: "130+", label: "cameras analysed live", caption: "real-time computer vision at scale" },
  { value: "3", label: "AI agent & RAG systems", caption: "LangGraph, FastMCP & Bedrock" },
  { value: "$3,400/mo", label: "saved per cluster", caption: "62% lower monthly cloud GPU costs" },
];

export const AT_A_GLANCE_METRICS = [
  {
    value: "130+",
    title: "cameras analysed live",
    caption: "Watches over 130 live security feeds simultaneously with hardware NVDEC decoding.",
  },
  {
    value: "2",
    title: "LangGraph agent pipelines",
    caption: "Interactive 'Ask' and autonomous 'Watch' workflows with FastMCP tool servers.",
  },
  {
    value: "~6.5x less",
    title: "GPU memory required",
    caption: "Centralized Triton architecture cut model memory from ~32.5 GB down to ~5 GB (~2.5 GB per GPU).",
  },
  {
    value: "9",
    title: "scientific FastMCP tools",
    caption: "Deterministic math & chemistry engines (SymPy, Pint, RDKit) eliminating calculation hallucinations.",
  },
  {
    value: "74%",
    title: "fewer false alarms",
    caption: "Secondary Gemma 3 E4B vision-language reasoning eliminates false positives from reflections and shadows.",
  },
  {
    value: "$3,400/mo",
    title: "saved per cluster",
    caption: "Dynamic request batching and TensorRT FP32 optimizations cut monthly cloud GPU expenditure by 62%.",
  },
];

export const BUSINESS_IMPACT_ITEMS = [
  {
    id: "gpu-costs",
    metric: "$3,400/mo",
    metricLabel: "saved per deployed cluster",
    badge: "Cloud GPU Cost ROI",
    problem: "Analyzing 130+ cameras with a 6-model suite (YOLO26, Pose, PPE, Fall, Face) naively required ~3 GB VRAM per stream—multiplying cluster costs.",
    solution: "Centralized all model instances on NVIDIA Triton with zero-copy CUDA IPC shared memory, fitting 130+ streams onto 2x NVIDIA L4 GPUs.",
    outcome: "62% lower monthly GPU spend",
  },
  {
    id: "false-alarms",
    metric: "74%",
    metricLabel: "fewer false safety alarms",
    badge: "Operational Fatigue",
    problem: "Standard object detectors flooded control rooms with false positives from shadows and worker clothes, causing operator alert fatigue.",
    solution: "Engineered a secondary zero-shot audit layer using Gemma 3 E4B Vision-Language Model (VLM) to verify flagged incidents before alerting.",
    outcome: "Zero dropped critical hazards",
  },
  {
    id: "ticket-turnaround",
    metric: "< 3s",
    metricLabel: "query response vs 48-hr wait",
    badge: "Data Turnaround & Speed",
    problem: "Facility directors waited 24 to 48 hours for database administrators to write custom SQL queries to audit incidents and attendance.",
    solution: "Built autonomous LangGraph multi-agent pipelines with FastMCP tool servers and strict AST security guardrails for read-only database queries.",
    outcome: "85% reduction in DBA tickets",
  },
];

export const EXPERIENCE_ROLES = [
  {
    title: "Team Lead – Computer Vision & Generative AI Systems",
    company: "Nextbrain Technologies Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Aug 2023 – Present",
    domain: "High-Throughput Vision Microservices & Autonomous Agent Pipelines",
    flagshipRole: "Lead AI & Systems Architect",
    plainSummary:
      "I lead a team of 3–5 engineers building enterprise AI platforms: real-time computer vision clusters processing 130+ camera feeds on NVIDIA GPUs, and autonomous LangGraph/FastMCP agent systems that let operators query facility databases and CCTV records in plain English.",
    outcomes: [
      "130+ live cameras analysed simultaneously across 2x NVIDIA L4 GPUs with zero-copy CUDA IPC",
      "Built autonomous LangGraph multi-agent pipelines with FastMCP tools (< 3s query response vs 24-hr DBA wait)",
      "74% fewer false safety alarms using secondary Gemma 3 VLM zero-shot verification",
      "62% lower monthly GPU cost ($3,400/mo saved) via centralized Triton multi-model serving",
    ],
    responsibilities: [
      {
        area: "Autonomous Agents & FastMCP",
        detail: "Architected autonomous LangGraph multi-agent pipelines with FastMCP tool servers and strict AST security guardrails, replacing 24–48 hr DBA custom query queues with instant (< 3s) conversational facility data analysis.",
      },
      {
        area: "High-Throughput Vision Pipelines",
        detail: "Architected low-latency RTSP video analytics microservices across 130+ concurrent camera streams with NVDEC hardware decoding and zero host CPU thrashing on 2x NVIDIA L4 GPUs.",
      },
      {
        area: "Multimodal RAG & VLM Reasoning",
        detail: "Engineered zero-shot incident verification using Gemma 3 E4B (cutting false alarms by 74%) and curriculum-grounded multimodal RAG in Edubotix with Qdrant hybrid retrieval and verified tool execution.",
      },
      {
        area: "TensorRT & GPU Optimization",
        detail: "Compiled custom TensorRT execution graphs with centralized NVIDIA Triton serving and zero-copy CUDA IPC shared memory, cutting monthly GPU costs by 62% ($3,400/mo saved per cluster).",
      },
      {
        area: "Engineering Leadership & Cadence",
        detail: "Directed technical discovery across 3 production platforms, mentored 3–5 engineers across CV and GenAI sprints, and instituted bi-weekly NVIDIA Nsight profiling cadences.",
      },
    ],
    techStack: [
      "LangGraph",
      "FastMCP / MCP",
      "Triton Inference Server",
      "TensorRT",
      "CUDA IPC",
      "YOLOv11 / YOLO26",
      "DINOv3",
      "Gemma 3 VLM",
      "Qdrant Vector DB",
      "RAG & Guardrails",
      "FastAPI",
      "Docker",
      "Prometheus & Grafana",
    ],
  },
  {
    title: "Junior Vision Engineer",
    company: "SS Automation Solutions Pvt. Ltd.",
    location: "India",
    period: "Jul 2022 – Jul 2023",
    domain: "Industrial Machine Vision & Quality Inspection Automation",
    flagshipRole: "Junior Vision Engineer",
    plainSummary:
      "Taught myself machine vision on the job and built defect-detection systems on NVIDIA Jetson devices connected to factory controllers (70–85% accuracy).",
    outcomes: [
      "Deployed automated surface inspection on embedded NVIDIA Jetson edge systems",
      "Integrated vision inferences with factory controllers for line inspection",
      "Delivered real-time automated defect classification on manufacturing lines",
    ],
    responsibilities: [
      {
        area: "Rapid Autodidactic Ramp",
        detail: "Joined with no prior computer vision background and self-taught the field on the job, becoming the engineer responsible for delivering customer inspection systems.",
      },
      {
        area: "Surface Defect Systems",
        detail: "Built bespoke machine vision solutions for dimensional measurement and surface defect classification on production lines.",
      },
      {
        area: "Custom Model Training",
        detail: "Trained and benchmarked SSD, YOLOv3, and YOLOv7 detection architectures on industrial datasets, achieving 70–85% defect detection precision under factory lighting.",
      },
      {
        area: "Embedded Edge Deployments",
        detail: "Packaged vision pipelines onto NVIDIA Jetson hardware (Nano, Xavier NX), directly triggering factory controllers for automated line rejection.",
      },
    ],
    techStack: [
      "NVIDIA Jetson (Nano, Xavier NX)",
      "YOLOv7 / YOLOv3",
      "SSD",
      "OpenCV",
      "PyTorch",
      "Industrial PLCs",
      "GigE Vision",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "Vedant Tech Solutions Pvt. Ltd. (DRDO project)",
    location: "India",
    period: "May 2022 – Jul 2022",
    domain: "Radar Data Processing & Target Tracking",
    flagshipRole: "Technical Support Engineer",
    plainSummary:
      "Worked on radar target tracking and signal analysis using Kalman filtering and KNN.",
    outcomes: [
      "Implemented Kalman filtering to filter radar track noise and predict trajectories accurately",
      "Applied KNN classification algorithms for target state estimation",
    ],
    responsibilities: [
      {
        area: "Radar Telemetry Processing",
        detail: "Worked on high-volume radar telemetry data processing, kinematic target tracking, and signal analysis.",
      },
      {
        area: "Kinematic State Estimation",
        detail: "Applied Kalman filtering and K-Nearest Neighbors (KNN) algorithms for kinematic state estimation and trajectory smoothing.",
      },
      {
        area: "Defense Empirical Validation",
        detail: "Supported testing, telemetry capture, and empirical validation of radar signal processing algorithms under defense research protocols.",
      },
    ],
    techStack: [
      "Radar Data Systems",
      "Kalman Filters",
      "KNN Classification",
      "Signal Analysis",
      "Python",
    ],
  },
];

export interface ProjectResult {
  value?: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Computer Vision' | 'Generative AI & Agents';
  companyDates: string;
  technologies: string;
  plainEnglish: string;
  results: ProjectResult[];
  tech: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "visionfacts",
    slug: "/project-visionfacts",
    title: "VisionFacts.ai",
    subtitle: "Real-Time Intelligent Video Analytics Platform",
    role: "Lead AI & Systems Architect",
    category: "Computer Vision",
    companyDates: "Nextbrain Technologies Pvt. Ltd. · Aug 2023 – Present",
    technologies: "Python, OpenCV, YOLO26, Triton, TensorRT FP32, CUDA IPC, MongoDB, FastAPI, Docker",
    plainEnglish:
      "Software that watches 130+ security cameras automatically and alerts staff to safety problems, like missing helmets or forklifts near workers, so nobody has to watch screens all day.",
    results: [
      { value: "130+", label: "cameras analysed live on 2x NVIDIA L4 GPUs" },
      { value: "~6.5x", label: "less GPU memory (~32.5 GB down to ~5 GB)" },
      { value: "74%", label: "fewer false safety alarms via VLM verification" },
    ],
    tech: ["Python", "TensorRT FP32", "Triton Inference Server", "CUDA IPC", "YOLO26", "Gemma 3 E4B", "FastAPI"],
  },
  {
    id: "analytics-agent",
    slug: "/project-analytics-agent",
    title: "Visionfacts Analytics Agent",
    subtitle: "Autonomous CCTV Intelligence & Natural Language Reporting",
    role: "Lead AI & Systems Architect",
    category: "Generative AI & Agents",
    companyDates: "Nextbrain Technologies Pvt. Ltd. · Aug 2023 – Present",
    technologies: "LangChain, LangGraph, Model Context Protocol (FastMCP), FastAPI, PostgreSQL, SSE",
    plainEnglish:
      "A chat assistant that lets managers ask questions about security and attendance data in plain English, and emails them a shift report automatically.",
    results: [
      { value: "2", label: "pipelines (Ask and Watch)" },
      { value: "2", label: "MCP servers connecting tools to LangGraph agents" },
      { value: "5", label: "data domains with strict SELECT-only database access" },
    ],
    tech: ["LangGraph", "Model Context Protocol (MCP)", "Google Gemini · OpenAI", "PostgreSQL", "FastAPI", "Python"],
  },
  {
    id: "edubotix",
    slug: "/project-edubotix",
    title: "Edubotix",
    subtitle: "Curriculum-Grounded Multimodal Academic Tutor",
    role: "Lead AI & Systems Architect",
    category: "Generative AI & Agents",
    companyDates: "Nextbrain Technologies Pvt. Ltd. · Aug 2023 – Present",
    technologies: "AWS Bedrock, Claude, Qdrant, FastMCP, SymPy, RDKit, Pint, FastAPI",
    plainEnglish:
      "An AI tutor that answers students' science and maths questions straight from their textbooks, and uses real calculation tools so it does not guess.",
    results: [
      { value: ">70%", label: "faster textbook ingestion with structured parser" },
      { value: "9", label: "built-in scientific tools for verified calculations" },
      { label: "Answers cite verified textbook page and section numbers" },
    ],
    tech: ["Qdrant Vector DB", "Hybrid Search", "AWS Bedrock", "Claude (AWS Bedrock)", "Python", "FastAPI"],
  },
  {
    id: "drill-bit-inspection",
    slug: "/project-drill-bit-inspection",
    title: "Drill Bit Inspection Machine",
    subtitle: "High-Precision Dual-Camera Metrology & Defect Sorting",
    role: "Junior Vision Engineer",
    category: "Computer Vision",
    companyDates: "SS Automation · Jul 2022 – Jul 2023",
    technologies: "Python, OpenCV, YOLOv7, Hikrobot Dual Cameras, Industrial PC, PLC Actuation, GigE Vision",
    plainEnglish:
      "An automated inspection machine that checks industrial drill bits using two synchronized cameras, measuring 7 dimensions to micron precision and rejecting damaged bits with a pneumatic PLC signal.",
    results: [
      { value: "±150–250 µm", label: "metrology tolerance verified against scroll gauge" },
      { value: "70%", label: "automated defect detection recall across 8 damage classes" },
      { value: "3", label: "machine categories covering 2.5mm to 11mm drill bits" },
    ],
    tech: ["OpenCV (Metrology)", "YOLOv7 (Defects)", "Hikrobot GigE Cameras", "Industrial PC", "PLC Actuation", "Python"],
  },
  {
    id: "led-inspection",
    slug: "/project-led-inspection",
    title: "LED Lead Bending & Polarity Inspection",
    subtitle: "High-Speed Dual-Station Machine Vision & Lead Metrology",
    role: "Junior Vision Engineer",
    category: "Computer Vision",
    companyDates: "SS Automation · Jul 2022 – Jul 2023",
    technologies: "Python, OpenCV, Basler Machine Vision Cameras, Edge & Contour Metrology, Sub-Pixel Analysis, Industrial PC, PLC Rejection",
    plainEnglish:
      "A dual-station factory vision system that checks LED anode/cathode polarity in 50–250 ms for automated pick-and-place, then inspects post-bend 90° lead geometry and pin lengths with 100% pneumatic defect rejection.",
    results: [
      { value: "50–250 ms", label: "polarity detection speed for robotic pick-and-place" },
      { value: "89°–91°", label: "bend angle tolerance audited via sub-pixel contours" },
      { value: "100%", label: "automated pneumatic reject for out-of-spec leads" },
    ],
    tech: ["OpenCV (Contours & Edges)", "Basler GigE Cameras", "Sub-Pixel Metrology", "Industrial PC", "PLC Actuation", "Python"],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    plainTitle: "Capture",
    plainDesc: "Cameras send video feeds over the local network into isolated worker processes.",
    techDesc: "RTSP H.264/H.265 streams read by one isolated worker process per camera.",
  },
  {
    number: "02",
    plainTitle: "Share",
    plainDesc: "Frames are placed in shared computer memory so models access them without copying data.",
    techDesc: "Zero-copy CUDA shared memory (IPC): frames go to the GPU without copying.",
  },
  {
    number: "03",
    plainTitle: "Detect",
    plainDesc: "A primary detector locates people, equipment, and hazards across all frames in milliseconds.",
    techDesc: "Single TensorRT FP32 YOLO26 model handles 192 requests/second average (107 ms mean).",
  },
  {
    number: "04",
    plainTitle: "Explain",
    plainDesc: "When a potential hazard is flagged, an AI vision-language model inspects the scene to verify it.",
    techDesc: "Gemma 3 E4B Vision-Language Model filters false alarms and extracts structured details.",
  },
  {
    number: "05",
    plainTitle: "Alert",
    plainDesc: "Safety managers receive verified instant notifications and an automated shift summary.",
    techDesc: "FastAPI WebSockets push live events to dashboards while LangGraph agents dispatch reports.",
  },
];

// Re-export modular domain data so facts.ts remains single source of truth
export * from "./contactData";
export * from "./caseStudiesData";
export * from "./experienceData";

