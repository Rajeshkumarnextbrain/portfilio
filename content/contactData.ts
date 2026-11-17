import { IDENTITY, CONTACT_INFO, VERIFIED_NUMBERS } from './coreFacts';
import { EDUCATION } from './experienceData';

const primaryEdu = EDUCATION[0];
const educationDossierLine = primaryEdu
  ? `\n• Education: ${primaryEdu.degree}, ${primaryEdu.institution}${primaryEdu.location ? ` · ${primaryEdu.location}` : ''} (${primaryEdu.period})`
  : '';

export interface CandidateFact {
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
  success?: boolean;
}

export interface CoreValueCard {
  number: string;
  title: string;
  bullets: string[];
  tags: string[];
}

export interface ContactFaqItem {
  question: string;
  answerHtml?: string;
  answerText: string;
}

export const RECRUITER_DOSSIER_TEXT = `CANDIDATE DOSSIER // RAJESH KUMAR S
Target Roles: ${IDENTITY.targetRoles}
Focus: 50% High-Throughput Computer Vision · 50% Autonomous GenAI & Multi-Agent Systems
Experience: ${IDENTITY.yearsExperience} Years Production AI Architecture | Led ${IDENTITY.teamSizeLed}

KEY PRODUCTION HIGHLIGHTS:
• Shipped 3 end-to-end production AI platforms (130+ concurrent RTSP streams, multi-agent RAG/MCP pipelines)
• Engineered ~390 GB → 48 GB VRAM reduction using centralized NVIDIA Triton & zero-copy CUDA IPC ($3,400/mo GPU savings)
• Reduced operational false alarms by 74% using Gemma 3 VLM verification layers
• Built autonomous LangGraph agents with FastMCP tooling and strict AST safety guards (< 3s query response)
• Tech Stack: YOLOv11/26, DINOv3, ByteTrack, Triton, TensorRT, CUDA, LangGraph, FastMCP, Qdrant, FastAPI, Docker

LOCATION & LOGISTICS:
• Location: ${IDENTITY.locationDetails}
• Notice Period: ${IDENTITY.noticePeriod}
• Email: ${CONTACT_INFO.email}
• LinkedIn: ${CONTACT_INFO.linkedin}
• GitHub: ${CONTACT_INFO.github}${educationDossierLine}`;

export const CANDIDATE_FACTS: CandidateFact[] = [
  {
    label: 'LOOKING FOR',
    value: 'Lead / Staff AI',
    detail: 'Computer Vision & GenAI',
  },
  ...(primaryEdu
    ? [
        {
          label: 'EDUCATION',
          value: primaryEdu.degree,
          detail: `${primaryEdu.institution} (${primaryEdu.period})`,
        },
      ]
    : []),
  {
    label: 'LOCATION',
    value: IDENTITY.location,
    detail: 'Onsite, hybrid or remote; relocation open',
  },
  {
    label: 'NOTICE PERIOD',
    value: IDENTITY.noticePeriod,
    detail: 'Standard transition cycle',
    highlight: true,
  },
  {
    label: 'TIMEZONE',
    value: 'IST (UTC+5:30)',
    detail: 'Flexible for US / EU hours',
  },
  {
    label: 'REPLY TIME',
    value: IDENTITY.replyTime,
    detail: 'Direct inbox response',
    success: true,
  },
];

export const CORE_VALUE_CARDS: CoreValueCard[] = [
  {
    number: '01 // REAL-TIME VIDEO & VISION',
    title: 'Computer Vision & Real-Time Video',
    bullets: [
      `${IDENTITY.yearsExperience} years architecting and shipping mission-critical production vision systems.`,
      `${VERIFIED_NUMBERS.camerasCount} live cameras analysed concurrently across 2x NVIDIA L4 GPUs.`,
      'Full multi-model execution: YOLOv11, YOLO26, DINOv3, RetinaFace, ArcFace, and ByteTrack tracking.',
      'Production expertise in DeepStream, GStreamer, PyTorch, OpenCV, and hardware NVDEC decoding.',
    ],
    tags: ['YOLOv11', 'PyTorch', 'RetinaFace', 'ByteTrack', 'OpenCV'],
  },
  {
    number: '02 // MULTIMODAL & AGENTS',
    title: 'Generative AI & Multimodal Agents',
    bullets: [
      `Production deployment of ${VERIFIED_NUMBERS.precisionVlm} for zero-shot incident reasoning, cutting false alarms by 74%.`,
      'Autonomous multi-agent pipelines with LangChain and LangGraph for structured data analysis and reporting.',
      'Standardized AI tool integration via Model Context Protocol (FastMCP) with SELECT-only database safeguards.',
      'Multimodal RAG with textbook citations and 9 verified calculation tools in Edubotix.',
    ],
    tags: ['LangGraph', 'FastMCP', 'AWS Bedrock', 'Qdrant', 'Gemma 3 VLM'],
  },
  {
    number: '03 // GPU OPTIMIZATION & THROUGHPUT',
    title: 'GPU Optimization & High Throughput',
    bullets: [
      'Avoided ~390 GB of redundant VRAM across 130+ cameras by centralizing the 6-model suite on Triton.',
      'Custom TensorRT FP32 graph compilation delivering 192 req/s average throughput on NVIDIA L4 GPUs.',
      'Zero-copy inter-process communication using CUDA IPC shared memory, eliminating PCIe bus bottlenecks.',
      `Dynamic request batching saving ${VERIFIED_NUMBERS.costSavingsPerCluster} per deployed cluster (62% lower GPU costs).`,
    ],
    tags: ['Triton Server', 'TensorRT FP32', 'CUDA IPC', 'NVDEC Decode', 'Nsight Systems'],
  },
  {
    number: '04 // TECHNICAL LEADERSHIP & RIGOR',
    title: 'Technical Engineering Leadership',
    bullets: [
      `Mentored and led ${IDENTITY.teamSizeLed} across fast-paced Computer Vision & GenAI sprints.`,
      'Established GPU profiling protocols with NVIDIA Nsight Compute to eliminate CUDA race conditions and memory leaks.',
      `Owned client technical discovery, architecture design, and enterprise onboarding across ${VERIFIED_NUMBERS.clientDeploymentsCount} deployments.`,
      'Implemented zero-downtime canary rollouts on Triton with automated health check rollbacks.',
    ],
    tags: ['Sprint Leadership', 'Nsight Profiling', 'Canary Rollouts', 'Architecture Design', 'Client Discovery'],
  },
];

export const CONTACT_FAQS: ContactFaqItem[] = [
  {
    question: 'What specific full-time roles are you prioritizing?',
    answerText: `Actively interviewing for ${IDENTITY.targetRoles}. Prioritizing high-ownership teams building real-time computer vision, low-latency GPU microservices, or multimodal AI agent architectures.`,
  },
  {
    question: 'What are your location preferences and work arrangements?',
    answerText: `Based in ${IDENTITY.location}. Open to onsite, hybrid, and remote roles. Also open to sponsored relocation for Tier-1 AI engineering hubs. ${IDENTITY.timezone}.`,
  },
  {
    question: 'What is your notice period and interview process?',
    answerText: `My contractual notice period is ${IDENTITY.noticePeriod}. Available for interview stages immediately including initial technical screenings, live system architecture whiteboards, code reviews, and executive leadership conversations.`,
  },
];
