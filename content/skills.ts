// Single source of truth for the Home "Skills" section.
// Keep the numbers in sync with content/facts.ts (130+, 25+, ~6.5x, 62%, 3–5).

export type SkillProof = {
  value: string;
  label: string;
  /** set to false for values CountUp cannot parse, e.g. "3–5" */
  count?: boolean;
};

export type SkillLink = { label: string; href: string };

export interface SkillRow {
  id: string;
  /** Material Symbols Outlined icon name (already loaded in layout) */
  icon: string;
  category: string;
  headline: string;
  sentence: string;
  proof: SkillProof[];
  usedIn: SkillLink[];
  tools: string[];
}

export const SKILLS: SkillRow[] = [
  {
    id: "computer-vision",
    icon: "videocam",
    category: "Computer vision",
    headline: "I make computers understand video",
    sentence:
      "Detects people, vehicles, safety gear and falls on live camera feeds.",
    proof: [
      { value: "130+", label: "cameras analysed live" },
      { value: "25+", label: "AI features delivered" },
    ],
    usedIn: [
      { label: "VisionFacts.ai", href: "/project-visionfacts" },
      { label: "Drill Bit Inspection", href: "/project-drill-bit-inspection" },
      { label: "LED Inspection", href: "/project-led-inspection" },
    ],
    tools: [
      "PyTorch",
      "TensorFlow",
      "ONNX",
      "YOLOv11",
      "YOLO26",
      "DINOv3",
      "RetinaFace",
      "ArcFace",
      "ByteTrack",
      "OpenCV",
      "Object detection",
      "Pose estimation",
      "Face recognition",
      "Multi-object tracking",
    ],
  },
  {
    id: "genai-agents",
    icon: "smart_toy",
    category: "Generative AI & agents",
    headline: "I build AI assistants that reason and use tools",
    sentence:
      "Assistants that read images, answer questions about data, run calculations and write reports.",
    proof: [{ value: "3", label: "AI systems built" }],
    usedIn: [
      { label: "Analytics Agent", href: "/project-analytics-agent" },
      { label: "Edubotix", href: "/project-edubotix" },
      { label: "VisionFacts.ai", href: "/project-visionfacts" },
    ],
    tools: [
      "LangChain",
      "LangGraph",
      "MCP (FastMCP)",
      "RAG",
      "Deep Agents",
      "Vision-Language Models (Gemma)",
      "OpenAI",
      "Gemini",
      "Ollama",
      "AWS Bedrock",
    ],
  },
  {
    id: "efficient-ai",
    icon: "speed",
    category: "Fast, efficient AI",
    headline: "I make AI faster and cheaper to run",
    sentence:
      "Runs AI models efficiently so more cameras fit on the same GPUs.",
    proof: [
      { value: "~6.5x", label: "less GPU memory" },
      { value: "62%", label: "lower cloud GPU cost" },
    ],
    usedIn: [{ label: "VisionFacts.ai", href: "/project-visionfacts" }],
    tools: [
      "Triton Inference Server",
      "TensorRT",
      "ONNX Runtime",
      "CUDA",
      "NVIDIA Nsight Compute",
      "NVIDIA NGC",
      "gRPC",
      "NVIDIA Jetson",
    ],
  },
  {
    id: "systems-leadership",
    icon: "groups",
    category: "Reliable systems & leadership",
    headline: "I build reliable systems and lead the team",
    sentence:
      "Services that run 24/7 in real facilities, built by a team of 3–5 engineers I lead.",
    proof: [{ value: "3–5", label: "engineers led", count: false }],
    usedIn: [
      { label: "VisionFacts.ai", href: "/project-visionfacts" },
      { label: "Analytics Agent", href: "/project-analytics-agent" },
      { label: "Edubotix", href: "/project-edubotix" },
    ],
    tools: [
      "Python",
      "Multiprocessing systems",
      "Event-driven pipelines",
      "Distributed inference",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Qdrant",
      "ChromaDB",
      "Docker",
      "Git & GitHub",
      "LangSmith",
      "Guardrails",
      "Prometheus & Grafana",
    ],
  },
];
