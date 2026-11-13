'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [timecode, setTimecode] = useState('00:00:12:08');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const f = String(Math.floor(now.getMilliseconds() / 40)).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-line">
      <div className="h-16 w-full px-space-md lg:px-space-xl flex items-center justify-between">
        {/* Left: Monogram + Identity */}
        <Link href="/" className="flex items-center gap-space-sm group">
          <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center font-label-timecode font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
            RK
          </div>
          <span className="font-label-timecode text-label-timecode uppercase tracking-wider text-primary font-bold">
            RAJESH KUMAR S
          </span>
          <span className="hidden sm:inline-block text-outline-variant font-label-timecode text-label-timecode">|</span>
          <span className="hidden sm:inline-block font-label-sm text-label-sm uppercase text-ink-muted tracking-widest">
            SR. AI ENGINEER
          </span>
        </Link>

        {/* Center: Live REC Beacon & Timecode */}
        <div className="hidden sm:flex items-center gap-space-sm bg-surface-container px-space-sm py-1 border border-line">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-rec-blink"></span>
          <span className="font-label-timecode text-label-timecode uppercase text-on-surface font-medium">REC</span>
          <span className="font-label-timecode text-label-timecode text-ink-muted">{timecode}</span>
        </div>

        {/* Right: Nav Links + Hire CTA */}
        <div className="flex items-center gap-space-md">
          <nav className="flex items-center gap-space-sm sm:gap-space-md font-label-timecode text-label-timecode uppercase tracking-wider">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === '/' ? 'text-primary font-bold border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Work
            </Link>
            <Link
              href="/experience"
              className={`transition-colors ${
                pathname === '/experience' ? 'text-primary font-bold border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Playback
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === '/contact' ? 'text-primary font-bold border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Dispatch
            </Link>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-md py-1.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-label-timecode uppercase tracking-wider rounded-full transition-colors shadow-sm"
          >
            Hire me
          </Link>
        </div>
      </div>
    </header>
  );
}
