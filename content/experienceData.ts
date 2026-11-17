import { VERIFIED_NUMBERS, IDENTITY } from './coreFacts';

export interface LeadershipStage {
  stage: string;
  title: string;
  description: string;
  badge: string;
  isFirst?: boolean;
}

export interface BlueprintNode {
  nodeNumber: string;
  stageName: string;
  title: string;
  description: string;
  spec: string;
}

export interface DrdoRow {
  label: string;
  value: string;
}

export const EXPERIENCE_HERO_METRICS = [
  {
    value: '4+',
    label: 'YEARS PROD AI',
    detail: 'End-to-end edge & cloud execution',
  },
  {
    value: '130+',
    label: 'CONCURRENT RTSP',
    detail: 'Multi-model Triton & CUDA IPC',
  },
  {
    value: '< 3s',
    label: 'AGENT QUERY TURNAROUND',
    detail: 'LangGraph + FastMCP vs 24-hr DBA wait',
  },
  {
    value: '3–5',
    label: 'ENGINEERS LED',
    detail: 'Sprint delivery & architecture',
  },
];

export const LEADERSHIP_STAGES: LeadershipStage[] = [
  {
    stage: 'STAGE 01 · TEAM LEADERSHIP & PROFILING',
    title: 'Nsight GPU Profiling & Bi-weekly Reviews',
    description: `Led ${IDENTITY.teamSizeLed} across computer vision and GenAI sprints. Instituted profiling checks using NVIDIA Nsight Systems and Nsight Compute, eliminating GPU memory leaks and CUDA race conditions before code merges to master.`,
    badge: 'Bi-weekly Sprints',
    isFirst: true,
  },
  {
    stage: 'STAGE 02 · OBSERVABILITY & TELEMETRY',
    title: 'Real-Time Prometheus & Grafana Monitoring',
    description: `Built real-time telemetry dashboards tracking dropped frames, decode latency, model inference execution, and queue depth across ${VERIFIED_NUMBERS.camerasCount} camera feeds, alongside LangSmith traces and AST guardrail observability for autonomous agent pipelines.`,
    badge: 'Zero Blindspots',
  },
  {
    stage: 'STAGE 03 · DEPLOYMENT RIGOR',
    title: 'Canary Rollouts & Zero-Downtime Serving',
    description: 'Standardized model serving repositories on NVIDIA Triton with automated canary rollouts, strict version control, and health check validation, ensuring zero video analytics downtime during production model updates.',
    badge: 'Zero Downtime',
  },
];

export const BLUEPRINT_NODES: BlueprintNode[] = [
  {
    nodeNumber: 'NODE 01',
    stageName: 'INGEST',
    title: `${VERIFIED_NUMBERS.camerasCount} Feeds Ingest & Decode`,
    description: 'RTSP ingest with NVDEC hardware decoding directly into GPU memory buffers, bypassing host CPU bottlenecks.',
    spec: 'HW NVDEC · H.264 / H.265',
  },
  {
    nodeNumber: 'NODE 02',
    stageName: 'TRANSPORT',
    title: 'CUDA IPC Zero-Copy',
    description: 'Shared memory IPC handles transfer decoded frame tensors between processes without host-to-device PCIe copies.',
    spec: 'CUDA IPC SHARED MEMORY',
  },
  {
    nodeNumber: 'NODE 03',
    stageName: 'INFERENCE',
    title: 'Centralized Triton Serving',
    description: `YOLO26 primary model (${VERIFIED_NUMBERS.yoloExecutionMean} mean execution) filters high-throughput streams, triggering Gemma 3 E4B VLM for deep reasoning.`,
    spec: 'TENSORRT FP32 + TRITON',
  },
  {
    nodeNumber: 'NODE 04',
    stageName: 'DISPATCH',
    title: 'Reasoned Alerts & Evidence',
    description: 'Structured JSON outputs with natural-language explanation and audit crops dispatched via FastAPI and message brokers.',
    spec: 'FASTAPI · REDIS · WEBSOCKETS',
  },
];

export const DRDO_RADAR_ROWS: DrdoRow[] = [
  {
    label: 'Work area',
    value: 'Radar data processing, target tracking and signal analysis',
  },
  {
    label: 'Methods',
    value: 'Kalman filtering (target state estimation); K-Nearest Neighbors (noise classification)',
  },
  {
    label: 'My part',
    value: 'Supported testing and empirical validation of radar signal processing algorithms',
  },
  {
    label: 'Processing',
    value: 'Real-time stream processing',
  },
];

export interface RoleMetric {
  value: string;
  label: string;
  detail: string;
  highlight?: boolean;
}

export const NEXTBRAIN_ROLE_METRICS: RoleMetric[] = [
  {
    value: VERIFIED_NUMBERS.camerasCount,
    label: 'CAMERAS LIVE',
    detail: 'Multi-stream video analytics on 2x L4 GPUs',
  },
  {
    value: '< 3s',
    label: 'AGENT RESPONSE',
    detail: 'LangGraph + FastMCP vs 24-hr DBA queue',
    highlight: true,
  },
  {
    value: '74%',
    label: 'FEWER FALSE ALARMS',
    detail: 'Zero-shot Gemma 3 E4B VLM reasoning',
  },
  {
    value: '62%',
    label: 'LOWER GPU COST',
    detail: '$3,400/mo saved via centralized Triton serving',
    highlight: true,
  },
];

export const SS_AUTO_ROLE_METRICS: RoleMetric[] = [
  {
    value: '70–85%',
    label: 'DEFECT DETECTION ACCURACY',
    detail: 'On factory lines with variable reflections',
  },
  {
    value: 'Jetson',
    label: 'EMBEDDED EDGE HARDWARE',
    detail: 'NVIDIA Nano & Xavier NX edge inference',
  },
  {
    value: 'PLC',
    label: 'INDUSTRIAL INTEGRATION',
    detail: 'Hardware triggers and pneumatic line reject mechanisms',
  },
];

export const TIMELINE_START = '2022-05';   // YYYY-MM
export const TIMELINE_NOW   = '2026-11';   // update on each redeploy

export type ScrubberClip = {
  id: string; clipNumber: string; title: string; period: string;
  start: string; end: string | null; isCurrent?: boolean;
};

export const TIMELINE_SCRUBBER_CLIPS: ScrubberClip[] = [
  { id: 'chapter-3', clipNumber: 'CLIP 03', title: 'VEDANT',        period: 'May – Jul 2022',      start: '2022-05', end: '2022-07' },
  { id: 'chapter-2', clipNumber: 'CLIP 02', title: 'SS AUTOMATION', period: 'Jul 2022 – Jul 2023', start: '2022-07', end: '2023-07' },
  { id: 'chapter-1', clipNumber: 'CLIP 01', title: 'NEXTBRAIN // TEAM LEAD', period: 'Jul 2023 – Present', start: '2023-07', end: null, isCurrent: true },
];

export type EducationItem = {
  degree: string;        // e.g. "B.E. in Electronics and Communication"
  institution: string;
  location?: string;
  period: string;        // e.g. "2018 – 2022"
  grade?: string;        // CGPA / percentage, only if you want to show it
  highlights?: string[]; // final-year project, relevant coursework
};

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "The Kavery Engineering College",
    location: "Mecheri, Salem, Tamil Nadu",
    period: "2016 – 2020",
    highlights: [
      "Core coursework: Algorithms, Data Structures, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering.",
    ],
  },
];

export const CERTIFICATIONS: { name: string; issuer: string; year?: string }[] = [];

export type CourseItem = {
  title: string;
  provider: string;             // "Udemy", "XYZ Institute", "NVIDIA DLI"...
  year?: string;
  kind: 'certification' | 'course';   // certification = exam/credential, course = completion
  url?: string;                 // certificate / verification link, if any
};

export const COURSES: CourseItem[] = [
  {
    title: "Complete Generative AI Course With Langchain and Huggingface",
    provider: "Udemy (Krish Naik)",
    year: "2025",
    kind: "course",
  },
  {
    title: "Learn Python & Ethical Hacking From Scratch",
    provider: "Udemy (Zaid Sabih)",
    year: "2020",
    kind: "course",
  },
  {
    title: "Data Science",
    provider: "i18n Solutions",
    year: "2019",
    kind: "certification",
  },
];
