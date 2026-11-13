'use client';

import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import { EASING, TIMING } from '@/lib/motion';
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          return;
        }
      }
      if (sections[0]) {
        setActiveId(sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary origin-left"
              />
            )}
          </a>
        );
      })}
    </div>
  );
}
