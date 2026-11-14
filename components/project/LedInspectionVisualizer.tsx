'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { CountUp } from '@/components/motion/CountUp';
import { useMotionOK } from '@/lib/useMotionOK';
import { LED_TOLERANCE_SPECS } from '@/content/caseStudiesData';

type StationView = 'station1' | 'station2' | 'specs';

export function LedInspectionVisualizer() {
  const [activeStation, setActiveStation] = useState<StationView>('station2');
  const [polarityFlipped, setPolarityFlipped] = useState(false);
  const [simulateReject, setSimulateReject] = useState(false);
  const motionOK = useMotionOK();

  // Station 2 live telemetry based on pass vs reject simulation
  const telemetry = simulateReject
    ? {
        angle: 92.4,
        radius: 1.34,
        topDistance: 2.625,
        bottomDistance: 15.28,
        status: 'FAIL // REJECTED',
        statusColor: 'text-secondary',
        statusBg: 'bg-secondary/10 border-secondary',
        action: 'PNEUMATIC SOLENOID FIRED · BLOWN TO REJECT BIN',
        plcSignal: 'PIN_05 (REJECT_SOLENOID): HIGH (24V)',
        failedParams: ['Bend Angle (> 91.0°)', 'Corner Radius (> 1.27 mm)', 'Top Distance (> 2.5146 mm)', 'Bottom Distance (< 15.494 mm)'],
      }
    : {
        angle: 90.18,
        radius: 1.034,
        topDistance: 2.392,
        bottomDistance: 15.731,
        status: 'PASS // COMPLIANT',
        statusColor: 'text-status-success',
        statusBg: 'bg-status-success/10 border-status-success',
        action: 'INSPECTION PASSED · TRANSFERRED TO PACKAGING TAPE',
        plcSignal: 'PIN_04 (INDEX_ADVANCE): HIGH (24V)',
        failedParams: [],
      };

  return (
    <div className="relative w-full bg-paper-sunken border border-line flex flex-col">
      {/* Corner brackets */}
      <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌜</span>
      <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌝</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌞</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌟</span>

      {/* Control Header & Station Tabs */}
      <div className="p-4 sm:p-5 bg-paper-raised border-b border-line flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold font-mono">
              SS AUTOMATION // DUAL-STATION BASLER MACHINE VISION
            </span>
          </div>
          <span className="font-body-md text-xs text-ink-muted">
            Pure OpenCV edge &amp; contour metrology · 50–250ms polarity sort · 90° lead bend verification
          </span>
        </div>

        {/* Station Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-paper-sunken p-1 border border-line">
          <button
            type="button"
            onClick={() => setActiveStation('station1')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeStation === 'station1'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            01 · Station 1: Polarity (50–250ms)
          </button>
          <button
            type="button"
            onClick={() => setActiveStation('station2')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeStation === 'station2'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            02 · Station 2: 90° Bend Metrology
          </button>
          <button
            type="button"
            onClick={() => setActiveStation('specs')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeStation === 'specs'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            03 · Tolerance Matrix
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <AnimatePresence mode="wait">
          {/* ================================================================= */}
          {/* STATION 1: POLARITY DETECTION & PICK-AND-PLACE GUIDANCE */}
          {/* ================================================================= */}
          {activeStation === 'station1' && (
            <m.div
              key="station1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Top HUD Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-paper-raised border border-line text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-status-success" />
                  <span className="font-bold text-primary">BASLER CAMERA #01 // VIBRATORY FEEDER ALIGNMENT NEST</span>
                </div>
                <div className="flex items-center gap-3 text-ink-muted text-[11px]">
                  <span>EXPOSURE: 180 µs (GLOBAL STROBE)</span>
                  <span>·</span>
                  <span className="text-secondary font-bold">LATENCY: 84 ms (SPEC: 50–250 ms)</span>
                </div>
              </div>

              {/* Station 1 Schematic HUD */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Visual Area (Simulated Camera Frame) */}
                <div className="lg:col-span-7 bg-[#0f0e0c] border border-line p-6 flex flex-col items-center justify-center relative min-h-[300px] overflow-hidden">
                  {/* CCTV Scanline subtle effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none bg-[length:100%_4px]" />

                  {/* Machine Vision Bounding Box Overlay */}
                  <div className="relative border-2 border-dashed border-status-success/70 p-6 flex flex-col items-center bg-[#181612]/60 rounded shadow-inner max-w-sm w-full">
                    <span className="absolute -top-2.5 left-2 px-1.5 bg-[#0f0e0c] font-mono text-[10px] text-status-success font-bold uppercase">
                      OPENCV CONTOUR_01 :: MORPHOLOGY_ROI
                    </span>

                    {/* LED Diagram Schematic */}
                    <div className="flex flex-col items-center gap-1 my-4">
                      {/* Epoxy Dome */}
                      <div className="w-16 h-20 rounded-t-full bg-secondary/80 border-2 border-secondary flex flex-col items-center justify-center relative shadow-lg">
                        <span className="text-[10px] font-mono text-on-secondary font-bold">5mm LED</span>
                        {/* Internal Anvil / Post Flag */}
                        <div className={`absolute bottom-2 flex gap-1.5 ${polarityFlipped ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-2.5 h-4 bg-primary border border-surface text-[8px] flex items-center justify-center text-surface font-mono" title="Anvil (Cathode Flag)">
                            ▲
                          </div>
                          <div className="w-1.5 h-4 bg-primary/70 border border-surface text-[8px] flex items-center justify-center text-surface font-mono" title="Post (Anode Pin)">
                            |
                          </div>
                        </div>
                      </div>

                      {/* Lead Frame Stems */}
                      <div className={`flex gap-6 mt-1 ${polarityFlipped ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Anode Lead (Longer) */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-24 bg-line rounded-b" />
                          <span className="font-mono text-[11px] font-bold text-status-success mt-1">ANODE (+)</span>
                          <span className="font-mono text-[9px] text-ink-muted">Long Lead</span>
                        </div>
                        {/* Cathode Lead (Shorter / Flat) */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-20 bg-line rounded-b" />
                          <span className="font-mono text-[11px] font-bold text-secondary mt-1">CATHODE (-)</span>
                          <span className="font-mono text-[9px] text-ink-muted">Short Lead</span>
                        </div>
                      </div>
                    </div>

                    {/* Detected Orientation Box */}
                    <div className="w-full mt-2 pt-3 border-t border-line/40 flex items-center justify-between font-mono text-xs text-[#F5F2EC]">
                      <span>DETECTED ORIENTATION:</span>
                      <span className="font-bold text-status-success">
                        {polarityFlipped ? 'ANODE_RIGHT / CATHODE_LEFT' : 'ANODE_LEFT / CATHODE_RIGHT'}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Flip Simulation Button */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <button
                      type="button"
                      onClick={() => setPolarityFlipped(!polarityFlipped)}
                      className="px-3 py-1.5 bg-paper-raised hover:bg-surface-container-high border border-line text-primary font-mono text-xs uppercase font-semibold transition-colors"
                    >
                      ↻ Flip Feeder Orientation
                    </button>
                  </div>
                </div>

                {/* Right Side: Engineering Analysis & PLC Handshake */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 bg-paper-raised border border-line">
                  <div className="flex flex-col gap-3">
                    <span className="font-label-timecode text-xs font-bold uppercase text-secondary">
                      STATION 1 SPECIFICATIONS &amp; PIPELINE
                    </span>
                    <h3 className="font-headline-md text-base sm:text-lg font-bold text-primary uppercase">
                      Pure OpenCV Polarity Identification
                    </h3>
                    <p className="font-body-md text-xs sm:text-sm text-ink-muted leading-relaxed">
                      Before bending, the pick-and-place robot must know the exact orientation of each LED. Using morphological contour filtering and bounding-box moments, the system detects lead length asymmetry and internal lead frame anvil geometry in just <strong>84 ms</strong>.
                    </p>

                    {/* Step-by-Step Op Log */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-line text-xs font-mono">
                      <div className="flex items-center justify-between p-2 bg-paper-sunken border border-line">
                        <span className="text-ink-muted">1. Frame Ingest (GigE):</span>
                        <span className="text-primary font-semibold">12 µs capture</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-paper-sunken border border-line">
                        <span className="text-ink-muted">2. cv2.findContours &amp; Moments:</span>
                        <span className="text-primary font-semibold">41 ms processing</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-paper-sunken border border-line">
                        <span className="text-ink-muted">3. Anode/Cathode Delta:</span>
                        <span className="text-status-success font-semibold">Δ +2.48mm verified</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-paper-sunken border border-line">
                        <span className="text-ink-muted">4. PLC Pick Command:</span>
                        <span className="text-secondary font-semibold">PIN_02 HIGH (Execute Grip)</span>
                      </div>
                    </div>
                  </div>

                  {/* Benchmark callout */}
                  <div className="p-3 bg-paper-sunken border-l-2 border-secondary text-xs">
                    <span className="font-mono font-bold text-primary block">TARGET SPEED: 50 – 250 ms</span>
                    <span className="text-ink-muted">Guarantees high-speed pick arm throughput without mechanical line pauses.</span>
                  </div>
                </div>
              </div>
            </m.div>
          )}

          {/* ================================================================= */}
          {/* STATION 2: 90° LEAD BEND METROLOGY & PNEUMATIC DEFECT REJECT */}
          {/* ================================================================= */}
          {activeStation === 'station2' && (
            <m.div
              key="station2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Station 2 Header & Simulation Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-paper-raised border border-line text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${simulateReject ? 'bg-secondary animate-ping' : 'bg-status-success'}`} />
                  <span className="font-bold text-primary">BASLER CAMERA #02 // TELECENTRIC 90° BEND METROLOGY HUD</span>
                </div>
                {/* Pass / Reject Simulation Toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-ink-muted text-[11px] font-sans">Simulate Scenario:</span>
                  <button
                    type="button"
                    onClick={() => setSimulateReject(false)}
                    className={`px-2.5 py-1 text-xs font-mono font-bold uppercase transition-colors ${
                      !simulateReject
                        ? 'bg-status-success text-surface'
                        : 'bg-paper-sunken text-ink-muted hover:text-primary border border-line'
                    }`}
                  >
                    ✓ Normal Spec (PASS)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimulateReject(true)}
                    className={`px-2.5 py-1 text-xs font-mono font-bold uppercase transition-colors ${
                      simulateReject
                        ? 'bg-secondary text-on-secondary'
                        : 'bg-paper-sunken text-ink-muted hover:text-primary border border-line'
                    }`}
                  >
                    ✕ Out of Spec (REJECT)
                  </button>
                </div>
              </div>

              {/* Station 2 Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Telecentric Silhouette View */}
                <div className="lg:col-span-7 bg-[#0f0e0c] border border-line p-6 flex flex-col items-center justify-center relative min-h-[360px] overflow-hidden">
                  {/* Subtle Grid Backlight Background */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Backlit Silhouette of 90-degree bent LED */}
                  <div className="relative w-full max-w-md flex flex-col items-center">
                    {/* SVG Graphic with Telemetry Markers */}
                    <svg viewBox="0 0 320 260" className="w-full max-w-[340px] drop-shadow-md overflow-visible">
                      {/* LED Epoxy Body */}
                      <rect x="20" y="40" width="55" height="40" rx="6" fill="#26241e" stroke="#5a564c" strokeWidth="2" />
                      <text x="47" y="64" fill="#a8a396" fontSize="9" fontFamily="monospace" textAnchor="middle">LED BODY</text>

                      {/* Top Horizontal Lead (Top Distance) */}
                      <path
                        d="M 75 52 L 175 52 Q 190 52 190 67 L 190 230"
                        fill="none"
                        stroke={simulateReject ? '#ff6422' : '#22c55e'}
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 75 68 L 160 68 Q 174 68 174 82 L 174 230"
                        fill="none"
                        stroke={simulateReject ? '#ff6422' : '#22c55e'}
                        strokeWidth="7"
                        strokeLinecap="round"
                      />

                      {/* Dimension 1: Top Distance Bracket */}
                      <line x1="75" y1="28" x2="190" y2="28" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="75" y1="22" x2="75" y2="34" stroke="#38bdf8" strokeWidth="1.5" />
                      <line x1="190" y1="22" x2="190" y2="34" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="132" y="22" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                        Top Dist: {telemetry.topDistance.toFixed(3)}mm
                      </text>

                      {/* Dimension 2: 90° Angle Measurement Arc */}
                      <path
                        d="M 160 52 A 20 20 0 0 1 190 82"
                        fill="none"
                        stroke={simulateReject ? '#ff6422' : '#eab308'}
                        strokeWidth="2"
                      />
                      <text x="215" y="65" fill={simulateReject ? '#ff6422' : '#eab308'} fontSize="11" fontFamily="monospace" fontWeight="bold">
                        ∠ {telemetry.angle.toFixed(1)}°
                      </text>

                      {/* Dimension 3: Bend Radius Callout */}
                      <circle cx="178" cy="64" r="10" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="215" y="85" fill="#c084fc" fontSize="10" fontFamily="monospace">
                        R: {telemetry.radius.toFixed(3)}mm
                      </text>

                      {/* Dimension 4: Bottom Distance (Vertical Lead Length) */}
                      <line x1="210" y1="67" x2="210" y2="230" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="204" y1="67" x2="216" y2="67" stroke="#4ade80" strokeWidth="1.5" />
                      <line x1="204" y1="230" x2="216" y2="230" stroke="#4ade80" strokeWidth="1.5" />
                      <text x="220" y="155" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold" dominantBaseline="middle">
                        Bottom Dist: {telemetry.bottomDistance.toFixed(2)}mm
                      </text>
                    </svg>
                  </div>

                  {/* Status Banner at the bottom of Silhouette */}
                  <div className={`w-full mt-4 p-3 border flex flex-wrap items-center justify-between gap-2 font-mono text-xs ${telemetry.statusBg}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${simulateReject ? 'bg-secondary animate-pulse' : 'bg-status-success'}`} />
                      <span className={`font-bold ${telemetry.statusColor}`}>{telemetry.status}</span>
                    </div>
                    <span className="text-primary font-sans text-xs">{telemetry.action}</span>
                  </div>
                </div>

                {/* Right Side: 4 Telemetry Spec Cards */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 bg-paper-raised border border-line">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-line pb-2">
                      <span className="font-label-timecode text-xs font-bold uppercase text-secondary">
                        STATION 2 LIVE METROLOGY (1–3s)
                      </span>
                      <span className="font-mono text-[11px] text-ink-muted">SUB-PIXEL CANNY</span>
                    </div>

                    {/* 4 Measurement Cards */}
                    <div className="flex flex-col gap-2.5">
                      {/* 1. Bend Angle */}
                      <div className={`p-2.5 border flex items-center justify-between ${
                        telemetry.angle < 89 || telemetry.angle > 91
                          ? 'bg-secondary/10 border-secondary'
                          : 'bg-paper-sunken border-line'
                      }`}>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] uppercase font-bold text-primary">01 · BEND ANGLE</span>
                          <span className="text-[10px] text-ink-muted font-mono">SPEC: 90° (Range: 89° – 91°)</span>
                        </div>
                        <span className={`font-mono text-base font-bold ${
                          telemetry.angle < 89 || telemetry.angle > 91 ? 'text-secondary' : 'text-primary'
                        }`}>
                          {telemetry.angle.toFixed(1)}°
                        </span>
                      </div>

                      {/* 2. Corner Radius */}
                      <div className={`p-2.5 border flex items-center justify-between ${
                        telemetry.radius < 0.762 || telemetry.radius > 1.27
                          ? 'bg-secondary/10 border-secondary'
                          : 'bg-paper-sunken border-line'
                      }`}>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] uppercase font-bold text-primary">02 · CORNER RADIUS</span>
                          <span className="text-[10px] text-ink-muted font-mono">SPEC: 1.016 mm (0.762 – 1.27 mm)</span>
                        </div>
                        <span className={`font-mono text-base font-bold ${
                          telemetry.radius < 0.762 || telemetry.radius > 1.27 ? 'text-secondary' : 'text-primary'
                        }`}>
                          {telemetry.radius.toFixed(3)} mm
                        </span>
                      </div>

                      {/* 3. Top Distance */}
                      <div className={`p-2.5 border flex items-center justify-between ${
                        telemetry.topDistance < 2.2606 || telemetry.topDistance > 2.5146
                          ? 'bg-secondary/10 border-secondary'
                          : 'bg-paper-sunken border-line'
                      }`}>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] uppercase font-bold text-primary">03 · TOP DISTANCE</span>
                          <span className="text-[10px] text-ink-muted font-mono">SPEC: 2.3876 mm (2.2606 – 2.5146 mm)</span>
                        </div>
                        <span className={`font-mono text-base font-bold ${
                          telemetry.topDistance < 2.2606 || telemetry.topDistance > 2.5146 ? 'text-secondary' : 'text-primary'
                        }`}>
                          {telemetry.topDistance.toFixed(3)} mm
                        </span>
                      </div>

                      {/* 4. Bottom Distance */}
                      <div className={`p-2.5 border flex items-center justify-between ${
                        telemetry.bottomDistance < 15.494 || telemetry.bottomDistance > 16.002
                          ? 'bg-secondary/10 border-secondary'
                          : 'bg-paper-sunken border-line'
                      }`}>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] uppercase font-bold text-primary">04 · BOTTOM DISTANCE</span>
                          <span className="text-[10px] text-ink-muted font-mono">SPEC: 15.748 mm (15.494 – 16.002 mm)</span>
                        </div>
                        <span className={`font-mono text-base font-bold ${
                          telemetry.bottomDistance < 15.494 || telemetry.bottomDistance > 16.002 ? 'text-secondary' : 'text-primary'
                        }`}>
                          {telemetry.bottomDistance.toFixed(2)} mm
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PLC Digital I/O State Box */}
                  <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1 text-xs font-mono">
                    <span className="text-ink-muted font-bold">PLC DIGITAL I/O ACTUATION:</span>
                    <span className={simulateReject ? 'text-secondary font-bold' : 'text-status-success font-bold'}>
                      {telemetry.plcSignal}
                    </span>
                  </div>
                </div>
              </div>
            </m.div>
          )}

          {/* ================================================================= */}
          {/* TAB 03: TOLERANCE MATRIX (Mirroring physical engineering specs) */}
          {/* ================================================================= */}
          {activeStation === 'specs' && (
            <m.div
              key="specs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1">
                <span className="font-label-timecode text-xs uppercase text-secondary font-bold">
                  PRODUCTION METROLOGY SPECIFICATIONS
                </span>
                <h3 className="font-headline-md text-lg sm:text-xl font-bold text-primary uppercase">
                  Lead Forming Tolerance Limits &amp; Calibrated Specs
                </h3>
                <p className="font-body-md text-xs sm:text-sm text-ink-muted">
                  Direct production tolerances calibrated against optical micrometer standards. If any dimension breaches the Lower or Upper Limit, the part is diverted to the reject bin.
                </p>
              </div>

              {/* Exact Tolerance Table from Factory Specs */}
              <div className="w-full overflow-x-auto pb-1 border border-line">
                <table className="w-full min-w-[560px] text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="bg-paper-raised border-b border-line text-primary">
                      <th className="p-3 font-bold uppercase">Measure Parameter</th>
                      <th className="p-3 font-bold uppercase">Radius (MM)</th>
                      <th className="p-3 font-bold uppercase">Angle (Degrees)</th>
                      <th className="p-3 font-bold uppercase">Top Distance (MM)</th>
                      <th className="p-3 font-bold uppercase">Bottom Distance (MM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr className="bg-paper-sunken/60 hover:bg-paper-sunken transition-colors">
                      <td className="p-3 font-bold text-ink-muted">Upper Limit</td>
                      <td className="p-3 font-bold text-primary">1.27</td>
                      <td className="p-3 font-bold text-primary">91°</td>
                      <td className="p-3 font-bold text-primary">2.5146</td>
                      <td className="p-3 font-bold text-primary">16.002</td>
                    </tr>
                    <tr className="bg-secondary/5 font-semibold hover:bg-secondary/10 transition-colors">
                      <td className="p-3 font-bold text-secondary">SPEC (Target Nominal)</td>
                      <td className="p-3 font-bold text-secondary">1.016</td>
                      <td className="p-3 font-bold text-secondary">90°</td>
                      <td className="p-3 font-bold text-secondary">2.3876</td>
                      <td className="p-3 font-bold text-secondary">15.748</td>
                    </tr>
                    <tr className="bg-paper-sunken/60 hover:bg-paper-sunken transition-colors">
                      <td className="p-3 font-bold text-ink-muted">Lower Limit</td>
                      <td className="p-3 font-bold text-primary">0.762</td>
                      <td className="p-3 font-bold text-primary">89°</td>
                      <td className="p-3 font-bold text-primary">2.2606</td>
                      <td className="p-3 font-bold text-primary">15.494</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Parameter Deep-Dive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {LED_TOLERANCE_SPECS.map((spec) => (
                  <div key={spec.parameter} className="p-4 bg-paper-raised border border-line flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-xs font-bold uppercase text-primary">{spec.parameter}</span>
                        <span className="px-2 py-0.5 bg-paper-sunken border border-line text-[10px] font-mono text-secondary font-bold">
                          {spec.toleranceLabel}
                        </span>
                      </div>
                      <p className="font-body-md text-xs text-ink-muted leading-relaxed mt-1">
                        {spec.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-line flex items-center justify-between text-xs font-mono">
                      <span className="text-ink-muted">Nominal SPEC:</span>
                      <span className="font-bold text-primary">{spec.spec} {spec.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
