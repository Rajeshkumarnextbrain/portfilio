'use client';

import React, { useEffect, useState, useRef } from 'react';
import { m } from 'framer-motion';
import { useMotionOK } from '@/lib/useMotionOK';

export interface JumpSection {
  id: string;
  label: string;
}

interface StickyJumpBarProps {
  sections: JumpSection[];
  className?: string;
}

export function StickyJumpBar({ sections, className = '' }: StickyJumpBarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');
  const motionOK = useMotionOK();
  const intersectingMap = useRef<Map<string, boolean>>(new Map());

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingMap.current.set(entry.target.id, true);
          } else {
            intersectingMap.current.delete(entry.target.id);
          }
        });

        // Pick the topmost intersecting section from sections array order
        const visibleSection = sections.find((sec) => intersectingMap.current.has(sec.id));
        if (visibleSection) {
          setActiveId(visibleSection.id);
        }
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-4 text-xs font-label-sm uppercase font-semibold text-ink-muted flex-wrap ${className}`}>
      {sections.map((sec) => {
        const isActive = activeId === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={(e) => scrollTo(e, sec.id)}
            className={`relative py-1 transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary ${
              isActive ? 'text-secondary font-bold' : 'hover:text-primary'
            }`}
          >
            <span>{sec.label}</span>
            {isActive && (
              motionOK ? (
                <m.span
                  layoutId="stickyJumpBarUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              ) : (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left" />
              )
            )}
          </a>
        );
      })}
    </div>
  );
}
