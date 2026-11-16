'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { CountUp } from '@/components/motion/CountUp';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';
import { LED_TOLERANCE_SPECS } from '@/content/caseStudiesData';
import { LedBendSVG } from './LedBendSVG';

type StationView = 'station1' | 'station2' | 'specs';

interface LedToleranceBarProps {
  label: string;
  measured: number;
  nominal: number;
  tolerance: number;
  unit: string;
  minScale: number;
  maxScale: number;
  decimals?: number;
  step: number;
  loopKey: number;
  motionOK: boolean;
}

function LedToleranceBar({
  label,
  measured,
  nominal,
  tolerance,
  unit,
  minScale,
  maxScale,
  decimals = 3,
  step,
  loopKey,
  motionOK,
}: LedToleranceBarProps) {
  const minSpec = nominal - tolerance;
  const maxSpec = nominal + tolerance;
  const inSpec = measured >= minSpec && measured <= maxSpec;

  const specLeftPct = Math.max(0, Math.min(100, ((minSpec - minScale) / (maxScale - minScale)) * 100));
  const specWidthPct = Math.max(0, Math.min(100 - specLeftPct, ((maxSpec - minSpec) / (maxScale - minScale)) * 100));
  const markerPct = Math.max(0, Math.min(100, ((measured - minScale) / (maxScale - minScale)) * 100));

  const isCounted = step >= 2 || !motionOK;

  return (
    <div className="flex flex-col gap-1 py-1.5">
      <div className="flex justify-between items-baseline text-xs font-mono">
        <span className="text-on-surface font-semibold">{label}</span>
        <div className="flex items-center gap-2">
          <span className={inSpec ? 'text-status-success font-bold' : 'text-status-error font-bold'}>
            {isCounted ? (
              <CountUp
                key={`${loopKey}-${label}`}
                value={`${measured.toFixed(decimals)}${unit}`}
                duration={0.6}
              />
            ) : (
              `0.${'0'.repeat(decimals)}${unit}`
            )}
          </span>
          <span
            className={`text-xs sm:text-[11px] font-bold px-1.5 py-0.5 rounded uppercase ${
              inSpec ? 'bg-status-success/15 text-status-success' : 'bg-status-error/15 text-status-error'
            }`}
          >
            {inSpec ? 'IN SPEC' : 'FAULT'}
          </span>
        </div>
      </div>

      {/* Visual tolerance bar track */}
      <div className="relative w-full h-2.5 bg-paper-sunken border border-line rounded-sm overflow-hidden flex items-center">
        {/* Nominal center guide line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-on-surface/25 z-0"
          style={{ left: `${((nominal - minScale) / (maxScale - minScale)) * 100}%` }}
        />

        {/* Spec band highlight */}
        <div
          className="absolute top-0 bottom-0 bg-primary/15 border-x border-primary/30 z-0"
          style={{ left: `${specLeftPct}%`, width: `${specWidthPct}%` }}
        />

        {/* Measured marker dot */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 border border-paper-raised transition-all ${
            inSpec
              ? 'bg-status-success shadow-[0_0_4px_rgba(31,138,76,0.8)]'
              : 'bg-status-error shadow-[0_0_4px_rgba(211,47,47,0.8)]'
          }`}
          style={{ left: `${isCounted ? markerPct : 0}%` }}
        />
      </div>

      <div className="flex justify-between text-xs sm:text-[11px] font-mono text-ink-muted">
        <span>{minScale.toFixed(decimals <= 2 ? 1 : 2)}{unit}</span>
        <span>SPEC: {nominal}{unit} ±{tolerance}{unit}</span>
        <span>{maxScale.toFixed(decimals <= 2 ? 1 : 2)}{unit}</span>
      </div>
    </div>
  );
}

export function LedInspectionVisualizer() {
  const [activeStation, setActiveStation] = useState<StationView>('station2');
  const [polarityFlipped, setPolarityFlipped] = useState(false);
  const [simulateReject, setSimulateReject] = useState(false);
  const [inView, setInView] = useState(true);
  const [loopKey, setLoopKey] = useState(0);
  const [step, setStep] = useState(4); // 0 = scan, 1 = edge pts, 2 = chips countup, 3 = stamp, 4 = plc

  const containerRef = useRef<HTMLDivElement>(null);
  const motionOK = useMotionOK();
  const isVisible = useDocumentVisible();

  // In-view observer for pausing continuous loop when scrolled off-screen
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Station 2 inspection loop orchestration (~5s cycle)
  useEffect(() => {
    if (!motionOK) {
      setStep(4);
      return;
    }
    if (activeStation !== 'station2' || !inView || !isVisible) {
      return;
    }

    setStep(0);
    const t1 = setTimeout(() => setStep(1), 400);   // Edge points staggered fade in
    const t2 = setTimeout(() => setStep(2), 1200);  // Four dimension chips count up
    const t3 = setTimeout(() => setStep(3), 1500);  // PASS / REJECT stamp fades in
    const t4 = setTimeout(() => setStep(4), 1800);  // PLC row pulses once
    const tLoop = setTimeout(() => {
      setLoopKey((k) => k + 1);
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tLoop);
    };
  }, [loopKey, inView, isVisible, motionOK, activeStation]);

  const handleReplay = useCallback(() => {
    setLoopKey((k) => k + 1);
  }, []);

  // Station 2 live telemetry based on pass vs reject simulation
  const telemetry = simulateReject
    ? {
        angle: 92.4,
        radius: 1.34,
        topDistance: 2.625,
        bottomDistance: 15.28,
        status: 'FAIL // REJECTED',
        statusColor: 'text-status-error',
        statusBg: 'bg-status-error/10 border-status-error',
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
    <div ref={containerRef} className="relative w-full bg-paper-sunken border border-line flex flex-col">
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
                  <span
                    className={`w-2 h-2 rounded-full ${
                      simulateReject ? 'bg-status-error animate-ping' : 'bg-status-success'
                    }`}
                  />
                  <span className="font-bold text-primary">BASLER CAMERA #02 // TELECENTRIC 90° BEND METROLOGY HUD</span>
                </div>
                {/* Segmented Control NORMAL | OUT OF SPEC + Replay button */}
                <div className="flex items-center gap-2">
                  <div
                    role="group"
                    aria-label="Simulation Scenario"
                    className="inline-flex p-1 bg-paper-sunken border border-line"
                  >
                    <button
                      type="button"
                      aria-pressed={!simulateReject}
                      onClick={() => {
                        setSimulateReject(false);
                        handleReplay();
                      }}
                      className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
                        !simulateReject
                          ? 'bg-primary text-on-primary'
                          : 'text-ink-muted hover:text-on-surface'
                      }`}
                    >
                      NORMAL
                    </button>
                    <button
                      type="button"
                      aria-pressed={simulateReject}
                      onClick={() => {
                        setSimulateReject(true);
                        handleReplay();
                      }}
                      className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
                        simulateReject
                          ? 'bg-status-error text-white'
                          : 'text-ink-muted hover:text-on-surface'
                      }`}
                    >
                      OUT OF SPEC
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleReplay}
                    title="Replay Inspection Loop"
                    aria-label="Replay Inspection Loop"
                    className="p-2 border border-line bg-paper-sunken text-on-surface hover:border-secondary hover:text-secondary transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 text-secondary" />
                  </button>
                </div>
              </div>

              {/* Station 2 Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Telecentric Silhouette View (fills viewport, w-full aspect-[2/1]) */}
                <div className="lg:col-span-7 bg-[#14130F] border border-line p-2 sm:p-4 flex items-center justify-center relative min-h-[360px] overflow-hidden">
                  <LedBendSVG
                    angle={telemetry.angle}
                    radius={telemetry.radius}
                    top={telemetry.topDistance}
                    bottom={telemetry.bottomDistance}
                    ok={!simulateReject}
                    step={step}
                    loopKey={loopKey}
                    motionOK={motionOK}
                  />
                </div>

                {/* Right Side: 4 Telemetry Spec Cards with Tolerance Bars */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-4 sm:p-5 bg-paper-raised border border-line">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-line pb-2">
                      <span className="font-label-timecode text-xs font-bold uppercase text-secondary">
                        STATION 2 LIVE METROLOGY (1–3s)
                      </span>
                      <span className="font-mono text-xs sm:text-[11px] text-ink-muted">SUB-PIXEL CANNY</span>
                    </div>

                    {/* 4 Tolerance Bars */}
                    <div className="flex flex-col divide-y divide-line">
                      <LedToleranceBar
                        label="01 · Bend Angle"
                        measured={telemetry.angle}
                        nominal={90.0}
                        tolerance={1.0}
                        unit="°"
                        minScale={88.0}
                        maxScale={93.0}
                        decimals={1}
                        step={step}
                        loopKey={loopKey}
                        motionOK={motionOK}
                      />

                      <LedToleranceBar
                        label="02 · Corner Radius"
                        measured={telemetry.radius}
                        nominal={1.016}
                        tolerance={0.254}
                        unit=" mm"
                        minScale={0.65}
                        maxScale={1.45}
                        decimals={3}
                        step={step}
                        loopKey={loopKey}
                        motionOK={motionOK}
                      />

                      <LedToleranceBar
                        label="03 · Top Distance"
                        measured={telemetry.topDistance}
                        nominal={2.3876}
                        tolerance={0.127}
                        unit=" mm"
                        minScale={2.1}
                        maxScale={2.7}
                        decimals={3}
                        step={step}
                        loopKey={loopKey}
                        motionOK={motionOK}
                      />

                      <LedToleranceBar
                        label="04 · Bottom Distance"
                        measured={telemetry.bottomDistance}
                        nominal={15.748}
                        tolerance={0.254}
                        unit=" mm"
                        minScale={15.0}
                        maxScale={16.5}
                        decimals={2}
                        step={step}
                        loopKey={loopKey}
                        motionOK={motionOK}
                      />
                    </div>
                  </div>

                  {/* PLC Digital I/O State Box (Action & Signal in readable text) */}
                  <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold uppercase text-xs sm:text-[11px]">
                        PLC DIGITAL I/O ACTUATION
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          simulateReject ? 'bg-status-error animate-pulse' : 'bg-status-success'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className={`font-bold transition-all ${
                          simulateReject ? 'text-status-error' : 'text-status-success'
                        } ${step === 4 && motionOK ? 'animate-pulse ring-1 ring-current px-1 rounded' : ''}`}
                      >
                        {telemetry.plcSignal}
                      </div>
                      <div className="text-ink-muted text-xs sm:text-[11px] leading-snug">
                        ACTION: <span className="text-on-surface font-semibold">{telemetry.action}</span>
                      </div>
                    </div>
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
