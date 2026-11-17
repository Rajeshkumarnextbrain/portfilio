'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { CountUp } from '@/components/motion/CountUp';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';
import { DRILL_BIT_DEFECT_CLASSES, DRILL_BIT_MACHINE_TIERS, DRILL_BIT_TOP_SPECS } from '@/content/caseStudiesData';
import { DrillTipSVG } from './DrillTipSVG';
import { DrillTopSVG } from './DrillTopSVG';

type ViewMode = 'front' | 'top' | 'categories';
type FaultMode = 'nominal' | 'front_blend' | 'top_crack';

interface ToleranceBarProps {
  label: string;
  measured: number;
  nominal: number;
  tolerance: number;
  unit: string;
  minScale: number;
  maxScale: number;
  isDefect?: boolean;
  step: number;
  loopKey: number;
  motionOK: boolean;
}

function ToleranceBar({
  label,
  measured,
  nominal,
  tolerance,
  unit,
  minScale,
  maxScale,
  isDefect = false,
  step,
  loopKey,
  motionOK,
}: ToleranceBarProps) {
  const minSpec = nominal - tolerance;
  const maxSpec = nominal + tolerance;
  const inSpec = !isDefect && measured >= minSpec && measured <= maxSpec;

  const specLeftPct = Math.max(0, Math.min(100, ((minSpec - minScale) / (maxScale - minScale)) * 100));
  const specWidthPct = Math.max(0, Math.min(100 - specLeftPct, ((maxSpec - minSpec) / (maxScale - minScale)) * 100));
  const markerPct = Math.max(0, Math.min(100, ((measured - minScale) / (maxScale - minScale)) * 100));

  const isCounted = step >= 2 || !motionOK;

  return (
    <div className="flex flex-col gap-1 py-2">
      <div className="flex justify-between items-baseline text-xs font-mono">
        <span className="text-on-surface font-semibold">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-secondary font-bold">
            {isCounted ? (
              <CountUp
                key={`${loopKey}-${label}`}
                value={`${measured.toFixed(3).replace(/\.?0+$/, '')} ${unit}`}
                duration={0.6}
              />
            ) : (
              `0.000 ${unit}`
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
          className="absolute top-0 bottom-0 bg-secondary/20 border-x border-secondary/40 z-0"
          style={{ left: `${specLeftPct}%`, width: `${specWidthPct}%` }}
        />

        {/* Measured marker dot */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 border border-paper-raised transition-all ${
            inSpec ? 'bg-status-success shadow-[0_0_4px_rgba(31,138,76,0.8)]' : 'bg-status-error shadow-[0_0_4px_rgba(239,68,68,0.8)]'
          }`}
          style={{ left: `${isCounted ? markerPct : 0}%` }}
        />
      </div>

      <div className="flex justify-between text-xs sm:text-[11px] font-mono text-ink-muted">
        <span>{minScale.toFixed(2)}</span>
        <span>SPEC: {nominal} ±{tolerance} {unit}</span>
        <span>{maxScale.toFixed(2)}</span>
      </div>
    </div>
  );
}

export function DrillBitInspectionVisualizer() {
  const [activeView, setActiveView] = useState<ViewMode>('front');
  const [rotationAngle, setRotationAngle] = useState(45);
  const [faultMode, setFaultMode] = useState<FaultMode>('nominal');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [inView, setInView] = useState(true);
  const [loopKey, setLoopKey] = useState(0);
  const [step, setStep] = useState(4); // 0 = scan, 1 = edge lock, 2 = dimensions/countup, 3 = stamp, 4 = plc

  const simulateDefect = faultMode === 'front_blend';
  const isTopDefect = faultMode === 'top_crack';
  const crackVisible = isTopDefect && rotationAngle >= 30 && rotationAngle <= 90;

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

  // Inspection loop orchestration: ~6s repeating cycle
  useEffect(() => {
    if (!motionOK) {
      setStep(4);
      return;
    }
    if (activeView !== 'front' || !inView || !isVisible) {
      return;
    }

    setStep(0);
    const t1 = setTimeout(() => setStep(1), 400);   // Edge detection lock (T+0.4s)
    const t2 = setTimeout(() => setStep(2), 1100);  // Metrology calipers & CountUp (T+1.1s)
    const t3 = setTimeout(() => setStep(3), 1300);  // Pass/Reject stamp (T+1.3s)
    const t4 = setTimeout(() => setStep(4), 1500);  // PLC Action pulse (T+1.5s)
    const tLoop = setTimeout(() => {
      setLoopKey((k) => k + 1);
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tLoop);
    };
  }, [loopKey, inView, isVisible, motionOK, activeView]);

  const handleReplay = useCallback(() => {
    setLoopKey((k) => k + 1);
  }, []);

  // Auto-play for Tab 02 (Top Camera 360° spin): 0 to 360 in 15° steps over ~6s (250ms/step)
  useEffect(() => {
    if (!motionOK) {
      setRotationAngle(45);
      return;
    }
    if (activeView !== 'top' || !inView || !isVisible || !isAutoPlay || faultMode === 'front_blend') {
      return;
    }

    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev >= 360 ? 0 : prev + 15));
    }, 250);

    return () => clearInterval(interval);
  }, [activeView, inView, isVisible, isAutoPlay, motionOK, faultMode]);

  return (
    <div ref={containerRef} className="relative w-full bg-paper-sunken border border-line flex flex-col">
      {/* Corner brackets */}
      <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌜</span>
      <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌝</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌞</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none select-none pointer-events-none">⌟</span>

      {/* Control Header & Tabs */}
      <div className="p-4 sm:p-5 bg-paper-raised border-b border-line flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold font-mono">
              INSPECTION STATION // DUAL HIKROBOT MACHINE CAMERAS
            </span>
          </div>
          <span className="font-body-md text-xs text-ink-muted">
            OpenCV sub-pixel edge metrology (±150–250 µm) &amp; YOLOv7 360° defect classification
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-paper-sunken p-1 border border-line">
          <button
            type="button"
            onClick={() => setActiveView('front')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeView === 'front'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            01 · Front Camera (Tip)
          </button>
          <button
            type="button"
            onClick={() => setActiveView('top')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeView === 'top'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            02 · Top Camera (360° Profile)
          </button>
          <button
            type="button"
            onClick={() => setActiveView('categories')}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors ${
              activeView === 'categories'
                ? 'bg-primary text-on-primary'
                : 'text-ink-muted hover:text-on-surface'
            }`}
          >
            03 · 3 Machine Tiers
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        <AnimatePresence mode="wait">
          {/* ================================================================= */}
          {/* VIEW 1: FRONT CAMERA (POINT & TIP FACE) */}
          {/* ================================================================= */}
          {activeView === 'front' && (
            <m.div
              key="front"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left: Camera Reticle & End-on Twist Drill Visualizer */}
              <div className="lg:col-span-7 bg-[#14130F] text-[#F5F2EC] p-4 sm:p-6 border border-line flex flex-col justify-between gap-4 relative overflow-hidden">
                {/* Camera HUD Telemetry Header */}
                <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-xs sm:text-[11px] text-[#F5F2EC]/80 border-b border-white/10 pb-3">
                  <span className="flex items-center gap-2 text-[#F5F2EC]/90">
                    <span className={`w-2 h-2 rounded-full ${simulateDefect ? 'bg-status-error' : 'bg-status-success'} animate-ping`} />
                    HIKROBOT CAM #1 · FRONT OPTICS
                  </span>
                  <span className="text-[#F5F2EC]/80">COAXIAL POLARIZED LED: 100%</span>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">
                      SIMULATED DEMO
                    </span>
                    <span className="text-secondary font-bold">1920 x 1080 @ 30 FPS</span>
                  </div>
                </div>

                {/* Reticle Graphics & Drill Bit Canvas (viewBox 0 0 400 400) */}
                <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center my-2">
                  {/* Alignment crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-full h-px bg-[#F5F2EC]" />
                    <div className="h-full w-px bg-[#F5F2EC] absolute" />
                  </div>

                  {/* Concentric Calibration Reticles */}
                  <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-[#F5F2EC]/15 pointer-events-none" />
                  <div className="absolute w-[220px] h-[220px] rounded-full border border-[#F5F2EC]/20 pointer-events-none" />

                  {/* DrillTipSVG component with CAD twist drill geometry & metrology overlays */}
                  <DrillTipSVG defect={simulateDefect}>
                    {/* (a) Sweeping Blue Scan Line */}
                    {motionOK && (
                      <g key={loopKey} className="animate-drill-scan pointer-events-none">
                        <rect x="35" y="0" width="330" height="2" fill="#3B82F6" opacity="0.85" />
                        <rect x="35" y="0" width="330" height="8" fill="url(#scanGlow)" opacity="0.35" />
                      </g>
                    )}

                    {/* (b) Staggered Edge Detection Points along lips and margin arcs (T >= 0.4s) */}
                    {(step >= 1 || !motionOK) && (
                      <g className="transition-opacity duration-200">
                        {/* Lip 1 points */}
                        {[
                          { x: 216, y: 179 },
                          { x: 231, y: 152 },
                          { x: 246, y: 125 },
                          { x: 260, y: 98 },
                          { x: 275, y: 70 },
                        ].map((pt, i) => (
                          <g key={`l1-${i}`}>
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="2"
                              fill={simulateDefect && i >= 2 && i <= 3 ? '#EF4444' : '#3B82F6'}
                            />
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="4"
                              fill="none"
                              stroke={simulateDefect && i >= 2 && i <= 3 ? '#EF4444' : '#3B82F6'}
                              strokeWidth="0.8"
                              opacity="0.6"
                            />
                          </g>
                        ))}

                        {/* Lip 2 points */}
                        {[
                          { x: 184, y: 221 },
                          { x: 169, y: 248 },
                          { x: 154, y: 275 },
                          { x: 140, y: 302 },
                          { x: 125, y: 330 },
                        ].map((pt, i) => (
                          <g key={`l2-${i}`}>
                            <circle cx={pt.x} cy={pt.y} r="2" fill="#3B82F6" />
                            <circle cx={pt.x} cy={pt.y} r="4" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />
                          </g>
                        ))}

                        {/* Chisel edge points */}
                        {[
                          { x: 192, y: 210 },
                          { x: 200, y: 200 },
                          { x: 208, y: 190 },
                        ].map((pt, i) => (
                          <circle key={`chisel-${i}`} cx={pt.x} cy={pt.y} r="1.8" fill="#3B82F6" opacity="0.9" />
                        ))}

                        {/* Margin Arc 1 points */}
                        {[
                          { x: 275, y: 70 },
                          { x: 240, y: 55 },
                          { x: 190, y: 50 },
                          { x: 140, y: 60 },
                          { x: 95, y: 90 },
                          { x: 65, y: 140 },
                          { x: 50, y: 200 },
                        ].map((pt, i) => (
                          <circle key={`arc1-${i}`} cx={pt.x} cy={pt.y} r="1.8" fill="#3B82F6" opacity="0.8" />
                        ))}

                        {/* Margin Arc 2 points */}
                        {[
                          { x: 125, y: 330 },
                          { x: 160, y: 345 },
                          { x: 210, y: 350 },
                          { x: 260, y: 340 },
                          { x: 305, y: 310 },
                          { x: 335, y: 260 },
                          { x: 350, y: 200 },
                        ].map((pt, i) => (
                          <circle key={`arc2-${i}`} cx={pt.x} cy={pt.y} r="1.8" fill="#3B82F6" opacity="0.8" />
                        ))}
                      </g>
                    )}

                    {/* (c) In-situ Metrology Dimension Marks & Leader Lines (T >= 1.1s) */}
                    {(step >= 2 || !motionOK) && (
                      <g className="transition-opacity duration-200">
                        {/* 1. Diameter Dimension Line across full 300-unit circle (45° angle) */}
                        <line x1="94" y1="94" x2="306" y2="306" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="4 2" />
                        <line x1="88" y1="100" x2="100" y2="88" stroke="#3B82F6" strokeWidth="1.5" />
                        <line x1="300" y1="312" x2="312" y2="300" stroke="#3B82F6" strokeWidth="1.5" />
                        {/* Leader line to diameter label outside the backdrop disc (top-left) */}
                        <path d="M 94 94 L 66 66 L 66 50" fill="none" stroke="#3B82F6" strokeWidth="1" />
                        <rect
                          x="14"
                          y="18"
                          width="106"
                          height="32"
                          rx="2"
                          fill="#14130F"
                          fillOpacity="0.95"
                          stroke="#3B82F6"
                          strokeWidth="1"
                        />
                        <text x="20" y="32" fill="#FF8A5C" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                          ⌀ 8.082 mm
                        </text>
                        <text x="20" y="45" fill="#F5F2EC" fillOpacity="0.85" fontSize="11" fontFamily="var(--font-mono)">
                          SPEC ±150µm PASS
                        </text>

                        {/* 2. Web Thickness Calipers across the central strip (shortened to measured core) */}
                        <line x1="194" y1="192" x2="194" y2="208" stroke="#3B82F6" strokeWidth="1.5" />
                        <line x1="206" y1="192" x2="206" y2="208" stroke="#3B82F6" strokeWidth="1.5" />
                        <line x1="194" y1="200" x2="206" y2="200" stroke="#3B82F6" strokeWidth="1.2" strokeDasharray="2 1" />
                        {/* Leader line to web label outside the backdrop disc (bottom-left) */}
                        <path d="M 194 200 L 130 265 L 63 348" fill="none" stroke="#3B82F6" strokeWidth="1" />
                        <rect
                          x="14"
                          y="348"
                          width="98"
                          height="32"
                          rx="2"
                          fill="#14130F"
                          fillOpacity="0.95"
                          stroke="#3B82F6"
                          strokeWidth="1"
                        />
                        <text x="20" y="362" fill="#FF8A5C" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                          WEB 1.48 mm
                        </text>
                        <text x="20" y="375" fill="#F5F2EC" fillOpacity="0.85" fontSize="11" fontFamily="var(--font-mono)">
                          SPEC 1.45
                        </text>

                        {/* 3. Chisel Angle Arc & Leader outside the backdrop disc (bottom-right) */}
                        <path d="M 207 191 A 16 16 0 0 1 214 204" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 1" />
                        {/* Leader line to chisel label outside the backdrop disc */}
                        <path d="M 214 204 L 270 270 L 337 348" fill="none" stroke="#3B82F6" strokeWidth="1" />
                        <rect
                          x="288"
                          y="348"
                          width="98"
                          height="32"
                          rx="2"
                          fill="#14130F"
                          fillOpacity="0.95"
                          stroke="#3B82F6"
                          strokeWidth="1"
                        />
                        <text x="294" y="362" fill="#FF8A5C" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">
                          CHISEL 125.4°
                        </text>
                        <text x="294" y="375" fill="#F5F2EC" fillOpacity="0.85" fontSize="11" fontFamily="var(--font-mono)">
                          SPEC 125° ± 1°
                        </text>
                      </g>
                    )}

                    {/* (4) Defect Mode: Outside Label (Bounding box is inside DrillTipSVG) */}
                    {simulateDefect && (
                      <g className="defect-annotation">
                        {/* Leader line connecting defect box to label outside the backdrop disc */}
                        <path d="M 276 92 L 305 55 L 317 40" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                        <rect
                          x="248"
                          y="18"
                          width="138"
                          height="22"
                          fill="#14130F"
                          fillOpacity="0.95"
                          stroke="#EF4444"
                          strokeWidth="1"
                          rx="2"
                        />
                        <text
                          x="254"
                          y="33"
                          fill="#EF4444"
                          fontSize="11"
                          fontFamily="var(--font-mono)"
                          fontWeight="700"
                        >
                          chipped_blend 0.91
                        </text>
                      </g>
                    )}

                    {/* (e) PASS or REJECT Stamp (T >= 1.3s) */}
                    {(step >= 3 || !motionOK) && (
                      <g className="transition-opacity duration-300 select-none">
                        {!simulateDefect ? (
                          <g>
                            <rect
                              x="145"
                              y="352"
                              width="110"
                              height="26"
                              rx="2"
                              fill="#14130F"
                              fillOpacity="0.95"
                              stroke="#1F8A4C"
                              strokeWidth="2"
                            />
                            <text
                              x="200"
                              y="369"
                              fill="#1F8A4C"
                              fontSize="13"
                              fontFamily="var(--font-mono)"
                              fontWeight="700"
                              textAnchor="middle"
                              letterSpacing="2"
                            >
                              ✓ PASS
                            </text>
                          </g>
                        ) : (
                          <g>
                            <rect
                              x="140"
                              y="352"
                              width="120"
                              height="26"
                              rx="2"
                              fill="#14130F"
                              fillOpacity="0.95"
                              stroke="#EF4444"
                              strokeWidth="2"
                            />
                            <text
                              x="200"
                              y="369"
                              fill="#EF4444"
                              fontSize="13"
                              fontFamily="var(--font-mono)"
                              fontWeight="700"
                              textAnchor="middle"
                              letterSpacing="2"
                            >
                              ✗ REJECT
                            </text>
                          </g>
                        )}
                      </g>
                    )}
                  </DrillTipSVG>
                </div>

                {/* Bottom Status bar */}
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-[11px] font-mono pt-3 border-t border-white/10 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#F5F2EC]/80">POINT DIAMETER:</span>
                    <span className="text-[#F5F2EC] font-bold">
                      {step >= 2 || !motionOK ? (
                        <CountUp key={`${loopKey}-status-dia`} value="8.082 mm" duration={0.6} />
                      ) : (
                        '0.000 mm'
                      )}{' '}
                      (±150 µm PASS)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#F5F2EC]/80">PLC ACTION:</span>
                    <span
                      className={`px-2 py-0.5 font-bold uppercase rounded border transition-all ${
                        simulateDefect
                          ? 'bg-red-500/20 text-red-400 border-red-500'
                          : 'bg-green-500/20 text-green-400 border-green-500'
                      } ${step === 4 && motionOK ? 'animate-pulse ring-2 ring-current' : ''}`}
                    >
                      {simulateDefect ? 'ACTUATE PNEUMATIC REJECT' : 'CONTINUE TO TOP VIEW'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Metrology Readout, Tolerance Bars, Cycle Log, PLC I/O Strip */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-paper-raised p-4 sm:p-6 border border-line">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                      FRONT PARAMETERS INSPECTED
                    </span>
                    <span className="font-label-timecode text-xs sm:text-[11px] text-ink-muted">STATION 01</span>
                  </div>

                  {/* Tightened Parameter Rows with Spec Band Tolerance Bars */}
                  <div className="flex flex-col divide-y divide-line">
                    <ToleranceBar
                      label="Front Diameter"
                      measured={8.082}
                      nominal={8.0}
                      tolerance={0.15}
                      unit="mm"
                      minScale={7.7}
                      maxScale={8.3}
                      step={step}
                      loopKey={loopKey}
                      motionOK={motionOK}
                    />

                    <ToleranceBar
                      label="Web Thickness"
                      measured={1.48}
                      nominal={1.45}
                      tolerance={0.15}
                      unit="mm"
                      minScale={1.2}
                      maxScale={1.7}
                      step={step}
                      loopKey={loopKey}
                      motionOK={motionOK}
                    />

                    <ToleranceBar
                      label="Chisel Angle"
                      measured={125.4}
                      nominal={125.0}
                      tolerance={1.0}
                      unit="°"
                      minScale={122.0}
                      maxScale={128.0}
                      step={step}
                      loopKey={loopKey}
                      motionOK={motionOK}
                    />

                    <div className="flex justify-between items-center py-2 text-xs font-mono">
                      <span className="text-on-surface font-semibold">Face Damage Scan</span>
                      <span
                        className={`font-bold uppercase ${
                          simulateDefect ? 'text-status-error' : 'text-status-success'
                        }`}
                      >
                        {simulateDefect ? 'DEFECT DETECTED' : 'CLEAR (ZERO CHIPS)'}
                      </span>
                    </div>
                  </div>

                  {/* 4-Line Realtime Metrology Cycle Log */}
                  <div className="p-3 bg-[#14130F] text-[#F5F2EC] border border-line flex flex-col gap-1.5 font-mono text-xs sm:text-[11px]">
                    <div className="flex items-center justify-between text-[#F5F2EC]/80 pb-1 border-b border-white/10 text-xs sm:text-[11px]">
                      <span className="text-secondary font-bold uppercase">OPCV REALTIME METROLOGY LOG</span>
                      <span>CYCLE: 6.0s</span>
                    </div>
                    <div className="flex flex-col gap-1 min-h-[76px]">
                      {step >= 1 || !motionOK ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[#F5F2EC]/80">T+0.4s</span>
                          <span className="text-secondary font-bold">[OPT]</span>
                          <span className="text-[#F5F2EC]/90">Sub-pixel edge lock: 182 pts</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-[#F5F2EC]/60">
                          <span>T+0.0s</span>
                          <span className="text-secondary font-bold">[ACQ]</span>
                          <span>Hikrobot Cam #1 frame captured...</span>
                        </div>
                      )}
                      {(step >= 2 || !motionOK) && (
                        <div className="flex items-center gap-2">
                          <span className="text-[#F5F2EC]/80">T+1.1s</span>
                          <span className="text-secondary font-bold">[MET]</span>
                          <span className="text-[#F5F2EC]/90">Metrology caliper extraction complete</span>
                        </div>
                      )}
                      {(step >= 3 || !motionOK) && (
                        <div className="flex items-center gap-2">
                          <span className="text-[#F5F2EC]/80">T+1.3s</span>
                          <span className="text-secondary font-bold">[DEC]</span>
                          <span className={simulateDefect ? 'text-status-error font-bold' : 'text-status-success font-bold'}>
                            {simulateDefect ? 'DEFECT DETECTED: chipped_blend 0.91' : 'PASS (ALL PARAMETERS IN SPEC)'}
                          </span>
                        </div>
                      )}
                      {(step >= 4 || !motionOK) && (
                        <div className="flex items-center gap-2">
                          <span className="text-[#F5F2EC]/80">T+1.5s</span>
                          <span className="text-secondary font-bold">[PLC]</span>
                          <span className={simulateDefect ? 'text-status-error font-bold' : 'text-status-success font-bold'}>
                            {simulateDefect ? 'CMD: ACTUATE PNEUMATIC REJECT' : 'CMD: INDEX SPINDLE -> TOP CAM'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PLC I/O Strip (FEED, REJECT SOLENOID, TOP CAM TRIGGER) */}
                  <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-xs sm:text-[11px] font-bold uppercase text-secondary">
                        PLC I/O BUS (OPC UA / PROFINET)
                      </span>
                      <span className="font-mono text-xs sm:text-[11px] text-ink-muted">STATION 01</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {/* FEED */}
                      <div className="p-2 bg-paper-raised border border-line flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-mono text-xs sm:text-[10px] text-ink-muted uppercase">FEED</span>
                          <span className="font-mono text-xs sm:text-[11px] font-bold text-on-surface">
                            {simulateDefect ? 'HOLD' : 'RUNNING'}
                          </span>
                        </div>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            simulateDefect ? 'bg-ink-muted' : 'bg-status-success shadow-[0_0_6px_rgba(31,138,76,0.6)]'
                          }`}
                        />
                      </div>

                      {/* REJECT SOLENOID */}
                      <div
                        className={`p-2 border transition-colors flex items-center justify-between ${
                          simulateDefect
                            ? 'bg-red-500/10 border-status-error'
                            : 'bg-paper-raised border border-line'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-mono text-xs sm:text-[10px] text-ink-muted uppercase">REJECT SOLENOID</span>
                          <span
                            className={`font-mono text-xs sm:text-[11px] font-bold ${
                              simulateDefect ? 'text-status-error' : 'text-ink-muted'
                            }`}
                          >
                            {simulateDefect ? (step >= 4 || !motionOK ? 'FIRED' : 'ARMED') : 'IDLE'}
                          </span>
                        </div>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            simulateDefect
                              ? 'bg-status-error shadow-[0_0_6px_rgba(239,68,68,0.8)] animate-pulse'
                              : 'bg-ink-muted/40'
                          }`}
                        />
                      </div>

                      {/* TOP CAM TRIGGER */}
                      <div className="p-2 bg-paper-raised border border-line flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-mono text-xs sm:text-[10px] text-ink-muted uppercase">TOP CAM TRIGGER</span>
                          <span
                            className={`font-mono text-xs sm:text-[11px] font-bold ${
                              simulateDefect ? 'text-status-error' : 'text-on-surface'
                            }`}
                          >
                            {simulateDefect ? 'ABORTED' : 'ARMED'}
                          </span>
                        </div>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            simulateDefect
                              ? 'bg-status-error'
                              : 'bg-status-success shadow-[0_0_6px_rgba(31,138,76,0.6)]'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Defect Mode Segmented Control & Replay Button */}
                <div className="flex flex-col gap-2 pt-2 border-t border-line">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-xs sm:text-[11px] font-bold uppercase text-primary">
                      SIMULATE FAULT CONDITION:
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div
                      role="group"
                      aria-label="Inspection State Simulation"
                      className="inline-flex flex-1 p-1 bg-paper-sunken border border-line"
                    >
                      <button
                        type="button"
                        aria-pressed={faultMode === 'nominal'}
                        onClick={() => {
                          setFaultMode('nominal');
                          handleReplay();
                        }}
                        className={`flex-1 py-2 sm:py-1.5 px-2 text-xs font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'nominal'
                            ? 'bg-primary text-on-primary'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        NOMINAL
                      </button>
                      <button
                        type="button"
                        aria-pressed={faultMode === 'front_blend'}
                        onClick={() => {
                          setFaultMode('front_blend');
                          handleReplay();
                        }}
                        className={`flex-1 py-2 sm:py-1.5 px-2 text-xs font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'front_blend'
                            ? 'bg-status-error text-white'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        FRONT: CHIPPED BLEND
                      </button>
                      <button
                        type="button"
                        aria-pressed={faultMode === 'top_crack'}
                        onClick={() => {
                          setFaultMode('top_crack');
                          handleReplay();
                        }}
                        className={`flex-1 py-2 sm:py-1.5 px-2 text-xs font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'top_crack'
                            ? 'bg-status-error text-white'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        TOP: LAND CRACK
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleReplay}
                      title="Replay Inspection Loop (T=0s)"
                      aria-label="Replay Inspection Loop"
                      className="p-2.5 sm:p-2 border border-line bg-paper-sunken text-on-surface hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-4 h-4 text-secondary" />
                      <span className="sm:hidden font-mono text-xs uppercase font-bold text-secondary">Replay</span>
                    </button>
                  </div>
                </div>
              </div>
            </m.div>
          )}

          {/* ================================================================= */}
          {/* VIEW 2: TOP CAMERA (360° PROFILE & YOLOv7 DEFECTS) */}
          {/* ================================================================= */}
          {activeView === 'top' && (
            <m.div
              key="top"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left (7 cols): 360° Profile Canvas */}
              <div className="lg:col-span-7 bg-[#14130F] text-[#F5F2EC] p-4 sm:p-6 border border-line flex flex-col justify-between relative overflow-hidden">
                {/* Top Camera HUD Telemetry Header */}
                <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-xs sm:text-[11px] text-[#F5F2EC]/80 border-b border-white/10 pb-3">
                  <span className="flex items-center gap-2 text-[#F5F2EC]/90">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        faultMode === 'front_blend'
                          ? 'bg-status-error'
                          : isTopDefect
                          ? 'bg-status-error animate-ping'
                          : 'bg-status-success'
                      }`}
                    />
                    HIKROBOT CAM #2 · TOP PROFILE
                  </span>
                  <span>ROTATION INDEX: {faultMode === 'front_blend' ? 'N/A' : `${rotationAngle}° / 360°`}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/15 text-secondary border border-secondary/30">
                      SIMULATED DEMO
                    </span>
                    <span className="text-secondary font-bold">YOLOv7 DEFECT MODEL</span>
                  </div>
                </div>

                {/* If defect simulated at front camera, show aborted state */}
                {faultMode === 'front_blend' ? (
                  <div className="flex-1 w-full flex items-center justify-center my-4 min-h-[220px]">
                    <div className="w-full aspect-[2.5/1] flex flex-col items-center justify-center text-center p-6 bg-red-950/20 border border-status-error/40 gap-3">
                      <span className="font-mono text-xs uppercase font-bold text-status-error tracking-wider">
                        INSPECTION STAGE 02 ABORTED // FRONT REJECT TRIPPED
                      </span>
                      <p className="text-xs font-mono text-[#F5F2EC]/80 max-w-md leading-relaxed">
                        Pneumatic solenoid actuated at Station 01 for chipped blend fault. Drill bit expelled from conveyor before top camera rotation spindle index.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Drawing Area with Machine-Vision Field Background */
                  <div
                    className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-4 min-h-[220px]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(245, 242, 236, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 242, 236, 0.05) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                      backgroundPosition: 'center center',
                    }}
                  >
                    {/* Thin center crosshair (10% opacity) */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#F5F2EC]/10 pointer-events-none" />
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[#F5F2EC]/10 pointer-events-none" />

                    {/* Drill Bit Profile SVG with Metrology Callouts & YOLOv7 Detection */}
                    <div className="w-full aspect-[2.5/1] max-h-full flex items-center justify-center relative z-10">
                      <DrillTopSVG
                        rotation={rotationAngle}
                        crackVisible={crackVisible}
                        lengthMm={DRILL_BIT_TOP_SPECS.lengthMm}
                        diameterMm={DRILL_BIT_TOP_SPECS.diameterMm}
                        fluteMm={DRILL_BIT_TOP_SPECS.fluteMm}
                        helixDeg={DRILL_BIT_TOP_SPECS.helixDeg}
                        pointDeg={DRILL_BIT_TOP_SPECS.pointDeg}
                      />
                    </div>
                  </div>
                )}

                {/* 360° Stepper Rotation Interactive Scrubber with Absolute Ticks */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-auto">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-[#F5F2EC]/80">STEPPER ROTATION AUDIT:</span>
                    <div className="flex items-center gap-2">
                      {isAutoPlay && motionOK && faultMode !== 'front_blend' && (
                        <span className="text-[11px] text-[#F5F2EC]/80 uppercase animate-pulse">AUTO-SCAN</span>
                      )}
                      <span className="text-secondary font-bold">{rotationAngle}° / 360°</span>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="range"
                      min="0"
                      max="360"
                      step="15"
                      disabled={faultMode === 'front_blend'}
                      value={rotationAngle}
                      onMouseDown={() => setIsAutoPlay(false)}
                      onTouchStart={() => setIsAutoPlay(false)}
                      onChange={(e) => {
                        setIsAutoPlay(false);
                        setRotationAngle(Number(e.target.value));
                      }}
                      className="w-full accent-secondary cursor-pointer disabled:opacity-40"
                    />
                    {/* Aligned percentage tick labels */}
                    <div className="relative w-full h-8 mt-1 font-mono text-[11px] text-[#F5F2EC]/80 select-none">
                      <div className="absolute left-0 top-0 flex flex-col items-start">
                        <span className="font-bold text-[#F5F2EC]/90">0°</span>
                        <span className="text-[11px] text-[#F5F2EC]/60">Flute A</span>
                      </div>
                      <div className="absolute left-[25%] -translate-x-1/2 top-0 flex flex-col items-center">
                        <span className="font-bold text-[#F5F2EC]/90">90°</span>
                      </div>
                      <div className="absolute left-[50%] -translate-x-1/2 top-0 flex flex-col items-center">
                        <span className="font-bold text-[#F5F2EC]/90">180°</span>
                        <span className="text-[11px] text-[#F5F2EC]/60">Flute B</span>
                      </div>
                      <div className="absolute left-[75%] -translate-x-1/2 top-0 flex flex-col items-center">
                        <span className="font-bold text-[#F5F2EC]/90">270°</span>
                      </div>
                      <div className="absolute right-0 top-0 flex flex-col items-end">
                        <span className="font-bold text-[#F5F2EC]/90">360°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right (5 cols): YOLOv7 Defect Class Register & Station 02 Controls */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-paper-raised p-4 sm:p-6 border border-line">
                <div className="flex flex-col gap-3">
                  {/* Scenario Segmented Toggle (Shared with Tab 01) */}
                  <div className="flex flex-col gap-2 p-3 bg-paper-sunken border border-line">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] font-bold uppercase text-secondary">
                        SIMULATE SCENARIO
                      </span>
                    </div>
                    <div
                      role="group"
                      aria-label="Inspection State Simulation"
                      className="inline-flex p-1 bg-paper-raised border border-line w-full"
                    >
                      <button
                        type="button"
                        aria-pressed={faultMode === 'nominal'}
                        onClick={() => {
                          setFaultMode('nominal');
                          handleReplay();
                        }}
                        className={`flex-1 py-1.5 px-2 text-[11px] font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'nominal'
                            ? 'bg-primary text-on-primary'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        NOMINAL
                      </button>
                      <button
                        type="button"
                        aria-pressed={faultMode === 'front_blend'}
                        onClick={() => {
                          setFaultMode('front_blend');
                          handleReplay();
                        }}
                        className={`flex-1 py-1.5 px-2 text-[11px] font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'front_blend'
                            ? 'bg-status-error text-white'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        FRONT: CHIPPED BLEND
                      </button>
                      <button
                        type="button"
                        aria-pressed={faultMode === 'top_crack'}
                        onClick={() => {
                          setFaultMode('top_crack');
                          handleReplay();
                        }}
                        className={`flex-1 py-1.5 px-2 text-[11px] font-mono font-bold uppercase transition-colors text-center ${
                          faultMode === 'top_crack'
                            ? 'bg-status-error text-white'
                            : 'text-ink-muted hover:text-on-surface'
                        }`}
                      >
                        TOP: LAND CRACK
                      </button>
                    </div>
                  </div>

                  {/* Header: Defect Classes Audited with Updated Recall Label */}
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                      YOLOv7 DEFECT CLASSES AUDITED
                    </span>
                    <span className="font-label-timecode text-[11px] text-ink-muted">
                      70% RECALL · 8 CLASSES
                    </span>
                  </div>

                  {/* 8 Defect Cards with per-class confidence */}
                  <div className="grid grid-cols-2 gap-2">
                    {DRILL_BIT_DEFECT_CLASSES.map((defect) => {
                      const isDefect = isTopDefect && defect.code === 'DEF-02';
                      return (
                        <div
                          key={defect.code}
                          className={`p-2.5 border transition-colors flex flex-col gap-1 ${
                            isDefect
                              ? 'bg-status-error/15 border-status-error text-status-error shadow-[0_0_8px_rgba(239,68,68,0.2)]'
                              : 'bg-paper-sunken border-line text-on-surface'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`font-mono text-[11px] font-bold ${isDefect ? 'text-status-error' : 'text-secondary'}`}>
                              {defect.code}
                            </span>
                            {isDefect ? (
                              <span className="px-1.5 py-0.5 rounded text-[11px] font-mono font-bold bg-status-error text-white">
                                REJECT · 0.84
                              </span>
                            ) : (
                              <span className="font-mono text-[11px] text-ink-muted">0.00</span>
                            )}
                          </div>
                          <span className="font-mono text-[11px] font-bold truncate">
                            {defect.name}
                          </span>
                          <span className="text-[11px] text-ink-muted leading-tight line-clamp-2">
                            {defect.impact}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Station 02 Verdict & PLC Action Row (Matching Station 01 Treatment) */}
                <div className="p-3 bg-paper-sunken border border-line flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-[11px] font-bold uppercase text-secondary">
                      PLC DIGITAL I/O ACTUATION
                    </span>
                    <span className="font-mono text-[11px] text-ink-muted">STATION 02</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* VERDICT */}
                    <div
                      className={`p-2 border transition-colors flex items-center justify-between ${
                        isTopDefect
                          ? 'bg-red-500/10 border-status-error'
                          : faultMode === 'front_blend'
                          ? 'bg-paper-raised border-line opacity-60'
                          : 'bg-paper-raised border border-line'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-[11px] text-ink-muted uppercase">STATION 02 VERDICT</span>
                        <span
                          className={`font-mono text-xs font-bold ${
                            faultMode === 'front_blend'
                              ? 'text-ink-muted'
                              : isTopDefect
                              ? 'text-status-error'
                              : 'text-status-success'
                          }`}
                        >
                          {faultMode === 'front_blend' ? 'ABORTED' : isTopDefect ? 'REJECT' : 'PASS'}
                        </span>
                      </div>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          faultMode === 'front_blend'
                            ? 'bg-ink-muted/40'
                            : isTopDefect
                            ? 'bg-status-error animate-pulse'
                            : 'bg-status-success shadow-[0_0_6px_rgba(31,138,76,0.6)]'
                        }`}
                      />
                    </div>

                    {/* PLC REJECT SOLENOID */}
                    <div
                      className={`p-2 border transition-colors flex items-center justify-between ${
                        isTopDefect
                          ? 'bg-red-500/10 border-status-error'
                          : faultMode === 'front_blend'
                          ? 'bg-paper-raised border-line opacity-60'
                          : 'bg-paper-raised border border-line'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-[11px] text-ink-muted uppercase">REJECT SOLENOID</span>
                        <span
                          className={`font-mono text-xs font-bold ${
                            isTopDefect ? 'text-status-error' : 'text-ink-muted'
                          }`}
                        >
                          {faultMode === 'front_blend' ? 'EXPELLED (ST. 01)' : isTopDefect ? 'FIRED (PNEUMATIC 24V)' : 'IDLE'}
                        </span>
                      </div>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isTopDefect
                            ? 'bg-status-error shadow-[0_0_6px_rgba(239,68,68,0.8)] animate-pulse'
                            : 'bg-ink-muted/40'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Cycle Time */}
                <div className="p-3 bg-surface border border-line flex items-center justify-between font-mono text-xs">
                  <span className="text-ink-muted">CYCLE TIME PER BIT:</span>
                  <span className="font-bold text-on-surface">~20 SECONDS (AVERAGE)</span>
                </div>
              </div>
            </m.div>
          )}

          {/* ================================================================= */}
          {/* VIEW 3: 3 MACHINE CATEGORIES */}
          {/* ================================================================= */}
          {activeView === 'categories' && (
            <m.div
              key="categories"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {DRILL_BIT_MACHINE_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className="p-6 bg-paper-raised border border-line flex flex-col justify-between gap-4 h-full hover:border-secondary transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-xs text-secondary uppercase font-bold">{tier.tier}</span>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface">
                      {tier.range}
                    </h3>
                    <span className="font-mono text-xs text-primary font-semibold">{tier.focus}</span>
                    <p className="text-xs text-ink-muted leading-relaxed mt-1">
                      {tier.detail}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-line flex justify-between items-center text-xs sm:text-[11px] font-mono text-ink-muted">
                    <span>TOLERANCE:</span>
                    <span className="text-on-surface font-bold">±150–250 µm</span>
                  </div>
                </div>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
