'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { useMotionOK, useDocumentVisible } from '@/lib/useMotionOK';
import Icon from '@/components/Icon';

export function ArchivalReelPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1); // 1 = normal, 2 = 2x
  const [activeTab, setActiveTab] = useState<'both' | 'cv' | 'genai'>('both');
  const [frameTick, setFrameTick] = useState<number>(18);
  const [vuLeft, setVuLeft] = useState<number>(78);
  const [vuRight, setVuRight] = useState<number>(84);

  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: '0px' });
  const motionOK = useMotionOK();
  const isDocVisible = useDocumentVisible();

  const isAnimated = motionOK && isDocVisible && inView && isPlaying;

  // Frame tick animation for SMPTE counter and dynamic VU meters
  useEffect(() => {
    if (!isAnimated) return;

    const intervalTime = (1000 / 24) / speed;
    const interval = setInterval(() => {
      setFrameTick((prev) => (prev + 1) % 100);

      // Subtle organic jitter on VU meters
      setVuLeft(Math.floor(70 + Math.sin(Date.now() / 200) * 15 + Math.random() * 8));
      setVuRight(Math.floor(75 + Math.cos(Date.now() / 220) * 14 + Math.random() * 8));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isAnimated, speed]);

  const rotationDuration = speed === 2 ? 3 : 6;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-paper-raised border border-line p-5 sm:p-6 flex flex-col gap-5 select-none overflow-hidden"
    >
      {/* Corner Brackets */}
      <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 text-primary text-[18px] leading-none pointer-events-none">⌜</span>
      <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 text-primary text-[18px] leading-none pointer-events-none">⌝</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 text-primary text-[18px] leading-none pointer-events-none">⌞</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 text-primary text-[18px] leading-none pointer-events-none">⌟</span>

      {/* Top Deck Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-secondary animate-pulse' : 'bg-ink-faint'}`}></span>
          <span className="font-label-timecode text-xs text-on-surface font-semibold tracking-wider uppercase">
            ARCHIVAL REEL 04 // 35MM SYSTEM PLAYBACK
          </span>
        </div>
        <div className="flex items-center gap-2 font-label-timecode text-[11px] text-ink-muted">
          <span className="px-2 py-0.5 bg-paper-sunken border border-line">
            SYNC: {isPlaying ? 'LOCKED 24 FPS' : 'PAUSED'}
          </span>
          <span className="px-2 py-0.5 bg-paper-sunken border border-line text-secondary font-semibold">
            {speed === 2 ? 'SPEED: 2X' : 'SPEED: 1X'}
          </span>
        </div>
      </div>

      {/* Mechanical Reel Deck Area */}
      <div className="relative w-full bg-paper-sunken border border-line p-4 sm:p-6 flex flex-col gap-6 overflow-hidden">
        {/* Background Subtle Coordinate Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#26221c_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* The Two Mechanical Tape Spools with Threaded Ribbon */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* SPOOL A: COMPUTER VISION (Left Reel) */}
          <div
            onClick={() => setActiveTab(activeTab === 'cv' ? 'both' : 'cv')}
            className={`md:col-span-5 flex flex-col items-center gap-3 p-3 transition-colors cursor-pointer rounded-sm border ${
              activeTab === 'cv' ? 'border-secondary/60 bg-paper-raised/80' : 'border-transparent hover:border-line hover:bg-paper-raised/40'
            }`}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              {/* Outer Tape Pack Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-line bg-surface/60 shadow-inner flex items-center justify-center">
                {/* 35mm Spool Holes Pattern */}
                <div className="absolute inset-2 rounded-full border border-dashed border-line/60"></div>
              </div>

              {/* Rotating Flange Spokes */}
              <m.div
                animate={isAnimated ? { rotate: 360 } : { rotate: 0 }}
                transition={isAnimated ? { repeat: Infinity, duration: rotationDuration, ease: 'linear' } : {}}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
              >
                {/* 3 Symmetrical Reel Flange Cutouts */}
                <div className="absolute w-2 h-full bg-line/80"></div>
                <div className="absolute w-2 h-full bg-line/80 rotate-60"></div>
                <div className="absolute w-2 h-full bg-line/80 -rotate-60"></div>

                {/* Spool Center Aluminum Core */}
                <div className="absolute w-12 h-12 rounded-full bg-paper-raised border-2 border-line flex items-center justify-center shadow-md">
                  <div className="w-5 h-5 rounded-full bg-surface border border-secondary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  </div>
                </div>
              </m.div>
            </div>

            {/* Reel A Metadata */}
            <div className="flex flex-col items-center text-center">
              <span className="font-label-timecode text-xs font-bold text-on-surface uppercase tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 bg-secondary inline-block"></span>
                REEL A: COMPUTER VISION
              </span>
              <span className="font-headline-md text-xs font-bold text-secondary mt-0.5">
                130+ Concurrent RTSP Cameras
              </span>
              <span className="font-label-timecode text-[11px] text-ink-muted">
                Triton · TensorRT · Zero-Copy IPC
              </span>
            </div>
          </div>

          {/* CENTRAL PLAYBACK HEAD & VU METERS (Center Column) */}
          <div className="md:col-span-2 flex flex-col items-center justify-center gap-3 py-2">
            {/* Threaded Tape Ribbon Line */}
            <div className="w-full hidden md:flex items-center justify-center relative">
              <div className="w-full h-0.5 bg-line relative overflow-hidden">
                {isAnimated && (
                  <m.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: speed === 2 ? 0.75 : 1.5, ease: 'linear' }}
                    className="w-1/2 h-full bg-secondary/80"
                  />
                )}
              </div>
            </div>

            {/* The Physical Playback Sensor Block */}
            <div className="relative px-3 py-2 bg-paper-raised border border-line flex flex-col items-center gap-1.5 shadow-sm">
              <div className="flex items-center gap-1 font-label-timecode text-[9px] uppercase font-bold text-secondary">
                <Icon name="sensors" className="text-[13px] animate-pulse" />
                <span>DUAL HEAD</span>
              </div>

              {/* Stereo VU Peak Bars */}
              <div className="flex items-center gap-2">
                {/* Left VU (CV channel) */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-2 h-14 bg-surface border border-line/60 p-0.5 flex flex-col-reverse">
                    <div
                      className="w-full bg-secondary transition-all duration-75"
                      style={{ height: isPlaying ? `${vuLeft}%` : '15%' }}
                    ></div>
                  </div>
                  <span className="font-label-timecode text-[8px] text-ink-muted">CV</span>
                </div>

                {/* Right VU (GenAI channel) */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-2 h-14 bg-surface border border-line/60 p-0.5 flex flex-col-reverse">
                    <div
                      className="w-full bg-status-success transition-all duration-75"
                      style={{ height: isPlaying ? `${vuRight}%` : '15%' }}
                    ></div>
                  </div>
                  <span className="font-label-timecode text-[8px] text-ink-muted">AI</span>
                </div>
              </div>

              <span className="font-label-timecode text-[9px] text-ink-muted">50/50 REC</span>
            </div>

            <div className="w-full hidden md:flex items-center justify-center relative">
              <div className="w-full h-0.5 bg-line relative overflow-hidden">
                {isAnimated && (
                  <m.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: speed === 2 ? 0.75 : 1.5, ease: 'linear' }}
                    className="w-1/2 h-full bg-status-success/80"
                  />
                )}
              </div>
            </div>
          </div>

          {/* SPOOL B: AUTONOMOUS AGENTS & GENAI (Right Reel) */}
          <div
            onClick={() => setActiveTab(activeTab === 'genai' ? 'both' : 'genai')}
            className={`md:col-span-5 flex flex-col items-center gap-3 p-3 transition-colors cursor-pointer rounded-sm border ${
              activeTab === 'genai' ? 'border-status-success/60 bg-paper-raised/80' : 'border-transparent hover:border-line hover:bg-paper-raised/40'
            }`}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              {/* Outer Tape Pack Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-line bg-surface/60 shadow-inner flex items-center justify-center">
                {/* 35mm Spool Holes Pattern */}
                <div className="absolute inset-2 rounded-full border border-dashed border-line/60"></div>
              </div>

              {/* Rotating Flange Spokes (Counter or Synchronized) */}
              <m.div
                animate={isAnimated ? { rotate: 360 } : { rotate: 0 }}
                transition={isAnimated ? { repeat: Infinity, duration: rotationDuration, ease: 'linear' } : {}}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
              >
                {/* 3 Symmetrical Reel Flange Cutouts */}
                <div className="absolute w-2 h-full bg-line/80"></div>
                <div className="absolute w-2 h-full bg-line/80 rotate-60"></div>
                <div className="absolute w-2 h-full bg-line/80 -rotate-60"></div>

                {/* Spool Center Aluminum Core */}
                <div className="absolute w-12 h-12 rounded-full bg-paper-raised border-2 border-line flex items-center justify-center shadow-md">
                  <div className="w-5 h-5 rounded-full bg-surface border border-status-success flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-status-success"></div>
                  </div>
                </div>
              </m.div>
            </div>

            {/* Reel B Metadata */}
            <div className="flex flex-col items-center text-center">
              <span className="font-label-timecode text-xs font-bold text-on-surface uppercase tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 bg-status-success inline-block"></span>
                REEL B: AUTONOMOUS AGENTS
              </span>
              <span className="font-headline-md text-xs font-bold text-status-success mt-0.5">
                &lt; 3s Natural-Language Turnaround
              </span>
              <span className="font-label-timecode text-[11px] text-ink-muted">
                LangGraph · FastMCP · AST Guards
              </span>
            </div>
          </div>
        </div>

        {/* Readout Drawer Based on Selected Reel */}
        <div className="p-3 bg-paper-raised border border-line text-xs font-label-timecode flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold uppercase">FOCUS PLAYBACK:</span>
            <span className="text-on-surface font-semibold">
              {activeTab === 'both' && 'Synchronized 50/50 Dual-Core Telemetry'}
              {activeTab === 'cv' && 'Reel A Selected: 130+ Ingest feeds, CUDA IPC zero-copy memory, 6.5x GPU cut'}
              {activeTab === 'genai' && 'Reel B Selected: LangGraph multi-agent supervisors, FastMCP tool servers, Qdrant RAG'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-ink-muted">
            <span>TIMECODE:</span>
            <span className="text-on-surface font-mono font-bold">
              04:02:26:{frameTick < 10 ? `0${frameTick}` : frameTick}
            </span>
          </div>
        </div>
      </div>

      {/* Transport Controls Deck */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Play/Pause/Speed buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper-sunken hover:bg-surface-container-high border border-line text-on-surface font-label-timecode text-xs uppercase font-semibold transition-colors active:scale-95"
          >
            <Icon
              name={isPlaying ? 'pause' : 'play_arrow'}
              className="text-[15px] text-secondary"
            />
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeed(speed === 1 ? 2 : 1)}
            className={`px-3 py-1.5 border font-label-timecode text-xs uppercase font-semibold transition-colors active:scale-95 ${
              speed === 2
                ? 'bg-secondary text-on-secondary border-secondary'
                : 'bg-paper-sunken hover:bg-surface-container-high border-line text-on-surface'
            }`}
          >
            {speed === 2 ? 'Boosted 2X' : '1X Speed'}
          </button>
        </div>

        {/* 50/50 Scope Badge */}
        <div className="flex items-center gap-2 font-label-timecode text-xs">
          <span className="text-secondary font-semibold">50% CV</span>
          <div className="w-16 h-1.5 bg-paper-sunken border border-line rounded-full overflow-hidden flex">
            <div className="w-1/2 h-full bg-secondary"></div>
            <div className="w-1/2 h-full bg-status-success"></div>
          </div>
          <span className="text-status-success font-semibold">50% GENAI</span>
        </div>
      </div>
    </div>
  );
}