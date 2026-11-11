'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/' && typeof window !== 'undefined' && window.location.hash === href.replace('/', '');
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-variant/40">
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md min-w-max">
          <Link className="flex items-center gap-space-sm" href="/">
            <img
              alt="Rajesh Kumar S Monogram Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WEzOKc-zZxWvBRVFjDmoiMVl89en19Q0Qgoi_Pn6DEJJm6gxVH3o6NUqJxcEKr6HCr79Jp1C8TIv7XF8K1cKjoB8vJKhPVSJEZNgFU0FPCz757fIK8PcwhRwU7QhgCKh1zLGevV4ipcXThS7V8A5X_zReYGoOFcFUtx1f7Jo6uEVDeea_zRuW0BeiUOCNRdC5i5SuDhDDzcrasxkBRIbQ0VBqFUC2SF9GApwMxt8La3g"
            />
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight font-semibold">
              Rajesh Kumar S
            </span>
          </Link>
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded border border-outline-variant/60 bg-surface-container-low font-mono-label text-caption text-primary tracking-wide">
            AI Engineer · Bangalore
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-1 transition-colors text-body-sm font-body-sm ${
                isActive(item.href)
                  ? 'text-primary font-semibold border-b border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden items-center">
          <button
            aria-label="Toggle Menu"
            className="p-2 rounded-lg bg-surface-container-low border border-outline-variant/60 text-on-surface hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-mono-code text-body-sm font-semibold hover:bg-primary transition-all active:scale-95 shadow-[0_0_24px_rgba(118,185,0,0.15)]"
            href="/contact"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
              download
            </span>
            <span>Download Resume</span>
          </a>
          <div className="hidden sm:flex items-center pl-space-xs">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant/80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD5LjWkd4oW4bbBoxWCmxqxY0YT6ekt-hXnQSNNv4GdclluOzKFQncMggvamDZbdWT2XNBxXg4cZlMZ17zTWqSKk5hwdJCC6axpJ8KH4fzUlXCkDpyT32JZMEIOqSUrwt5hKLfIt33OrBZpumZTn-7xYYfuwdOK7gudBo6r0Nq7zKyCX0mZlNnisGXeTvhs0ZiLGh3PwgHhubgOEVE645fYfPwCtDSeofDCND7Uy2F"
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 border-b border-surface-variant/40 px-gutter py-4 transition-all">
          <div className="flex flex-col gap-3 font-mono-code text-body-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-semibold'
                    : 'text-secondary hover:text-on-surface'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-surface-variant/40">
              <Link
                className="inline-flex items-center gap-2 text-primary text-caption font-semibold"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                  download
                </span>
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
