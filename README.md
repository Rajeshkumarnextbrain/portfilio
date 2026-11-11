# Rajesh Kumar S — AI Engineer Portfolio

Production portfolio built with **Next.js 14**, **Tailwind CSS**, and design tokens derived from Stitch ("AI Engineer Dark Portfolio" project).

## Overview

A high-performance dark-themed portfolio showcasing 4+ years of engineering experience in low-latency RTSP video analytics, Vision-Language Models (Gemma E4B), Triton Inference Server, and high-throughput GPU inference pipelines.

### Included Pages & Routes

- `/` — **Home / Hero & Overview**
  - Interactive RTSP CV inference console simulation (TensorRT 92fps, AWQ INT4, bounding boxes)
  - Hardware telemetry diagnostics (p95 latency 8.4ms, throughput & VRAM savings)
  - Key impact metrics (150+ live streams, 25+ use cases, ~6x VRAM reduction, 5+ deployments)
  - GPU memory & throughput benchmark breakdown
  - Interactive category filter (`All Projects`, `Computer Vision`, `GenAI / LLMs`)
  - Featured projects list & core systems stack
- `/experience` — **Engineering Experience & Career Track Record**
  - Interactive timeline filters (`All Timeline`, `Computer Vision & Triton`, `GenAI & Multimodal`)
  - Complete technical track record: Aster AI, Edubotix, internships, and research
- `/project-visionfacts` — **Visionfacts.AI Case Study**
  - In-depth architectural case study on 150+ stream RTSP video analytics, Triton + TensorRT zero-copy CUDA shared memory
- `/project-analytics-agent` — **Visionfacts Analytics AI Agent Case Study**
  - Multi-agent autonomous reporting system using LangChain, MCP tools, and PostgreSQL
- `/project-edubotix` — **Edubotix Case Study**
  - RAG-powered learning assistant with AWS Bedrock and Qdrant vector database
- `/contact` — **Contact & Technical Advisory**
  - Terminal-inspired contact view, copy-to-clipboard email integration, and inquiry form

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom Obsidian Tensor dark theme
- **Typography:** Inter & JetBrains Mono via Google Fonts
- **Icons:** Google Material Symbols Outlined

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Production Build

```bash
npm run build
npm run start
```
