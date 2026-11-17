import React from 'react';

type Props = {
  rotation: number;          // 0–360 (deg)
  crackVisible: boolean;     // true only when the cracked land faces the camera
  lengthMm?: number;         // 117.25
  diameterMm?: number;       // 8
  fluteMm?: number;          // 72.8
  helixDeg?: number;         // 30
  pointDeg?: number;         // 118
  viewBox?: string;
};

export function DrillTopSVG({
  rotation,
  crackVisible,
  lengthMm = 117.25,
  diameterMm = 8,
  fluteMm = 72.8,
  helixDeg = 30,
  pointDeg = 118,
  viewBox = "0 0 800 320",
}: Props) {
  const S = 5.6, x0 = 70, cy = 165;
  const tip = x0 + lengthMm * S, R = (diameterMm * S) / 2;
  const cone = R / Math.tan(((pointDeg / 2) * Math.PI) / 180);
  const xf = tip - fluteMm * S;
  const P = 130, band = 58, dx = 100;
  const shift = (rotation / 360) * 2 * P;               // two flutes per turn
  const outline = `M${x0} ${cy - R} H${tip - cone} L${tip} ${cy} L${tip - cone} ${cy + R} H${x0} Z`;
  const n = Math.ceil((tip - xf) / P) + 6;
  const bands = Array.from({ length: n }, (_, i) => xf - 2 * P + (i - 3) * P + shift);
  const a = ((rotation - 90) * Math.PI) / 180;

  const Chip = ({ x, y, w, label, value }: { x: number; y: number; w: number; label: string; value: string }) => (
    <g>
      <rect x={x} y={y} width={w} height="38" rx="3" fill="#0B0A08" stroke="#F5F2EC" strokeOpacity=".25" />
      <text x={x + 10} y={y + 15} fontSize="10" fill="#F5F2EC" fillOpacity=".8" letterSpacing="1">{label}</text>
      <text x={x + 10} y={y + 31} fontSize="15" fontWeight="bold" fill="#FF8A5C">{value}</text>
    </g>
  );

  return (
    <svg viewBox={viewBox} className="w-full h-full" role="img"
         aria-label={`Side view of a twist drill at ${rotation} degrees rotation`}
         fontFamily="var(--font-space-mono), monospace">
      <defs>
        <linearGradient id="dt2-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D2D5D9" /><stop offset=".35" stopColor="#9AA0A7" /><stop offset="1" stopColor="#4F555C" />
        </linearGradient>
        <linearGradient id="dt2-flute" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#27465A" /><stop offset="1" stopColor="#0C1823" />
        </linearGradient>
        <linearGradient id="dt2-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" /><stop offset=".3" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".35" />
        </linearGradient>
        <clipPath id="dt2-bit"><path d={outline} /></clipPath>
        <clipPath id="dt2-fluted"><rect x={xf} y={cy - R} width={tip - xf} height={2 * R} /></clipPath>
      </defs>

      {/* bit */}
      <path d={outline} fill="url(#dt2-steel)" />
      <g clipPath="url(#dt2-bit)">
        <g clipPath="url(#dt2-fluted)">
          {bands.map((bx, i) => (
            <polygon key={i} fill="url(#dt2-flute)"
              points={`${bx},${cy - R} ${bx + band},${cy - R} ${bx + band + dx},${cy + R} ${bx + dx},${cy + R}`} />
          ))}
        </g>
        <rect x={x0} y={cy - R} width={tip - x0} height={2 * R} fill="url(#dt2-shade)" />
      </g>
      <path d={outline} fill="none" stroke="#F5F2EC" strokeOpacity=".55" />
      <line x1={xf} y1={cy - R} x2={xf} y2={cy + R} stroke="#F5F2EC" strokeOpacity=".25" strokeDasharray="3 3" />
      
      <text x={x0 + 110} y={cy + 4} fontSize="11" fill="#14130F" fillOpacity=".7" letterSpacing="3">SHANK Ø{diameterMm.toFixed(3)}</text>

      {/* YOLOv7 detection: only while the cracked land faces the camera */}
      {crackVisible && (
        <g>
          <path d="M408 154 l8 10 -6 8 9 11" fill="none" stroke="#EF4444" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="392" y="140" width="64" height="50" fill="rgba(239,68,68,.12)" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M392 150v-10h10 M446 140h10v10 M456 180v10h-10 M402 190h-10v-10" fill="none" stroke="#EF4444" strokeWidth="2.5" />
          {/* moved above bounding box (y ≈ 114) */}
          <rect x="386" y="114" width="176" height="22" rx="3" fill="#EF4444" />
          <text x="394" y="129" fontSize="12" fontWeight="bold" fill="#fff">land_crack 0.84 · 0.8 mm</text>
        </g>
      )}

      {/* flute length */}
      <path d={`M${xf} ${cy - R - 6}V92 M${tip} ${cy}V92 M${xf} 100H${tip}`} stroke="#F5F2EC" strokeOpacity=".7" fill="none" />
      <path d={`M${xf} 100l7-4v8z M${tip} 100l-7-4v8z`} fill="#F5F2EC" fillOpacity=".7" />
      <Chip x={(xf + tip) / 2 - 85} y={50} w={170} label="FLUTE LENGTH" value={`${fluteMm.toFixed(2)} mm`} />

      {/* helix angle: moved to x = xf + 20, y = 198 with a short leader up to flute section */}
      <Chip x={xf + 20} y={198} w={125} label="HELIX ANGLE" value={`${helixDeg.toFixed(1)}°`} />
      <path d={`M${xf + 45} 198 V${cy + R + 1}`} stroke="#F5F2EC" strokeOpacity=".6" fill="none" />

      {/* overall length */}
      <path d={`M${x0} ${cy + R + 6}V252 M${tip} ${cy + 6}V252 M${x0} 244H${tip}`} stroke="#F5F2EC" strokeOpacity=".7" fill="none" />
      <path d={`M${x0} 244l7-4v8z M${tip} 244l-7-4v8z`} fill="#F5F2EC" fillOpacity=".7" />
      <Chip x={(x0 + tip) / 2 - 100} y={262} w={200} label="OVERALL LENGTH" value={`${lengthMm.toFixed(2)} mm`} />

      {/* point angle */}
      <text x={tip + 8} y={cy - 4} fontSize="10" fill="#F5F2EC" fillOpacity=".8" letterSpacing="1">POINT</text>
      <text x={tip + 8} y={cy + 14} fontSize="15" fontWeight="bold" fill="#FF8A5C">{pointDeg}°</text>

      {/* rotation dial with ROT text */}
      <circle cx="58" cy="52" r="20" fill="none" stroke="#F5F2EC" strokeOpacity=".4" />
      <path d={`M58 52L${58 + 17 * Math.cos(a)} ${52 + 17 * Math.sin(a)}`} stroke="#FF8A5C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="58" cy="52" r="2.5" fill="#FF8A5C" />
      <text x="88" y="56" fontSize="11" fontWeight="bold" fill="#FF8A5C" letterSpacing="1">ROT {rotation}°</text>

      {/* mm calibration ruler along bottom edge */}
      <g>
        <line x1={x0} y1="305" x2={x0 + 120 * S} y2="305" stroke="#F5F2EC" strokeOpacity=".3" strokeWidth="1" />
        {Array.from({ length: 25 }, (_, i) => {
          const mm = i * 5;
          const rx = x0 + mm * S;
          const isMajor = mm % 20 === 0;
          return (
            <g key={mm}>
              <line
                x1={rx}
                y1="305"
                x2={rx}
                y2={isMajor ? 311 : 308}
                stroke="#F5F2EC"
                strokeOpacity={isMajor ? 0.6 : 0.25}
                strokeWidth="1"
              />
              {isMajor && (
                <text
                  x={rx}
                  y="318"
                  fontSize="9"
                  fill="#F5F2EC"
                  fillOpacity="0.6"
                  textAnchor="middle"
                >
                  {mm}
                </text>
              )}
            </g>
          );
        })}
        <text
          x={x0 + 120 * S + 14}
          y="318"
          fontSize="9"
          fill="#F5F2EC"
          fillOpacity="0.4"
          textAnchor="middle"
        >
          mm
        </text>
      </g>
    </svg>
  );
}
