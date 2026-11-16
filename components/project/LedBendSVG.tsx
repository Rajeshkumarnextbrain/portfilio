'use client';

import React from 'react';
import { CountUp } from '@/components/motion/CountUp';

// components/project/LedBendSVG.tsx
type Props = {
  angle: number;
  radius: number;
  top: number;
  bottom: number;
  ok: boolean;
  step?: number;
  loopKey?: number;
  motionOK?: boolean;
};

const S = 16; // viewBox units per mm

export function LedBendSVG({
  angle,
  radius,
  top,
  bottom,
  ok,
  step = 4,
  loopKey = 0,
  motionOK = true,
}: Props) {
  const st = ok ? '#1F8A4C' : '#D32F2F';
  const val = ok ? '#5ED38B' : '#FF7A7A';
  const ri = radius * S;
  const ro = ri + 40; // inner / outer lead radius
  const xiv = 272 + top * S; // inner leg x (flange -> first leg)
  const cx = xiv - ri;
  const cy = 140 + ri; // bend centre
  const th = ((180 - angle) * Math.PI) / 180; // heading turn
  const tipY = 100 + bottom * S;

  const lead = (yAxis: number, r: number) => {
    const ex = cx + r * Math.sin(th);
    const ey = cy - r * Math.cos(th);
    const L = (tipY - ey) / Math.sin(th);
    const tx = ex + L * Math.cos(th);
    const pts: [number, number, number, number][] = [[284, yAxis, 0, -1]];
    for (let a = 0; a <= (th * 180) / Math.PI; a += 22) {
      const ar = (a * Math.PI) / 180;
      pts.push([cx + r * Math.sin(ar), cy - r * Math.cos(ar), Math.sin(ar), -Math.cos(ar)]);
    }
    [0.2, 0.45, 0.7, 0.95].forEach((k) =>
      pts.push([ex + (tx - ex) * k, ey + (tipY - ey) * k, -Math.sin(th), Math.cos(th)])
    );
    return { d: `M272 ${yAxis} H${cx} A${r} ${r} 0 0 1 ${ex} ${ey} L${tx} ${tipY}`, tx, pts };
  };

  const out = lead(100, ro);
  const inn = lead(140, ri);
  const xbot = Math.max(out.tx, inn.tx) + 46;
  const ghost = (yAxis: number, r: number) =>
    `M272 ${yAxis} H${cx} A${r} ${r} 0 0 1 ${cx + r} ${cy} L${cx + r} ${tipY}`;

  const Chip = ({
    x,
    y,
    w,
    label,
    rawVal,
    unit,
    decimals = 2,
  }: {
    x: number;
    y: number;
    w: number;
    label: string;
    rawVal: number;
    unit: string;
    decimals?: number;
  }) => {
    const isCounted = step >= 2 || !motionOK;
    return (
      <g>
        <rect x={x} y={y} width={w} height="42" rx="3" fill="#14130F" />
        <text
          x={x + 10}
          y={y + 16}
          fontSize="10"
          fill="#F5F2EC"
          fillOpacity=".75"
          letterSpacing="1"
        >
          {label}
        </text>
        <foreignObject x={x + 8} y={y + 18} width={w - 12} height="22">
          <div
            style={{ color: val, fontFamily: 'var(--font-space-mono), monospace' }}
            className="text-[16px] font-bold leading-none flex items-center select-none"
          >
            {isCounted ? (
              <CountUp
                key={`${loopKey}-${label}`}
                value={`${rawVal.toFixed(decimals)}${unit}`}
                duration={0.6}
              />
            ) : (
              `0.${'0'.repeat(decimals)}${unit}`
            )}
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-full aspect-[2/1] select-none"
      role="img"
      aria-label="Backlit side view of an LED with 90 degree bent leads"
      fontFamily="var(--font-space-mono), monospace"
    >
      <defs>
        <linearGradient id="led-bl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6F3EA" />
          <stop offset="1" stopColor="#DCD8CA" />
        </linearGradient>
        <linearGradient id="led-sil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34312A" />
          <stop offset=".5" stopColor="#1B1A16" />
          <stop offset="1" stopColor="#12110E" />
        </linearGradient>
      </defs>

      <rect width="800" height="400" fill="#14130F" />
      <rect x="24" y="24" width="752" height="352" fill="url(#led-bl)" />
      <path
        d="M16 40V16h24 M760 16h24v24 M784 360v24h-24 M40 384H16v-24"
        stroke="#FF8A5C"
        strokeWidth="2"
        fill="none"
      />
      <text x="40" y="48" fontSize="11" fill="#14130F" fillOpacity=".6">
        BACKLIGHT 100% · TELECENTRIC 0.016 mm/px
      </text>

      {/* (a) Sweeping vertical scan line across backlit field */}
      {motionOK && (
        <g key={loopKey} className="animate-led-scan pointer-events-none">
          <rect x="24" y="24" width="2" height="352" fill={st} opacity="0.85" />
          <rect x="24" y="24" width="8" height="352" fill={st} opacity="0.25" />
        </g>
      )}

      <g transform="translate(150 0)">
        {/* LED body: dome + cylinder + flange */}
        <g fill="url(#led-sil)" stroke="#14130F">
          <path d="M190 80 H262 V160 H190 A40 40 0 0 1 190 80 Z" />
          <rect x="262" y="73" width="10" height="94" rx="1" />
        </g>
        <path
          d="M178 90 A32 32 0 0 0 160 112"
          stroke="#fff"
          strokeOpacity=".25"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* leads */}
        <path d={out.d} fill="none" stroke="#14130F" strokeWidth="8" />
        <path d={inn.d} fill="none" stroke="#14130F" strokeWidth="8" />

        {/* nominal 90° ghost (reject only) */}
        {!ok &&
          [ghost(100, ro), ghost(140, ri)].map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#1F8A4C"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
          ))}

        {/* (b) Edge-detection points (animate in as scan line sweeps) */}
        {[...out.pts, ...inn.pts].flatMap(([x, y, nx, ny], i) =>
          [1, -1].map((s) => {
            const delay = Math.max(0, Math.min(1.2, ((150 + x - 250) / 400) * 0.8));
            return (
              <circle
                key={`${i}${s}`}
                className="edge-pt"
                cx={x + s * 4 * nx}
                cy={y + s * 4 * ny}
                r="2"
                fill={st}
                style={{
                  animation:
                    motionOK && step >= 1
                      ? `edgePtFadeIn 0.3s ease-out ${delay.toFixed(2)}s both`
                      : undefined,
                  opacity: !motionOK || step >= 1 ? 0.95 : 0,
                }}
              />
            );
          })
        )}

        {/* TOP dimension (flange -> first leg) */}
        <line
          x1="272"
          y1="170"
          x2="272"
          y2="212"
          stroke="#14130F"
          strokeOpacity=".5"
          strokeDasharray="3 3"
        />
        <path
          d={`M272 204H${xiv - 4} M272 198v12 M${xiv - 4} 198v12`}
          stroke="#14130F"
          strokeWidth="1.5"
        />

        {/* angle marker */}
        <path
          d={`M${xiv - 20} 140 A20 20 0 0 0 ${xiv} 160`}
          fill="none"
          stroke="#14130F"
          strokeWidth="1.5"
        />

        {/* BOTTOM dimension */}
        <path
          d={`M${out.tx + 6} 100H${xbot + 5} M${out.tx + 6} ${tipY}H${xbot + 5}`}
          stroke="#14130F"
          strokeOpacity=".5"
          strokeDasharray="3 3"
        />
        <path
          d={`M${xbot} 100V${tipY} M${xbot - 5} 100h10 M${xbot - 5} ${tipY}h10`}
          stroke="#14130F"
          strokeWidth="1.5"
        />
      </g>

      {/* leaders */}
      <g stroke="#14130F" strokeOpacity=".7" fill="none">
        <path d={`M${150 + xiv - 14} 152 L${150 + xiv + 60} 62 H600`} />
        <path d={`M${150 + cx + ro * 0.707} ${cy - ro * 0.707} L560 150 H600`} />
        <path d={`M${150 + xbot} ${100 + (bottom * S) / 2} H600`} />
        <path d="M395 214 H422" />
      </g>

      {/* (c) Four Dimension Chips */}
      <Chip
        x={600}
        y={42}
        w={150}
        label="BEND ANGLE"
        rawVal={angle}
        unit="°"
        decimals={2}
      />
      <Chip
        x={600}
        y={130}
        w={150}
        label="CORNER RADIUS"
        rawVal={radius}
        unit=" mm"
        decimals={3}
      />
      <Chip
        x={600}
        y={Math.round(100 + (bottom * S) / 2 - 21)}
        w={150}
        label="BOTTOM DIST"
        rawVal={bottom}
        unit=" mm"
        decimals={2}
      />
      <Chip
        x={215}
        y={190}
        w={180}
        label="TOP DIST"
        rawVal={top}
        unit=" mm"
        decimals={3}
      />

      {/* (d) PASS / REJECT Stamp */}
      {(step >= 3 || !motionOK) && (
        <g className="transition-opacity duration-300 select-none">
          <rect x="610" y="332" width="140" height="30" rx="3" fill="#14130F" stroke={st} strokeWidth="2" />
          <text
            x="680"
            y="352"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill={st}
          >
            {ok ? '✓ PASS' : '✕ REJECT'}
          </text>
        </g>
      )}
    </svg>
  );
}
