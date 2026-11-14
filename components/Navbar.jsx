'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IDENTITY, CONTACT_INFO } from '../content/facts';
import { ScrollProgress } from './motion/ScrollProgress';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-line">
      <div className="h-16 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-screen-2xl 2xl:max-w-[1640px] mx-auto flex items-center justify-between">
        {/* Left: Monogram + Identity */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" suppressHydrationWarning>
          <span
            className="w-8 h-8 rounded-full border border-primary flex items-center justify-center font-label-timecode font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors text-xs"
            suppressHydrationWarning
          >
            RK
          </span>
          <span className="font-label-timecode text-[13px] uppercase tracking-wider text-primary font-bold">
            {IDENTITY.name}
          </span>
          <span className="hidden md:inline-block text-outline-variant font-label-timecode text-xs">|</span>
          <span className="hidden md:inline-block font-label-sm text-[12px] uppercase text-ink-muted tracking-wider">
            AI Engineer &amp; Team Lead
          </span>
        </Link>

        {/* Right: Nav Links + Resume + Email me */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <nav className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4 font-label-timecode text-[12px] sm:text-[13px] uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : link.href.startsWith('/#')
                  ? false
                  : pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors group flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary ${
                    isActive ? 'text-primary font-bold' : 'text-ink-muted hover:text-primary'
                  }`}
                >
                  {/* Active Link Orange Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  )}
                  <span>{link.label}</span>
                  {/* Hover underline draw (150ms) */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-secondary origin-left transition-transform duration-150 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Resume Link with download nudge */}
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-primary hover:bg-paper-raised text-primary font-label-timecode text-[12px] uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-[14px] transition-transform duration-150 group-hover:translate-y-[2px]">
              download
            </span>
          </a>

          {/* Email Me Button with tap feedback */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center gap-1 px-3.5 sm:px-4 py-1.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-[12px] uppercase tracking-wider rounded-full transition-all duration-150 shadow-sm shrink-0 font-semibold active:scale-[0.97] group"
          >
            <span>Email me</span>
            <span className="material-symbols-outlined text-[14px] transition-transform duration-150 group-hover:translate-x-[2px]">
              arrow_forward
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-full bg-surface border-b border-line px-4 py-3 flex flex-col gap-2 font-label-timecode text-xs uppercase animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${idx * 40}ms` }}
              className="py-2 border-b border-line/40 text-primary font-medium hover:text-secondary flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          ))}
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 text-primary font-semibold flex items-center justify-between"
          >
            <span>Download Resume (PDF)</span>
            <span className="material-symbols-outlined text-[14px]">download</span>
          </a>
        </div>
      )}

      {/* Thin orange scroll progress bar directly under the header (2px) */}
      <ScrollProgress />
    </header>
  );
}
