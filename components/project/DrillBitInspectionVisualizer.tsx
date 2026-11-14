'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { CountUp } from '@/components/motion/CountUp';
import { useMotionOK } from '@/lib/useMotionOK';
import { DRILL_BIT_MEASUREMENTS, DRILL_BIT_DEFECT_CLASSES, DRILL_BIT_MACHINE_TIERS } from '@/content/caseStudiesData';

type ViewMode = 'front' | 'top' | 'categories';

export function DrillBitInspectionVisualizer() {
  const [activeView, setActiveView] = useState<ViewMode>('front');
  const [rotationAngle, setRotationAngle] = useState(45);
  const [simulateDefect, setSimulateDefect] = useState(false);
  const motionOK = useMotionOK();

  return (
    <div className="relative w-full bg-paper-sunken border border-line flex flex-col">
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
              {/* Left: Camera Reticle & Tip Visualizer */}
              <div className="lg:col-span-7 bg-[#14130F] text-[#F5F2EC] p-6 border border-line flex flex-col justify-between gap-6 relative overflow-hidden">
                {/* Camera HUD Telemetry */}
                <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-[11px] text-[#B5B2A8] border-b border-surface/10 pb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-status-success animate-ping" />
                    HIKROBOT CAM #1 · FRONT OPTICS
                  </span>
                  <span>COAXIAL POLARIZED LED: 100%</span>
                  <span className="text-secondary font-bold">1920 x 1080 @ 30 FPS</span>
                </div>

                {/* Reticle Graphics */}
                <div className="relative aspect-video max-h-[300px] flex items-center justify-center my-auto">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-full h-px bg-[#F5F2EC]" />
                    <div className="h-full w-px bg-[#F5F2EC] absolute" />
                  </div>

                  {/* Concentric Calibration Rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#F5F2EC]/20" />
                  <div className="absolute w-28 h-28 rounded-full border border-[#F5F2EC]/30" />

                  {/* Simulated Drill Bit Tip (Front End-On Profile) */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Outer Contour */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#F5F2EC]">
                      {/* Drill cutting lips and chisel edge */}
                      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                      <path
                        d="M 12 50 C 25 35, 45 48, 50 50 C 55 52, 75 65, 88 50 C 75 65, 55 52, 50 50 C 45 48, 25 35, 12 50 Z"
                        fill="rgba(255, 138, 92, 0.15)"
                        stroke={simulateDefect ? '#EF4444' : '#FF8A5C'}
                        strokeWidth="2"
                      />
                      {/* Chisel Edge */}
                      <line x1="44" y1="46" x2="56" y2="54" stroke="#FF8A5C" strokeWidth="2.5" />
                      {/* Web thickness calipers */}
                      <line x1="47" y1="42" x2="47" y2="58" stroke="#3B82F6" strokeWidth="1.5" />
                      <line x1="53" y1="42" x2="53" y2="58" stroke="#3B82F6" strokeWidth="1.5" />
                    </svg>

                    {/* Defect Callout Annotation if simulated */}
                    {simulateDefect && (
                      <div className="absolute -top-2 right-0 bg-status-error text-white font-mono text-[10px] px-2 py-0.5 rounded shadow">
                        DEF-01: BROKEN BLEND CHIP
                      </div>
                    )}
                  </div>

                  {/* On-screen Measurements Callouts */}
                  <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#FF8A5C] bg-black/60 px-2 py-1 rounded">
                    CHISEL ANGLE: 125.4° (SPEC: 125° ± 1°)
                  </div>
                  <div className="absolute top-2 left-2 font-mono text-[10px] text-blue-400 bg-black/60 px-2 py-1 rounded">
                    WEB THICKNESS: 1.48 mm (SPEC: 1.45 mm ± 150 µm)
                  </div>
                </div>

                {/* Bottom Status bar */}
                <div className="flex flex-wrap items-center justify-between text-xs font-mono pt-3 border-t border-surface/10 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#B5B2A8]">POINT DIAMETER:</span>
                    <span className="text-[#F5F2EC] font-bold">8.082 mm (±150 µm PASS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B5B2A8]">PLC ACTION:</span>
                    <span className={`px-2 py-0.5 font-bold uppercase rounded ${simulateDefect ? 'bg-red-500/20 text-red-400 border border-red-500' : 'bg-green-500/20 text-green-400 border border-green-500'}`}>
                      {simulateDefect ? 'ACTUATE PNEUMATIC REJECT' : 'CONTINUE TO TOP VIEW'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Metrology Readout & Defect Simulator */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-paper-raised p-6 border border-line">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                      FRONT PARAMETERS INSPECTED
                    </span>
                    <span className="font-label-timecode text-[11px] text-ink-muted">STATION 01</span>
                  </div>

                  <div className="flex flex-col divide-y divide-line font-mono text-xs">
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-on-surface font-semibold">Front Diameter</span>
                      <span className="text-secondary font-bold">8.082 mm</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-on-surface font-semibold">Web Thickness</span>
                      <span className="text-primary font-bold">1.480 mm</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-on-surface font-semibold">Chisel Angle</span>
                      <span className="text-primary font-bold">125.4°</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-on-surface font-semibold">Face Damage Scan</span>
                      <span className={simulateDefect ? 'text-red-500 font-bold' : 'text-status-success font-bold'}>
                        {simulateDefect ? 'DEFECT DETECTED' : 'CLEAR (ZERO CHIPS)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Defect Simulator Interactive Toggle */}
                <div className="p-4 bg-paper-sunken border border-line flex flex-col gap-2">
                  <span className="font-label-sm text-[11px] font-bold uppercase text-primary">
                    SIMULATE FRONT DEFECT:
                  </span>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Toggle to see how the IPC triggers the PLC to reject chipped drill bits immediately, aborting the top rotation cycle.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSimulateDefect(!simulateDefect)}
                    className={`mt-1 py-2 px-4 rounded text-xs font-mono font-bold uppercase transition-colors ${
                      simulateDefect
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-paper-raised border border-line text-on-surface hover:border-secondary'
                    }`}
                  >
                    {simulateDefect ? 'Simulating Fault: Broken Blend (Click to Reset)' : 'Click to Simulate Chipped Tip'}
                  </button>
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
              {/* Left: 360° Profile Canvas */}
              <div className="lg:col-span-7 bg-[#14130F] text-[#F5F2EC] p-6 border border-line flex flex-col justify-between gap-6 relative overflow-hidden">
                <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-[11px] text-[#B5B2A8] border-b border-surface/10 pb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-status-success animate-ping" />
                    HIKROBOT CAM #2 · TOP PROFILE
                  </span>
                  <span>ROTATION INDEX: {rotationAngle}° / 360°</span>
                  <span className="text-secondary font-bold">YOLOv7 DEFECT MODEL</span>
                </div>

                {/* Drill Bit Profile Diagram with Calipers */}
                <div className="relative aspect-video max-h-[300px] flex items-center justify-center my-auto px-4">
                  {/* Drill Bit Silhouette (Axial View) */}
                  <div className="relative w-full max-w-[420px] h-20 bg-neutral-900 border border-neutral-700 flex items-center overflow-hidden">
                    {/* Shank (Left 35%) */}
                    <div className="w-[35%] h-full bg-neutral-800 border-r border-dashed border-neutral-600 flex items-center justify-center">
                      <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest -rotate-90">SHANK</span>
                    </div>

                    {/* Flutes & Spiral Body (Right 65%) */}
                    <div className="w-[65%] h-full relative overflow-hidden flex items-center">
                      {/* Helical Spiral Patterns (Simulated rotation shift) */}
                      <div
                        className="absolute inset-0 flex"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,138,92,0.15) 0px, rgba(255,138,92,0.15) 12px, transparent 12px, transparent 24px)',
                          transform: `translateX(${(rotationAngle % 48) - 24}px)`,
                        }}
                      />
                      {/* Tip Point (Right-most point angle) */}
                      <div className="absolute right-0 top-0 bottom-0 w-6 border-l-2 border-secondary bg-secondary/20 flex items-center justify-center">
                        <span className="font-mono text-[8px] text-secondary font-bold">118°</span>
                      </div>

                      {/* YOLOv7 Bounding Box Simulation */}
                      <div className="absolute left-1/3 top-2 w-14 h-12 border-2 border-secondary bg-secondary/15 flex flex-col justify-between p-0.5">
                        <span className="bg-secondary text-on-secondary font-mono text-[7px] font-bold px-1 py-0.2">
                          LAND CRACK 84%
                        </span>
                        <span className="font-mono text-[6px] text-secondary text-right">0.8mm</span>
                      </div>
                    </div>

                    {/* Overlaid Caliper Lines */}
                    <div className="absolute -top-1 left-0 right-0 h-2 border-t-2 border-blue-400 flex justify-between text-[9px] font-mono text-blue-400 px-1">
                      <span>|</span>
                      <span>OVERALL LENGTH: 117.25 mm</span>
                      <span>|</span>
                    </div>
                  </div>
                </div>

                {/* 360° Rotation Interactive Scrubber */}
                <div className="flex flex-col gap-2 pt-3 border-t border-surface/10">
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-[#B5B2A8]">STEPPER ROTATION AUDIT:</span>
                    <span className="text-[#FF8A5C] font-bold">{rotationAngle}° / 360°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="15"
                    value={rotationAngle}
                    onChange={(e) => setRotationAngle(Number(e.target.value))}
                    className="w-full accent-secondary cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#B5B2A8]">
                    <span>0° (Flute A)</span>
                    <span>90°</span>
                    <span>180° (Flute B)</span>
                    <span>270°</span>
                    <span>360° (Full Revolution)</span>
                  </div>
                </div>
              </div>

              {/* Right: YOLOv7 Defect Class Register */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 bg-paper-raised p-6 border border-line">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span className="font-label-sm text-xs font-bold uppercase text-secondary">
                      YOLOv7 DEFECT CLASSES AUDITED
                    </span>
                    <span className="font-label-timecode text-[11px] text-ink-muted">70% RECALL</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {DRILL_BIT_DEFECT_CLASSES.map((defect) => (
                      <div key={defect.code} className="p-2.5 bg-paper-sunken border border-line flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] text-secondary font-bold">{defect.code}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
                        </div>
                        <span className="font-mono text-[11px] font-bold text-on-surface truncate">{defect.name}</span>
                        <span className="text-[10px] text-ink-muted leading-tight line-clamp-2">{defect.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
                <div key={tier.tier} className="p-6 bg-paper-raised border border-line flex flex-col justify-between gap-4 h-full hover:border-secondary transition-colors">
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
                  <div className="pt-3 border-t border-line flex justify-between items-center text-[11px] font-mono text-ink-muted">
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
