'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IDENTITY, CONTACT_INFO } from '../content/facts';
import { ScrollProgress } from './motion/ScrollProgress';
import Icon from './Icon';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/#projects', label: 'PROJECTS' },
    { href: '/experience', label: 'EXPERIENCE' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const handleNavClick = (e, href) => {
    if (href === '/#projects' && pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          <span className="hidden sm:inline-block text-outline-variant font-label-timecode text-xs">|</span>
          <span className="hidden sm:inline-block font-label-sm text-[13px] uppercase text-ink-muted tracking-wider">
            AI ENGINEER &amp; TEAM LEAD
          </span>
        </Link>

        {/* Right: Nav Links + Resume + Email Me (Matching user requested design) */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 font-label-timecode text-[13px] sm:text-sm uppercase tracking-wider">
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors group flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary ${
                    isActive ? 'text-primary font-bold' : 'text-ink-muted hover:text-primary'
                  }`}
                >
                  {/* Active Link Orange Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  )}
                  <span>{link.label}</span>
                  {/* Hover & Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left transition-transform duration-150 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Resume Outline Pill Button */}
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 border border-primary hover:bg-paper-raised text-primary font-label-timecode text-[13px] uppercase tracking-wider rounded-full transition-all duration-150 active:scale-[0.97] group"
          >
            <span>RESUME</span>
            <Icon name="download" className="text-[15px] transition-transform duration-150 group-hover:translate-y-[2px]" />
          </a>

          {/* Email Me Solid Orange Pill Button */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 py-1 sm:px-5 sm:py-1.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-xs sm:text-[13px] uppercase font-bold tracking-wider rounded-full transition-all duration-150 shadow-sm shrink-0 active:scale-[0.97] group"
          >
            <span>EMAIL ME</span>
            <Icon name="arrow_forward" className="text-[14px] sm:text-[15px] transition-transform duration-150 group-hover:translate-x-[2px]" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-full bg-surface border-b border-line px-4 py-3 flex flex-col gap-2 font-label-timecode text-xs uppercase animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="py-2 border-b border-line/40 text-primary font-medium hover:text-secondary flex items-center justify-between"
            >
              <span>{link.label}</span>
              <Icon name="arrow_forward" className="text-[14px]" />
            </Link>
          ))}
          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 border-b border-line/40 text-primary font-semibold flex items-center justify-between"
          >
            <span>RESUME (PDF)</span>
            <Icon name="download" className="text-[14px]" />
          </a>
        </div>
      )}

      {/* Thin orange scroll progress bar directly under the header */}
      <ScrollProgress />
    </header>
  );
}
