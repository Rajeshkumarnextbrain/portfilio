import { IDENTITY } from './coreFacts';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshkumar.dev';

export const ROOT_METADATA = {
  title: {
    default: `${IDENTITY.name} · ${IDENTITY.headlineRole}`,
    template: `%s | ${IDENTITY.name}`,
  },
  description: `${IDENTITY.name} · ${IDENTITY.shortSummary}`,
  siteName: `${IDENTITY.name} Portfolio`,
  canonical: '/',
};

export const PAGE_METADATA = {
  experience: {
    title: 'Experience & Leadership',
    description:
      'Track record leading AI engineering teams, architecting 130+ camera video analytics pipelines on NVIDIA L4 GPUs, and building autonomous agent platforms.',
    canonical: '/experience',
  },
  contact: {
    title: 'Contact & Hiring',
    description:
      `Get in touch with ${IDENTITY.name} for Lead AI Engineer, Staff Computer Vision Engineer, and Staff GenAI Systems Architect roles.`,
    canonical: '/contact',
  },
  visionfacts: {
    title: 'VisionFacts.ai · 130+ Camera Video Analytics Platform',
    description:
      'High-throughput RTSP video analytics microservice processing 130+ live security camera streams with Triton zero-copy CUDA IPC and Gemma 3 VLM verification.',
    canonical: '/project-visionfacts',
  },
  analyticsAgent: {
    title: 'Autonomous Analytics Agent · Multi-Agent FastMCP Architecture',
    description:
      'LangGraph multi-agent conversational reporting platform with FastMCP tool servers and AST security guardrails delivering < 3s query turnaround.',
    canonical: '/project-analytics-agent',
  },
  edubotix: {
    title: 'Edubotix · Curriculum-Grounded Multimodal RAG Assistant',
    description:
      'Multimodal textbook tutoring assistant using Qdrant hybrid retrieval and 9 deterministic FastMCP tools (SymPy, Pint, RDKit) to eliminate hallucinations.',
    canonical: '/project-edubotix',
  },
  drillBit: {
    title: 'Drill Bit Defect Inspection · Industrial Computer Vision',
    description:
      'High-precision industrial computer vision system detecting sub-millimeter defects in carbide drill bits with custom illumination and OpenCV morphology.',
    canonical: '/project-drill-bit-inspection',
  },
  ledInspection: {
    title: 'Automated LED Quality Inspection · Sub-Pixel Flaw Detection',
    description:
      'Real-time industrial LED wafer quality inspection system detecting sub-pixel surface anomalies and color temperature deviations at line speed.',
    canonical: '/project-led-inspection',
  },
};
