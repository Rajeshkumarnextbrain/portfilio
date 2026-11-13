'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IDENTITY, CONTACT_INFO } from '../content/facts';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-line">
      <div className="h-16 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between">
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
            AI Engineer & Team Lead
          </span>
        </Link>

        {/* Right: Nav Links + Resume + Email me */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-4 font-label-timecode text-[12px] sm:text-[13px] uppercase tracking-wider">
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
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-secondary'
                      : 'text-ink-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 border border-primary hover:bg-paper-raised text-primary font-label-timecode text-[12px] uppercase tracking-wider rounded-full transition-colors"
          >
            Resume
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 bg-secondary-container hover:bg-signal-orange-hover text-on-secondary font-label-timecode text-[12px] uppercase tracking-wider rounded-full transition-colors shadow-sm shrink-0 font-semibold"
          >
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
