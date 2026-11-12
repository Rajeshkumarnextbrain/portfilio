'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Projects', href: '/#projects', icon: 'dataset' },
    { label: 'Experience', href: '/experience', icon: 'history' },
    { label: 'Contact', href: '/contact', icon: 'mail' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/' && typeof window !== 'undefined' && window.location.hash === href.replace('/', '');
    return pathname === href;
  };

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  const handleLogoClick = (e) => {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close mobile menu on resize to desktop or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-surface-variant/40">
      <div suppressHydrationWarning className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo and Brand */}
        <div suppressHydrationWarning className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link className="flex items-center gap-2 sm:gap-2.5 min-w-0 group" href="/" onClick={handleLogoClick}>
            <img
              alt="Rajesh Kumar S Monogram Logo"
              className="h-7 sm:h-8 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WEzOKc-zZxWvBRVFjDmoiMVl89en19Q0Qgoi_Pn6DEJJm6gxVH3o6NUqJxcEKr6HCr79Jp1C8TIv7XF8K1cKjoB8vJKhPVSJEZNgFU0FPCz757fIK8PcwhRwU7QhgCKh1zLGevV4ipcXThS7V8A5X_zReYGoOFcFUtx1f7Jo6uEVDeea_zRuW0BeiUOCNRdC5i5SuDhDDzcrasxkBRIbQ0VBqFUC2SF9GApwMxt8La3g"
            />
            <span className="font-headline-md text-base sm:text-lg text-on-surface tracking-tight font-semibold truncate group-hover:text-primary transition-colors">
              Rajesh Kumar S
            </span>
          </Link>
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded border border-outline-variant/60 bg-surface-container-low font-mono text-[11px] text-primary tracking-wide shrink-0">
            AI Engineer · Bangalore
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`py-1 transition-colors text-body-sm font-body-sm ${
                isActive(item.href)
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side items */}
        <div suppressHydrationWarning className="flex items-center gap-2 sm:gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all active:scale-95 shadow-[0_0_24px_rgba(118,185,0,0.15)]"
            href="/contact"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
              download
            </span>
            <span>Resume</span>
          </a>
          <div suppressHydrationWarning className="hidden sm:flex items-center">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant/80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD5LjWkd4oW4bbBoxWCmxqxY0YT6ekt-hXnQSNNv4GdclluOzKFQncMggvamDZbdWT2XNBxXg4cZlMZ17zTWqSKk5hwdJCC6axpJ8KH4fzUlXCkDpyT32JZMEIOqSUrwt5hKLfIt33OrBZpumZTn-7xYYfuwdOK7gudBo6r0Nq7zKyCX0mZlNnisGXeTvhs0ZiLGh3PwgHhubgOEVE645fYfPwCtDSeofDCND7Uy2F"
            />
          </div>

          {/* Mobile hamburger button */}
          <button
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden p-2 rounded-lg bg-surface-container-low border border-outline-variant/60 text-on-surface hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 active:scale-95 shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[22px] flex items-center justify-center">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-surface-variant/60 px-4 sm:px-6 py-4 shadow-2xl transition-all max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-2 font-mono-code text-body-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                  isActive(item.href)
                    ? 'text-primary font-semibold bg-surface-container border border-primary/20'
                    : 'text-secondary hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}

            <div className="pt-3 mt-1 border-t border-surface-variant/40 flex flex-col gap-2">
              <Link
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-xs font-semibold hover:bg-primary transition-all active:scale-[0.98] shadow-sm text-center"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                  download
                </span>
                <span>Download Full Resume</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code text-xs">
                <a
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:text-primary text-secondary transition-colors"
                  href="https://github.com/rajesh-kumar-s"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    code
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-surface-container-low border border-outline-variant/40 hover:text-primary text-secondary transition-colors"
                  href="https://linkedin.com/in/rajesh-kumar-ai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    link
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
