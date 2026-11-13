'use client';

import React, { useState } from 'react';
import { m } from 'framer-motion';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { useMotionOK } from '@/lib/useMotionOK';

interface SkillGroupItem {
  title: string;
  plainSentence: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillGroups: SkillGroupItem[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const motionOK = useMotionOK();

  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group, idx) => {
        const isHovered = hoveredIndex === idx;

        return (
          <StaggerItem key={group.title}>
            <div
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              className={`p-6 bg-paper-sunken border transition-all duration-200 flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                isHovered ? 'border-secondary shadow-sm' : 'border-line'
              }`}
            >
              <h3 className="font-headline-md text-lg font-bold text-primary">{group.title}</h3>
              <p className="font-body-md text-sm text-secondary font-medium leading-relaxed">
                {group.plainSentence}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
                {group.skills.map((s, chipIdx) => (
                  motionOK ? (
                    <m.span
                      key={s}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{
                        duration: 0.2,
                        delay: chipIdx * 0.03, // 30ms chip stagger
                        ease: 'easeOut',
                      }}
                      className={`px-2.5 py-1 bg-surface border text-xs font-mono transition-colors duration-150 ${
                        isHovered
                          ? 'border-secondary text-secondary font-semibold'
                          : 'border-line text-primary font-medium'
                      }`}
                    >
                      {s}
                    </m.span>
                  ) : (
                    <span
                      key={s}
                      className={`px-2.5 py-1 bg-surface border text-xs font-mono transition-colors duration-150 ${
                        isHovered
                          ? 'border-secondary text-secondary font-semibold'
                          : 'border-line text-primary font-medium'
                      }`}
                    >
                      {s}
                    </span>
                  )
                ))}
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
