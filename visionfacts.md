# VisionFacts.ai — Intelligent CCTV Video Analytics Platform

**Project Category:** Computer Vision | Deep Learning | Real-Time Video Analytics | Edge AI | Multi-GPU Inference

**Industries:** Manufacturing & Retail

## 1. Project Overview

VisionFacts.ai is an AI-powered CCTV video analytics platform designed for manufacturing and retail industries. It transforms traditional CCTV surveillance systems into intelligent monitoring solutions capable of detecting safety violations, identifying security threats, monitoring operational activities, and generating actionable business insights from live video footage.

Traditional CCTV systems primarily serve as passive surveillance tools, requiring security personnel to continuously monitor video feeds. VisionFacts.ai addresses this limitation by applying computer vision and deep learning techniques to automatically analyze live camera streams and identify predefined events, behaviors, and operational patterns.

The platform supports more than 100 CCTV cameras, with multiple AI analytics use cases running on individual camera streams. It is designed to operate efficiently on available hardware infrastructure while maintaining high inference throughput, low processing latency, and reliable real-time monitoring.

The platform also supports customized AI use cases based on industry-specific and client-specific requirements.

## 2. Problem Statement

Manufacturing plants and retail environments deploy CCTV cameras extensively for security, safety, and operational monitoring. However, conventional surveillance systems face several limitations:

- Manual monitoring: Security teams cannot continuously observe hundreds of camera feeds.
- Delayed incident identification: Safety violations and security incidents may remain unnoticed.
- Limited operational intelligence: CCTV footage contains valuable information about customer behavior, staff activity, occupancy, and movement patterns.
- High computational requirements: Running multiple deep learning models across hundreds of cameras requires significant CPU, GPU, and memory resources.
- Real-world variability: Camera angles, lighting, object sizes, occlusions, and environmental changes affect detection reliability.
- System scalability: Each camera may require multiple independent analytics use cases, increasing computational workload.

The primary engineering challenge was to develop a scalable, resource-efficient, and reliable video analytics platform capable of processing multiple live CCTV streams and supporting multiple AI use cases per camera.

## 3. AI Analytics Use Cases

### Manufacturing Industry

| Use Case | Description |
|---|---|
| PPE Violation Detection | Identifies workers not wearing required personal protective equipment in designated areas. |
| Intrusion Detection | Detects unauthorized human presence in restricted areas or configured time periods. |
| Distress & SOS Signal Detection | Identifies predefined human gestures or movements indicating distress or requests for assistance. |
| Fire & Smoke Detection | Detects visual indications of fire or smoke. |
| Forklift Detection | Detects forklifts operating within industrial facilities. |
| Vehicle Detection & Tracking | Detects and tracks vehicle movement. |
| Helmet & Seatbelt Detection | Identifies missing helmets or seatbelts in applicable safety scenarios. |
| Mobile Usage Detection | Detects mobile phone usage in restricted or safety-sensitive areas. |
| Fall Detection | Identifies potential human fall incidents using visual and pose-related information. |
| Wrong-Way Detection | Detects vehicles moving against configured permitted directions. |
| Geofence Detection | Monitors objects or people entering or leaving configured virtual boundaries. |

### Retail Industry

| Use Case | Description |
|---|---|
| Staff Attendance | Uses face recognition to identify registered staff members and support attendance monitoring. |
| Queue Detection | Identifies queues forming in designated store areas. |
| Wait Time Monitoring | Estimates customer waiting time in monitored queues. |
| Occupancy Monitoring | Tracks the number of people present within configured areas. |
| Heatmap Analytics | Visualizes movement and activity patterns to identify high-traffic areas. |
| Footfall Counting | Counts people entering and exiting retail locations. |
| Customer Classification | Supports differentiation between staff, visitors, and customers using configured identification and business rules. |
| Grouped Customer Counting | Supports group-aware footfall analytics to identify customers entering together. |

### Custom AI Use Cases

In addition to predefined analytics modules, the platform supports custom use-case development based on client requirements, camera configurations, operational rules, and industry-specific workflows.

## 4. Technology Stack

**Programming & Core Libraries**
- Python
- OpenCV
- PyTorch
- Python Multiprocessing

**Deep Learning Models**
- YOLOv11 / YOLO26 — Object detection
- YOLOv11-Pose / YOLO26-Pose — Human pose estimation
- RetinaFace — Face detection
- ArcFace — Face recognition and embedding extraction
- DINOv3 — Visual feature representation
- Gemma 3 E4B — Vision-language and generative AI capabilities

**Model Optimization & Inference**
- NVIDIA TensorRT
- NVIDIA Triton Inference Server
- ONNX
- CUDA
- CUDA Shared Memory

**Database & Supporting Services**
- MongoDB
- Redis
- ChromaDB
- Ollama

**Deployment & Monitoring**
- Docker
- Prometheus
- Grafana
- Nuitka

## 5. Core System Architecture

VisionFacts.ai follows a multi-process, multi-camera architecture with centralized AI inference and modular use-case processing.

### Step 1 — Dynamic Camera Configuration

When the application starts, it communicates with a backend API to retrieve registered CCTV camera details and their associated configurations.

These configurations determine which cameras should be processed and which AI analytics use cases are enabled for each camera.

### Step 2 — Process-Based Camera Isolation

After retrieving camera configurations, the application creates a dedicated Python process for each camera using multiprocessing.

Each process independently manages the processing lifecycle of its assigned CCTV stream.

Benefits:

- Isolates camera-specific processing workloads.
- Reduces the impact of individual stream failures on other camera processes.
- Supports concurrent processing of multiple camera streams.
- Enables independent camera-level analytics execution.

### Step 3 — RTSP Video Stream Acquisition

Each camera process establishes a connection to its configured RTSP video stream and continuously retrieves frames.

These frames serve as input for the AI inference workflow.

### Step 4 — Primary Object Detection

Each acquired frame is passed to the primary object detection stage.

The detector identifies relevant objects such as people, vehicles, and other configured classes.

The output contains structured predictions, including object classes, bounding boxes, and confidence scores.

These primary detection results are shared with subsequent use-case processing modules to avoid repeating common detection operations unnecessarily.

### Step 5 — Multi-Use-Case Processing

The camera process forwards the video frame and primary detection results to the use-case management layer.

Each enabled use case evaluates its own detection requirements, spatial rules, temporal conditions, and business logic.

Examples:

- Intrusion: Checks detected people against restricted areas and configured schedules.
- PPE: Evaluates protective equipment and whether the person is within a relevant working area.
- Wrong-Way: Evaluates vehicle movement against configured directions and regions.

This modular architecture allows a single camera stream to support multiple analytics use cases.

### Step 6 — AI Event Generation & Storage

When a use-case condition is satisfied, the system generates an AI event record and stores it in MongoDB.

### Step 7 — Independent Event Delivery

A separate post-event service monitors MongoDB for generated events, retrieves relevant records, and sends them to the backend through API requests.

This separates real-time video analytics from external event delivery.

### Step 8 — Continuous Real-Time Processing

The camera processes continuously repeat frame acquisition, inference, use-case evaluation, and event generation while their streams are active.

## 6. Engineering Challenges & Technical Solutions

### Challenge 1 — Multiple AI Use Cases on a Single Camera

**Problem**

A single CCTV camera may require multiple analytics functions simultaneously, such as intrusion detection, PPE monitoring, mobile usage detection, and fall detection.

Running a separate full video processing and object detection pipeline for every use case creates redundant computations and increases CPU and GPU resource consumption.

**Solution: Shared Primary Detection Architecture**

The system uses a shared primary object detection stage followed by modular use-case processing.

The primary detector identifies relevant objects once for the processed frame, and its output is passed to enabled use-case modules.

Individual modules evaluate their respective conditions and perform any additional processing required.

**Engineering Value**

- Reduces redundant object detection operations.
- Supports multiple analytics modules per camera.
- Improves computational efficiency.
- Simplifies use-case management.

### Challenge 2 — Scaling Beyond 100 CCTV Cameras

**Problem**

Processing more than 100 simultaneous RTSP streams introduces significant resource management challenges.

Each camera requires video acquisition, decoding, frame processing, inference, and analytics execution.

**Solution: Process-Based Camera Isolation and Centralized Inference**

The application uses independent camera processes for stream management and a centralized inference infrastructure through NVIDIA Triton.

This separates video acquisition and analytics execution from model serving.

**Engineering Value**

Provides a foundation for scaling camera workloads without loading an independent copy of every YOLO model into GPU memory for every camera.

### Challenge 3 — High-FPS Video Processing on Limited Hardware

**Problem**

Real-time CCTV analytics requires continuous frame acquisition, preprocessing, inference, and postprocessing.

Even when the detection model is optimized, CPU-GPU data transfers, repeated memory allocations, and preprocessing overhead can limit the number of frames processed per second.

**Solution: GPU and Memory-Level Optimization**

Several optimizations were introduced to improve video processing throughput.

**A. TensorRT Optimization**

Converted and optimized supported deep learning models for NVIDIA GPU inference using TensorRT.

TensorRT optimizes model execution to improve inference efficiency and reduce execution overhead compared with conventional framework-based inference.

**B. GPU Preprocessing**

Moved supported image preprocessing operations closer to the GPU inference pipeline.

This reduces unnecessary CPU-side processing and avoids repeated CPU-GPU data movement where GPU preprocessing can be used.

**C. CUDA Shared Memory**

Used CUDA Shared Memory for communication between the application and Triton inference server.

Instead of repeatedly transferring inference input and output through conventional request buffers, shared-memory mechanisms allow the services to exchange data through shared memory regions.

This reduces data transfer overhead and improves inference pipeline efficiency.

**D. Pinned Memory**

Used page-locked host memory for supported CPU-GPU data transfers.

Pinned memory allows more efficient asynchronous transfers and helps reduce CPU blocking during memory operations.

**Engineering Value**

These optimizations target different stages of the processing pipeline:

- TensorRT improves model execution efficiency.
- GPU preprocessing reduces CPU-side processing overhead.
- CUDA Shared Memory reduces inference communication overhead.
- Pinned memory improves supported host-to-device data transfers.

Together, these techniques improve the system's ability to process higher frame rates and support more concurrent video workloads.

### Challenge 4 — GPU Memory Consumption from Per-Camera Model Loading

**Problem**

One of the major architectural challenges was GPU memory consumption when running YOLO models independently inside every camera process.

A single YOLO model instance could consume approximately 200–300 MB of GPU memory.

For example:

| Camera Count | Estimated Model VRAM at 250 MB per Camera |
|---:|---:|
| 10 | 2.5 GB |
| 25 | 6.25 GB |
| 50 | 12.5 GB |
| 100 | 25 GB |
| 130 | 32.5 GB |

These are illustrative estimates assuming one equivalent model allocation per camera, not measurements of every camera's total memory consumption.

As the number of cameras increased, GPU memory requirements grew significantly.

Deploying a high-memory GPU server simply to accommodate repeated model instances would increase infrastructure costs.

**Solution: Centralized Model Serving Using NVIDIA Triton Inference Server**

To address this problem, the architecture was changed to use NVIDIA Triton Inference Server as a centralized model-serving layer.

Instead of independently loading YOLO models into every camera process, the required models are deployed once in Triton's model repository.

Camera processes send inference requests to Triton, which manages model execution and returns prediction results.

**How it works:**

1. Load supported YOLO models into the Triton model repository.
2. Initialize the Triton inference server.
3. Camera processes acquire their respective RTSP frames.
4. Each process submits inference requests to Triton.
5. Triton executes the corresponding model.
6. Inference results are returned to the requesting camera process.
7. Each process continues its own use-case evaluation.

**Production Example**

In the latest reported deployment, the platform handled 130 CCTV cameras while the models were deployed centrally through Triton.

The reported Triton model-serving GPU memory consumption was approximately 2.5 GB.

This demonstrates the difference between repeatedly loading model instances in camera processes and using centralized model serving.

The 2.5 GB figure represents the reported Triton allocation in that deployment, not the complete GPU memory consumption of all 130 camera pipelines.

**Engineering Value**

- Avoids unnecessary model duplication across camera processes.
- Reduces GPU memory overhead associated with independent model loading.
- Allows multiple camera processes to share centrally deployed models.
- Improves infrastructure cost efficiency.
- Provides centralized model lifecycle and inference management.

### Challenge 5 — Multi-GPU Camera Allocation and VRAM Management

**Problem**

Different clients may have different GPU server configurations.

Some servers have one GPU, while others have multiple GPUs.

A fixed camera-to-GPU allocation strategy cannot efficiently accommodate different hardware configurations and available GPU memory.

Assigning too many camera workloads to a GPU can result in CUDA Out-of-Memory errors and application instability.

**Solution: Dynamic Multi-GPU VRAM Scheduling**

Implemented a GPU-aware camera allocation strategy that calculates the available camera capacity for each detected GPU before starting camera processes.

The scheduler considers:

- Total GPU memory.
- Currently available GPU memory.
- Existing GPU workloads.
- Configured safety buffer.
- Estimated GPU memory budget per camera.

#### 5.1 Core Mathematical Formula

For each detected GPU:

**Usable VRAM**

Usable VRAM = Free VRAM − Safety Buffer

**Camera Capacity**

Camera Capacity = Floor(Usable VRAM / Estimated VRAM per Camera)

Current scheduling configuration:

| Parameter | Value |
|---|---:|
| Safety Buffer | 1,500 MB |
| Estimated VRAM per Camera | 290 MB |

These values are configurable according to the workload.

#### 5.2 Example: Two NVIDIA L4 GPUs

Assume a server contains two NVIDIA L4 GPUs, each with 24 GB of VRAM.

**GPU 0 — Dedicated to Camera Pipelines**

| Parameter | Value |
|---|---:|
| Total VRAM | 24,000 MB |
| Pre-used VRAM | ~0 MB |
| Safety Buffer | 1,500 MB |
| Usable VRAM | 22,500 MB |
| Estimated VRAM per Camera | 290 MB |
| Camera Capacity | 77 |

Calculation:

22,500 / 290 = 77.58

Therefore, the scheduler allocates 77 camera slots.

**GPU 1 — Shared with Triton and Ollama**

| Parameter | Value |
|---|---:|
| Total VRAM | 24,000 MB |
| Existing Workloads | ~8,500 MB |
| Free VRAM | 15,500 MB |
| Safety Buffer | 1,500 MB |
| Usable VRAM | 14,000 MB |
| Estimated VRAM per Camera | 290 MB |
| Camera Capacity | 48 |

Calculation:

14,000 / 290 = 48.27

Therefore, the scheduler allocates 48 camera slots.

**Total Estimated System Capacity**

77 + 48 = 125 camera slots.

#### 5.3 Camera Capacity Comparison

| VRAM Budget per Camera | GPU 0 | GPU 1 | Total Capacity |
|---:|---:|---:|---:|
| 280 MB | 80 | 50 | 130 |
| 290 MB | 77 | 48 | 125 |
| 300 MB | 75 | 46 | 121 |
| 350 MB | 64 | 40 | 104 |

The estimated budget can be tuned according to the analytics workload.

For example:

- Lightweight workloads such as basic human or vehicle detection may require a lower estimated budget.
- Heavy workloads involving PPE, pose estimation, and additional model execution may require a higher budget.
- Higher safety buffers can be configured when GPU memory usage fluctuates significantly.

#### 5.4 Dynamic Startup Allocation Workflow

When the application starts:

1. Detect available NVIDIA GPUs.
2. Query currently free GPU memory using `torch.cuda.mem_get_info()`.
3. Subtract the configured safety buffer.
4. Calculate camera slots for each GPU.
5. Allocate camera workloads to available GPU capacity.
6. Continue allocation on subsequent GPUs when the previous GPU reaches its capacity.
7. If the total camera workload exceeds the available capacity, mark excess cameras as unavailable rather than starting workloads that exceed the configured memory budget.

The relevant configuration is maintained in YAML files.

Example:

```yaml
# Multi-GPU VRAM scheduling
vram_buffer_mb: 1500.0
est_camera_vram_mb: 290.0
```

**Engineering Value**

- Adapts to different client GPU configurations.
- Uses available VRAM instead of relying on fixed camera limits.
- Reduces the risk of CUDA Out-of-Memory errors.
- Supports camera distribution across multiple GPUs.
- Helps deploy the platform on different hardware configurations without manually calculating camera assignments each time.

Note: Camera capacity is an estimated scheduling budget, not a guaranteed FPS or performance benchmark. Actual capacity must be validated under the enabled models, frame rates, batch sizes, and camera workloads.

### Challenge 6 — Client-Side Deployment and Intellectual Property Protection

**Problem**

VisionFacts.ai is deployed on client-owned GPU servers because client security policies require video processing and analytics infrastructure to operate within their own environments.

This introduces an additional challenge: deploying the application on external infrastructure without exposing proprietary source code, business logic, and custom algorithms.

Clients need to maintain control over their GPU servers, while the development team needs to protect its intellectual property.

**Solution: Nuitka-Based Compilation and Dockerized Deployment**

Developed a production packaging workflow using Nuitka to compile Python application modules into native C-extension shared object binaries (`.so`).

The deployment process separates development, packaging, and production environments.

#### 6.1 Build Pipeline

1. Develop and maintain the application using Python.
2. Compile application modules and entry points using Nuitka.
3. Generate compiled `.so` binaries.
4. Copy the required configurations, model assets, and supporting files.
5. Build the production Docker image.
6. Export and compress the Docker image.
7. Prepare deployment manifests and scripts.
8. Transfer the release bundle to the client server.

#### 6.2 Production Deployment

The client server requires the supported operating system, NVIDIA drivers, GPU container runtime, Docker, and Docker Compose.

The deployment workflow:

1. Transfer the release archive to the client GPU server.
2. Extract the deployment bundle.
3. Load the packaged Docker image.
4. Verify GPU accessibility.
5. Launch application services using Docker Compose.
6. Verify container health and service logs.

The client does not need the original development environment or the complete Python source repository to run the packaged application.

#### 6.3 Application Update Workflow

Developed a repeatable update procedure to deploy new versions without manually rebuilding the entire client environment.

The workflow includes:

- Recompiling updated application modules.
- Generating a new Docker image.
- Packaging the updated release.
- Transferring the update bundle.
- Loading the new image on the client server.
- Recreating the required application containers.
- Verifying service health and logs.

Persistent services such as databases and inference infrastructure can remain running when they do not require changes.

#### 6.4 Deployment Architecture

The production environment includes separate services for:

| Service | Responsibility |
|---|---|
| Multi-camera Analytics | RTSP processing and real-time AI analytics |
| Post-event Service | Asynchronous event delivery to backend APIs |
| Gemma Consumer | LLM-based scene and event summarization |
| Computer Vision API | Backend gateway and video-related API functionality |
| Triton Inference Server | Centralized deep learning inference |
| MongoDB | AI event storage and metadata |
| Redis | Supporting inter-process communication and data exchange |
| ChromaDB | Vector storage for embedding-related functionality |
| Ollama | Local LLM serving |
| Prometheus | Metrics collection |
| Grafana | System and performance visualization |

**Engineering Value**

- Supports on-premises client deployment.
- Protects proprietary application source code through compiled binaries.
- Provides repeatable production packaging.
- Simplifies software updates.
- Supports deployment across different client-owned GPU environments.

Nuitka compilation and binary stripping increase the effort required to inspect or reverse engineer the application, but they should not be described as providing absolute protection against reverse engineering. Credentials, API secrets, and sensitive configuration must also be managed separately.

## 7. RTSP Streaming Reliability

RTSP streaming is a critical part of the real-time analytics pipeline.

Every camera must continuously provide valid frames for downstream detection and event generation.

The main challenges include:

- Camera disconnections.
- Network interruptions.
- Invalid or incomplete frames.
- Stream decoding failures.
- Camera-specific connection issues.
- Reconnection and recovery management.

The process-isolated architecture helps contain camera-specific failures. Camera-level stream validation and recovery mechanisms are important to maintain continuous processing without unnecessarily affecting other cameras.

## 8. Performance Monitoring & Observability

The platform uses Prometheus and Grafana to monitor infrastructure and inference performance.

Important monitoring areas include:

- GPU memory utilization.
- GPU utilization.
- CPU utilization.
- Camera processing activity.
- Inference request rate.
- Inference latency.
- Successful inference requests.
- Service availability.

Reported inference performance comparisons from the optimization work:

| Metric | Before | After |
|---|---:|---:|
| Inference Request Rate | ~90–100 requests/sec | ~170–180 requests/sec |
| Total Inference Latency | ~500–750 ms | ~100–200 ms |

These are reported benchmark observations. The final portfolio should document the benchmark configuration and measurement conditions to make the comparison reproducible.

## 9. Project Impact

VisionFacts.ai demonstrates the practical application of computer vision and deep learning in industrial and retail environments.

The platform brings together:

- Multi-camera video processing.
- Multiple AI analytics use cases.
- Centralized model serving.
- GPU-optimized inference.
- Dynamic multi-GPU resource scheduling.
- Event-driven backend integration.
- On-premises production deployment.
- Performance monitoring and observability.

Its primary engineering goals are:

**Scalability:** Supporting more than 100 concurrent CCTV cameras with multiple analytics use cases.

**Efficiency:** Improving inference throughput and managing GPU resources efficiently.

**Reliability:** Maintaining continuous camera processing and delivering AI-generated events to downstream systems.

**Deployment flexibility:** Supporting different client-owned GPU server configurations.

**Security:** Protecting proprietary application logic through compiled deployment packages.

## 10. My Engineering Contributions

My work across the project covers several areas of computer vision and production engineering:

- Developed and maintained real-time CCTV analytics pipelines using Python and OpenCV.
- Implemented process-based camera isolation using Python multiprocessing.
- Integrated object detection, pose estimation, face detection, and face recognition models.
- Designed modular multi-use-case management for individual camera streams.
- Integrated NVIDIA Triton Inference Server for centralized model serving.
- Optimized model inference using TensorRT.
- Implemented CUDA Shared Memory-based inference communication.
- Worked on GPU preprocessing and pinned memory optimization.
- Developed dynamic multi-GPU camera allocation based on available VRAM.
- Implemented MongoDB-based AI event storage and asynchronous API delivery.
- Built Docker-based production deployment and update workflows.
- Used Nuitka to compile Python application modules for IP-conscious client deployment.
- Implemented performance monitoring using Prometheus and Grafana.
- Investigated and optimized real-world streaming, inference, and hardware resource issues.

## 11. Key Engineering Learnings

This project provided experience beyond conventional deep learning model development.

Key areas of engineering learning include:

- Building scalable real-time video processing architectures.
- Managing hundreds of concurrent video streams.
- Designing shared inference infrastructure.
- Optimizing GPU memory and data transfer.
- Distributing workloads across multiple GPUs.
- Balancing throughput, latency, and resource consumption.
- Developing fault-isolated camera processing.
- Deploying AI applications within client-owned infrastructure.
- Managing production application updates and software protection.

## 12. Future Improvements

Potential future development areas include:

- More adaptive GPU scheduling based on actual workload and memory consumption.
- Advanced RTSP health monitoring and automatic recovery.
- Dynamic frame-rate allocation according to camera activity and use-case priority.
- Improved event validation and false-positive reduction.
- Better cross-camera person and vehicle tracking.
- Video-language models for natural-language video understanding.
- Automated model evaluation and retraining pipelines.
- Further optimization of multi-camera inference throughput.