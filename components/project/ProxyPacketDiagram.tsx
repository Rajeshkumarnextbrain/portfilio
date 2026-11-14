'use client';

import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
import { useMotionOK } from '@/lib/useMotionOK';

export function ProxyPacketDiagram() {
  const motionOK = useMotionOK();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  const [packetStage, setPacketStage] = useState(motionOK ? 0 : 3);
  const [allowlistFlashing, setAllowlistFlashing] = useState(false);

  useEffect(() => {
    if (!motionOK || !inView) {
      setPacketStage(3);
      return;
    }

    // Packet stages:
    // 0: Start at Browser
    // 1: Moving to Proxy
    // 2: At Proxy -> allowlist check flashes green
    // 3: Passed to LAN Camera
    const t1 = setTimeout(() => setPacketStage(1), 300);
    const t2 = setTimeout(() => {
      setPacketStage(2);
      setAllowlistFlashing(true);
    }, 700);
    const t3 = setTimeout(() => {
      setAllowlistFlashing(false);
      setPacketStage(3);
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [motionOK, inView]);

  return (
    <div ref={ref} className="p-5 bg-paper-sunken border border-line flex flex-col gap-4">
      <div className="flex items-center justify-between text-xs font-label-timecode text-ink-muted">
        <span className="font-bold text-secondary uppercase">LAN SNAPSHOT PROXY ARCHITECTURE</span>
        <span>ISOLATED CAMERA PERIMETER</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative items-stretch">
        {/* Node 1: Client Browser */}
        <div className={`p-3.5 border transition-all duration-200 flex flex-col justify-between gap-2 ${
          packetStage === 0 || packetStage === 1 ? 'bg-surface border-secondary' : 'bg-paper-raised border-line'
        }`}>
          <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted">
            <span>ORIGIN</span>
            <span className="material-symbols-outlined text-[14px]">laptop</span>
          </div>
          <div>
            <div className="text-xs font-bold text-primary font-mono uppercase">Client Web Browser</div>
            <div className="text-[11px] text-ink-muted mt-0.5">HTTPS snapshot request with JWT token</div>
          </div>
          <div className="text-[10px] font-mono text-secondary">PORT 443 (EXTERNAL)</div>
        </div>

        {/* Node 2: Authenticated Proxy */}
        <div className={`p-3.5 border transition-all duration-300 flex flex-col justify-between gap-2 relative ${
          allowlistFlashing
            ? 'bg-emerald-50 border-status-success ring-2 ring-status-success/30'
            : packetStage >= 2
            ? 'bg-surface border-secondary'
            : 'bg-paper-raised border-line'
        }`}>
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-ink-muted">GATEWAY</span>
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
              allowlistFlashing ? 'bg-status-success text-white animate-pulse' : 'bg-paper-sunken text-ink-muted'
            }`}>
              {allowlistFlashing ? 'ALLOWLIST PASS ✓' : 'ALLOWLIST CHECK'}
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-primary font-mono uppercase">FastAPI Secure Proxy</div>
            <div className="text-[11px] text-ink-muted mt-0.5">
              Validates camera_id against allowlist; blocks direct LAN probes.
            </div>
          </div>
          <div className="text-[10px] font-mono text-status-success font-semibold">100% ISOLATED BRIDGE</div>
        </div>

        {/* Node 3: Private LAN Camera */}
        <div className={`p-3.5 border transition-all duration-200 flex flex-col justify-between gap-2 ${
          packetStage === 3 ? 'bg-surface border-status-success' : 'bg-paper-raised border-line'
        }`}>
          <div className="flex justify-between items-center text-[10px] font-mono text-ink-muted">
            <span>INTERNAL</span>
            <span className="material-symbols-outlined text-[14px]">videocam</span>
          </div>
          <div>
            <div className="text-xs font-bold text-primary font-mono uppercase">Internal LAN Camera</div>
            <div className="text-[11px] text-ink-muted mt-0.5">1080p RTSP/HTTP feed (192.168.x.x)</div>
          </div>
          <div className="text-[10px] font-mono text-ink-muted">ZERO PUBLIC EXPOSURE</div>
        </div>
      </div>
    </div>
  );
}
