'use client';

import { useState, useEffect } from 'react';

export default function ProjectTOC({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Mobile Sticky Section Bar */}
      <div className="xl:hidden sticky top-16 z-20 w-full bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant/30 py-2.5 px-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-outline">Section:</span>
            <span className="text-xs font-mono font-semibold text-primary truncate max-w-[180px] sm:max-w-xs">
              {sections.find((s) => s.id === activeId)?.label || 'Overview'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container border border-outline-variant/50 text-xs font-mono text-on-surface hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle sections table of contents"
          >
            <span>Jump to</span>
            <span className={`material-symbols-outlined text-[16px] transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true">
              expand_more
            </span>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Mobile table of contents"
            className="mt-2.5 p-2 rounded-xl bg-surface-container border border-outline-variant/50 shadow-xl max-h-72 overflow-y-auto space-y-1"
          >
            {sections.map((item) => {
              const isCurrent = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                    isCurrent
                      ? 'bg-primary/10 text-primary font-semibold border border-primary/30'
                      : 'text-secondary hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <aside
        aria-label="Page Table of Contents"
        className="hidden xl:block w-64 shrink-0 sticky top-28 self-start pr-4 space-y-4"
      >
        <div className="text-xs font-mono uppercase tracking-wider text-outline font-semibold">
          On This Page
        </div>
        <nav className="space-y-1 border-l-2 border-outline-variant/30 pl-3">
          {sections.map((item) => {
            const isCurrent = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block py-1.5 text-xs font-sans transition-colors relative -left-[14px] pl-3 border-l-2 ${
                  isCurrent
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-secondary hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-outline-variant/30">
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
          >
            <span>Discuss this project &rarr;</span>
          </a>
        </div>
      </aside>
    </>
  );
}
