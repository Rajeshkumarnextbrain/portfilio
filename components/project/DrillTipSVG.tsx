import React from 'react';

// DrillTipSVG.tsx — end-on twist drill point (viewBox 400x400)
export function DrillTipSVG({
  defect = false,
  children,
}: {
  defect?: boolean;
  children?: React.ReactNode;
}) {
  const lip = defect ? '#EF4444' : '#FF8A5C';
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      role="img"
      aria-label="End-on view of a twist drill point"
    >
      <defs>
        <radialGradient id="dt-steel" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#C9CCD0" />
          <stop offset=".6" stopColor="#8E949B" />
          <stop offset="1" stopColor="#5E646B" />
        </radialGradient>
        <linearGradient id="dt-flute" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F3A4D" />
          <stop offset="1" stopColor="#0E1B26" />
        </linearGradient>
        <linearGradient id="scanGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
        <path id="dt-void" d="M22 -14 L115 -96 A150 150 0 0 1 141 51 C112 104 66 96 32 58 Z" />
        <path id="dt-facet" d="M22 -14 L115 -96 A150 150 0 0 0 70 -133 L30 -60 Z" />
      </defs>

      {/* backdrop disc */}
      <circle
        cx="200"
        cy="200"
        r="172"
        fill="#1D1C17"
        stroke="#F5F2EC"
        strokeOpacity=".12"
        strokeDasharray="3 4"
      />

      <g transform="translate(200 200) rotate(-20)">
        <circle r="150" fill="url(#dt-steel)" />
        <use href="#dt-void" fill="url(#dt-flute)" />
        <use href="#dt-void" fill="url(#dt-flute)" transform="rotate(180)" />
        <use href="#dt-facet" fill="#E4E6E8" opacity=".3" />
        <use href="#dt-facet" fill="#E4E6E8" opacity=".3" transform="rotate(180)" />
        <path
          d="M141 51 C112 104 66 96 32 58"
          fill="none"
          stroke="#7FB4D6"
          strokeOpacity=".6"
          strokeWidth="1.5"
        />
        <path
          d="M-141 -51 C-112 -104 -66 -96 -32 -58"
          fill="none"
          stroke="#7FB4D6"
          strokeOpacity=".6"
          strokeWidth="1.5"
        />
        <circle r="150" fill="none" stroke="#F5F2EC" strokeOpacity=".5" strokeWidth="1.5" />
        <line
          x1="22"
          y1="-14"
          x2="115"
          y2="-96"
          stroke={lip}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="-22"
          y1="14"
          x2="-115"
          y2="96"
          stroke="#FF8A5C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="-22"
          y1="14"
          x2="22"
          y2="-14"
          stroke="#FFB08F"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>

      {/* defect marker, drawn OUTSIDE the rotated group so it stays upright */}
      {defect && (
        <g>
          <rect
            x="212"
            y="92"
            width="64"
            height="64"
            fill="rgba(239,68,68,.15)"
            stroke="#EF4444"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M212 108V92h16 M260 92h16v16 M276 140v16h-16 M228 156h-16v-16"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2.5"
          />
        </g>
      )}

      {children}
    </svg>
  );
}
